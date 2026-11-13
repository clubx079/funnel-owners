export default {
  slug: 'impuesto-a-la-propiedad-de-bienes-inmuebles-bolivia',
  group: 'Impuestos y gastos',
  order: 2,
  equivalentOf: 'impuesto-inmobiliario-paraguay',
  title: 'Impuesto a la propiedad de bienes inmuebles (IPBI) Bolivia',
  h1: 'Impuesto a la propiedad de bienes inmuebles en Bolivia',
  description: 'Qué es el IPBI, el impuesto anual a tu casa en Bolivia: quién lo cobra, cómo se calcula el avalúo fiscal, cómo consultarlo y por qué pagarlo antes de vender.',
  navLabel: 'Impuesto a la propiedad',
  blurb: 'Qué es el IPBI, cómo se calcula, cómo consultarlo y por qué tiene que estar pagado antes de vender.',
  published: '2026-11-13',
  updated: '2026-11-13',
  review: 'pending',
  reviewNote: 'A Bolivian tax adviser must check: IPBI is the annual municipal tax on real estate (Ley 843 Título IV, municipal domain since Ley 1606); base = avalúo fiscal (land value by zone + construction value by type with depreciation); progressive scale; paid per gestión with deadlines and discounts set by each municipality; many municipalities use the RUAT system for consultation and payment; prior unpaid gestiones block the IMT liquidation. No rates or amounts stated. 2026-11-13 added who pays the current gestión (agreed in the minuta; ask the municipality how it liquidates) and the metropolitan municipalities list (Porongo/Urubó, Warnes, El Alto, Achocalla, Mecapaca, Quillacollo, Tiquipaya, Sacaba, Colcapirhua, Vinto): verify.',
  answer: 'El impuesto a la propiedad de bienes inmuebles (IPBI) es el impuesto anual que pagas por tu casa o terreno en Bolivia. Lo cobra el gobierno municipal donde está el inmueble y se calcula sobre un avalúo fiscal que depende de la zona, la superficie y el tipo de construcción, no sobre el precio de mercado. Antes de vender tiene que estar al día. Con los impuestos en orden, puedes publicar tu casa en Casa-Libre.',
  summary: [
    'Es municipal y anual: se paga por gestión, en las fechas que fija cada municipio.',
    'La base es el avalúo fiscal, no el precio que pedirías por la casa.',
    'Sin el IPBI al día no se puede liquidar el impuesto a la transferencia de la venta.',
    'Muchos municipios permiten consultar y pagar por internet con el número de inmueble.',
  ],
  cta: {
    title: 'Impuestos al día, casa publicada',
    text: 'Publica tu casa gratis en Casa-Libre y recibe consultas por WhatsApp.',
    button: 'Publicar mi casa',
    href: 'https://casa-libre.com.bo/publicar',
  },
  sections: [
    {
      id: 'que-es-el-ipbi',
      h2: '¿Qué es el impuesto a la propiedad de bienes inmuebles?',
      blocks: [
        { t: 'p', html: 'Es un impuesto anual sobre casas, departamentos y terrenos, que cobra cada gobierno autónomo municipal. Lo paga quien es propietario del inmueble en cada gestión.' },
        { t: 'table',
          caption: 'IPBI e IMT: dos impuestos distintos',
          head: ['', 'IPBI', 'IMT'],
          rows: [
            ['Qué grava', 'Ser propietario', 'Vender o transferir'],
            ['Cuándo se paga', 'Cada año (gestión)', 'Una vez, al vender'],
            ['Base', 'Avalúo fiscal', 'Precio o valor registrado, el mayor'],
            ['Quién lo cobra', 'Gobierno autónomo municipal', 'Gobierno autónomo municipal'],
          ],
          note: 'Información general al 13 de noviembre de 2026.' },
        { t: 'callout', tone: 'warn', title: 'Información general', html: 'Información general. Consulta con un contador o con tu municipio antes de tomar decisiones.' },
      ],
    },
    {
      id: 'como-se-calcula',
      h2: '¿Cómo se calcula el IPBI?',
      blocks: [
        { t: 'p', html: 'Sobre el avalúo fiscal, que suma el valor del terreno según la zona y el valor de la construcción según su tipo y antigüedad. A ese avalúo se le aplica una escala que sube por tramos.' },
        { t: 'ul', items: [
          '<strong>Terreno:</strong> superficie por un valor por metro cuadrado que el municipio asigna a cada zona.',
          '<strong>Construcción:</strong> metros construidos por un valor según el tipo de construcción, con descuento por antigüedad.',
          '<strong>Escala:</strong> cuanto mayor el avalúo, mayor la alícuota del tramo.',
        ] },
        { t: 'p', html: 'Por eso dos casas con el mismo precio de mercado pueden pagar distinto: depende de cómo están registradas.' },
      ],
    },
    {
      id: 'como-consultar',
      h2: '¿Cómo consultar cuánto debo de impuesto a la propiedad?',
      blocks: [
        { t: 'p', html: 'Con el número de inmueble o el código catastral, en la plataforma de tu municipio o en sus oficinas. Muchos municipios usan el sistema RUAT para consultar y pagar por internet.' },
        { t: 'steps', items: [
          { title: 'Busca tu número de inmueble', html: 'Está en tus comprobantes anteriores.' },
          { title: 'Consulta la deuda', html: 'En la plataforma o en ventanilla, gestión por gestión.' },
          { title: 'Revisa los datos', html: 'Que la superficie y el tipo de construcción coincidan con la realidad.' },
          { title: 'Paga', html: 'En línea, en banco autorizado o en el municipio. Guarda los comprobantes.' },
        ] },
      ],
    },
    {
      id: 'antes-de-vender',
      h2: '¿Por qué tiene que estar al día antes de vender?',
      blocks: [
        { t: 'p', html: 'Porque el municipio no liquida el impuesto a la transferencia si hay gestiones del IPBI sin pagar. Y porque el comprador no quiere heredar tu deuda.' },
        { t: 'example',
          title: 'Ejemplo ilustrativo: deuda que se descuenta',
          html: 'Cifras redondas e inventadas.',
          rows: [
            ['Precio acordado', 'Bs 600.000'],
            ['Dos gestiones de IPBI impagas, supuestas', '- Bs 4.000'],
            ['Si las paga el comprador, el precio neto para ti', 'Bs 596.000'],
          ] },
        { t: 'p', html: 'El impuesto de la venta en sí está en <a href="/bolivia/impuesto-a-la-transferencia-de-inmuebles-bolivia/">impuesto a la transferencia de inmuebles</a>.' },
      ],
    },
    {
      id: 'datos-mal-registrados',
      h2: '¿Qué hago si el municipio tiene mal los datos de mi casa?',
      blocks: [
        { t: 'p', html: 'Pide la corrección en catastro con el plano y el Folio Real. Si la construcción real es mayor que la registrada, regularizarla puede subir el impuesto, pero evita problemas con el comprador y su banco.' },
        { t: 'p', html: 'Los papeles que pedirá el comprador están en <a href="/bolivia/requisitos-para-vender-una-casa-bolivia/">requisitos para vender una casa</a>.' },
      ],
    },
    {
      id: 'ipbi-del-ano-de-la-venta',
      h2: '¿Quién paga el impuesto del año en que vendo?',
      blocks: [
        { t: 'p', html: 'Lo que acuerden comprador y vendedor, por escrito en la minuta. Las gestiones anteriores tienen que estar pagadas por quien vende; la del año en curso se puede repartir, y conviene preguntar al municipio cómo la liquida antes de firmar.' },
        { t: 'p', html: 'Si no queda escrito, aparece el conflicto al año siguiente, cuando llega el cobro y nadie sabe a quién le toca. Una línea en la minuta lo evita.' },
      ],
    },
    {
      id: 'municipios-del-area-metropolitana',
      h2: '¿Dónde pago si mi casa está en un municipio vecino?',
      blocks: [
        { t: 'p', html: 'En el municipio donde está el inmueble, aunque para todos sea parte de la ciudad. Pasa mucho en las áreas metropolitanas grandes:' },
        { t: 'ul', items: [
          'Santa Cruz: el Urubó pertenece a Porongo, y Warnes es otro municipio. Ver <a href="/bolivia/vender-casa-en-santa-cruz-de-la-sierra/">vender en Santa Cruz</a>.',
          'La Paz: El Alto, Achocalla y Mecapaca tienen su propio gobierno municipal.',
          'Cochabamba: Quillacollo, Tiquipaya, Sacaba, Colcapirhua y Vinto cobran por separado.',
        ] },
      ],
    },
    {
      id: 'publicar',
      h2: '¿Cuándo publico mi casa?',
      blocks: [
        { t: 'p', html: 'Ya mismo, mientras pones al día los impuestos. Puedes publicar gratis en <a href="https://casa-libre.com.bo/vender">Casa-Libre</a> y guardar el aviso como borrador. La guía de documentos de <a href="https://casa-libre.com.bo/guias/documentos-para-vender-un-inmueble">Casa-Libre</a> te ayuda a ordenar el resto.' },
      ],
    },
  ],
  faq: [
    { q: '¿Qué es el IPBI en Bolivia?', a: 'El impuesto a la propiedad de bienes inmuebles: un impuesto anual municipal sobre casas, departamentos y terrenos.' },
    { q: '¿Cómo se calcula el impuesto a la propiedad de bienes inmuebles?', a: 'Sobre el avalúo fiscal, que combina el valor del terreno según la zona y el de la construcción según su tipo y antigüedad, con una escala por tramos.' },
    { q: '¿Cuántos años atrás me pueden cobrar?', a: 'El municipio puede cobrar gestiones anteriores impagas dentro de los plazos de prescripción. Consulta tu deuda completa antes de vender.' },
    { q: '¿Quién paga el impuesto del año en que vendo?', a: 'Se acuerda en la minuta. Lo común es que el vendedor deje pagadas las gestiones vencidas hasta la venta.' },
    { q: '¿Mi casa en el Urubó paga el impuesto en Santa Cruz?', a: 'No. El Urubó pertenece al municipio de Porongo, así que el impuesto a la propiedad se paga allí. Revisa tus comprobantes anteriores para confirmar el municipio.' },
  ],
  internalSources: [
    { label: 'Google autocomplete gl=bo', url: 'https://suggestqueries.google.com/complete/search?client=firefox&hl=es&gl=bo&q=impuesto%20a%20la%20propiedad%20de%20bienes%20inmuebles', date: '2026-11-13', note: '"impuesto a la propiedad de bienes inmuebles en bolivia", "ipbi", cochabamba, santa cruz.' },
  ],
  closing: {
    title: 'Todo en orden para vender',
    text: 'Publica tu casa gratis en Casa-Libre.',
    button: 'Publicar en Casa-Libre',
    href: 'https://casa-libre.com.bo/publicar',
  },
  related: ['impuesto-a-la-transferencia-de-inmuebles-bolivia', 'requisitos-para-vender-una-casa-bolivia', 'gastos-al-vender-una-casa-bolivia'],
};
