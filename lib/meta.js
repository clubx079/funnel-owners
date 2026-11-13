import { SITE } from './site.js';
import { countryOf, pathFor } from './countries.js';

/** Static metadata for one page: title, description, canonical (self-referencing), hreflang alternates
 *  (only when the page has an equivalent in another country: lib/alternates.js) and Open Graph, all in the first HTML response. */
export function metaFor(page, languages = null) {
  const c = countryOf(page.cc);
  const path = pathFor(c.code, page.slug);
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: path, ...(languages ? { languages } : {}) },
    openGraph: {
      title: page.title,
      description: page.description,
      url: SITE.url + path,
      siteName: SITE.name,
      locale: c.locale,
      type: page.kind === 'guide' ? 'article' : 'website',
      ...(page.kind === 'guide' ? { publishedTime: page.published, modifiedTime: page.updated } : {}),
    },
  };
}

export const JsonLd = ({ data }) => (
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\u003c') }} />
);
