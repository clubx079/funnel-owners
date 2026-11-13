import { cityMarket, cityMarketTable, snapshotDateEs, fmtUsd } from '../../../lib/market.js';

// Numbers only from content/data/uy-market.json (Casa-Libre snapshot, asking prices).
const m = cityMarket('uy', 'montevideo');
const d = snapshotDateEs('uy');
const casa = m.casas_venta_price;
const apto = m.departamentos_venta_price;

export default {
  slug: 'vender-casa-en-montevideo',
  group: 'Vender por ciudad',
  order: 1,
  city: 'montevideo',
  cityName: 'Montevideo',
  title: 'Vender una casa en Montevideo: barrios, papeles y aviso',
  h1: 'Vender una casa en Montevideo',
  description: 'Cómo vender tu casa o apartamento en Montevideo: cómo pesa el barrio en el precio, quién compra, contribución con la Intendencia, papeles y cómo publicarla gratis.',
  navLabel: 'Casa en Montevideo',
  blurb: 'Barrios, compradores, tributos de la Intendencia y cómo publicar gratis una casa o un apartamento en Montevideo.',
  published: '2026-11-13',
  updated: '2026-11-13',
  review: 'pending',
  reviewNote: 'Local facts to check before indexing: barrio groupings (costa este: Punta Carretas, Pocitos, Buceo, Malvín, Punta Gorda, Carrasco; centro: Ciudad Vieja, Centro, Cordón, Parque Rodó, Tres Cruces; Prado, La Blanqueada, Unión, Sayago, Colón, Cerro, Paso de la Arena); that the department has eight municipios under the Intendencia de Montevideo; that contribución inmobiliaria in Montevideo is paid to the Intendencia and can be paid in instalments; that many new buildings in central barrios were built as vivienda promovida; the airport of Carrasco being in Canelones. Legal and tax facts as in the national pages (ITP 2% + 2% on valor real; IRPF). 2026-11-13: prices and counts only from content/data/uy-market.json via lib/market.js (asking prices on Casa-Libre, not closing prices; city-wide medians, not per barrio).',
  answer: `Para vender una casa en Montevideo, fijá el precio comparando con propiedades de tu mismo barrio, tené la contribución de la Intendencia y la Primaria al día, y un escribano que estudie los títulos. Según las propiedades publicadas en Casa-Libre al ${d} (precios pedidos, no de cierre), la mediana de las casas en venta en Montevideo pide ${fmtUsd(casa.median_usd)}. Podés publicar la tuya gratis en Casa-Libre.`,
  summary: [
    `${m.for_sale.total} avisos en venta en Montevideo en Casa-Libre al ${d}; la mitad central de las casas pide entre ${fmtUsd(casa.p25_usd)} y ${fmtUsd(casa.p75_usd)} (precios pedidos, no de cierre).`,
    'En Montevideo el precio se compara por barrio: dos casas iguales en barrios distintos piden cosas muy distintas.',
    `Los apartamentos son la mayor parte de la oferta: ${m.for_sale.departamentos} avisos, con una mediana de ${fmtUsd(apto.median_usd)}.`,
    'La contribución se paga a la Intendencia de Montevideo y tiene que estar al día para escriturar.',
    'Impuestos como en todo el país: ITP del 2% sobre el valor real y, si hay ganancia, IRPF.',
  ],
  cta: {
    title: 'Publicá tu casa de Montevideo gratis',
    text: 'Subís fotos, precio y ubicación desde la web o la app. Los interesados te escriben por WhatsApp, sin comisión.',
    button: 'Publicar mi casa gratis',
    href: 'https://uy.casa-libre.com/publicar',
  },
  sections: [
    {
      id: 'cuanto-piden-en-montevideo',
      h2: '¿Cuánto piden por una casa en Montevideo?',
      blocks: [
        { t: 'p', html: `La mitad de las casas en venta en Montevideo pide menos de ${fmtUsd(casa.median_usd)} y la otra mitad, más. Es la mediana de ${casa.listings_with_price} casas con precio publicadas en Casa-Libre al ${d}: precios pedidos por los vendedores, no precios de cierre.` },
        cityMarketTable('uy', 'montevideo', { rent: false }),
        { t: 'p', html: `Es un número de toda la ciudad, y en Montevideo el barrio pesa mucho: una casa con fondo en Carrasco y una en el Cerro entran en la misma mediana. Usalo para ubicarte y sacá tu precio de casas parecidas de tu barrio. Los apartamentos, con ${apto.listings_with_price} avisos con precio, tienen una mitad central más angosta (${fmtUsd(apto.p25_usd)} a ${fmtUsd(apto.p75_usd)}) porque se parecen más entre sí.` },
      ],
    },
    {
      id: 'zonas-de-montevideo',
      h2: '¿Cómo influye el barrio en el precio en Montevideo?',
      blocks: [
        { t: 'p', html: 'Mucho más que en otras ciudades del país. El comprador montevideano busca primero por barrio y después por tamaño, así que tu precio tiene que compararse con propiedades de tu zona, no con el promedio de la ciudad.' },
        { t: 'table',
          caption: 'Zonas de Montevideo y lo que suele buscar quien compra',
          head: ['Zona', 'Barrios de referencia', 'Lo que pregunta el comprador'],
          rows: [
            ['Costa este', 'Punta Carretas, Pocitos, Buceo, Malvín, Punta Gorda, Carrasco', 'Distancia a la rambla, garaje, amenities, gastos comunes'],
            ['Centro', 'Ciudad Vieja, Centro, Cordón, Parque Rodó, Tres Cruces', 'Ómnibus, cercanía a centros de estudio, gastos comunes'],
            ['Barrios tradicionales', 'Prado, La Blanqueada, Unión', 'Estado de la casa, fondo, garaje, reciclaje'],
            ['Oeste y norte', 'Cerro, Paso de la Arena, Sayago, Colón', 'Terreno, patio, acceso, precio por metro'],
          ],
          note: 'Agrupación orientativa, sin precios. Cada barrio tiene subzonas con valores distintos.' },
      ],
    },
    {
      id: 'quien-compra',
      h2: '¿Quién compra casa en Montevideo?',
      blocks: [
        { t: 'p', html: 'Familias que buscan más espacio o un barrio cerca de la escuela, parejas que compran su primer apartamento, personas que compran para alquilar y uruguayos que vuelven del exterior. Cada uno lee el aviso con una pregunta distinta.' },
        { t: 'ul', items: [
          'Quien compra para vivir pregunta por dormitorios, luz, ruido y transporte.',
          'Quien compra para alquilar mira gastos comunes, cercanía a facultades y si se alquila rápido.',
          'Quien vuelve del exterior compara por internet antes de viajar: el aviso tiene que estar completo y con mapa.',
        ] },
        { t: 'p', html: 'Para el aviso, usá la plantilla de <a href="/uruguay/anuncio-para-vender-una-casa/">anuncio para vender una casa</a>.' },
      ],
    },
    {
      id: 'casa-o-apartamento',
      h2: '¿Vendés casa o apartamento?',
      blocks: [
        { t: 'p', html: 'En Montevideo cambia bastante. Una casa con fondo en el Prado o en Malvín compite con pocas parecidas; un apartamento en Pocitos o en Cordón compite con muchos del mismo edificio o de la cuadra.' },
        { t: 'p', html: 'Si es un apartamento, compará con los apartamentos en venta en Montevideo de <a href="https://uy.casa-libre.com/venta/departamentos/montevideo">Casa-Libre</a> y revisá lo propio del edificio en <a href="/uruguay/como-vender-un-apartamento-uruguay/">cómo vender un apartamento</a>. Si es una casa, mirá las casas en venta de la ciudad en <a href="https://uy.casa-libre.com/venta/casas/montevideo">Casa-Libre</a>.' },
      ],
    },
    {
      id: 'tributos-intendencia',
      h2: '¿Qué tributos tiene que tener al día una casa en Montevideo?',
      blocks: [
        { t: 'p', html: 'La contribución inmobiliaria y las tasas de la Intendencia de Montevideo, el impuesto de Primaria y, en apartamentos, los gastos comunes. El escribano pide los certificados antes de escriturar.' },
        { t: 'p', html: 'La contribución de Montevideo se puede consultar y pagar en línea con el número de padrón, y en cuotas. Si hay deuda, resolvela antes de publicar. Más en <a href="/uruguay/contribucion-inmobiliaria-uruguay/">contribución inmobiliaria y Primaria</a>.' },
        { t: 'callout', tone: 'warn', title: 'Antes de decidir', html: 'Información general. Consultá con un escribano o contador antes de tomar decisiones.' },
      ],
    },
    {
      id: 'vivienda-promovida-montevideo',
      h2: '¿Mi apartamento es de vivienda promovida?',
      blocks: [
        { t: 'p', html: 'En Montevideo se construyeron muchos edificios nuevos bajo el régimen de vivienda promovida, sobre todo en barrios centrales. Si el tuyo es uno de ellos, preguntale al escribano si tiene alguna condición vigente para la reventa antes de publicar.' },
      ],
    },
    {
      id: 'publicar-en-montevideo',
      h2: '¿Cómo publico mi casa de Montevideo?',
      blocks: [
        { t: 'p', html: 'Con el barrio bien puesto y el punto en el mapa: es como filtra el comprador montevideano. Publicar en Casa-Libre es gratis y las consultas te llegan por WhatsApp.' },
        { t: 'steps', items: [
          { title: 'Elegí el tipo y el barrio', html: 'Casa o apartamento, y el barrio como lo dice la gente: Pocitos, Malvín, Prado.' },
          { title: 'Fotos de día', html: 'En apartamentos, sumá la vista, el hall y los amenities.' },
          { title: 'Datos', html: 'Metros, dormitorios, garaje, gastos comunes y piso.' },
          { title: 'Precio en dólares', html: 'Comparado con tu barrio.' },
        ] },
        { t: 'casalibre',
          title: 'Por qué te recomendamos Casa-Libre',
          html: 'Casa-Libre es un marketplace inmobiliario donde inmobiliarias, agentes y propietarios publican casas, apartamentos y terrenos gratis, con extras pagos opcionales. Los interesados contactan directo por WhatsApp y no hay comisión sobre la venta. Está en la web y en apps para iPhone y Android.',
          button: 'Ver cómo vender en Casa-Libre',
          href: 'https://uy.casa-libre.com/vender' },
      ],
    },
  ],
  faq: [
    { q: '¿Cuánto vale mi casa en Montevideo?', a: 'Depende sobre todo del barrio, los metros, el estado y si tiene garaje. Compará con tres a cinco propiedades parecidas de tu barrio. Más en <a href="/uruguay/tasacion-de-inmuebles-uruguay/">tasación de inmuebles</a>.' },
    { q: '¿Dónde pago la contribución de mi casa en Montevideo?', a: 'A la Intendencia de Montevideo, en línea o en sus locales de pago, con el número de padrón.' },
    { q: '¿Qué papeles necesito para vender en Montevideo?', a: 'Los mismos que en todo el país: títulos, plano, certificados registrales y tributos al día. Ver <a href="/uruguay/requisitos-para-vender-una-casa-uruguay/">requisitos para vender una casa</a>.' },
    { q: '¿Dónde publico una casa en venta en Montevideo?', a: 'Te recomendamos Casa-Libre: publicar es gratis, el aviso aparece al buscar por Montevideo y en el mapa, y los interesados te escriben por WhatsApp.' },
  ],
  internalSources: [
    { label: 'Google autocomplete Uruguay, "vender casa en montevideo"', url: 'https://suggestqueries.google.com/complete/search?client=firefox&hl=es&gl=uy&q=vender%20casa%20en%20montevideo', date: '2026-11-13', note: '"casa para vender en montevideo". Contribución Montevideo queries: consulta deuda, cuotas, pago en linea.' },
    { label: 'lib/countries.js CL_CITY_PATHS uy', url: 'https://uy.casa-libre.com/venta/casas/montevideo', date: '2026-11-13', note: 'Verified paths: /venta/casas/montevideo, /venta/departamentos/montevideo.' },
  ],
  closing: {
    title: 'Tu casa de Montevideo, publicada hoy',
    text: 'Publicar en Casa-Libre es gratis. Los interesados te escriben directo por WhatsApp.',
    button: 'Publicar mi casa',
    href: 'https://uy.casa-libre.com/publicar',
  },
  related: ['alquiler-de-casas-en-montevideo', 'vender-casa-en-ciudad-de-la-costa', 'como-vender-un-apartamento-uruguay', 'requisitos-para-vender-una-casa-uruguay'],
};
