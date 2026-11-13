export default {
  slug: 'avaluo-de-inmuebles-venezuela',
  group: 'Precios y valor',
  order: 1,
  equivalentOf: 'tasacion-de-inmuebles-paraguay',
  title: 'Avalúo de inmuebles en Venezuela: cuándo hace falta',
  h1: 'Avalúo de inmuebles en Venezuela',
  description: 'Qué es un avalúo de inmueble en Venezuela, quién lo hace, cuándo te lo piden (crédito, herencia, divorcio) y cómo estimar el precio de tu casa sin pagar uno.',
  navLabel: 'Avalúo',
  blurb: 'Qué es un avalúo, cuándo hace falta y cómo estimar el precio de tu casa comparando inmuebles parecidos.',
  published: '2026-11-13',
  updated: '2026-11-13',
  review: 'pending',
  reviewNote: 'A Venezuelan lawyer or appraiser must check: that avalúos are made by professional appraisers (tasadores/peritos avaluadores, usually engineers or architects registered with their professional college or the relevant registry); that banks require their own avalúo for mortgage credit; that avalúos are commonly used in sucesiones, partitions and divorces; and that there is no official fee to cite. No fees are stated.',
  answer: 'Un avalúo es el informe en el que un perito avaluador estima el valor de un inmueble en Venezuela, con visita, medidas y comparación con ventas de la zona. Lo piden los bancos para dar un crédito y se usa en herencias, particiones y divorcios. Para vender no es obligatorio: puedes estimar el precio comparando casas parecidas publicadas en tu zona y publicar gratis en Casa-Libre.',
  summary: [
    'El avalúo lo hace un perito avaluador y tiene un costo; se paga por el informe.',
    'El banco del comprador hará su propio avalúo si hay crédito hipotecario.',
    'Para fijar un precio de salida, comparar casas parecidas de tu zona suele bastar.',
    'Ajusta por metros, estado, servicios (agua, planta eléctrica), estacionamiento y documentos.',
  ],
  cta: {
    title: 'Compara y publica',
    text: 'Mira casas parecidas en el mapa de Casa-Libre y publica la tuya gratis.',
    button: 'Publicar mi casa',
    href: 'https://casa-libre.com.ve/publicar',
  },
  sections: [
    {
      id: 'que-es',
      h2: '¿Qué es un avalúo de inmueble?',
      blocks: [
        { t: 'p', html: 'Es un informe técnico con el valor estimado de una casa, un apartamento o un terreno. Lo firma un profesional que visita el inmueble y justifica la cifra.' },
        { t: 'table',
          caption: 'Avalúo profesional y estimación por comparación',
          head: ['', 'Avalúo', 'Estimación por comparación'],
          rows: [
            ['Quién lo hace', 'Un perito avaluador', 'Tú, mirando inmuebles parecidos'],
            ['Costo', 'Se pagan honorarios', 'Gratis'],
            ['Cuándo sirve', 'Créditos, herencias, divorcios, disputas', 'Fijar un precio de salida para publicar'],
            ['Valor legal', 'Sirve como respaldo técnico', 'Ninguno: es orientativo'],
          ],
          note: 'Información general al 13 de noviembre de 2026.' },
        { t: 'callout', tone: 'warn', title: 'Antes de decidir', html: 'Información general. Consulta con un abogado o un perito avaluador antes de tomar decisiones.' },
      ],
    },
    {
      id: 'cuando-hace-falta',
      h2: '¿Cuándo hace falta un avalúo?',
      blocks: [
        { t: 'p', html: 'Cuando alguien necesita un valor respaldado por un profesional. Para una venta entre particulares de contado no suele ser obligatorio.' },
        { t: 'ul', items: [
          'Crédito hipotecario: el banco del comprador lo encarga.',
          'Herencias: ayuda a declarar los bienes y repartirlos. Ver <a href="/venezuela/vender-casa-heredada-venezuela/">vender una casa heredada</a>.',
          'Divorcios y particiones entre copropietarios.',
          'Cuando no hay casas comparables en tu zona y necesitas una referencia seria.',
        ] },
      ],
    },
    {
      id: 'estimar-sin-avaluo',
      h2: '¿Cómo calcular el precio de mi casa sin avalúo?',
      blocks: [
        { t: 'p', html: 'Busca entre cinco y diez inmuebles parecidos al tuyo en la misma urbanización o zona y compara el precio por metro cuadrado. Después ajusta por lo que tu casa tiene de más o de menos.' },
        { t: 'steps', items: [
          { title: 'Junta comparables', html: 'Mismo tipo, zona y tamaño parecido, en el buscador con mapa de <a href="https://casa-libre.com.ve/propiedades">Casa-Libre</a>.' },
          { title: 'Calcula el precio por m²', html: 'Precio pedido dividido entre metros de construcción.' },
          { title: 'Ajusta', html: 'Estado, puestos de estacionamiento, tanque, planta eléctrica, vigilancia y documentos.' },
          { title: 'Recuerda que son precios pedidos', html: 'Lo que se pide no siempre es lo que se cierra: deja margen para negociar.' },
        ] },
      ],
    },
    {
      id: 'ejemplo',
      h2: 'Ejemplo de estimación por metro cuadrado',
      blocks: [
        { t: 'p', html: 'Con números redondos y supuestos, así se ve el cálculo.' },
        { t: 'example',
          title: 'Ejemplo ilustrativo: casa de 150 m²',
          html: 'Cinco casas parecidas piden en promedio USD 400 por m² (supuesto). Tu casa tiene 150 m²: 150 × 400 = USD 60.000. Le falta planta eléctrica y necesita pintura, así que restas un 5%: 60.000 × 0,95 = USD 57.000 como precio de salida.',
          rows: [['Metros', '150 m²'], ['Precio por m² (supuesto)', 'USD 400'], ['Base', 'USD 60.000'], ['Ajuste (−5%)', 'USD 57.000']] },
      ],
    },
    {
      id: 'que-sube-el-valor',
      h2: '¿Qué sube o baja el valor de una casa en Venezuela?',
      blocks: [
        { t: 'p', html: 'La ubicación manda, pero los servicios pesan mucho más que en otros países. Un comprador pregunta primero por el agua y la luz.' },
        { t: 'ul', items: [
          'Suben: agua estable o tanque y bomba, planta eléctrica, seguridad, puestos de estacionamiento, documentos limpios.',
          'Bajan: filtraciones, deudas de condominio, título supletorio en vez de documento registrado, reformas sin permisos.',
        ] },
        { t: 'p', html: 'Más sobre el método en la guía de <a href="https://casa-libre.com.ve/guias/cuanto-vale-mi-propiedad">Casa-Libre</a> sobre cuánto vale tu propiedad.' },
      ],
    },
    {
      id: 'publicar',
      h2: 'Con el precio listo, publica',
      blocks: [
        { t: 'p', html: 'Publica en Casa-Libre gratis y mira cómo responden los interesados en las primeras semanas: si no hay consultas, revisa el precio.' },
        { t: 'p', html: 'Si tu casa no se mueve, lee <a href="/venezuela/por-que-no-se-vende-mi-casa/">por qué no se vende mi casa</a>.' },
      ],
    },
  ],
  faq: [
    { q: '¿Quién hace avalúos de inmuebles en Venezuela?', a: 'Peritos avaluadores, normalmente ingenieros o arquitectos con formación en valuación. Pide sus credenciales.' },
    { q: '¿Es obligatorio un avalúo para vender una casa?', a: 'No para una venta de contado entre particulares. Sí suele pedirse si el comprador usa crédito bancario.' },
    { q: '¿Cuánto cuesta un avalúo?', a: 'No hay una tarifa oficial que citar: depende del profesional y del inmueble. Pide presupuesto a más de uno.' },
    { q: '¿El avalúo es el precio al que voy a vender?', a: 'No necesariamente. Es una referencia técnica; el precio final lo decide la negociación con el comprador.' },
  ],
  internalSources: [
    { label: 'Google autocomplete gl=ve', url: 'https://suggestqueries.google.com/complete/search?client=firefox&hl=es&gl=ve&q=avaluo%20de%20inmueble', date: '2026-11-13', note: 'avalúo de inmuebles en venezuela; avalúo de inmuebles gratis.' },
  ],
  closing: {
    title: 'Pon tu casa a la vista',
    text: 'Publica gratis en Casa-Libre y recibe las consultas por WhatsApp.',
    button: 'Publicar en Casa-Libre',
    href: 'https://casa-libre.com.ve/publicar',
  },
  related: ['por-que-no-se-vende-mi-casa', 'anuncio-para-vender-una-casa', 'gastos-al-vender-una-casa-venezuela'],
};
