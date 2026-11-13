import { SITE } from '@/lib/site';
import { getGuides, getInfoPages } from '@/lib/content';
import { COUNTRY_CODES, pathFor } from '@/lib/countries';

export const dynamic = 'force-static';

// Every country: its guides (home included), its /guias/ index, and the info pages (Paraguay, at the root).
export default async function sitemap() {
  const out = [];
  for (const cc of COUNTRY_CODES) {
    const pages = [...(await getGuides(cc)), ...(await getInfoPages(cc))];
    if (!pages.length) continue;
    // lastModified is the date the content really changed, never the build date.
    const latest = pages.map((p) => p.updated).filter(Boolean).sort().pop();
    out.push(...pages.map((p) => ({ url: SITE.url + pathFor(cc, p.slug), lastModified: p.updated })));
    out.push({ url: SITE.url + pathFor(cc, 'guias'), lastModified: latest });   // the index of every guide of the country
  }
  return out;
}
