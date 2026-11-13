// Checks every page in content/pages (Paraguay) and content/pages/<code>/ (other countries) against the rules in
// content/SCHEMA.md and content/COUNTRY_GUIDE.md.
// Errors fail the run (exit 1). Warnings are advice. Run: npm run check
import { readdirSync, readFileSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dir = path.join(root, 'content', 'pages');
const { GUIDES, INFO_PAGES, GROUPS, isRentalSlug } = await import(pathToFileURL(path.join(root, 'lib', 'site.js')).href);
const { COUNTRIES, OTHER_CODES, CL_PATHS, CL_CITY_PATHS, CL_SEARCH: CL_SEARCH_OK, countryOfClUrl } = await import(pathToFileURL(path.join(root, 'lib', 'countries.js')).href);
const INFO = new Set(INFO_PAGES);
const GUIDE_SLUGS = GUIDES.map((g) => g.slug);
const FILE_OF = new Map(GUIDES.map((g) => [g.file || g.slug, g.slug]));
const KNOWN_PATHS = new Set([...[...GUIDE_SLUGS, ...INFO_PAGES].map((s) => (s ? `/${s}/` : '/')), '/guias/']);

// The only outbound destinations allowed (all on Casa-Libre, all checked live).
const CL = 'https://casa-libre.com.py';
const CL_ALLOWED = new Set(['/', '/publicar', '/vender', '/empresas', '/descargar', '/propiedades', '/comprar', '/alquilar',
  '/venta/casas/asuncion', '/venta/departamentos/asuncion', '/alquiler/departamentos/asuncion', '/alquiler/casas/asuncion',
  '/propiedades-en/asuncion', '/como-funciona', '/preguntas-frecuentes', '/guias', '/guias/como-vender-mi-casa', '/nuestra-historia',
].map((p) => CL + p));
CL_ALLOWED.add(CL + '/administracion-de-propiedades');

// …plus Casa-Libre's search with filters applied (city pages link straight to the filtered listings):
// /propiedades?op=venta|alquiler&type=casa|depto|terreno|duplex&q=<city>
const CL_SEARCH = /^https:\/\/casa-libre\.com\.py\/propiedades\?op=(venta|alquiler)&type=(casa|depto|terreno|duplex|comercial|oficina|deposito)(&q=[^&"\s]+)?$/;
const clOk = (h) => CL_ALLOWED.has(String(h)) || CL_ALLOWED.has(String(h).replace(/&amp;/g, '&').replace(/\/$/, '')) || CL_SEARCH.test(String(h).replace(/&amp;/g, '&'));
// …plus every Casa-Libre page that exists in its live sitemap (city listing pages, its own guides):
// content/data/casalibre-links.json, refreshed with the city data.
try {
  const extra = JSON.parse(readFileSync(path.join(root, 'content', 'data', 'casalibre-links.json'), 'utf8')).urls || [];
  for (const u of extra) CL_ALLOWED.add(u.replace(/\/$/, ''));
} catch { /* no data file: the fixed list only */ }

// Other websites, portals, companies and media must not be named.
const NAMES = [/infocasas?/i, /clasipar/i, /nderoga/i, /viviaza/i, /buscocasita/i, /casa ?clic/i, /agentiz/i, /re\/?max/i, /century ?21/i,
  /\bacip\b/i, /capadei/i, /infonegocios/i, /abc color/i, /[uú]ltima hora/i, /facebook/i, /marketplace(?! inmobiliario)/i,
  /instagram/i, /tik ?tok/i, /\bgoogle\b/i, /youtube/i, /mercado ?libre/i, /nexio/i, /ubicaprop/i, /yumblin/i, /zonaprop/i, /inmuebles24/i,
  /homelight/i, /properati/i, /hendyla/i, /buscaescriban[ií]a/i, /holacasa/i, /linkedin/i, /\btwitter\b/i];
const WORDING = [/\bapartamentos?\b/i, /\bnotari[oa]s?\b/i, /\bnotar[ií]as?\b/i, /\bmartilleros?\b/i, /\barriendos?\b/i, /dueño directo/i,
  /compro casas/i, /oferta en efectivo/i, /agregador/i, /—/, /el m[aá]s grande/i, /n[uú]mero uno/i, /\bl[ií]der\b/i];
const BLOCKS = new Set(['p', 'h3', 'ul', 'ol', 'steps', 'table', 'callout', 'example', 'casalibre']);

const strip = (s) => String(s ?? '').replace(/<[^>]+>/g, ' ');
const words = (s) => strip(s).split(/\s+/).filter(Boolean).length;
const hrefs = (s) => [...String(s ?? '').matchAll(/<a\s+href="([^"]+)"/g)].map((m) => m[1]);
const badTags = (s) => [...String(s ?? '').matchAll(/<\/?([a-z0-9]+)[^>]*>/gi)].filter((m) => !['strong', 'em', 'a'].includes(m[1].toLowerCase())).map((m) => m[0]);

// Casa-Libre link cap (decided 2026-11-13, SEO safety: no link-scheme look).
// The template adds 3 Casa-Libre links on every page (header button, footer "Casa-Libre", sticky phone bar)
// and 1 more on city pages (the city listings button); `cta` and `closing` add 2. The body adds the rest.
// Every rendered page stays at or under PAGE_MAX Casa-Libre links.
const PAGE_MAX = 10;
const BODY_MAX = 4;          // links in the body: inline anchors + the one casalibre block button
const BODY_MIN = 2;
const TEMPLATE_LINKS = 3;
const BLOCKS_MAX = 1;        // casalibre blocks per page
const CITY_PAGE = /^(vender-casa|vender-terreno|alquiler-de-casas)-en-/;
// Rental pages link to rental listings and pages, sale pages to sale ones (neutral pages fit both).
// (the list of rental pages is RENT_PAGES in lib/site.js)
const isRentUrl = (h) => /\/alquiler\/|op=alquiler|\/alquilar$|administracion-de-propiedades|como-alquilar/.test(h);
const isSaleUrl = (h) => /propiedades-en|\/venta\/|op=venta|\/comprar$|\/vender$|\/guias\/(como-vender|vender-sin|cuanto-vale|documentos-para-vender|impuestos-y-gastos-al-vender|gastos-al-comprar|comprar-primera)/.test(h);
const anchorsOf = (s) => [...String(s ?? '').matchAll(/<a\s+href="(https:\/\/casa-libre[^"]*)"[^>]*>([\s\S]*?)<\/a>/g)].map((m) => [m[1], strip(m[2]).trim()]);
const anchorPages = new Map(); // anchor text -> pages using it (keyword anchors repeated across pages look like a scheme)

// Any Casa-Libre site (every country): links to these count against the cap and must be the page's own country.
const isClHref = (h) => !!countryOfClUrl(String(h).replace(/&amp;/g, '&'));

// Competitors and media of the other countries (never named, as in Paraguay).
const NAMES_INTL = [/ultracasas/i, /gallito/i, /encuentra24/i, /conlallave/i, /tuinmueble/i, /mitula/i, /trovit/i, /idealista/i, /lamudi/i, /clasificados ?online/i, /olx/i];
// Each country's words: Uruguay and Venezuela say "apartamento" and Bolivia "departamento"; Bolivia, Venezuela and
// El Salvador say "notario", Uruguay "escribano".
const NOTARY_WRONG = { escribano: /\bnotari[oa]s?\b|\bnotar[ií]as?\b/i, notario: /\bescriban[oa]s?\b|\bescriban[ií]as?\b/i };
const VOSEO = /(?<!\p{L})(querés|podés|tenés|sabés|necesitás|vendés|publicá|mirá|fijate|fijá|contanos|dejanos|escribinos|elegí|revisá|consultalo|vos)(?!\p{L})/iu;
const WORDING_INTL = [/\bmartilleros?\b/i, /\barriendos?\b/i, /dueño directo/i, /compro casas/i, /oferta en efectivo/i, /agregador/i, /—/,
  /el m[aá]s grande/i, /n[uú]mero uno/i, /\bl[ií]der\b/i, /mayor crecimiento/i];

function contextFor(cc) {
  if (cc === 'py') {
    return { cc, label: '', dir, origin: CL, clOk, known: KNOWN_PATHS, guideSlugs: GUIDE_SLUGS, wording: WORDING, names: NAMES, small: false,
      files: readdirSync(dir).filter((f) => f.endsWith('.js')).sort(), slugOf: (name) => (FILE_OF.has(name) ? FILE_OF.get(name) : name) };
  }
  const c = COUNTRIES[cc];
  const cdir = path.join(dir, cc);
  let files = [];
  try { files = readdirSync(cdir).filter((f) => f.endsWith('.js') && !f.startsWith('_')).sort(); } catch { /* no folder yet */ }
  const slugs = files.map((f) => f.replace(/\.js$/, '')).map((n) => (n === 'home' ? '' : n));
  const allowed = new Set([...(CL_PATHS[cc] || []), ...(CL_CITY_PATHS[cc] || [])].map((x) => c.clOrigin + (x === '/' ? '' : x)));
  allowed.add(c.clOrigin + '/');
  const search = new RegExp(`^${c.clOrigin.replace(/[.]/g, '\\.')}/propiedades\\?op=(venta|alquiler)&type=(casa|depto|terreno|duplex|comercial|oficina|deposito)(&q=[^&"\\s]+)?$`);
  const ok = (h) => { const u = String(h).replace(/&amp;/g, '&'); return allowed.has(u) || allowed.has(u.replace(/\/$/, '')) || (CL_SEARCH_OK[cc] && search.test(u)); };
  const known = new Set([...slugs.map((s) => (s ? `/${c.prefix}/${s}/` : `/${c.prefix}/`)), `/${c.prefix}/guias/`, ...INFO_PAGES.map((s) => `/${s}/`)]);
  return { cc, label: `${cc}/`, dir: cdir, origin: c.clOrigin, clOk: ok, known, guideSlugs: slugs, files, small: files.length < 5,
    wording: [...WORDING_INTL, NOTARY_WRONG[c.notary.startsWith('escribano') ? 'escribano' : 'notario'], ...(cc === 'bo' ? [/\bapartamentos?\b/i] : [])],
    names: [...NAMES, ...NAMES_INTL], voice: c.voice, slugOf: (name, p) => (name === 'home' ? '' : name) };
}

let errors = 0, warnings = 0, fileCount = 0;
const seen = new Set();

for (const ctx of ['py', ...OTHER_CODES].map(contextFor)) {
for (const f of ctx.files) {
  fileCount++;
  const name = f.replace(/\.js$/, '');
  const E = [], W = [];
  let p;
  try { p = (await import(pathToFileURL(path.join(ctx.dir, f)).href)).default; } catch (e) { console.log(`\n✗ ${ctx.label}${f}\n   ERROR  does not load: ${e.message}`); errors++; continue; }
  const isInfo = (ctx.cc === 'py' && INFO.has(name)) || p.kind === 'plain';
  const slug = ctx.slugOf(name, p);
  if (p.slug !== slug) E.push(`slug is "${p.slug}", expected "${slug}" (the file name)`);
  if (ctx.cc === 'py') seen.add(slug);
  if (ctx.cc !== 'py' && !isInfo) {
    if (slug && !GROUPS.includes(p.group)) E.push(`group must be one of: ${GROUPS.join(' | ')}`);
    if (p.equivalentOf !== undefined && !GUIDE_SLUGS.includes(p.equivalentOf)) E.push(`equivalentOf "${p.equivalentOf}" is not a Paraguay guide slug`);
    if (p.city && !p.cityName) E.push('city pages need city (slug) and cityName');
  }

  const body = [], blockHrefs = [];
  for (const s of p.sections || []) {
    if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(s.id || '')) E.push(`section id "${s.id}" must be lowercase words joined by hyphens`);
    let secLinks = 0;
    for (const b of s.blocks || []) {
      if (!BLOCKS.has(b.t)) E.push(`block type "${b.t}" is not allowed (section ${s.id})`);
      const parts = [b.html, b.text, b.title, b.caption, b.note, b.button];
      for (const it of b.items || []) parts.push(typeof it === 'string' ? it : `${it.title} ${it.html}`);
      for (const r of b.rows || []) parts.push(...r);
      for (const h of b.head || []) parts.push(h);
      if (b.t === 'casalibre') { blockHrefs.push(b.href); secLinks++; if (!ctx.clOk(b.href)) E.push(`casalibre block href not allowed: ${b.href}`); }
      secLinks += hrefs(parts.join(' ')).filter(isClHref).length;
      body.push(...parts);
    }
    if (!isInfo && s.blocks?.[0]?.t !== 'p') W.push(`section "${s.id}" should open with a paragraph that answers its heading`);
  }
  for (const q of p.faq || []) body.push(q.q, q.a);
  const bodyText = body.filter(Boolean).join('\n');
  const all = [p.title, p.h1, p.description, p.answer, ...(p.summary || []), p.cta?.title, p.cta?.text, p.cta?.button,
    p.closing?.title, p.closing?.text, p.closing?.button, p.navLabel, p.blurb, ...(p.sections || []).map((s) => s.h2), bodyText].filter(Boolean).join('\n');

  for (const t of badTags(all)) E.push(`HTML tag not allowed: ${t}`);
  const plain = strip(all);
  for (const re of ctx.names) { if (!re) continue; const m = plain.match(re); if (m) E.push(`names another website or company: "${m[0]}"`); }
  if (/Casa\sLibre/.test(plain)) E.push('write the brand as "Casa-Libre" (with a hyphen) everywhere');
  for (const re of ctx.wording) { const m = plain.match(re); if (m) E.push(`wording to avoid: "${m[0]}"`); }
  if (ctx.voice && ctx.voice !== 'voseo') { const m = plain.match(VOSEO); if (m) W.push(`voseo "${m[0]}": this country reads "${ctx.voice}"`); }
  // Cross-country rule: every Casa-Libre link on a page goes to that page's own country's Casa-Libre.
  for (const h of [...hrefs(all), ...blockHrefs, p.cta?.href, p.closing?.href].filter(Boolean)) {
    const hc = countryOfClUrl(String(h).replace(/&amp;/g, '&'));
    if (hc && hc.clOrigin !== ctx.origin) E.push(`links another country's Casa-Libre (${hc.clHost}): ${h}`);
  }
  for (const h of hrefs(all)) {
    if (h.startsWith('/')) { if (!ctx.known.has(h.split('#')[0])) E.push(`internal link to unknown page: ${h}`); }
    else if (h.startsWith('mailto:')) continue;
    else if (!ctx.clOk(h)) E.push(`outbound link not allowed (only the listed Casa-Libre pages): ${h}`);
  }
  if (p.sources) E.push('rename "sources" to "internalSources" (sources are not shown on the site)');
  if (!p.title || !p.h1 || !p.description) E.push('title, h1 and description are required');
  if (!/^\d{4}-\d{2}-\d{2}$/.test(p.updated || '') || !/^\d{4}-\d{2}-\d{2}$/.test(p.published || '')) E.push('published and updated must be YYYY-MM-DD');

  let clBody = 0;
  if (!isInfo) {
    const tl = [...(p.title || '')].length, dl = [...(p.description || '')].length;
    if (tl < 45 || tl > 62) W.push(`title is ${tl} characters (aim for 50 to 60)`);
    if (dl < 130 || dl > 165) W.push(`description is ${dl} characters (aim for 140 to 160)`);
    const aw = words(p.answer);
    if (aw < 40 || aw > 80) E.push(`answer block is ${aw} words (must be 40 to 80)`);
    if (/<a\s/.test(p.answer || '')) E.push('answer block must not contain links');
    if (!(p.summary?.length >= 3 && p.summary.length <= 5)) E.push('summary needs 3 to 5 bullets');
    if (!(p.sections?.length >= 5)) E.push('at least 5 sections');
    if (!(p.sections || []).some((s) => s.blocks?.some((b) => b.t === 'table'))) E.push('at least one table');
    if (!(p.faq?.length >= 4 && p.faq.length <= 8)) E.push('FAQ needs 4 to 8 questions');
    for (const k of ['cta', 'closing']) if (!p[k]?.href || !ctx.clOk(p[k].href)) E.push(`${k}.href must be an allowed Casa-Libre URL`);
    clBody = hrefs(bodyText).filter(isClHref).length + blockHrefs.length;
    if (clBody > BODY_MAX) E.push(`${clBody} Casa-Libre links in the body (at most ${BODY_MAX})`);
    if (clBody < BODY_MIN) W.push(`${clBody} Casa-Libre links in the body (aim for ${BODY_MIN} to ${BODY_MAX})`);
    if (blockHrefs.length > BLOCKS_MAX) E.push(`${blockHrefs.length} casalibre blocks (at most ${BLOCKS_MAX}; use a callout for the others)`);
    const rendered = TEMPLATE_LINKS + ((ctx.cc === 'py' ? CITY_PAGE.test(slug) : !!p.city) ? 1 : 0) + 2 + clBody;
    if (rendered > PAGE_MAX) E.push(`about ${rendered} Casa-Libre links on the rendered page (at most ${PAGE_MAX})`);
    if (/<a\s+href="https:\/\/casa-libre/.test((p.summary || []).join(' '))) E.push('no Casa-Libre links in the summary');
    const rental = p.rental === true || isRentalSlug(slug);
    const pageHrefs = [...hrefs(bodyText).filter(isClHref), ...blockHrefs, p.cta?.href, p.closing?.href].filter(Boolean).map((h) => h.replace(/&amp;/g, '&'));
    for (const h of pageHrefs) {
      if (rental && isSaleUrl(h)) E.push(`rental page links a sale page: ${h}`);
      if (!rental && isRentUrl(h)) E.push(`sale page links a rental page: ${h}`);
    }
    for (const [, t] of anchorsOf(bodyText)) if (t !== 'Casa-Libre') anchorPages.set(t, [...(anchorPages.get(t) || []), `${ctx.label}${slug || 'home'}`]);
    if (!/casa[- ]libre/i.test(strip(bodyText))) E.push('the body never names Casa-Libre');
    const internal = hrefs(bodyText).filter((h) => h.startsWith('/')).length;
    // (a country with fewer than 5 pages has nothing to link to yet: those two are not asked)
    if (internal < 2 && !ctx.small) W.push(`only ${internal} links to other guides (aim for 2 to 5)`);
    for (const r of p.related || []) if (!ctx.guideSlugs.includes(r)) E.push(`related: unknown guide "${r}"`);
    if (!(p.related?.length >= 3) && !ctx.small) W.push('related should list 3 or 4 guides');
    if (p.review === 'pending' && !p.reviewNote) W.push('review is pending but reviewNote is empty');
    if (!['pending', 'none'].includes(p.review)) E.push("review must be 'pending' or 'none'");
    if (!p.navLabel || !p.blurb) E.push('navLabel and blurb are required');
  }
  errors += E.length; warnings += W.length;
  const total = words([p.answer, ...(p.summary || []), bodyText, ...(p.sections || []).map((s) => s.h2)].join(' '));
  console.log(`\n${E.length ? '✗' : '✓'} ${ctx.label}${f}  (${total} words, ${p.sections?.length || 0} sections${isInfo ? '' : `, ${clBody} Casa-Libre links`}${p.review === 'pending' ? ', review pending' : ''})`);
  for (const e of [...new Set(E)]) console.log(`   ERROR  ${e}`);
  for (const w of W) console.log(`   warn   ${w}`);
}
}
for (const [t, pages] of anchorPages) if (pages.length > 2) { warnings++; console.log(`\nwarn   anchor text "${t}" is used on ${pages.length} pages (vary it, or use the brand "Casa-Libre"): ${pages.join(', ')}`); }
const missing = GUIDE_SLUGS.filter((s) => !seen.has(s)).map((s) => s || 'home');
if (missing.length) console.log(`\nNot written yet: ${missing.join(', ')}`);
console.log(`\n${fileCount} files, ${errors} errors, ${warnings} warnings`);
process.exit(errors ? 1 : 0);
