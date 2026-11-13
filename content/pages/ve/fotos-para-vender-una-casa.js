export default {
  slug: 'fotos-para-vender-una-casa',
  group: 'Vender una propiedad',
  order: 7,
  equivalentOf: 'fotos-para-vender-una-casa',
  title: 'Cómo tomar fotos para vender una casa con el celular',
  h1: 'Cómo tomar fotos para vender una casa con el celular',
  description: 'Cómo tomar fotos de tu casa en venta con el celular: lista de tomas por ambiente, luz, qué ocultar, cuántas subir y cómo mostrar tanque y planta.',
  navLabel: 'Fotos para vender',
  blurb: 'La lista de fotos por ambiente y los trucos de luz para que tu casa se vea bien en el aviso.',
  published: '2026-11-13',
  updated: '2026-11-13',
  review: 'none',
  answer: 'Para vender una casa, toma entre 12 y 20 fotos con el celular en horizontal, de día, con cortinas abiertas y luces encendidas. Ordena y despeja cada ambiente, fotografía desde una esquina a la altura del pecho y empieza el aviso con la mejor foto. En Venezuela suma valor mostrar el tanque, la planta eléctrica y el estacionamiento. Puedes subirlas desde la app de Casa-Libre.',
  summary: [
    'Entre 12 y 20 fotos, horizontales y de día.',
    'Desde una esquina, a la altura del pecho, sin zoom.',
    'Muestra lo que pregunta todo comprador: tanque, planta, estacionamiento, áreas comunes.',
    'La primera foto decide el clic: fachada o sala con buena luz.',
  ],
  cta: {
    title: 'Sube tus fotos desde el teléfono',
    text: 'Publica gratis en Casa-Libre con la app para iPhone o Android.',
    button: 'Publicar mi casa',
    href: 'https://casa-libre.com.ve/publicar',
  },
  sections: [
    {
      id: 'lista-de-fotos',
      h2: '¿Qué fotos tomar para vender una casa?',
      blocks: [
        { t: 'p', html: 'Al menos una foto buena de cada ambiente y de lo que diferencia a tu casa. Usa esta lista.' },
        { t: 'table',
          caption: 'Lista de fotos para una casa en venta',
          head: ['Ambiente', 'Cuántas', 'Consejo'],
          rows: [
            ['Fachada', '1 o 2', 'De día, con el portón abierto y el frente despejado'],
            ['Sala y comedor', '2 o 3', 'Desde la esquina opuesta a la ventana'],
            ['Cocina', '1 o 2', 'Topes despejados'],
            ['Habitaciones', '1 por habitación', 'Cama tendida, nada en el suelo'],
            ['Baños', '1 por baño', 'Tapa abajo, toallas limpias'],
            ['Patio, terraza o balcón', '1 o 2', 'Con la vista si la hay'],
            ['Servicios', '1 o 2', 'Tanque, bomba, planta eléctrica, calentador'],
            ['Estacionamiento y entorno', '1 o 2', 'Puestos, calle, áreas comunes'],
          ],
          note: 'Orientación general.' },
      ],
    },
    {
      id: 'luz',
      h2: '¿Cuál es la mejor hora para tomar las fotos?',
      blocks: [
        { t: 'p', html: 'A media mañana o media tarde, con luz natural. Evita el mediodía en exteriores, porque las sombras quedan duras.' },
        { t: 'ul', items: [
          'Abre cortinas y enciende todas las luces.',
          'No uses flash: aplana el ambiente.',
          'Si un cuarto es oscuro, fotografía con la ventana a tu espalda.',
          'Elige un día con electricidad estable para que se vean las luces encendidas.',
        ] },
      ],
    },
    {
      id: 'como-encuadrar',
      h2: '¿Cómo encuadrar las fotos con el celular?',
      blocks: [
        { t: 'p', html: 'Siempre en horizontal, desde una esquina y a la altura del pecho. Así el ambiente se ve más amplio y real.' },
        { t: 'steps', items: [
          { title: 'Limpia el lente', html: 'Un lente sucio deja las fotos lechosas.' },
          { title: 'Activa la cuadrícula', html: 'Mantén las líneas verticales rectas.' },
          { title: 'No uses zoom', html: 'Mejor acércate o usa el gran angular sin exagerar.' },
          { title: 'Toma varias', html: 'Elige después la mejor de cada ambiente.' },
        ] },
      ],
    },
    {
      id: 'que-ocultar',
      h2: '¿Qué ocultar antes de fotografiar?',
      blocks: [
        { t: 'p', html: 'Todo lo personal y lo que distrae. El comprador tiene que imaginarse viviendo ahí.' },
        { t: 'ul', items: [
          'Fotos familiares, documentos, ropa, mascotas y sus cosas.',
          'Cables, botellones y cosas sobre la nevera.',
          'Carros en el garaje si tapan la fachada.',
          'No ocultes defectos importantes: aparecen en la visita y restan confianza.',
        ] },
      ],
    },
    {
      id: 'orden',
      h2: '¿En qué orden subir las fotos?',
      blocks: [
        { t: 'p', html: 'Como un recorrido: fachada, sala, cocina, habitaciones, baños, exteriores y servicios. La primera foto es la que aparece en la búsqueda.' },
        { t: 'p', html: 'Si es un apartamento, suma fotos del edificio y las áreas comunes; ver <a href="/venezuela/como-vender-un-apartamento-venezuela/">vender un apartamento</a>. Y para el texto, <a href="/venezuela/anuncio-para-vender-una-casa/">anuncio para vender una casa</a>.' },
      ],
    },
    {
      id: 'subir',
      h2: 'Sube las fotos y publica',
      blocks: [
        { t: 'p', html: 'Con la app de <a href="https://casa-libre.com.ve/descargar">Casa-Libre</a> subes las fotos directo del celular.' },
        { t: 'p', html: 'Mira avisos de otras casas en <a href="https://casa-libre.com.ve/comprar">Casa-Libre</a> para ver qué fotos llaman más la atención.' },
      ],
    },
  ],
  faq: [
    { q: '¿Cuántas fotos poner en un aviso de casa?', a: 'Entre 12 y 20. Menos parece que escondes algo; más cansa.' },
    { q: '¿Las fotos van en vertical u horizontal?', a: 'En horizontal: se ven mejor en la web y en la app.' },
    { q: '¿Tengo que contratar a un fotógrafo?', a: 'No. Con un celular reciente, buena luz y orden alcanza.' },
    { q: '¿Conviene mostrar la planta eléctrica y el tanque?', a: 'Sí. En Venezuela son de lo primero que pregunta un comprador.' },
  ],
  internalSources: [
    { label: 'Editorial page, no legal facts', url: 'https://suggestqueries.google.com/complete/search?client=firefox&hl=es&gl=ve&q=publicar%20casa%20en%20venta', date: '2026-11-13', note: 'General photo advice localised to Venezuelan buyer questions (tanque, planta eléctrica).' },
  ],
  closing: {
    title: 'Fotos listas, aviso listo',
    text: 'Publica tu casa gratis en Casa-Libre y recibe las consultas por WhatsApp.',
    button: 'Publicar en Casa-Libre',
    href: 'https://casa-libre.com.ve/publicar',
  },
  related: ['anuncio-para-vender-una-casa', 'como-poner-mi-casa-en-venta-por-internet', 'por-que-no-se-vende-mi-casa'],
};
