import { getGuides } from './content.js';
import { COUNTRIES, OTHER_CODES, DEFAULT_COUNTRY, pathFor } from './countries.js';

// hreflang groups. The key of a group is the Paraguay slug: a country page joins the group of the PY page it
// is the local version of (`equivalentOf: '<py slug>'` in its file; a country home is always the version of the
// PY home, and /<pais>/guias/ of /guias/). Pages with no equivalent anywhere get no hreflang at all.
// x-default points to the Paraguay version.

async function keyOf(cc, slug) {
  if (cc === DEFAULT_COUNTRY) return slug;
  if (slug === '') return '';
  const page = (await getGuides(cc)).find((g) => g.slug === slug);
  return page && typeof page.equivalentOf === 'string' ? page.equivalentOf : null;
}

export async function alternatesFor(cc, slug) {
  const key = await keyOf(cc, slug);
  if (key === null) return null;
  const langs = {};
  if ((await getGuides(DEFAULT_COUNTRY)).some((g) => g.slug === key)) langs[COUNTRIES[DEFAULT_COUNTRY].lang] = pathFor(DEFAULT_COUNTRY, key);
  for (const c of OTHER_CODES) {
    const match = (await getGuides(c)).find((g) => (key === '' ? g.slug === '' : g.slug !== '' && g.equivalentOf === key));
    if (match) langs[COUNTRIES[c].lang] = pathFor(c, match.slug);
  }
  if (Object.keys(langs).length < 2) return null;
  if (langs[COUNTRIES[DEFAULT_COUNTRY].lang]) langs['x-default'] = langs[COUNTRIES[DEFAULT_COUNTRY].lang];
  return langs;
}

/** The /guias/ indexes: every country that has at least one guide. */
export async function guiasAlternates() {
  const langs = {};
  for (const c of Object.keys(COUNTRIES)) if ((await getGuides(c)).length) langs[COUNTRIES[c].lang] = pathFor(c, 'guias');
  if (Object.keys(langs).length < 2) return null;
  langs['x-default'] = pathFor(DEFAULT_COUNTRY, 'guias');
  return langs;
}
