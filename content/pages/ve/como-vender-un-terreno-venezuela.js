export default {
  slug: 'como-vender-un-terreno-venezuela',
  group: 'Vender una propiedad',
  order: 4,
  equivalentOf: 'como-vender-un-terreno-paraguay',
  title: 'Cómo vender un terreno en Venezuela: requisitos y pasos',
  h1: 'Cómo vender un terreno en Venezuela',
  description: 'Requisitos y pasos para vender un terreno en Venezuela: documento, plano y linderos, catastro, ejidos, cómo ponerle precio y dónde publicarlo gratis.',
  navLabel: 'Vender un terreno',
  blurb: 'Papeles, precio y pasos para vender un terreno o una parcela en Venezuela.',
  published: '2026-11-13',
  updated: '2026-11-13',
  review: 'pending',
  reviewNote: 'A Venezuelan lawyer must check: the land-specific documents (documento registrado, plano de mensura/levantamiento topográfico, cédula catastral, solvencia municipal, certificación de gravámenes), that buyers often ask for the zonificación / variables urbanas fundamentales from the municipality, that ejidos and rural/agrarian land (Ley de Tierras y Desarrollo Agrario, INTi) follow special rules, and that the ISLR anticipo of 0.5% applies to land sales by personas naturales.',
  answer: 'Para vender un terreno en Venezuela necesitas el documento de propiedad registrado, un plano con linderos y medidas que coincidan con el documento, la cédula catastral, la solvencia municipal y la certificación de gravámenes. El precio se fija comparando el valor por metro cuadrado de parcelas parecidas de la zona. La venta se protocoliza en el Registro, con el anticipo de ISLR. Puedes publicar tu terreno gratis en Casa-Libre.',
  summary: [
    'El comprador de un terreno revisa sobre todo linderos, medidas y lo que se puede construir.',
    'Un plano actualizado que coincida con el documento evita discusiones.',
    'Terrenos ejidos o rurales tienen reglas especiales: consúltalo antes de publicar.',
    'El precio se piensa por metro cuadrado, ajustado por acceso, servicios y topografía.',
  ],
  cta: {
    title: 'Publica tu terreno gratis',
    text: 'Sube fotos, medidas y ubicación en el mapa. Los interesados te escriben directo por WhatsApp.',
    button: 'Publicar mi terreno',
    href: 'https://casa-libre.com.ve/publicar',
  },
  sections: [
    {
      id: 'requisitos',
      h2: '¿Qué documentos necesitas para vender un terreno?',
      blocks: [
        { t: 'p', html: 'Los mismos de una casa, con más atención a las medidas. En un terreno, los linderos son el producto.' },
        { t: 'table',
          caption: 'Documentos para vender un terreno en Venezuela',
          head: ['Documento', 'Qué revisa el comprador'],
          rows: [
            ['Documento de propiedad registrado', 'Que el terreno es tuyo y cómo lo adquiriste'],
            ['Plano o levantamiento topográfico', 'Que medidas y linderos coinciden con el documento'],
            ['Cédula catastral', 'Que el terreno está identificado en el municipio'],
            ['Solvencia municipal', 'Que no hay deuda del impuesto inmobiliario urbano'],
            ['Certificación de gravámenes', 'Que no hay hipotecas ni embargos'],
            ['Zonificación (si la piden)', 'Qué y cuánto se puede construir'],
          ],
          note: 'Información general al 13 de noviembre de 2026.' },
        { t: 'callout', tone: 'warn', title: 'Antes de decidir', html: 'Información general. Consulta con un abogado o un notario antes de tomar decisiones.' },
      ],
    },
    {
      id: 'casos-especiales',
      h2: '¿Qué pasa con terrenos ejidos, rurales o sin documento?',
      blocks: [
        { t: 'p', html: 'Son casos distintos a una parcela urbana con documento registrado. Antes de publicar, pide a un abogado que confirme qué puedes vender.' },
        { t: 'ul', items: [
          '<strong>Ejidos:</strong> terrenos del municipio; la alcaldía interviene en su adjudicación o venta.',
          '<strong>Tierras rurales o agrarias:</strong> tienen leyes propias sobre su uso y transferencia.',
          '<strong>Solo bienhechurías:</strong> ver <a href="/venezuela/titulo-supletorio-venezuela/">título supletorio</a>.',
        ] },
      ],
    },
    {
      id: 'precio',
      h2: '¿Cuánto vale tu terreno?',
      blocks: [
        { t: 'p', html: 'Se calcula por metro cuadrado: mira cuánto piden por parcelas parecidas de la zona y ajusta por lo que hace distinto al tuyo.' },
        { t: 'ul', items: [
          'Suben el valor: frente a calle asfaltada, servicios en el borde, terreno plano, zona residencial consolidada.',
          'Lo bajan: pendientes fuertes, acceso de tierra, sin agua ni luz cerca, linderos en disputa.',
        ] },
        { t: 'example',
          title: 'Ejemplo ilustrativo: parcela de 400 m²',
          html: 'Parcelas parecidas piden en promedio USD 50 por m² (supuesto). 400 × 50 = USD 20.000. Tu parcela tiene frente a calle asfaltada y servicios: sumas un 10%: 20.000 × 1,10 = USD 22.000 como precio de salida.',
          rows: [['Superficie', '400 m²'], ['Precio por m² (supuesto)', 'USD 50'], ['Base', 'USD 20.000'], ['Ajuste (+10%)', 'USD 22.000']] },
      ],
    },
    {
      id: 'pasos',
      h2: 'Pasos para vender un terreno',
      blocks: [
        { t: 'p', html: 'Igual que una casa, con un paso más: verificar las medidas.' },
        { t: 'steps', items: [
          { title: 'Revisa linderos y plano', html: 'Si el terreno no está cercado, marca las esquinas para las visitas.' },
          { title: 'Actualiza catastro y solvencia', html: 'En la alcaldía del municipio.' },
          { title: 'Publica con mapa', html: 'Fotos del frente, del fondo y de la calle, y el punto exacto.' },
          { title: 'Opción de compra y documento', html: 'Con un abogado. Ver <a href="/venezuela/opcion-de-compra-venta-venezuela/">opción de compra venta</a>.' },
          { title: 'Anticipo de ISLR y Registro', html: 'Ver <a href="/venezuela/anticipo-de-islr-venta-de-inmueble/">anticipo de ISLR</a>.' },
        ] },
      ],
    },
    {
      id: 'fotos',
      h2: '¿Cómo fotografiar un terreno?',
      blocks: [
        { t: 'p', html: 'Un terreno se vende por su entorno. Muestra cómo se llega y qué hay alrededor.' },
        { t: 'ul', items: [
          'El frente desde la calle y desde la esquina.',
          'Vistas desde el centro hacia cada lindero.',
          'Postes de luz, tomas de agua o cloacas cercanas.',
          'Una foto de la calle de acceso y del vecindario.',
        ] },
      ],
    },
    {
      id: 'publicar',
      h2: 'Publica tu terreno gratis',
      blocks: [
        { t: 'p', html: 'En <a href="https://casa-libre.com.ve/vender">Casa-Libre</a> publicas terrenos gratis y quien busca en tu zona los ve en el mapa.' },
        { t: 'p', html: 'Para comparar, busca terrenos en venta en tu ciudad en el buscador de <a href="https://casa-libre.com.ve/propiedades?op=venta&amp;type=terreno">Casa-Libre</a>.' },
      ],
    },
  ],
  faq: [
    { q: '¿Qué necesito para vender un terreno en Venezuela?', a: 'Documento registrado, plano con linderos, cédula catastral, solvencia municipal y certificación de gravámenes.' },
    { q: '¿Puedo vender un terreno que no tiene documento?', a: 'No como propietario registrado. Primero hay que regularizarlo; consulta a un abogado.' },
    { q: '¿Se paga anticipo de ISLR al vender un terreno?', a: 'Sí, por regla general, como en cualquier venta de inmueble de una persona natural.' },
    { q: '¿Cómo calculo el precio por metro cuadrado?', a: 'Divide el precio de parcelas parecidas entre sus metros y aplica ese valor al tuyo, con ajustes.' },
  ],
  internalSources: [
    { label: 'Google autocomplete gl=ve', url: 'https://suggestqueries.google.com/complete/search?client=firefox&hl=es&gl=ve&q=vender%20terreno%20en%20venezuela', date: '2026-11-13', note: 'como vender un terreno en venezuela; requisitos para vender un terreno en venezuela; documento de compra venta de terreno en venezuela.' },
  ],
  closing: {
    title: 'Tu terreno en el mapa',
    text: 'Publica gratis en Casa-Libre y recibe las consultas por WhatsApp.',
    button: 'Publicar en Casa-Libre',
    href: 'https://casa-libre.com.ve/publicar',
  },
  related: ['requisitos-para-vender-una-casa-venezuela', 'titulo-supletorio-venezuela', 'avaluo-de-inmuebles-venezuela'],
};
