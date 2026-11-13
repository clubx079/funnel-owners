import { cityMarket, marketCities, snapshotDateEs, fmtUsd } from '../../../lib/market.js';

// Asking rents only from content/data/bo-market.json (Casa-Libre snapshot).
const d = snapshotDateEs('bo');
const scz = cityMarket('bo', 'santa-cruz-de-la-sierra');
const medMes = (p) => (p ? `${fmtUsd(p.median_usd)} (${p.listings_with_price} con precio)` : 'Sin dato: muy pocos avisos');
const rentRows = marketCities('bo').map((slug) => { const c = cityMarket('bo', slug); return [c.name, String(c.for_rent.total), medMes(c.departamentos_alquiler_price_month), medMes(c.casas_alquiler_price_month)]; });

export default {
  slug: 'cuanto-cobrar-de-alquiler-bolivia',
  group: 'Alquilar tu propiedad',
  order: 3,
  rental: true,
  equivalentOf: 'cuanto-cobrar-de-alquiler-paraguay',
  title: 'Cuánto cobrar de alquiler por mi casa en Bolivia',
  h1: 'Cuánto cobrar de alquiler por mi casa o departamento',
  description: 'Un método para saber cuánto cobrar de alquiler por tu casa o departamento en Bolivia: comparables, ajustes por amoblado, garaje y expensas, y un ejemplo con números.',
  navLabel: 'Cuánto cobrar',
  blurb: 'Cómo calcular el alquiler de tu casa con comparables y ajustes, con un ejemplo paso a paso.',
  published: '2026-11-13',
  updated: '2026-11-13',
  review: 'none',
  answer: 'Para saber cuánto cobrar de alquiler en Bolivia, busca cinco casas o departamentos parecidos al tuyo en la misma zona, anota cuánto piden por mes y ubica el tuyo en ese rango según tamaño, estado, garaje, si está amoblado y si incluye expensas. Un precio dentro del rango llena la casa antes que uno alto. Para comparar, mira los alquileres publicados en Casa-Libre.',
  summary: [
    'El alquiler lo fija el mercado de tu zona, no el valor de tu casa ni tus gastos.',
    'Compara con cinco avisos parecidos: misma zona, mismos dormitorios.',
    'Ajusta por amoblado, garaje, expensas incluidas y estado.',
    'Un mes vacío cuesta más que un precio un poco más bajo.',
  ],
  cta: {
    title: 'Publica tu alquiler',
    text: 'Con el precio claro, publica gratis en Casa-Libre.',
    button: 'Publicar mi alquiler',
    href: 'https://casa-libre.com.bo/publicar',
  },
  sections: [
    {
      id: 'metodo',
      h2: '¿Cómo calcular cuánto cobrar de alquiler?',
      blocks: [
        { t: 'p', html: 'Con comparables. Es el mismo método que usan los administradores de propiedades, y lo puedes hacer en una tarde.' },
        { t: 'table',
          caption: 'Ajustes frente a los comparables',
          head: ['Tu casa tiene…', 'Frente a los comparables'],
          rows: [
            ['Más dormitorios o más m²', 'Ubícala más arriba en el rango'],
            ['Amoblado completo', 'Puedes pedir más; también se desgasta más'],
            ['Garaje', 'Suma, sobre todo en zonas céntricas'],
            ['Expensas incluidas', 'Súmalas al comparar con avisos que no las incluyen'],
            ['Arreglos pendientes', 'Ubícala más abajo o arregla antes'],
            ['Sin mascotas permitidas', 'Menos interesados posibles'],
          ],
          note: 'Guía general.' },
        { t: 'p', html: 'Busca tus comparables en los alquileres de <a href="https://casa-libre.com.bo/alquilar">Casa-Libre</a>, filtrando por ciudad, tipo y dormitorios.' },
      ],
    },
    {
      id: 'ejemplo',
      h2: 'Un ejemplo paso a paso',
      blocks: [
        { t: 'p', html: 'Con cifras inventadas, para mostrar la cuenta.' },
        { t: 'example',
          title: 'Ejemplo ilustrativo: departamento de 2 dormitorios',
          html: 'Comparables hipotéticos de la misma zona.',
          rows: [
            ['Comparable A', 'Bs 3.000'],
            ['Comparable B', 'Bs 3.300'],
            ['Comparable C', 'Bs 3.500'],
            ['Promedio', 'Bs 3.267'],
            ['Ajuste: tu depto tiene garaje y los otros no', '+ Bs 200'],
            ['Precio para publicar', 'Bs 3.450 aprox.'],
          ] },
      ],
    },
    {
      id: 'en-que-moneda',
      h2: '¿Cobro en bolivianos o en dólares?',
      blocks: [
        { t: 'p', html: 'Los dos se usan. Lo importante es escribir en el contrato la moneda y cómo se paga si el inquilino paga en la otra, para que no haya discusiones.' },
      ],
    },
    {
      id: 'precio-alto',
      h2: '¿Qué pasa si pido un alquiler muy alto?',
      blocks: [
        { t: 'p', html: 'La casa queda vacía más tiempo, y cada mes sin inquilino es un mes sin ingreso y con gastos.' },
        { t: 'example',
          title: 'Ejemplo ilustrativo: un mes vacío',
          html: 'Cifras inventadas, a lo largo de un año.',
          rows: [
            ['Opción A: Bs 3.800 x 10 meses (2 vacíos)', 'Bs 38.000'],
            ['Opción B: Bs 3.400 x 12 meses', 'Bs 40.800'],
          ] },
        { t: 'p', html: 'Si recibes muchas consultas y ninguna se concreta, el problema suele ser el precio o las fotos.' },
      ],
    },
    {
      id: 'alquiler-o-anticretico',
      h2: '¿Me conviene más un anticrético?',
      blocks: [
        { t: 'p', html: 'Depende de si necesitas un ingreso mensual o una suma grande ahora, que luego tendrás que devolver. Comparamos los dos en <a href="/bolivia/anticretico-bolivia/">anticrético en Bolivia</a>.' },
      ],
    },
    {
      id: 'alquileres-publicados',
      h2: '¿Cuánto se pide de alquiler en Santa Cruz, La Paz y Cochabamba?',
      blocks: [
        { t: 'p', html: `En lo publicado en Casa-Libre al ${d}, los departamentos en alquiler en Santa Cruz de la Sierra piden una mediana de ${fmtUsd(scz.departamentos_alquiler_price_month.median_usd)} por mes. En las otras ciudades hay menos avisos, y en Cochabamba no alcanzan para dar un número. Son precios pedidos, no los montos de contratos firmados.` },
        { t: 'table',
          caption: `Alquileres publicados en Casa-Libre, ${d}`,
          head: ['Ciudad', 'Avisos en alquiler', 'Departamentos: mediana por mes', 'Casas: mediana por mes'],
          rows: rentRows,
          note: `Propiedades activas publicadas en Casa-Libre al ${d}. Precios pedidos en dólares. Con menos de 10 avisos con precio, la mediana es solo una referencia gruesa.` },
        { t: 'p', html: 'Úsalo como punto de partida, no como tarifa. El método de esta guía sigue siendo el mismo: buscar cinco o seis inmuebles parecidos al tuyo en tu zona y ajustar por lo que tu casa tiene de más o de menos.' },
      ],
    },
    {
      id: 'subir-el-alquiler',
      h2: '¿Cómo subo el alquiler al renovar el contrato?',
      blocks: [
        { t: 'p', html: 'Con reglas acordadas desde el principio. Si el contrato dice cuándo y cómo se revisa el alquiler, la conversación al renovar es mucho más fácil para los dos.' },
        { t: 'ul', items: [
          'Deja escrito en el contrato el plazo y la forma de revisar el monto al renovar.',
          'Avisa al inquilino con anticipación, por escrito, el nuevo monto que propones.',
          'Compara antes con los alquileres que se piden hoy en tu zona: subir por encima del mercado puede costarte un buen inquilino.',
          'Un inquilino que paga puntual y cuida la casa vale dinero: los meses vacíos y los arreglos entre inquilinos también cuestan.',
        ] },
      ],
    },
    {
      id: 'publicar',
      h2: '¿Dónde publico el alquiler?',
      blocks: [
        { t: 'p', html: 'Te recomendamos Casa-Libre: gratis, con búsqueda por ciudad y mapa, y contacto directo por WhatsApp. Los pasos completos, en <a href="/bolivia/como-alquilar-mi-casa-bolivia/">cómo alquilar mi casa</a>, y el contrato, en <a href="/bolivia/contrato-de-alquiler-bolivia/">contrato de alquiler</a>.' },
        { t: 'p', html: 'Si prefieres delegar la búsqueda y el cobro, mira el servicio de administración de propiedades de <a href="https://casa-libre.com.bo/administracion-de-propiedades">Casa-Libre</a>.' },
      ],
    },
  ],
  faq: [
    { q: '¿Cuánto cobrar de alquiler por mi casa?', a: 'Lo que se pide por casas parecidas en tu zona, ajustado por tamaño, estado, garaje y si está amoblada.' },
    { q: '¿Se puede calcular el alquiler como un porcentaje del valor de la casa?', a: 'Sirve como referencia, pero el inquilino no compara con el valor de tu casa sino con otros alquileres. Usa comparables.' },
    { q: '¿Incluyo las expensas en el alquiler?', a: 'Puedes hacerlo o cobrarlas aparte. Dilo con claridad en el aviso y en el contrato.' },
    { q: '¿Cada cuánto subo el alquiler?', a: 'Al renovar el contrato, revisando de nuevo los comparables. Si el contrato prevé ajustes, que digan cuándo y cuánto.' },
    { q: '¿Cuánto se paga de alquiler por un departamento en Santa Cruz?', a: `En los avisos de Casa-Libre al ${d}, una mediana de ${fmtUsd(scz.departamentos_alquiler_price_month.median_usd)} por mes, con la mitad central entre ${fmtUsd(scz.departamentos_alquiler_price_month.p25_usd)} y ${fmtUsd(scz.departamentos_alquiler_price_month.p75_usd)}. Son precios pedidos: compara con departamentos de tu zona.` },
  ],
  internalSources: [],
  closing: {
    title: 'Con el precio claro, a publicar',
    text: 'Publica tu alquiler gratis en Casa-Libre.',
    button: 'Publicar mi alquiler',
    href: 'https://casa-libre.com.bo/publicar',
  },
  related: ['como-alquilar-mi-casa-bolivia', 'contrato-de-alquiler-bolivia', 'anticretico-bolivia'],
};
