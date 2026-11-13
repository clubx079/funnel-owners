import { readdirSync } from 'node:fs';
import path from 'node:path';
import { GUIDES, INFO_PAGES, GROUPS } from './site.js';
import { tagPage } from './utm.js';
import { COUNTRIES, DEFAULT_COUNTRY } from './countries.js';

// Paraguay: one file per page in content/pages, listed (in order, with group and menu data) in GUIDES (lib/site.js).
// Other countries: every .js file in content/pages/<code>/ is a page (home.js = the country home); the file itself
// carries its group, menu label and city (see content/COUNTRY_GUIDE.md). Adding a page = adding a file.
// A file that does not load is skipped, so the site builds while guides are still being written.
async function load(file) {
  try {
    const mod = await import(`../content/pages/${file}.js`);
    return mod.default || null;
  } catch {
    return null;
  }
}

function countryFiles(cc) {
  try {
    return readdirSync(path.join(process.cwd(), 'content', 'pages', cc))
      .filter((f) => f.endsWith('.js') && !f.startsWith('_')).map((f) => f.replace(/\.js$/, '')).sort();
  } catch {
    return [];
  }
}

const groupRank = (g) => { const i = GROUPS.indexOf(g); return i === -1 ? GROUPS.length : i; };

async function countryGuides(cc) {
  const pages = await Promise.all(countryFiles(cc).map(async (name) => {
    const page = await load(`${cc}/${name}`);
    if (!page || page.kind === 'plain') return null;
    const slug = name === 'home' ? '' : page.slug;
    return { ...page, slug, kind: 'guide', cc };
  }));
  return pages.filter(Boolean)
    .sort((a, b) => (a.slug === '' ? -1 : b.slug === '' ? 1 : 0) || groupRank(a.group) - groupRank(b.group)
      || (a.order ?? 999) - (b.order ?? 999) || a.slug.localeCompare(b.slug))
    .map((p) => tagPage(p));
}

export async function getGuides(cc = DEFAULT_COUNTRY) {
  if (!COUNTRIES[cc]) return [];
  if (cc !== DEFAULT_COUNTRY) return countryGuides(cc);
  const pages = await Promise.all(GUIDES.map(async (g) => {
    const page = await load(g.file || g.slug);
    return page ? tagPage({ ...page, slug: g.slug, group: g.group, nav: g.nav, city: g.city, cityName: g.cityName, kind: 'guide', cc: DEFAULT_COUNTRY }) : null;
  }));
  return pages.filter(Boolean);
}

/** Info pages (who we are, privacy, contact) exist once, at the root, for every country. */
export async function getInfoPages(cc = DEFAULT_COUNTRY) {
  if (cc !== DEFAULT_COUNTRY) return [];
  const pages = await Promise.all(INFO_PAGES.map(async (slug) => {
    const page = await load(slug);
    return page ? tagPage({ ...page, slug, kind: 'info', cc: DEFAULT_COUNTRY }) : null;
  }));
  return pages.filter(Boolean);
}

export async function getPage(slug, cc = DEFAULT_COUNTRY) {
  const all = [...(await getGuides(cc)), ...(await getInfoPages(cc))];
  return all.find((p) => p.slug === slug) || null;
}

/** Words of body text, for the reading-time line. */
export function wordCount(page) {
  const strip = (s) => String(s || '').replace(/<[^>]+>/g, ' ');
  const parts = [page.answer, ...(page.summary || [])];
  for (const s of page.sections || []) {
    parts.push(s.h2);
    for (const b of s.blocks || []) {
      parts.push(b.html, b.text, b.title, b.caption, b.note, ...(b.items || []).map((i) => (typeof i === 'string' ? i : `${i.title} ${i.html}`)));
      for (const r of b.rows || []) parts.push(r.join(' '));
    }
  }
  for (const f of page.faq || []) parts.push(f.q, f.a);
  return strip(parts.filter(Boolean).join(' ')).split(/\s+/).filter(Boolean).length;
}
