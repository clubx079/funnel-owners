import { cityMarket, cityMarketTable, snapshotDateEs, fmtUsd, localPerUsd } from '../../../lib/market.js';

// Numbers only from content/data/uy-market.json (Casa-Libre snapshot, asking rents). Pesos only as "aprox." at the file's rate.
const m = cityMarket('uy', 'montevideo');
const d = snapshotDateEs('uy');
const rApto = m.departamentos_alquiler_price_month;
const rCasa = m.casas_alquiler_price_month;
const uyu = (usd) => fmtUsd(Math.round((usd * localPerUsd('uy')) / 1000) * 1000).replace('USD', '$U');
const pct = (n) => String(n).replace('.', ',');

export default {
  slug: 'alquiler-de-casas-en-montevideo',
  group: 'Alquiler por ciudad',
  order: 1,
  city: 'montevideo',
  cityName: 'Montevideo',
  title: 'Alquiler de casas en Montevideo: cómo alquilar la tuya',
  h1: 'Alquiler de casas y apartamentos en Montevideo',
  description: 'Cómo alquilar tu casa o apartamento en Montevideo: qué buscan los inquilinos por barrio, garantías, precio en pesos, gastos comunes y dónde publicar gratis.',
  navLabel: 'Alquiler en Montevideo',
  blurb: 'Para propietarios: inquilinos por barrio, garantías y cómo publicar gratis un alquiler en Montevideo.',
  published: '2026-11-13',
  updated: '2026-11-13',
  review: 'pending',
  reviewNote: 'Local facts to check: tenant profiles by zone (students near the Universidad de la República faculties in Centro, Cordón, Parque Rodó; families in Malvín, Prado, Unión; professionals on the costa este); that long-term rents are mostly in pesos; that gastos comunes are normally paid by the tenant; guarantees as in the national page (BHU, Contaduría, seguros, garante, fondo público, sin garantía under Ley 19.889). 2026-11-13: rents, counts and gross yields only from content/data/uy-market.json via lib/market.js (asking rents on Casa-Libre, not signed contracts; listings priced in USD or converted at uyu_per_usd 40.3; pesos shown only as approximate). Check that saying rents are mostly agreed in pesos still fits alongside USD figures.',
  answer: `Para alquilar tu casa o apartamento en Montevideo, compará con propiedades parecidas de tu barrio, decidí qué garantías aceptás y publicá el precio, los gastos comunes y la fecha de ingreso. Según los avisos publicados en Casa-Libre al ${d} (precios pedidos), los apartamentos en alquiler en Montevideo piden una mediana de ${fmtUsd(rApto.median_usd)} por mes, unos ${uyu(rApto.median_usd)} aprox. Podés publicar gratis en Casa-Libre.`,
  summary: [
    `${m.for_rent.total} avisos en alquiler en Montevideo en Casa-Libre al ${d}; la mitad central de los apartamentos pide entre ${fmtUsd(rApto.p25_usd)} y ${fmtUsd(rApto.p75_usd)} por mes.`,
    'El inquilino de Montevideo busca por barrio, ómnibus y cercanía al trabajo o al estudio.',
    'El precio se pacta casi siempre en pesos, con reajuste anual; los gastos comunes suelen ir aparte.',
    'Aceptar varias garantías amplía mucho el público.',
  ],
  cta: {
    title: 'Publicá tu alquiler en Montevideo',
    text: 'Fotos, precio, gastos y garantías en Casa-Libre. Los interesados te escriben a tu WhatsApp.',
    button: 'Publicar mi alquiler',
    href: 'https://uy.casa-libre.com/publicar',
  },
  sections: [
    {
      id: 'quien-alquila',
      h2: '¿Quién alquila en Montevideo y qué busca?',
      blocks: [
        { t: 'p', html: 'Depende mucho del barrio. Conocer al inquilino típico de tu zona te ayuda a escribir el aviso y a decidir si conviene amoblar o no.' },
        { t: 'table',
          caption: 'Inquilinos habituales por zona en Montevideo',
          head: ['Zona', 'Quién suele alquilar', 'Qué pregunta primero'],
          rows: [
            ['Centro, Cordón, Parque Rodó', 'Estudiantes, gente joven, quienes trabajan en el centro', 'Precio total con gastos, ómnibus, amoblado'],
            ['Pocitos, Punta Carretas, Buceo', 'Profesionales, parejas, extranjeros', 'Garaje, amenities, cercanía a la rambla'],
            ['Malvín, Carrasco, Punta Gorda', 'Familias', 'Dormitorios, patio, escuelas cerca'],
            ['Prado, La Blanqueada, Unión', 'Familias y parejas', 'Casa con fondo, garaje, precio'],
          ],
          note: 'Orientación general, sin cifras.' },
      ],
    },
    {
      id: 'precio-montevideo',
      h2: '¿Cuánto cobrar de alquiler en Montevideo?',
      blocks: [
        { t: 'p', html: 'Lo que piden propiedades parecidas en tu barrio. En Montevideo el inquilino suma alquiler y gastos comunes, así que un apartamento con gastos altos tiene que compensar con el precio.' },
        { t: 'p', html: `Como referencia de toda la ciudad, los apartamentos en alquiler publicados en Casa-Libre al ${d} piden una mediana de ${fmtUsd(rApto.median_usd)} por mes (unos ${uyu(rApto.median_usd)} aprox.), sobre ${rApto.listings_with_price} avisos con precio. Son precios pedidos, no los montos de contratos firmados.` },
        cityMarketTable('uy', 'montevideo', { sale: false }),
        { t: 'p', html: `La mitad central de los apartamentos va de ${fmtUsd(rApto.p25_usd)} a ${fmtUsd(rApto.p75_usd)} por mes. En general, abajo quedan los monoambientes y apartamentos de un dormitorio en el Centro o el Cordón, y arriba las unidades con garaje y amenities en la costa este. En casas hay menos avisos (${rCasa.listings_with_price} con precio) y la mediana de ${fmtUsd(rCasa.median_usd)} es solo una referencia.` },
        { t: 'p', html: `Si estás entre alquilar y vender, una cuenta gruesa: el alquiler mediano de un año dividido por el precio de venta mediano pedido da ${pct(m.departamento_gross_rent_yield_pct)}% bruto en apartamentos y ${pct(m.casa_gross_rent_yield_pct)}% en casas. No descuenta gastos comunes, contribución, impuestos ni meses vacíos.` },
        { t: 'p', html: 'Para comparar, mirá los apartamentos en alquiler en Montevideo en <a href="https://uy.casa-libre.com/alquiler/departamentos/montevideo">Casa-Libre</a> y, si es una casa, las casas en alquiler de la ciudad en <a href="https://uy.casa-libre.com/alquiler/casas/montevideo">Casa-Libre</a>. El método completo está en <a href="/uruguay/cuanto-cobrar-de-alquiler-uruguay/">cuánto cobrar de alquiler</a>.' },
      ],
    },
    {
      id: 'garantias-y-contrato',
      h2: '¿Qué garantía y qué contrato uso en Montevideo?',
      blocks: [
        { t: 'p', html: 'Las mismas que en todo el país: depósito en el BHU, garantía de Contaduría, seguro de alquiler, garante con propiedad o el régimen sin garantía. En una ciudad con muchos estudiantes y gente joven, aceptar seguros y Contaduría amplía el público.' },
        { t: 'p', html: 'El detalle está en <a href="/uruguay/garantia-de-alquiler-uruguay/">garantía de alquiler</a> y en <a href="/uruguay/contrato-de-alquiler-uruguay/">contrato de alquiler</a>.' },
        { t: 'callout', tone: 'warn', title: 'Antes de decidir', html: 'Información general. Consultá con un escribano o contador antes de tomar decisiones.' },
      ],
    },
    {
      id: 'amoblado',
      h2: '¿Conviene alquilar amoblado en Montevideo?',
      blocks: [
        { t: 'p', html: 'En monoambientes y apartamentos chicos cerca del centro y de las facultades, muchas veces sí: buena parte de quienes buscan llegan del interior o del exterior sin muebles. En casas para familias, en general no.' },
        { t: 'p', html: 'Si amoblás, hacé un inventario con fotos de cada mueble y artefacto, y anexalo al contrato.' },
      ],
    },
    {
      id: 'aviso-montevideo',
      h2: '¿Qué tiene que decir el aviso de un alquiler en Montevideo?',
      blocks: [
        { t: 'p', html: 'Barrio, precio en pesos, gastos comunes, garantías aceptadas, fecha de ingreso y transporte cercano. Con esos datos el inquilino sabe si le sirve antes de escribir.' },
        { t: 'ul', items: [
          'Ejemplo de título: "Apartamento 1 dormitorio en Cordón, a 2 cuadras de 18 de Julio".',
          'Aclará si los gastos comunes incluyen calefacción o agua.',
          'Decí si se aceptan mascotas.',
        ] },
      ],
    },
    {
      id: 'publicar-alquiler-montevideo',
      h2: '¿Dónde publico mi alquiler en Montevideo?',
      blocks: [
        { t: 'p', html: 'Te recomendamos Casa-Libre: publicás gratis, el aviso aparece al buscar alquileres en Montevideo y en el mapa, y cada interesado te escribe por WhatsApp.' },
        { t: 'casalibre',
          title: 'Por qué te recomendamos Casa-Libre',
          html: 'Casa-Libre es un marketplace inmobiliario donde inmobiliarias, agentes y propietarios publican casas, apartamentos y terrenos gratis, con extras pagos opcionales. Los interesados contactan directo por WhatsApp y no hay comisión sobre la venta. Está en la web y en apps para iPhone y Android. En un alquiler tampoco cobra comisión.',
          button: 'Ver la administración de propiedades',
          href: 'https://uy.casa-libre.com/administracion-de-propiedades' },
      ],
    },
  ],
  faq: [
    { q: '¿Cuánto se pide de alquiler por un apartamento en Montevideo?', a: `En los avisos de Casa-Libre al ${d}, una mediana de ${fmtUsd(rApto.median_usd)} por mes (unos ${uyu(rApto.median_usd)} aprox.; precios pedidos, no de cierre). Tu precio depende del barrio, los dormitorios, el garaje y los gastos.` },
    { q: '¿Cuánto cuesta alquilar en Montevideo?', a: 'Depende del barrio, el tamaño y los gastos comunes. Para ver precios actuales, compará avisos parecidos al tuyo en tu barrio.' },
    { q: '¿Se puede alquilar sin garantía en Montevideo?', a: 'Sí, con el régimen de la Ley 19.889, que vale en todo el país. El contrato tiene requisitos propios.' },
    { q: '¿Quién paga los gastos comunes en un alquiler?', a: 'Habitualmente el inquilino, salvo que el contrato diga otra cosa.' },
    { q: '¿Dónde publico mi casa en alquiler en Montevideo?', a: 'Te recomendamos Casa-Libre: es gratis y los interesados te escriben directo por WhatsApp, sin comisión.' },
  ],
  internalSources: [
    { label: 'Google autocomplete Uruguay, "alquiler de casas en montevideo"', url: 'https://suggestqueries.google.com/complete/search?client=firefox&hl=es&gl=uy&q=alquiler%20de%20casas%20en%20montevideo', date: '2026-11-13', note: 'uruguay; 3 dormitorios; baratas; sin garantia; atahualpa; palermo; cerro.' },
    { label: 'lib/countries.js CL_CITY_PATHS uy', url: 'https://uy.casa-libre.com/alquiler/casas/montevideo', date: '2026-11-13', note: 'Verified: /alquiler/casas/montevideo, /alquiler/departamentos/montevideo.' },
  ],
  closing: {
    title: 'Tu alquiler en Montevideo, publicado hoy',
    text: 'Publicar en Casa-Libre es gratis. Te escriben directo por WhatsApp.',
    button: 'Publicar mi alquiler',
    href: 'https://uy.casa-libre.com/publicar',
  },
  related: ['vender-casa-en-montevideo', 'garantia-de-alquiler-uruguay', 'como-alquilar-mi-casa-uruguay'],
};
