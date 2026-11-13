// Every link to Casa-Libre carries UTM tags, so the Casa-Libre admin ("Where visitors come from")
// shows the visits this site sends as their own row: utm_source = this site.
// utm_content = the page slug (links in the text) or the spot on the page (header, footer, sticky…).
// Each country links to its own Casa-Libre site (lib/countries.js). Paraguay keeps utm_campaign=seo-funnel;
// the other countries get seo-funnel-<code> (seo-funnel-bo…), so this site's traffic splits per country
// even in a report that mixes them.
import { countryOfClUrl, DEFAULT_COUNTRY } from './countries.js';

export const UTM_SOURCE = 'vendermicasa';
export const UTM_MEDIUM = 'funnel';
export const UTM_CAMPAIGN = 'seo-funnel';

export function cl(href, content) {
  if (!href || href.includes('utm_source=')) return href;
  const c = countryOfClUrl(href);
  if (!c) return href;
  const u = new URL(href);
  u.searchParams.set('utm_source', UTM_SOURCE);
  u.searchParams.set('utm_medium', UTM_MEDIUM);
  u.searchParams.set('utm_campaign', c.code === DEFAULT_COUNTRY ? UTM_CAMPAIGN : `${UTM_CAMPAIGN}-${c.code}`);
  if (content) u.searchParams.set('utm_content', content);
  return u.toString();
}

const CL_HREF = /href="(https:\/\/(?:www\.)?(?:casa-libre\.com\.(?:py|bo|ve)|(?:uy|sv)\.casa-libre\.com)[^"]*)"/g;
const CL_URL = /^https:\/\/(www\.)?(casa-libre\.com\.(py|bo|ve)|(uy|sv)\.casa-libre\.com)(\/|\?|#|$)/;

/** Tags every Casa-Libre href inside an HTML string. */
export function clHtml(html, content) {
  return String(html).replace(CL_HREF, (m, url) => `href="${cl(url.replace(/&amp;/g, '&'), content).replace(/&/g, '&amp;')}"`);
}

// Bare mentions of "Casa-Libre" in the text become links (first unlinked mention of each paragraph),
// rotating over these Casa-Libre pages so the anchors point to different places.
const AUTO = ['https://casa-libre.com.py/publicar', 'https://casa-libre.com.py/vender', 'https://casa-libre.com.py/propiedades', 'https://casa-libre.com.py/guias', 'https://casa-libre.com.py/como-funciona', 'https://casa-libre.com.py/'];

function linkFirstMention(html, state) {
  const s = String(html);
  if (!s.includes('Casa-Libre') || /href="https:\/\/(www\.)?casa-libre/.test(s)) return s;
  const parts = s.split(/(<a\b[^>]*>[\s\S]*?<\/a>|<[^>]+>)/);
  for (let i = 0; i < parts.length; i += 2) {
    const k = parts[i].indexOf('Casa-Libre');
    if (k === -1) continue;
    const url = AUTO[state.n++ % AUTO.length];
    parts[i] = `${parts[i].slice(0, k)}<a href="${url}">Casa-Libre</a>${parts[i].slice(k + 10)}`;
    return parts.join('');
  }
  return s;
}

/** Deep copy of a page with every Casa-Libre link tagged and bare mentions linked. */
export function tagPage(page) {
  const content = page.slug || 'home';
  const html = (s) => clHtml(s, content); // no auto-linking (linkFirstMention): the link budget is set in the content files
  const tagAny = (v) => {
    if (typeof v === 'string') {
      if (CL_URL.test(v) && !/\s/.test(v)) return cl(v, content);
      return v.includes('href="https://') ? clHtml(v, content) : v;
    }
    if (Array.isArray(v)) return v.map(tagAny);
    if (v && typeof v === 'object') return Object.fromEntries(Object.entries(v).map(([k, x]) => [k, tagAny(x)]));
    return v;
  };
  const out = tagAny(page);
  // the rendered HTML fields: paragraphs, list items, steps, callouts, summary, FAQ answers
  for (const sec of out.sections || []) {
    for (const b of sec.blocks || []) {
      if (b.t === 'p' || b.t === 'callout') b.html = html(b.html);
      if ((b.t === 'ul' || b.t === 'ol') && b.items) b.items = b.items.map(html);
      if (b.t === 'steps' && b.items) b.items = b.items.map((it) => ({ ...it, html: html(it.html) }));
    }
  }
  if (out.summary) out.summary = out.summary.map(html);
  if (out.faq) out.faq = out.faq.map((f) => ({ ...f, a: html(f.a) }));
  return out;
}
