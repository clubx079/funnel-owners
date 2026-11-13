import { cityMarket, cityMarketTable, snapshotDateEs, fmtUsd } from '../../../lib/market.js';

// Numbers only from content/data/uy-market.json (Casa-Libre snapshot, asking prices).
const m = cityMarket('uy', 'ciudad-de-la-costa');
const mvd = cityMarket('uy', 'montevideo');
const d = snapshotDateEs('uy');
const casa = m.casas_venta_price;
const apto = m.departamentos_venta_price;

export default {
  slug: 'vender-casa-en-ciudad-de-la-costa',
  group: 'Vender por ciudad',
  order: 4,
  city: 'ciudad-de-la-costa',
  cityName: 'Ciudad de la Costa',
  title: 'Vender una casa en Ciudad de la Costa: precios y papeles',
  h1: 'Vender una casa en Ciudad de la Costa',
  description: 'Cuánto piden por las casas en Ciudad de la Costa según Casa-Libre, qué pregunta el comprador, tributos en Canelones y cómo publicar tu casa gratis.',
  navLabel: 'Ciudad de la Costa',
  blurb: 'Precios pedidos, barrios, saneamiento y tributos de Canelones para vender tu casa en Ciudad de la Costa.',
  published: '2026-11-13',
  updated: '2026-11-13',
  review: 'pending',
  reviewNote: 'New page 2026-11-13. Prices and counts only from content/data/uy-market.json via lib/market.js (asking prices on Casa-Libre, not closing prices; apartamentos median rests on 5 listings, said on the page). Local facts to check before indexing: Ciudad de la Costa is in the departamento de Canelones (Intendencia de Canelones, Municipio de Ciudad de la Costa), along the coast between the arroyo Carrasco (border with Montevideo) and the arroyo Pando; barrios named (Barra de Carrasco, Shangrilá, Lagomar, Solymar, Lomas/Colinas/Médanos de Solymar, El Pinar); Avenida Giannattasio and Avenida de las Américas as main roads, Ruta Interbalnearia further north; the Carrasco airport nearby; that saneamiento (sewer network) has been extended in stages and some houses still use pozo negro emptied by barométrica; contribución inmobiliaria paid to the Intendencia de Canelones. Tax facts as in the national pages (ITP, IRPF).',
  answer: `Para vender una casa en Ciudad de la Costa, compará con casas parecidas de tu mismo barrio, aclará si tiene saneamiento o pozo negro y a cuántas cuadras queda Giannattasio, y tené la contribución de la Intendencia de Canelones al día. Según las propiedades publicadas en Casa-Libre al ${d} (precios pedidos, no de cierre), la mediana de las casas en venta pide ${fmtUsd(casa.median_usd)}. Podés publicar gratis en Casa-Libre.`,
  summary: [
    `${m.for_sale.total} avisos en venta en Ciudad de la Costa en Casa-Libre al ${d}, la mayoría casas; la mitad central pide entre ${fmtUsd(casa.p25_usd)} y ${fmtUsd(casa.p75_usd)} (precios pedidos).`,
    'Es una ciudad de casas con jardín, en Canelones, pegada a Montevideo: muchos compradores vienen de la capital.',
    'Saneamiento o pozo negro, distancia a Giannattasio y al mar: las tres primeras preguntas.',
    'La contribución se paga a la Intendencia de Canelones, no a la de Montevideo.',
  ],
  cta: {
    title: 'Publicá tu casa de Ciudad de la Costa',
    text: 'Subís fotos, precio y ubicación desde la web o la app. Los interesados te escriben por WhatsApp, sin comisión.',
    button: 'Publicar mi casa gratis',
    href: 'https://uy.casa-libre.com/publicar',
  },
  sections: [
    {
      id: 'cuanto-piden-en-ciudad-de-la-costa',
      h2: '¿Cuánto piden por una casa en Ciudad de la Costa?',
      blocks: [
        { t: 'p', html: `La mitad de las casas en venta pide menos de ${fmtUsd(casa.median_usd)} y la otra mitad, más. Es la mediana de ${casa.listings_with_price} casas con precio publicadas en Casa-Libre al ${d}: precios pedidos por los vendedores, no precios de cierre.` },
        cityMarketTable('uy', 'ciudad-de-la-costa', { rent: false }),
        { t: 'p', html: `Son pocos avisos, así que el número se mueve con cada casa nueva. Aun así marca algo claro: acá la oferta es de casas (${m.for_sale.casas} de ${m.for_sale.total} avisos), con una mediana de ${m.casas_venta_median_bedrooms} dormitorios. Los apartamentos son muy pocos (${apto.listings_with_price} con precio), y su mediana de ${fmtUsd(apto.median_usd)} es solo una referencia.` },
      ],
    },
    {
      id: 'frente-a-montevideo',
      h2: '¿Una casa en Ciudad de la Costa pide más o menos que en Montevideo?',
      blocks: [
        { t: 'p', html: `En las casas publicadas en Casa-Libre, más: ${fmtUsd(casa.median_usd)} de mediana en Ciudad de la Costa frente a ${fmtUsd(mvd.casas_venta_price.median_usd)} en Montevideo, en el mismo snapshot. No quiere decir que la misma casa valga más del otro lado del arroyo Carrasco: las casas que se publican acá suelen ser más nuevas, con terreno y jardín, y en Montevideo la mediana mezcla casas de barrios muy distintos.` },
        { t: 'p', html: 'Lo útil para vos es saber que tu comprador probablemente esté comparando con Montevideo. Si tu casa tiene algo que en la capital cuesta conseguir (fondo grande, parrillero, garaje para dos autos, cercanía al mar), decilo en el título. Para el resto del aviso, usá la plantilla de <a href="/uruguay/anuncio-para-vender-una-casa/">anuncio para vender una casa</a>.' },
      ],
    },
    {
      id: 'barrios-de-ciudad-de-la-costa',
      h2: '¿Con qué casas se compara la mía?',
      blocks: [
        { t: 'p', html: 'Con casas de tu mismo barrio y a la misma distancia del mar. Ciudad de la Costa es una franja larga entre el arroyo Carrasco y el arroyo Pando, y el comprador piensa en barrios y en cuadras hasta la rambla.' },
        { t: 'table',
          caption: 'Referencias que usa el comprador en Ciudad de la Costa',
          head: ['Referencia', 'Lo que suele preguntar el comprador'],
          rows: [
            ['Barra de Carrasco y Shangrilá', 'Cercanía a Montevideo y al aeropuerto, tránsito para entrar a la capital'],
            ['Lagomar y Solymar', 'Comercio cerca, colegios, ómnibus por Giannattasio'],
            ['Lomas, Colinas y Médanos de Solymar', 'Terreno, tranquilidad, distancia a Avenida de las Américas'],
            ['El Pinar', 'Monte de pinos, casas con más terreno, distancia al centro de la ciudad'],
            ['Al sur de Giannattasio', 'Cuadras hasta la playa, humedad, saneamiento'],
          ],
          note: 'Referencias generales, sin precios.' },
        { t: 'p', html: 'Para ver cómo se presentan las propiedades de la zona, recorré las propiedades en Ciudad de la Costa en <a href="https://uy.casa-libre.com/propiedades-en/ciudad-de-la-costa">Casa-Libre</a>, o filtrá solo <a href="https://uy.casa-libre.com/propiedades?op=venta&amp;type=casa&amp;q=Ciudad%20de%20la%20Costa">casas en venta</a>.' },
      ],
    },
    {
      id: 'saneamiento-y-servicios',
      h2: '¿Por qué el comprador pregunta por el saneamiento?',
      blocks: [
        { t: 'p', html: 'Porque en Ciudad de la Costa la red de saneamiento se fue extendiendo por etapas y todavía hay casas con pozo negro que se vacía con barométrica. Para quien viene de Montevideo es una diferencia de gasto y de comodidad, y lo pregunta en el primer mensaje.' },
        { t: 'ul', items: [
          'Decí si la casa está conectada al saneamiento o usa pozo negro, y cada cuánto se vacía.',
          'Si la conexión está disponible en tu calle pero la casa no se conectó, aclaralo: el comprador puede querer hacerlo.',
          'Contá si la calle es de balasto o de asfalto y si se acumula agua cuando llueve.',
        ] },
      ],
    },
    {
      id: 'tributos-canelones',
      h2: '¿Qué tributos tiene que tener al día?',
      blocks: [
        { t: 'p', html: 'La contribución inmobiliaria y las tasas de la Intendencia de Canelones, porque Ciudad de la Costa es parte de ese departamento, y el impuesto de Primaria. El escribano pide los certificados antes de escriturar; si hay deuda, se paga antes o con el precio.' },
        { t: 'p', html: 'Más en <a href="/uruguay/contribucion-inmobiliaria-uruguay/">contribución inmobiliaria y Primaria</a>. Los papeles son los de todo el país: <a href="/uruguay/requisitos-para-vender-una-casa-uruguay/">requisitos para vender una casa</a>.' },
        { t: 'callout', tone: 'warn', title: 'Antes de decidir', html: 'Información general. Consultá con un escribano o contador antes de tomar decisiones.' },
      ],
    },
    {
      id: 'publicar-en-ciudad-de-la-costa',
      h2: '¿Cómo publico mi casa de Ciudad de la Costa?',
      blocks: [
        { t: 'p', html: 'Con el barrio, el punto exacto en el mapa y las distancias que importan: a Giannattasio, a la playa y a Montevideo. Sacá fotos de día, con el jardín, el parrillero y el frente. Publicar en Casa-Libre es gratis y las consultas te llegan por WhatsApp.' },
        { t: 'casalibre',
          title: 'Por qué te recomendamos Casa-Libre',
          html: 'Casa-Libre es un marketplace inmobiliario donde inmobiliarias, agentes y propietarios publican casas, apartamentos y terrenos gratis, con extras pagos opcionales. Los interesados contactan directo por WhatsApp y no hay comisión sobre la venta. Está en la web y en apps para iPhone y Android.',
          button: 'Ver cómo vender en Casa-Libre',
          href: 'https://uy.casa-libre.com/vender' },
      ],
    },
  ],
  faq: [
    { q: '¿Cuánto vale una casa en Ciudad de la Costa?', a: `En las casas publicadas en Casa-Libre al ${d}, la mediana pide ${fmtUsd(casa.median_usd)} (precios pedidos, no de cierre, sobre ${casa.listings_with_price} avisos). Tu precio depende del barrio, el terreno, el estado y si tiene saneamiento: compará con casas parecidas o pedí una <a href="/uruguay/tasacion-de-inmuebles-uruguay/">tasación</a>.` },
    { q: '¿Dónde pago la contribución en Ciudad de la Costa?', a: 'A la Intendencia de Canelones, con el número de padrón. Pedí el certificado de estar al día antes de vender.' },
    { q: '¿Afecta al precio no tener saneamiento?', a: 'Es una de las primeras preguntas del comprador. Decí con claridad si la casa está conectada o usa pozo negro: ocultarlo solo hace perder visitas.' },
    { q: '¿Dónde publico una casa en venta en Ciudad de la Costa?', a: 'Te recomendamos Casa-Libre: publicar es gratis, el aviso aparece al buscar por la ciudad y en el mapa, y los interesados te escriben por WhatsApp.' },
  ],
  internalSources: [
    { label: 'content/data/uy-market.json', url: 'https://uy.casa-libre.com/propiedades-en/ciudad-de-la-costa', date: '2026-11-13', note: 'Casa-Libre snapshot; casa_libre_pages for this city: /propiedades-en/ciudad-de-la-costa, /alquiler/casas/ciudad-de-la-costa (rental, not linked here).' },
  ],
  closing: {
    title: 'Tu casa de Ciudad de la Costa, publicada hoy',
    text: 'Publicar en Casa-Libre es gratis. Los interesados te escriben directo por WhatsApp.',
    button: 'Publicar mi casa',
    href: 'https://uy.casa-libre.com/publicar',
  },
  related: ['vender-casa-en-montevideo', 'requisitos-para-vender-una-casa-uruguay', 'contribucion-inmobiliaria-uruguay', 'tasacion-de-inmuebles-uruguay'],
};
