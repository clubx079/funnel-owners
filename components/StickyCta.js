'use client';
import { usePathname } from 'next/navigation';
import { INFO_PAGES, isRentalSlug } from '@/lib/site';
import { parsePath, pathFor } from '@/lib/countries';

/** The bar fixed to the bottom of phones and tablets. Main action: go to the form at the top of the page
 *  (pages without a form send to the form of the country's home page). Casa-Libre stays as a text link. */
export default function StickyCta({ publishHref, cc = 'py' }) {
  const { slug } = parsePath(usePathname() || '/');
  const hasForm = !['guias', 'gracias', ...(cc === 'py' ? INFO_PAGES : [])].includes(slug);
  const rental = isRentalSlug(slug);
  return (
    <div className="sticky-cta" data-pos="sticky">
      <a className="sticky-link" href={publishHref}>Publicar gratis en Casa-Libre</a>
      <a className="btn sticky-btn" href={hasForm ? '#formulario' : `${pathFor(cc, '')}#formulario`}>{rental ? 'Quiero alquilar mi casa' : 'Quiero vender mi casa'}</a>
    </div>
  );
}
