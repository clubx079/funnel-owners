export default {
  slug: 'documento-privado-de-compraventa-bolivia',
  group: 'Papeles y trámites',
  order: 5,
  equivalentOf: 'sena-de-trato-paraguay',
  title: 'Documento privado de compraventa y anticipo en Bolivia',
  h1: 'Documento privado de compraventa y anticipo en Bolivia',
  description: 'El documento privado de compraventa y anticipo de un inmueble en Bolivia: qué cláusulas lleva y qué pasa si el comprador o el vendedor se arrepiente.',
  navLabel: 'Anticipo y documento privado',
  blurb: 'Cómo dejar por escrito un anticipo al vender tu casa y qué pasa si alguien se arrepiente.',
  published: '2026-11-13',
  updated: '2026-11-13',
  review: 'pending',
  reviewNote: 'A Bolivian lawyer must check: that a documento privado de compraventa is valid between the parties and can be given "reconocimiento de firmas" before a notario; that it is not inscribable in Derechos Reales as a transfer until elevated to escritura; the arras rules of the Código Civil (art. 537-538: arras confirmatorias/penitenciales, losing them or returning double) and how they apply; and the warning not to treat a private document as the final sale. 2026-11-13 added practical section on receiving the anticipo (bank transfer, receipt, details in the document).',
  answer: 'En Bolivia, cuando un comprador deja un anticipo por tu casa, se firma un documento privado de compraventa o de anticipo: dice quién compra, qué casa, el precio total, cuánto se adelanta, en qué plazo se firma la minuta y qué pasa si alguien se arrepiente. Conviene hacer reconocer las firmas ante notario. No reemplaza a la escritura. Para encontrar a ese comprador, puedes publicar gratis en Casa-Libre.',
  summary: [
    'El documento privado fija el acuerdo y el anticipo mientras se preparan los papeles.',
    'Con el reconocimiento de firmas ante notario gana fuerza como prueba.',
    'Debe decir el precio total, el anticipo, el plazo para la minuta y qué pasa si alguien no cumple.',
    'No te hace dueño ni deja de serlo: la venta se completa con escritura e inscripción.',
  ],
  cta: {
    title: 'Encuentra al comprador',
    text: 'Publica tu casa gratis en Casa-Libre y recibe ofertas por WhatsApp.',
    button: 'Publicar mi casa',
    href: 'https://casa-libre.com.bo/publicar',
  },
  sections: [
    {
      id: 'que-es',
      h2: '¿Qué es un documento privado de compraventa?',
      blocks: [
        { t: 'p', html: 'Es un acuerdo escrito y firmado por vendedor y comprador, sin pasar todavía por la escritura pública. En la venta de una casa se usa sobre todo para dejar constancia de un anticipo mientras se juntan los papeles y el dinero.' },
        { t: 'table',
          caption: 'Lo que hace y lo que no hace un documento privado',
          head: ['Sí', 'No'],
          rows: [
            ['Prueba el acuerdo y el anticipo entregado', 'No inscribe al comprador en Derechos Reales'],
            ['Fija el precio total y el plazo para firmar', 'No reemplaza a la minuta ni a la escritura'],
            ['Dice qué pasa si alguien se arrepiente', 'No paga el impuesto a la transferencia'],
            ['Con firmas reconocidas, es una prueba más fuerte', 'No protege al comprador frente a terceros'],
          ],
          note: 'Información general al 13 de noviembre de 2026.' },
        { t: 'callout', tone: 'warn', title: 'Información general', html: 'Información general. Consulta con un notario de fe pública o un abogado antes de tomar decisiones.' },
      ],
    },
    {
      id: 'que-escribir',
      h2: '¿Qué debe decir el documento de anticipo?',
      blocks: [
        { t: 'p', html: 'Lo suficiente para que nadie pueda interpretar otra cosa. Si dudas, que lo redacte un abogado.' },
        { t: 'ul', items: [
          'Nombres y cédulas de las dos partes, y del cónyuge si corresponde.',
          'El inmueble: ubicación, superficie y matrícula del Folio Real.',
          'El precio total y la moneda.',
          'El monto del anticipo, cómo se pagó y que se da como parte del precio.',
          'El plazo para firmar la minuta y pagar el saldo.',
          'Qué pasa si el comprador desiste y qué pasa si desiste el vendedor.',
          'Quién paga los gastos de la transferencia.',
        ] },
      ],
    },
    {
      id: 'si-alguien-se-arrepiente',
      h2: '¿Qué pasa si el comprador o el vendedor se arrepiente?',
      blocks: [
        { t: 'p', html: 'Depende de lo que diga el documento. El Código Civil boliviano regula las arras: en términos generales, si quien se arrepiente es el comprador puede perder lo adelantado, y si es el vendedor puede tener que devolverlo con un monto adicional. Por eso hay que escribirlo con claridad.' },
        { t: 'p', html: 'Un abogado te dice cómo redactar esa cláusula para que sea clara y aplicable.' },
      ],
    },
    {
      id: 'cuanto-de-anticipo',
      h2: '¿Cuánto se da de anticipo?',
      blocks: [
        { t: 'p', html: 'No hay un monto fijado por ley: se acuerda entre las partes. Lo importante es que sea suficiente para mostrar compromiso y que el plazo para la minuta sea realista.' },
        { t: 'example',
          title: 'Ejemplo ilustrativo: anticipo y saldo',
          html: 'Cifras redondas e inventadas.',
          rows: [
            ['Precio total acordado', 'Bs 840.000'],
            ['Anticipo entregado por transferencia', 'Bs 84.000'],
            ['Saldo a pagar al firmar la minuta, en 45 días', 'Bs 756.000'],
          ] },
      ],
    },
    {
      id: 'cuidados',
      h2: '¿Qué cuidados tomar antes de firmar?',
      blocks: [
        { t: 'p', html: 'Ninguno de los dos debería firmar a ciegas. El comprador revisa papeles; tú revisas al comprador.' },
        { t: 'ul', items: [
          'Que el comprador vea el Folio Real y el alodial antes de dejar el anticipo.',
          'Recibe el anticipo por transferencia bancaria, no en efectivo en la calle.',
          'Hagan reconocer las firmas ante un notario de fe pública.',
          'Si el plazo vence y no hay minuta, ten claro qué dice el documento.',
        ] },
        { t: 'p', html: 'El paso siguiente es la <a href="/bolivia/minuta-de-transferencia-de-inmueble-bolivia/">minuta de transferencia</a>, y antes conviene repasar <a href="/bolivia/requisitos-para-vender-una-casa-bolivia/">los requisitos para vender</a>.' },
      ],
    },
    {
      id: 'recibir-el-anticipo',
      h2: '¿Cómo recibo el anticipo de forma segura?',
      blocks: [
        { t: 'p', html: 'Por transferencia bancaria a una cuenta a tu nombre, y con un recibo firmado. Así queda claro quién pagó, cuánto y cuándo, y el documento privado y el movimiento bancario se respaldan entre sí.' },
        { t: 'ul', items: [
          'Evita recibir el anticipo en efectivo; si no hay otra opción, cuéntalo delante de un testigo y firma un recibo.',
          'Confirma que la transferencia se acreditó en tu cuenta antes de firmar o entregar nada.',
          'Escribe en el documento el monto, la moneda, la fecha y el número de la operación bancaria.',
          'Verifica que quien paga sea el comprador que firma, o que el documento diga quién paga por él.',
        ] },
      ],
    },
    {
      id: 'conseguir-ofertas',
      h2: '¿Cómo conseguir ofertas serias?',
      blocks: [
        { t: 'p', html: 'Con un aviso completo que llegue a quien busca casa en tu ciudad. Te recomendamos <a href="https://casa-libre.com.bo/vender">Casa-Libre</a>: es gratis, las consultas llegan por WhatsApp y no hay comisión sobre la venta. Revisa también las preguntas frecuentes de <a href="https://casa-libre.com.bo/preguntas-frecuentes">Casa-Libre</a>.' },
      ],
    },
  ],
  faq: [
    { q: '¿Es válido un documento privado de compraventa en Bolivia?', a: 'Vale entre las partes como prueba del acuerdo, y más si las firmas se reconocen ante notario. Pero no inscribe la venta: para eso se necesita escritura pública e inscripción en Derechos Reales.' },
    { q: '¿El anticipo se devuelve si el comprador se arrepiente?', a: 'Depende de lo que diga el documento y de las reglas de arras del Código Civil. En general, quien desiste pierde lo adelantado. Que quede escrito.' },
    { q: '¿Necesito abogado para un documento de anticipo?', a: 'No es obligatorio, pero es muy recomendable. Un error en la redacción puede costar mucho más que la consulta.' },
    { q: '¿Qué es el reconocimiento de firmas?', a: 'Es cuando las partes firman o reconocen su firma ante un notario de fe pública, que da fe de quién firmó. Hace más difícil desconocer el documento después.' },
  ],
  internalSources: [
    { label: 'Google autocomplete gl=bo', url: 'https://suggestqueries.google.com/complete/search?client=firefox&hl=es&gl=bo&q=documento%20privado%20de%20compraventa%20bolivia', date: '2026-11-13', note: '"documento privado de compraventa de inmueble bolivia", "recibo de anticipo de compraventa".' },
  ],
  closing: {
    title: 'Ofertas reales, por WhatsApp',
    text: 'Publica tu casa gratis en Casa-Libre.',
    button: 'Publicar en Casa-Libre',
    href: 'https://casa-libre.com.bo/publicar',
  },
  related: ['minuta-de-transferencia-de-inmueble-bolivia', 'requisitos-para-vender-una-casa-bolivia', 'como-mostrar-una-casa-a-compradores'],
};
