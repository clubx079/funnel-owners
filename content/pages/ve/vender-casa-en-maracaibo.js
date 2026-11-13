export default {
  slug: 'vender-casa-en-maracaibo',
  group: 'Vender por ciudad',
  city: 'maracaibo',
  cityName: 'Maracaibo',
  order: 3,
  title: 'Vendo casa en Maracaibo: cómo venderla y publicarla gratis',
  h1: 'Vender una casa en Maracaibo',
  description: 'Cómo vender tu casa en Maracaibo: aires, planta eléctrica y agua como argumentos, zonas, Maracaibo o San Francisco, papeles y cómo publicarla gratis.',
  navLabel: 'Vender en Maracaibo',
  blurb: 'Vender una casa en Maracaibo: qué pesa en el precio, zonas, papeles y cómo publicar gratis.',
  published: '2026-11-13',
  updated: '2026-11-13',
  review: 'pending',
  reviewNote: 'Local facts to verify before indexing: that Maracaibo is the capital of Zulia on the western shore of the Lago de Maracaibo, linked to the eastern shore by the Puente General Rafael Urdaneta; that the municipio San Francisco to the south has its own alcaldía; zone examples (Bella Vista, 5 de Julio, Tierra Negra, La Lago, El Milagro, Las Delicias, Circunvalación 2) and La Universidad del Zulia; that the hot climate makes air conditioning and a planta eléctrica strong selling points and that the electricity supply has had interruptions in Zulia. No prices are stated.',
  answer: 'Para vender una casa en Maracaibo, ten los papeles al día con la alcaldía que corresponda (Maracaibo o San Francisco, según la zona), fija el precio en dólares comparando con casas de tu sector y destaca lo que más pesa en el Zulia: aire acondicionado, planta eléctrica, agua y estacionamiento. Publica con fotos de día y la ubicación en el mapa. Puedes hacerlo gratis en Casa-Libre.',
  summary: [
    'En Maracaibo el calor manda: aire acondicionado y planta eléctrica suman mucho valor.',
    'Confirma si tu casa está en el municipio Maracaibo o en San Francisco: cambian alcaldía y trámites.',
    'Los sectores del norte y cercanos al lago son referencias que los compradores reconocen.',
    'Precio en dólares, comparado con casas del mismo sector y tamaño.',
  ],
  cta: {
    title: 'Publica tu casa de Maracaibo gratis',
    text: 'Fotos, precio y ubicación desde la web o la app. Los interesados te escriben directo por WhatsApp.',
    button: 'Publicar mi casa',
    href: 'https://casa-libre.com.ve/publicar',
  },
  sections: [
    {
      id: 'que-pesa',
      h2: '¿Qué valoran los compradores en Maracaibo?',
      blocks: [
        { t: 'p', html: 'Lo que hace vivible el calor marabino: buena ventilación, aire acondicionado y energía de respaldo. Una casa que resuelve eso compite mejor que otra más grande que no lo resuelve.' },
        { t: 'table',
          caption: 'Lo que más preguntan en Maracaibo',
          head: ['Tema', 'Qué decir en el aviso'],
          rows: [
            ['Aire acondicionado', 'En qué ambientes, tipo y estado'],
            ['Planta eléctrica', 'Si cubre toda la casa o solo parte'],
            ['Agua', 'Tanque, bomba, frecuencia del servicio'],
            ['Estacionamiento', 'Garaje techado, cuántos carros'],
            ['Seguridad', 'Rejas, portón eléctrico, calle cerrada o vigilancia'],
          ],
          note: 'Orientación general al 13 de noviembre de 2026.' },
        { t: 'callout', tone: 'warn', title: 'Antes de decidir', html: 'Información general. Consulta con un abogado o un notario antes de tomar decisiones.' },
      ],
    },
    {
      id: 'zonas',
      h2: '¿En qué zona de Maracaibo está tu casa?',
      blocks: [
        { t: 'p', html: 'Nombra el sector en el aviso: en Maracaibo la gente busca por referencias conocidas. Algunas zonas que los compradores identifican son Bella Vista, 5 de Julio, Tierra Negra, La Lago, El Milagro, Las Delicias y la Circunvalación 2.' },
        { t: 'ul', items: [
          'Cerca del lago y del norte: zonas residenciales consolidadas, con casas y edificios.',
          'Cerca de la Universidad del Zulia: interés de docentes y familias de estudiantes.',
          'Al sur, el municipio San Francisco tiene su propia alcaldía: pide allí la solvencia si tu casa está ahí.',
        ] },
      ],
    },
    {
      id: 'precio',
      h2: '¿Cuánto pedir por tu casa en Maracaibo?',
      blocks: [
        { t: 'p', html: 'Lo que piden casas parecidas de tu sector, ajustado por los equipos. Aires y planta en buen estado justifican un precio más alto; equipos dañados, uno más bajo.' },
        { t: 'example',
          title: 'Ejemplo ilustrativo: ajustar por equipos',
          html: 'Casas parecidas del sector piden USD 45.000 (supuesto). La tuya tiene aire en todas las habitaciones y planta para toda la casa: sumas un 10%. 45.000 × 1,10 = USD 49.500.' },
        { t: 'p', html: 'Compara con propiedades de la ciudad en <a href="https://casa-libre.com.ve/propiedades-en/maracaibo">Casa-Libre</a> o con casas filtradas en <a href="https://casa-libre.com.ve/propiedades?op=venta&amp;type=casa&amp;q=Maracaibo">Casa-Libre</a>.' },
      ],
    },
    {
      id: 'economica',
      h2: '¿Quieres vender rápido o "económica"?',
      blocks: [
        { t: 'p', html: 'Mucha gente busca "casa en Maracaibo económica". Si necesitas vender pronto, ubica tu precio en la parte baja del rango de tu sector y dilo en el título, sin regalar la casa.' },
        { t: 'p', html: 'El plan completo está en <a href="/venezuela/vendo-casa-urgente/">vendo casa urgente</a>.' },
      ],
    },
    {
      id: 'papeles',
      h2: 'Papeles para vender en Maracaibo',
      blocks: [
        { t: 'p', html: 'Los de todo el país: documento registrado, gravámenes, cédula catastral, solvencia municipal y anticipo de ISLR. Lo local es a qué alcaldía y a qué Registro vas.' },
        { t: 'p', html: 'Ver <a href="/venezuela/requisitos-para-vender-una-casa-venezuela/">requisitos para vender una casa</a>.' },
      ],
    },
    {
      id: 'publicar',
      h2: 'Publica tu casa en Maracaibo',
      blocks: [
        { t: 'p', html: 'Toma las fotos a media mañana, con los aires y las luces encendidas, y nombra el sector en el título. Publica gratis en <a href="https://casa-libre.com.ve/vender">Casa-Libre</a>.' },
      ],
    },
  ],
  faq: [
    { q: '¿Dónde saco la solvencia municipal en Maracaibo?', a: 'En la alcaldía de Maracaibo, o en la de San Francisco si la casa está en ese municipio.' },
    { q: '¿Conviene dejar los aires acondicionados en la venta?', a: 'En Maracaibo suele ayudar a vender. Si los dejas, inclúyelos en el inventario y en el precio.' },
    { q: '¿Cómo vender una casa económica en Maracaibo?', a: 'Precio en la parte baja del rango del sector, papeles listos y respuesta rápida por WhatsApp.' },
    { q: '¿Dónde publico mi casa de Maracaibo gratis?', a: 'En Casa-Libre, con contacto directo por WhatsApp y sin comisión sobre la venta.' },
  ],
  internalSources: [
    { label: 'Google autocomplete gl=ve', url: 'https://suggestqueries.google.com/complete/search?client=firefox&hl=es&gl=ve&q=vendo%20casa%20en%20maracaibo', date: '2026-11-13', note: 'vendo casa en maracaibo economica; vendo casa en maracaibo; solvencia municipal maracaibo; alquiler de casas en maracaibo.' },
  ],
  closing: {
    title: 'Vende en Maracaibo sin comisión',
    text: 'Publica tu casa gratis en Casa-Libre y recibe las consultas por WhatsApp.',
    button: 'Publicar en Casa-Libre',
    href: 'https://casa-libre.com.ve/publicar',
  },
  related: ['alquiler-de-casas-en-maracaibo', 'vendo-casa-urgente', 'requisitos-para-vender-una-casa-venezuela'],
};
