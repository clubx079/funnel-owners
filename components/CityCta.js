import { cityListings } from '@/lib/clLinks';
import { cl } from '@/lib/utm';

// The button names what the reader will see, not the search phrase: the city is already the subject of the page.
const LABEL = { venta: { casas: 'Ver las casas en venta en Casa-Libre', terrenos: 'Ver los terrenos en venta en Casa-Libre' },
  alquiler: { casas: 'Ver las casas en alquiler en Casa-Libre' } };

/** City pages: ONE link to that city's listings on Casa-Libre, filtered, right under the answer. */
export default function CityCta({ page }) {
  const links = cityListings(page);
  if (!links.length) return null;
  const content = page.slug || 'home';
  const [[u, label]] = links;
  const op = /alquiler/i.test(label) ? 'alquiler' : 'venta';
  const tipo = /^terrenos/i.test(label) ? 'terrenos' : 'casas';
  return (
    <div className="city-cta" data-pos="city-cta">
      <a className="btn" href={cl(u, content + '-city-top')}>{LABEL[op][tipo] || 'Ver en Casa-Libre'}</a>
    </div>
  );
}
