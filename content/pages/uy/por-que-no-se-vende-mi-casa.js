export default {
  slug: 'por-que-no-se-vende-mi-casa',
  group: 'Vender una propiedad',
  order: 9,
  equivalentOf: 'por-que-no-se-vende-mi-casa',
  title: '¿Por qué no se vende mi casa? Causas y soluciones',
  h1: '¿Por qué no se vende mi casa?',
  description: 'Las causas más comunes por las que una casa o un apartamento no se vende en Uruguay, cómo detectarlas en las consultas y visitas, y qué cambiar en cada caso.',
  navLabel: 'Mi casa no se vende',
  blurb: 'Precio, fotos, papeles, respuestas y visitas: por qué una casa no se vende y qué cambiar.',
  published: '2026-11-13',
  updated: '2026-11-13',
  review: 'none',
  answer: 'Una casa que no se vende en Uruguay casi siempre tiene uno de estos problemas: un precio por encima de casas parecidas, fotos que no muestran lo que vale, un aviso con datos incompletos, papeles sin revisar que asustan al comprador, o respuestas lentas a las consultas. Mirá en qué etapa se corta: si no hay consultas, revisá precio y aviso; si hay visitas sin ofertas, la casa o el precio. Casa-Libre te deja ajustar tu aviso gratis cuando quieras.',
  summary: [
    'Sin consultas: el problema está en el aviso o en el precio.',
    'Con consultas pero sin visitas: faltan datos o las respuestas tardan.',
    'Con visitas pero sin ofertas: el precio no acompaña lo que la casa muestra en persona.',
    'Con ofertas que se caen: casi siempre son los papeles o el crédito del comprador.',
  ],
  cta: {
    title: 'Renová tu aviso gratis',
    text: 'En Casa-Libre podés cambiar fotos, texto y precio cuando quieras, sin costo.',
    button: 'Publicar o mejorar mi aviso',
    href: 'https://uy.casa-libre.com/publicar',
  },
  sections: [
    {
      id: 'causas-y-soluciones',
      h2: '¿Por qué no se vende mi casa? Las causas más comunes',
      blocks: [
        { t: 'p', html: 'La forma más fácil de encontrar la causa es ver en qué etapa se frena la venta. Cada etapa apunta a un problema distinto.' },
        { t: 'table',
          caption: 'Dónde se frena la venta y qué cambiar',
          head: ['Lo que pasa', 'Causa probable', 'Qué hacer'],
          rows: [
            ['Casi no hay consultas', 'Precio alto o aviso pobre', 'Compará el precio y renová fotos y título'],
            ['Consultas que no siguen', 'Faltan datos o tardás en responder', 'Completá el aviso y contestá en el día'],
            ['Piden rebaja enseguida', 'El precio está arriba de casas parecidas', 'Revisá comparables con los mismos dormitorios'],
            ['Visitas sin ofertas', 'La casa en persona no está a la altura del aviso o del precio', 'Prepará mejor la casa o ajustá el precio'],
            ['Ofertas que se caen', 'Papeles con problemas o crédito no aprobado', 'Revisá títulos con el escribano antes de seguir'],
          ],
          note: 'Orientación general.' },
      ],
    },
    {
      id: 'el-precio',
      h2: '¿Cómo sé si mi casa está cara?',
      blocks: [
        { t: 'p', html: 'Comparándola con casas que se parecen de verdad: mismo barrio, mismos dormitorios, metros parecidos y estado similar. Si la tuya pide más que todas, el comprador la descarta antes de verla.' },
        { t: 'ol', items: [
          'Buscá entre tres y cinco casas parecidas publicadas en tu zona.',
          'Anotá precio, metros edificados y de terreno, y estado.',
          'Calculá el precio por metro de cada una y compará con el tuyo.',
          'Si estás arriba, explicá por qué en el aviso o ajustá.',
        ] },
        { t: 'p', html: 'Para comparar, el buscador con mapa de <a href="https://uy.casa-libre.com/propiedades">Casa-Libre</a> muestra lo que piden en tu barrio. Si querés una opinión profesional, leé <a href="/uruguay/tasacion-de-inmuebles-uruguay/">tasación de inmuebles</a>.' },
      ],
    },
    {
      id: 'el-aviso',
      h2: '¿Mi aviso puede ser el problema?',
      blocks: [
        { t: 'p', html: 'Sí, y es lo más barato de arreglar. Fotos oscuras, pocas fotos, sin metros o sin precio son las razones más comunes para que alguien pase de largo.' },
        { t: 'ul', items: [
          'Cambiá la primera foto por la mejor que tengas, de día.',
          'Poné el precio en dólares y los metros como dice el plano.',
          'Reescribí el título con tipo, barrio y un dato fuerte.',
          'Agregá la ubicación en el mapa.',
        ] },
        { t: 'p', html: 'Guías para rehacerlo: <a href="/uruguay/fotos-para-vender-una-casa/">fotos para vender una casa</a> y <a href="/uruguay/anuncio-para-vender-una-casa/">anuncio para vender una casa</a>.' },
      ],
    },
    {
      id: 'los-papeles',
      h2: '¿Y si el problema son los papeles?',
      blocks: [
        { t: 'p', html: 'Cuando hay ofertas que se caen, mirá los papeles. Una sucesión sin terminar, una ampliación sin regularizar o deudas con la Intendencia hacen que el escribano del comprador frene la operación.' },
        { t: 'ul', items: [
          'Pedile a tu escribano un estudio de títulos antes de aceptar otra oferta.',
          'Si hiciste obras, preguntá si hay que regularizarlas ante la Intendencia y BPS.',
          'Si la casa es heredada, que el certificado de resultancias esté inscripto.',
        ] },
        { t: 'callout', tone: 'warn', title: 'Antes de decidir', html: 'Información general. Consultá con un escribano o contador antes de tomar decisiones.' },
      ],
    },
    {
      id: 'la-temporada',
      h2: '¿Influye la época del año?',
      blocks: [
        { t: 'p', html: 'En algunas zonas sí. En los balnearios de Maldonado, Rocha y la costa de Canelones muchos compradores aparecen en verano, cuando visitan la zona. En Montevideo la demanda es más pareja durante el año.' },
        { t: 'p', html: 'Si tu casa está en un balneario, tenela lista antes de diciembre y con alguien que pueda mostrarla en temporada. Más sobre la zona en <a href="/uruguay/vender-casa-en-punta-del-este/">vender una casa en Punta del Este</a>.' },
      ],
    },
    {
      id: 'renovar-el-aviso',
      h2: '¿Cuándo conviene renovar el aviso o bajar el precio?',
      blocks: [
        { t: 'p', html: 'Si pasaron varias semanas sin consultas, cambiá el aviso antes de tocar el precio. Si después de mejorar fotos y texto sigue igual, el precio es la causa más probable.' },
        { t: 'casalibre',
          title: 'Un aviso nuevo, gratis',
          html: 'Casa-Libre es un marketplace inmobiliario donde inmobiliarias, agentes y propietarios publican casas, apartamentos y terrenos gratis, con extras pagos opcionales. Los interesados contactan directo por WhatsApp y no hay comisión sobre la venta. Está en la web y en apps para iPhone y Android.',
          button: 'Ver cómo vender en Casa-Libre',
          href: 'https://uy.casa-libre.com/vender' },
      ],
    },
  ],
  faq: [
    { q: '¿Cuánto tarda en venderse una casa en Uruguay?', a: 'No hay una cifra oficial. Depende del precio, la zona, el tipo de propiedad y de que los papeles estén listos. Una casa con precio en línea y aviso completo se mueve antes.' },
    { q: '¿Bajo el precio o espero?', a: 'Primero mejorá el aviso. Si con un aviso completo seguís sin consultas, el precio es lo que hay que revisar.' },
    { q: '¿Conviene cambiar de inmobiliaria?', a: 'Si la casa no se mueve, preguntá qué se hizo y qué respuesta tuvo el aviso. También podés publicar vos mismo, salvo que hayas firmado exclusividad.' },
    { q: '¿Dónde publicar para que mi casa se vea más?', a: 'Te recomendamos Casa-Libre: publicás gratis, el aviso aparece en el mapa y los interesados te escriben por WhatsApp.' },
  ],
  internalSources: [
    { label: 'General guidance', url: 'https://uy.casa-libre.com/vender', date: '2026-11-13', note: 'Seasonality statement for coastal towns is qualitative (summer visitors), no figures.' },
  ],
  closing: {
    title: 'Dale una segunda oportunidad a tu aviso',
    text: 'Publicar en Casa-Libre es gratis y los interesados te escriben por WhatsApp.',
    button: 'Publicar en Casa-Libre',
    href: 'https://uy.casa-libre.com/publicar',
  },
  related: ['anuncio-para-vender-una-casa', 'fotos-para-vender-una-casa', 'vendo-casa-urgente', 'tasacion-de-inmuebles-uruguay'],
};
