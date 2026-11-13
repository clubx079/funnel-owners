export default {
  slug: 'transferencia-de-inmueble-bolivia',
  group: 'Papeles y trámites',
  order: 3,
  equivalentOf: 'transferencia-de-inmueble-paraguay',
  title: 'Transferencia de inmueble en Bolivia: trámite paso a paso',
  h1: 'Transferencia de inmueble en Bolivia: el trámite',
  description: 'El trámite de transferencia de un inmueble en Bolivia paso a paso: minuta, notario de fe pública, impuesto municipal a la transferencia, Derechos Reales y catastro.',
  navLabel: 'Transferencia',
  blurb: 'El trámite completo de transferencia de una casa en Bolivia, desde la minuta hasta Derechos Reales.',
  published: '2026-11-13',
  updated: '2026-11-13',
  review: 'pending',
  reviewNote: 'A Bolivian notario/lawyer must check the sequence: minuta signed by a lawyer → protocolization by notario de fe pública → IMT liquidation at the municipality (3%, due within 10 business days of the transaction per DS 24054 reading) → inscription at Derechos Reales → change of owner in municipal catastro/tax register. Confirm order varies by municipality and whether DDRR requires the IMT receipt before inscription. 2026-11-13 added after-signing checklist (copies, change of utility titular, handover act, check inscription).',
  answer: 'La transferencia de un inmueble en Bolivia se hace en cinco pasos: el abogado redacta la minuta de compraventa, vendedor y comprador la firman, el notario de fe pública la protocoliza y emite el testimonio, el municipio liquida el impuesto municipal a la transferencia (IMT) y, con ese pago, Derechos Reales inscribe al comprador. Al final, el catastro municipal registra al nuevo dueño. Para encontrar comprador, publica gratis en Casa-Libre.',
  summary: [
    'Minuta firmada por abogado, protocolizada por un notario de fe pública: eso es la escritura.',
    'El IMT es un impuesto municipal del 3% que se liquida en un plazo corto desde la firma.',
    'Derechos Reales inscribe al comprador con el testimonio y el comprobante del impuesto.',
    'El último paso es el cambio de nombre en el catastro y en el registro del impuesto a la propiedad.',
  ],
  cta: {
    title: 'Primero, el comprador',
    text: 'Publica tu casa gratis en Casa-Libre y recibe consultas directo por WhatsApp.',
    button: 'Publicar mi casa',
    href: 'https://casa-libre.com.bo/publicar',
  },
  sections: [
    {
      id: 'pasos-de-la-transferencia',
      h2: '¿Cuáles son los pasos de la transferencia de un inmueble?',
      blocks: [
        { t: 'p', html: 'Son cinco pasos, y cada uno necesita el anterior. El orden exacto puede variar un poco entre municipios.' },
        { t: 'table',
          caption: 'Trámite de transferencia de inmueble en Bolivia',
          head: ['Paso', 'Quién lo hace', 'Qué sale'],
          rows: [
            ['1. Minuta de compraventa', 'Abogado, firmada por vendedor y comprador', 'El contrato con precio y condiciones'],
            ['2. Protocolización', 'Notario de fe pública', 'Escritura pública y testimonio'],
            ['3. Impuesto municipal a la transferencia', 'Gobierno autónomo municipal', 'Liquidación y comprobante de pago'],
            ['4. Inscripción', 'Derechos Reales', 'Folio Real a nombre del comprador'],
            ['5. Cambio de propietario', 'Catastro municipal', 'Inmueble registrado al nuevo dueño para el IPBI'],
          ],
          note: 'Información general al 13 de noviembre de 2026.' },
        { t: 'callout', tone: 'warn', title: 'Información general', html: 'Información general. Consulta con un notario de fe pública o un abogado antes de tomar decisiones.' },
      ],
    },
    {
      id: 'minuta-y-notario',
      h2: '¿Qué es la minuta y qué hace el notario?',
      blocks: [
        { t: 'p', html: 'La minuta es el documento que redacta y firma un abogado con los datos de las partes, el inmueble y el precio. El notario de fe pública la transcribe a su protocolo, la convierte en escritura pública y entrega el testimonio, que es la copia que usarás en los trámites.' },
        { t: 'p', html: 'Qué debe decir la minuta: <a href="/bolivia/minuta-de-transferencia-de-inmueble-bolivia/">minuta de transferencia de inmueble</a>. Cuánto cobra el notario: <a href="/bolivia/cuanto-cobra-un-notario-bolivia/">cuánto cobra un notario en Bolivia</a>.' },
      ],
    },
    {
      id: 'impuesto-a-la-transferencia',
      h2: '¿Qué impuesto se paga en la transferencia?',
      blocks: [
        { t: 'p', html: 'El impuesto municipal a la transferencia (IMT), del 3%, que liquida el municipio donde está el inmueble. La base es el valor de la transferencia, y el municipio la compara con el valor que tiene registrado.' },
        { t: 'p', html: 'El plazo para pagarlo es corto, contado desde la firma. Por eso conviene tener los impuestos anuales al día antes de firmar. Todo el detalle está en <a href="/bolivia/impuesto-a-la-transferencia-de-inmuebles-bolivia/">impuesto a la transferencia de inmuebles</a>.' },
      ],
    },
    {
      id: 'derechos-reales',
      h2: '¿Cómo se inscribe la transferencia en Derechos Reales?',
      blocks: [
        { t: 'p', html: 'Con el testimonio y el comprobante del impuesto, se presenta la solicitud en Derechos Reales. Cuando se inscribe, el Folio Real pasa a nombre del comprador.' },
        { t: 'ul', items: [
          'Hasta que no se inscribe, la venta vale entre las partes, pero no frente a terceros.',
          'Por eso al comprador le conviene inscribir cuanto antes.',
          'Como vendedor, guarda copia del testimonio y del pago del impuesto.',
        ] },
      ],
    },
    {
      id: 'cambio-en-catastro',
      h2: '¿Hay que avisar al municipio del cambio de dueño?',
      blocks: [
        { t: 'p', html: 'Sí. El catastro municipal y el registro del impuesto a la propiedad tienen que pasar al nombre del comprador. Si no se hace, las próximas gestiones del impuesto pueden seguir saliendo a tu nombre.' },
        { t: 'example',
          title: 'Ejemplo ilustrativo: impuesto a la transferencia',
          html: 'Valor hipotético y redondo. La liquidación real la hace el municipio y puede usar otra base.',
          rows: [
            ['Valor de la transferencia', 'Bs 700.000'],
            ['IMT: 700.000 x 3%', 'Bs 21.000'],
          ] },
      ],
    },
    {
      id: 'despues-de-la-transferencia',
      h2: '¿Qué hago después de firmar la transferencia?',
      blocks: [
        { t: 'p', html: 'Cerrar los cabos sueltos que siguen a tu nombre. La venta termina en Derechos Reales, pero los servicios y algunos registros no cambian solos.' },
        { t: 'ul', items: [
          'Guarda una copia del testimonio, del comprobante del impuesto a la transferencia y de los recibos de pago.',
          'Pide el cambio de titular de luz, agua y gas, o deja escrito en la minuta que lo hace el comprador.',
          'Entrega las llaves, los controles y los planos con un acta firmada y la lectura de medidores.',
          'Confirma más adelante que la inscripción a nombre del comprador quedó registrada.',
        ] },
      ],
    },
    {
      id: 'antes-de-transferir',
      h2: '¿Qué hacer antes de llegar a la transferencia?',
      blocks: [
        { t: 'p', html: 'Encontrar al comprador y tener los papeles listos. Si todavía no tienes comprador, te recomendamos publicar tu casa en <a href="https://casa-libre.com.bo/vender">Casa-Libre</a>: es gratis y las consultas llegan a tu WhatsApp.' },
        { t: 'p', html: 'La guía de impuestos y gastos de <a href="https://casa-libre.com.bo/guias/impuestos-y-gastos-al-vender">Casa-Libre</a> resume los costos del trámite.' },
      ],
    },
  ],
  faq: [
    { q: '¿Cuáles son los requisitos para la transferencia de un inmueble en Bolivia?', a: 'Folio Real y alodial recientes, testimonio, impuestos a la propiedad pagados, cédulas de las partes y la minuta firmada por un abogado. El notario y el municipio pueden pedir algún papel más.' },
    { q: '¿Cuánto cuesta transferir una casa en Bolivia?', a: 'El IMT es del 3% del valor de la transferencia, más los honorarios del notario, del abogado y los aranceles de Derechos Reales. Mira <a href="/bolivia/gastos-al-vender-una-casa-bolivia/">gastos al vender una casa</a>.' },
    { q: '¿Qué pasa si no inscribo la compra en Derechos Reales?', a: 'La compra vale entre comprador y vendedor, pero no frente a terceros. Por ejemplo, un acreedor del vendedor podría embargar la casa.' },
    { q: '¿Qué es la transferencia de acciones y derechos?', a: 'Es la venta de una parte o de los derechos sobre un inmueble, por ejemplo la cuota de un heredero. Tiene sus propias reglas: consulta con un abogado.' },
    { q: '¿Qué hago con los servicios a mi nombre después de vender?', a: 'Pide el cambio de titular de luz, agua y gas, o deja escrito en la minuta que lo hace el comprador. Anota la lectura de los medidores el día de la entrega para que cada uno pague lo suyo.' },
  ],
  internalSources: [
    { label: 'DS 24054 (IMT regulation), lexivox', url: 'https://www.lexivox.org/norms/BO-DS-24054.html', date: '2026-11-13', note: 'IMT payment within 10 business days of the transaction; sujeto pasivo = registered owner. Seen via search summary, not read in full.' },
    { label: 'Google autocomplete gl=bo "transferencia de inmueble bolivia"', url: 'https://suggestqueries.google.com/complete/search?client=firefox&hl=es&gl=bo&q=transferencia%20de%20inmueble%20bolivia', date: '2026-11-13', note: 'requisitos, trámite, modelo, impuesto, acciones y derechos.' },
  ],
  closing: {
    title: 'Encuentra a tu comprador',
    text: 'Publica gratis en Casa-Libre y recibe consultas por WhatsApp.',
    button: 'Publicar en Casa-Libre',
    href: 'https://casa-libre.com.bo/publicar',
  },
  related: ['minuta-de-transferencia-de-inmueble-bolivia', 'impuesto-a-la-transferencia-de-inmuebles-bolivia', 'folio-real-bolivia', 'cuanto-cobra-un-notario-bolivia'],
};
