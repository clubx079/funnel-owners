import { cityMarket, cityMarketTable, snapshotDateEs, fmtUsd } from '../../../lib/market.js';

// Numbers only from content/data/uy-market.json (Casa-Libre snapshot, asking prices).
const m = cityMarket('uy', 'maldonado');
const pde = cityMarket('uy', 'punta-del-este');
const mvd = cityMarket('uy', 'montevideo');
const d = snapshotDateEs('uy');
const apto = m.departamentos_venta_price;

export default {
  slug: 'vender-casa-en-maldonado',
  group: 'Vender por ciudad',
  order: 2,
  city: 'maldonado',
  cityName: 'Maldonado',
  title: 'Vender una casa en Maldonado: quién compra y cómo publicar',
  h1: 'Vender una casa en Maldonado',
  description: 'Cómo vender tu casa en Maldonado: quién compra para vivir todo el año, en qué se diferencia de Punta del Este, tributos de la Intendencia y cómo publicar gratis.',
  navLabel: 'Casa en Maldonado',
  blurb: 'Compradores, temporada, tributos de la Intendencia y cómo publicar gratis una casa en la ciudad de Maldonado.',
  published: '2026-11-13',
  updated: '2026-11-13',
  review: 'pending',
  reviewNote: 'Local facts to check before indexing: Maldonado is the capital of the departamento de Maldonado, about 130 km from Montevideo by the Ruta Interbalnearia, and borders Punta del Este; references used (Centro with the plaza and the cathedral, Cerro Pelado, Maldonado Nuevo, the Avenida Roosevelt towards Punta del Este, San Carlos nearby); that buyers include year-round residents working in tourism, construction and services and families moving from Montevideo; that contribución inmobiliaria is paid to the Intendencia de Maldonado. Tax facts as in national pages. 2026-11-13: prices and counts only from content/data/uy-market.json via lib/market.js (asking prices on Casa-Libre, not closing prices; no casas median, only apartamentos, said on the page).',
  answer: `Para vender una casa en Maldonado, compará con casas parecidas de tu zona de la ciudad, no con Punta del Este, que tiene otro público. Tené la contribución de la Intendencia y la Primaria al día. Según lo publicado en Casa-Libre al ${d} (precios pedidos, no de cierre), los apartamentos en venta en Maldonado piden una mediana de ${fmtUsd(apto.median_usd)}, frente a ${fmtUsd(pde.departamentos_venta_price.median_usd)} en Punta del Este. Publicá gratis en Casa-Libre.`,
  summary: [
    `${m.for_sale.total} avisos en venta en Maldonado en Casa-Libre al ${d}; los apartamentos piden una mediana de ${fmtUsd(apto.median_usd)} (precios pedidos, no de cierre).`,
    'Maldonado es la capital del departamento y una ciudad para vivir todo el año, al lado de Punta del Este.',
    'Muchos compradores trabajan en la zona o se mudan desde Montevideo: buscan casa para el día a día.',
    'Compará con casas de Maldonado, no de Punta del Este: son mercados distintos.',
    'La contribución se paga a la Intendencia de Maldonado y tiene que estar al día para escriturar.',
  ],
  cta: {
    title: 'Publicá tu casa de Maldonado gratis',
    text: 'Fotos, precio y ubicación desde la web o la app. Los interesados te escriben por WhatsApp.',
    button: 'Publicar mi casa gratis',
    href: 'https://uy.casa-libre.com/publicar',
  },
  sections: [
    {
      id: 'cuanto-piden-en-maldonado',
      h2: '¿Cuánto piden por una propiedad en Maldonado?',
      blocks: [
        { t: 'p', html: `En apartamentos, la mitad pide menos de ${fmtUsd(apto.median_usd)} y la otra mitad, más: es la mediana de ${apto.listings_with_price} apartamentos con precio publicados en Casa-Libre al ${d}. Son precios pedidos, no precios de cierre.` },
        cityMarketTable('uy', 'maldonado', { rent: false }),
        { t: 'p', html: `En casas hay muy pocas publicadas con precio para dar una mediana, así que no inventamos un número: si vendés una casa, compará con casas parecidas de tu zona y, si dudás, pedí una tasación.` },
        { t: 'p', html: `El dato que más sirve es la diferencia con Punta del Este: en el mismo snapshot, los apartamentos publicados allá piden una mediana de ${fmtUsd(pde.departamentos_venta_price.median_usd)}, bastante más que en Maldonado, y los de Montevideo ${fmtUsd(mvd.departamentos_venta_price.median_usd)}, cerca de Maldonado. Por eso usar precios de Punta del Este para una propiedad de Maldonado suele dejarla fuera de mercado.` },
      ],
    },
    {
      id: 'quien-compra-en-maldonado',
      h2: '¿Quién compra casa en Maldonado?',
      blocks: [
        { t: 'p', html: 'Sobre todo gente que va a vivir todo el año: familias que trabajan en el turismo, la construcción o los servicios de la zona, y montevideanos que se mudan buscando otra calidad de vida. También hay quien compra para alquilar a esos mismos residentes.' },
        { t: 'table',
          caption: 'Compradores habituales en la ciudad de Maldonado',
          head: ['Comprador', 'Qué busca', 'Qué destacar en el aviso'],
          rows: [
            ['Familia que vive y trabaja en la zona', 'Casa con dormitorios, patio y escuelas cerca', 'Dormitorios, fondo, distancia a escuelas y centro'],
            ['Quien se muda desde Montevideo', 'Vivir todo el año cerca del mar', 'Calefacción, conexión, distancia a la Interbalnearia'],
            ['Quien compra para alquilar', 'Algo que se alquile anual', 'Estado, gastos bajos, ubicación'],
            ['Quien busca algo cerca de Punta del Este', 'Precio menor con acceso a la playa', 'Minutos hasta la Avenida Roosevelt o la Playa Mansa'],
          ],
          note: 'Orientación general, sin precios.' },
      ],
    },
    {
      id: 'zonas-de-maldonado',
      h2: '¿Qué zonas de Maldonado se comparan entre sí?',
      blocks: [
        { t: 'p', html: 'Compará dentro de tu zona. El Centro, con la plaza y la catedral, se vende distinto que Cerro Pelado o Maldonado Nuevo, y las casas hacia la Avenida Roosevelt se acercan al público de Punta del Este.' },
        { t: 'p', html: 'Para comparar, mirá las casas en venta en Maldonado en <a href="https://uy.casa-libre.com/venta/casas/maldonado">Casa-Libre</a>. Si vendés un apartamento, también están los apartamentos en venta de la ciudad en <a href="https://uy.casa-libre.com/venta/departamentos/maldonado">Casa-Libre</a>.' },
      ],
    },
    {
      id: 'maldonado-o-punta',
      h2: '¿Maldonado y Punta del Este son el mismo mercado?',
      blocks: [
        { t: 'p', html: 'No. Están pegadas y comparten Intendencia, pero Punta del Este vive mucho de la temporada y de compradores de afuera, mientras que Maldonado es sobre todo una ciudad para vivir. Usar precios de Punta del Este para una casa en Maldonado suele dejarla fuera de mercado.' },
        { t: 'p', html: 'Si tu casa está en Punta del Este o en sus barrios, leé <a href="/uruguay/vender-casa-en-punta-del-este/">vender una casa en Punta del Este</a>.' },
      ],
    },
    {
      id: 'tributos-maldonado',
      h2: '¿Qué tributos tienen que estar al día?',
      blocks: [
        { t: 'p', html: 'La contribución inmobiliaria y las tasas de la Intendencia de Maldonado, y el impuesto de Primaria. El escribano pide los certificados antes de la escritura; si hay deuda, se paga antes o con el precio.' },
        { t: 'p', html: 'Más en <a href="/uruguay/contribucion-inmobiliaria-uruguay/">contribución inmobiliaria y Primaria</a>. Los impuestos de la venta son los mismos que en todo el país: <a href="/uruguay/itp-uruguay/">ITP</a> y, si hay ganancia, IRPF.' },
        { t: 'callout', tone: 'warn', title: 'Antes de decidir', html: 'Información general. Consultá con un escribano o contador antes de tomar decisiones.' },
      ],
    },
    {
      id: 'temporada',
      h2: '¿Cuándo conviene publicar en Maldonado?',
      blocks: [
        { t: 'p', html: 'Cuanto antes. Para quien busca vivir todo el año la demanda es más pareja que en Punta del Este, aunque en verano llega más gente a la zona y algunos aprovechan para mirar casas.' },
        { t: 'p', html: 'Si estás en Montevideo y la casa queda en Maldonado, dejá a alguien de confianza para las visitas, o coordiná un par de días fijos para mostrarla.' },
      ],
    },
    {
      id: 'publicar-en-maldonado',
      h2: '¿Cómo publico mi casa de Maldonado?',
      blocks: [
        { t: 'p', html: 'Con la zona y el punto exacto en el mapa, las distancias que importan y fotos de día. Publicar en Casa-Libre es gratis y las consultas te llegan por WhatsApp.' },
        { t: 'casalibre',
          title: 'Por qué te recomendamos Casa-Libre',
          html: 'Casa-Libre es un marketplace inmobiliario donde inmobiliarias, agentes y propietarios publican casas, apartamentos y terrenos gratis, con extras pagos opcionales. Los interesados contactan directo por WhatsApp y no hay comisión sobre la venta. Está en la web y en apps para iPhone y Android.',
          button: 'Ver cómo vender en Casa-Libre',
          href: 'https://uy.casa-libre.com/vender' },
      ],
    },
  ],
  faq: [
    { q: '¿Cuánto vale una casa en Maldonado?', a: 'Depende de la zona, los metros, el estado y si está pensada para vivir todo el año. Compará con casas parecidas de tu zona de Maldonado, no de Punta del Este.' },
    { q: '¿Dónde pago la contribución en Maldonado?', a: 'A la Intendencia de Maldonado, con el número de padrón. Pedí el certificado de estar al día antes de vender.' },
    { q: '¿Puedo vender mi casa de Maldonado viviendo en Montevideo?', a: 'Sí. Podés publicar desde donde estés, coordinar visitas con alguien de confianza y firmar con poder si no podés viajar.' },
    { q: '¿Dónde publico una casa en venta en Maldonado?', a: 'Te recomendamos Casa-Libre: publicar es gratis y los interesados te escriben directo por WhatsApp.' },
  ],
  internalSources: [
    { label: 'Google autocomplete Uruguay, "vender casa en maldonado", "contribucion inmobiliaria maldonado"', url: 'https://suggestqueries.google.com/complete/search?client=firefox&hl=es&gl=uy&q=vender%20casa%20en%20maldonado', date: '2026-11-13', note: '"casa para vender en maldonado"; contribucion inmobiliaria maldonado.' },
    { label: 'lib/countries.js CL_CITY_PATHS uy', url: 'https://uy.casa-libre.com/venta/casas/maldonado', date: '2026-11-13', note: 'Verified: /venta/casas/maldonado, /venta/departamentos/maldonado.' },
  ],
  closing: {
    title: 'Tu casa de Maldonado, publicada hoy',
    text: 'Publicar en Casa-Libre es gratis. Los interesados te escriben directo por WhatsApp.',
    button: 'Publicar mi casa',
    href: 'https://uy.casa-libre.com/publicar',
  },
  related: ['vender-casa-en-punta-del-este', 'alquiler-de-casas-en-maldonado', 'requisitos-para-vender-una-casa-uruguay'],
};
