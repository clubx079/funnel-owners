export default {
  slug: 'documento-de-compra-venta-de-casa-venezuela',
  group: 'Papeles y trámites',
  order: 4,
  equivalentOf: 'contrato-de-compraventa-inmueble-paraguay',
  title: 'Documento de compra venta de casa en Venezuela: modelo',
  h1: 'Documento de compra venta de una casa en Venezuela',
  description: 'Qué contiene el documento de compra venta de una casa en Venezuela, un esquema orientativo de cláusulas, quién lo redacta y cómo se protocoliza.',
  navLabel: 'Documento de venta',
  blurb: 'Las cláusulas del documento de compra venta de una casa en Venezuela y cómo se protocoliza.',
  published: '2026-11-13',
  updated: '2026-11-13',
  review: 'pending',
  reviewNote: 'A Venezuelan lawyer must check: that the final document is protocolised at the Registro Público inmobiliario where the property is located; that it must be drafted or visado by a lawyer with Inpreabogado number; the usual clauses (tradición legal, linderos, saneamiento de ley, declaración de no gravámenes); that the price may be stated in foreign currency with its bolívar equivalent; that the spouse signs for community property; and that the Registro asks for solvencias, cédula catastral and Forma 33 or vivienda principal proof. The model outline is general guidance only.',
  answer: 'El documento de compra venta de una casa en Venezuela es el contrato definitivo que transfiere la propiedad. Lo redacta o visa un abogado y se firma ante el Registro Público inmobiliario de la zona, que lo protocoliza. Debe identificar a las partes y al inmueble, decir el precio y cómo se pagó, y de dónde viene la propiedad del vendedor. Para encontrar comprador, publica gratis en Casa-Libre.',
  summary: [
    'Es distinto de la opción de compra: este documento transfiere la propiedad.',
    'Se protocoliza en el Registro Público de la zona donde está la casa.',
    'Debe llevar el visado de un abogado; un modelo de internet sirve solo como guía.',
    'Contiene la tradición legal: cómo llegó la casa a manos del vendedor.',
  ],
  cta: {
    title: '¿Todavía buscas comprador?',
    text: 'Publica tu casa gratis en Casa-Libre. Los interesados te escriben directo por WhatsApp, sin comisión sobre la venta.',
    button: 'Publicar mi casa gratis',
    href: 'https://casa-libre.com.ve/publicar',
  },
  sections: [
    {
      id: 'que-es',
      h2: '¿Qué es el documento de compra venta?',
      blocks: [
        { t: 'p', html: 'Es el contrato con el que el vendedor transfiere la casa y el comprador paga el precio. Una vez protocolizado en el Registro, el comprador queda como nuevo propietario frente a todos.' },
        { t: 'table',
          caption: 'Partes de un documento de compra venta',
          head: ['Parte', 'Qué dice'],
          rows: [
            ['Comparecencia', 'Nombres, cédulas, estado civil y domicilio de vendedor y comprador'],
            ['Objeto', 'La casa: dirección, linderos, medidas y cédula catastral'],
            ['Tradición legal', 'El documento por el que el vendedor adquirió, con sus datos de registro'],
            ['Precio', 'Monto, moneda y forma en que se pagó'],
            ['Declaraciones', 'Que no hay gravámenes y que el vendedor responde por saneamiento'],
            ['Aceptación', 'El comprador acepta la venta en los términos dichos'],
          ],
          note: 'Esquema orientativo, al 13 de noviembre de 2026. La redacción final la hace un abogado.' },
        { t: 'callout', tone: 'warn', title: 'Antes de decidir', html: 'Información general. Consulta con un abogado o un notario antes de tomar decisiones.' },
      ],
    },
    {
      id: 'modelo',
      h2: 'Modelo orientativo de documento de compra venta',
      blocks: [
        { t: 'p', html: 'Este esquema sirve para entender el orden del documento y revisar el borrador del abogado. No lo uses tal cual.' },
        { t: 'ol', items: [
          'Yo, ________, venezolano, mayor de edad, titular de la cédula de identidad N.° ________, de estado civil ________, declaro:',
          'Que doy en venta pura y simple, perfecta e irrevocable a ________, cédula N.° ________, un inmueble constituido por ________, ubicado en ________.',
          'Linderos: Norte ________; Sur ________; Este ________; Oeste ________. Superficie: ________ m².',
          'El inmueble me pertenece según documento registrado ante ________, en fecha ________, bajo el N.° ________.',
          'El precio de esta venta es la cantidad de ________, que declaro recibir a mi entera satisfacción.',
          'El inmueble está libre de gravámenes y me obligo al saneamiento de ley.',
          'Y yo, ________, declaro que acepto la venta que se me hace en los términos expuestos.',
        ] },
      ],
    },
    {
      id: 'precio-en-dolares',
      h2: '¿Se puede poner el precio en dólares?',
      blocks: [
        { t: 'p', html: 'En la práctica, sí: es habitual pactar en dólares. Muchos documentos indican además el equivalente en bolívares al tipo de cambio oficial, que es la base para las tasas del Registro.' },
        { t: 'p', html: 'El precio del documento también es la base del anticipo de ISLR. Lo explicamos en <a href="/venezuela/anticipo-de-islr-venta-de-inmueble/">anticipo de ISLR por venta de inmueble</a>.' },
      ],
    },
    {
      id: 'como-se-protocoliza',
      h2: '¿Cómo se protocoliza en el Registro?',
      blocks: [
        { t: 'p', html: 'El abogado presenta el documento con los recaudos, el Registro lo revisa y fija la fecha de otorgamiento. Ese día firman las partes ante el registrador.' },
        { t: 'steps', items: [
          { title: 'Presentación', html: 'Documento visado, solvencias, cédula catastral y Forma 33 o constancia de vivienda principal.' },
          { title: 'Liquidación', html: 'El Registro calcula las tasas y se pagan en el banco. Ver <a href="/venezuela/cuanto-cuesta-registrar-una-casa-venezuela/">cuánto cuesta registrar</a>.' },
          { title: 'Otorgamiento', html: 'Firman vendedor, comprador y, si corresponde, el cónyuge del vendedor.' },
          { title: 'Entrega', html: 'Con el saldo pagado, se entregan llaves y solvencias al comprador.' },
        ] },
      ],
    },
    {
      id: 'opcion-antes',
      h2: '¿Hace falta una opción de compra antes?',
      blocks: [
        { t: 'p', html: 'No es obligatoria, pero es lo común cuando pasa tiempo entre el acuerdo y la firma. Si el comprador paga todo de una vez, a veces se va directo al documento definitivo.' },
        { t: 'p', html: 'Cómo se arma la opción está en <a href="/venezuela/opcion-de-compra-venta-venezuela/">opción de compra venta</a>.' },
      ],
    },
    {
      id: 'encontrar-comprador',
      h2: '¿Y si aún no tengo comprador?',
      blocks: [
        { t: 'p', html: 'El documento es el último paso. Primero publica tu casa con buenas fotos y precio claro.' },
        { t: 'p', html: 'Puedes hacerlo gratis en <a href="https://casa-libre.com.ve/vender">Casa-Libre</a>, y revisar los papeles necesarios en su guía de <a href="https://casa-libre.com.ve/guias/documentos-para-vender-un-inmueble">documentos para vender</a>.' },
      ],
    },
  ],
  faq: [
    { q: '¿Dónde se registra la compra venta de una casa?', a: 'En el Registro Público inmobiliario de la jurisdicción donde está la casa, no donde viven las partes.' },
    { q: '¿Puedo usar un modelo de documento de compra venta de internet?', a: 'Como guía, sí. Para protocolizar, el documento debe estar redactado o visado por un abogado, que lo ajusta a tu caso.' },
    { q: '¿Qué es la tradición legal?', a: 'Es la cadena de documentos que muestra cómo llegó la propiedad al vendedor. El comprador y su abogado la revisan.' },
    { q: '¿Quién se queda con el documento original?', a: 'El comprador recibe su ejemplar protocolizado; el Registro conserva el suyo en sus libros.' },
  ],
  internalSources: [
    { label: 'Google autocomplete gl=ve', url: 'https://suggestqueries.google.com/complete/search?client=firefox&hl=es&gl=ve&q=documento%20de%20compra%20venta', date: '2026-11-13', note: 'documento de compra venta de casa; documento de compra venta de casa en venezuela; documento de compra venta de terreno en venezuela.' },
  ],
  closing: {
    title: 'El primer paso es el aviso',
    text: 'Publica tu casa gratis en Casa-Libre y recibe las consultas por WhatsApp.',
    button: 'Publicar en Casa-Libre',
    href: 'https://casa-libre.com.ve/publicar',
  },
  related: ['opcion-de-compra-venta-venezuela', 'cuanto-cuesta-registrar-una-casa-venezuela', 'requisitos-para-vender-una-casa-venezuela'],
};
