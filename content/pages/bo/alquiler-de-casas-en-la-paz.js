import { cityMarket, cityMarketTable, snapshotDateEs, fmtUsd } from '../../../lib/market.js';

// Numbers only from content/data/bo-market.json (Casa-Libre snapshot, asking rents).
const m = cityMarket('bo', 'la-paz');
const scz = cityMarket('bo', 'santa-cruz-de-la-sierra');
const d = snapshotDateEs('bo');
const rDepto = m.departamentos_alquiler_price_month;

export default {
  slug: 'alquiler-de-casas-en-la-paz',
  group: 'Alquiler por ciudad',
  order: 2,
  city: 'la-paz',
  cityName: 'La Paz',
  title: 'Alquiler de casas en La Paz, Bolivia: guía para dueños',
  h1: 'Alquiler de casas y departamentos en La Paz',
  description: 'Cómo alquilar tu casa o departamento en La Paz: quién alquila en Sopocachi, Miraflores y Zona Sur, el anticrético paceño, calefacción y transporte, y dónde publicar.',
  navLabel: 'Alquiler en La Paz',
  blurb: 'Quién alquila en cada zona de La Paz, alquiler o anticrético, y cómo publicar tu alquiler gratis.',
  published: '2026-11-13',
  updated: '2026-11-13',
  review: 'pending',
  reviewNote: 'Local section to verify: tenant profiles (students near the public university in the centre/Miraflores, professionals in Sopocachi, families and international staff in Zona Sur); anticrético very common in La Paz (autocomplete confirms); cold nights make sun exposure, heating and hot water selling points; teleférico access as a reference; El Alto as separate municipality. No /alquiler/casas/la-paz path verified: uses filtered search. Illimani views from many zones as a photo point. 2026-11-13: rents and counts only from content/data/bo-market.json via lib/market.js (asking rents on Casa-Libre; departamentos rent median rests on 5 listings and no casa rent median exists, both said on the page; gross yield explained as a rough comparison).',
  answer: `Para alquilar tu casa o departamento en La Paz, descríbelo por zona (Sopocachi, Miraflores, centro, Zona Sur), di cuánto sol recibe y cómo se calienta, y a qué distancia está del teleférico. En Casa-Libre, al ${d}, los departamentos en alquiler en La Paz piden una mediana de ${fmtUsd(rDepto.median_usd)} por mes (solo ${rDepto.listings_with_price} avisos con precio). Decide entre renta mensual y anticrético, y publica gratis en Casa-Libre.`,
  summary: [
    `${m.for_rent.total} avisos en alquiler en La Paz en Casa-Libre al ${d}: pocos, así que la mediana de ${fmtUsd(rDepto.median_usd)} por mes es solo una referencia (precios pedidos).`,
    'El inquilino paceño mira la zona, el sol y el transporte antes que los metros.',
    'Las noches frías hacen valorar el sol, la calefacción y el agua caliente.',
    'El anticrético es una opción muy buscada en La Paz.',
    'Departamentos en el centro y Sopocachi; casas con jardín en la Zona Sur.',
  ],
  cta: {
    title: 'Publica tu alquiler en La Paz',
    text: 'Gratis en Casa-Libre. Los interesados te escriben directo por WhatsApp.',
    button: 'Publicar mi alquiler',
    href: 'https://casa-libre.com.bo/publicar',
  },
  sections: [
    {
      id: 'cuanto-piden-de-alquiler-en-la-paz',
      h2: '¿Cuánto se pide de alquiler en La Paz?',
      blocks: [
        { t: 'p', html: `Por un departamento, una mediana de ${fmtUsd(rDepto.median_usd)} por mes, según los avisos publicados en Casa-Libre al ${d}. Son precios pedidos, no los montos de contratos firmados, y salen de solo ${rDepto.listings_with_price} departamentos con precio: tómalos como una referencia, no como la tarifa de la ciudad.` },
        cityMarketTable('bo', 'la-paz', { sale: false }),
        { t: 'p', html: `En casas en alquiler no hay datos suficientes para dar una mediana. Si alquilas una casa, la comparación tiene que venir de casas parecidas de tu misma zona, y vale la pena preguntar a vecinos y administradores cuánto se está cobrando.` },
        { t: 'p', html: `Para poner el número en contexto con otra ciudad del mismo snapshot: en Santa Cruz de la Sierra los departamentos en alquiler piden una mediana de ${fmtUsd(scz.departamentos_alquiler_price_month.median_usd)} por mes, con muchos más avisos. Comparado con el precio de venta pedido en La Paz, el alquiler de un departamento da una renta bruta de ${String(m.departamento_gross_rent_yield_pct).replace('.', ',')}% al año: una cuenta gruesa que no descuenta expensas, impuestos ni meses vacíos.` },
      ],
    },
    {
      id: 'quien-alquila-en-la-paz',
      h2: '¿Quién alquila en La Paz?',
      blocks: [
        { t: 'p', html: 'Estudiantes, profesionales que trabajan en el centro, familias y personal de organizaciones internacionales. Cada grupo busca una zona distinta.' },
        { t: 'table',
          caption: 'Inquilinos frecuentes por zona en La Paz',
          head: ['Zona', 'Quién suele alquilar', 'Qué pide'],
          rows: [
            ['Centro y Miraflores', 'Estudiantes y quienes trabajan en el centro', 'Precio, cercanía, transporte'],
            ['Sopocachi', 'Profesionales jóvenes, parejas', 'Departamento luminoso, barrio con vida'],
            ['Zona Sur', 'Familias, personal de organizaciones internacionales', 'Casa con jardín, seguridad, colegios'],
            ['Laderas', 'Familias que buscan precio', 'Acceso y transporte'],
          ],
          note: 'Descripción general, sin precios. A revisar con conocedores locales, noviembre de 2026.' },
      ],
    },
    {
      id: 'sol-y-calefaccion',
      h2: '¿Qué valoran los inquilinos en La Paz?',
      blocks: [
        { t: 'p', html: 'En una ciudad con noches frías, la orientación y el calor de la casa pesan. Dilo en el aviso y muéstralo en fotos.' },
        { t: 'ul', items: [
          'Cuántas horas de sol reciben los dormitorios.',
          'Calefacción, estufas o pisos de madera.',
          'Agua caliente: termotanque, calefón o ducha eléctrica.',
          'Distancia a la estación de teleférico o al transporte más cercano.',
          'Si la calle es muy empinada.',
        ] },
      ],
    },
    {
      id: 'alquiler-o-anticretico-la-paz',
      h2: '¿Alquiler o anticrético en La Paz?',
      blocks: [
        { t: 'p', html: 'En La Paz el anticrético es muy buscado. Te da una suma importante al inicio, pero tienes que devolverla completa al final y conviene inscribirlo en Derechos Reales.' },
        { t: 'p', html: 'Compara las dos opciones en <a href="/bolivia/anticretico-bolivia/">anticrético en Bolivia</a> y <a href="/bolivia/como-alquilar-mi-casa-bolivia/">cómo alquilar mi casa</a>.' },
        { t: 'callout', tone: 'warn', title: 'Información general', html: 'Información general. Consulta con un notario de fe pública, un abogado o un contador antes de tomar decisiones.' },
      ],
    },
    {
      id: 'cuanto-pedir-la-paz',
      h2: '¿Cuánto pedir de alquiler en La Paz?',
      blocks: [
        { t: 'p', html: 'Lo que se pide por inmuebles parecidos en tu zona. Compara con los departamentos en alquiler en La Paz en <a href="https://casa-libre.com.bo/alquiler/departamentos/la-paz">Casa-Libre</a> y con las casas en alquiler filtradas por La Paz en <a href="https://casa-libre.com.bo/propiedades?op=alquiler&amp;type=casa&amp;q=La%20Paz">Casa-Libre</a>.' },
        { t: 'p', html: 'El método con ejemplo está en <a href="/bolivia/cuanto-cobrar-de-alquiler-bolivia/">cuánto cobrar de alquiler</a>.' },
      ],
    },
    {
      id: 'fotos-alquiler-la-paz',
      h2: '¿Qué fotos y datos ayudan a alquilar rápido en La Paz?',
      blocks: [
        { t: 'p', html: 'Las que responden lo que el inquilino paceño no puede ver en un plano: cuánta luz entra, qué vista tiene y cómo se llega. Saca las fotos a media mañana, cuando el sol entra en los ambientes sin sombras duras.' },
        { t: 'ul', items: [
          'La vista desde la ventana principal; si se ve el Illimani, muéstralo.',
          'La calle de acceso, para que se vea la pendiente real.',
          'El baño con el sistema de agua caliente y el lugar donde va la estufa o la calefacción.',
          'El parqueo, si lo tiene: en zonas centrales es escaso y se valora.',
        ] },
      ],
    },
    {
      id: 'el-alto',
      h2: '¿Y si mi propiedad está en El Alto?',
      blocks: [
        { t: 'p', html: 'El Alto es otro municipio, en el altiplano, con su propio mercado de alquiler y sus propios impuestos municipales. En el aviso pon la zona de El Alto y no "La Paz", para que te encuentre quien busca allí.' },
      ],
    },
    {
      id: 'publicar-alquiler-la-paz',
      h2: '¿Dónde publico mi alquiler en La Paz?',
      blocks: [
        { t: 'p', html: 'Te recomendamos <a href="https://casa-libre.com.bo/publicar">Casa-Libre</a>: publicar es gratis, el aviso aparece al buscar alquileres en La Paz y en el mapa, y los interesados te escriben directo por WhatsApp. Puedes aclarar en la descripción si aceptas anticrético.' },
      ],
    },
  ],
  faq: [
    { q: '¿Cómo alquilar mi departamento en La Paz?', a: 'Compara con departamentos de tu zona, destaca sol, calefacción y transporte, firma un contrato escrito con garantía e inventario y publica con buenas fotos.' },
    { q: '¿Qué es más común en La Paz: alquiler o anticrético?', a: 'Los dos son muy usados. El anticrético es especialmente buscado en La Paz; recuerda que el monto se devuelve al final.' },
    { q: '¿Qué zonas de La Paz buscan los estudiantes?', a: 'Suelen buscar cerca del centro y de Miraflores, por la cercanía a las universidades y el transporte.' },
    { q: '¿Dónde publicar un alquiler gratis en La Paz?', a: 'En Casa-Libre: es gratis y los interesados te contactan directo por WhatsApp.' },
  ],
  internalSources: [
    { label: 'Google autocomplete gl=bo', url: 'https://suggestqueries.google.com/complete/search?client=firefox&hl=es&gl=bo&q=anticretico', date: '2026-11-13', note: '"anticretico la paz", "anticreticos la paz bolivia", "alquiler de casas en la paz bolivia".' },
  ],
  closing: {
    title: 'Tu alquiler en La Paz, publicado',
    text: 'Publica gratis en Casa-Libre y recibe consultas por WhatsApp.',
    button: 'Publicar mi alquiler',
    href: 'https://casa-libre.com.bo/publicar',
  },
  related: ['vender-casa-en-la-paz', 'anticretico-bolivia', 'contrato-de-alquiler-bolivia'],
};
