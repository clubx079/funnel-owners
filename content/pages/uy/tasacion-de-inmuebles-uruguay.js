import { cityMarket, marketCities, snapshotDateEs, fmtUsd } from '../../../lib/market.js';

// Asking prices only from content/data/uy-market.json (Casa-Libre snapshot).
const d = snapshotDateEs('uy');
const mvd = cityMarket('uy', 'montevideo');
const med = (p) => (p ? `${fmtUsd(p.median_usd)} (${p.listings_with_price} con precio)` : 'Sin dato: muy pocos avisos con precio');
const ventaRows = marketCities('uy').map((slug) => { const c = cityMarket('uy', slug); return [c.name, med(c.casas_venta_price), med(c.departamentos_venta_price)]; });

export default {
  slug: 'tasacion-de-inmuebles-uruguay',
  group: 'Precios y valor',
  order: 1,
  equivalentOf: 'tasacion-de-inmuebles-paraguay',
  title: 'Tasación de inmuebles en Uruguay: quién la hace y para qué',
  h1: 'Tasación de inmuebles en Uruguay',
  description: 'Qué es una tasación de inmuebles en Uruguay, quién la hace, en qué se diferencia del valor real de Catastro y de una estimación de precio, y cuándo la necesitás.',
  navLabel: 'Tasación',
  blurb: 'Tasación profesional, valor real de Catastro y estimación de precio: qué es cada uno y cuándo sirve.',
  published: '2026-11-13',
  updated: '2026-11-13',
  review: 'pending',
  reviewNote: 'A local professional should check: that tasaciones are done by tasadores, arquitectos, ingenieros or other qualified professionals; that banks order their own tasación for a mortgage and usually charge it to the borrower; that the valor real of the Dirección Nacional de Catastro is a tax base and not a market price; and that tasaciones are also used in successions, divorces and court cases. No fee is stated. 2026-11-13: added a table of asking-price medians per city built only from content/data/uy-market.json via lib/market.js (asking prices, not closing prices or appraisals).',
  answer: 'Una tasación de inmuebles en Uruguay es un informe firmado por un profesional, como un tasador, arquitecto o ingeniero, que estima el valor de mercado de una casa, un apartamento o un terreno. No es lo mismo que el valor real de Catastro, que sirve para calcular impuestos. Para vender no es obligatoria: muchas personas fijan el precio comparando con propiedades parecidas. Podés comparar con avisos de tu zona en Casa-Libre.',
  summary: [
    'Tasación: informe profesional, pago, con el valor de mercado estimado.',
    'Valor real de Catastro: base para el ITP y otros tributos, no un precio de venta.',
    'Estimación de precio: lo que hacés vos comparando con propiedades parecidas.',
    'Si el comprador usa un crédito, el banco hace su propia tasación.',
  ],
  cta: {
    title: 'Compará y publicá',
    text: 'Mirá qué piden por propiedades parecidas en Casa-Libre y publicá la tuya gratis.',
    button: 'Publicar mi casa gratis',
    href: 'https://uy.casa-libre.com/publicar',
  },
  sections: [
    {
      id: 'tres-valores',
      h2: '¿Qué diferencia hay entre tasación, valor real y estimación?',
      blocks: [
        { t: 'p', html: 'Son tres números distintos para tres usos distintos. Confundirlos lleva a precios mal puestos o a sorpresas en los impuestos.' },
        { t: 'table',
          caption: 'Tres formas de ponerle valor a una propiedad en Uruguay',
          head: ['', 'Tasación', 'Valor real de Catastro', 'Estimación de precio'],
          rows: [
            ['Quién la hace', 'Un profesional', 'Dirección Nacional de Catastro', 'Vos, comparando avisos'],
            ['Costo', 'Pago', 'Sin costo, figura en los papeles', 'Gratis'],
            ['Para qué sirve', 'Créditos, sucesiones, juicios, decidir un precio', 'Calcular el ITP y otros tributos', 'Fijar el precio de publicación'],
            ['Se parece al precio de mercado', 'Busca acercarse', 'No necesariamente', 'Sí, si los comparables son buenos'],
          ],
          note: 'Información general al 13 de noviembre de 2026.' },
      ],
    },
    {
      id: 'quien-tasa',
      h2: '¿Quién hace una tasación en Uruguay?',
      blocks: [
        { t: 'p', html: 'Profesionales con formación para valuar inmuebles: tasadores, arquitectos e ingenieros, entre otros. Los bancos tienen sus propios tasadores para los créditos hipotecarios.' },
        { t: 'p', html: 'Pedí que el informe diga el método usado, las propiedades comparadas y la fecha. Una tasación sin comparables es solo una opinión.' },
        { t: 'callout', tone: 'warn', title: 'Antes de decidir', html: 'Información general. Consultá con un escribano o contador antes de tomar decisiones.' },
      ],
    },
    {
      id: 'cuando-la-necesito',
      h2: '¿Cuándo necesito una tasación para vender?',
      blocks: [
        { t: 'p', html: 'Para publicar, casi nunca. Sí sirve cuando no hay propiedades comparables cerca, cuando varios herederos tienen que ponerse de acuerdo o cuando la casa es muy distinta a las de la zona.' },
        { t: 'ul', items: [
          'Una sucesión con varios herederos: ver <a href="/uruguay/vender-casa-heredada-uruguay/">vender una casa heredada</a>.',
          'Un campo, una casa de diseño o una propiedad única en su barrio.',
          'Una separación o divorcio en el que hay que dividir bienes.',
          'Si el comprador usa crédito: la hace el banco y puede cambiar cuánto le prestan.',
        ] },
      ],
    },
    {
      id: 'estimar-el-precio',
      h2: '¿Cómo estimo el precio sin tasación?',
      blocks: [
        { t: 'p', html: 'Con tres a cinco propiedades parecidas publicadas en tu zona, llevadas al metro cuadrado. Es la forma en que el comprador va a comparar tu casa.' },
        { t: 'example',
          title: 'Ejemplo ilustrativo: estimación por comparables',
          html: 'Números redondos e hipotéticos.',
          rows: [
            ['Casa A: USD 180.000, 120 m²', 'USD 1.500 por m²'],
            ['Casa B: USD 165.000, 100 m²', 'USD 1.650 por m²'],
            ['Casa C: USD 210.000, 140 m²', 'USD 1.500 por m²'],
            ['Promedio', 'USD 1.550 por m²'],
            ['Tu casa: 110 m² x 1.550', 'USD 170.500 como punto de partida'],
          ] },
        { t: 'p', html: 'Buscá los comparables en el mapa de <a href="https://uy.casa-libre.com/propiedades">Casa-Libre</a>. La guía sobre cuánto vale tu propiedad de <a href="https://uy.casa-libre.com/guias/cuanto-vale-mi-propiedad">Casa-Libre</a> explica cómo ajustar por estado y ubicación.' },
      ],
    },
    {
      id: 'tasacion-del-banco',
      h2: '¿Qué pasa si el banco tasa por menos?',
      blocks: [
        { t: 'p', html: 'El banco presta un porcentaje de su tasación, no del precio. Si tasa por debajo de lo acordado, el comprador tiene que poner más ahorro o renegociar.' },
        { t: 'p', html: 'Por eso el compromiso de compraventa suele poner como condición la aprobación del crédito. Ver <a href="/uruguay/compromiso-de-compraventa-uruguay/">compromiso de compraventa</a>.' },
      ],
    },
    {
      id: 'precios-publicados',
      h2: '¿Qué precios piden hoy las propiedades publicadas?',
      blocks: [
        { t: 'p', html: `Antes de pagar una tasación, mirá lo que piden los vendedores. La tabla muestra la mediana de lo publicado en Casa-Libre al ${d} en las cuatro ciudades con suficientes avisos: la mitad pide menos y la otra mitad, más. Son precios pedidos, no precios de cierre ni valores de tasación.` },
        { t: 'table',
          caption: `Precios pedidos en Casa-Libre, ${d}`,
          head: ['Ciudad', 'Casas: mediana', 'Apartamentos: mediana'],
          rows: ventaRows,
          note: `Propiedades activas publicadas en Casa-Libre al ${d}. Precios pedidos en dólares, no de cierre. Con menos de 10 avisos con precio, la mediana es solo una referencia gruesa.` },
        { t: 'p', html: `Un número de toda la ciudad no es el valor de tu propiedad. En Montevideo, por ejemplo, la mediana de ${fmtUsd(mvd.departamentos_venta_price.median_usd)} para apartamentos mezcla barrios muy distintos. Usalo para saber si tu idea está en un rango razonable y después compará con tu barrio. Si tu propiedad se sale mucho de lo publicado, una tasación te da respaldo para negociar.` },
        { t: 'p', html: 'Más por ciudad en <a href="/uruguay/vender-casa-en-montevideo/">Montevideo</a>, <a href="/uruguay/vender-casa-en-punta-del-este/">Punta del Este</a>, <a href="/uruguay/vender-casa-en-maldonado/">Maldonado</a> y <a href="/uruguay/vender-casa-en-ciudad-de-la-costa/">Ciudad de la Costa</a>.' },
      ],
    },
    {
      id: 'publicar',
      h2: '¿Con el precio listo, dónde publico?',
      blocks: [
        { t: 'p', html: 'Te recomendamos Casa-Libre: publicás gratis, el aviso aparece en el mapa junto a los de tu zona y los interesados te escriben por WhatsApp.' },
        { t: 'casalibre',
          title: 'Por qué te recomendamos Casa-Libre',
          html: 'Casa-Libre es un marketplace inmobiliario donde inmobiliarias, agentes y propietarios publican casas, apartamentos y terrenos gratis, con extras pagos opcionales. Los interesados contactan directo por WhatsApp y no hay comisión sobre la venta. Está en la web y en apps para iPhone y Android.',
          button: 'Ver cómo vender en Casa-Libre',
          href: 'https://uy.casa-libre.com/vender' },
      ],
    },
  ],
  faq: [
    { q: '¿Cuánto cuesta una tasación en Uruguay?', a: 'Depende del profesional, del tipo de propiedad y de la zona. Pedí presupuesto por escrito antes de encargarla.' },
    { q: '¿El valor real de Catastro es lo que vale mi casa?', a: 'No. Es un valor fiscal que sirve para calcular impuestos como el ITP. Suele ser distinto del precio de mercado.' },
    { q: '¿Necesito tasación para vender mi casa?', a: 'No es obligatoria. Muchas ventas se hacen con un precio fijado comparando con propiedades parecidas.' },
    { q: '¿Cómo sé cuánto vale mi casa gratis?', a: 'Comparando con casas parecidas publicadas en tu zona, por metro cuadrado. Es una estimación de precio, no una tasación.' },
  ],
  internalSources: [
    { label: 'Google autocomplete Uruguay, "tasacion de inmuebles uruguay"', url: 'https://suggestqueries.google.com/complete/search?client=firefox&hl=es&gl=uy&q=tasacion%20de%20inmuebles%20uruguay', date: '2026-11-13', note: 'Query exists as typed.' },
  ],
  closing: {
    title: 'Con el precio claro, publicá',
    text: 'Publicar en Casa-Libre es gratis y las consultas te llegan por WhatsApp.',
    button: 'Publicar en Casa-Libre',
    href: 'https://uy.casa-libre.com/publicar',
  },
  related: ['', 'por-que-no-se-vende-mi-casa', 'itp-uruguay'],
};
