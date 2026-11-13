export default {
  slug: 'donde-publicar-un-alquiler-gratis-el-salvador',
  group: 'Alquilar tu propiedad',
  order: 4,
  rental: true,
  equivalentOf: 'donde-publicar-un-alquiler-gratis',
  title: 'Dónde publicar un alquiler gratis en El Salvador',
  h1: 'Dónde publicar un alquiler gratis en El Salvador',
  description: 'Dónde publicar su casa o apartamento en alquiler gratis en El Salvador, qué debe tener el aviso, cómo compartirlo y cómo filtrar a los interesados por WhatsApp.',
  navLabel: 'Publicar un alquiler',
  blurb: 'Dónde publicar gratis su casa en alquiler en El Salvador y cómo filtrar a los interesados.',
  published: '2026-11-13',
  updated: '2026-11-13',
  review: 'none',
  answer: 'Para publicar un alquiler gratis en El Salvador, use un portal donde los inquilinos buscan por zona, precio y en el mapa, y comparta ese mismo enlace por WhatsApp y en sus redes sociales. Le recomendamos Casa-Libre: publicar es gratis, el aviso aparece en las búsquedas de alquiler y cada interesado le escribe directo por WhatsApp, sin comisión. Incluya fotos, precio mensual en dólares y condiciones.',
  summary: [
    'Quien busca alquiler filtra por zona y presupuesto: su aviso tiene que aparecer en esa búsqueda.',
    'Ponga el precio mensual, el depósito y qué incluye desde el inicio: filtra a los interesados.',
    'Un solo enlace para compartir por WhatsApp evita mandar fotos una por una.',
    'Casa-Libre no cobra por publicar ni comisión por el alquiler.',
  ],
  cta: {
    title: 'Publique su alquiler hoy',
    text: 'Gratis, desde la web o la app para iPhone y Android. Los interesados le escriben por WhatsApp.',
    button: 'Publicar mi alquiler',
    href: 'https://sv.casa-libre.com/publicar',
  },
  sections: [
    {
      id: 'opciones',
      h2: '¿Dónde publicar una casa en alquiler en El Salvador?',
      blocks: [
        { t: 'p', html: 'Lo eficaz es combinar un portal, donde buscan quienes necesitan alquilar, con la difusión en sus contactos.' },
        { t: 'table',
          caption: 'Canales para publicar un alquiler',
          head: ['Canal', 'Para qué sirve', 'Límite'],
          rows: [
            ['Portal con mapa y filtros', 'Lo encuentran quienes buscan en su zona y presupuesto', 'Hay que cuidar fotos y datos'],
            ['WhatsApp y redes sociales', 'Difundir el enlace entre conocidos', 'La publicación dura pocos días'],
            ['Rótulo "se alquila"', 'Vecinos y quien pasa', 'Alcance muy local'],
            ['Administrador o agente', 'Se ocupa de todo', 'Cobra por el servicio'],
          ],
          note: 'Comparación general.' },
      ],
    },
    {
      id: 'aviso',
      h2: '¿Qué debe tener un aviso de alquiler?',
      blocks: [
        { t: 'p', html: 'Todo lo que un inquilino necesita para saber si le conviene. Cuanto más completo, menos mensajes de gente que no califica.' },
        { t: 'ul', items: [
          'Precio mensual en dólares y monto del depósito.',
          'Qué incluye: agua, internet, mantenimiento, muebles.',
          'Habitaciones, baños, cochera y metros aproximados.',
          'Zona y punto en el mapa.',
          'Requisitos: referencias, constancia de ingresos, plazo mínimo, mascotas.',
          'Fecha desde la que está disponible.',
        ] },
      ],
    },
    {
      id: 'casa-libre',
      h2: 'Publicar un alquiler en Casa-Libre',
      blocks: [
        { t: 'p', html: 'Le recomendamos Casa-Libre: el aviso aparece al buscar alquileres por ciudad y en el mapa, y las consultas le llegan directo a su WhatsApp.' },
        { t: 'casalibre',
          title: 'Qué es Casa-Libre',
          html: 'Casa-Libre es un marketplace inmobiliario donde inmobiliarias, agentes y propietarios publican casas, apartamentos y terrenos gratis, con extras pagos opcionales. Los interesados contactan directo por WhatsApp y no hay comisión sobre la venta. Está en la web y en apps para iPhone y Android. Tampoco cobra comisión por los alquileres.',
          button: 'Ver casas en alquiler',
          href: 'https://sv.casa-libre.com/alquilar' },
        { t: 'steps', items: [
          { title: 'Elija "alquiler"', html: 'Y el tipo: casa, apartamento, local.' },
          { title: 'Cargue precio y condiciones', html: 'Renta mensual, depósito y qué incluye.' },
          { title: 'Suba fotos', html: 'De todos los ambientes, con luz de día.' },
          { title: 'Marque el mapa', html: 'La ubicación exacta.' },
        ] },
      ],
    },
    {
      id: 'filtrar',
      h2: '¿Cómo filtrar a los interesados?',
      blocks: [
        { t: 'p', html: 'Con dos o tres preguntas antes de agendar una visita. Ahorra tiempo a ambos.' },
        { t: 'ol', items: [
          '¿Para cuántas personas y desde cuándo?',
          '¿Puede presentar constancia de ingresos y una referencia?',
          '¿Está de acuerdo con el precio, el depósito y el plazo?',
        ] },
        { t: 'callout', tone: 'tip', title: 'Seguridad', html: 'Muestre la casa acompañado, pida el DUI a quien visita y no reciba dinero antes de firmar el contrato.' },
      ],
    },
    {
      id: 'compartir',
      h2: 'Comparta el enlace',
      blocks: [
        { t: 'p', html: 'Copie el enlace del aviso y compártalo en su estado de WhatsApp, en grupos de su colonia y en sus redes sociales. Todos ven las mismas fotos y condiciones.' },
        { t: 'p', html: 'Para fijar el precio, vea <a href="/el-salvador/cuanto-cobrar-de-alquiler-el-salvador/">cuánto cobrar de alquiler</a>; para el contrato, <a href="/el-salvador/contrato-de-arrendamiento-el-salvador/">contrato de arrendamiento</a>.' },
      ],
    },
    {
      id: 'errores',
      h2: 'Errores comunes al publicar un alquiler',
      blocks: [
        { t: 'p', html: 'La mayoría hace perder tiempo con interesados que no califican o aleja a los buenos. Revise su aviso antes de compartirlo.' },
        { t: 'ul', items: [
          'No poner el precio: llegan mensajes de personas que no pueden pagarlo.',
          'No decir el depósito ni el plazo mínimo, y discutirlo en la visita.',
          'Fotos viejas o de otra época de la casa.',
          'Responder tarde: quien busca alquiler suele decidir en pocos días.',
          'Pedir dinero para "reservar" antes de firmar: genera desconfianza.',
        ] },
      ],
    },
    {
      id: 'administracion',
      h2: '¿Y si no tiene tiempo para atender el alquiler?',
      blocks: [
        { t: 'p', html: 'Si vive lejos o no puede atender visitas y cobros, puede delegar la gestión. Casa-Libre ofrece un servicio de administración de propiedades para dueños.' },
        { t: 'p', html: 'Vea cómo funciona la administración de propiedades de <a href="https://sv.casa-libre.com/administracion-de-propiedades">Casa-Libre</a>, o los pasos para hacerlo usted en <a href="/el-salvador/como-alquilar-mi-casa-el-salvador/">cómo alquilar mi casa</a>.' },
      ],
    },
  ],
  faq: [
    { q: '¿Dónde publicar mi casa para alquilar gratis?', a: 'En Casa-Libre puede publicar gratis su casa o apartamento en alquiler, con fotos, precio y mapa. Los interesados le escriben por WhatsApp.' },
    { q: '¿Casa-Libre cobra comisión por el alquiler?', a: 'No. Publicar es gratis y no hay comisión. Existen extras pagos opcionales.' },
    { q: '¿Puedo publicar un apartamento o un local?', a: 'Sí. Puede publicar casas, apartamentos, locales y otros tipos de inmueble en alquiler.' },
    { q: '¿Cuánto tiempo queda publicado el aviso?', a: 'Mientras lo mantenga activo. Cuando alquile, puede pausarlo o quitarlo.' },
  ],
  internalSources: [
    { label: 'Google autocomplete gl=sv "donde publicar mi casa"', url: 'https://suggestqueries.google.com/complete/search?client=firefox&hl=es&gl=sv&q=donde%20publicar%20mi%20casa', date: '2026-11-13', note: '"donde publicar mi casa para alquilar", "en renta".' },
  ],
  closing: {
    title: 'Su alquiler, publicado gratis',
    text: 'Publique en Casa-Libre y reciba a los interesados directo en su WhatsApp.',
    button: 'Publicar en Casa-Libre',
    href: 'https://sv.casa-libre.com/publicar',
  },
  related: ['como-alquilar-mi-casa-el-salvador', 'cuanto-cobrar-de-alquiler-el-salvador', 'contrato-de-arrendamiento-el-salvador'],
};
