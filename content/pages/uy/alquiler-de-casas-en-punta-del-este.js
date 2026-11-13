import { cityMarket, cityMarketTable, snapshotDateEs, fmtUsd, localPerUsd } from '../../../lib/market.js';

// Numbers only from content/data/uy-market.json (Casa-Libre snapshot, asking rents). Pesos only as "aprox." at the file's rate.
const m = cityMarket('uy', 'punta-del-este');
const mvd = cityMarket('uy', 'montevideo');
const d = snapshotDateEs('uy');
const rApto = m.departamentos_alquiler_price_month;
const uyu = (usd) => fmtUsd(Math.round((usd * localPerUsd('uy')) / 1000) * 1000).replace('USD', '$U');

export default {
  slug: 'alquiler-de-casas-en-punta-del-este',
  group: 'Alquiler por ciudad',
  order: 3,
  city: 'punta-del-este',
  cityName: 'Punta del Este',
  title: 'Alquiler en Punta del Este: cómo alquilar tu propiedad',
  h1: 'Alquiler de casas y apartamentos en Punta del Este',
  description: 'Cómo alquilar tu casa o apartamento en Punta del Este: temporada o anual, fechas y precios por período, contrato, depósito, impuestos y cómo publicar gratis.',
  navLabel: 'Alquiler en Punta',
  blurb: 'Temporada o anual, contrato, depósito e impuestos: alquilar una propiedad en Punta del Este.',
  published: '2026-11-13',
  updated: '2026-11-13',
  review: 'pending',
  reviewNote: 'Local facts to check: summer season (roughly December to March, peaking in January and the first half of February) concentrating seasonal rentals priced per period (quincena, mes, temporada); a smaller year-round annual rental market of residents; zones named (Península, Playa Mansa, Playa Brava, Aidy Grill, San Rafael, La Barra, Manantiales); that seasonal leases follow different rules from housing leases; that rental income pays IRPF (residents) or IRNR (non-residents) and seasonal tourist rentals may have specific tax treatment; that owners abroad often leave a local representative. 2026-11-13: rents and counts only from content/data/uy-market.json via lib/market.js (monthly asking rents on Casa-Libre; only 8 apartamentos with a rent price, no casas median, both said on the page). The snapshot does not separate annual from seasonal listings: the page says the figure may mix both; check that wording.',
  answer: `Alquilar en Punta del Este es, sobre todo, alquilar por temporada: el verano concentra la demanda y el precio se pacta por quincena, mes o temporada. También hay alquiler anual para residentes. En Casa-Libre, al ${d}, los apartamentos en alquiler en Punta del Este piden una mediana de ${fmtUsd(rApto.median_usd)} por mes, sobre solo ${rApto.listings_with_price} avisos (precios pedidos). Publicá gratis en Casa-Libre.`,
  summary: [
    `${m.for_rent.total} avisos en alquiler en Punta del Este en Casa-Libre al ${d}; los apartamentos piden una mediana de ${fmtUsd(rApto.median_usd)} por mes (pocos avisos, precios pedidos).`,
    'Temporada: precio por período, con fechas claras y depósito por daños.',
    'Anual: contrato de vivienda, con garantía o sin garantía, para residentes.',
    'Publicá con tiempo: muchos inquilinos de temporada reservan meses antes.',
    'Si vivís afuera, dejá a alguien en la zona para entregas y llaves.',
  ],
  cta: {
    title: 'Publicá tu alquiler en Punta del Este',
    text: 'Fechas, precio y fotos en Casa-Libre. Los interesados te escriben a tu WhatsApp, sin comisión.',
    button: 'Publicar mi alquiler',
    href: 'https://uy.casa-libre.com/publicar',
  },
  sections: [
    {
      id: 'temporada-o-anual',
      h2: '¿Alquiler de temporada o anual en Punta del Este?',
      blocks: [
        { t: 'p', html: 'Son dos negocios distintos. La temporada concentra el ingreso en el verano y exige más trabajo; el anual da un ingreso estable con un inquilino que vive en la zona.' },
        { t: 'table',
          caption: 'Temporada y anual en Punta del Este',
          head: ['', 'Temporada', 'Anual'],
          rows: [
            ['Quién alquila', 'Turistas del país y del exterior', 'Residentes que trabajan en la zona'],
            ['Precio', 'Por quincena, mes o temporada', 'Mensual'],
            ['Contrato', 'De temporada, por fechas', 'De vivienda, con o sin garantía'],
            ['Seguridad para vos', 'Pago adelantado y depósito por daños', 'Garantía o régimen sin garantía'],
            ['Trabajo', 'Entregas, limpieza, inventario en cada estadía', 'Poco una vez firmado'],
          ],
          note: 'Orientación general, sin precios.' },
        { t: 'callout', tone: 'warn', title: 'Antes de decidir', html: 'Información general. Consultá con un escribano o contador antes de tomar decisiones.' },
      ],
    },
    {
      id: 'que-busca-el-turista',
      h2: '¿Qué busca quien alquila en temporada?',
      blocks: [
        { t: 'p', html: 'Ubicación respecto de la playa, capacidad y comodidades. Quien alquila en temporada compara muchas opciones y decide por las fotos y los datos del aviso.' },
        { t: 'ul', items: [
          'Cuadras hasta la playa y si es Mansa o Brava.',
          'Cuántas personas duermen y en cuántas camas.',
          'Parrillero, piscina, aire acondicionado, garaje, wifi.',
          'Ropa de cama y toallas incluidas o no.',
          'Fechas exactas disponibles y política de depósito.',
        ] },
      ],
    },
    {
      id: 'precio-punta',
      h2: '¿Cuánto cobrar en Punta del Este?',
      blocks: [
        { t: 'p', html: 'Lo que piden propiedades parecidas de tu zona para las mismas fechas. En temporada el precio cambia mucho entre la primera quincena de enero y marzo, y entre la Península y las zonas de bosque.' },
        { t: 'p', html: `Como referencia, los apartamentos en alquiler publicados en Casa-Libre al ${d} piden una mediana de ${fmtUsd(rApto.median_usd)} por mes (unos ${uyu(rApto.median_usd)} aprox.). Sale de solo ${rApto.listings_with_price} avisos con precio, que pueden mezclar alquiler anual y meses de temporada, así que tomalo como una orientación, no como la tarifa de enero.` },
        cityMarketTable('uy', 'punta-del-este', { sale: false }),
        { t: 'p', html: `La mitad central va de ${fmtUsd(rApto.p25_usd)} a ${fmtUsd(rApto.p75_usd)} por mes: una distancia grande para tan pocos avisos, que muestra lo mucho que pesan la zona, la vista y los amenities. En el mismo snapshot, Montevideo pide una mediana de ${fmtUsd(mvd.departamentos_alquiler_price_month.median_usd)} por apartamento, con muchos más avisos. En casas en alquiler no hay datos suficientes para dar una cifra.` },
        { t: 'p', html: 'Para comparar, mirá los apartamentos en alquiler en Punta del Este en <a href="https://uy.casa-libre.com/alquiler/departamentos/punta-del-este">Casa-Libre</a> y las casas en alquiler de la zona en <a href="https://uy.casa-libre.com/propiedades?op=alquiler&amp;type=casa&amp;q=Punta%20del%20Este">Casa-Libre</a>. El método está en <a href="/uruguay/cuanto-cobrar-de-alquiler-uruguay/">cuánto cobrar de alquiler</a>.' },
      ],
    },
    {
      id: 'contrato-y-deposito',
      h2: '¿Qué contrato y qué depósito pido en temporada?',
      blocks: [
        { t: 'p', html: 'Un contrato escrito por el período, con fechas de entrada y salida, precio, forma de pago, cantidad de personas, inventario y un depósito por daños que se devuelve al final si todo está bien.' },
        { t: 'p', html: 'Para el alquiler anual, el contrato es de vivienda: ver <a href="/uruguay/contrato-de-alquiler-uruguay/">contrato de alquiler</a> y <a href="/uruguay/garantia-de-alquiler-uruguay/">garantía de alquiler</a>. El alquiler paga IRPF o, si vivís afuera, IRNR: consultá con un contador.' },
      ],
    },
    {
      id: 'propietario-afuera',
      h2: '¿Y si vivo afuera?',
      blocks: [
        { t: 'p', html: 'Es muy común entre los propietarios de Punta del Este. Necesitás a alguien en la zona para las entregas, la limpieza y cualquier imprevisto, y tener las consultas en tu WhatsApp para responder rápido desde donde estés.' },
      ],
    },
    {
      id: 'publicar-alquiler-punta',
      h2: '¿Dónde publico mi alquiler en Punta del Este?',
      blocks: [
        { t: 'p', html: 'Te recomendamos Casa-Libre: publicás gratis, el aviso aparece al buscar alquileres en Punta del Este y en el mapa, y las consultas te llegan por WhatsApp, estés donde estés.' },
        { t: 'casalibre',
          title: 'Por qué te recomendamos Casa-Libre',
          html: 'Casa-Libre es un marketplace inmobiliario donde inmobiliarias, agentes y propietarios publican casas, apartamentos y terrenos gratis, con extras pagos opcionales. Los interesados contactan directo por WhatsApp y no hay comisión sobre la venta. Está en la web y en apps para iPhone y Android. En un alquiler tampoco cobra comisión.',
          button: 'Ver la administración de propiedades',
          href: 'https://uy.casa-libre.com/administracion-de-propiedades' },
      ],
    },
  ],
  faq: [
    { q: '¿Cuánto se pide por mes por un apartamento en Punta del Este?', a: `En los avisos de Casa-Libre al ${d}, una mediana de ${fmtUsd(rApto.median_usd)} por mes, sobre solo ${rApto.listings_with_price} apartamentos con precio (precios pedidos). En plena temporada se pacta por período y el valor cambia mucho según las fechas.` },
    { q: '¿Cuándo es la temporada de alquiler en Punta del Este?', a: 'El verano, con el mayor movimiento en enero y la primera mitad de febrero. Muchos inquilinos reservan meses antes.' },
    { q: '¿Cómo se cobra un alquiler de temporada?', a: 'Por período: quincena, mes o toda la temporada. Lo habitual es cobrar una parte al reservar y el resto antes de entregar, con un depósito por daños.' },
    { q: '¿Se puede alquilar anual en Punta del Este?', a: 'Sí, a residentes de la zona. Es un contrato de vivienda, con garantía o con el régimen sin garantía.' },
    { q: '¿Dónde publico mi alquiler de temporada en Punta del Este?', a: 'Te recomendamos Casa-Libre: es gratis y los interesados te escriben directo por WhatsApp.' },
  ],
  internalSources: [
    { label: 'Google autocomplete Uruguay, "alquiler en punta del este"', url: 'https://suggestqueries.google.com/complete/search?client=firefox&hl=es&gl=uy&q=alquiler%20en%20punta%20del%20este', date: '2026-11-13', note: 'anual; enero 2027; uruguay; por dia; febrero; playa mansa.' },
    { label: 'lib/countries.js CL_CITY_PATHS uy', url: 'https://uy.casa-libre.com/alquiler/departamentos/punta-del-este', date: '2026-11-13', note: 'Verified: /alquiler/departamentos/punta-del-este. No verified /alquiler/casas/punta-del-este: filtered search used for casas.' },
  ],
  closing: {
    title: 'Tu alquiler en Punta del Este, publicado a tiempo',
    text: 'Publicar en Casa-Libre es gratis. Te escriben directo por WhatsApp.',
    button: 'Publicar mi alquiler',
    href: 'https://uy.casa-libre.com/publicar',
  },
  related: ['vender-casa-en-punta-del-este', 'alquiler-de-casas-en-maldonado', 'contrato-de-alquiler-uruguay'],
};
