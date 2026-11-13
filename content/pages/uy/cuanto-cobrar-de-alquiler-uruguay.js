import { cityMarket, marketCities, snapshotDateEs, fmtUsd, localPerUsd } from '../../../lib/market.js';

// Asking rents only from content/data/uy-market.json (Casa-Libre snapshot). Pesos only as "aprox." at the file's rate.
const d = snapshotDateEs('uy');
const mvd = cityMarket('uy', 'montevideo');
const uyu = (usd) => fmtUsd(Math.round((usd * localPerUsd('uy')) / 1000) * 1000).replace('USD', '$U');
const medMes = (p) => (p ? `${fmtUsd(p.median_usd)} (${p.listings_with_price} con precio)` : 'Sin dato: muy pocos avisos');
const rentRows = marketCities('uy').map((slug) => { const c = cityMarket('uy', slug); return [c.name, String(c.for_rent.total), medMes(c.departamentos_alquiler_price_month), medMes(c.casas_alquiler_price_month)]; });

export default {
  slug: 'cuanto-cobrar-de-alquiler-uruguay',
  group: 'Alquilar tu propiedad',
  order: 4,
  rental: true,
  equivalentOf: 'cuanto-cobrar-de-alquiler-paraguay',
  title: 'Cuánto cobrar de alquiler por mi casa en Uruguay',
  h1: 'Cuánto cobrar de alquiler por mi casa o apartamento',
  description: 'Cómo calcular cuánto cobrar de alquiler en Uruguay: comparables de tu barrio, ajustes por garaje, amoblado y gastos comunes, pesos o dólares, reajuste e IRPF.',
  navLabel: 'Cuánto cobrar',
  blurb: 'Un método para ponerle precio al alquiler de tu casa o apartamento en Uruguay, con un ejemplo.',
  published: '2026-11-13',
  updated: '2026-11-13',
  review: 'pending',
  reviewNote: 'Check: that long-term housing rents in Uruguay are commonly set in pesos uruguayos (dollars more common in coastal/seasonal and high-end rentals); that rents under the general regime are commonly adjusted yearly with the INE coefficient; the IRPF on rental income (12% on net, exemptions for low annual amounts); and that gastos comunes are usually paid by the tenant. No market rent figures are stated. 2026-11-13: added a table of asking-rent medians per city built only from content/data/uy-market.json via lib/market.js (pesos approximate at uyu_per_usd 40.3).',
  answer: 'Para saber cuánto cobrar de alquiler en Uruguay, buscá entre tres y cinco casas o apartamentos parecidos en alquiler en tu barrio, con los mismos dormitorios, y ubicá el tuyo según garaje, estado, amoblado y gastos comunes. Los alquileres de vivienda se pactan casi siempre en pesos uruguayos. Un precio en línea con la zona se alquila antes: cada mes vacío cuesta un alquiler entero. Podés comparar y publicar gratis en Casa-Libre.',
  summary: [
    'El precio lo marcan las casas parecidas en alquiler en tu barrio, no lo que necesitás cobrar.',
    'Ajustá por garaje, estado, amoblado, patio o terraza y monto de gastos comunes.',
    'Los alquileres de vivienda se pactan casi siempre en pesos; en la costa y en temporada son comunes los dólares.',
    'Un mes vacío cuesta más que una pequeña rebaja.',
  ],
  cta: {
    title: 'Compará y publicá tu alquiler',
    text: 'En Casa-Libre ves qué piden en tu zona y publicás el tuyo gratis. Te escriben por WhatsApp.',
    button: 'Publicar mi alquiler',
    href: 'https://uy.casa-libre.com/publicar',
  },
  sections: [
    {
      id: 'metodo',
      h2: '¿Cómo calculo cuánto cobrar de alquiler?',
      blocks: [
        { t: 'p', html: 'Con comparables: propiedades parecidas a la tuya, en tu zona, que estén en alquiler hoy. Es lo mismo que hace el inquilino antes de escribirte.' },
        { t: 'table',
          caption: 'Qué sube y qué baja el precio de un alquiler',
          head: ['Factor', 'Efecto habitual'],
          rows: [
            ['Garaje', 'Sube, sobre todo en barrios con poco estacionamiento'],
            ['Amoblado', 'Sube, pero achica el público'],
            ['Gastos comunes altos', 'Bajan lo que el inquilino puede pagar de alquiler'],
            ['Estado y reciclaje', 'Una cocina y baño nuevos suben el precio'],
            ['Patio, terraza o parrillero', 'Sube, en especial en casas'],
            ['Cercanía a ómnibus, centros de estudio, rambla', 'Sube'],
            ['Acepta mascotas', 'Amplía el público'],
          ],
          note: 'Orientación general. No hay una tabla oficial de alquileres.' },
      ],
    },
    {
      id: 'ejemplo',
      h2: 'Un ejemplo de cálculo',
      blocks: [
        { t: 'p', html: 'Partí del promedio de los comparables y ajustá por las diferencias con el tuyo. El ejemplo usa montos inventados.' },
        { t: 'example',
          title: 'Ejemplo ilustrativo: alquiler de un apartamento de 2 dormitorios',
          html: 'Montos redondos e hipotéticos en pesos uruguayos.',
          rows: [
            ['Comparable A, sin garaje', '$U 30.000 por mes'],
            ['Comparable B, sin garaje', '$U 32.000 por mes'],
            ['Comparable C, sin garaje', '$U 31.000 por mes'],
            ['Promedio: (30.000 + 32.000 + 31.000) / 3', '$U 31.000'],
            ['El tuyo tiene garaje: ajuste hipotético', '+ $U 3.000'],
            ['Precio de partida', '$U 34.000 por mes'],
          ] },
        { t: 'p', html: 'Buscá tus comparables en las propiedades en alquiler de <a href="https://uy.casa-libre.com/alquilar">Casa-Libre</a>, por ciudad y en el mapa.' },
      ],
    },
    {
      id: 'pesos-o-dolares',
      h2: '¿Cobro el alquiler en pesos o en dólares?',
      blocks: [
        { t: 'p', html: 'Para vivienda permanente, lo habitual en Uruguay es en pesos uruguayos, con un reajuste anual. En alquileres de temporada en la costa y en algunas propiedades de alto valor se usan dólares.' },
        { t: 'p', html: 'Lo que importa es que el precio y el reajuste estén en el contrato. Las opciones de reajuste están en <a href="/uruguay/contrato-de-alquiler-uruguay/">contrato de alquiler en Uruguay</a>.' },
        { t: 'callout', tone: 'warn', title: 'Antes de decidir', html: 'Información general. Consultá con un escribano o contador antes de tomar decisiones.' },
      ],
    },
    {
      id: 'vacancia',
      h2: '¿Conviene bajar el precio para alquilar antes?',
      blocks: [
        { t: 'p', html: 'Muchas veces sí. Un mes sin inquilino es un alquiler entero perdido, más los gastos que siguen corriendo: contribución, Primaria, gastos comunes.' },
        { t: 'example',
          title: 'Ejemplo ilustrativo: el costo de esperar',
          html: 'Montos hipotéticos en pesos uruguayos.',
          rows: [
            ['Alquiler pedido', '$U 34.000 por mes'],
            ['Dos meses vacíos: 2 x 34.000', '$U 68.000 perdidos'],
            ['Bajar $U 2.000 por mes durante 12 meses', '$U 24.000'],
          ] },
      ],
    },
    {
      id: 'lo-que-queda',
      h2: '¿Cuánto me queda del alquiler?',
      blocks: [
        { t: 'p', html: 'El alquiler menos lo que pagás vos: los tributos que no pasaste al inquilino, los arreglos y el IRPF sobre la renta, que es del 12% sobre el neto con exoneraciones para montos bajos.' },
        { t: 'p', html: 'Si no querés ocuparte de cobros y arreglos, Casa-Libre ofrece <a href="https://uy.casa-libre.com/administracion-de-propiedades">administración de propiedades</a>. Los tributos están en <a href="/uruguay/contribucion-inmobiliaria-uruguay/">contribución y Primaria</a>.' },
      ],
    },
    {
      id: 'alquileres-publicados',
      h2: '¿Cuánto se pide de alquiler en Montevideo y en el este?',
      blocks: [
        { t: 'p', html: `En lo publicado en Casa-Libre al ${d}, los apartamentos en alquiler en Montevideo piden una mediana de ${fmtUsd(mvd.departamentos_alquiler_price_month.median_usd)} por mes, unos ${uyu(mvd.departamentos_alquiler_price_month.median_usd)} aprox. En Punta del Este hay pocos avisos, y en Maldonado y Ciudad de la Costa no alcanzan para dar un número. Son precios pedidos, no los montos de contratos firmados.` },
        { t: 'table',
          caption: `Alquileres publicados en Casa-Libre, ${d}`,
          head: ['Ciudad', 'Avisos en alquiler', 'Apartamentos: mediana por mes', 'Casas: mediana por mes'],
          rows: rentRows,
          note: `Propiedades activas publicadas en Casa-Libre al ${d}. Precios pedidos en dólares; los pesos son aproximados. Con menos de 10 avisos con precio, la mediana es solo una referencia gruesa.` },
        { t: 'p', html: 'Tomalo como punto de partida, no como tarifa. Para tu precio, el método de esta guía sigue siendo el mismo: cinco o seis propiedades parecidas de tu barrio, y ajustar por gastos comunes, garaje y estado. Más detalle por ciudad en <a href="/uruguay/alquiler-de-casas-en-montevideo/">alquiler en Montevideo</a> y <a href="/uruguay/alquiler-de-casas-en-punta-del-este/">en Punta del Este</a>.' },
      ],
    },
    {
      id: 'publicar',
      h2: '¿Dónde publico el alquiler?',
      blocks: [
        { t: 'p', html: 'Te recomendamos Casa-Libre: publicás gratis, el aviso aparece al buscar por ciudad y en el mapa, y los interesados te escriben por WhatsApp.' },
        { t: 'casalibre',
          title: 'Por qué te recomendamos Casa-Libre',
          html: 'Casa-Libre es un marketplace inmobiliario donde inmobiliarias, agentes y propietarios publican casas, apartamentos y terrenos gratis, con extras pagos opcionales. Los interesados contactan directo por WhatsApp y no hay comisión sobre la venta. Está en la web y en apps para iPhone y Android. En un alquiler tampoco cobra comisión.',
          button: 'Leer la guía para alquilar',
          href: 'https://uy.casa-libre.com/guias/como-alquilar-mi-propiedad' },
      ],
    },
  ],
  faq: [
    { q: '¿Cuánto cobrar de alquiler por mi casa?', a: 'Lo que piden casas parecidas en tu barrio, ajustado por garaje, estado y extras. Compará al menos tres antes de fijar el tuyo.' },
    { q: '¿Cómo calcular el precio de un alquiler?', a: 'Sacá el promedio de tres a cinco comparables y sumá o restá por las diferencias con tu propiedad. No hay una fórmula oficial.' },
    { q: '¿Los gastos comunes van aparte del alquiler?', a: 'Habitualmente sí: los paga el inquilino además del alquiler, salvo que el contrato diga otra cosa. Aclaralo en el aviso.' },
    { q: '¿Cada cuánto se reajusta el alquiler?', a: 'Lo habitual es una vez por año, con el índice que diga el contrato.' },
    { q: '¿Cuánto se pide por alquilar un apartamento en Montevideo?', a: `En los avisos de Casa-Libre al ${d}, una mediana de ${fmtUsd(mvd.departamentos_alquiler_price_month.median_usd)} por mes (unos ${uyu(mvd.departamentos_alquiler_price_month.median_usd)} aprox.), con la mitad central entre ${fmtUsd(mvd.departamentos_alquiler_price_month.p25_usd)} y ${fmtUsd(mvd.departamentos_alquiler_price_month.p75_usd)}. Son precios pedidos.` },
  ],
  internalSources: [
    { label: 'Google autocomplete Uruguay, "cuanto cobrar de alquiler"', url: 'https://suggestqueries.google.com/complete/search?client=firefox&hl=es&gl=uy&q=cuanto%20cobrar%20de%20alquiler', date: '2026-11-13', note: 'Query exists. No Uruguay market data file yet: no rent figures stated.' },
  ],
  closing: {
    title: 'Mirá qué piden en tu zona',
    text: 'En Casa-Libre ves las propiedades en alquiler por ciudad y en el mapa. Publicar la tuya es gratis.',
    button: 'Ver propiedades en alquiler',
    href: 'https://uy.casa-libre.com/alquilar',
  },
  related: ['como-alquilar-mi-casa-uruguay', 'contrato-de-alquiler-uruguay', 'alquiler-de-casas-en-montevideo'],
};
