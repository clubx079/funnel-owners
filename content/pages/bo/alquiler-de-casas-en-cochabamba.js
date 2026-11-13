import { cityMarket, snapshotDateEs } from '../../../lib/market.js';

// Counts only from content/data/bo-market.json. Cochabamba has no rent median in the snapshot: no price table here.
const m = cityMarket('bo', 'cochabamba');
const d = snapshotDateEs('bo');

export default {
  slug: 'alquiler-de-casas-en-cochabamba',
  group: 'Alquiler por ciudad',
  order: 3,
  city: 'cochabamba',
  cityName: 'Cochabamba',
  title: 'Alquiler de casas en Cochabamba: guía para propietarios',
  h1: 'Alquiler de casas y departamentos en Cochabamba',
  description: 'Cómo alquilar tu casa o departamento en Cochabamba: quién alquila, el agua como primera pregunta, alquiler o anticrético, municipios vecinos y dónde publicar gratis.',
  navLabel: 'Alquiler en Cochabamba',
  blurb: 'Quién alquila en Cochabamba, la pregunta del agua, alquiler o anticrético y dónde publicar gratis.',
  published: '2026-11-13',
  updated: '2026-11-13',
  review: 'pending',
  reviewNote: 'Local section to verify: tenant profiles (students near universities, families in zona norte and the conurbation, people moving from other departments); water supply as first question; anticrético common (autocomplete "anticretico cochabamba por dueños sin intermediarios"); conurbation municipalities Quillacollo, Tiquipaya, Sacaba, Colcapirhua. No /alquiler/departamentos/cochabamba path verified: uses filtered search. No prices stated: bo-market.json (2026-11-13) has only 3 rental listings in Cochabamba and no rent median, so the page stays qualitative and only quotes that count. Student-sharing and amoblado advice is general practice, check it reads right for Cochabamba.',
  answer: 'Para alquilar tu casa o departamento en Cochabamba, describe la zona y aclara lo que todos preguntan primero: cómo llega el agua y si hay tanque o cisterna. Compara con alquileres parecidos, decide entre renta mensual y anticrético, y firma un contrato escrito con garantía e inventario. Si está en Quillacollo, Tiquipaya o Sacaba, dilo. Puedes publicar tu alquiler gratis en Casa-Libre.',
  summary: [
    'La primera pregunta del inquilino cochabambino suele ser el agua.',
    'El anticrético es habitual y muchos lo buscan directo con el propietario.',
    'Familias en zona norte y en el área metropolitana; estudiantes cerca de las universidades.',
    'Patio y jardín suman, por el clima templado del valle.',
  ],
  cta: {
    title: 'Publica tu alquiler en Cochabamba',
    text: 'Gratis en Casa-Libre. Los interesados te escriben directo por WhatsApp.',
    button: 'Publicar mi alquiler',
    href: 'https://casa-libre.com.bo/publicar',
  },
  sections: [
    {
      id: 'agua-y-servicios',
      h2: '¿Qué pregunta primero un inquilino en Cochabamba?',
      blocks: [
        { t: 'p', html: 'Por el agua. Ponlo en el aviso con claridad y te ahorras visitas de gente a la que no le sirve.' },
        { t: 'table',
          caption: 'Datos de servicios para el aviso de alquiler',
          head: ['Dato', 'Qué decir'],
          rows: [
            ['Agua', 'Red, tanque elevado, cisterna o pozo; con qué regularidad llega'],
            ['Quién paga el agua', 'Si está incluida o va por cuenta del inquilino, incluida la cisterna'],
            ['Gas', 'Domiciliario o garrafa'],
            ['Internet', 'Si hay cobertura de fibra en la zona'],
            ['Parqueo', 'Techado o descubierto'],
          ],
          note: 'Guía general. A revisar con conocedores locales, noviembre de 2026.' },
      ],
    },
    {
      id: 'quien-alquila-en-cochabamba',
      h2: '¿Quién alquila en Cochabamba?',
      blocks: [
        { t: 'p', html: 'Estudiantes, familias y quienes llegan de otros departamentos por trabajo. Cada uno busca algo distinto.' },
        { t: 'ul', items: [
          '<strong>Estudiantes:</strong> cuartos o departamentos pequeños cerca de las universidades, con internet.',
          '<strong>Familias:</strong> casas con patio en la zona norte o en Tiquipaya, Quillacollo y Sacaba.',
          '<strong>Profesionales:</strong> departamentos cerca de la Av. América, Recoleta y el centro.',
        ] },
      ],
    },
    {
      id: 'cuanto-pedir-cochabamba',
      h2: '¿Cuánto pedir de alquiler en Cochabamba?',
      blocks: [
        { t: 'p', html: 'Lo que se pide por inmuebles parecidos en tu zona. Compara con las casas en alquiler en Cochabamba en <a href="https://casa-libre.com.bo/alquiler/casas/cochabamba">Casa-Libre</a> y con los departamentos en alquiler filtrados por Cochabamba en <a href="https://casa-libre.com.bo/propiedades?op=alquiler&amp;type=depto&amp;q=Cochabamba">Casa-Libre</a>.' },
        { t: 'p', html: 'El método con ejemplo: <a href="/bolivia/cuanto-cobrar-de-alquiler-bolivia/">cuánto cobrar de alquiler</a>.' },
      ],
    },
    {
      id: 'datos-de-alquiler-cochabamba',
      h2: '¿Hay un precio de referencia del alquiler en Cochabamba?',
      blocks: [
        { t: 'p', html: `Todavía no con datos de Casa-Libre: al ${d} había solo ${m.for_rent.total} avisos de alquiler publicados en Cochabamba, muy pocos para calcular una mediana. Preferimos no dar un número que no se sostiene.` },
        { t: 'p', html: 'Mientras tanto, arma tu propia referencia. Junta cinco o seis alquileres parecidos al tuyo en tu zona (por tamaño, dormitorios y si tienen patio o parqueo), anota cuánto piden y cuánto tiempo llevan publicados. Si un aviso lleva semanas sin alquilarse, probablemente pide de más. Pregunta también a vecinos y al administrador del edificio o condominio: suelen saber lo que se cobra de verdad.' },
        { t: 'p', html: 'Al publicar pronto tienes una ventaja: con poca oferta en línea, un aviso completo, con fotos y la explicación del agua, se destaca más fácil.' },
      ],
    },
    {
      id: 'alquilar-a-estudiantes',
      h2: '¿Conviene alquilar a estudiantes en Cochabamba?',
      blocks: [
        { t: 'p', html: 'Puede convenir si tu inmueble está cerca de las universidades, porque la demanda se renueva cada año. Tiene sus reglas propias, y conviene dejarlas por escrito desde el principio.' },
        { t: 'ul', items: [
          'Quién firma el contrato: un solo responsable o todos los que viven ahí.',
          'Un garante, que muchas veces es el padre o la madre del estudiante.',
          'Cuántas personas pueden vivir y si se permiten visitas que se queden.',
          'Cómo se reparten el internet, la luz y el agua.',
          'Qué pasa en las vacaciones: si siguen pagando o si el contrato termina.',
        ] },
      ],
    },
    {
      id: 'amoblado-cochabamba',
      h2: '¿Alquilo amoblado o sin muebles?',
      blocks: [
        { t: 'p', html: 'Depende de a quién apuntas. Las familias que se quedan años suelen llegar con sus muebles y prefieren la casa vacía. Los estudiantes y quienes llegan de otro departamento por un trabajo temporal buscan algo listo para entrar.' },
        { t: 'p', html: 'Si amoblas, haz un inventario con fotos de cada mueble y artefacto, y ajusta la garantía al valor de lo que dejas. Lo explicamos en <a href="/bolivia/como-alquilar-mi-casa-bolivia/">cómo alquilar mi casa</a>.' },
      ],
    },
    {
      id: 'anticretico-en-cochabamba',
      h2: '¿Alquiler o anticrético en Cochabamba?',
      blocks: [
        { t: 'p', html: 'El anticrético es habitual en Cochabamba, y muchos inquilinos lo buscan directo con el propietario, sin intermediarios. Recibes una suma al inicio y la devuelves completa al final.' },
        { t: 'p', html: 'Antes de decidir, lee <a href="/bolivia/anticretico-bolivia/">anticrético en Bolivia</a> y el <a href="/bolivia/contrato-de-alquiler-bolivia/">contrato de alquiler</a>.' },
        { t: 'callout', tone: 'warn', title: 'Información general', html: 'Información general. Consulta con un notario de fe pública, un abogado o un contador antes de tomar decisiones.' },
      ],
    },
    {
      id: 'municipios-vecinos',
      h2: '¿Mi casa está en Cochabamba o en Quillacollo, Tiquipaya o Sacaba?',
      blocks: [
        { t: 'p', html: 'Para el inquilino es una sola ciudad, pero para los impuestos y los trámites son municipios distintos. En el aviso pon el municipio y la zona: así te encuentra quien busca en ese lugar.' },
      ],
    },
    {
      id: 'publicar-alquiler-cochabamba',
      h2: '¿Dónde publico mi alquiler en Cochabamba?',
      blocks: [
        { t: 'p', html: 'Te recomendamos publicarlo en Casa-Libre: es gratis, el aviso aparece al buscar alquileres en Cochabamba y en el mapa, y los interesados te escriben directo por WhatsApp, sin comisión. Si prefieres delegar, existe el servicio de administración de propiedades de <a href="https://casa-libre.com.bo/administracion-de-propiedades">Casa-Libre</a>.' },
      ],
    },
  ],
  faq: [
    { q: '¿Cómo alquilar mi casa en Cochabamba?', a: 'Compara con alquileres de tu zona, explica cómo llega el agua, firma un contrato escrito con garantía e inventario y publica con fotos del patio y los ambientes.' },
    { q: '¿Anticrético en Cochabamba por dueños sin intermediarios: dónde publicar?', a: 'En Casa-Libre puedes publicar tu casa gratis y aclarar en la descripción que la ofreces en anticrético. Los interesados te escriben directo.' },
    { q: '¿Incluyo el agua en el alquiler?', a: 'Puedes hacerlo o no, pero escríbelo en el aviso y en el contrato, incluido quién paga la cisterna si hace falta.' },
    { q: '¿Cuánto se cobra de alquiler en Cochabamba?', a: `No damos una cifra: al ${d} había muy pocos alquileres publicados en Casa-Libre en Cochabamba para calcularla. Compara con cinco o seis inmuebles parecidos de tu zona y fíjate cuánto tiempo llevan publicados.` },
    { q: '¿Qué buscan los estudiantes en Cochabamba?', a: 'Cercanía a la universidad, buen internet y un precio accesible; a veces alquilan en grupo.' },
  ],
  internalSources: [
    { label: 'Google autocomplete gl=bo', url: 'https://suggestqueries.google.com/complete/search?client=firefox&hl=es&gl=bo&q=anticretico', date: '2026-11-13', note: '"anticretico cochabamba", "anticretico cochabamba por dueños sin intermediarios", "alquiler de casas en cochabamba bolivia".' },
  ],
  closing: {
    title: 'Tu alquiler en Cochabamba, publicado',
    text: 'Publica gratis en Casa-Libre y recibe consultas por WhatsApp.',
    button: 'Publicar mi alquiler',
    href: 'https://casa-libre.com.bo/publicar',
  },
  related: ['vender-casa-en-cochabamba', 'anticretico-bolivia', 'como-alquilar-mi-casa-bolivia'],
};
