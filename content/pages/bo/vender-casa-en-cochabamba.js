import { cityMarket, cityMarketTable, snapshotDateEs, fmtUsd } from '../../../lib/market.js';

// Numbers only from content/data/bo-market.json (Casa-Libre snapshot, asking prices).
const m = cityMarket('bo', 'cochabamba');
const scz = cityMarket('bo', 'santa-cruz-de-la-sierra');
const lp = cityMarket('bo', 'la-paz');
const d = snapshotDateEs('bo');
const casa = m.casas_venta_price;
const depto = m.departamentos_venta_price;

export default {
  slug: 'vender-casa-en-cochabamba',
  group: 'Vender por ciudad',
  order: 3,
  city: 'cochabamba',
  cityName: 'Cochabamba',
  title: 'Vender una casa en Cochabamba: zonas, agua y papeles',
  h1: 'Vender una casa en Cochabamba',
  description: 'Cómo vender tu casa en Cochabamba: zona norte, centro, zona sur y municipios vecinos, la pregunta del agua, papeles en el municipio y dónde publicarla gratis.',
  navLabel: 'Casa en Cochabamba',
  blurb: 'Zonas, municipios vecinos, el tema del agua y los papeles para vender tu casa en Cochabamba.',
  published: '2026-11-13',
  updated: '2026-11-13',
  review: 'pending',
  reviewNote: 'Local section to verify with a cochabambino notario/agent: zona norte (Cala Cala, Queru Queru, Tupuraya, Mayorazgo), Recoleta and Sarco as known zones; Av. América and Av. Blanco Galindo as references; metropolitan area includes Quillacollo, Tiquipaya, Sacaba, Colcapirhua and Vinto as separate municipalities; water supply (network vs cisterns/wells, tanks) is a common buyer question; temperate valley climate; IPBI/IMT at the Gobierno Autónomo Municipal de Cochabamba; condominios cerrados searched (autocomplete) and common towards Tiquipaya and the north. 2026-11-13: prices and counts only from content/data/bo-market.json via lib/market.js (asking prices on Casa-Libre, not closing prices; casas median rests on 8 listings, said on the page; no boliviano conversion on purpose).',
  answer: `Para vender una casa en Cochabamba, describe la zona como la dice la gente (zona norte, Av. América, centro, zona sur), aclara el municipio y responde la pregunta del agua. Ten el Folio Real, el alodial y el impuesto al día. En Casa-Libre, al ${d}, las casas en venta en Cochabamba piden una mediana de ${fmtUsd(casa.median_usd)} (${casa.listings_with_price} avisos, precios pedidos, no de cierre). Puedes publicar gratis.`,
  summary: [
    `${m.for_sale.total} avisos en venta en Cochabamba en Casa-Libre al ${d}: pocos, así que los precios son una referencia gruesa (precios pedidos, no de cierre).`,
    'En Cochabamba el comprador pregunta casi siempre por el agua: red, tanque, cisterna o pozo.',
    'La zona norte y las avenidas principales son la referencia de ubicación más usada.',
    'Quillacollo, Tiquipaya, Sacaba y Colcapirhua son otros municipios, con sus propios impuestos.',
    'Patio y jardín pesan: el clima templado invita a vivir afuera.',
  ],
  cta: {
    title: 'Publica tu casa en Cochabamba',
    text: 'Sube fotos, precio y ubicación desde la web o la app. Los interesados te escriben directo por WhatsApp.',
    button: 'Publicar mi casa gratis',
    href: 'https://casa-libre.com.bo/publicar',
  },
  sections: [
    {
      id: 'cuanto-piden-en-cochabamba',
      h2: '¿Cuánto piden por una casa en Cochabamba?',
      blocks: [
        { t: 'p', html: `La mediana de las casas en venta en Cochabamba es de ${fmtUsd(casa.median_usd)}, según las ${casa.listings_with_price} casas con precio publicadas en Casa-Libre al ${d}. Son precios pedidos por los vendedores, no precios de cierre, y con tan pocos avisos el número se mueve mucho con cada casa nueva.` },
        cityMarketTable('bo', 'cochabamba', { rent: false }),
        { t: 'p', html: `En departamentos la mediana es de ${fmtUsd(depto.median_usd)}, pero la mitad central va de ${fmtUsd(depto.p25_usd)} a ${fmtUsd(depto.p75_usd)}: conviven departamentos chicos y otros grandes en edificios nuevos de la zona norte. Compara siempre con unidades de tu mismo tamaño y zona.` },
        { t: 'p', html: `Con otras ciudades del mismo snapshot: las casas publicadas en Cochabamba piden más que en Santa Cruz de la Sierra (mediana ${fmtUsd(scz.casas_venta_price.median_usd)}, con muchos más avisos) y menos que en La Paz (${fmtUsd(lp.casas_venta_price.median_usd)}, con solo ${lp.casas_venta_price.listings_with_price} casas). Son pocas casas para sacar conclusiones fuertes: úsalo como orientación.` },
      ],
    },
    {
      id: 'el-agua',
      h2: '¿Por qué en Cochabamba todos preguntan por el agua?',
      blocks: [
        { t: 'p', html: 'Porque el suministro de agua no es igual en todas las zonas, y para el comprador cochabambino es un dato decisivo. Respóndelo en el aviso antes de que lo pregunten.' },
        { t: 'table',
          caption: 'Lo que conviene decir sobre el agua y los servicios',
          head: ['Dato', 'Cómo decirlo en el aviso'],
          rows: [
            ['Red de agua', 'Si la casa tiene conexión a la red y con qué regularidad llega'],
            ['Almacenamiento', 'Tanque elevado, cisterna, capacidad aproximada'],
            ['Pozo', 'Si tiene pozo propio o compartido'],
            ['Alcantarillado', 'Red o pozo séptico'],
            ['Gas domiciliario', 'Si está conectado'],
          ],
          note: 'Guía general. A revisar con conocedores locales, noviembre de 2026.' },
      ],
    },
    {
      id: 'zonas-de-cochabamba',
      h2: '¿Cómo se describen las zonas en Cochabamba?',
      blocks: [
        { t: 'p', html: 'Con barrios y avenidas. "Zona norte, cerca de la Av. América" o "Sarco" le dicen al comprador más que una dirección.' },
        { t: 'ul', items: [
          '<strong>Zona norte:</strong> Cala Cala, Queru Queru, Tupuraya, Mayorazgo; casas familiares y departamentos.',
          '<strong>Recoleta y alrededores:</strong> vida comercial y gastronómica.',
          '<strong>Centro:</strong> cercanía a la plaza principal, oficinas y comercio.',
          '<strong>Sarco y el oeste:</strong> hacia la Av. Blanco Galindo y el camino a Quillacollo.',
          '<strong>Zona sur:</strong> barrios populares y comercio grande.',
        ] },
        { t: 'p', html: 'Para comparar con casas de tu zona, mira las casas en venta en Cochabamba en <a href="https://casa-libre.com.bo/venta/casas/cochabamba">Casa-Libre</a>.' },
      ],
    },
    {
      id: 'municipios-vecinos',
      h2: '¿Mi casa está en Cochabamba o en un municipio vecino?',
      blocks: [
        { t: 'p', html: 'Revísalo en tus comprobantes de impuestos. La ciudad se une sin cortes con Quillacollo, Tiquipaya, Colcapirhua, Vinto y Sacaba, que son municipios distintos, con su propio catastro.' },
        { t: 'p', html: 'El impuesto a la propiedad y el de la transferencia se pagan en el municipio donde está el inmueble. Lo explicamos en <a href="/bolivia/impuesto-a-la-transferencia-de-inmuebles-bolivia/">impuesto a la transferencia de inmuebles</a>.' },
      ],
    },
    {
      id: 'condominio-en-cochabamba',
      h2: '¿Qué cambia si vendo una casa en condominio cerrado?',
      blocks: [
        { t: 'p', html: 'Muchos compradores cochabambinos buscan casas en condominio cerrado, sobre todo familias que quieren seguridad y áreas verdes hacia la zona norte y Tiquipaya. Si tu casa está en uno, es un punto fuerte del aviso, y el comprador va a pedir datos concretos.' },
        { t: 'ul', items: [
          'Monto de las expensas y qué incluyen: guardia, áreas verdes, piscina, mantenimiento.',
          'Si el condominio tiene su propio pozo o tanque comunitario de agua.',
          'Reglamento: mascotas, ampliaciones, alquiler a terceros.',
          'Constancia de la administración de que estás al día con las expensas.',
        ] },
      ],
    },
    {
      id: 'papeles-en-cochabamba',
      h2: '¿Qué papeles necesito para vender en Cochabamba?',
      blocks: [
        { t: 'p', html: 'Folio Real y alodial de Derechos Reales, testimonio, impuesto a la propiedad pagado en el Gobierno Autónomo Municipal de Cochabamba y datos catastrales.' },
        { t: 'p', html: 'Si la casa la heredaste, el trámite tiene pasos previos: <a href="/bolivia/vender-casa-heredada-bolivia/">vender una casa heredada</a>.' },
        { t: 'callout', tone: 'warn', title: 'Información general', html: 'Información general. Consulta con un notario de fe pública o un abogado antes de tomar decisiones.' },
      ],
    },
    {
      id: 'patio-y-fotos',
      h2: '¿Qué fotos venden una casa en Cochabamba?',
      blocks: [
        { t: 'p', html: 'Las del patio, el jardín y la churrasquera, además de los ambientes. Con el clima de valle, el espacio exterior es parte de cómo se vive la casa.' },
        { t: 'p', html: 'Si es un departamento, compáralo con los departamentos en venta en Cochabamba en <a href="https://casa-libre.com.bo/venta/departamentos/cochabamba">Casa-Libre</a>.' },
      ],
    },
    {
      id: 'publicar-en-cochabamba',
      h2: '¿Dónde publico mi casa en venta en Cochabamba?',
      blocks: [
        { t: 'p', html: 'Te recomendamos publicarla en <a href="https://casa-libre.com.bo/vender">Casa-Libre</a>: gratis, con búsqueda por ciudad y mapa, y contacto directo por WhatsApp, sin comisión sobre la venta.' },
        { t: 'callout', tone: 'tip', title: 'Di que vende el dueño', html: 'Muchos compradores en Cochabamba buscan casas que vende el propietario. Escríbelo en la descripción.' },
      ],
    },
  ],
  faq: [
    { q: '¿Cómo vender mi casa en Cochabamba?', a: 'Con papeles al día, un precio comparado con casas de tu misma zona y un aviso que diga zona, servicios y agua. Publícala donde el comprador busca por ciudad.' },
    { q: '¿Dónde pago los impuestos si mi casa está en Quillacollo o Sacaba?', a: 'En el gobierno municipal de Quillacollo o de Sacaba, no en el de Cochabamba. Cada municipio tiene su propio catastro.' },
    { q: '¿Casas en venta por el dueño en Cochabamba: dónde publicar?', a: 'En Casa-Libre: los propietarios publican gratis y los compradores les escriben directo por WhatsApp.' },
    { q: '¿Qué hago si mi casa no tiene agua de red?', a: 'Dilo en el aviso y explica cómo se abastece: tanque, cisterna o pozo. La transparencia evita visitas perdidas.' },
  ],
  internalSources: [
    { label: 'Google autocomplete gl=bo', url: 'https://suggestqueries.google.com/complete/search?client=firefox&hl=es&gl=bo&q=venta%20de%20casas%20en%20cochabamba', date: '2026-11-13', note: '"casas en venta por el dueño en cochabamba bolivia", "casas en venta cochabamba zona norte", "venta de casas en condominio cerrado en cochabamba".' },
  ],
  closing: {
    title: 'Tu casa en Cochabamba, publicada hoy',
    text: 'Publicar en Casa-Libre es gratis y los compradores te escriben directo por WhatsApp.',
    button: 'Publicar mi casa gratis',
    href: 'https://casa-libre.com.bo/publicar',
  },
  related: ['alquiler-de-casas-en-cochabamba', 'vender-casa-heredada-bolivia', 'fotos-para-vender-una-casa'],
};
