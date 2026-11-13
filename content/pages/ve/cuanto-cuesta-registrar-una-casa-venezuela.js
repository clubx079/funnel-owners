export default {
  slug: 'cuanto-cuesta-registrar-una-casa-venezuela',
  group: 'Impuestos y gastos',
  order: 3,
  equivalentOf: 'cuanto-cobra-escribano-paraguay',
  title: 'Cuánto cuesta registrar una casa en Venezuela: Registro',
  h1: 'Cuánto cuesta registrar una casa en Venezuela',
  description: 'Cómo se calculan las tasas de notaría y Registro al vender una casa en Venezuela, quién paga cada una, el papel del abogado y cómo pedir el presupuesto.',
  navLabel: 'Notaría y Registro',
  blurb: 'Notaría, Registro y abogado: cómo se calculan sus costos en una compraventa en Venezuela.',
  published: '2026-11-13',
  updated: '2026-11-13',
  review: 'pending',
  reviewNote: 'A Venezuelan lawyer must check: the split of roles (notaría authenticates the opción de compra; the Registro Público inmobiliario under SAREN protocolises the final sale), that registry and notary fees follow official tables in the Ley de Registros y del Notariado and its updates, linked to the operation value and recalculated with the BCV exchange rate; that some states also charge timbres fiscales; that lawyer fees are free; and that the liquidación is paid at a bank before signing. No amounts are stated on purpose.',
  answer: 'En Venezuela no hay un precio único para registrar una casa: las tasas del Registro Público y de la notaría salen de tablas oficiales que dependen sobre todo del precio del inmueble, y se pagan en bolívares antes de la firma. A eso se suman los honorarios libres del abogado que redacta o visa el documento. Pide siempre la liquidación por escrito. Mientras tanto, puedes publicar tu casa gratis en Casa-Libre.',
  summary: [
    'La notaría autentica la opción de compra; el Registro protocoliza la venta definitiva.',
    'Las tasas oficiales dependen del valor de la operación y se pagan en bolívares.',
    'El abogado cobra honorarios libres: pide un presupuesto escrito.',
    'Por costumbre el comprador paga el Registro, pero se puede pactar otra cosa.',
  ],
  cta: {
    title: 'Publica tu casa sin costo',
    text: 'Mientras preparas el documento, tu aviso puede estar en Casa-Libre gratis. Los interesados te escriben por WhatsApp.',
    button: 'Publicar mi casa',
    href: 'https://casa-libre.com.ve/publicar',
  },
  sections: [
    {
      id: 'notaria-y-registro',
      h2: '¿Cuál es la diferencia entre la notaría y el Registro?',
      blocks: [
        { t: 'p', html: 'Son dos oficinas distintas, ambas bajo el SAREN. La notaría da fe de que las partes firmaron un contrato; el Registro Público inmobiliario inscribe el cambio de propietario y lo hace oponible a todos.' },
        { t: 'table',
          caption: 'Quién hace qué en una compraventa',
          head: ['Oficina o persona', 'Qué hace', 'Cómo cobra'],
          rows: [
            ['Abogado', 'Redacta o visa la opción de compra y el documento definitivo', 'Honorarios libres, por acuerdo'],
            ['Notaría pública', 'Autentica la opción de compra', 'Tasas oficiales según el documento'],
            ['Registro Público inmobiliario', 'Protocoliza la venta definitiva', 'Tasas oficiales según el valor de la operación'],
            ['SENIAT', 'Recibe el anticipo de ISLR (Forma 33)', '0,5% del precio, salvo vivienda principal'],
          ],
          note: 'Información general al 13 de noviembre de 2026. Las tablas de tasas se actualizan: pide la liquidación vigente.' },
        { t: 'callout', tone: 'warn', title: 'Antes de decidir', html: 'Información general. Consulta con un abogado o un notario antes de tomar decisiones.' },
      ],
    },
    {
      id: 'como-se-calcula',
      h2: '¿Cómo se calcula lo que cobra el Registro?',
      blocks: [
        { t: 'p', html: 'El Registro aplica las tasas de la ley, que dependen principalmente del precio que dice el documento. Como el precio suele pactarse en dólares, el monto se lleva a bolívares con el tipo de cambio oficial.' },
        { t: 'ul', items: [
          'Al presentar el documento, el Registro emite una planilla de liquidación con lo que hay que pagar.',
          'Se paga en el banco indicado y se lleva el comprobante el día de la firma.',
          'Algunos estados cobran además timbres fiscales; el Registro te dice si aplican.',
        ] },
      ],
    },
    {
      id: 'abogado',
      h2: '¿Cuánto cobra un abogado por un documento de venta?',
      blocks: [
        { t: 'p', html: 'No hay tarifa oficial que citar: los honorarios son libres y varían según la ciudad y la complejidad. Una herencia o un título supletorio cuestan más trabajo que una venta simple.' },
        { t: 'ul', items: [
          'Pide que el presupuesto diga si incluye opción de compra, documento definitivo, Forma 33 y gestión en el Registro.',
          'Pregunta si las tasas oficiales están incluidas o van aparte.',
          'Acuerda con el comprador si usarán un solo abogado o uno cada uno.',
        ] },
      ],
    },
    {
      id: 'quien-paga',
      h2: '¿Quién paga la notaría y el Registro?',
      blocks: [
        { t: 'p', html: 'La costumbre es que el comprador pague el Registro y que la notaría de la opción se reparta, pero todo es negociable. Lo importante es escribirlo en la opción de compra.' },
        { t: 'p', html: 'El reparto completo de gastos está en <a href="/venezuela/gastos-al-vender-una-casa-venezuela/">cuánto cuesta vender una casa</a>, y cómo se redacta la opción en <a href="/venezuela/opcion-de-compra-venta-venezuela/">opción de compra venta</a>.' },
      ],
    },
    {
      id: 'tiempos',
      h2: '¿Cuánto tarda el Registro?',
      blocks: [
        { t: 'p', html: 'Depende de cada oficina y de que el expediente esté completo. Lo que más retrasa es un recaudo faltante: una solvencia vencida o una cédula catastral sin actualizar.' },
        { t: 'p', html: 'Revisa la lista de <a href="/venezuela/requisitos-para-vender-una-casa-venezuela/">requisitos para vender</a> antes de presentar el documento.' },
      ],
    },
    {
      id: 'publicar',
      h2: 'Encuentra al comprador mientras tanto',
      blocks: [
        { t: 'p', html: 'El trámite legal empieza cuando hay comprador. Para encontrarlo, publica gratis en <a href="https://casa-libre.com.ve/como-funciona">Casa-Libre</a>: los interesados te escriben directo por WhatsApp.' },
        { t: 'p', html: 'Si prefieres cargar fotos desde el teléfono, descarga la app de <a href="https://casa-libre.com.ve/descargar">Casa-Libre</a> para iPhone o Android.' },
      ],
    },
  ],
  faq: [
    { q: '¿Cuánto cuesta registrar una casa en Venezuela?', a: 'Depende del precio del inmueble: el Registro aplica tablas oficiales y emite una liquidación en bolívares. Pide esa planilla antes de la firma.' },
    { q: '¿Qué se firma en la notaría y qué en el Registro?', a: 'En la notaría, normalmente la opción de compra. En el Registro, el documento definitivo de compraventa.' },
    { q: '¿Puedo vender sin abogado?', a: 'Puedes buscar comprador sin abogado, pero el documento que se protocoliza debe estar redactado o visado por uno.' },
    { q: '¿Las tasas del Registro se pagan en dólares?', a: 'Se pagan en bolívares. Si el precio está en dólares, se convierte con el tipo de cambio oficial.' },
  ],
  internalSources: [
    { label: 'Google autocomplete gl=ve', url: 'https://suggestqueries.google.com/complete/search?client=firefox&hl=es&gl=ve&q=cuanto%20cuesta%20registrar%20una%20casa%20en%20venezuela', date: '2026-11-13', note: 'cuanto cuesta registrar una casa en venezuela; gastos de registro y notaria; quien paga el registro en una compraventa.' },
  ],
  closing: {
    title: 'Primero, el comprador',
    text: 'Publica tu casa gratis en Casa-Libre. Los interesados te escriben directo por WhatsApp.',
    button: 'Publicar en Casa-Libre',
    href: 'https://casa-libre.com.ve/publicar',
  },
  related: ['gastos-al-vender-una-casa-venezuela', 'opcion-de-compra-venta-venezuela', 'documento-de-compra-venta-de-casa-venezuela'],
};
