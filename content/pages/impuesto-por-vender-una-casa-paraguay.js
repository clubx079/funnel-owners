export default {
  slug: 'impuesto-por-vender-una-casa-paraguay',
  title: 'Qué impuesto se paga al vender una casa en Paraguay',
  h1: 'Qué impuesto se paga al vender una casa en Paraguay',
  description: 'El IRP al vender una casa en Paraguay: 8% sobre una renta presunta del 30% o la ganancia real, quién lo retiene, el IVA y un ejemplo en guaraníes.',
  navLabel: 'Impuesto por vender',
  blurb: 'El impuesto a la renta del vendedor, cómo se calcula, quién lo retiene, el IVA y un ejemplo con números.',
  published: '2026-11-12',
  updated: '2026-11-12',
  review: 'pending',
  reviewNote: 'A contador must confirm: seller IRP-RGC 8% on the lower of a presumed 30% of the sale price or the real gain (about 2.4% of the price on the presumed base), the older 3% figure, that the escribano withholds it at signing (2026 guides) and how that combines with Form 516 and the annual liquidation in March (DNIT), what counts as the real gain (the page only says price minus purchase cost and leaves the rest to the contador), and the IVA statements (the page states no IVA rule for property sales; only that an agency commission of 3% to 5.5% carries IVA, per 2026 press figures). Also confirm the total of 4.2% to 5.55% of the price in the FAQ, and the municipal transfer tax 0.3% Asunción / 0.2% interior and that who pays it is agreed.',
  answer: 'En Paraguay, el vendedor de una casa paga el Impuesto a la Renta Personal (IRP): 8% sobre una renta presunta del 30% del precio, alrededor de 2,4% del precio de venta, según las guías publicadas en 2026. La base es el menor valor entre ese 30% y la ganancia real, así que puede ser menos. El escribano lo retiene al firmar. Algunas publicaciones anteriores hablan de 3%: confirmalo con un contador.',
  summary: [
    'IRP del vendedor: 8% sobre el menor valor entre el 30% del precio y la ganancia real; con la base presunta, alrededor de 2,4% del precio.',
    'Según las guías de 2026, lo retiene el escribano al firmar. DNIT menciona el Formulario 516 y una liquidación anual en marzo.',
    'Además: impuesto municipal a la transferencia (0,3% en Asunción, 0,2% en el interior) e impuesto inmobiliario al día.',
    'IVA y factura en la venta de una casa: sin regla confirmada; consultá con un contador.',
  ],
  cta: {
    title: 'El impuesto se paga cuando vendés. Primero, el comprador.',
    text: 'Publicá tu casa gratis en Casa-Libre. Sin comisión sobre la venta: lo único que pagás son los impuestos y gastos legales.',
    button: 'Publicar gratis en Casa-Libre',
    href: 'https://casa-libre.com.py/publicar',
  },
  sections: [
    {
      id: 'que-impuesto',
      h2: '¿Qué impuestos se pagan al vender una casa en Paraguay?',
      blocks: [
        { t: 'p', html: 'El impuesto principal del vendedor es el IRP sobre la ganancia de la venta. Alrededor de la escritura hay además un impuesto municipal a la transferencia, y el impuesto inmobiliario tiene que estar pagado.' },
        {
          t: 'table',
          caption: 'Impuestos en la venta de una casa en Paraguay',
          head: ['Impuesto', 'Cifra de referencia', 'Quién lo paga'],
          rows: [
            ['Impuesto a la Renta Personal (IRP)', '8% sobre el menor valor entre el 30% del precio y la ganancia real: hasta alrededor de 2,4% del precio. Algunas publicaciones anteriores hablan de 3%', 'El vendedor'],
            ['Impuesto municipal a la transferencia', '0,3% en Asunción y 0,2% en el interior', 'Se pacta entre las partes'],
            ['Impuesto inmobiliario anual', 'Sin cifra única: consultá tu deuda en la municipalidad', 'El titular, al día antes de vender'],
            ['IVA', 'Sin regla confirmada para la venta de una casa; sí se cobra sobre la comisión de una inmobiliaria', 'Consultá con un contador'],
          ],
          note: 'Cifras que citan las guías publicadas en 2026 y la referencia tributaria de DNIT, consultadas en noviembre de 2026. No fueron verificadas contra las leyes: un contador debe confirmarlas.',
        },
        { t: 'callout', tone: 'warn', title: 'Información general', html: 'Información general. Consultá con un escribano o contador antes de tomar decisiones.' },
        { t: 'p', html: 'Todos estos montos dependen del precio, así que empezá por uno realista: mirá casas en venta parecidas a la tuya en <a href="https://casa-libre.com.py/comprar">Casa-Libre</a>.' },
      ],
    },
    {
      id: 'como-se-calcula',
      h2: '¿Cuánto se paga de impuesto por vender una casa?',
      blocks: [
        { t: 'p', html: 'El IRP es 8% sobre una base que se elige así: el menor valor entre el 30% del precio de venta (la renta presunta) y la ganancia real. Si ganaste poco, por ejemplo porque compraste caro hace poco, la base puede ser menor y el impuesto también.' },
        { t: 'ul', items: [
          '<strong>Renta presunta:</strong> 30% del precio de venta. Con ella, el impuesto da alrededor de 2,4% del precio.',
          '<strong>Ganancia real:</strong> en términos simples, el precio de venta menos lo que te costó la casa. Qué costos se pueden restar lo define tu contador.',
          '<strong>La cifra de 3%:</strong> todavía circula en publicaciones anteriores. Las guías de 2026 usan 2,4%.',
        ] },
        {
          t: 'example',
          title: 'Ejemplo ilustrativo: venta de una casa por Gs. 700.000.000 (USD 100.000)',
          html: 'Supuestos: Gs. 7.000 por dólar (tipo de cambio de ejemplo), dos precios de compra inventados y ganancia real calculada solo como precio de venta menos precio de compra.',
          rows: [
            ['Renta presunta', '700.000.000 × 30%', 'Gs. 210.000.000 (USD 30.000)'],
            ['Caso A: compraste por Gs. 420.000.000', 'Ganancia real 280.000.000, mayor que la presunta: se usa 210.000.000 × 8%', 'Gs. 16.800.000 (USD 2.400)'],
            ['Caso B: compraste por Gs. 630.000.000', 'Ganancia real 70.000.000, menor que la presunta: 70.000.000 × 8%', 'Gs. 5.600.000 (USD 800)'],
            ['Con la cifra anterior de 3%', '700.000.000 × 3%', 'Gs. 21.000.000 (USD 3.000)'],
          ],
        },
        { t: 'p', html: 'Para el caso B necesitás probar lo que pagaste: guardá la escritura de compra y los comprobantes. Repetí la cuenta con tu precio después de mirar las casas publicadas en tu zona en el mapa de <a href="https://casa-libre.com.py/propiedades">Casa-Libre</a>.' },
      ],
    },
    {
      id: 'quien-lo-retiene',
      h2: '¿Quién retiene el impuesto y cuándo se declara?',
      blocks: [
        { t: 'p', html: 'Según las guías publicadas en 2026, el escribano retiene el impuesto del vendedor en el momento de la firma, de modo que sale del precio que recibís. La referencia de DNIT, la administración tributaria que antes se llamaba SET, indica además que el IRP se declara en el Formulario 516, con liquidación anual en marzo.' },
        { t: 'p', html: 'Cómo se combinan la retención y la declaración en tu caso lo explica un contador. Preguntale antes de firmar cuánto te van a retener, y pedile al escribano el comprobante. El resto de lo que hace el escribano está en <a href="/cuanto-cobra-escribano-paraguay/">cuánto cobra un escribano</a>, y el resumen de Casa-Libre en su <a href="https://casa-libre.com.py/guias/impuestos-y-gastos-al-vender">guía de impuestos y gastos al vender</a>.' },
      ],
    },
    {
      id: 'iva-y-factura',
      h2: 'IVA en la venta de inmuebles y cómo facturar',
      blocks: [
        { t: 'p', html: 'Las guías que consultamos sobre la venta de una casa particular hablan del IRP, no del IVA, y no tenemos una regla confirmada sobre IVA o factura para ese caso. Donde sí aparece el IVA es en la comisión de una inmobiliaria: de 3% a 5,5% más IVA, según cifras publicadas en la prensa en 2026.' },
        { t: 'p', html: 'Si vendés como empresa, si te dedicás a comprar y vender inmuebles o si te preguntan cómo facturar la venta, consultá con un contador antes de cerrar el precio. Para inmobiliarias y agentes, Casa-Libre tiene una cuenta de empresa para publicar propiedades.' },
      ],
    },
    {
      id: 'otros-gastos',
      h2: 'Otros impuestos y gastos de la venta',
      blocks: [
        { t: 'p', html: 'El IRP no es lo único: hay honorarios del escribano, inscripción en el registro, impuesto municipal y, si vendés con una inmobiliaria, su comisión. La lista completa, con quién paga cada uno, está en nuestra guía de <a href="/gastos-al-vender-una-casa-paraguay/">gastos al vender una casa</a>.' },
        { t: 'p', html: 'El impuesto inmobiliario anual tiene que estar al día antes de vender; cómo se calcula lo explica la guía del <a href="/impuesto-inmobiliario-paraguay/">impuesto inmobiliario</a>. Y los pasos de la escritura, la de <a href="/transferencia-de-inmueble-paraguay/">transferencia de inmueble</a>.' },
        {
          t: 'casalibre',
          title: 'Sin comisión sobre la venta',
          html: 'Publicar en Casa-Libre es gratis y no hay comisión sobre la venta. Los únicos gastos que te quedan son los impuestos y los gastos legales.',
          button: 'Ver cómo funciona Casa-Libre',
          href: 'https://casa-libre.com.py/como-funciona',
        },
      ],
    },
    {
      id: 'publicar',
      h2: 'Primero vendé, después pagás: publicá tu casa',
      blocks: [
        { t: 'p', html: 'El impuesto se paga recién al firmar la escritura, cuando ya hay comprador. El primer paso es que los compradores vean tu casa.' },
        { t: 'callout', tone: 'tip',
          title: 'Encontrá al comprador sin gastar',
          html: 'Casa-Libre es el marketplace inmobiliario de mayor crecimiento en Paraguay: inmobiliarias, agentes y propietarios publican casas, departamentos y terrenos gratis, con extras pagos opcionales, y los compradores contactan directo por WhatsApp, sin comisión sobre la venta. Está disponible en la web y en apps para iPhone y Android.' },
        { t: 'p', html: 'Podés manejar el aviso con la app de Casa-Libre para iPhone y Android, y preparar el resto de la venta con la guía de Casa-Libre para vender tu casa.' },
      ],
    },
  ],
  faq: [
    { q: '¿Cuánto se paga de impuesto por vender una casa en Paraguay?', a: 'Según las guías de 2026, el IRP del vendedor es 8% sobre una renta presunta del 30% del precio, alrededor de 2,4%. Si la ganancia real es menor, la base puede ser esa. Confirmalo con un contador.' },
    { q: '¿El impuesto a la venta de inmuebles es 3% o 2,4%?', a: 'Las guías publicadas en 2026 hablan de alrededor de 2,4% (8% sobre el 30% del precio); el 3% aparece en publicaciones anteriores. Confirmalo con un contador.' },
    { q: '¿La venta de una casa lleva IVA en Paraguay?', a: 'No tenemos una regla confirmada para la venta de una casa particular. Si vendés como empresa o de forma habitual, consultá con un contador.' },
    { q: '¿Quién paga el impuesto a la transferencia de inmuebles?', a: 'El IRP lo paga el vendedor. El impuesto municipal a la transferencia, de 0,3% en Asunción y 0,2% en el interior según las guías de 2026, se pacta entre las partes.' },
    { q: '¿Cuánto cuesta vender una casa en total?', a: 'Sumando escritura e impuesto del vendedor, las cifras de referencia dan entre 4,2% y 5,55% del precio. Casa-Libre no suma nada: lo explican sus preguntas frecuentes.' },
  ],
  internalSources: [
    { label: 'Research notes: paraguay_seller_buyer_keywords.md (lines 511 to 513, 5b)', url: 'file://research_notes/Casa Libre SEO funnel sites/paraguay_seller_buyer_keywords.md', date: '2026-11-12', note: 'IRP 8% on a presumed 30% (about 2.4%) withheld by the escribano at signing; older 3% figure; DNIT formerly SET; commission 3% to 5.5% plus 10% IVA; municipal transfer tax 0.3% / 0.2%. Searches: iva venta de inmuebles paraguay; venta de inmuebles como facturar. The notes give no IVA rule for property sales.' },
    { label: 'Research notes: page_templates_programmatic_and_forms.md (line 171)', url: 'file://research_notes/Casa Libre SEO funnel sites/page_templates_programmatic_and_forms.md', date: '2026-11-12', note: 'IRP-RGC 8%; base is the lower of 30% of the sale price (presumed) or the real gain; Form 516, annual liquidation in March (DNIT, PwC Tax Summaries).' },
    { label: 'transferencia-de-inmueble-paraguay.js', url: '', date: '2026-11-12', note: 'Total 4.2% to 5.55% of the price (escritura 1.8% to 3.15% plus IRP 2.4%), same wording.' },
    { label: 'Exchange rate and purchase prices in the example', url: '', date: '2026-11-12', note: 'Gs. 7.000 per USD and both purchase prices are hypothetical.' },
  ],
  closing: {
    title: 'El impuesto viene al final. Empezá por publicar.',
    text: 'Publicá tu casa gratis en Casa-Libre y recibí las consultas por WhatsApp. Está en la web y en apps para iPhone y Android.',
    button: 'Publicar gratis en Casa-Libre',
    href: 'https://casa-libre.com.py/publicar',
  },
  related: ['requisitos-para-vender-una-casa-paraguay', 'tasacion-de-inmuebles-paraguay', 'como-vender-mi-casa-sin-inmobiliaria', ''],
};
