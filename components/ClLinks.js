import { linksFor } from '@/lib/clLinks';
import { cl } from '@/lib/utm';

/** The Casa-Libre links at the end of every page: listings in the page's city, Casa-Libre guides on the topic, main pages. */
export default function ClLinks({ page, title = 'Seguí en Casa-Libre' }) {
  const links = linksFor(page);
  if (!links.length) return null;
  const content = page.slug || 'home';
  return (
    <nav className="cl-links" aria-label="Casa-Libre" data-pos="cl-links">
      <h2><img src="/casa-libre-cuate-reversed.svg" alt="" width="30" height="29" />{title}</h2>
      <ul>{links.map(([u, label]) => <li key={u}><a href={cl(u, content)}>{label}</a></li>)}</ul>
    </nav>
  );
}
