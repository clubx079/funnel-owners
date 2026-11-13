import { cityMarket, marketCities, snapshotDateEs, fmtUsd } from '../../../lib/market.js';

// Asking prices only from content/data/bo-market.json (Casa-Libre snapshot).
const d = snapshotDateEs('bo');
const med = (p) => (p ? `${fmtUsd(p.median_usd)} (${p.listings_with_price} con precio)` : 'Sin dato: muy pocos avisos con precio');
const ventaRows = marketCities('bo').map((slug) => { const c = cityMarket('bo', slug); return [c.name, med(c.casas_venta_price), med(c.departamentos_venta_price)]; });

export default {
  slug: 'avaluo-de-inmuebles-bolivia',
  group: 'Precios y valor',
  order: 1,
  equivalentOf: 'tasacion-de-inmuebles-paraguay',
  title: 'Avalúo de inmuebles en Bolivia: qué es y cuándo hacerlo',
  h1: 'Avalúo de inmuebles en Bolivia',
  description: 'Qué es el avalúo de una casa en Bolivia, quién lo hace, cuándo lo necesitas, en qué se diferencia del avalúo fiscal y cómo estimar el precio de venta tú mismo.',
  navLabel: 'Avalúo',
  blurb: 'Qué es un avalúo, quién lo hace, cuándo hace falta y cómo estimar tú mismo el precio de tu casa.',
  published: '2026-11-13',
  updated: '2026-11-13',
  review: 'pending',
  reviewNote: 'A Bolivian appraiser/lawyer should check: that commercial avalúos for bank loans are done by peritos valuadores registered with each bank (ASFI-supervised entities); the difference between avalúo comercial and avalúo fiscal/catastral used for IPBI and IMT base; typical uses (credit, herencia, división, judicial). No fees are stated. 2026-11-13: added a table of asking-price medians per city built only from content/data/bo-market.json via lib/market.js (asking prices, not closing prices or appraisals).',
  answer: 'Un avalúo es un informe firmado por un perito valuador que estima el valor comercial de una casa o terreno. En Bolivia se pide sobre todo cuando el comprador usa un crédito bancario, en herencias o en divisiones. No es lo mismo que el avalúo fiscal del municipio, que sirve para los impuestos. Para poner precio de venta, también puedes comparar con casas parecidas publicadas en Casa-Libre.',
  summary: [
    'El avalúo comercial lo hace un perito y estima el valor de mercado.',
    'El avalúo fiscal lo fija el municipio y sirve para el IPBI y el IMT.',
    'El banco del comprador suele pedir su propio avalúo con un perito registrado.',
    'Para fijar tu precio, comparar con casas parecidas es el primer paso.',
  ],
  cta: {
    title: 'Compara y publica',
    text: 'Mira casas parecidas y publica la tuya gratis en Casa-Libre.',
    button: 'Publicar mi casa',
    href: 'https://casa-libre.com.bo/publicar',
  },
  sections: [
    {
      id: 'que-es-un-avaluo',
      h2: '¿Qué es un avalúo de inmuebles?',
      blocks: [
        { t: 'p', html: 'Es un informe técnico que estima cuánto vale un inmueble en el mercado, a partir de su ubicación, superficie, construcción, estado y ventas u ofertas comparables.' },
        { t: 'table',
          caption: 'Avalúo comercial y avalúo fiscal',
          head: ['', 'Avalúo comercial', 'Avalúo fiscal'],
          rows: [
            ['Quién lo hace', 'Un perito valuador', 'El gobierno municipal'],
            ['Para qué sirve', 'Crédito, herencia, división, venta', 'Calcular el IPBI y como referencia del IMT'],
            ['Refleja', 'El valor de mercado estimado', 'Un valor por tablas de zona y construcción'],
            ['Costo', 'Honorarios del perito', 'Ninguno: figura en tu liquidación'],
          ],
          note: 'Información general al 13 de noviembre de 2026.' },
        { t: 'callout', tone: 'warn', title: 'Información general', html: 'Información general. Consulta con un perito valuador o un abogado antes de tomar decisiones.' },
      ],
    },
    {
      id: 'cuando-hace-falta',
      h2: '¿Cuándo necesito un avalúo?',
      blocks: [
        { t: 'p', html: 'No es obligatorio para vender. Se vuelve necesario en algunos casos concretos.' },
        { t: 'ul', items: [
          'Cuando el comprador paga con crédito: su banco encarga el avalúo a un perito registrado.',
          'En una herencia o una división entre copropietarios, para repartir con un valor objetivo.',
          'En un proceso judicial.',
          'Cuando tu casa es difícil de comparar y quieres una referencia profesional.',
        ] },
      ],
    },
    {
      id: 'estimar-tu-precio',
      h2: '¿Cómo estimo el precio de mi casa sin avalúo?',
      blocks: [
        { t: 'p', html: 'Comparando con casas parecidas en tu zona. Es lo mismo que hace un perito como primer paso.' },
        { t: 'steps', items: [
          { title: 'Busca cinco comparables', html: 'Misma zona, superficie parecida, mismos dormitorios.' },
          { title: 'Calcula el precio por m²', html: 'Precio pedido dividido por la superficie construida.' },
          { title: 'Ajusta', html: 'Por estado, garaje, patio, piso o vista.' },
          { title: 'Decide tu rango', html: 'Un precio de publicación y un mínimo.' },
        ] },
        { t: 'example',
          title: 'Ejemplo ilustrativo: estimación por comparables',
          html: 'Cifras redondas e inventadas.',
          rows: [
            ['Comparable A: USD 150.000 / 200 m²', 'USD 750 por m²'],
            ['Comparable B: USD 126.000 / 180 m²', 'USD 700 por m²'],
            ['Tu casa: 190 m² x USD 725', 'USD 137.750'],
          ] },
        { t: 'p', html: 'Para buscar comparables, usa el mapa de <a href="https://casa-libre.com.bo/propiedades">Casa-Libre</a> y la guía de <a href="https://casa-libre.com.bo/guias/cuanto-vale-mi-propiedad">Casa-Libre</a> sobre cuánto vale tu propiedad.' },
      ],
    },
    {
      id: 'que-mira-el-perito',
      h2: '¿Qué mira el perito en un avalúo?',
      blocks: [
        { t: 'p', html: 'Lo mismo que el comprador, con método. Conviene tener todo a mano cuando venga.' },
        { t: 'ul', items: [
          'Folio Real, plano aprobado y datos catastrales.',
          'Superficie del terreno y construida reales.',
          'Materiales, estado y antigüedad.',
          'Servicios y accesos.',
          'Ofertas y ventas comparables de la zona.',
        ] },
      ],
    },
    {
      id: 'precios-publicados',
      h2: '¿Qué precios piden hoy las casas publicadas?',
      blocks: [
        { t: 'p', html: `Antes de pagar un avalúo, mira lo que piden los vendedores. La tabla muestra la mediana de lo publicado en Casa-Libre al ${d} en las tres ciudades con suficientes avisos: la mitad pide menos y la otra mitad, más. Son precios pedidos, no precios de cierre ni valores de avalúo.` },
        { t: 'table',
          caption: `Precios pedidos en Casa-Libre, ${d}`,
          head: ['Ciudad', 'Casas: mediana', 'Departamentos: mediana'],
          rows: ventaRows,
          note: `Propiedades activas publicadas en Casa-Libre al ${d}. Precios pedidos en dólares, no de cierre. Con menos de 10 avisos con precio, la mediana es solo una referencia gruesa.` },
        { t: 'p', html: 'Un número de toda la ciudad no es el precio de tu casa: mezcla zonas, tamaños y estados muy distintos. Úsalo para saber si tu idea de precio está en un rango razonable, y después compara con tres a cinco propiedades parecidas de tu zona. Si tu casa se aleja mucho de lo que se publica, ahí sí un avalúo te da un respaldo para negociar.' },
        { t: 'p', html: 'Más detalle de cada ciudad en <a href="/bolivia/vender-casa-en-santa-cruz-de-la-sierra/">Santa Cruz</a>, <a href="/bolivia/vender-casa-en-la-paz/">La Paz</a> y <a href="/bolivia/vender-casa-en-cochabamba/">Cochabamba</a>.' },
      ],
    },
    {
      id: 'avaluo-y-precio',
      h2: '¿El avalúo es el precio al que voy a vender?',
      blocks: [
        { t: 'p', html: 'No necesariamente. Es una referencia. El precio final lo fija lo que un comprador está dispuesto a pagar. Si el avalúo del banco sale más bajo que el precio acordado, el comprador puede necesitar poner más dinero propio o renegociar.' },
        { t: 'p', html: 'Si la venta se frena por precio, mira <a href="/bolivia/vendo-casa-urgente/">vendo casa urgente</a>. Sobre los papeles que también mira el perito: <a href="/bolivia/folio-real-bolivia/">Folio Real</a>.' },
      ],
    },
  ],
  faq: [
    { q: '¿Qué es un avalúo de inmueble en Bolivia?', a: 'Un informe de un perito valuador que estima el valor comercial de una casa o terreno.' },
    { q: '¿Cuánto cuesta un avalúo?', a: 'Depende del perito y del inmueble. Pide presupuesto a más de uno. Si es para un crédito, suele pagarlo el comprador, según las reglas de su banco.' },
    { q: '¿El avalúo fiscal es el valor de mi casa?', a: 'No. Es el valor que usa el municipio para los impuestos y suele ser distinto del valor de mercado.' },
    { q: '¿Necesito un avalúo para vender mi casa?', a: 'No es obligatorio. Pero si el comprador usa crédito, su banco hará uno.' },
    { q: '¿Cuánto piden por una casa en Bolivia?', a: `Depende mucho de la ciudad y la zona. En lo publicado en Casa-Libre al ${d}, la mediana de las casas en Santa Cruz de la Sierra pide ${fmtUsd(cityMarket('bo', 'santa-cruz-de-la-sierra').casas_venta_price.median_usd)} (precios pedidos, no de cierre). Compara siempre con casas parecidas de tu zona.` },
  ],
  internalSources: [
    { label: 'Google autocomplete gl=bo "avaluo de inmuebles"', url: 'https://suggestqueries.google.com/complete/search?client=firefox&hl=es&gl=bo&q=avaluo%20de%20inmuebles', date: '2026-11-13', note: '"avalúo" is the usual word; "tasacion de inmuebles bolivia" returns nothing.' },
  ],
  closing: {
    title: 'Con tu precio claro, a publicar',
    text: 'Publica gratis en Casa-Libre y recibe consultas por WhatsApp.',
    button: 'Publicar en Casa-Libre',
    href: 'https://casa-libre.com.bo/publicar',
  },
  related: ['', 'impuesto-a-la-propiedad-de-bienes-inmuebles-bolivia', 'vendo-casa-urgente'],
};
