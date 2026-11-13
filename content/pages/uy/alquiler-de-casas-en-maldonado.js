import { cityMarket, snapshotDateEs } from '../../../lib/market.js';

// Counts only from content/data/uy-market.json. Maldonado has no rent median in the snapshot: no price table here.
const m = cityMarket('uy', 'maldonado');
const d = snapshotDateEs('uy');

export default {
  slug: 'alquiler-de-casas-en-maldonado',
  group: 'Alquiler por ciudad',
  order: 2,
  city: 'maldonado',
  cityName: 'Maldonado',
  title: 'Alquiler de casas en Maldonado: anual o por temporada',
  h1: 'Alquiler de casas y apartamentos en Maldonado',
  description: 'Cómo alquilar tu casa en Maldonado: alquiler anual o por temporada, quién alquila, garantías, precio y cómo publicar el alquiler gratis en Casa-Libre.',
  navLabel: 'Alquiler en Maldonado',
  blurb: 'Anual o por temporada: cómo alquilar una casa o un apartamento en Maldonado y dónde publicar gratis.',
  published: '2026-11-13',
  updated: '2026-11-13',
  review: 'pending',
  reviewNote: 'Local facts to check: demand for alquiler anual from year-round residents (tourism, construction, services, public employees) and for temporada in summer; the trade-off of summer seasonal rental vs annual contract; that seasonal (temporary) leases follow different rules from long-term housing leases and may have different tax treatment; guarantees as in the national page. No rent figures stated: uy-market.json (2026-11-13) has only 4 rental listings in Maldonado and no rent median, so the page stays qualitative and only quotes that count. Winter-readiness advice (heating, humidity, ventilation) is general practice for a coastal city; check it reads right.',
  answer: 'Para alquilar tu casa en Maldonado primero decidí si la querés alquilar todo el año o por temporada: son públicos, precios y contratos distintos. El alquiler anual lo buscan quienes viven y trabajan en la zona; el de temporada, quienes vienen en verano. Compará con alquileres parecidos de tu zona, aclará garantías y fecha de ingreso, y publicá el aviso gratis en Casa-Libre.',
  summary: [
    'En Maldonado conviven el alquiler anual y el de temporada: elegí uno antes de publicar.',
    'El anual da ingreso todo el año; el de temporada concentra el ingreso en pocas semanas.',
    'El contrato de temporada no es igual al de vivienda permanente: consultá antes de firmar.',
    'Publicar en Casa-Libre es gratis y no cobra comisión sobre el alquiler.',
  ],
  cta: {
    title: 'Publicá tu alquiler en Maldonado',
    text: 'Anual o por temporada, cargás fotos, precio y condiciones en Casa-Libre. Te escriben por WhatsApp.',
    button: 'Publicar mi alquiler',
    href: 'https://uy.casa-libre.com/publicar',
  },
  sections: [
    {
      id: 'anual-o-temporada',
      h2: '¿Alquiler anual o por temporada en Maldonado?',
      blocks: [
        { t: 'p', html: 'Es la primera decisión. Muchos propietarios en Maldonado alternan entre los dos, pero conviene saber qué implica cada uno antes de publicar.' },
        { t: 'table',
          caption: 'Alquiler anual y de temporada en Maldonado',
          head: ['', 'Anual', 'Temporada'],
          rows: [
            ['Quién alquila', 'Quien vive y trabaja en la zona', 'Familias y grupos en vacaciones'],
            ['Cuándo', 'Todo el año', 'Sobre todo en verano'],
            ['Ingreso', 'Mensual y estable', 'Concentrado en pocas semanas'],
            ['Contrato', 'Contrato de vivienda con garantía o sin garantía', 'Contrato de temporada por días o quincenas'],
            ['Trabajo para vos', 'Poco, una vez firmado', 'Entregas, limpieza y llaves en cada estadía'],
          ],
          note: 'Orientación general.' },
        { t: 'callout', tone: 'warn', title: 'Antes de decidir', html: 'Información general. Consultá con un escribano o contador antes de tomar decisiones.' },
      ],
    },
    {
      id: 'quien-alquila-anual',
      h2: '¿Quién busca alquiler anual en Maldonado?',
      blocks: [
        { t: 'p', html: 'Familias y personas que trabajan en la zona todo el año: en el turismo, la construcción, los servicios, la salud o la enseñanza. Buscan casa para el día a día, no vista al mar.' },
        { t: 'ul', items: [
          'Destacá calefacción, aislación y que la casa no sea húmeda en invierno.',
          'Decí a cuántas cuadras están el ómnibus, las escuelas y el centro.',
          'Aceptar varias garantías ayuda: muchos inquilinos tienen la de Contaduría o un seguro.',
        ] },
        { t: 'p', html: 'Las garantías están explicadas en <a href="/uruguay/garantia-de-alquiler-uruguay/">garantía de alquiler en Uruguay</a>.' },
      ],
    },
    {
      id: 'precio-maldonado',
      h2: '¿Cuánto cobrar de alquiler en Maldonado?',
      blocks: [
        { t: 'p', html: 'Para el alquiler anual, lo que piden casas parecidas de tu zona, en pesos. Para la temporada, el precio es por período y cambia según la cercanía a la playa y las fechas.' },
        { t: 'p', html: `Todavía no damos una cifra para Maldonado: al ${d} había solo ${m.for_rent.total} avisos de alquiler publicados en Casa-Libre en la ciudad, muy pocos para calcular una mediana sin engañarte. Armá tu propia referencia con cinco o seis alquileres parecidos de tu zona, mismo tipo y mismos dormitorios, y fijate cuánto tiempo llevan publicados: si uno lleva semanas sin alquilarse, probablemente pide de más.` },
        { t: 'p', html: 'Compará con las casas en alquiler en Maldonado en <a href="https://uy.casa-libre.com/alquiler/casas/maldonado">Casa-Libre</a> y con los apartamentos en alquiler de la ciudad en <a href="https://uy.casa-libre.com/alquiler/departamentos/maldonado">Casa-Libre</a>. El método está en <a href="/uruguay/cuanto-cobrar-de-alquiler-uruguay/">cuánto cobrar de alquiler</a>.' },
      ],
    },
    {
      id: 'contrato-maldonado',
      h2: '¿Qué contrato uso?',
      blocks: [
        { t: 'p', html: 'Para el anual, un contrato de vivienda con garantía o el régimen sin garantía de la Ley 19.889. Para la temporada, un contrato por el período, con fechas, precio, depósito por daños y lo que incluye la casa.' },
        { t: 'p', html: 'El alquiler, anual o de temporada, puede pagar IRPF; preguntale a un contador. Las cláusulas están en <a href="/uruguay/contrato-de-alquiler-uruguay/">contrato de alquiler en Uruguay</a>.' },
      ],
    },
    {
      id: 'invierno-maldonado',
      h2: '¿Cómo preparo la casa para un alquiler anual?',
      blocks: [
        { t: 'p', html: 'Pensando en el invierno. Muchas casas de la zona se construyeron para el verano, y quien va a vivir todo el año pregunta cómo se calienta y si hay humedad. Una casa lista para el invierno se alquila más rápido y con menos rotación.' },
        { t: 'ul', items: [
          'Revisá la calefacción: estufa a leña, aire acondicionado frío/calor o calefactores, y si funcionan.',
          'Tratá la humedad y las manchas antes de sacar las fotos; si hay un problema, arreglalo o decilo.',
          'Verificá que puertas y ventanas cierren bien y no entre viento.',
          'Calefón o termotanque en buen estado: el agua caliente en invierno es lo primero que se prueba.',
        ] },
        { t: 'p', html: 'Si después querés volver a la temporada, recordá que un contrato anual te compromete por todo el plazo: decidilo antes de firmar. Los pasos generales están en <a href="/uruguay/como-alquilar-mi-casa-uruguay/">cómo alquilar mi casa en Uruguay</a>.' },
      ],
    },
    {
      id: 'aviso-maldonado',
      h2: '¿Qué pongo en el aviso de un alquiler en Maldonado?',
      blocks: [
        { t: 'p', html: 'Si es anual o de temporada, desde cuándo está disponible, precio, garantías y la zona en el mapa. Si es de temporada, también capacidad, ropa de cama y si tiene parrillero.' },
      ],
    },
    {
      id: 'publicar-alquiler-maldonado',
      h2: '¿Dónde publico mi alquiler en Maldonado?',
      blocks: [
        { t: 'p', html: 'Te recomendamos Casa-Libre: publicás gratis, el aviso aparece al buscar alquileres en Maldonado y en el mapa, y los interesados te escriben por WhatsApp.' },
        { t: 'casalibre',
          title: 'Por qué te recomendamos Casa-Libre',
          html: 'Casa-Libre es un marketplace inmobiliario donde inmobiliarias, agentes y propietarios publican casas, apartamentos y terrenos gratis, con extras pagos opcionales. Los interesados contactan directo por WhatsApp y no hay comisión sobre la venta. Está en la web y en apps para iPhone y Android. En un alquiler tampoco cobra comisión.',
          button: 'Leer la guía para alquilar',
          href: 'https://uy.casa-libre.com/guias/como-alquilar-mi-propiedad' },
      ],
    },
  ],
  faq: [
    { q: '¿Cuánto se cobra de alquiler en Maldonado?', a: `No damos una cifra: al ${d} había muy pocos alquileres publicados en Casa-Libre en Maldonado para calcularla. Compará con cinco o seis casas parecidas de tu zona y no uses precios de Punta del Este, que tiene otro público.` },
    { q: '¿Conviene alquilar anual o por temporada en Maldonado?', a: 'Depende de cuánto tiempo puedas dedicarle y de si usás la casa en verano. El anual da ingreso estable; la temporada concentra el ingreso y el trabajo en pocas semanas.' },
    { q: '¿Qué garantía pido para un alquiler anual en Maldonado?', a: 'Las mismas que en todo el país: depósito en el BHU, Contaduría, seguro, garante o el régimen sin garantía.' },
    { q: '¿Se puede alquilar por mes en Maldonado?', a: 'Sí, con un contrato que lo diga. Aclaralo en el aviso para recibir consultas de quien busca ese plazo.' },
    { q: '¿Dónde publico mi casa en alquiler en Maldonado?', a: 'Te recomendamos Casa-Libre: es gratis y los interesados te escriben directo por WhatsApp.' },
  ],
  internalSources: [
    { label: 'Google autocomplete Uruguay, "alquiler de casas en maldonado"', url: 'https://suggestqueries.google.com/complete/search?client=firefox&hl=es&gl=uy&q=alquiler%20de%20casas%20en%20maldonado', date: '2026-11-13', note: 'anual; mensual; uruguay; por dia; balnearios de maldonado.' },
    { label: 'lib/countries.js CL_CITY_PATHS uy', url: 'https://uy.casa-libre.com/alquiler/casas/maldonado', date: '2026-11-13', note: 'Verified: /alquiler/casas/maldonado, /alquiler/departamentos/maldonado.' },
  ],
  closing: {
    title: 'Tu alquiler en Maldonado, publicado hoy',
    text: 'Publicar en Casa-Libre es gratis. Te escriben directo por WhatsApp.',
    button: 'Publicar mi alquiler',
    href: 'https://uy.casa-libre.com/publicar',
  },
  related: ['vender-casa-en-maldonado', 'alquiler-de-casas-en-punta-del-este', 'garantia-de-alquiler-uruguay'],
};
