export default {
  slug: 'por-que-no-se-vende-mi-casa',
  group: 'Vender una propiedad',
  order: 9,
  equivalentOf: 'por-que-no-se-vende-mi-casa',
  title: '¿Por qué no se vende mi casa? Causas y soluciones',
  h1: '¿Por qué no se vende mi casa?',
  description: 'Por qué no se vende una casa en Venezuela: precio, fotos, papeles, servicios o respuestas lentas, qué hacer con cada causa y un plan de revisión.',
  navLabel: 'No se vende mi casa',
  blurb: 'Las razones por las que una casa no se vende y cómo corregir cada una.',
  published: '2026-11-13',
  updated: '2026-11-13',
  review: 'none',
  answer: 'Una casa casi siempre deja de venderse por una de cinco razones: precio por encima de casas parecidas, fotos que no muestran bien el inmueble, papeles incompletos, dudas sobre servicios como el agua o la luz, o respuestas lentas a los interesados. En Venezuela pesa también que muchos compradores pagan de contado y comparan mucho. Revisa cada punto y ajusta; puedes comparar tu casa con otras publicadas en Casa-Libre.',
  summary: [
    'Si hay visitas pero no ofertas, el problema suele ser precio o estado.',
    'Si no hay consultas, el problema suele estar en el aviso: fotos, título, precio visible.',
    'Papeles incompletos espantan a compradores serios y a quien paga con crédito.',
    'Revisa el aviso cada dos o tres semanas y ajusta una cosa a la vez.',
  ],
  cta: {
    title: 'Vuelve a publicar mejor',
    text: 'Actualiza tu aviso o publícalo gratis en Casa-Libre. Los interesados te escriben por WhatsApp.',
    button: 'Publicar mi casa',
    href: 'https://casa-libre.com.ve/publicar',
  },
  sections: [
    {
      id: 'causas',
      h2: '¿Cuáles son las causas más comunes?',
      blocks: [
        { t: 'p', html: 'Mira qué síntoma tienes: no hay consultas, hay consultas pero no visitas, o hay visitas pero no ofertas. Cada uno apunta a una causa distinta.' },
        { t: 'table',
          caption: 'Síntoma, causa probable y solución',
          head: ['Síntoma', 'Causa probable', 'Qué hacer'],
          rows: [
            ['Casi no hay consultas', 'Precio alto o fotos débiles', 'Compara precio y renueva fotos'],
            ['Consultas que no siguen', 'Faltan datos (servicios, papeles)', 'Completa la descripción'],
            ['Visitas sin ofertas', 'Precio o estado no coinciden con el aviso', 'Repara lo visible o ajusta el precio'],
            ['Ofertas que se caen', 'Papeles incompletos o hipoteca', 'Ordena la documentación'],
            ['Interesados que se enfrían', 'Respuestas lentas', 'Responde el mismo día'],
          ],
          note: 'Orientación general.' },
      ],
    },
    {
      id: 'precio',
      h2: '¿Mi casa está muy cara?',
      blocks: [
        { t: 'p', html: 'Es la causa más frecuente. Compara con casas de tu misma zona, tamaño y estado, no con la mejor casa de la urbanización.' },
        { t: 'p', html: 'Busca comparables en el mapa de <a href="https://casa-libre.com.ve/propiedades">Casa-Libre</a> y revisa el método en <a href="/venezuela/avaluo-de-inmuebles-venezuela/">avalúo de inmuebles</a>. Recuerda que los precios publicados son pedidos, no de cierre.' },
      ],
    },
    {
      id: 'aviso',
      h2: '¿El aviso está bien hecho?',
      blocks: [
        { t: 'p', html: 'Si casi nadie escribe, revisa el aviso como si fueras comprador.' },
        { t: 'ul', items: [
          'La primera foto: ¿es la mejor? ¿Está de día?',
          'El título: ¿dice tipo, zona y algo que destaque?',
          'La descripción: ¿menciona agua, planta, puestos y documentos?',
          'El precio: ¿está visible?',
        ] },
        { t: 'p', html: 'Guías: <a href="/venezuela/fotos-para-vender-una-casa/">fotos para vender</a> y <a href="/venezuela/anuncio-para-vender-una-casa/">anuncio para vender</a>.' },
      ],
    },
    {
      id: 'papeles',
      h2: '¿Los papeles frenan la venta?',
      blocks: [
        { t: 'p', html: 'Un comprador que descubre una solvencia vencida, una hipoteca sin liberar o una herencia sin declarar suele retirarse. Resolverlo antes amplía tus compradores.' },
        { t: 'p', html: 'Revisa la lista de <a href="/venezuela/requisitos-para-vender-una-casa-venezuela/">requisitos para vender</a> y di en el aviso que todo está en orden.' },
      ],
    },
    {
      id: 'plan',
      h2: 'Plan de revisión en cuatro semanas',
      blocks: [
        { t: 'p', html: 'Cambia una cosa a la vez para saber qué funcionó.' },
        { t: 'steps', items: [
          { title: 'Semana 1', html: 'Renueva fotos y primera foto.' },
          { title: 'Semana 2', html: 'Completa la descripción con servicios y papeles.' },
          { title: 'Semana 3', html: 'Comparte el enlace en más grupos y con contactos fuera del país.' },
          { title: 'Semana 4', html: 'Si sigue sin consultas, ajusta el precio.' },
        ] },
        { t: 'example',
          title: 'Ejemplo ilustrativo: ajuste de precio',
          html: 'Una casa pide USD 80.000 y casas parecidas piden entre USD 68.000 y 74.000 (supuesto). Bajar a USD 74.000 es un ajuste de 80.000 − 74.000 = USD 6.000, un 7,5%, y la pone dentro del rango que ve el comprador.' },
      ],
    },
    {
      id: 'publicar',
      h2: 'Publica donde te encuentren',
      blocks: [
        { t: 'p', html: 'Si tu casa solo está en un lugar, súmala a <a href="https://casa-libre.com.ve/vender">Casa-Libre</a>: es gratis y quien busca en tu zona la ve en el mapa.' },
        { t: 'p', html: 'Y si necesitas vender pronto, lee <a href="/venezuela/vendo-casa-urgente/">vendo casa urgente</a>.' },
      ],
    },
  ],
  faq: [
    { q: '¿Cuánto tarda en venderse una casa en Venezuela?', a: 'No hay una cifra oficial: depende de la zona, el precio y los papeles. Lo que sí acelera es un precio realista y un buen aviso.' },
    { q: '¿Bajar el precio es la única solución?', a: 'No. Primero revisa fotos, descripción y papeles. Si todo está bien y no hay consultas, ahí sí ajusta el precio.' },
    { q: '¿Conviene quitar el aviso y volver a publicarlo?', a: 'Es mejor actualizarlo con fotos nuevas y mejor descripción.' },
    { q: '¿Y si la casa necesita reparaciones?', a: 'Repara lo pequeño y visible (pintura, filtraciones, grifería). Lo grande, refléjalo en el precio.' },
  ],
  internalSources: [
    { label: 'Editorial page, no legal facts', url: 'https://suggestqueries.google.com/complete/search?client=firefox&hl=es&gl=ve&q=vender%20casa%20en%20venezuela', date: '2026-11-13', note: 'General sales advice localised to Venezuela.' },
  ],
  closing: {
    title: 'Dale una segunda oportunidad a tu aviso',
    text: 'Publica gratis en Casa-Libre y recibe las consultas por WhatsApp.',
    button: 'Publicar en Casa-Libre',
    href: 'https://casa-libre.com.ve/publicar',
  },
  related: ['avaluo-de-inmuebles-venezuela', 'fotos-para-vender-una-casa', 'vendo-casa-urgente'],
};
