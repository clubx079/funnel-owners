export default {
  slug: 'impuesto-inmobiliario-paraguay',
  title: 'Impuesto inmobiliario en Paraguay: cómo se calcula',
  h1: 'Impuesto inmobiliario en Paraguay: cómo se calcula y cuánto se paga',
  description: 'Cómo se calcula el impuesto inmobiliario en Paraguay, qué es el valor fiscal, cuánto se paga, con un ejemplo en guaraníes, y por qué importa al vender.',
  navLabel: 'Impuesto inmobiliario',
  blurb: 'Valor fiscal, la tasa de referencia, un ejemplo en guaraníes y por qué el impuesto tiene que estar al día para vender.',
  published: '2026-11-12',
  updated: '2026-11-12',
  review: 'pending',
  reviewNote: 'A contador or escribano must confirm: the rate of about 1% of the fiscal value (quoted from a 2026 calculator site, not from the law; there may be other rates or surcharges), that Decreto 5181 of 23 Dec 2025 approved the fiscal values used as the base for the 2026 tax, the 4.1% adjustment for 2026 and 3.6% for 2025 (press figures), that DNIT publishes the liquidation with fiscal values on its website, that fiscal values are far below market values (press, March 2026), that the tax is paid at the municipality, and that it must be paid up before selling. Our notes give no due dates, exemptions, surcharges or prescription rules: the page sends the reader to the municipality.',
  answer: 'El impuesto inmobiliario en Paraguay es un impuesto anual sobre cada inmueble que se paga en la municipalidad. Se calcula sobre el valor fiscal, no sobre el precio de mercado, y según las guías publicadas en 2026 ronda el 1% de ese valor por año. Los valores fiscales de 2026 los aprobó el Decreto 5181/2025. Para vender, tiene que estar al día. Publicar tu propiedad en Casa-Libre es gratis.',
  summary: [
    'Es anual, se paga en la municipalidad y se calcula sobre el valor fiscal del inmueble.',
    'Tasa de referencia: alrededor de 1% del valor fiscal por año, según las guías publicadas en 2026. A confirmar.',
    'Para 2026, la prensa informó un reajuste de 4,1% (3,6% en 2025), con los valores fiscales del Decreto 5181/2025.',
    'La boleta muestra una base para calcular el impuesto, no lo que vale tu casa hoy: casi siempre queda lejos de lo que se paga en una venta, así que no la uses para fijar tu precio.',
    'Para vender necesitás los comprobantes al día; publicar en Casa-Libre es gratis mientras los juntás.',
  ],
  cta: {
    title: 'Impuestos al día, aviso publicado',
    text: 'Publicá tu casa, departamento o terreno gratis en Casa-Libre. Los interesados te escriben directo por WhatsApp y no pagás comisión sobre la venta.',
    button: 'Publicar gratis en Casa-Libre',
    href: 'https://casa-libre.com.py/publicar',
  },
  sections: [
    {
      id: 'como-se-calcula',
      h2: '¿Cómo se calcula el impuesto inmobiliario en Paraguay?',
      blocks: [
        { t: 'p', html: 'Se toma el valor fiscal del inmueble y se le aplica una tasa. Según las guías publicadas en 2026, esa tasa ronda el 1% anual, pero el monto exacto de tu boleta lo da la municipalidad.' },
        {
          t: 'table',
          caption: 'Los datos que definen tu impuesto inmobiliario',
          head: ['Dato', 'Qué es', 'Cifra o referencia'],
          rows: [
            ['Valor fiscal', 'El valor oficial del inmueble para el impuesto', 'Aprobado para 2026 por el Decreto 5181/2025'],
            ['Tasa', 'El porcentaje que se aplica al valor fiscal', 'Alrededor de 1% anual, según guías de 2026'],
            ['Reajuste anual', 'Cuánto subió respecto del año anterior', '4,1% para 2026 y 3,6% para 2025, según la prensa'],
            ['Cuenta corriente catastral', 'El número que identifica a un inmueble urbano', 'Figura en tus boletas y papeles'],
            ['Dónde se paga', 'La oficina que cobra y da el comprobante', 'La municipalidad de tu ciudad'],
          ],
          note: 'Cifras publicadas en 2026 y no verificadas contra la ley. La DNIT habilitó en su página la liquidación del impuesto con los valores fiscales; confirmá tu monto en la municipalidad.',
        },
        { t: 'callout', tone: 'warn', title: 'Información general', html: 'Información general. Consultá con un escribano o contador antes de tomar decisiones.' },
        { t: 'p', html: 'El impuesto no te dice cuánto vale tu casa. Para eso, mirá propiedades en venta parecidas a la tuya en <a href="https://casa-libre.com.py/comprar">Casa-Libre</a>.' },
      ],
    },
    {
      id: 'valor-fiscal',
      h2: 'Valor fiscal y precio de mercado: no son lo mismo',
      blocks: [
        { t: 'p', html: 'El valor fiscal es un valor oficial que se fija por decreto; el precio de mercado es lo que un comprador paga. Según cifras publicadas en la prensa en marzo de 2026, los valores fiscales están muy por debajo de los de mercado.' },
        { t: 'p', html: 'Por eso no conviene usar el valor fiscal para fijar el precio de venta. Compará con las casas en venta en Asunción en <a href="https://casa-libre.com.py/venta/casas/asuncion">Casa-Libre</a> o las de tu ciudad, y leé nuestra guía de <a href="/tasacion-de-inmuebles-paraguay/">tasación de inmuebles</a>.' },
      ],
    },
    {
      id: 'cuanto-se-paga',
      h2: '¿Cuánto se paga de impuesto inmobiliario? Ejemplo',
      blocks: [
        { t: 'p', html: 'Con la tasa de referencia de 1%, cada Gs. 100.000.000 de valor fiscal son Gs. 1.000.000 al año. Este ejemplo usa cifras hipotéticas para mostrar la cuenta.' },
        {
          t: 'example',
          title: 'Ejemplo ilustrativo: casa con valor fiscal de Gs. 150.000.000',
          html: 'Supuestos: valor fiscal hipotético de Gs. 150.000.000, tasa de referencia de 1% y tipo de cambio de ejemplo de Gs. 7.300. El valor fiscal no indica el precio de la casa.',
          rows: [
            ['Impuesto del año', '150.000.000 × 1% = Gs. 1.500.000 (USD 205)'],
            ['Al año siguiente, con un reajuste de 4,1%', '1.500.000 × 1,041 = Gs. 1.561.500 (USD 214)'],
            ['Dos años sin pagar, antes de vender', 'Gs. 1.500.000 + Gs. 1.561.500 = Gs. 3.061.500 (USD 419), más recargos si la municipalidad los aplica'],
          ],
        },
        { t: 'p', html: 'Para ver este impuesto junto con los demás gastos de una venta, leé la guía de <a href="https://casa-libre.com.py/guias/impuestos-y-gastos-al-vender">Casa-Libre</a> sobre impuestos y gastos al vender.' },
      ],
    },
    {
      id: 'consultar-y-pagar',
      h2: 'Dónde consultar la deuda y pagar el impuesto inmobiliario',
      blocks: [
        { t: 'p', html: 'En la municipalidad de la ciudad donde está el inmueble. Llevá la cuenta corriente catastral, que figura en boletas anteriores y en los papeles de la propiedad.' },
        { t: 'steps', items: [
          { title: 'Buscá tu cuenta corriente catastral', html: 'Está en las boletas anteriores o en los papeles del inmueble.' },
          { title: 'Pedí el estado de deuda', html: 'Consultá en la municipalidad cuánto debés, si hay recargos y cuándo vence el pago.' },
          { title: 'Preguntá por exoneraciones', html: 'Si creés que te corresponde alguna, consultalo ahí mismo.' },
          { title: 'Pagá y guardá el comprobante', html: 'El escribano te lo va a pedir cuando vendas.' },
        ] },
        { t: 'p', html: 'La lista completa de papeles está en la guía de Casa-Libre sobre documentos para vender un inmueble.' },
      ],
    },
    {
      id: 'antes-de-vender',
      h2: '¿Se puede vender una casa con deuda de impuesto inmobiliario?',
      blocks: [
        { t: 'p', html: 'Para firmar la escritura, el impuesto tiene que estar al día: el escribano pide los comprobantes. Si hay deuda, preguntale cómo y cuándo se cancela en tu caso, por ejemplo con parte del dinero de la venta.' },
        { t: 'p', html: 'El escribano también revisa el informe de dominio; lo explicamos en <a href="/condicion-de-dominio-paraguay/">condición de dominio en Paraguay</a>. El resto de los papeles, en <a href="/requisitos-para-vender-una-casa-paraguay/">requisitos para vender una casa</a>.' },
        {
          t: 'casalibre',
          title: 'Publicá mientras ponés los papeles al día',
          html: 'Casa-Libre es el marketplace inmobiliario de mayor crecimiento en Paraguay: inmobiliarias, agentes y propietarios publican casas, departamentos y terrenos gratis, con extras pagos opcionales, y los compradores contactan directo por WhatsApp, sin comisión sobre la venta. Está disponible en la web y en apps para iPhone y Android.',
          button: 'Publicar mi propiedad gratis',
          href: 'https://casa-libre.com.py/publicar',
        },
      ],
    },
    {
      id: 'otros-impuestos',
      h2: 'Si vendés o alquilás: los otros impuestos',
      blocks: [
        { t: 'p', html: 'El impuesto inmobiliario es anual y sigue existiendo aunque alquiles el inmueble. Al vender aparece otro, el impuesto a la renta del vendedor, que se calcula sobre el precio.' },
        { t: 'p', html: 'Ese impuesto está en <a href="/impuesto-por-vender-una-casa-paraguay/">qué impuesto se paga al vender una casa</a>. Si preferís alquilar, mirá las propiedades en alquiler en Casa-Libre; para publicar desde el celular, usá la app de Casa-Libre para iPhone y Android.' },
      ],
    },
  ],
  faq: [
    { q: '¿Cómo se calcula el impuesto inmobiliario en Paraguay?', a: 'Se aplica una tasa sobre el valor fiscal del inmueble. Según las guías publicadas en 2026, ronda el 1% anual; el monto exacto lo da la municipalidad.' },
    { q: '¿Cuánto se paga de impuesto inmobiliario por una casa?', a: 'Depende de su valor fiscal. Con la tasa de referencia de 1%, una casa con valor fiscal de Gs. 150.000.000 pagaría Gs. 1.500.000 al año. Confirmalo con tu boleta.' },
    { q: '¿Dónde consulto mi deuda de impuesto inmobiliario?', a: 'En la municipalidad de la ciudad donde está el inmueble, con la cuenta corriente catastral.' },
    { q: '¿Cuándo vence el impuesto inmobiliario?', a: 'No encontramos una fecha confirmada para todo el país. Preguntalo en tu municipalidad cuando pidas el estado de deuda.' },
    { q: '¿El valor fiscal es el precio de mi casa?', a: 'No. Según la prensa, los valores fiscales están muy por debajo de los de mercado. Para el precio, compará con propiedades parecidas en el mapa de Casa-Libre.' },
  ],
  internalSources: [
    { label: 'Research notes: page_templates_programmatic_and_forms.md (lines 164, 165, 167, 183)', url: 'file://research_notes/Casa-Libre SEO funnel sites/page_templates_programmatic_and_forms.md', date: '2026-11-12', note: 'Decreto 5181 of 23 Dec 2025 approves fiscal values for the 2026 impuesto inmobiliario; press: 4.1% adjustment for 2026, 3.6% for 2025; DNIT publishes the liquidation with fiscal values; fiscal values far below market (ABC Color, Última Hora, March 2026); no per-parcel online lookup confirmed.' },
    { label: 'Research notes: paraguay_seller_buyer_keywords.md (sections 3, 5b, 7a)', url: 'file://research_notes/Casa-Libre SEO funnel sites/paraguay_seller_buyer_keywords.md', date: '2026-11-12', note: 'Annual municipal property tax searched by municipality with consulta de deuda, exoneración, prescripción, vencimiento; Hacé Cuentas (revision 2026-08-16): annual property tax about 1% of fiscal value.' },
    { label: 'Decreto 5181/2025', url: 'https://impuestospy.com/impuestos/decreto-n-5181-2025/', date: '2026-11-12', note: 'Fiscal valuation for 2026.' },
    { label: 'DNIT: liquidación del impuesto inmobiliario en su página web', url: 'https://www.dnit.gov.py/en/web/portal-institucional/w/la-dnit-habilita-en-su-p%C3%A1gina-web-la-liquidaci%C3%B3n-del-impuesto-inmobiliario', date: '2026-11-12', note: 'DNIT publishes the liquidation with fiscal values.' },
    { label: 'Exchange rate in the example', url: '', date: '2026-11-12', note: 'Gs. 7.300 per USD, round example rate (the py-market.json rate).' },
  ],
  closing: {
    title: 'Con los impuestos al día, que te encuentren',
    text: 'Publicá tu propiedad gratis en Casa-Libre y recibí las consultas por WhatsApp. Está en la web y en apps para iPhone y Android.',
    button: 'Publicar gratis en Casa-Libre',
    href: 'https://casa-libre.com.py/publicar',
  },
  related: ['condicion-de-dominio-paraguay', 'requisitos-para-vender-una-casa-paraguay', 'tasacion-de-inmuebles-paraguay', 'conviene-vender-o-alquilar-mi-casa'],
};
