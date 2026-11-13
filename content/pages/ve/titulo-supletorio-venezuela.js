export default {
  slug: 'titulo-supletorio-venezuela',
  group: 'Papeles y trámites',
  order: 6,
  equivalentOf: 'vender-casa-sin-titulo-paraguay',
  title: 'Título supletorio en Venezuela: ¿se puede vender la casa?',
  h1: 'Título supletorio en Venezuela: qué es y si puedes vender',
  description: 'Qué es el título supletorio en Venezuela, qué prueba y qué no, cómo se venden las bienhechurías, el caso del terreno ejido y qué revisa el comprador.',
  navLabel: 'Título supletorio',
  blurb: 'Qué es el título supletorio, cómo se venden bienhechurías y qué riesgos revisa el comprador.',
  published: '2026-11-13',
  updated: '2026-11-13',
  review: 'pending',
  reviewNote: 'A Venezuelan lawyer must check: that a título supletorio is issued by a tribunal through a justificativo (evidence by witnesses) and covers bienhechurías (constructions) but does not prove ownership of the land and leaves third-party rights safe; that bienhechurías can be sold with a registered document; that houses on ejidos (municipal land) need the municipality\'s involvement or an adjudicación/compra of the land; that buyers and banks usually see these titles as higher risk and credit is harder; and that regularisation routes exist. All stated in general terms.',
  answer: 'El título supletorio es un documento que un tribunal da a quien construyó o posee una vivienda para probar sus bienhechurías, es decir, la construcción. En Venezuela se pueden vender esas bienhechurías con un documento registrado, pero el título supletorio no prueba la propiedad del terreno y deja a salvo los derechos de terceros. Eso baja la confianza del comprador. Puedes publicar la casa gratis en Casa-Libre, explicando la situación.',
  summary: [
    'El título supletorio prueba la construcción (bienhechurías), no la propiedad del terreno.',
    'Se puede vender lo que tienes, con un documento registrado, pero el comprador asume más riesgo.',
    'Si el terreno es ejido municipal, la alcaldía tiene un papel en la regularización.',
    'Regularizar el terreno antes de vender suele mejorar el precio y la confianza.',
  ],
  cta: {
    title: 'Publica tu casa explicando sus papeles',
    text: 'En Casa-Libre publicar es gratis. Los interesados te escriben directo por WhatsApp.',
    button: 'Publicar mi casa gratis',
    href: 'https://casa-libre.com.ve/publicar',
  },
  sections: [
    {
      id: 'que-es',
      h2: '¿Qué es un título supletorio?',
      blocks: [
        { t: 'p', html: 'Es una decisión de un tribunal que, con declaraciones de testigos, reconoce que alguien construyó o posee unas bienhechurías. Se usa mucho en casas levantadas sobre terrenos sin documento propio.' },
        { t: 'table',
          caption: 'Documento registrado y título supletorio',
          head: ['', 'Documento de propiedad registrado', 'Título supletorio'],
          rows: [
            ['Qué prueba', 'La propiedad del inmueble (terreno y construcción)', 'La construcción o la posesión'],
            ['Quién lo da', 'Registro Público, tras una compraventa u otro título', 'Un tribunal, con testigos'],
            ['Derechos de terceros', 'Inscritos y verificables', 'Quedan a salvo'],
            ['Para el comprador', 'Menor riesgo, más fácil obtener crédito', 'Mayor riesgo, crédito más difícil'],
          ],
          note: 'Información general al 13 de noviembre de 2026.' },
        { t: 'callout', tone: 'warn', title: 'Antes de decidir', html: 'Información general. Consulta con un abogado o un notario antes de tomar decisiones.' },
      ],
    },
    {
      id: 'se-puede-vender',
      h2: '¿Se puede vender una casa con título supletorio?',
      blocks: [
        { t: 'p', html: 'Se pueden vender las bienhechurías, con un documento de venta que un abogado redacta y se registra. Lo que no se vende es un terreno que no es tuyo.' },
        { t: 'ul', items: [
          'Di en el aviso que la casa tiene título supletorio: ocultarlo hace perder tiempo y confianza.',
          'Espera que el comprador pague de contado: los bancos suelen preferir documentos de propiedad plena.',
          'Pide a tu abogado que revise de quién es el terreno antes de firmar nada.',
        ] },
      ],
    },
    {
      id: 'terreno-ejido',
      h2: '¿Y si la casa está en un terreno ejido?',
      blocks: [
        { t: 'p', html: 'Los ejidos son terrenos del municipio. Si tu casa está sobre uno, la alcaldía interviene para regularizar: según el caso, por adjudicación o compra del terreno, siguiendo su ordenanza.' },
        { t: 'p', html: 'Pregunta en la oficina de catastro o de ejidos de tu alcaldía qué vía tienes. Con el terreno regularizado, la venta pasa a ser una venta normal, como la de <a href="/venezuela/requisitos-para-vender-una-casa-venezuela/">requisitos para vender una casa</a>.' },
      ],
    },
    {
      id: 'riesgos',
      h2: '¿Qué riesgos ve el comprador?',
      blocks: [
        { t: 'p', html: 'Que aparezca alguien con mejor derecho sobre el terreno, y que después no pueda revender o hipotecar con facilidad. Por eso estas casas suelen negociarse con más descuento.' },
        { t: 'p', html: 'Si hay una herencia de por medio, se suma otro trámite: ver <a href="/venezuela/vender-casa-heredada-venezuela/">vender una casa heredada</a>.' },
      ],
    },
    {
      id: 'regularizar-o-vender',
      h2: '¿Conviene regularizar antes de vender?',
      blocks: [
        { t: 'p', html: 'Si el trámite es posible y no es eterno, casi siempre conviene: amplía el número de compradores y permite pedir un precio más alto. Si necesitas vender ya, vende con transparencia y precio acorde.' },
        { t: 'example',
          title: 'Ejemplo ilustrativo: vender ya o regularizar primero',
          html: 'Una casa con título supletorio recibe ofertas de USD 18.000. Con el terreno regularizado, el dueño estima que podría pedir USD 24.000 (supuesto). Si regularizar cuesta USD 1.500 (supuesto), la diferencia neta sería 24.000 − 1.500 − 18.000 = USD 4.500, a cambio de esperar.',
          rows: [['Venta con título supletorio', 'USD 18.000'], ['Venta regularizada (supuesto)', 'USD 24.000'], ['Costo de regularizar (supuesto)', '− USD 1.500'], ['Diferencia', 'USD 4.500']] },
      ],
    },
    {
      id: 'publicar',
      h2: 'Cómo publicar una casa con título supletorio',
      blocks: [
        { t: 'p', html: 'Con honestidad y buenas fotos. Publica gratis en <a href="https://casa-libre.com.ve/vender">Casa-Libre</a> y aclara el tipo de documento en la descripción.' },
        { t: 'p', html: 'Para ver casas parecidas en tu zona y ajustar el precio, usa el buscador de <a href="https://casa-libre.com.ve/comprar">Casa-Libre</a>.' },
      ],
    },
  ],
  faq: [
    { q: '¿El título supletorio es un título de propiedad?', a: 'No del terreno. Prueba las bienhechurías o la posesión y deja a salvo los derechos de terceros.' },
    { q: '¿Qué son las bienhechurías?', a: 'Las construcciones y mejoras hechas sobre un terreno: la casa, sus anexos, cercas y similares.' },
    { q: '¿Me dan crédito para comprar una casa con título supletorio?', a: 'Suele ser difícil: los bancos prefieren documentos de propiedad registrados. Por eso estas ventas suelen ser de contado.' },
    { q: '¿Dónde se saca el título supletorio?', a: 'Ante un tribunal, con un abogado y testigos. Después puede registrarse.' },
  ],
  internalSources: [
    { label: 'Google autocomplete gl=ve', url: 'https://suggestqueries.google.com/complete/search?client=firefox&hl=es&gl=ve&q=titulo%20supletorio', date: '2026-11-13', note: 'titulo supletorio en venezuela; titulo supletorio de bienhechurias; titulo supletorio de vivienda; venta de bienhechurias; bienhechurías en venezuela.' },
  ],
  closing: {
    title: 'Publica con transparencia',
    text: 'Publica tu casa gratis en Casa-Libre y responde las consultas por WhatsApp.',
    button: 'Publicar en Casa-Libre',
    href: 'https://casa-libre.com.ve/publicar',
  },
  related: ['requisitos-para-vender-una-casa-venezuela', 'vender-casa-heredada-venezuela', 'como-vender-un-terreno-venezuela'],
};
