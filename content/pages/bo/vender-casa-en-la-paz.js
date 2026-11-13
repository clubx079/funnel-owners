import { cityMarket, cityMarketTable, snapshotDateEs, fmtUsd } from '../../../lib/market.js';

// Numbers only from content/data/bo-market.json (Casa-Libre snapshot, asking prices).
const m = cityMarket('bo', 'la-paz');
const scz = cityMarket('bo', 'santa-cruz-de-la-sierra');
const d = snapshotDateEs('bo');
const casa = m.casas_venta_price;
const depto = m.departamentos_venta_price;

export default {
  slug: 'vender-casa-en-la-paz',
  group: 'Vender por ciudad',
  order: 2,
  city: 'la-paz',
  cityName: 'La Paz',
  title: 'Vender una casa en La Paz, Bolivia: zonas, papeles y aviso',
  h1: 'Vender una casa en La Paz',
  description: 'Cómo vender tu casa o departamento en La Paz: Zona Sur, Sopocachi, Miraflores y laderas, pendiente y estabilidad del terreno, papeles municipales y dónde publicarla.',
  navLabel: 'Casa en La Paz',
  blurb: 'Zonas, pendiente, teleférico y papeles: lo que cuenta al vender una casa en La Paz.',
  published: '2026-11-13',
  updated: '2026-11-13',
  review: 'pending',
  reviewNote: 'Local section to verify with a paceño notario/agent: Zona Sur (Calacoto, Achumani, Obrajes, Irpavi, Cota Cota, San Miguel) lower and warmer; Sopocachi and Miraflores central with many departamentos; laderas on the slopes; El Alto is a separate municipality on the altiplano above; the cable car network is a reference for access; buyers ask about slope stability and municipal risk maps; IPBI/IMT at the Gobierno Autónomo Municipal de La Paz; garage scarcity in central zones. 2026-11-13: prices and counts only from content/data/bo-market.json via lib/market.js (asking prices on Casa-Libre, not closing prices; casas median rests on 5 listings, said on the page; no boliviano conversion on purpose).',
  answer: `Para vender una casa en La Paz, describe bien la zona (Zona Sur, Sopocachi, Miraflores, centro o laderas), el acceso al teleférico y la pendiente. Ten el Folio Real, el alodial y el impuesto municipal al día. Según lo publicado en Casa-Libre al ${d} (precios pedidos, no de cierre), los departamentos en venta en La Paz piden una mediana de ${fmtUsd(depto.median_usd)}. Puedes publicar gratis en Casa-Libre.`,
  summary: [
    `${m.for_sale.total} avisos en venta en La Paz en Casa-Libre al ${d}, ${m.for_sale.departamentos} de ellos departamentos (precios pedidos, no de cierre).`,
    'En La Paz la zona y la altura cambian todo: dilo con precisión en el aviso.',
    'El comprador pregunta por pendiente, estabilidad del suelo y acceso al transporte.',
    'En el centro y Sopocachi hay mucho departamento; en la Zona Sur, más casas con jardín.',
    'El Alto es otro municipio: sus impuestos se pagan allá.',
  ],
  cta: {
    title: 'Publica tu casa en La Paz',
    text: 'Sube fotos, precio y ubicación desde la web o la app. Los interesados te escriben directo por WhatsApp.',
    button: 'Publicar mi casa gratis',
    href: 'https://casa-libre.com.bo/publicar',
  },
  sections: [
    {
      id: 'cuanto-piden-en-la-paz',
      h2: '¿Cuánto piden por una casa o un departamento en La Paz?',
      blocks: [
        { t: 'p', html: `En los departamentos, la mitad pide menos de ${fmtUsd(depto.median_usd)} y la otra mitad, más: es la mediana de ${depto.listings_with_price} departamentos con precio publicados en Casa-Libre al ${d}. Son precios pedidos por los vendedores, no precios de cierre.` },
        cityMarketTable('bo', 'la-paz', { rent: false }),
        { t: 'p', html: `En casas los datos son pocos: la mediana de ${fmtUsd(casa.median_usd)} sale de solo ${casa.listings_with_price} casas con precio, así que tómala como una referencia muy gruesa. Una casa con jardín en la Zona Sur y una casa antigua en el centro pueden estar muy lejos de ese número, en cualquier dirección.` },
        { t: 'p', html: `Para comparar con otra ciudad del mismo snapshot: en Santa Cruz de la Sierra los departamentos publicados piden una mediana de ${fmtUsd(scz.departamentos_venta_price.median_usd)}, bastante menos que en La Paz. Si tu comprador viene del oriente, es probable que llegue con esa referencia y pregunte por qué cuesta más: el valle estrecho, el poco suelo plano y la cercanía al centro son parte de la respuesta.` },
      ],
    },
    {
      id: 'zonas-de-la-paz',
      h2: '¿Qué zona de La Paz es tu casa y por qué importa?',
      blocks: [
        { t: 'p', html: 'La Paz es una ciudad en un valle, con barrios a alturas muy distintas. El comprador elige primero la zona, y después la casa.' },
        { t: 'table',
          caption: 'Referencias que usan los compradores en La Paz',
          head: ['Zona', 'Qué suele buscar ahí el comprador'],
          rows: [
            ['Zona Sur: Calacoto, Achumani, Obrajes, Irpavi, Cota Cota', 'Casas con jardín, clima más templado, colegios'],
            ['Sopocachi', 'Departamentos cerca del centro, vida de barrio'],
            ['Miraflores', 'Departamentos y casas cerca de hospitales y del estadio'],
            ['Centro y San Pedro', 'Cercanía a oficinas públicas y comercio'],
            ['Laderas', 'Precios más accesibles, vista; importa el acceso'],
          ],
          note: 'Descripción general de zonas conocidas, sin precios. A revisar con conocedores locales, noviembre de 2026.' },
      ],
    },
    {
      id: 'pendiente-y-terreno',
      h2: '¿Por qué el comprador pregunta por el terreno?',
      blocks: [
        { t: 'p', html: 'Porque La Paz tiene laderas y zonas con suelos delicados, y el comprador lo sabe. Si tienes información del municipio sobre tu zona o estudios del suelo, tenla a mano.' },
        { t: 'ul', items: [
          'Di si la calle es empinada y si el auto llega hasta la puerta.',
          'Muestra en fotos muros de contención y el estado de los cimientos.',
          'Si la casa tiene grietas, explícalo antes de la visita: mejor que lo sepan por ti.',
        ] },
      ],
    },
    {
      id: 'transporte',
      h2: '¿Qué dato de transporte poner en el aviso?',
      blocks: [
        { t: 'p', html: 'A cuántas cuadras está la estación de teleférico más cercana y por dónde pasan minibuses o buses. En La Paz eso pesa tanto como los metros cuadrados.' },
        { t: 'p', html: 'Para ver cómo lo presentan otros avisos, recorre las casas en venta en La Paz en <a href="https://casa-libre.com.bo/venta/casas/la-paz">Casa-Libre</a>.' },
      ],
    },
    {
      id: 'departamento-en-la-paz',
      h2: '¿Vendes un departamento en La Paz?',
      blocks: [
        { t: 'p', html: `En el centro, Sopocachi y Miraflores, buena parte de la oferta son departamentos: ${m.for_sale.departamentos} de los ${m.for_sale.total} avisos en venta de La Paz en Casa-Libre. El comprador pregunta por el piso, el ascensor, la vista, las expensas y, sobre todo, el parqueo, que en las zonas centrales escasea.` },
        { t: 'p', html: `La mitad central de los departamentos publicados pide entre ${fmtUsd(depto.p25_usd)} y ${fmtUsd(depto.p75_usd)}. Dentro de ese rango pesan el piso (más alto suele ser más vista y más sol), la orientación y si el edificio tiene ascensor y garaje.` },
        { t: 'p', html: 'Mira <a href="/bolivia/como-vender-un-departamento-bolivia/">cómo vender un departamento</a> y compara con los departamentos en venta en La Paz en <a href="https://casa-libre.com.bo/venta/departamentos/la-paz">Casa-Libre</a>.' },
      ],
    },
    {
      id: 'papeles-en-la-paz',
      h2: '¿Qué papeles necesito para vender en La Paz?',
      blocks: [
        { t: 'p', html: 'Folio Real y alodial de Derechos Reales, testimonio, impuesto a la propiedad pagado en el Gobierno Autónomo Municipal de La Paz y datos catastrales. El impuesto a la transferencia también se liquida ahí.' },
        { t: 'p', html: 'Si la casa está en El Alto, Achocalla, Mecapaca u otro municipio vecino, los impuestos se pagan en ese municipio. La lista completa está en <a href="/bolivia/requisitos-para-vender-una-casa-bolivia/">requisitos para vender una casa</a>.' },
        { t: 'callout', tone: 'warn', title: 'Información general', html: 'Información general. Consulta con un notario de fe pública o un abogado antes de tomar decisiones.' },
      ],
    },
    {
      id: 'publicar-en-la-paz',
      h2: '¿Dónde publico mi casa en venta en La Paz?',
      blocks: [
        { t: 'p', html: 'Te recomendamos publicarla en <a href="https://casa-libre.com.bo/vender">Casa-Libre</a>: es gratis, el aviso aparece al buscar por La Paz y en el mapa, y los interesados te escriben directo por WhatsApp, sin comisión sobre la venta.' },
        { t: 'callout', tone: 'tip', title: 'Fotos en la altura', html: 'La luz del altiplano es muy fuerte al mediodía. Saca las fotos a media mañana o media tarde para evitar sombras duras.' },
      ],
    },
  ],
  faq: [
    { q: '¿Cómo vender mi casa en La Paz?', a: 'Con papeles al día, un precio comparado con casas de tu misma zona y un aviso que diga zona, acceso y transporte. Publícala donde el comprador busca por ciudad y mapa.' },
    { q: '¿El Alto es parte de La Paz para los impuestos?', a: 'No. El Alto es otro municipio: si tu casa está allí, el impuesto a la propiedad y el de la transferencia se pagan en el Gobierno Autónomo Municipal de El Alto.' },
    { q: '¿Qué zona de La Paz se vende mejor?', a: 'No hay una respuesta única: cada zona tiene su comprador. Lo que sí ayuda en todas es un precio comparable, buenas fotos y papeles en regla.' },
    { q: '¿Conviene dar la casa en anticrético en La Paz?', a: 'Es muy común en La Paz, pero hay que devolver el dinero al final. Mira <a href="/bolivia/anticretico-bolivia/">anticrético en Bolivia</a>.' },
  ],
  internalSources: [
    { label: 'Google autocomplete gl=bo', url: 'https://suggestqueries.google.com/complete/search?client=firefox&hl=es&gl=bo&q=venta%20de%20casas%20en%20la%20paz', date: '2026-11-13', note: '"venta de casas en la paz bolivia", "casas en venta la paz bolivia", "venta de departamentos en la paz bolivia".' },
  ],
  closing: {
    title: 'Tu casa paceña, publicada hoy',
    text: 'Publicar en Casa-Libre es gratis y los compradores te escriben directo por WhatsApp.',
    button: 'Publicar mi casa gratis',
    href: 'https://casa-libre.com.bo/publicar',
  },
  related: ['alquiler-de-casas-en-la-paz', 'como-vender-un-departamento-bolivia', 'requisitos-para-vender-una-casa-bolivia'],
};
