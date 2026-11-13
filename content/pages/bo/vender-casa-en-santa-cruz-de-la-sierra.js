import { cityMarket, cityMarketTable, snapshotDateEs, fmtUsd } from '../../../lib/market.js';

// Numbers only from content/data/bo-market.json (Casa-Libre snapshot, asking prices).
const m = cityMarket('bo', 'santa-cruz-de-la-sierra');
const lp = cityMarket('bo', 'la-paz');
const cb = cityMarket('bo', 'cochabamba');
const d = snapshotDateEs('bo');
const casa = m.casas_venta_price;
const depto = m.departamentos_venta_price;

export default {
  slug: 'vender-casa-en-santa-cruz-de-la-sierra',
  group: 'Vender por ciudad',
  order: 1,
  city: 'santa-cruz-de-la-sierra',
  cityName: 'Santa Cruz de la Sierra',
  title: 'Vender una casa en Santa Cruz de la Sierra: guía para dueños',
  h1: 'Vender una casa en Santa Cruz de la Sierra',
  description: 'Cómo vender tu casa en Santa Cruz de la Sierra: anillos y zonas, condominios, qué pregunta el comprador cruceño, papeles en el municipio y dónde publicarla gratis.',
  navLabel: 'Casa en Santa Cruz',
  blurb: 'Zonas, anillos, condominios y papeles para vender tu casa en Santa Cruz de la Sierra.',
  published: '2026-11-13',
  updated: '2026-11-13',
  review: 'pending',
  reviewNote: 'Local section to verify with a cruceño notario/agent: city organised by concentric anillos and radiales; zona norte, Equipetrol, Urbarí, Las Palmas, Plan Tres Mil, Villa Primero de Mayo as known zones; Urubó across the Piraí river belongs to the Porongo municipality (IPBI/IMT paid there); Warnes and Viru Viru airport to the north; condominios cerrados common; heat makes shade, ventilation and air conditioning selling points; IMT 3% liquidated by the Gobierno Autónomo Municipal de Santa Cruz de la Sierra; Derechos Reales office in the city. 2026-11-13: prices and counts now come only from content/data/bo-market.json via lib/market.js (asking prices on Casa-Libre, not closing prices; no boliviano conversion on purpose, see COUNTRY_GUIDE). Check the price-setting advice (start inside the middle half, adjust after two to three weeks) reads as general guidance, not a promise.',
  answer: `Para vender una casa en Santa Cruz de la Sierra, ubica tu zona por anillo, compara con casas parecidas y ten el Folio Real, el alodial y el impuesto municipal al día. Según las propiedades publicadas en Casa-Libre al ${d} (precios pedidos, no de cierre), la mediana de las casas en venta en Santa Cruz pide ${fmtUsd(casa.median_usd)}. Puedes publicar la tuya gratis en Casa-Libre.`,
  summary: [
    `${m.for_sale.total} avisos en venta en Santa Cruz en Casa-Libre al ${d}; la mitad central de las casas pide ${fmtUsd(casa.p25_usd)} a ${fmtUsd(casa.p75_usd)} (precios pedidos).`,
    'En Santa Cruz la ubicación se explica por anillos y radiales: dilo siempre en el aviso.',
    'Condominio cerrado, seguridad, patio y aire acondicionado son preguntas frecuentes.',
    'Si la casa está en el Urubó, los impuestos se pagan en otro municipio, no en Santa Cruz.',
  ],
  cta: {
    title: 'Publica tu casa en Santa Cruz',
    text: 'Sube fotos, precio y ubicación desde la web o la app. Los interesados te escriben directo por WhatsApp.',
    button: 'Publicar mi casa gratis',
    href: 'https://casa-libre.com.bo/publicar',
  },
  sections: [
    {
      id: 'cuanto-piden-en-santa-cruz',
      h2: '¿Cuánto piden por una casa en Santa Cruz de la Sierra?',
      blocks: [
        { t: 'p', html: `La mitad de las casas en venta en Santa Cruz pide menos de ${fmtUsd(casa.median_usd)} y la otra mitad, más. Es la mediana de ${casa.listings_with_price} casas con precio publicadas en Casa-Libre al ${d}: precios pedidos por los vendedores, no precios de cierre.` },
        cityMarketTable('bo', 'santa-cruz-de-la-sierra', { rent: false }),
        { t: 'p', html: `La mitad central va de ${fmtUsd(casa.p25_usd)} a ${fmtUsd(casa.p75_usd)}: la distancia entre una casa de barrio en los anillos exteriores y una en condominio de la zona norte. La mediana te ubica; tu precio sale de casas parecidas de tu zona. Los departamentos son la mayor parte de la oferta, con mediana de ${fmtUsd(depto.median_usd)}.` },
      ],
    },
    {
      id: 'zonas-de-santa-cruz',
      h2: '¿Cómo influye la zona en el precio de una casa en Santa Cruz?',
      blocks: [
        { t: 'p', html: 'Mucho. Santa Cruz de la Sierra crece en anillos concéntricos cruzados por avenidas radiales, y el comprador piensa así: "entre tercer y cuarto anillo, zona norte". Ese dato va en el título del aviso.' },
        { t: 'table',
          caption: 'Cómo describen los compradores las zonas de Santa Cruz',
          head: ['Referencia', 'Qué suele buscar ahí el comprador'],
          rows: [
            ['Casco viejo y primeros anillos', 'Cercanía al centro, comercio, casas antiguas para reformar'],
            ['Zona norte y Equipetrol', 'Departamentos, oficinas, condominios, vida comercial'],
            ['Urbarí, Las Palmas y el oeste', 'Casas familiares con patio, cerca de colegios'],
            ['Anillos exteriores y nuevas urbanizaciones', 'Primera vivienda, más terreno por el mismo dinero'],
            ['Plan Tres Mil y Villa Primero de Mayo', 'Barrios grandes con comercio propio y transporte'],
            ['Urubó, del otro lado del río Piraí', 'Condominios cerrados con áreas verdes; otro municipio'],
          ],
          note: 'Referencias generales de zona, sin precios.' },
      ],
    },
    {
      id: 'que-pregunta-el-comprador',
      h2: '¿Qué pregunta el comprador cruceño?',
      blocks: [
        { t: 'p', html: 'Además del precio y los papeles, el clima y la seguridad pesan. Ten las respuestas en la descripción y te ahorras mensajes.' },
        { t: 'ul', items: [
          '¿Es condominio cerrado o casa de calle? ¿Hay seguridad?',
          '¿Cuánta sombra tiene el patio y hacia dónde dan los dormitorios?',
          '¿Tiene aire acondicionado o las instalaciones listas?',
          '¿La calle se inunda con las lluvias fuertes?',
          '¿A qué distancia está del anillo o la avenida más cercana?',
        ] },
        { t: 'p', html: 'Para ver cómo se presentan casas de tu zona, mira las casas en venta en Santa Cruz de la Sierra en <a href="https://casa-libre.com.bo/venta/casas/santa-cruz-de-la-sierra">Casa-Libre</a>.' },
      ],
    },
    {
      id: 'urubo-y-otros-municipios',
      h2: '¿Mi casa está en Santa Cruz o en otro municipio?',
      blocks: [
        { t: 'p', html: 'Revísalo, porque cambia dónde se pagan los impuestos. El área metropolitana incluye municipios vecinos: el Urubó pertenece a Porongo, y hacia el norte están Warnes y el aeropuerto de Viru Viru.' },
        { t: 'p', html: 'El impuesto a la propiedad y el impuesto a la transferencia se pagan en el municipio donde está el inmueble. Si tu casa está fuera de Santa Cruz de la Sierra, pide la liquidación allá.' },
      ],
    },
    {
      id: 'papeles-en-santa-cruz',
      h2: '¿Qué papeles necesito para vender en Santa Cruz?',
      blocks: [
        { t: 'p', html: 'Los mismos que en todo el país: Folio Real y certificado alodial de Derechos Reales, testimonio, impuesto a la propiedad pagado en el Gobierno Autónomo Municipal de Santa Cruz de la Sierra y registro catastral.' },
        { t: 'p', html: 'La lista completa está en <a href="/bolivia/requisitos-para-vender-una-casa-bolivia/">requisitos para vender una casa en Bolivia</a>, y el impuesto de la venta, del 3%, en <a href="/bolivia/impuesto-a-la-transferencia-de-inmuebles-bolivia/">impuesto a la transferencia</a>.' },
        { t: 'callout', tone: 'warn', title: 'Información general', html: 'Información general. Consulta con un notario de fe pública o un abogado antes de tomar decisiones.' },
      ],
    },
    {
      id: 'condominio',
      h2: '¿Qué cambia si mi casa está en un condominio?',
      blocks: [
        { t: 'p', html: 'El comprador va a preguntar por las expensas del condominio, el reglamento y los servicios comunes. Pide a la administración una constancia de que estás al día.' },
        { t: 'ul', items: [
          'Monto de las expensas y qué cubren: seguridad, áreas verdes, piscina.',
          'Reglas sobre mascotas, construcciones y alquiler.',
          'Fotos de las áreas comunes en el aviso.',
        ] },
      ],
    },
    {
      id: 'publicar-en-santa-cruz',
      h2: '¿Dónde publico mi casa en venta en Santa Cruz?',
      blocks: [
        { t: 'p', html: 'Donde el comprador busca por ciudad y por mapa. Te recomendamos Casa-Libre: gratis, con contacto directo por WhatsApp y sin comisión sobre la venta.' },
        { t: 'casalibre',
          title: 'Vende en Casa-Libre',
          html: 'Casa-Libre es un marketplace inmobiliario donde inmobiliarias, agentes y propietarios publican casas, departamentos y terrenos gratis, con extras pagos opcionales. Los interesados contactan directo por WhatsApp y no hay comisión sobre la venta. Está en la web y en apps para iPhone y Android.',
          button: 'Ver cómo vender en Casa-Libre',
          href: 'https://casa-libre.com.bo/vender' },
        { t: 'p', html: 'Si vendes un departamento, compáralo con los departamentos en venta en Santa Cruz en <a href="https://casa-libre.com.bo/venta/departamentos/santa-cruz-de-la-sierra">Casa-Libre</a>.' },
      ],
    },
  ],
  faq: [
    { q: '¿Cómo vender mi casa en Santa Cruz de la Sierra?', a: 'Con papeles al día, un precio comparado con casas de tu misma zona y un aviso que diga el anillo, la zona y si es condominio. Publícala donde el comprador busca por ciudad y mapa.' },
    { q: '¿Dónde pago el impuesto a la transferencia en Santa Cruz?', a: 'En el Gobierno Autónomo Municipal de Santa Cruz de la Sierra, si la casa está en ese municipio. Si está en el Urubó, en Warnes o en otro municipio vecino, en ese municipio.' },
    { q: '¿Santa Cruz pide menos que La Paz y Cochabamba?', a: `En las casas publicadas en Casa-Libre al ${d}, sí: mediana de ${fmtUsd(casa.median_usd)} en Santa Cruz, ${fmtUsd(cb.casas_venta_price.median_usd)} en Cochabamba y ${fmtUsd(lp.casas_venta_price.median_usd)} en La Paz, aunque en esas dos ciudades hay pocas casas con precio (${cb.casas_venta_price.listings_with_price} y ${lp.casas_venta_price.listings_with_price}). Son precios pedidos, no de cierre.` },
    { q: '¿Conviene vender o dar mi casa en anticrético en Santa Cruz?', a: 'Depende de si necesitas el dinero definitivamente. En el anticrético hay que devolverlo al final. Lo explicamos en <a href="/bolivia/anticretico-bolivia/">anticrético en Bolivia</a>.' },
  ],
  internalSources: [
    { label: 'Google autocomplete gl=bo', url: 'https://suggestqueries.google.com/complete/search?client=firefox&hl=es&gl=bo&q=venta%20de%20casas%20en%20santa%20cruz', date: '2026-11-13', note: '"venta de casas en santa cruz bolivia", "casas en venta santa cruz".' },
  ],
  closing: {
    title: 'Tu casa cruceña, publicada hoy',
    text: 'Publicar en Casa-Libre es gratis y los compradores te escriben directo por WhatsApp.',
    button: 'Publicar mi casa gratis',
    href: 'https://casa-libre.com.bo/publicar',
  },
  related: ['alquiler-de-casas-en-santa-cruz-de-la-sierra', 'requisitos-para-vender-una-casa-bolivia', 'anuncio-para-vender-una-casa'],
};
