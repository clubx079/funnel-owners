export default {
  slug: 'impuesto-inmobiliario-urbano-venezuela',
  group: 'Impuestos y gastos',
  order: 4,
  equivalentOf: 'impuesto-inmobiliario-paraguay',
  title: 'Impuesto inmobiliario urbano en Venezuela: cómo se paga',
  h1: 'Impuesto inmobiliario urbano en Venezuela',
  description: 'Qué es el impuesto inmobiliario urbano en Venezuela, quién lo cobra, cómo se calcula en cada alcaldía y por qué necesitas la solvencia para vender.',
  navLabel: 'Impuesto inmobiliario',
  blurb: 'El impuesto municipal sobre inmuebles urbanos: quién lo cobra, cómo se calcula y la solvencia para vender.',
  published: '2026-11-13',
  updated: '2026-11-13',
  review: 'pending',
  reviewNote: 'A Venezuelan lawyer or municipal tax specialist must check: that the impuesto sobre inmuebles urbanos is a municipal tax under the Ley Orgánica del Poder Público Municipal, set by each municipality ordinance; that it is based on a valor catastral or similar base defined by the ordinance; that the solvencia municipal and cédula catastral are required to sell; that alcaldías usually allow online payment; and the general existence of discounts for early payment (not stated as fact). No rates are stated.',
  answer: 'El impuesto inmobiliario urbano es un tributo municipal que pagan cada año los propietarios de casas, apartamentos y terrenos en zonas urbanas de Venezuela. Lo cobra la alcaldía del municipio donde está el inmueble, con reglas y tarifas propias de su ordenanza. Para vender necesitas estar al día y presentar la solvencia municipal. Cuando la tengas, puedes publicar tu casa gratis en Casa-Libre.',
  summary: [
    'Lo cobra la alcaldía: cada municipio tiene su propia ordenanza y su forma de cálculo.',
    'La base suele ser un valor catastral definido por el municipio, no el precio de venta.',
    'La solvencia municipal es uno de los recaudos para vender y registrar la venta.',
    'Antes de pagar, actualiza la cédula catastral si cambió algo en la casa.',
  ],
  cta: {
    title: 'Con la solvencia al día, publica',
    text: 'Publica tu casa gratis en Casa-Libre y recibe las consultas por WhatsApp.',
    button: 'Publicar mi casa',
    href: 'https://casa-libre.com.ve/publicar',
  },
  sections: [
    {
      id: 'que-es',
      h2: '¿Qué es el impuesto inmobiliario urbano?',
      blocks: [
        { t: 'p', html: 'Es el impuesto que los municipios cobran sobre los inmuebles ubicados en su zona urbana. No depende de que vendas: se paga cada año mientras seas propietario.' },
        { t: 'table',
          caption: 'Impuesto inmobiliario urbano: lo básico',
          head: ['Pregunta', 'Respuesta general'],
          rows: [
            ['Quién lo cobra', 'La alcaldía del municipio donde está el inmueble'],
            ['Quién lo paga', 'El propietario'],
            ['Sobre qué base', 'Un valor fijado por el municipio según su ordenanza y su catastro'],
            ['Cada cuánto', 'Es anual; muchas alcaldías permiten pagarlo por partes'],
            ['Para qué lo necesitas al vender', 'Para obtener la solvencia municipal'],
          ],
          note: 'Información general al 13 de noviembre de 2026. Las tarifas y plazos los fija cada ordenanza municipal.' },
        { t: 'callout', tone: 'warn', title: 'Antes de decidir', html: 'Información general. Consulta con un abogado o con la alcaldía antes de tomar decisiones.' },
      ],
    },
    {
      id: 'como-se-calcula',
      h2: '¿Cómo se calcula?',
      blocks: [
        { t: 'p', html: 'Cada alcaldía usa su propia fórmula. En general parte de los datos del catastro: la zona, los metros de terreno y de construcción y el uso del inmueble.' },
        { t: 'ul', items: [
          'Si ampliaste la casa, el catastro puede tener datos viejos; la alcaldía te pide actualizarlos.',
          'Un apartamento y una casa del mismo municipio pagan con la misma ordenanza, pero con datos distintos.',
          'Por eso dos vecinos pueden pagar montos diferentes.',
        ] },
      ],
    },
    {
      id: 'cedula-catastral',
      h2: '¿Qué tiene que ver la cédula catastral?',
      blocks: [
        { t: 'p', html: 'La cédula catastral identifica tu inmueble en el catastro municipal, y con esos datos la alcaldía calcula el impuesto. Para vender, se piden ambas: cédula catastral vigente y solvencia.' },
        { t: 'p', html: 'Si nunca sacaste la cédula catastral, empieza por ahí: la alcaldía te dirá los recaudos, normalmente el documento de propiedad y un plano.' },
      ],
    },
    {
      id: 'solvencia-para-vender',
      h2: '¿Por qué necesito la solvencia municipal para vender?',
      blocks: [
        { t: 'p', html: 'Porque el Registro y el comprador quieren saber que el inmueble no arrastra deudas con la alcaldía. Sin solvencia, la venta se frena.' },
        { t: 'p', html: 'La solvencia está en la lista de <a href="/venezuela/requisitos-para-vender-una-casa-venezuela/">requisitos para vender una casa</a>, junto con la certificación de gravámenes y el anticipo de ISLR, que se explica en <a href="/venezuela/anticipo-de-islr-venta-de-inmueble/">anticipo de ISLR</a>.' },
      ],
    },
    {
      id: 'deudas-atrasadas',
      h2: '¿Qué pasa si debo varios años?',
      blocks: [
        { t: 'p', html: 'Se pagan antes de vender, normalmente con recargos. Pide a la alcaldía el estado de cuenta y págalo con tiempo, porque la solvencia puede tardar unos días.' },
        { t: 'p', html: 'Quien vende suele asumir esas deudas. Está en la tabla de <a href="/venezuela/gastos-al-vender-una-casa-venezuela/">gastos al vender</a>.' },
      ],
    },
    {
      id: 'publicar',
      h2: 'Publica mientras sacas la solvencia',
      blocks: [
        { t: 'p', html: 'No tienes que esperar la solvencia para publicar. Carga tu aviso gratis en <a href="https://casa-libre.com.ve/publicar">Casa-Libre</a> y guarda el borrador si te falta algo.' },
        { t: 'p', html: 'Más sobre los documentos en la guía de <a href="https://casa-libre.com.ve/guias/documentos-para-vender-un-inmueble">Casa-Libre</a> para vender un inmueble.' },
      ],
    },
  ],
  faq: [
    { q: '¿Cuánto se paga de impuesto inmobiliario urbano?', a: 'Depende del municipio y de los datos catastrales de tu inmueble. Pide el estado de cuenta en tu alcaldía.' },
    { q: '¿Dónde pago el impuesto inmobiliario?', a: 'En la alcaldía del municipio donde está la casa; muchas permiten pagarlo en línea.' },
    { q: '¿Qué es la solvencia municipal?', a: 'Una constancia de la alcaldía de que no debes el impuesto inmobiliario urbano. Se pide para vender.' },
    { q: '¿Los apartamentos pagan impuesto inmobiliario?', a: 'Sí, cada apartamento es un inmueble con su propia ficha catastral y paga el impuesto.' },
  ],
  internalSources: [
    { label: 'Google autocomplete gl=ve', url: 'https://suggestqueries.google.com/complete/search?client=firefox&hl=es&gl=ve&q=solvencia%20municipal', date: '2026-11-13', note: 'impuesto inmobiliario urbano; impuesto inmobiliario venezuela; solvencia municipal caracas, chacao, baruta, maracaibo; cedula catastral.' },
  ],
  closing: {
    title: 'Todo al día, a vender',
    text: 'Publica tu casa gratis en Casa-Libre: los interesados te escriben directo por WhatsApp.',
    button: 'Publicar en Casa-Libre',
    href: 'https://casa-libre.com.ve/publicar',
  },
  related: ['requisitos-para-vender-una-casa-venezuela', 'gastos-al-vender-una-casa-venezuela', 'anticipo-de-islr-venta-de-inmueble'],
};
