export default {
  slug: 'como-vender-un-apartamento-venezuela',
  group: 'Vender una propiedad',
  order: 5,
  equivalentOf: 'como-vender-un-departamento-paraguay',
  title: 'Cómo vender un apartamento en Venezuela: requisitos',
  h1: 'Cómo vender un apartamento en Venezuela',
  description: 'Cómo vender un apartamento en Venezuela: solvencia y documento de condominio, puestos y maletero, servicios del edificio, precio y cómo publicarlo gratis.',
  navLabel: 'Vender un apartamento',
  blurb: 'Lo que cambia al vender un apartamento en Venezuela: condominio, puestos, servicios del edificio y papeles.',
  published: '2026-11-13',
  updated: '2026-11-13',
  review: 'pending',
  reviewNote: 'A Venezuelan lawyer must check: that apartments are sold under the Ley de Propiedad Horizontal with a documento de condominio registered for the building; that the sale document identifies the unit, its porcentaje de condominio and assigned puestos de estacionamiento and maletero; that the buyer asks for the solvencia de condominio issued by the junta or administradora; and that the rest of the documents match a house sale.',
  answer: 'Para vender un apartamento en Venezuela necesitas los mismos papeles que para una casa (documento registrado, gravámenes, catastro, solvencia municipal) más la solvencia de condominio. El documento debe identificar la unidad, su porcentaje de condominio y los puestos de estacionamiento y el maletero asignados. Los compradores preguntan mucho por agua, ascensor, planta eléctrica y vigilancia del edificio. Puedes publicarlo gratis en Casa-Libre.',
  summary: [
    'La solvencia de condominio es el papel extra que siempre te van a pedir.',
    'Revisa en el documento qué puestos de estacionamiento y maletero son tuyos.',
    'Los servicios del edificio (agua, ascensor, planta, vigilancia) pesan tanto como el apartamento.',
    'Compara con apartamentos del mismo edificio o la misma zona antes de fijar el precio.',
  ],
  cta: {
    title: 'Publica tu apartamento gratis',
    text: 'Sube fotos del apartamento y del edificio. Los interesados te escriben directo por WhatsApp.',
    button: 'Publicar mi apartamento',
    href: 'https://casa-libre.com.ve/publicar',
  },
  sections: [
    {
      id: 'que-cambia',
      h2: '¿Qué cambia al vender un apartamento y no una casa?',
      blocks: [
        { t: 'p', html: 'El edificio entra en la venta: sus reglas, sus deudas y sus servicios. El comprador compra tu apartamento y también una parte del condominio.' },
        { t: 'table',
          caption: 'Papeles y datos propios de un apartamento',
          head: ['Tema', 'Qué preparar'],
          rows: [
            ['Solvencia de condominio', 'Constancia de la junta o la administradora de que no debes cuotas'],
            ['Documento de condominio', 'El reglamento del edificio, registrado; el comprador puede pedirlo'],
            ['Porcentaje de condominio', 'Figura en tu documento y define tu cuota'],
            ['Puestos y maletero', 'Cuántos y cuáles son tuyos, según el documento'],
            ['Cuota mensual', 'Monto aproximado y qué incluye'],
          ],
          note: 'Información general al 13 de noviembre de 2026.' },
        { t: 'callout', tone: 'warn', title: 'Antes de decidir', html: 'Información general. Consulta con un abogado o un notario antes de tomar decisiones.' },
      ],
    },
    {
      id: 'servicios-del-edificio',
      h2: '¿Qué preguntan los compradores de apartamentos?',
      blocks: [
        { t: 'p', html: 'Sobre todo por los servicios del edificio, porque de ellos depende el día a día. Tenlo en el aviso.' },
        { t: 'ul', items: [
          'Agua: si llega continua, si hay tanque y bombas, si el edificio tiene pozo.',
          'Electricidad: si hay planta eléctrica y qué cubre (ascensor, bombas, áreas comunes).',
          'Ascensores funcionando, vigilancia, portón eléctrico.',
          'Cuota de condominio y si hay cuotas especiales aprobadas.',
        ] },
      ],
    },
    {
      id: 'precio',
      h2: '¿Cómo poner precio a un apartamento?',
      blocks: [
        { t: 'p', html: 'La mejor comparación es otro apartamento del mismo edificio o de uno vecino. Después ajusta por piso, vista, remodelación y puestos.' },
        { t: 'p', html: 'En Caracas puedes ver apartamentos en venta en <a href="https://casa-libre.com.ve/venta/departamentos/caracas">Casa-Libre</a>; en otras ciudades, usa el buscador con mapa. El cálculo por metro está en <a href="/venezuela/avaluo-de-inmuebles-venezuela/">avalúo de inmuebles</a>.' },
      ],
    },
    {
      id: 'pasos',
      h2: 'Pasos para vender tu apartamento',
      blocks: [
        { t: 'p', html: 'El orden es el de cualquier venta, sumando el condominio.' },
        { t: 'steps', items: [
          { title: 'Pide la solvencia de condominio', html: 'A la junta o a la administradora; ponte al día si debes cuotas.' },
          { title: 'Revisa el resto de papeles', html: 'Ver <a href="/venezuela/requisitos-para-vender-una-casa-venezuela/">requisitos para vender</a>.' },
          { title: 'Fotografía apartamento y edificio', html: 'Fachada, lobby, ascensor, áreas comunes y la vista.' },
          { title: 'Publica y coordina visitas', html: 'Avisa a vigilancia quién viene y a qué hora.' },
          { title: 'Opción de compra y Registro', html: 'Con un abogado, como en cualquier compraventa.' },
        ] },
      ],
    },
    {
      id: 'ejemplo',
      h2: 'Ejemplo: comparar con el mismo edificio',
      blocks: [
        { t: 'p', html: 'Un ejemplo con números supuestos muestra cómo ajustar.' },
        { t: 'example',
          title: 'Ejemplo ilustrativo: apartamento de 80 m² en el piso 6',
          html: 'Un apartamento igual del piso 2 pide USD 48.000 (supuesto). El tuyo tiene mejor vista y dos puestos en vez de uno: sumas USD 4.000 por el puesto (supuesto) y un 5% por piso y vista. (48.000 + 4.000) × 1,05 = USD 54.600.',
          rows: [['Comparable (supuesto)', 'USD 48.000'], ['Puesto extra (supuesto)', '+ USD 4.000'], ['Piso y vista (+5%)', 'USD 54.600']] },
      ],
    },
    {
      id: 'publicar',
      h2: 'Publica tu apartamento',
      blocks: [
        { t: 'p', html: 'En <a href="https://casa-libre.com.ve/vender">Casa-Libre</a> publicas gratis y los interesados te escriben directo por WhatsApp.' },
        { t: 'p', html: 'Si el apartamento es parte de una herencia, revisa antes <a href="/venezuela/vender-casa-heredada-venezuela/">vender una casa heredada</a>.' },
      ],
    },
  ],
  faq: [
    { q: '¿Qué documentos necesito para vender un apartamento en Venezuela?', a: 'Documento registrado, certificación de gravámenes, cédula catastral, solvencia municipal, solvencia de condominio, cédula y RIF.' },
    { q: '¿Quién da la solvencia de condominio?', a: 'La junta de condominio o la empresa administradora del edificio.' },
    { q: '¿Puedo vender el puesto de estacionamiento aparte?', a: 'Depende del documento de condominio y de cómo está registrado el puesto. Consúltalo con un abogado.' },
    { q: '¿Qué pasa si debo condominio?', a: 'Debes pagarlo antes de la firma o acordar con el comprador que se descuente del precio, por escrito.' },
  ],
  internalSources: [
    { label: 'Google autocomplete gl=ve', url: 'https://suggestqueries.google.com/complete/search?client=firefox&hl=es&gl=ve&q=vender%20un%20apartamento%20en%20venezuela', date: '2026-11-13', note: 'como vender un apartamento en venezuela; requisitos para vender un apartamento en venezuela; documentos para vender un apartamento en venezuela.' },
  ],
  closing: {
    title: 'Tu apartamento a la vista',
    text: 'Publica gratis en Casa-Libre y recibe las consultas por WhatsApp.',
    button: 'Publicar en Casa-Libre',
    href: 'https://casa-libre.com.ve/publicar',
  },
  related: ['requisitos-para-vender-una-casa-venezuela', 'vender-casa-en-caracas', 'fotos-para-vender-una-casa'],
};
