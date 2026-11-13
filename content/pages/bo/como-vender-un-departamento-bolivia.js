import { cityMarket, marketCities, snapshotDateEs, fmtUsd } from '../../../lib/market.js';

// Asking prices only from content/data/bo-market.json (Casa-Libre snapshot).
const d = snapshotDateEs('bo');
const scz = cityMarket('bo', 'santa-cruz-de-la-sierra');
const rango = (p) => (p ? `${fmtUsd(p.p25_usd)} a ${fmtUsd(p.p75_usd).replace('USD ', '')}` : 'Sin dato');
const deptoRows = marketCities('bo').map((slug) => { const c = cityMarket('bo', slug); const p = c.departamentos_venta_price; return [c.name, p ? `${fmtUsd(p.median_usd)} (${p.listings_with_price} con precio)` : 'Sin dato', rango(p)]; });

export default {
  slug: 'como-vender-un-departamento-bolivia',
  group: 'Vender una propiedad',
  order: 5,
  equivalentOf: 'como-vender-un-departamento-paraguay',
  title: 'Cómo vender un departamento en Bolivia: guía práctica',
  h1: 'Cómo vender un departamento en Bolivia',
  description: 'Qué cambia al vender un departamento en Bolivia: propiedad horizontal, expensas, reglamento del edificio, parqueo y baulera, papeles de la unidad y dónde publicarlo.',
  navLabel: 'Vender un departamento',
  blurb: 'Lo que cambia al vender un departamento: propiedad horizontal, expensas, reglamento y papeles de la unidad.',
  published: '2026-11-13',
  updated: '2026-11-13',
  review: 'pending',
  reviewNote: 'A Bolivian notario or lawyer should check: that a departamento under propiedad horizontal has its own Folio Real/matrícula, that parqueo and baulera may have separate matrículas, that buyers usually ask for a constancia of expensas paid from the administración, and the role of the reglamento de copropiedad. No fee or tax figures are stated. 2026-11-13: added departamento asking-price medians per city built only from content/data/bo-market.json via lib/market.js.',
  answer: 'Vender un departamento en Bolivia sigue los mismos pasos que una casa: Folio Real a tu nombre, certificado alodial, impuestos al día, minuta, notario de fe pública e inscripción en Derechos Reales. Lo que cambia es el edificio: el comprador pregunta por las expensas, el reglamento de copropiedad, el parqueo y la baulera, y si cada uno tiene su propia matrícula. Puedes publicarlo gratis en Casa-Libre.',
  summary: [
    'Un departamento en propiedad horizontal tiene su propio Folio Real; el parqueo y la baulera pueden tener matrícula aparte.',
    'El comprador quiere saber cuánto se paga de expensas y si están al día.',
    'El reglamento de copropiedad dice qué se puede hacer en la unidad: mascotas, reformas, alquiler.',
    'Las fotos de las áreas comunes ayudan tanto como las de la unidad.',
  ],
  cta: {
    title: 'Publica tu departamento gratis',
    text: 'Sube fotos de la unidad y del edificio. Los interesados te escriben directo por WhatsApp.',
    button: 'Publicar mi departamento',
    href: 'https://casa-libre.com.bo/publicar',
  },
  sections: [
    {
      id: 'que-cambia-en-un-departamento',
      h2: '¿Qué cambia al vender un departamento y no una casa?',
      blocks: [
        { t: 'p', html: 'La parte legal es parecida. Lo distinto es que compras y vendes una unidad dentro de un edificio con reglas, gastos comunes y espacios compartidos.' },
        { t: 'table',
          caption: 'Lo que pregunta quien compra un departamento',
          head: ['Tema', 'Qué tener listo'],
          rows: [
            ['Folio Real de la unidad', 'A tu nombre, con la superficie de la unidad'],
            ['Parqueo y baulera', 'Si tienen matrícula propia o están incluidos en la del departamento'],
            ['Expensas', 'Monto mensual y constancia de la administración de que no debes'],
            ['Reglamento de copropiedad', 'Copia o al menos las reglas principales'],
            ['Áreas comunes', 'Ascensor, seguridad, terraza, áreas sociales'],
            ['Estado del edificio', 'Arreglos grandes previstos o cuotas extraordinarias'],
          ],
          note: 'Información general al 13 de noviembre de 2026.' },
      ],
    },
    {
      id: 'papeles-del-departamento',
      h2: '¿Qué papeles necesito para vender mi departamento?',
      blocks: [
        { t: 'p', html: 'Los mismos de una casa, más la constancia de expensas. Revisa que el Folio Real describa bien tu unidad, con su número y piso.' },
        { t: 'ul', items: [
          'Folio Real y certificado alodial actualizados de Derechos Reales.',
          'Comprobantes del impuesto a la propiedad de bienes inmuebles pagados.',
          'Testimonio de tu compra.',
          'Constancia de expensas al día emitida por la administración.',
          'Cédulas de identidad de quienes venden, y del cónyuge si es un bien ganancial.',
        ] },
        { t: 'p', html: 'La lista completa, con quién emite cada papel, está en <a href="/bolivia/requisitos-para-vender-una-casa-bolivia/">requisitos para vender una casa en Bolivia</a>.' },
        { t: 'callout', tone: 'warn', title: 'Información general', html: 'Información general. Consulta con un notario de fe pública o un abogado antes de tomar decisiones.' },
      ],
    },
    {
      id: 'precio-del-departamento',
      h2: '¿Cuánto vale mi departamento?',
      blocks: [
        { t: 'p', html: 'Compara con departamentos en venta en tu misma zona y, si se puede, en edificios de antigüedad parecida. El precio por metro cuadrado construido es la mejor referencia.' },
        { t: 'ul', items: [
          'El piso cuenta: los altos con vista y luz suelen pedir más.',
          'Parqueo incluido es un dato que el comprador filtra.',
          'Expensas altas restan atractivo si no se ven en servicios.',
          'Un edificio con ascensor y seguridad compite mejor.',
        ] },
        { t: 'p', html: 'Para comparar con lo publicado, mira los departamentos en venta en <a href="https://casa-libre.com.bo/propiedades?op=venta&amp;type=depto">Casa-Libre</a>.' },
      ],
    },
    {
      id: 'fotos-y-aviso',
      h2: '¿Qué fotos y datos necesita el aviso?',
      blocks: [
        { t: 'p', html: 'Las de la unidad, con luz de día, y las del edificio: fachada, ingreso, ascensor, áreas comunes y la vista desde las ventanas.' },
        { t: 'ul', items: [
          'Superficie construida, dormitorios, baños y piso.',
          'Si incluye parqueo y baulera.',
          'Monto de las expensas y qué cubren.',
          'Si se aceptan mascotas, por si el comprador pregunta.',
        ] },
        { t: 'p', html: 'Más ideas en <a href="/bolivia/fotos-para-vender-una-casa/">fotos para vender una casa</a>.' },
      ],
    },
    {
      id: 'mostrar-el-departamento',
      h2: 'Cómo mostrar un departamento en un edificio',
      blocks: [
        { t: 'p', html: 'Avisa en portería quién viene y a qué hora. Muchos edificios piden registrar visitas, y eso además te da seguridad.' },
        { t: 'callout', tone: 'tip', title: 'Muestra también lo común', html: 'Lleva al interesado por las áreas sociales y el parqueo. Es parte de lo que compra.' },
      ],
    },
    {
      id: 'precios-de-departamentos',
      h2: '¿Cuánto piden por un departamento en las ciudades grandes?',
      blocks: [
        { t: 'p', html: `En lo publicado en Casa-Libre al ${d}, los departamentos en venta en Santa Cruz de la Sierra piden una mediana de ${fmtUsd(scz.departamentos_venta_price.median_usd)}, sobre ${scz.departamentos_venta_price.listings_with_price} avisos con precio. En La Paz y Cochabamba hay menos avisos y la mediana es más alta. Son precios pedidos por los vendedores, no precios de cierre.` },
        { t: 'table',
          caption: `Departamentos en venta en Casa-Libre, ${d}`,
          head: ['Ciudad', 'Mediana', 'Mitad central'],
          rows: deptoRows,
          note: `Propiedades activas publicadas en Casa-Libre al ${d}. Precios pedidos en dólares, no de cierre. La mitad central deja afuera el 25% más barato y el 25% más caro.` },
        { t: 'p', html: 'Dentro de una misma ciudad, el precio de un departamento se mueve sobre todo por la zona, los metros, el piso, el parqueo y la antigüedad del edificio. Compara con departamentos de tu mismo edificio o de la misma cuadra: es la comparación que va a hacer el comprador.' },
      ],
    },
    {
      id: 'publicar-departamento',
      h2: '¿Dónde publico mi departamento en venta?',
      blocks: [
        { t: 'p', html: 'Te recomendamos <a href="https://casa-libre.com.bo/vender">Casa-Libre</a>: publicas gratis, el comprador filtra por departamentos y por ciudad, y te escribe directo por WhatsApp, sin comisión sobre la venta.' },
      ],
    },
  ],
  faq: [
    { q: '¿Cómo vender un departamento en Bolivia?', a: 'Con el Folio Real a tu nombre, los impuestos y las expensas al día, un precio comparado con departamentos parecidos y un aviso con fotos de la unidad y del edificio. Se cierra con minuta, notario e inscripción en Derechos Reales.' },
    { q: '¿El parqueo se vende aparte?', a: 'Depende de cómo está inscrito. A veces tiene matrícula propia y se transfiere en la misma minuta pero como otro inmueble. Revísalo en Derechos Reales antes de publicar.' },
    { q: '¿Tengo que estar al día con las expensas para vender?', a: 'Es lo esperable. El comprador suele pedir una constancia de la administración, y las deudas se suelen descontar del precio o se pagan antes de firmar.' },
    { q: '¿Puedo vender un departamento en preventa?', a: 'Es un caso distinto, porque todavía no hay Folio Real de la unidad. Lo que se transfiere es el contrato con la constructora, con sus condiciones. Consulta con un abogado.' },
  ],
  internalSources: [
    { label: 'Google autocomplete gl=bo "venta de departamentos en la paz"', url: 'https://suggestqueries.google.com/complete/search?client=firefox&hl=es&gl=bo&q=venta%20de%20departamentos%20en%20la%20paz', date: '2026-11-13', note: '"venta de departamentos en la paz bolivia" first.' },
  ],
  closing: {
    title: 'Tu departamento, publicado hoy',
    text: 'Publicar en Casa-Libre es gratis. Los interesados te escriben directo por WhatsApp.',
    button: 'Publicar en Casa-Libre',
    href: 'https://casa-libre.com.bo/publicar',
  },
  related: ['', 'requisitos-para-vender-una-casa-bolivia', 'fotos-para-vender-una-casa', 'vender-casa-en-la-paz'],
};
