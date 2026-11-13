#!/usr/bin/env node
// Builds the Casa-Libre listings snapshots for Bolivia, Uruguay, Venezuela and El Salvador:
//   content/data/bo-market.json, uy-market.json, ve-market.json, sv-market.json
// in the same shape as content/data/py-market.json (see lib/market.js and content/COUNTRY_GUIDE.md).
//
// Usage (from the vender-mi-casa folder):
//   node scripts/build-market.mjs <path-to-env-file> [--cc bo,uy,ve,sv] [--out <dir>[,<dir>...]] [--min-city 15] [--no-verify]
// Example:
//   node scripts/build-market.mjs L:/wt-gsc/.env.local
//
// The env file must hold AIROBASE_URL_<CC> and AIROBASE_SECRET_KEY_<CC> for each country (BO, UY, VE, SV). The keys are
// only sent as request headers: never printed, never written to a file.
// Default output: content/data/ of this site AND of ../como-vender-mas-propiedades (both sites use the same files).
//
// READ-ONLY. Only GET requests to the country databases (PostgREST): no POST/PATCH/DELETE, no RPC, no DDL.
// Paraguay is deliberately not supported here (py-market.json is maintained separately; the PY database is off limits).
//
// What counts (same filter as the public marketplace, L:/wt-blog/lib/marketplace.js baseParts()):
//   is_complete = true AND admin_status = 'active'   (public, live listings)
//   for rent = listing_type 'rent'; for sale = any other listing_type.
// Property types (lib/propertyTypeOptions.js keywords, case-insensitive "contains" on property_type):
//   casas = casa/house; departamentos = departamento/depto/apartment/apartamento/flat; duplex = duplex/dúplex;
//   terrenos = terreno/lote/fracci/parcela.
// Price in USD: the listing's price_usd (filled by Casa-Libre when the listing is saved). When price_usd is empty:
//   currency USD -> price; local currency -> price / rate, where rate = the median price/price_usd of that country's own
//   local-currency listings (the rate Casa-Libre itself used). Both rates are written into the file with their source.
// Sanity bounds for price statistics (counts include every listing): sale >= USD 1,000; rent USD 30 to 30,000 a month.
// Statistics: quartiles with linear interpolation; a stat needs at least 5 values, otherwise null (same as PY).
// Cities: city names are normalised (accents, case, aliases, barrios/zones that the listings store as "city" mapped to
// their city, see CITY_RULES); a city is included when it has at least --min-city live listings (default 15: the smallest
// city in the Paraguay snapshot has 19 listings and the next one down was left out).
// casa_libre_pages: the Casa-Libre city path pages that answered 200 to a polite GET (browser user agent, one request
// per second) when the script ran. With --no-verify it uses CL_CITY_PATHS from lib/countries.js instead.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const envPath = args[0] && !args[0].startsWith('--') ? args[0] : null;
const opt = (name, dflt) => { const i = args.indexOf(`--${name}`); return i === -1 ? dflt : args[i + 1]; };
if (!envPath || !fs.existsSync(envPath)) {
  console.error('usage: node scripts/build-market.mjs <path-to-env-file> [--cc bo,uy,ve,sv] [--out dir,...] [--min-city 15] [--no-verify]');
  process.exit(1);
}
const CCS = String(opt('cc', 'bo,uy,ve,sv')).split(',').map((s) => s.trim().toLowerCase()).filter(Boolean);
if (CCS.some((c) => !['bo', 'uy', 've', 'sv'].includes(c))) { console.error('only bo, uy, ve, sv are supported'); process.exit(1); }
const sibling = path.resolve(ROOT, '..', 'como-vender-mas-propiedades', 'content', 'data');
const OUT = opt('out', null) ? opt('out').split(',') : [path.join(ROOT, 'content', 'data'), ...(fs.existsSync(sibling) ? [sibling] : [])];
const MIN_CITY = Number(opt('min-city', 15));
const MIN_STAT = 5;
const VERIFY = !args.includes('--no-verify');
const TODAY = new Date().toISOString().slice(0, 10);

// ---- env (values stay in memory) ----
const env = {};
for (const line of fs.readFileSync(envPath, 'utf8').split(/\r?\n/)) {
  const m = /^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/.exec(line);
  if (m) env[m[1]] = m[2].replace(/^(['"])(.*)\1$/, '$2');
}

// ---- country settings ----
const COUNTRY = {
  bo: { name: 'Bolivia', origin: 'https://casa-libre.com.bo', host: 'casa-libre.com.bo', local: 'BOB', localName: 'bolivianos' },
  uy: { name: 'Uruguay', origin: 'https://uy.casa-libre.com', host: 'uy.casa-libre.com', local: 'UYU', localName: 'pesos uruguayos' },
  ve: { name: 'Venezuela', origin: 'https://casa-libre.com.ve', host: 'casa-libre.com.ve', local: 'VES', localName: 'bolívares' },
  sv: { name: 'El Salvador', origin: 'https://sv.casa-libre.com', host: 'sv.casa-libre.com', local: null, localName: null },
};

// ---- text helpers ----
const fold = (s) => String(s || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/\s+/g, ' ').trim();
const slugify = (s) => fold(s).replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
const SMALL = new Set(['de', 'del', 'la', 'las', 'los', 'el', 'y']);
const titleCase = (s) => String(s).trim().split(/\s+/).map((w, i) => {
  const l = w.toLowerCase();
  return i > 0 && SMALL.has(l) ? l : l.charAt(0).toUpperCase() + l.slice(1);
}).join(' ');
const accents = (s) => (String(s).normalize('NFD').match(/[\u0300-\u036f]/g) || []).length;

// ---- city rules: the listings sometimes store a barrio or zone in `city`. Map those to their city. ----
// Each rule gets folded strings { city, province, hood } and returns a canonical city name or null (= keep the city).
const set = (...a) => new Set(a);
const SCZ_ZONES = set('norte', 'sur', 'este', 'oeste', 'centro', 'equipetrol', 'ciudadelas', 'las palmas');
const LPZ_BARRIOS = set('calacoto', 'alto calacoto', 'sopocachi', 'seguencoma alto', 'obrajes', 'alto obrajes', 'mallasa', 'alto irpavi', 'irpavi', 'san jorge', 'miraflores', 'achumani', 'cota cota');
const CDLC = set('ciudad de la costa', 'solymar', 'lomas de solymar', 'medanos de solymar', 'colinas de solymar', 'parque de solymar', 'montes de solymar', 'el pinar', 'lagomar', 'shangrila', 'san jose de carrasco', 'barra de carrasco');
const NOT_MVD = set('chuy', 'lago merin', 'ciudad de la costa');
const CITY_RULES = {
  bo: ({ city, province }) => {
    if (city === 'santa cruz de la sierra' || city === 'santa cruz') return 'Santa Cruz de la Sierra';
    if (province === 'santa cruz' && SCZ_ZONES.has(city)) return 'Santa Cruz de la Sierra';   // zones of the city as Casa-Libre labels them
    if ((province === 'la paz' || province === 'murillo') && LPZ_BARRIOS.has(city)) return 'La Paz';
    return null;
  },
  uy: ({ city, province, hood }) => {
    if (CDLC.has(city)) return 'Ciudad de la Costa';
    if (city === 'canelones') {                                    // the department, not the city: use the locality
      if (CDLC.has(hood)) return 'Ciudad de la Costa';
      return hood ? titleCase(hood) : 'Canelones';
    }
    if (province === 'montevideo' && !NOT_MVD.has(city)) return 'Montevideo';   // Montevideo barrios
    return null;
  },
  ve: ({ city, province }) => {
    if (province === 'distrito capital' && (city === 'caracas' || city === 'el valle')) return 'Caracas';
    return null;
  },
  sv: () => null,
};
// Canonical spellings for names the data writes without accents or with odd case.
const NAMES = {
  'santa-cruz-de-la-sierra': 'Santa Cruz de la Sierra', 'la-paz': 'La Paz', 'el-alto': 'El Alto', 'potosi': 'Potosí',
  'montevideo': 'Montevideo', 'punta-del-este': 'Punta del Este', 'ciudad-de-la-costa': 'Ciudad de la Costa', 'paysandu': 'Paysandú',
  'colonia-del-sacramento': 'Colonia del Sacramento', 'atlantida': 'Atlántida', 'antiguo-cuscatlan': 'Antiguo Cuscatlán',
  'nuevo-cuscatlan': 'Nuevo Cuscatlán', 'san-jose-villanueva': 'San José Villanueva', 'ahuachapan': 'Ahuachapán', 'san-cristobal': 'San Cristóbal',
};

// ---- property types ----
const TYPE_KW = {
  casas: ['casa', 'house'],
  departamentos: ['departamento', 'depto', 'apartment', 'apartamento', 'flat'],
  duplex: ['duplex', 'dúplex'],
  terrenos: ['terreno', 'lote', 'fracci', 'parcela'],
};
function typeOf(pt) {
  const t = String(pt || '').toLowerCase();
  // order matters: "dúplex" before casa ("casa dúplex"), departamento before casa
  for (const k of ['duplex', 'departamentos', 'terrenos', 'casas']) if (TYPE_KW[k].some((w) => t.includes(w))) return k;
  return 'otro';
}

// ---- stats ----
function quantile(sorted, q) {
  const pos = (sorted.length - 1) * q;
  const lo = Math.floor(pos), hi = Math.ceil(pos);
  return sorted[lo] + (sorted[hi] - sorted[lo]) * (pos - lo);
}
// Converted prices are not exact, so figures are rounded like the PY snapshot: USD 10,000+ to the nearest 500, below that to 10.
const roundUsd = (x) => (x >= 10000 ? Math.round(x / 500) * 500 : Math.round(x / 10) * 10);
function priceStats(values) {
  const v = values.filter((x) => Number.isFinite(x)).sort((a, b) => a - b);
  if (v.length < MIN_STAT) return null;
  return { listings_with_price: v.length, median_usd: roundUsd(quantile(v, 0.5)), p25_usd: roundUsd(quantile(v, 0.25)), p75_usd: roundUsd(quantile(v, 0.75)) };
}
function median(values) {
  const v = values.filter((x) => Number.isFinite(x)).sort((a, b) => a - b);
  return v.length < MIN_STAT ? null : quantile(v, 0.5);
}
const yieldPct = (rent, sale) => (rent && sale ? Math.round((rent.median_usd * 12 / sale.median_usd) * 1000) / 10 : null);
const saleOk = (u) => Number.isFinite(u) && u >= 1000;
const rentOk = (u) => Number.isFinite(u) && u >= 30 && u <= 30000;

// ---- data access (GET only) ----
async function getAll(cc) {
  const U = env[`AIROBASE_URL_${cc.toUpperCase()}`], K = env[`AIROBASE_SECRET_KEY_${cc.toUpperCase()}`];
  if (!U || !K) throw new Error(`missing AIROBASE_URL_${cc.toUpperCase()} / AIROBASE_SECRET_KEY_${cc.toUpperCase()} in the env file`);
  const cols = 'id,listing_type,price,currency,price_usd,property_type,city,province,neighborhood,bedrooms,land_area,covered_area';
  const rows = [];
  for (let off = 0; ; off += 1000) {
    const q = `is_complete=eq.true&admin_status=eq.active&select=${cols}&order=id.asc&limit=1000&offset=${off}`;
    const r = await fetch(`${U}/rest/v1/properties?${q}`, { method: 'GET', headers: { apikey: K, Authorization: `Bearer ${K}`, Accept: 'application/json' } });
    if (!r.ok) throw new Error(`${cc}: PostgREST ${r.status}`);
    const b = await r.json();
    rows.push(...b);
    if (b.length < 1000) break;
  }
  return rows;
}
async function referenceRate(code) {
  if (!code) return null;
  try {
    const r = await fetch('https://open.er-api.com/v6/latest/USD');
    const j = await r.json();
    const rate = Number(j?.rates?.[code]);
    return Number.isFinite(rate) ? { rate: Math.round(rate * 100) / 100, date: new Date(j.time_last_update_unix * 1000).toISOString().slice(0, 10) } : null;
  } catch { return null; }
}

// ---- Casa-Libre path check (polite: browser UA, 1 request per second) ----
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
async function verifyPaths(origin, paths) {
  const ok = [];
  for (const p of paths) {
    let code = 0;
    try { code = (await fetch(origin + p, { method: 'GET', redirect: 'manual', headers: { 'User-Agent': UA, 'Accept-Language': 'es' } })).status; } catch { /* network error = not verified */ }
    console.log(`   ${code} ${p}`);
    if (code === 200) ok.push(p);
    await sleep(1000);
  }
  return ok;
}
const PATH_KINDS = [['alquiler', 'casas'], ['alquiler', 'departamentos'], ['alquiler', 'depositos'], ['alquiler', 'duplex'], ['alquiler', 'locales'], ['alquiler', 'oficinas'],
  ['venta', 'casas'], ['venta', 'departamentos'], ['venta', 'depositos'], ['venta', 'duplex'], ['venta', 'locales'], ['venta', 'oficinas'], ['venta', 'terrenos']];
const sortPaths = (a) => [...a].sort((x, y) => (x.startsWith('/propiedades-en/') - y.startsWith('/propiedades-en/')) || x.localeCompare(y));

// ---- build one country ----
async function build(cc) {
  const C = COUNTRY[cc];
  console.log(`\n== ${C.name}`);
  const rows = await getAll(cc);

  // the rate Casa-Libre used for local-currency listings: median of price / price_usd
  const ratios = rows.filter((r) => C.local && String(r.currency).toUpperCase() === C.local && Number(r.price) > 0 && Number(r.price_usd) > 0)
    .map((r) => Number(r.price) / Number(r.price_usd)).sort((a, b) => a - b);
  const implied = ratios.length ? Math.round(quantile(ratios, 0.5) * 100) / 100 : null;
  const ref = await referenceRate(C.local);
  const convRate = implied ?? ref?.rate ?? null;
  const usdOf = (r) => {
    if (r.price_usd != null && Number(r.price_usd) > 0) return Number(r.price_usd);
    const p = Number(r.price);
    if (!(p > 0)) return null;
    const cur = String(r.currency || 'USD').toUpperCase();
    if (cur === 'USD' || !C.local || cur !== C.local) return p;
    return convRate ? p / convRate : null;
  };

  // group by normalised city
  const groups = new Map();
  for (const r of rows) {
    const f = { city: fold(r.city), province: fold(r.province), hood: fold(r.neighborhood) };
    if (!f.city) continue;
    const canon = CITY_RULES[cc](f) || r.city;
    const slug = slugify(canon);
    if (!slug) continue;
    if (!groups.has(slug)) groups.set(slug, { names: new Map(), rows: [] });
    const g = groups.get(slug);
    g.names.set(canon, (g.names.get(canon) || 0) + 1);
    g.rows.push(r);
  }

  const cities = {};
  const sorted = [...groups.entries()].filter(([, g]) => g.rows.length >= MIN_CITY).sort((a, b) => b[1].rows.length - a[1].rows.length);
  for (const [slug, g] of sorted) {
    const name = NAMES[slug] || titleCase([...g.names.entries()].sort((a, b) => accents(b[0]) - accents(a[0]) || b[1] - a[1])[0][0]);
    const sale = g.rows.filter((r) => r.listing_type !== 'rent');
    const rent = g.rows.filter((r) => r.listing_type === 'rent');
    const ofType = (list, t) => list.filter((r) => typeOf(r.property_type) === t);
    const saleUsd = (t) => ofType(sale, t).map(usdOf).filter(saleOk);
    const rentUsd = (t) => ofType(rent, t).map(usdOf).filter(rentOk);
    const casasV = priceStats(saleUsd('casas'));
    const terrV = priceStats(saleUsd('terrenos'));
    const deptV = priceStats(saleUsd('departamentos'));
    const casasA = priceStats(rentUsd('casas'));
    const deptA = priceStats(rentUsd('departamentos'));
    const m2 = median(ofType(sale, 'terrenos').filter((r) => saleOk(usdOf(r)) && Number(r.land_area) > 0).map((r) => usdOf(r) / Number(r.land_area)));
    const beds = median(ofType(sale, 'casas').map((r) => Number(r.bedrooms)).filter((b) => b > 0));
    cities[slug] = {
      name,
      for_sale: { total: sale.length, casas: ofType(sale, 'casas').length, departamentos: ofType(sale, 'departamentos').length, duplex: ofType(sale, 'duplex').length, terrenos: ofType(sale, 'terrenos').length },
      for_rent: { total: rent.length, casas: ofType(rent, 'casas').length, departamentos: ofType(rent, 'departamentos').length },
      casas_venta_price: casasV,
      terrenos_venta_price: terrV,
      departamentos_venta_price: deptV,
      casas_alquiler_price_month: casasA,
      departamentos_alquiler_price_month: deptA,
      terreno_usd_per_m2_median: m2 == null ? null : Math.round(m2),
      casas_venta_median_bedrooms: beds == null ? null : Math.round(beds),
      casa_gross_rent_yield_pct: yieldPct(casasA, casasV),
      departamento_gross_rent_yield_pct: yieldPct(deptA, deptV),
      casa_libre_pages: [],
    };
  }

  // casa_libre_pages
  let clCity = {};
  try { clCity = (await import(pathToFileURL(path.join(ROOT, 'lib', 'countries.js')).href)).CL_CITY_PATHS || {}; } catch { /* none */ }
  for (const [slug, c] of Object.entries(cities)) {
    if (VERIFY) {
      console.log(` checking Casa-Libre pages for ${c.name}`);
      const cand = [...PATH_KINDS.map(([op, t]) => `/${op}/${t}/${slug}`), `/propiedades-en/${slug}`];
      c.casa_libre_pages = sortPaths(await verifyPaths(C.origin, cand));
    } else {
      c.casa_libre_pages = sortPaths((clCity[cc] || []).filter((p) => p.endsWith(`/${slug}`)));
    }
  }

  const localKey = C.local ? `${C.local.toLowerCase()}_per_usd` : null;
  const out = {
    snapshot_date: TODAY,
    source: `Casa-Libre ${C.name} active listings (asking prices published on ${C.host}; not closing prices)`,
    ...(localKey ? { [localKey]: convRate } : {}),
    total_active: rows.length,
    cities,
    notes: [
      'Asking prices of listings published on Casa-Libre, not closing prices.',
      `Medians and ranges only where at least ${MIN_STAT} listings have a price; null = too few to say.`,
      'gross_rent_yield_pct = median monthly rent x 12 / median sale price, same city and type. A rough comparison of asking prices, not a return on investment.',
      `A city is listed only with at least ${MIN_CITY} active listings. Barrios or zones that listings store as the city are counted in their city (scripts/build-market.mjs, CITY_RULES).`,
      'USD prices are rounded: from USD 10,000 to the nearest 500, below that to the nearest 10. The price per m2 is rounded to the dollar.',
      'Price statistics leave out obvious errors: sale prices under USD 1,000 and monthly rents outside USD 30 to 30,000 (they still count in the listing totals).',
      !C.local
        ? 'All prices are in US dollars, the legal tender: no conversion.'
        : implied != null
          ? `USD figures come from each listing's price_usd. Listings priced in ${C.localName} without price_usd were converted at ${localKey} = ${convRate} (the median price / price_usd of this country's ${ratios.length} ${C.local} listings, i.e. the rate Casa-Libre used when they were saved).${ref ? ` Reference market rate on ${ref.date}: ${ref.rate} ${C.local} per USD (open.er-api.com).` : ''} Any conversion to ${C.localName} is approximate: say so.`
          : `Every listing is priced in US dollars (price_usd). ${localKey} = ${convRate} is only a reference rate (open.er-api.com${ref ? `, ${ref.date}` : ''}); any conversion to ${C.localName} is approximate and moves fast: say so.`,
      'casa_libre_pages = Casa-Libre city pages that answered 200 to a GET when the snapshot was built; link only these (or the filtered search).',
    ],
  };
  for (const dir of OUT) fs.writeFileSync(path.join(dir, `${cc}-market.json`), JSON.stringify(out, null, 2) + '\n');
  console.log(` total_active ${rows.length}; cities: ${Object.entries(cities).map(([s, c]) => `${s} (${c.for_sale.total + c.for_rent.total})`).join(', ') || 'none'}; rate ${localKey || '-'} ${convRate ?? '-'}`);
  const near = [...groups.entries()].filter(([, g]) => g.rows.length < MIN_CITY).sort((a, b) => b[1].rows.length - a[1].rows.length).slice(0, 5);
  console.log(` largest left out: ${near.map(([s, g]) => `${s} (${g.rows.length})`).join(', ')}`);
}

for (const cc of CCS) await build(cc);
console.log(`\nwritten to: ${OUT.join(' , ')}`);
