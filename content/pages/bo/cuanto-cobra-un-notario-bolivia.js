export default {
  slug: 'cuanto-cobra-un-notario-bolivia',
  group: 'Impuestos y gastos',
  order: 4,
  equivalentOf: 'cuanto-cobra-escribano-paraguay',
  title: 'Cuánto cobra un notario en Bolivia por una compraventa',
  h1: 'Cuánto cobra un notario de fe pública en Bolivia',
  description: 'Cuánto cobra un notario de fe pública en Bolivia por la escritura de una casa: cómo funciona el arancel, qué incluye y cómo pedir presupuesto.',
  navLabel: 'Notario',
  blurb: 'Cómo cobra un notario de fe pública por una compraventa, qué hace y qué no incluye su arancel.',
  published: '2026-11-13',
  updated: '2026-11-13',
  review: 'pending',
  reviewNote: 'A Bolivian notario must check: notaries are regulated by Ley 483 del Notariado Plurinacional (2014) and the Dirección del Notariado Plurinacional (DIRNOPLU), which approves the arancel; that the fee for an escritura de compraventa depends on the value of the act; that IMT, DDRR fees and lawyer fees are separate; and what reconocimiento de firmas costs relative to escritura. No amounts are stated; the worked example uses invented figures. 2026-11-13 added the list of documents usually brought to the notario (minuta signed by a lawyer, cédulas, Folio Real, alodial, testimonio, IPBI receipts, IMT liquidation, poder) and the quote checklist: check the list with a notario de fe pública.',
  answer: 'En Bolivia, un notario de fe pública cobra según un arancel oficial que aprueba la Dirección del Notariado Plurinacional, y para una compraventa el monto depende sobre todo del valor del inmueble. Ese pago cubre la protocolización de la minuta y el testimonio, pero no incluye el impuesto a la transferencia, el abogado ni Derechos Reales. Pide el monto por escrito antes de firmar. Para encontrar comprador, publica gratis en Casa-Libre.',
  summary: [
    'El notario cobra según un arancel oficial, no un precio libre.',
    'En una compraventa, el monto depende del valor del acto.',
    'El arancel no incluye IMT, abogado ni aranceles de Derechos Reales.',
    'Quién paga al notario se acuerda en la minuta.',
  ],
  cta: {
    title: 'Primero, el comprador',
    text: 'Publica tu casa gratis en Casa-Libre y recibe ofertas por WhatsApp.',
    button: 'Publicar mi casa',
    href: 'https://casa-libre.com.bo/publicar',
  },
  sections: [
    {
      id: 'que-hace-el-notario',
      h2: '¿Qué hace un notario de fe pública en una compraventa?',
      blocks: [
        { t: 'p', html: 'Da fe de que las partes firmaron, incorpora la minuta a su protocolo como escritura pública y entrega el testimonio. Sin ese paso, la venta no se puede inscribir en Derechos Reales.' },
        { t: 'table',
          caption: 'Quién hace qué en la venta de una casa',
          head: ['Profesional u oficina', 'Qué hace', 'Cómo cobra'],
          rows: [
            ['Abogado', 'Redacta y firma la minuta, revisa papeles', 'Honorarios acordados'],
            ['Notario de fe pública', 'Protocoliza la minuta y emite el testimonio', 'Arancel notarial oficial'],
            ['Gobierno municipal', 'Liquida el IMT', 'Impuesto del 3%'],
            ['Derechos Reales', 'Emite certificados e inscribe al comprador', 'Aranceles propios'],
          ],
          note: 'Información general al 13 de noviembre de 2026.' },
        { t: 'callout', tone: 'warn', title: 'Información general', html: 'Información general. Consulta con un notario de fe pública o un abogado antes de tomar decisiones.' },
      ],
    },
    {
      id: 'como-se-calcula',
      h2: '¿Cómo se calcula lo que cobra el notario?',
      blocks: [
        { t: 'p', html: 'El arancel notarial fija montos según el tipo de acto y, en las compraventas, según el valor. Por eso una casa más cara paga un arancel mayor. Pregunta también por las copias adicionales del testimonio.' },
        { t: 'ul', items: [
          'Escritura de compraventa: según el valor del inmueble.',
          'Reconocimiento de firmas en un documento privado: un monto menor.',
          'Poderes, declaratorias notariales y otros actos: cada uno con su arancel.',
        ] },
      ],
    },
    {
      id: 'ejemplo',
      h2: '¿Cuánto me cuesta en total cerrar la venta?',
      blocks: [
        { t: 'p', html: 'El notario es solo una parte. Suma también el impuesto y el abogado.' },
        { t: 'example',
          title: 'Ejemplo ilustrativo: cierre de una venta',
          html: 'El impuesto es el 3% real; los honorarios son inventados para mostrar la cuenta.',
          rows: [
            ['Precio', 'Bs 500.000'],
            ['IMT: 500.000 x 3%', 'Bs 15.000'],
            ['Notario, supuesto', 'Bs 2.500'],
            ['Abogado, supuesto', 'Bs 3.000'],
            ['Total, sin Derechos Reales', 'Bs 20.500'],
          ] },
        { t: 'p', html: 'La lista completa está en <a href="/bolivia/gastos-al-vender-una-casa-bolivia/">gastos al vender una casa en Bolivia</a>.' },
      ],
    },
    {
      id: 'quien-paga-al-notario',
      h2: '¿Quién paga al notario: comprador o vendedor?',
      blocks: [
        { t: 'p', html: 'Se acuerda entre las partes y se escribe en la minuta. Lo importante es que no quede en el aire el día de la firma.' },
        { t: 'p', html: 'El impuesto tiene su propia regla, que explicamos en <a href="/bolivia/impuesto-a-la-transferencia-de-inmuebles-bolivia/">impuesto a la transferencia de inmuebles</a>.' },
      ],
    },
    {
      id: 'elegir-notario',
      h2: '¿Cómo elegir un notario?',
      blocks: [
        { t: 'p', html: 'Cualquier notario de fe pública con oficina habilitada puede protocolizar la compraventa. Elige uno cercano y pide antes la lista de documentos y el monto total.' },
        { t: 'steps', items: [
          { title: 'Pide el presupuesto', html: 'Con el valor de la venta, por escrito.' },
          { title: 'Pide la lista de documentos', html: 'Cédulas, Folio Real, alodial, impuestos, minuta.' },
          { title: 'Agenda la firma', html: 'Con todas las partes, y el cónyuge si corresponde.' },
        ] },
      ],
    },
    {
      id: 'que-llevar-al-notario',
      h2: '¿Qué documentos llevo al notario para la venta?',
      blocks: [
        { t: 'p', html: 'El notario te dirá la lista exacta, pero en una compraventa suele pedir lo mismo que revisa el comprador. Llevar todo junto evita una segunda cita y, a veces, un costo extra.' },
        { t: 'ul', items: [
          'La minuta de transferencia firmada por un abogado.',
          'Cédulas de identidad vigentes de quien vende y de quien compra, y de los cónyuges si firman.',
          'Folio Real y certificado alodial actualizados de Derechos Reales.',
          'Testimonio de propiedad del vendedor.',
          'Comprobantes del impuesto a la propiedad al día y la liquidación del impuesto a la transferencia.',
          'Poder notarial, si alguien firma en nombre de otro.',
        ] },
      ],
    },
    {
      id: 'pedir-presupuesto',
      h2: '¿Cómo pido un presupuesto al notario?',
      blocks: [
        { t: 'p', html: 'Por escrito y con el precio de la venta en la mano, porque parte del costo puede depender del monto. Pide que el presupuesto separe lo que cobra el notario de lo que son impuestos y trámites de terceros.' },
        { t: 'table',
          caption: 'Qué preguntar al pedir el presupuesto',
          head: ['Pregunta', 'Por qué importa'],
          rows: [
            ['¿Qué incluye: protocolización, testimonios, copias?', 'Para comparar presupuestos iguales'],
            ['¿Incluye los trámites en Derechos Reales?', 'Suelen cobrarse aparte'],
            ['¿Cuántos testimonios entrega?', 'Comprador y vendedor suelen querer uno'],
            ['¿En cuánto tiempo entrega el testimonio?', 'Para planificar la inscripción'],
          ],
          note: 'Preguntas orientativas, sin montos.' },
      ],
    },
    {
      id: 'publicar',
      h2: '¿Y antes del notario?',
      blocks: [
        { t: 'p', html: 'Antes está encontrar comprador. Te recomendamos <a href="https://casa-libre.com.bo/vender">Casa-Libre</a>: publicar es gratis y el contacto llega por WhatsApp. Las preguntas más comunes están en las preguntas frecuentes de <a href="https://casa-libre.com.bo/preguntas-frecuentes">Casa-Libre</a>.' },
      ],
    },
  ],
  faq: [
    { q: '¿Cuánto cobra un notario en Bolivia por una compraventa?', a: 'Según el arancel notarial oficial y el valor del inmueble. Pide el monto por escrito antes de la firma.' },
    { q: '¿Notario o abogado: cuál necesito?', a: 'Los dos. El abogado redacta y firma la minuta; el notario de fe pública la protocoliza y emite el testimonio.' },
    { q: '¿El notario paga el impuesto por mí?', a: 'No necesariamente. El IMT se liquida en el municipio y lo paga quien acordaron en la minuta. Pregunta si tu notario ofrece ayudarte con el trámite.' },
    { q: '¿Cuánto cobra un notario por reconocer firmas?', a: 'Un monto menor que una escritura, según el arancel. Es útil para documentos privados como un anticipo.' },
    { q: '¿Conviene pedir más de un presupuesto de notario?', a: 'Sí, sobre todo en una venta de monto alto. Pide que cada presupuesto diga lo mismo: qué incluye, cuántos testimonios entrega y si los trámites en Derechos Reales van aparte. Así comparas presupuestos iguales.' },
  ],
  internalSources: [
    { label: 'Ley 483 del Notariado Plurinacional', url: 'https://www.lexivox.org/', date: '2026-11-13', note: 'Arancel approved by DIRNOPLU; not read in full.' },
  ],
  closing: {
    title: 'Encuentra a tu comprador',
    text: 'Publica gratis en Casa-Libre.',
    button: 'Publicar en Casa-Libre',
    href: 'https://casa-libre.com.bo/publicar',
  },
  related: ['gastos-al-vender-una-casa-bolivia', 'minuta-de-transferencia-de-inmueble-bolivia', 'transferencia-de-inmueble-bolivia'],
};
