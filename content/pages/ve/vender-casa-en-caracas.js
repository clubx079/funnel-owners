export default {
  slug: 'vender-casa-en-caracas',
  group: 'Vender por ciudad',
  city: 'caracas',
  cityName: 'Caracas',
  order: 1,
  title: 'Vendo casa en Caracas: cómo venderla y publicarla gratis',
  h1: 'Vender una casa o un apartamento en Caracas',
  description: 'Cómo vender tu casa o apartamento en Caracas: los cinco municipios y sus alcaldías, qué pesa en el precio, papeles y cómo publicarlo gratis.',
  navLabel: 'Vender en Caracas',
  blurb: 'Vender en Caracas: municipios, zonas, qué buscan los compradores y cómo publicar gratis.',
  published: '2026-11-13',
  updated: '2026-11-13',
  review: 'pending',
  reviewNote: 'Local facts to verify before indexing: that metropolitan Caracas spans the municipio Libertador (Distrito Capital) and the Miranda municipios Chacao, Baruta, Sucre and El Hatillo, each with its own alcaldía, catastro and impuesto inmobiliario urbano; the zone examples (Altamira, Los Palos Grandes, La Castellana, El Cafetal, Santa Fe, Prados del Este, La Trinidad, El Paraíso, Montalbán, La Candelaria, San Bernardino); that apartments dominate supply and quintas concentrate in Baruta, El Hatillo and parts of Sucre; that each area has its own Registro Público inmobiliario office. No prices are stated. Legal facts as in the national pages (0.5% ISLR anticipo, opción de compra at notaría).',
  answer: 'Para vender una casa o un apartamento en Caracas, empieza por saber en qué municipio está (Libertador, Chacao, Baruta, Sucre o El Hatillo), porque esa alcaldía da la cédula catastral y la solvencia y ese circuito tiene su Registro. Fija el precio en dólares comparando con inmuebles de tu misma urbanización y destaca agua, planta eléctrica y puestos. Puedes publicar gratis en Casa-Libre y recibir consultas por WhatsApp.',
  summary: [
    'Caracas son cinco municipios: cada alcaldía tiene su catastro, su impuesto y su solvencia.',
    'La urbanización marca el precio más que cualquier otro factor.',
    'La mayor parte de la oferta son apartamentos; las quintas se concentran en el sureste.',
    'Agua estable, planta eléctrica y puestos de estacionamiento son las primeras preguntas.',
  ],
  cta: {
    title: 'Publica tu inmueble de Caracas gratis',
    text: 'Fotos, precio y ubicación desde la web o la app. Los interesados te escriben directo por WhatsApp.',
    button: 'Publicar gratis',
    href: 'https://casa-libre.com.ve/publicar',
  },
  sections: [
    {
      id: 'municipios',
      h2: '¿En qué municipio de Caracas está tu inmueble?',
      blocks: [
        { t: 'p', html: 'Es la primera pregunta práctica: el municipio define a qué alcaldía pides la cédula catastral y la solvencia, y a qué oficina de Registro irá la venta.' },
        { t: 'table',
          caption: 'Los municipios de Caracas y algunas de sus zonas',
          head: ['Municipio', 'Entidad', 'Zonas de referencia'],
          rows: [
            ['Libertador', 'Distrito Capital', 'El Paraíso, Montalbán, La Candelaria, San Bernardino'],
            ['Chacao', 'Miranda', 'Altamira, Los Palos Grandes, La Castellana'],
            ['Baruta', 'Miranda', 'Santa Fe, Prados del Este, La Trinidad'],
            ['Sucre', 'Miranda', 'El Cafetal, Los Dos Caminos, La Urbina'],
            ['El Hatillo', 'Miranda', 'El Hatillo pueblo, La Lagunita'],
          ],
          note: 'Referencias generales, al 13 de noviembre de 2026. Confirma tu municipio en tu documento de propiedad.' },
        { t: 'callout', tone: 'warn', title: 'Antes de decidir', html: 'Información general. Consulta con un abogado o un notario antes de tomar decisiones.' },
      ],
    },
    {
      id: 'quien-compra',
      h2: '¿Qué buscan los compradores en Caracas?',
      blocks: [
        { t: 'p', html: 'En Caracas se compra sobre todo por la zona y por los servicios. Quien busca en el este valora caminar a comercios y al Metro; quien busca en el sureste, espacio, quintas y conjuntos con vigilancia.' },
        { t: 'ul', items: [
          'Agua: si el edificio o la casa tiene tanque, bombas o pozo.',
          'Electricidad: planta eléctrica para ascensores y bombas.',
          'Seguridad: vigilancia, garita, portón eléctrico.',
          'Movilidad: cercanía a una estación del Metro o a una vía principal.',
          'Puestos de estacionamiento y maletero.',
        ] },
      ],
    },
    {
      id: 'precio',
      h2: '¿Cómo ponerle precio a un inmueble en Caracas?',
      blocks: [
        { t: 'p', html: 'Compara con tu misma urbanización, no con el promedio de la ciudad: entre una zona del este y una del oeste la diferencia es grande. En edificios, la mejor referencia es otro apartamento del mismo edificio.' },
        { t: 'p', html: 'Revisa apartamentos en venta en Caracas en <a href="https://casa-libre.com.ve/venta/departamentos/caracas">Casa-Libre</a> y, para casas, filtra por ciudad en <a href="https://casa-libre.com.ve/propiedades?op=venta&amp;type=casa&amp;q=Caracas">Casa-Libre</a>. El método de cálculo por metro está en <a href="/venezuela/avaluo-de-inmuebles-venezuela/">avalúo de inmuebles</a>.' },
      ],
    },
    {
      id: 'casa-o-apartamento',
      h2: '¿Vendes casa o apartamento?',
      blocks: [
        { t: 'p', html: 'En Caracas la mayoría de lo que se vende son apartamentos, así que muchos compradores llegan con preguntas de condominio. Si vendes una quinta, destaca el terreno, la seguridad y el estacionamiento.' },
        { t: 'example',
          title: 'Ejemplo ilustrativo: comparar con el mismo edificio',
          html: 'Un apartamento igual al tuyo en tu edificio pide USD 60.000 (supuesto). El tuyo está remodelado y tiene un puesto más: sumas un 8%. 60.000 × 1,08 = USD 64.800 como precio de salida.' },
        { t: 'p', html: 'Lo propio del condominio está en <a href="/venezuela/como-vender-un-apartamento-venezuela/">cómo vender un apartamento</a>.' },
      ],
    },
    {
      id: 'papeles',
      h2: 'Papeles y trámites en Caracas',
      blocks: [
        { t: 'p', html: 'Los mismos de todo el país, pedidos a la alcaldía y al Registro que te toquen. La lista completa está en <a href="/venezuela/requisitos-para-vender-una-casa-venezuela/">requisitos para vender una casa</a>.' },
        { t: 'ul', items: [
          'Cédula catastral y solvencia municipal: en la alcaldía de tu municipio.',
          'Certificación de gravámenes: en el Registro Público inmobiliario que corresponde a tu zona.',
          'Opción de compra en notaría y anticipo de ISLR del 0,5% antes de protocolizar.',
        ] },
      ],
    },
    {
      id: 'publicar',
      h2: 'Publica tu inmueble en Caracas',
      blocks: [
        { t: 'p', html: 'Publica gratis, marca la urbanización en el mapa y menciona el municipio en la descripción: muchos compradores filtran por ahí.' },
        { t: 'p', html: 'Las propiedades de la ciudad están reunidas en <a href="https://casa-libre.com.ve/propiedades-en/caracas">Casa-Libre</a>.' },
      ],
    },
  ],
  faq: [
    { q: '¿Dónde saco la solvencia municipal en Caracas?', a: 'En la alcaldía del municipio donde está el inmueble: Libertador, Chacao, Baruta, Sucre o El Hatillo.' },
    { q: '¿Se vende más rápido un apartamento o una casa en Caracas?', a: 'No hay una cifra oficial. Depende de la zona, el precio y los servicios del inmueble.' },
    { q: '¿Qué urbanizaciones de Caracas buscan más los compradores?', a: 'Cada comprador busca según trabajo, colegio y presupuesto. Lo que todos preguntan es agua, luz, seguridad y estacionamiento.' },
    { q: '¿Puedo vender mi apartamento de Caracas desde el exterior?', a: 'Sí, con un poder especial. Ver <a href="/venezuela/vender-casa-en-venezuela-desde-el-exterior/">vender desde el exterior</a>.' },
  ],
  internalSources: [
    { label: 'Google autocomplete gl=ve', url: 'https://suggestqueries.google.com/complete/search?client=firefox&hl=es&gl=ve&q=vendo%20casa%20en%20caracas', date: '2026-11-13', note: 'vendo casa en caracas venezuela; venta casa caracas; solvencia municipal municipio libertador, chacao, baruta, sucre, el hatillo; cedula catastral caracas.' },
  ],
  closing: {
    title: 'Vende en Caracas sin comisión',
    text: 'Publica gratis en Casa-Libre y recibe las consultas por WhatsApp.',
    button: 'Publicar en Casa-Libre',
    href: 'https://casa-libre.com.ve/publicar',
  },
  related: ['como-vender-un-apartamento-venezuela', 'alquiler-de-casas-en-caracas', 'requisitos-para-vender-una-casa-venezuela'],
};
