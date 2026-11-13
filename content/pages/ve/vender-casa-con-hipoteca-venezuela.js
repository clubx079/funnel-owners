export default {
  slug: 'vender-casa-con-hipoteca-venezuela',
  group: 'Papeles y trámites',
  order: 5,
  equivalentOf: 'vender-casa-con-hipoteca-paraguay',
  title: 'Vender una casa con hipoteca en Venezuela: opciones',
  h1: 'Cómo vender una casa con hipoteca en Venezuela',
  description: 'Cómo vender una casa con hipoteca en Venezuela: cancelar con el dinero de la venta, registrar la liberación de hipoteca y lo que revisará el comprador.',
  navLabel: 'Casa con hipoteca',
  blurb: 'Las opciones para vender una casa hipotecada en Venezuela y cómo se registra la liberación.',
  published: '2026-11-13',
  updated: '2026-11-13',
  review: 'pending',
  reviewNote: 'A Venezuelan lawyer must check: that a mortgage (and any prohibición de enajenar y gravar tied to housing-fund loans such as FAOV/BANAVIH) shows in the certificación de gravámenes; that the usual route is paying off the loan and registering the liberación de hipoteca issued by the bank before or at the sale; that the bank issues a constancia de saldo and the liberación document; that an old mortgage already paid but not released still needs registering; and that housing assigned under public programmes may carry sale restrictions. No bank names or fees are stated.',
  answer: 'Sí puedes vender una casa con hipoteca en Venezuela, pero el comprador va a querer recibirla libre. Lo habitual es pedir al banco el saldo pendiente, pagarlo con parte del precio de la venta y registrar la liberación de hipoteca antes o el mismo día de la firma. Si ya pagaste el crédito y no registraste la liberación, hazlo antes de publicar. Mientras tanto, puedes publicar gratis en Casa-Libre.',
  summary: [
    'La hipoteca aparece en la certificación de gravámenes que pedirá el comprador.',
    'La salida más común: cancelar el saldo con el dinero de la venta y registrar la liberación.',
    'Si ya pagaste, igual falta registrar la liberación de hipoteca en el Registro.',
    'Créditos de vivienda con fondos públicos pueden traer además una prohibición de enajenar.',
  ],
  cta: {
    title: 'Publica tu casa mientras hablas con el banco',
    text: 'En Casa-Libre publicar es gratis y los interesados te escriben directo por WhatsApp.',
    button: 'Publicar mi casa gratis',
    href: 'https://casa-libre.com.ve/publicar',
  },
  sections: [
    {
      id: 'se-puede',
      h2: '¿Se puede vender una casa que todavía estoy pagando?',
      blocks: [
        { t: 'p', html: 'Sí. La hipoteca no impide vender, pero hay que resolverla para que el comprador reciba la casa sin cargas. Estas son las situaciones habituales.' },
        { t: 'table',
          caption: 'Tu situación y qué hacer',
          head: ['Situación', 'Qué hacer'],
          rows: [
            ['Aún debes parte del crédito', 'Pide al banco el saldo, págalo con la venta y registra la liberación'],
            ['Ya pagaste, pero no registraste la liberación', 'Pide al banco el documento de liberación y regístralo'],
            ['El crédito vino con prohibición de enajenar y gravar', 'Consulta con el ente que la dio cómo levantarla'],
            ['El comprador quiere asumir el crédito', 'Solo si el banco lo acepta; es poco común'],
          ],
          note: 'Información general al 13 de noviembre de 2026. Cada banco tiene su procedimiento.' },
        { t: 'callout', tone: 'warn', title: 'Antes de decidir', html: 'Información general. Consulta con un abogado o un notario antes de tomar decisiones.' },
      ],
    },
    {
      id: 'como-saber',
      h2: '¿Cómo saber si una casa está hipotecada?',
      blocks: [
        { t: 'p', html: 'Con la certificación de gravámenes del Registro Público. Ahí aparecen hipotecas, embargos y prohibiciones de enajenar sobre el inmueble.' },
        { t: 'p', html: 'Pídela antes de publicar: si sale una hipoteca ya pagada, tienes tiempo de registrar la liberación. La lista completa de papeles está en <a href="/venezuela/requisitos-para-vender-una-casa-venezuela/">requisitos para vender una casa</a>.' },
      ],
    },
    {
      id: 'pasos',
      h2: 'Pasos para vender con el saldo pendiente',
      blocks: [
        { t: 'p', html: 'La clave es coordinar el pago al banco con la firma, para que el comprador vea la hipoteca liberada.' },
        { t: 'steps', items: [
          { title: 'Pide la constancia de saldo', html: 'El banco te dice cuánto falta para cancelar.' },
          { title: 'Fija el precio pensando en el saldo', html: 'El neto que recibes es el precio menos el saldo y los gastos.' },
          { title: 'Escríbelo en la opción de compra', html: 'Que diga que parte del precio se usa para cancelar la hipoteca. Ver <a href="/venezuela/opcion-de-compra-venta-venezuela/">opción de compra venta</a>.' },
          { title: 'Cancela y registra la liberación', html: 'El banco emite el documento de liberación y se registra antes o junto con la venta.' },
          { title: 'Protocoliza la venta', html: 'Con la casa libre, el comprador paga el saldo y firman en el Registro.' },
        ] },
      ],
    },
    {
      id: 'ejemplo',
      h2: 'Ejemplo: cuánto te queda',
      blocks: [
        { t: 'p', html: 'Hacer la cuenta antes de publicar te dice el precio mínimo que puedes aceptar.' },
        { t: 'example',
          title: 'Ejemplo ilustrativo: casa de USD 55.000 con saldo de USD 12.000',
          html: 'Precio: USD 55.000. Saldo de hipoteca: USD 12.000. Anticipo de ISLR (0,5%): USD 275. Otros gastos supuestos: USD 700. Neto: 55.000 − 12.000 − 275 − 700 = USD 42.025.',
          rows: [['Precio', 'USD 55.000'], ['Saldo hipoteca', '− USD 12.000'], ['Anticipo ISLR', '− USD 275'], ['Otros gastos (supuesto)', '− USD 700'], ['Neto', 'USD 42.025']] },
      ],
    },
    {
      id: 'vivienda-programa-publico',
      h2: '¿Y si la casa vino de un programa de vivienda?',
      blocks: [
        { t: 'p', html: 'Las viviendas adjudicadas o financiadas con programas públicos pueden tener reglas propias para venderse. Antes de publicar, pide a un abogado que revise el documento y la certificación de gravámenes.' },
        { t: 'p', html: 'Si el documento muestra una prohibición de enajenar, no firmes una opción de compra hasta saber cómo levantarla.' },
      ],
    },
    {
      id: 'publicar',
      h2: 'Publica con transparencia',
      blocks: [
        { t: 'p', html: 'Decir en el aviso que la hipoteca se cancela con la venta genera confianza. Publica gratis en <a href="https://casa-libre.com.ve/vender">Casa-Libre</a> y explica la situación al interesado desde el primer mensaje.' },
        { t: 'p', html: 'Para ver precios de casas parecidas, usa el mapa de <a href="https://casa-libre.com.ve/propiedades">Casa-Libre</a>. Los costos de la venta están en <a href="/venezuela/gastos-al-vender-una-casa-venezuela/">gastos al vender</a>.' },
      ],
    },
  ],
  faq: [
    { q: '¿Qué es la liberación de hipoteca?', a: 'El documento por el que el banco declara que el crédito está pagado y libera el inmueble. Se registra en el Registro Público.' },
    { q: '¿Puedo vender si ya pagué pero no liberé la hipoteca?', a: 'Primero registra la liberación: la certificación de gravámenes seguirá mostrando la hipoteca hasta entonces.' },
    { q: '¿El comprador puede pagar directo al banco?', a: 'Se puede pactar que parte del precio vaya al banco para cancelar el saldo. Déjalo escrito en la opción de compra.' },
    { q: '¿Quién paga el registro de la liberación?', a: 'Normalmente quien vende, porque es quien debe entregar la casa libre. Se puede acordar otra cosa.' },
  ],
  internalSources: [
    { label: 'Google autocomplete gl=ve', url: 'https://suggestqueries.google.com/complete/search?client=firefox&hl=es&gl=ve&q=liberacion%20de%20hipoteca', date: '2026-11-13', note: 'liberacion de hipoteca (several bank names, not used); liberacion de hipoteca por banavih; vender casa con hipoteca.' },
  ],
  closing: {
    title: 'Vende y cancela tu hipoteca',
    text: 'Publica tu casa gratis en Casa-Libre y recibe las consultas por WhatsApp.',
    button: 'Publicar en Casa-Libre',
    href: 'https://casa-libre.com.ve/publicar',
  },
  related: ['requisitos-para-vender-una-casa-venezuela', 'opcion-de-compra-venta-venezuela', 'gastos-al-vender-una-casa-venezuela'],
};
