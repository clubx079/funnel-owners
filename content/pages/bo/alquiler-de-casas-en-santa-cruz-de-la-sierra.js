import { cityMarket, cityMarketTable, snapshotDateEs, fmtUsd } from '../../../lib/market.js';

// Numbers only from content/data/bo-market.json (Casa-Libre snapshot, asking rents).
const m = cityMarket('bo', 'santa-cruz-de-la-sierra');
const lp = cityMarket('bo', 'la-paz');
const d = snapshotDateEs('bo');
const rDepto = m.departamentos_alquiler_price_month;
const rCasa = m.casas_alquiler_price_month;

export default {
  slug: 'alquiler-de-casas-en-santa-cruz-de-la-sierra',
  group: 'Alquiler por ciudad',
  order: 1,
  city: 'santa-cruz-de-la-sierra',
  cityName: 'Santa Cruz de la Sierra',
  title: 'Alquiler de casas en Santa Cruz de la Sierra: para dueños',
  h1: 'Alquiler de casas y departamentos en Santa Cruz de la Sierra',
  description: 'Cómo alquilar tu casa o departamento en Santa Cruz de la Sierra: quién alquila en cada zona, qué piden, contrato o anticrético y dónde publicarlo gratis.',
  navLabel: 'Alquiler en Santa Cruz',
  blurb: 'Quién alquila en Santa Cruz, qué piden los inquilinos y cómo publicar tu alquiler gratis.',
  published: '2026-11-13',
  updated: '2026-11-13',
  review: 'pending',
  reviewNote: 'Local section to verify: tenant profiles by zone (Equipetrol/zona norte professionals and company staff, university area students, families in outer anillos); air conditioning, parking, security and amoblado as frequent requests; anticrético common in Santa Cruz (autocomplete confirms searches); contract/tax facts as in the national pages. 2026-11-13: rents, counts and gross yields only from content/data/bo-market.json via lib/market.js (asking rents on Casa-Libre, not signed contracts; casas rent median rests on 6 listings, said on the page; gross yield = median rent x 12 / median asking sale price, explained as a rough comparison).',
  answer: `Para alquilar tu casa o departamento en Santa Cruz de la Sierra, ubícalo por anillo y zona, compara con alquileres parecidos y destaca aire acondicionado, parqueo y seguridad. Según los avisos publicados en Casa-Libre al ${d} (precios pedidos), los departamentos en alquiler en Santa Cruz piden una mediana de ${fmtUsd(rDepto.median_usd)} por mes. Firma un contrato escrito y publica gratis en Casa-Libre.`,
  summary: [
    `${m.for_rent.total} avisos en alquiler en Santa Cruz en Casa-Libre al ${d}; la mitad central de los departamentos pide entre ${fmtUsd(rDepto.p25_usd)} y ${fmtUsd(rDepto.p75_usd)} por mes.`,
    'El inquilino busca por anillo y zona: dilo en el título.',
    'Aire acondicionado, parqueo y seguridad son lo primero que preguntan.',
    'Departamentos amoblados en zona norte y Equipetrol; casas familiares en los anillos exteriores.',
    'El anticrético también es habitual en Santa Cruz.',
  ],
  cta: {
    title: 'Publica tu alquiler en Santa Cruz',
    text: 'Gratis en Casa-Libre. Los interesados te escriben directo por WhatsApp.',
    button: 'Publicar mi alquiler',
    href: 'https://casa-libre.com.bo/publicar',
  },
  sections: [
    {
      id: 'cuanto-piden-de-alquiler-en-santa-cruz',
      h2: '¿Cuánto se pide de alquiler en Santa Cruz de la Sierra?',
      blocks: [
        { t: 'p', html: `Por un departamento, una mediana de ${fmtUsd(rDepto.median_usd)} por mes: la mitad pide menos y la otra mitad, más. Sale de ${rDepto.listings_with_price} departamentos en alquiler con precio publicados en Casa-Libre al ${d}. Son precios pedidos, no los montos firmados en los contratos.` },
        cityMarketTable('bo', 'santa-cruz-de-la-sierra', { sale: false }),
        { t: 'p', html: `La mitad central de los departamentos va de ${fmtUsd(rDepto.p25_usd)} a ${fmtUsd(rDepto.p75_usd)} por mes. En la parte baja suelen estar los monoambientes y los departamentos sin amoblar lejos de la zona norte; en la alta, los amoblados con parqueo y seguridad en Equipetrol y alrededores.` },
        { t: 'p', html: `En casas los datos son pocos: la mediana de ${fmtUsd(rCasa.median_usd)} por mes sale de solo ${rCasa.listings_with_price} casas con precio, así que tómala como una referencia muy gruesa. Para comparar con otra ciudad del mismo snapshot, los departamentos en alquiler en La Paz piden una mediana de ${fmtUsd(lp.departamentos_alquiler_price_month.median_usd)}, con apenas ${lp.departamentos_alquiler_price_month.listings_with_price} avisos con precio.` },
      ],
    },
    {
      id: 'alquilar-o-vender-santa-cruz',
      h2: '¿Rinde más alquilar que vender en Santa Cruz?',
      blocks: [
        { t: 'p', html: `Una cuenta rápida ayuda a pensarlo. Si se multiplica el alquiler mediano de un año y se divide por el precio mediano de venta de la misma ciudad y tipo, los departamentos publicados en Santa Cruz dan una renta bruta de ${String(m.departamento_gross_rent_yield_pct).replace('.', ',')}% al año. Es una comparación gruesa entre precios pedidos: no descuenta expensas, impuestos, meses vacíos ni arreglos.` },
        { t: 'p', html: 'Si estás dudando entre alquilar y vender, haz la misma cuenta con tu propio inmueble: el alquiler que realmente podrías cobrar, los meses que podría quedar vacío y lo que gastarías en mantenerlo. Lo explicamos con más detalle en <a href="/bolivia/como-alquilar-mi-casa-bolivia/">cómo alquilar mi casa</a>.' },
      ],
    },
    {
      id: 'quien-alquila',
      h2: '¿Quién alquila en Santa Cruz de la Sierra?',
      blocks: [
        { t: 'p', html: 'Santa Cruz recibe gente de todo el país y de afuera que llega por trabajo o estudio, y eso mueve el alquiler. Cada zona tiene su inquilino típico.' },
        { t: 'table',
          caption: 'Inquilinos frecuentes por zona en Santa Cruz',
          head: ['Zona', 'Quién suele alquilar', 'Qué pide'],
          rows: [
            ['Equipetrol y zona norte', 'Profesionales, personal de empresas', 'Departamento amoblado, parqueo, seguridad'],
            ['Cerca de universidades', 'Estudiantes, a veces en grupo', 'Precio, cercanía, internet'],
            ['Urbarí, Las Palmas, oeste', 'Familias', 'Casa con patio, colegios cerca'],
            ['Anillos exteriores', 'Familias jóvenes', 'Más espacio por el mismo alquiler'],
            ['Condominios cerrados', 'Familias que priorizan seguridad', 'Áreas verdes, expensas claras'],
          ],
          note: 'Descripción general, sin precios. A revisar con conocedores locales, noviembre de 2026.' },
      ],
    },
    {
      id: 'que-piden',
      h2: '¿Qué valoran los inquilinos cruceños?',
      blocks: [
        { t: 'p', html: 'Con el calor, la frescura de la casa vale tanto como los metros. Pon estos datos en el aviso.' },
        { t: 'ul', items: [
          'Aire acondicionado en dormitorios, o al menos las instalaciones.',
          'Ventilación cruzada y sombra en el patio.',
          'Parqueo techado.',
          'Seguridad: rejas, portero o condominio.',
          'Si la calle se inunda en época de lluvias.',
        ] },
      ],
    },
    {
      id: 'cuanto-pedir',
      h2: '¿Cuánto pedir de alquiler en Santa Cruz?',
      blocks: [
        { t: 'p', html: 'Lo que se pide por casas o departamentos parecidos en tu misma zona. Compara con las casas en alquiler en Santa Cruz en <a href="https://casa-libre.com.bo/alquiler/casas/santa-cruz-de-la-sierra">Casa-Libre</a> y con los departamentos en alquiler en <a href="https://casa-libre.com.bo/alquiler/departamentos/santa-cruz-de-la-sierra">Casa-Libre</a>.' },
        { t: 'p', html: 'El método paso a paso está en <a href="/bolivia/cuanto-cobrar-de-alquiler-bolivia/">cuánto cobrar de alquiler</a>.' },
      ],
    },
    {
      id: 'contrato-o-anticretico',
      h2: '¿Alquiler mensual o anticrético en Santa Cruz?',
      blocks: [
        { t: 'p', html: 'Los dos son comunes. Con el alquiler cobras cada mes; con el anticrético recibes una suma al inicio que devuelves al final, y conviene formalizarlo ante notario e inscribirlo.' },
        { t: 'p', html: 'Contrato: <a href="/bolivia/contrato-de-alquiler-bolivia/">contrato de alquiler en Bolivia</a>. Anticrético: <a href="/bolivia/anticretico-bolivia/">anticrético en Bolivia</a>.' },
        { t: 'callout', tone: 'warn', title: 'Información general', html: 'Información general. Consulta con un notario de fe pública, un abogado o un contador antes de tomar decisiones.' },
      ],
    },
    {
      id: 'amoblado',
      h2: '¿Conviene alquilar amoblado en Santa Cruz?',
      blocks: [
        { t: 'p', html: 'En la zona norte y Equipetrol, el departamento amoblado tiene demanda de quienes llegan por trabajo por un tiempo. Se puede pedir más, pero hay más desgaste y un inventario más largo.' },
        { t: 'ul', items: [
          'Inventario detallado con fotos.',
          'Garantía acorde al valor de los muebles.',
          'Reglas claras sobre arreglos de artefactos.',
        ] },
      ],
    },
    {
      id: 'publicar-alquiler-santa-cruz',
      h2: '¿Dónde publico mi alquiler en Santa Cruz?',
      blocks: [
        { t: 'p', html: 'Te recomendamos <a href="https://casa-libre.com.bo/guias/como-alquilar-mi-propiedad">Casa-Libre</a>: publicar es gratis, el aviso aparece al buscar alquileres en Santa Cruz y en el mapa, y los interesados te escriben directo por WhatsApp.' },
      ],
    },
  ],
  faq: [
    { q: '¿Cómo alquilar mi casa en Santa Cruz de la Sierra?', a: 'Compara con alquileres de tu zona, destaca aire acondicionado, parqueo y seguridad, firma un contrato escrito con garantía e inventario y publica el aviso con fotos y mapa.' },
    { q: '¿Es común el anticrético en Santa Cruz?', a: 'Sí, convive con el alquiler mensual. Recuerda que al final hay que devolver todo el monto recibido.' },
    { q: '¿Qué piden los inquilinos en Equipetrol?', a: 'Suelen buscar departamentos amoblados, con parqueo y seguridad, cerca de oficinas y comercio.' },
    { q: '¿Dónde publicar un alquiler gratis en Santa Cruz?', a: 'En Casa-Libre: es gratis y los interesados te contactan directo por WhatsApp.' },
  ],
  internalSources: [
    { label: 'Google autocomplete gl=bo', url: 'https://suggestqueries.google.com/complete/search?client=firefox&hl=es&gl=bo&q=anticretico', date: '2026-11-13', note: '"anticretico santa cruz", "alquiler de casas en santa cruz bolivia", "alquiler de casas en santa cruz de la sierra".' },
  ],
  closing: {
    title: 'Tu alquiler en Santa Cruz, publicado',
    text: 'Publica gratis en Casa-Libre y recibe consultas por WhatsApp.',
    button: 'Publicar mi alquiler',
    href: 'https://casa-libre.com.bo/publicar',
  },
  related: ['vender-casa-en-santa-cruz-de-la-sierra', 'como-alquilar-mi-casa-bolivia', 'anticretico-bolivia'],
};
