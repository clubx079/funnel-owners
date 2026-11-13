import { SITE, OWNER } from './site.js';
import { COUNTRIES, countryOf, pathFor } from './countries.js';

const urlIn = (cc, slug) => SITE.url + pathFor(cc, slug);
const place = (c) => ({ '@type': 'Country', name: c.name, identifier: c.code.toUpperCase() });

const ORG_ID = `${SITE.url}/#organization`;
const SITE_ID = `${SITE.url}/#website`;

const organization = () => ({
  '@type': 'Organization',
  '@id': ORG_ID,
  name: SITE.name,
  url: SITE.url + '/',
  description: SITE.description,
  parentOrganization: { '@type': 'Organization', name: OWNER.name, url: OWNER.url },
  areaServed: Object.values(COUNTRIES).map(place),
});

const website = (c) => ({
  '@type': 'WebSite',
  '@id': SITE_ID,
  name: SITE.name,
  url: SITE.url + '/',
  inLanguage: c.lang,
  publisher: { '@id': ORG_ID },
});

const breadcrumb = (page, c) => ({
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: urlIn(c.code, '') },
    { '@type': 'ListItem', position: 2, name: page.h1, item: urlIn(c.code, page.slug) },
  ],
});

// The country a guide is about: spatialCoverage + about; its currency rides on the Country node as a
// PropertyValue (schema.org has no currency property for a country or an article).
const article = (page, c) => ({
  '@type': 'Article',
  headline: page.h1,
  description: page.description,
  inLanguage: c.lang,
  datePublished: page.published,
  dateModified: page.updated,
  mainEntityOfPage: urlIn(c.code, page.slug),
  spatialCoverage: { ...place(c), additionalProperty: { '@type': 'PropertyValue', name: 'currency', value: c.currency.code } },
  author: { '@type': 'Organization', name: SITE.name, url: SITE.url + '/' },
  publisher: { '@id': ORG_ID },
  isPartOf: { '@id': SITE_ID },
});

// FAQ rich results ended in May 2026; the markup is harmless and mirrors text that is visible on the page.
const faq = (page) => ({
  '@type': 'FAQPage',
  mainEntity: page.faq.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: String(f.a).replace(/<[^>]+>/g, '') },
  })),
});

export function graphFor(page) {
  const c = countryOf(page.cc);
  const graph = [organization(), website(c)];
  if (page.kind === 'guide') {
    graph.push(article(page, c));
    if (page.slug) graph.push(breadcrumb(page, c));
    if (page.faq?.length) graph.push(faq(page));
  } else if (page.slug) {
    graph.push(breadcrumb(page, c));
  }
  return { '@context': 'https://schema.org', '@graph': graph };
}
