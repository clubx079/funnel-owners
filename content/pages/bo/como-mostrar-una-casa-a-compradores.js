export default {
  slug: 'como-mostrar-una-casa-a-compradores',
  group: 'Vender una propiedad',
  order: 9,
  equivalentOf: 'como-mostrar-una-casa-a-compradores',
  title: 'Cómo mostrar tu casa a compradores con seguridad',
  h1: 'Cómo mostrar tu casa a compradores con seguridad',
  description: 'Cómo preparar la casa, coordinar visitas por WhatsApp, cuidar tu seguridad y responder lo que preguntan los compradores en Bolivia. Y qué hacer después de la visita.',
  navLabel: 'Mostrar la casa',
  blurb: 'Visitas seguras: preparar la casa, coordinar por WhatsApp, qué preguntan los compradores y qué hacer después.',
  published: '2026-11-13',
  updated: '2026-11-13',
  review: 'none',
  answer: 'Para mostrar tu casa con seguridad, coordina cada visita por WhatsApp con día y hora, pide nombre completo antes, recibe acompañado y no entregues documentos ni llaves. Prepara la casa ventilada, ordenada y con luz, y ten a mano los datos que siempre preguntan: superficie, papeles, servicios y precio. Después, escribe al interesado el mismo día. Los contactos te pueden llegar desde Casa-Libre.',
  summary: [
    'Cada visita con día, hora y nombre completo confirmado por WhatsApp.',
    'Nunca solo: alguien de confianza en la casa o enterado de la visita.',
    'Los documentos se muestran cuando hay una oferta concreta, no en la primera visita.',
    'Ten anotados superficie, antigüedad, servicios y estado de los papeles.',
  ],
  cta: {
    title: 'Recibe interesados por WhatsApp',
    text: 'Publica gratis en Casa-Libre y coordina cada visita desde tu celular.',
    button: 'Publicar mi casa',
    href: 'https://casa-libre.com.bo/publicar',
  },
  sections: [
    {
      id: 'antes-de-la-visita',
      h2: '¿Cómo preparar la casa para una visita?',
      blocks: [
        { t: 'p', html: 'La casa tiene que verse cuidada y con espacio. No hace falta remodelar: alcanza con orden, limpieza y luz.' },
        { t: 'table',
          caption: 'Lista para antes de cada visita',
          head: ['Qué', 'Por qué'],
          rows: [
            ['Ventilar y abrir cortinas', 'La luz agranda los ambientes'],
            ['Despejar mesas y pisos', 'El comprador se imagina con sus cosas'],
            ['Guardar documentos y objetos de valor', 'Seguridad'],
            ['Baños y cocina limpios', 'Son los ambientes que más se miran'],
            ['Mascotas fuera de la casa', 'No todos se sienten cómodos'],
            ['Una hoja con los datos clave', 'Respondes sin dudar'],
          ],
          note: 'Lista general.' },
      ],
    },
    {
      id: 'coordinar-por-whatsapp',
      h2: '¿Cómo coordinar las visitas por WhatsApp?',
      blocks: [
        { t: 'p', html: 'Propón dos o tres horarios concretos y confirma el día anterior. Así filtras a quien no tiene interés real.' },
        { t: 'ul', items: [
          'Pide nombre completo y, si viene en grupo, cuántas personas.',
          'Agrupa visitas en una misma franja horaria si puedes.',
          'Confirma una hora antes por mensaje.',
        ] },
      ],
    },
    {
      id: 'seguridad',
      h2: '¿Cómo mostrar la casa con seguridad?',
      blocks: [
        { t: 'p', html: 'La regla es simple: nunca solo y nunca con documentos a la vista.' },
        { t: 'ul', items: [
          'Que haya alguien de confianza contigo o que sepa dónde estás y con quién.',
          'Pide ver la cédula de identidad del visitante al llegar.',
          'Acompaña todo el recorrido; no dejes a nadie solo en un ambiente.',
          'No entregues copias del testimonio ni del Folio Real en la visita.',
          'No recibas dinero en efectivo como reserva sin un documento firmado.',
        ] },
        { t: 'callout', tone: 'warn', title: 'Cuidado con los apurados', html: 'Si alguien quiere dejar un anticipo en efectivo el mismo día, sin ver papeles ni firmar nada, desconfía. Todo anticipo va con un documento firmado: mira <a href="/bolivia/documento-privado-de-compraventa-bolivia/">documento privado de compraventa y anticipo</a>.' },
      ],
    },
    {
      id: 'preguntas-de-compradores',
      h2: '¿Qué preguntan los compradores en la visita?',
      blocks: [
        { t: 'p', html: 'Casi siempre lo mismo. Si respondes con seguridad, transmites confianza.' },
        { t: 'ul', items: [
          '¿Los papeles están a su nombre en Derechos Reales?',
          '¿Cuánto se paga de impuesto a la propiedad al año?',
          '¿Hay problemas de humedad, agua o luz?',
          '¿Por qué vende?',
          '¿Cuál es el precio final?',
          '¿Cuándo se puede entregar?',
        ] },
        { t: 'p', html: 'Para tener los papeles claros, revisa <a href="/bolivia/requisitos-para-vender-una-casa-bolivia/">requisitos para vender una casa</a>.' },
      ],
    },
    {
      id: 'despues-de-la-visita',
      h2: '¿Qué hacer después de la visita?',
      blocks: [
        { t: 'p', html: 'Escribe el mismo día para agradecer y preguntar qué le pareció. Si hay interés, pasa a hablar de precio y forma de pago.' },
        { t: 'p', html: 'Si varias visitas ponen la misma objeción, como el precio o un arreglo pendiente, tómalo en serio y ajusta el aviso en <a href="https://casa-libre.com.bo/">Casa-Libre</a>.' },
      ],
    },
    {
      id: 'papeles-a-mano',
      h2: '¿Qué papeles tengo a mano durante la visita?',
      blocks: [
        { t: 'p', html: 'Copias, nunca originales, y solo lo que ayuda a decidir. El comprador interesado suele preguntar por los papeles en la segunda visita; tenerlos listos muestra que la venta puede cerrarse sin demoras.' },
        { t: 'ul', items: [
          'Copia del plano aprobado y del registro catastral, para mostrar superficies.',
          'Último comprobante del impuesto a la propiedad pagado.',
          'Facturas recientes de luz, agua y gas, para que vea el gasto real.',
          'En un condominio o edificio, el monto de las expensas y lo que cubren.',
          'El Folio Real solo para quien ya mostró una intención seria de comprar.',
        ] },
      ],
    },
    {
      id: 'oferta-en-la-visita',
      h2: '¿Qué hago si me hacen una oferta en plena visita?',
      blocks: [
        { t: 'p', html: 'Agradécela y pide que te la mande por escrito, por WhatsApp está bien, con el monto y la forma de pago. Así la comparas con calma y no decides bajo presión.' },
        { t: 'p', html: 'Pregunta si el comprador paga con fondos propios o con un crédito, y en cuánto tiempo. Una oferta un poco menor con pago seguro y rápido puede convenir más que una mayor que depende de un banco. Cuando aceptes, el siguiente paso es el <a href="/bolivia/documento-privado-de-compraventa-bolivia/">documento de anticipo</a>, no la entrega de llaves.' },
      ],
    },
    {
      id: 'recibir-mas-interesados',
      h2: '¿Cómo conseguir más visitas?',
      blocks: [
        { t: 'p', html: 'Más visitas llegan con mejores fotos, precio comparable y un aviso visible donde la gente busca.' },
        { t: 'p', html: 'Te recomendamos publicar en <a href="https://casa-libre.com.bo/vender">Casa-Libre</a>: gratis, con contacto directo por WhatsApp y sin comisión sobre la venta. Para mejorar las fotos, mira <a href="/bolivia/fotos-para-vender-una-casa/">fotos para vender una casa</a>.' },
      ],
    },
  ],
  faq: [
    { q: '¿Cómo mostrar una casa para vender?', a: 'Ordenada, con luz y ventilada, en una visita coordinada con día y hora. Recorre la casa en un orden lógico y ten los datos a mano.' },
    { q: '¿Debo mostrar los papeles en la visita?', a: 'Puedes decir que están en regla, pero las copias se entregan cuando hay una oferta concreta, normalmente al abogado o notario del comprador.' },
    { q: '¿Qué hago si alguien quiere dejar una seña?', a: 'Solo con un documento firmado que diga monto, precio total, plazo y qué pasa si alguien se arrepiente.' },
    { q: '¿Es mejor mostrar la casa con los muebles o vacía?', a: 'Con pocos muebles se ve mejor que vacía: ayuda a entender el tamaño de los ambientes.' },
    { q: '¿Le muestro el Folio Real al comprador en la primera visita?', a: 'Mejor no. Muestra copias del plano y del impuesto pagado, y deja el Folio Real para cuando el comprador ya hizo una oferta concreta y quiere revisar los papeles con su abogado o notario.' },
  ],
  internalSources: [],
  closing: {
    title: 'Más visitas, mejor venta',
    text: 'Publica gratis en Casa-Libre y coordina las visitas por WhatsApp.',
    button: 'Publicar en Casa-Libre',
    href: 'https://casa-libre.com.bo/publicar',
  },
  related: ['fotos-para-vender-una-casa', 'documento-privado-de-compraventa-bolivia', 'como-vender-mi-casa-sin-inmobiliaria'],
};
