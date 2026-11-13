import { cityMarket, cityMarketTable, snapshotDateEs, fmtUsd } from '../../../lib/market.js';

// Numbers only from content/data/uy-market.json (Casa-Libre snapshot, asking prices).
const m = cityMarket('uy', 'punta-del-este');
const mvd = cityMarket('uy', 'montevideo');
const mal = cityMarket('uy', 'maldonado');
const d = snapshotDateEs('uy');
const apto = m.departamentos_venta_price;

export default {
  slug: 'vender-casa-en-punta-del-este',
  group: 'Vender por ciudad',
  order: 3,
  city: 'punta-del-este',
  cityName: 'Punta del Este',
  title: 'Vender una casa en Punta del Este: temporada y compradores',
  h1: 'Vender una casa o apartamento en Punta del Este',
  description: 'Cómo vender una casa o un apartamento en Punta del Este: zonas, temporada, compradores del exterior, venta desde afuera con poder, IRNR y cómo publicar gratis.',
  navLabel: 'Punta del Este',
  blurb: 'Zonas, temporada, compradores del exterior y venta desde afuera: vender en Punta del Este.',
  published: '2026-11-13',
  updated: '2026-11-13',
  review: 'pending',
  reviewNote: 'Local facts to check before indexing: Punta del Este belongs to the departamento de Maldonado (Intendencia de Maldonado, Municipio de Punta del Este), about 140 km from Montevideo; zones named (Península with Avenida Gorlero, Playa Mansa, Playa Brava, Aidy Grill, Cantegril, San Rafael, Pinares, Roosevelt, La Barra, Manantiales; José Ignacio further east); summer season concentrating visits; many buyers and owners from abroad (Argentina, Brazil); non-resident sellers pay IRNR instead of IRPF and can sign with a poder; high gastos comunes in tower buildings. 2026-11-13: prices and counts only from content/data/uy-market.json via lib/market.js (asking prices on Casa-Libre, not closing prices; only 13 sale listings, no casas median, both said on the page).',
  answer: `Para vender en Punta del Este, tené la propiedad publicada y lista antes de la temporada de verano, compará con tu misma zona e informá gastos comunes y amenities. Según lo publicado en Casa-Libre al ${d} (precios pedidos, no de cierre), los apartamentos en venta en Punta del Este piden una mediana de ${fmtUsd(apto.median_usd)}. Si vivís afuera, podés vender con un poder. Publicá gratis en Casa-Libre.`,
  summary: [
    `${m.for_sale.total} avisos en venta en Punta del Este en Casa-Libre al ${d}, casi todos apartamentos; en casas hay muy pocos avisos para dar un precio.`,
    'La temporada de verano concentra visitas: publicá y prepará la propiedad antes de diciembre.',
    'Muchos compradores vienen del exterior y miran todo por internet antes de viajar.',
    'Si vivís afuera, podés firmar con un poder; en lugar de IRPF corresponde IRNR.',
    'En edificios, los gastos comunes y los amenities pesan tanto como el precio.',
  ],
  cta: {
    title: 'Publicá tu propiedad en Punta del Este',
    text: 'Fotos, precio y ubicación desde cualquier lugar. Los interesados te escriben por WhatsApp, sin comisión.',
    button: 'Publicar mi propiedad',
    href: 'https://uy.casa-libre.com/publicar',
  },
  sections: [
    {
      id: 'cuanto-piden-en-punta-del-este',
      h2: '¿Cuánto piden por un apartamento en Punta del Este?',
      blocks: [
        { t: 'p', html: `Una mediana de ${fmtUsd(apto.median_usd)}, según los ${apto.listings_with_price} apartamentos con precio publicados en Casa-Libre al ${d}. Son precios pedidos por los vendedores, no precios de cierre, y con tan pocos avisos el número es una referencia, no una tabla de valores.` },
        cityMarketTable('uy', 'punta-del-este', { rent: false }),
        { t: 'p', html: `En casas no damos número: hay muy pocas publicadas con precio para calcular una mediana. Si vendés una casa en el bosque, en La Barra o en Manantiales, tu comparación tiene que salir de casas parecidas de tu zona, y muchas veces conviene una tasación.` },
        { t: 'p', html: `Con otras ciudades del mismo snapshot, los apartamentos publicados en Punta del Este piden más que en Montevideo (mediana ${fmtUsd(mvd.departamentos_venta_price.median_usd)}) y que en la ciudad de Maldonado (${fmtUsd(mal.departamentos_venta_price.median_usd)}), aunque estén a pocos minutos. Si tu apartamento está en el límite entre las dos, decí con precisión dónde queda: el comprador lo compara.` },
      ],
    },
    {
      id: 'zonas-de-punta-del-este',
      h2: '¿Con qué propiedades se compara la mía en Punta del Este?',
      blocks: [
        { t: 'p', html: 'Con las de tu misma zona y tipo. En Punta del Este el comprador elige primero entre zonas muy distintas, y un apartamento en la Península no compite con una casa en el bosque.' },
        { t: 'table',
          caption: 'Zonas de Punta del Este y lo que pregunta el comprador',
          head: ['Zona', 'Tipo habitual', 'Lo que pregunta el comprador'],
          rows: [
            ['Península', 'Apartamentos', 'Vista, cercanía a Gorlero y al puerto, gastos comunes'],
            ['Playa Mansa y Playa Brava', 'Apartamentos en torres', 'Piso, vista al mar, amenities, garaje'],
            ['Aidy Grill, Cantegril, San Rafael, Pinares', 'Casas con jardín', 'Terreno, piscina, seguridad, distancia a la playa'],
            ['La Barra y Manantiales', 'Casas de veraneo', 'Distancia al mar, estilo, alquiler en temporada'],
          ],
          note: 'Agrupación orientativa, sin precios.' },
      ],
    },
    {
      id: 'temporada-y-compradores',
      h2: '¿Cuándo conviene vender en Punta del Este?',
      blocks: [
        { t: 'p', html: 'Teniendo la propiedad lista para la temporada. En verano llegan los compradores que la visitan en persona, pero muchos empiezan a buscar por internet meses antes.' },
        { t: 'ul', items: [
          'Publicá antes de diciembre, con fotos de verano si las tenés.',
          'Fuera de temporada, dejá a alguien que pueda mostrarla con poca anticipación.',
          'Si la alquilás en temporada, avisá en el aviso desde cuándo queda libre para entregar.',
          'Muchos compradores son de Argentina y Brasil: el precio en dólares y la información completa son clave.',
        ] },
      ],
    },
    {
      id: 'vender-desde-afuera',
      h2: '¿Puedo vender mi propiedad de Punta del Este si vivo afuera?',
      blocks: [
        { t: 'p', html: 'Sí. Es muy común. Podés otorgar un poder a una persona de confianza o a tu escribano para que firme por vos, y coordinar las visitas con alguien en la zona.' },
        { t: 'p', html: 'Si no sos residente fiscal en Uruguay, en lugar del IRPF corresponde el IRNR, que el escribano también retiene en la escritura. Más en <a href="/uruguay/irpf-venta-inmueble-uruguay/">IRPF por la venta de un inmueble</a>.' },
        { t: 'callout', tone: 'warn', title: 'Antes de decidir', html: 'Información general. Consultá con un escribano o contador antes de tomar decisiones.' },
      ],
    },
    {
      id: 'papeles-punta',
      h2: '¿Qué papeles y tributos necesito?',
      blocks: [
        { t: 'p', html: 'Los mismos que en todo el país. La contribución inmobiliaria se paga a la Intendencia de Maldonado, porque Punta del Este es parte de ese departamento, y en edificios la administración da la constancia de gastos comunes.' },
        { t: 'p', html: 'La lista completa está en <a href="/uruguay/requisitos-para-vender-una-casa-uruguay/">requisitos para vender una casa</a> y lo propio de un edificio, en <a href="/uruguay/como-vender-un-apartamento-uruguay/">cómo vender un apartamento</a>.' },
      ],
    },
    {
      id: 'comparar-precio',
      h2: '¿Cómo pongo el precio?',
      blocks: [
        { t: 'p', html: 'Comparando con propiedades de tu zona, del mismo tipo y con servicios parecidos. En torres, el piso, la vista y los gastos comunes cambian mucho el valor dentro del mismo edificio.' },
        { t: 'p', html: 'Mirá los apartamentos en venta en Punta del Este en <a href="https://uy.casa-libre.com/venta/departamentos/punta-del-este">Casa-Libre</a> y las casas en venta de la zona en <a href="https://uy.casa-libre.com/venta/casas/punta-del-este">Casa-Libre</a>. Si es una propiedad única, puede convenir una <a href="/uruguay/tasacion-de-inmuebles-uruguay/">tasación</a>.' },
      ],
    },
    {
      id: 'publicar-en-punta',
      h2: '¿Cómo publico mi propiedad de Punta del Este?',
      blocks: [
        { t: 'p', html: 'Con la zona exacta en el mapa, fotos de día y de verano, metros, dormitorios, amenities y gastos comunes. Publicar en Casa-Libre es gratis y podés hacerlo desde donde vivas.' },
        { t: 'casalibre',
          title: 'Por qué te recomendamos Casa-Libre',
          html: 'Casa-Libre es un marketplace inmobiliario donde inmobiliarias, agentes y propietarios publican casas, apartamentos y terrenos gratis, con extras pagos opcionales. Los interesados contactan directo por WhatsApp y no hay comisión sobre la venta. Está en la web y en apps para iPhone y Android.',
          button: 'Ver cómo vender en Casa-Libre',
          href: 'https://uy.casa-libre.com/vender' },
      ],
    },
  ],
  faq: [
    { q: '¿Cuál es la mejor época para vender en Punta del Este?', a: 'Tener la propiedad publicada y lista antes de la temporada de verano, que es cuando más compradores visitan la zona.' },
    { q: '¿Puedo vender sin viajar a Uruguay?', a: 'Sí, con un poder para que otra persona firme por vos. Consultá con un escribano cómo otorgarlo desde el país donde vivís.' },
    { q: '¿Qué impuesto paga un extranjero al vender en Punta del Este?', a: 'El ITP como cualquier vendedor y, si hay ganancia, IRNR en lugar de IRPF. El escribano lo calcula y retiene.' },
    { q: '¿Dónde publico un apartamento en venta en Punta del Este?', a: 'Te recomendamos Casa-Libre: publicar es gratis y los interesados te escriben directo por WhatsApp.' },
  ],
  internalSources: [
    { label: 'Google autocomplete Uruguay, "vender casa en punta del este"', url: 'https://suggestqueries.google.com/complete/search?client=firefox&hl=es&gl=uy&q=vender%20casa%20en%20punta%20del%20este', date: '2026-11-13', note: '"casa para vender en punta del este".' },
    { label: 'lib/countries.js CL_CITY_PATHS uy', url: 'https://uy.casa-libre.com/venta/casas/punta-del-este', date: '2026-11-13', note: 'Verified: /venta/casas/punta-del-este, /venta/departamentos/punta-del-este.' },
  ],
  closing: {
    title: 'Tu propiedad en Punta del Este, lista para la temporada',
    text: 'Publicar en Casa-Libre es gratis. Los interesados te escriben directo por WhatsApp.',
    button: 'Publicar mi propiedad',
    href: 'https://uy.casa-libre.com/publicar',
  },
  related: ['alquiler-de-casas-en-punta-del-este', 'vender-casa-en-maldonado', 'irpf-venta-inmueble-uruguay'],
};
