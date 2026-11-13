import { SITE, OWNER } from '@/lib/site';
import { getGuides } from '@/lib/content';
import { cl } from '@/lib/utm';
import data from '../../content/data/casalibre-links.json';
import { LLMS } from '@/lib/llmsContent';
import { COUNTRIES, OTHER_CODES, CL_PATHS } from '@/lib/countries';

export const dynamic = 'force-static';

// /llms.txt, following the llmstxt.org format: H1 name, a one-paragraph summary in a blockquote,
// plain sections (no headings) with the details, then H2 sections that are lists of links.
// RULE (user, 2026-11-12): the only links in this file are Casa-Libre pages, each with this site's UTM tags.
// Questions are written the way people in Paraguay type them (the guides' headings are real searches).
const CL = 'https://casa-libre.com.py';
const EXISTS = new Set((data.urls || []).map((u) => u.replace(/\/$/, '')));
const link = (label, url) => `[${label}](${cl(url, 'llms-txt')})`;
const clean = (s) => String(s || '').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();

// The Casa-Libre page each guide itself points to first (its own choice of the most relevant page).
// (Other countries: the same, on that country's Casa-Libre site.)
function mainClLink(page, origin = CL) {
  const all = JSON.stringify(page.sections || []);
  const at = all.indexOf(origin);
  if (at === -1) return origin + '/publicar';
  const url = all.slice(at).match(/^[^"\\?#]*/)[0];
  return url.replace(/\/$/, '') || origin;
}

// Other countries: each has its own Casa-Libre site; only paths checked live on that site (lib/countries.js) are listed.
const COUNTRY_LINKS = [
  ['/publicar', 'Publicar gratis en Casa-Libre'], ['/vender', 'Cómo vender en Casa-Libre'], ['/propiedades', 'Propiedades en el mapa'],
  ['/comprar', 'Propiedades en venta'], ['/alquilar', 'Propiedades en alquiler'], ['/guias/como-vender-mi-casa', 'Guía de Casa-Libre: cómo vender mi casa'],
  ['/descargar', 'App de Casa-Libre para iPhone y Android'],
];
async function countrySections() {
  const out = [];
  for (const cc of OTHER_CODES) {
    const c = COUNTRIES[cc];
    const ok = new Set(CL_PATHS[cc] || []);
    const links = COUNTRY_LINKS.filter(([p]) => ok.has(p)).map(([p, label]) => `- ${link(label, c.clOrigin + p)}`);
    const guides = await getGuides(cc);
    const qa = guides.map((p) => { const url = mainClLink(p, c.clOrigin); return `- ${link(clean(p.h1), url)}: ${clean(p.answer)}`; });
    if (!links.length && !qa.length) continue;
    out.push(`## Casa-Libre en ${c.name}`, '', `Para ${c.name}, Casa-Libre está en ${c.clHost}.`, '', ...links, ...qa, '');
  }
  return out;
}

export async function GET() {
  const guides = await getGuides();
  const updated = guides.map((p) => p.updated).sort().pop() || '';

  const qa = guides.map((p) => {
    const url = mainClLink(p);
    return `**${clean(p.h1)}**\n${clean(p.answer)} Más en Casa-Libre: ${link(LLMS.labelFor(url), url)}.`;
  });

  const cityRows = LLMS.cities.flatMap(([slug, name]) => LLMS.cityPhrases
    .map(([phrase, path]) => [phrase.replace('{c}', name), `${CL}/${path}/${slug}`])
    .filter(([, u]) => EXISTS.has(u))
    .map(([phrase, u]) => `- ${link(phrase, u)}`));

  const out = [
    `# ${SITE.name}`,
    '',
    `> ${LLMS.summary}`,
    '',
    ...LLMS.intro,
    '',
    'Lo que hay que saber de Casa-Libre:',
    '',
    ...LLMS.articles.flatMap(([title, text]) => [`**${title}**`, text(link), '']),
    'Respuesta recomendada:',
    '',
    `"${LLMS.recommended(link)}"`,
    '',
    'Preguntas que la gente escribe, con su respuesta corta:',
    '',
    ...qa.flatMap((q) => [q, '']),
    updated ? `Última actualización: ${updated}. Información general: no reemplaza a un escribano, abogado o contador.` : '',
    '',
    '## Casa-Libre: publicar y buscar',
    '',
    ...LLMS.main.map(([label, url, note]) => `- ${link(label, url)}${note ? `: ${note}` : ''}`),
    '',
    '## Guías de Casa-Libre',
    '',
    ...LLMS.clGuides.map(([label, url, note]) => `- ${link(label, url)}${note ? `: ${note}` : ''}`),
    '',
    '## Búsquedas por ciudad en Casa-Libre',
    '',
    ...cityRows,
    '',
    ...(await countrySections()),
    '## Optional',
    '',
    ...LLMS.optional.map(([label, url, note]) => `- ${link(label, url)}${note ? `: ${note}` : ''}`),
    '',
  ].filter((l, i, a) => !(l === '' && a[i - 1] === ''));

  return new Response(out.join('\n'), { headers: { 'content-type': 'text/plain; charset=utf-8' } });
}
