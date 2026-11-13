export default {
  slug: 'vender-casa-en-venezuela-desde-el-exterior',
  group: 'Papeles y trámites',
  order: 7,
  title: 'Vender una casa en Venezuela desde el exterior: poder',
  h1: 'Cómo vender una casa en Venezuela desde el exterior',
  description: 'Cómo vender tu casa en Venezuela si vives fuera: el poder para vender, consulado o apostilla, quién te representa, cómo cobrar y cómo publicarla.',
  navLabel: 'Vender desde afuera',
  blurb: 'El poder para vender, quién te representa y cómo publicar tu casa en Venezuela si vives en otro país.',
  published: '2026-11-13',
  updated: '2026-11-13',
  review: 'pending',
  reviewNote: 'A Venezuelan lawyer must check: that an owner abroad can sell through a poder especial otorgado before a Venezuelan consulate, or before a foreign notary with apostille (Hague Convention) and translation if needed; that the poder must describe the property and the faculty to sell and receive the price; that it may need to be registered or presented with the sale document; that the seller still needs RIF and the Forma 33 / vivienda principal procedure; spouse consent rules; and current consular service availability. No fees or times are stated.',
  answer: 'Si vives fuera de Venezuela puedes vender tu casa sin viajar, dando un poder especial a una persona de confianza en el país. El poder se firma en un consulado venezolano o ante un notario del país donde vives con la apostilla, y debe autorizar a vender y a recibir el precio. Tu apoderado firma la opción y el documento en el Registro. La casa puedes publicarla gratis en Casa-Libre desde tu celular.',
  summary: [
    'El poder especial para vender es la herramienta clave: dilo con detalle y con los datos del inmueble.',
    'Se otorga en un consulado de Venezuela o ante un notario extranjero con apostilla.',
    'Elige un apoderado de confianza y define por escrito cómo recibirás el dinero.',
    'Publicar y atender a los interesados lo puedes hacer tú mismo por WhatsApp, desde donde estés.',
  ],
  cta: {
    title: 'Publica tu casa desde donde estés',
    text: 'Con la app de Casa-Libre para iPhone o Android publicas gratis y recibes las consultas por WhatsApp.',
    button: 'Publicar mi casa gratis',
    href: 'https://casa-libre.com.ve/publicar',
  },
  sections: [
    {
      id: 'opciones',
      h2: '¿Cómo vender si no estoy en Venezuela?',
      blocks: [
        { t: 'p', html: 'Tienes dos caminos: viajar para firmar o dar un poder. La mayoría elige el poder, porque evita coordinar fechas de notaría y Registro con un viaje.' },
        { t: 'table',
          caption: 'Formas de otorgar el poder desde el exterior',
          head: ['Vía', 'Cómo es', 'Qué tener en cuenta'],
          rows: [
            ['Consulado de Venezuela', 'El poder se firma ante el funcionario consular', 'Pide cita con tiempo y lleva los datos del inmueble'],
            ['Notario del país donde vives', 'El poder se firma ante un notario local', 'Necesita apostilla y, si no está en español, traducción'],
            ['Viajar a firmar', 'Firmas tú la opción y el documento', 'Coordina el viaje con las fechas del Registro'],
          ],
          note: 'Información general al 13 de noviembre de 2026. Confirma la vía aceptada con el abogado que llevará la venta.' },
        { t: 'callout', tone: 'warn', title: 'Antes de decidir', html: 'Información general. Consulta con un abogado o un notario antes de tomar decisiones.' },
      ],
    },
    {
      id: 'que-dice-el-poder',
      h2: '¿Qué debe decir el poder para vender un inmueble?',
      blocks: [
        { t: 'p', html: 'Debe ser un poder especial, no uno genérico. Pide al abogado en Venezuela que redacte el texto y llévalo así al consulado o al notario.' },
        { t: 'ul', items: [
          'Tus datos y los del apoderado, con cédula.',
          'El inmueble: dirección, linderos y datos de registro del documento de propiedad.',
          'Facultades: firmar la opción de compra, el documento definitivo, recibir el precio y hacer los trámites ante el SENIAT y la alcaldía.',
          'Si estás casado y el inmueble es de la comunidad conyugal, el cónyuge también otorga poder o firma.',
        ] },
      ],
    },
    {
      id: 'cobrar',
      h2: '¿Cómo recibo el dinero de la venta?',
      blocks: [
        { t: 'p', html: 'Lo que acuerdes con el comprador y tu apoderado, por escrito. Lo más seguro es que el pago quede descrito en la opción y en el documento, y que llegue a una cuenta a tu nombre.' },
        { t: 'p', html: 'Si el poder permite recibir el precio, tu apoderado podrá firmar que lo recibió: elige a alguien de plena confianza.' },
      ],
    },
    {
      id: 'tramites',
      h2: '¿Qué trámites siguen siendo míos?',
      blocks: [
        { t: 'p', html: 'Los papeles de la casa y los fiscales. Tu apoderado puede gestionarlos, pero necesitas tener tu RIF activo y tus datos de acceso fiscal.' },
        { t: 'ul', items: [
          'Solvencias, cédula catastral y certificación de gravámenes: ver <a href="/venezuela/requisitos-para-vender-una-casa-venezuela/">requisitos para vender</a>.',
          'Forma 33 o constancia de vivienda principal: ver <a href="/venezuela/anticipo-de-islr-venta-de-inmueble/">anticipo de ISLR</a>.',
          'Si la casa es una herencia, la sucesión va primero: ver <a href="/venezuela/vender-casa-heredada-venezuela/">vender una casa heredada</a>.',
        ] },
      ],
    },
    {
      id: 'mostrar-la-casa',
      h2: '¿Quién muestra la casa?',
      blocks: [
        { t: 'p', html: 'Un familiar o tu apoderado. Tú puedes filtrar a los interesados por WhatsApp y pasar solo a los serios para la visita.' },
        { t: 'steps', items: [
          { title: 'Fotos actualizadas', html: 'Pide que alguien tome fotos con luz de día de cada ambiente.' },
          { title: 'Publica tú', html: 'Desde la app, con tu número de WhatsApp como contacto.' },
          { title: 'Filtra', html: 'Pregunta forma de pago y plazos antes de coordinar visitas.' },
          { title: 'Visita acompañada', html: 'Que quien muestra la casa no esté solo y pida identificación.' },
        ] },
      ],
    },
    {
      id: 'publicar',
      h2: 'Publica tu casa desde el exterior',
      blocks: [
        { t: 'p', html: 'Desde la app de Casa-Libre puedes publicar gratis y responder por WhatsApp aunque estés en otro país.' },
        { t: 'casalibre',
          title: 'Casa-Libre en tu teléfono',
          html: 'Casa-Libre es un marketplace inmobiliario donde inmobiliarias, agentes y propietarios publican casas, apartamentos y terrenos gratis, con extras pagos opcionales. Los interesados contactan directo por WhatsApp y no hay comisión sobre la venta. Está en la web y en apps para iPhone y Android.',
          button: 'Descargar la app',
          href: 'https://casa-libre.com.ve/descargar' },
        { t: 'p', html: 'Para comparar precios en tu zona, usa el mapa de <a href="https://casa-libre.com.ve/propiedades">Casa-Libre</a>.' },
      ],
    },
  ],
  faq: [
    { q: '¿Puedo vender mi casa en Venezuela si vivo en España?', a: 'Sí, con un poder especial otorgado en el consulado de Venezuela o ante un notario español con apostilla, a favor de alguien en Venezuela.' },
    { q: '¿Qué es un poder para vender un inmueble?', a: 'Un documento con el que autorizas a otra persona a firmar la venta en tu nombre. Para vender, debe ser especial y describir el inmueble.' },
    { q: '¿El poder debe registrarse?', a: 'Depende del caso y del Registro; a menudo se presenta junto con el documento de venta. Tu abogado te lo confirma.' },
    { q: '¿Puedo dar poder a un familiar para vender una casa de una sucesión?', a: 'Sí, cada heredero que esté afuera puede dar su propio poder. Primero debe estar hecha la declaración sucesoral.' },
  ],
  internalSources: [
    { label: 'Google autocomplete gl=ve', url: 'https://suggestqueries.google.com/complete/search?client=firefox&hl=es&gl=ve&q=vender%20casa%20en%20venezuela', date: '2026-11-13', note: 'poder para vender casa en venezuela; como vender una casa en venezuela desde españa; poder para vender un inmueble en venezuela; poder para vender inmueble de una sucesión en venezuela.' },
  ],
  closing: {
    title: 'Vende sin viajar',
    text: 'Publica tu casa gratis en Casa-Libre y atiende a los interesados por WhatsApp desde cualquier país.',
    button: 'Publicar en Casa-Libre',
    href: 'https://casa-libre.com.ve/publicar',
  },
  related: ['', 'requisitos-para-vender-una-casa-venezuela', 'vender-casa-heredada-venezuela'],
};
