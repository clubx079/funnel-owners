export default {
  slug: 'vender-el-derecho-de-una-casa-el-salvador',
  group: 'Papeles y trámites',
  order: 7,
  title: 'Cómo vender el derecho de una casa en El Salvador',
  h1: 'Cómo vender el derecho de una casa en El Salvador',
  description: 'Qué significa vender el derecho de una casa en El Salvador, por qué es riesgoso sin el banco o el Fondo Social para la Vivienda y cuáles son las formas seguras.',
  navLabel: 'Vender el derecho',
  blurb: 'Qué significa "vender el derecho" de una casa en El Salvador, sus riesgos y las formas seguras de hacerlo.',
  published: '2026-11-13',
  updated: '2026-11-13',
  review: 'pending',
  reviewNote: 'A Salvadoran notario must check: the colloquial meanings of "vender el derecho" (equity sale of a house still financed, where the buyer keeps paying the loan; and sale of derechos proindivisos by a co-owner or heir), the legal effects of an informal arrangement (property and debt remain with the seller), whether the FSV or banks offer a formal change of debtor (sustitución de deudor / traspaso), and whether a derechos proindivisos sale can be inscribed in the CNR.',
  answer: 'En El Salvador "vender el derecho" de una casa suele significar vender lo que ya pagó de una casa con crédito, para que el comprador siga pagando la cuota. Si se hace sin la aprobación del banco o del Fondo Social para la Vivienda, la casa y la deuda siguen a nombre de quien vende. La forma segura es cancelar el crédito con la venta o formalizar un cambio de deudor. Puede publicar su casa gratis en Casa-Libre.',
  summary: [
    'La expresión se usa para dos cosas distintas: la "prima" de una casa con crédito y la parte de un copropietario.',
    'Un arreglo informal no cambia al dueño en el CNR ni al deudor en el banco.',
    'Si el comprador deja de pagar, el acreedor le cobra al vendedor, que sigue siendo el deudor.',
    'Las salidas seguras: cancelar la hipoteca con el precio o pedir al acreedor un cambio de deudor formal.',
  ],
  cta: {
    title: 'Venda su casa con todo en regla',
    text: 'Publique gratis en Casa-Libre y busque un comprador que pague con su propio crédito.',
    button: 'Publicar mi casa gratis',
    href: 'https://sv.casa-libre.com/publicar',
  },
  sections: [
    {
      id: 'que-significa',
      h2: '¿Qué significa vender el derecho de una casa?',
      blocks: [
        { t: 'p', html: 'Es una expresión de uso común, no un término de la ley. Según el caso, se refiere a una de estas dos situaciones.' },
        { t: 'table',
          caption: 'Los dos sentidos de "vender el derecho"',
          head: ['Situación', 'Qué se vende en la práctica', 'Qué pasa en el registro'],
          rows: [
            ['Casa con crédito', 'Lo ya pagado (la prima y las cuotas); el comprador sigue con las cuotas', 'Si es informal, nada: la casa sigue a nombre del vendedor'],
            ['Casa con varios dueños o heredada', 'La parte de un copropietario (derechos proindivisos)', 'Se puede inscribir con escritura pública'],
          ],
          note: 'Información general al 13 de noviembre de 2026.' },
        { t: 'callout', tone: 'warn', title: 'Antes de decidir', html: 'Información general. Consulte con un notario o contador antes de tomar decisiones.' },
      ],
    },
    {
      id: 'riesgos',
      h2: '¿Qué riesgos tiene vender el derecho sin el banco?',
      blocks: [
        { t: 'p', html: 'Para quien vende, el riesgo principal es que la deuda sigue siendo suya. Para quien compra, que paga por una casa que no está a su nombre.' },
        { t: 'ul', items: [
          '<strong>Para el vendedor:</strong> si el comprador deja de pagar, el atraso aparece a su nombre y el acreedor puede ejecutar la hipoteca.',
          '<strong>Para el vendedor:</strong> sigue figurando como dueño, con lo que eso implica ante la alcaldía y el registro.',
          '<strong>Para el comprador:</strong> no puede inscribir la casa, y si el vendedor muere o tiene deudas, la casa puede quedar en una herencia o un embargo.',
          '<strong>Para ambos:</strong> muchos créditos de vivienda prohíben ceder o alquilar sin permiso del acreedor.',
        ] },
      ],
    },
    {
      id: 'formas-seguras',
      h2: 'Las formas seguras de vender una casa que aún está pagando',
      blocks: [
        { t: 'p', html: 'Hay dos caminos que dejan a cada uno en su lugar: el comprador como dueño inscrito y el vendedor libre de la deuda.' },
        { t: 'steps', items: [
          { title: 'Cancelar el crédito con la venta', html: 'El comprador paga el precio, con fondos propios o un crédito nuevo, y con parte de ese dinero se cancela su hipoteca.' },
          { title: 'Cambio de deudor aprobado', html: 'Pregunte a su banco o al Fondo Social para la Vivienda si permiten que el comprador asuma el crédito. Si lo aprueban, se formaliza ante notario.' },
        ] },
        { t: 'p', html: 'El primer camino es el más común y está explicado en <a href="/el-salvador/vender-casa-hipotecada-el-salvador/">vender una casa hipotecada en El Salvador</a>.' },
      ],
    },
    {
      id: 'cuanto-pedir',
      h2: '¿Cuánto pedir por el derecho de una casa?',
      blocks: [
        { t: 'p', html: 'La cuenta es la misma que en cualquier venta: el precio de la casa completa menos el saldo de la deuda es lo que usted recibe. Así se compara con casas parecidas y nadie paga de más.' },
        { t: 'example',
          title: 'Ejemplo ilustrativo: precio de la casa y saldo de la deuda',
          html: 'Cifras redondas e hipotéticas para una casa con crédito.',
          rows: [
            ['Precio de casas parecidas en la zona', 'US$60,000'],
            ['Saldo del crédito', 'US$41,000'],
            ['Lo que recibe el vendedor: 60,000 - 41,000', 'US$19,000'],
            ['Con venta formal', 'El comprador paga US$60,000 y el crédito se cancela'],
          ] },
      ],
    },
    {
      id: 'derechos-proindivisos',
      h2: '¿Y si quiero vender mi parte de una casa con otros dueños?',
      blocks: [
        { t: 'p', html: 'Puede vender sus derechos proindivisos en escritura pública, y esa venta se inscribe. Pero el comprador queda compartiendo la casa con los otros dueños, así que lo habitual es ofrecérsela primero a ellos.' },
        { t: 'p', html: 'Si la casa viene de una herencia, revise antes <a href="/el-salvador/vender-casa-heredada-el-salvador/">vender una casa heredada</a>.' },
      ],
    },
    {
      id: 'publicar',
      h2: 'Publique su casa para venderla bien',
      blocks: [
        { t: 'p', html: 'Si decide vender de forma completa, con cancelación del crédito, su comprador puede ser cualquier persona con fondos o con un crédito aprobado. Eso amplía mucho el número de interesados.' },
        { t: 'casalibre',
          title: 'Publicar en Casa-Libre',
          html: 'Casa-Libre es un marketplace inmobiliario donde inmobiliarias, agentes y propietarios publican casas, apartamentos y terrenos gratis, con extras pagos opcionales. Los interesados contactan directo por WhatsApp y no hay comisión sobre la venta. Está en la web y en apps para iPhone y Android.',
          button: 'Ver cómo funciona',
          href: 'https://sv.casa-libre.com/como-funciona' },
        { t: 'p', html: 'Antes de publicar, compare con casas en venta en <a href="https://sv.casa-libre.com/comprar">Casa-Libre</a> para fijar un precio realista.' },
      ],
    },
  ],
  faq: [
    { q: '¿Es legal vender el derecho de una casa del Fondo Social para la Vivienda?', a: 'Un acuerdo privado entre dos personas no cambia al deudor ni al dueño inscrito, y puede ir contra las condiciones del crédito. Pregunte al Fondo Social para la Vivienda qué opciones formales tiene.' },
    { q: '¿Qué documento se firma al vender el derecho?', a: 'En la práctica informal se usan promesas o documentos privados, que no transfieren la casa. Para una venta segura se firma una escritura de compraventa con cancelación del crédito o un cambio de deudor aprobado.' },
    { q: '¿El comprador puede inscribir la casa a su nombre después?', a: 'Solo cuando se cancele el crédito y se otorgue la escritura de compraventa, o cuando el acreedor apruebe el cambio de deudor. Mientras tanto, la casa sigue a nombre del vendedor.' },
    { q: '¿Qué pasa si el vendedor fallece antes de escriturar?', a: 'La casa entra en su herencia, y el comprador tendría que entenderse con los herederos. Es uno de los motivos para formalizar la venta desde el principio.' },
  ],
  internalSources: [
    { label: 'Google autocomplete gl=sv "como vender el derecho de una casa"', url: 'https://suggestqueries.google.com/complete/search?client=firefox&hl=es&gl=sv&q=como%20vender%20el%20derecho%20de%20una%20casa', date: '2026-11-13', note: '"como vender el derecho de una casa en el salvador", "que significa vender derecho de casa en el salvador".' },
  ],
  closing: {
    title: 'Una venta en regla empieza con un buen aviso',
    text: 'Publique gratis en Casa-Libre y reciba consultas directo en su WhatsApp.',
    button: 'Publicar en Casa-Libre',
    href: 'https://sv.casa-libre.com/publicar',
  },
  related: ['vender-casa-hipotecada-el-salvador', 'vender-casa-heredada-el-salvador', 'escritura-de-compraventa-el-salvador'],
};
