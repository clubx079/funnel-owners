export default {
  slug: 'anticipo-de-islr-venta-de-inmueble',
  group: 'Impuestos y gastos',
  nav: 'Impuestos',
  order: 1,
  equivalentOf: 'impuesto-por-vender-una-casa-paraguay',
  title: 'Anticipo de ISLR por venta de inmueble en Venezuela',
  h1: 'Anticipo de ISLR por la venta de un inmueble en Venezuela',
  description: 'Qué impuesto se paga al vender una casa en Venezuela: el anticipo de ISLR del 0,5% con la Forma 33, la vivienda principal y un ejemplo con números.',
  navLabel: 'Anticipo de ISLR',
  blurb: 'El anticipo de ISLR al vender una casa en Venezuela: cuánto es, cómo se paga con la Forma 33 y la vivienda principal.',
  published: '2026-11-13',
  updated: '2026-11-13',
  review: 'pending',
  reviewNote: 'A Venezuelan accountant or lawyer must check: the 0.5% anticipo of ISLR on the sale price for personas naturales, paid with the Forma 33 at SENIAT before protocolisation; that the Registro asks for it; the vivienda principal regime (registro de vivienda principal at SENIAT, the reinvestment rule and any age-based exemption in the current Ley de ISLR, article numbers); that the anticipo is credited in the annual ISLR return; and the different treatment for personas jurídicas. The worked example uses round hypothetical numbers.',
  answer: 'Cuando una persona natural vende un inmueble en Venezuela, paga un anticipo del impuesto sobre la renta (ISLR) del 0,5% del precio de venta, con la Forma 33 del SENIAT, antes de firmar en el Registro. Si la casa está registrada como tu vivienda principal, la venta puede tener un tratamiento especial. El anticipo luego se descuenta en tu declaración anual. Puedes publicar tu casa gratis en Casa-Libre.',
  summary: [
    'El anticipo de ISLR para personas naturales es del 0,5% del precio de venta.',
    'Se declara y paga con la Forma 33 del SENIAT, antes de protocolizar el documento.',
    'Si vendes tu vivienda principal registrada ante el SENIAT, el anticipo puede no aplicar.',
    'El anticipo no es un gasto perdido: se imputa al ISLR del año en tu declaración.',
  ],
  cta: {
    title: 'Publica tu casa gratis',
    text: 'En Casa-Libre no pagas comisión sobre la venta. Los interesados te escriben directo por WhatsApp.',
    button: 'Publicar mi casa',
    href: 'https://casa-libre.com.ve/publicar',
  },
  sections: [
    {
      id: 'que-impuesto-se-paga',
      h2: '¿Qué impuesto se paga al vender una casa en Venezuela?',
      blocks: [
        { t: 'p', html: 'El impuesto propio de la venta es el anticipo de ISLR que paga quien vende. Además hay tasas de la notaría y del Registro, que no son impuestos sobre la ganancia sino costos del trámite.' },
        { t: 'table',
          caption: 'Lo que se paga al vender, según quién vende',
          head: ['Caso', 'Qué se presenta', 'Monto'],
          rows: [
            ['Persona natural, casa que no es vivienda principal', 'Forma 33 (anticipo de ISLR)', '0,5% del precio de venta'],
            ['Persona natural, vivienda principal registrada', 'Constancia de registro de vivienda principal ante el SENIAT', 'Según el régimen de la ley; puede no pagar anticipo'],
            ['Empresa (persona jurídica)', 'Régimen de retenciones y declaración de la empresa', 'Consulta con su contador'],
          ],
          note: 'Información general al 13 de noviembre de 2026. Confirma la tasa y el formulario vigentes con el SENIAT o con un contador.' },
        { t: 'callout', tone: 'warn', title: 'Antes de decidir', html: 'Información general. Consulta con un abogado o un contador antes de tomar decisiones.' },
      ],
    },
    {
      id: 'forma-33',
      h2: '¿Qué es la Forma 33 y cómo se paga?',
      blocks: [
        { t: 'p', html: 'La Forma 33 es la declaración de enajenación de inmuebles del SENIAT. Se llena en línea con los datos de la venta y genera la planilla de pago del anticipo.' },
        { t: 'steps', items: [
          { title: 'Ten tu RIF vigente', html: 'La declaración se hace con el usuario del portal fiscal de quien vende.' },
          { title: 'Llena la Forma 33', html: 'Con los datos del inmueble, del comprador y el precio que dirá el documento.' },
          { title: 'Paga la planilla', html: 'En un banco autorizado, antes de la firma.' },
          { title: 'Lleva el comprobante al Registro', html: 'El Registro suele pedirlo para protocolizar la venta.' },
        ] },
      ],
    },
    {
      id: 'vivienda-principal',
      h2: '¿Si vendo mi vivienda principal pago el anticipo?',
      blocks: [
        { t: 'p', html: 'La ley de ISLR da un trato especial a la venta de la vivienda principal: si la casa está registrada como tal ante el SENIAT, la venta puede quedar sin anticipo, bajo ciertas condiciones.' },
        { t: 'ul', items: [
          'La casa debe estar registrada como vivienda principal ante el SENIAT; el trámite se hace en línea.',
          'La ley contempla condiciones, como reinvertir el dinero en otra vivienda principal dentro de un plazo, o casos según la edad del vendedor.',
          'Si no cumples las condiciones, se paga el anticipo normal con la Forma 33.',
        ] },
        { t: 'p', html: 'Como las condiciones dependen de tu caso, confírmalas con un contador antes de fijar el precio neto que esperas recibir.' },
      ],
    },
    {
      id: 'ejemplo',
      h2: 'Ejemplo: cuánto es el anticipo en una venta',
      blocks: [
        { t: 'p', html: 'El cálculo es simple: el 0,5% del precio del documento. Si el precio se pacta en dólares, el monto se declara en bolívares a la tasa oficial del día.' },
        { t: 'example',
          title: 'Ejemplo ilustrativo: casa vendida por USD 60.000',
          html: 'Precio pactado: USD 60.000. Anticipo: 60.000 × 0,5% = USD 300, que se paga en bolívares al tipo de cambio oficial del BCV del día de la declaración.',
          rows: [['Precio de venta', 'USD 60.000'], ['Tasa del anticipo', '0,5%'], ['Anticipo de ISLR', 'USD 300 (en bolívares)']] },
      ],
    },
    {
      id: 'otros-gastos',
      h2: '¿Qué otros gastos tiene la venta?',
      blocks: [
        { t: 'p', html: 'Aparte del anticipo, están el abogado, la notaría de la opción de compra, el Registro y las solvencias atrasadas. La lista completa está en <a href="/venezuela/gastos-al-vender-una-casa-venezuela/">gastos al vender una casa</a>, y las tasas del Registro en <a href="/venezuela/cuanto-cuesta-registrar-una-casa-venezuela/">cuánto cuesta registrar una casa</a>.' },
        { t: 'p', html: 'También tienes un resumen en la guía de impuestos y gastos de <a href="https://casa-libre.com.ve/guias/impuestos-y-gastos-al-vender">Casa-Libre</a>.' },
      ],
    },
    {
      id: 'publicar',
      h2: 'Publicar tu casa no suma impuestos',
      blocks: [
        { t: 'p', html: 'Publicar en Casa-Libre es gratis y no hay comisión sobre la venta, así que lo que pagas al vender son los trámites legales y el anticipo.' },
        { t: 'p', html: 'Antes de publicar, revisa los <a href="/venezuela/requisitos-para-vender-una-casa-venezuela/">requisitos para vender</a> y luego carga tu aviso en <a href="https://casa-libre.com.ve/vender">Casa-Libre</a>.' },
      ],
    },
  ],
  faq: [
    { q: '¿Cuánto es el anticipo de ISLR por venta de inmueble?', a: 'El 0,5% del precio de venta para personas naturales. Se paga con la Forma 33 antes de protocolizar.' },
    { q: '¿Quién paga el anticipo de ISLR, el comprador o el vendedor?', a: 'Quien vende. Es un adelanto de su impuesto sobre la renta, que luego descuenta en su declaración anual.' },
    { q: '¿Qué es el registro de vivienda principal en el SENIAT?', a: 'Es la inscripción de tu casa como vivienda principal. Sirve para acogerte al trato especial que la ley da a la venta de la vivienda principal.' },
    { q: '¿Se paga el anticipo si vendo en dólares?', a: 'Sí. El precio en dólares se declara por su equivalente en bolívares al tipo de cambio oficial.' },
    { q: '¿El anticipo es el único impuesto?', a: 'Es el impuesto de la venta. Aparte están las tasas de Registro y notaría y lo que debas a la alcaldía.' },
  ],
  internalSources: [
    { label: 'Google autocomplete gl=ve', url: 'https://suggestqueries.google.com/complete/search?client=firefox&hl=es&gl=ve&q=forma%2033', date: '2026-11-13', note: 'forma 33 seniat; forma 33 cuanto se paga; anticipo de islr en venezuela; vivienda principal seniat requisitos.' },
    { label: 'Expat Focus: Venezuela selling property', url: 'https://www.expatfocus.com/venezuela/guide/venezuela-selling-property', date: '2026-11-13', note: 'Forma 33 payment equivalent to 0.5% of the value when there is no principal residence registration.' },
  ],
  closing: {
    title: 'Con los números claros, publica',
    text: 'Publica tu casa gratis en Casa-Libre y recibe las consultas directo en tu WhatsApp.',
    button: 'Publicar en Casa-Libre',
    href: 'https://casa-libre.com.ve/publicar',
  },
  related: ['gastos-al-vender-una-casa-venezuela', 'cuanto-cuesta-registrar-una-casa-venezuela', 'requisitos-para-vender-una-casa-venezuela'],
};
