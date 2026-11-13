export default {
  slug: 'folio-real-bolivia',
  group: 'Papeles y trámites',
  order: 2,
  equivalentOf: 'titulo-de-propiedad-paraguay',
  title: 'Folio Real en Bolivia: qué es y cómo sacarlo actualizado',
  h1: 'Folio Real en Bolivia: qué es y cómo sacarlo',
  description: 'Qué es el Folio Real de una casa en Bolivia, en qué se diferencia del certificado alodial y del testimonio, y cómo pedirlo actualizado en Derechos Reales.',
  navLabel: 'Folio Real',
  blurb: 'Qué es el Folio Real, cómo se diferencia del alodial y del testimonio, y cómo pedirlo actualizado.',
  published: '2026-11-13',
  updated: '2026-11-13',
  review: 'pending',
  reviewNote: 'A Bolivian notario or lawyer must check: definitions of Folio Real (matrícula computarizada in Derechos Reales), certificado alodial (gravámenes) and testimonio; that Derechos Reales depends on the Consejo de la Magistratura (Órgano Judicial); that both can be requested at the departmental DDRR office and in some cases online; and what to do when the Folio Real data does not match the catastro. No fees or times are stated. 2026-11-13 added buyer-checklist section (titular, superficie vs plano/catastro, gravámenes via alodial, matrícula): check wording with a notario.',
  answer: 'El Folio Real es la ficha de tu casa en Derechos Reales: tiene el número de matrícula, la ubicación, la superficie y el nombre del propietario inscrito, con el historial de inscripciones. Se pide actualizado en la oficina de Derechos Reales de tu departamento. No es lo mismo que el certificado alodial, que muestra los gravámenes, ni que el testimonio, que es la escritura. Con el Folio Real en mano, puedes publicar tu casa en Casa-Libre.',
  summary: [
    'Folio Real: la matrícula del inmueble y quién figura como propietario.',
    'Certificado alodial: si hay hipotecas, embargos u otros gravámenes.',
    'Testimonio: la copia de la escritura pública con la que adquiriste.',
    'El comprador suele pedir Folio Real y alodial recientes antes de firmar.',
  ],
  cta: {
    title: 'Papeles en orden, casa publicada',
    text: 'Con el Folio Real a tu nombre, publica gratis en Casa-Libre.',
    button: 'Publicar mi casa',
    href: 'https://casa-libre.com.bo/publicar',
  },
  sections: [
    {
      id: 'que-es-el-folio-real',
      h2: '¿Qué es el Folio Real de una casa?',
      blocks: [
        { t: 'p', html: 'Es el registro del inmueble en Derechos Reales, la oficina que inscribe la propiedad en Bolivia. Cada inmueble tiene una matrícula, y el Folio Real reúne en esa matrícula todo lo que se inscribió: quién es el dueño, cómo lo adquirió y qué gravámenes tiene o tuvo.' },
        { t: 'table',
          caption: 'Folio Real, certificado alodial y testimonio',
          head: ['Documento', 'Qué muestra', 'Quién lo emite'],
          rows: [
            ['Folio Real', 'Matrícula, ubicación, superficie, propietario inscrito y asientos', 'Derechos Reales'],
            ['Certificado alodial', 'Gravámenes vigentes: hipotecas, embargos, anotaciones preventivas', 'Derechos Reales'],
            ['Testimonio', 'La escritura pública de compra, herencia o donación', 'Notario de fe pública'],
            ['Certificado catastral', 'Datos técnicos del lote para el municipio', 'Gobierno autónomo municipal'],
          ],
          note: 'Información general al 13 de noviembre de 2026.' },
      ],
    },
    {
      id: 'folio-real-y-alodial',
      h2: '¿El Folio Real y el alodial son lo mismo?',
      blocks: [
        { t: 'p', html: 'No. El Folio Real dice de quién es la casa; el alodial dice si está libre o tiene cargas. Para vender, se necesitan los dos, y conviene que sean recientes.' },
        { t: 'p', html: 'Un ejemplo: tu Folio Real puede mostrar que la casa es tuya, y el alodial, que el banco tiene una hipoteca inscrita. En ese caso, el comprador va a pedir que se cancele antes o con el dinero de la venta. Lo vemos en <a href="/bolivia/vender-casa-con-hipoteca-bolivia/">vender una casa con hipoteca</a>.' },
      ],
    },
    {
      id: 'como-sacar-el-folio-real',
      h2: '¿Cómo sacar el Folio Real actualizado?',
      blocks: [
        { t: 'p', html: 'Se pide en la oficina de Derechos Reales del departamento donde está el inmueble. Lleva el número de matrícula, que figura en tu testimonio o en un Folio Real anterior.' },
        { t: 'steps', items: [
          { title: 'Ubica tu número de matrícula', html: 'Está en el testimonio o en un Folio Real anterior.' },
          { title: 'Ve a Derechos Reales', html: 'A la oficina de tu departamento, con tu cédula. Pregunta si tu oficina permite pedirlo por internet.' },
          { title: 'Paga el arancel', html: 'Te dan el monto en ventanilla.' },
          { title: 'Pide también el alodial', html: 'Si vas a vender, ahorra un viaje.' },
        ] },
        { t: 'callout', tone: 'warn', title: 'Información general', html: 'Información general. Consulta con un notario de fe pública o un abogado antes de tomar decisiones.' },
      ],
    },
    {
      id: 'datos-que-no-coinciden',
      h2: '¿Qué hago si el Folio Real no coincide con la realidad?',
      blocks: [
        { t: 'p', html: 'Pasa más de lo que parece: una superficie distinta a la del plano, un nombre mal escrito o una construcción que no figura. Conviene corregirlo antes de vender, porque el comprador y su banco lo van a notar.' },
        { t: 'ul', items: [
          'Superficie distinta: suele requerir un plano actualizado y un trámite de rectificación.',
          'Nombre con errores: se corrige con documentos de identidad y, a veces, por vía notarial o judicial.',
          'Construcciones no declaradas: se regularizan en el municipio.',
        ] },
        { t: 'p', html: 'Un abogado te dice el camino para tu caso.' },
      ],
    },
    {
      id: 'sin-folio-real',
      h2: '¿Se puede vender una casa sin Folio Real?',
      blocks: [
        { t: 'p', html: 'Se puede firmar un documento privado, pero el comprador no podrá inscribirse como dueño en Derechos Reales, y eso baja mucho el interés y el precio. Si tu casa no está inscrita, lo recomendable es regularizarla antes de vender.' },
        { t: 'p', html: 'La lista completa de papeles está en <a href="/bolivia/requisitos-para-vender-una-casa-bolivia/">requisitos para vender una casa en Bolivia</a>.' },
      ],
    },
    {
      id: 'que-revisa-el-comprador',
      h2: '¿Qué revisa el comprador en el Folio Real?',
      blocks: [
        { t: 'p', html: 'Lo mismo que conviene que revises tú antes de publicar. Si algo no coincide, es mejor saberlo antes de la primera oferta que en la oficina del notario.' },
        { t: 'ul', items: [
          'Que el titular inscrito seas tú, con el nombre y el número de cédula escritos igual que en tu documento.',
          'Que la superficie coincida con el plano aprobado y con el catastro municipal.',
          'Que no haya hipotecas, embargos ni anotaciones preventivas sin cancelar; eso lo confirma el alodial.',
          'Que la ubicación y la matrícula correspondan al inmueble que se está vendiendo.',
        ] },
        { t: 'p', html: 'Si estás casado y compraste durante el matrimonio, el comprador va a pedir que firme también tu cónyuge. Lo explicamos en <a href="/bolivia/requisitos-para-vender-una-casa-bolivia/">requisitos para vender una casa</a>.' },
      ],
    },
    {
      id: 'publicar-con-papeles',
      h2: '¿Cómo uso el Folio Real en el aviso?',
      blocks: [
        { t: 'p', html: 'No publiques la imagen del documento. Basta con escribir "Folio Real a nombre del propietario" en la descripción: es una de las frases que más confianza dan.' },
        { t: 'p', html: 'Puedes publicar tu casa gratis en <a href="https://casa-libre.com.bo/vender">Casa-Libre</a> y mostrar el documento solo a quien ya hizo una oferta concreta. La guía de documentos de <a href="https://casa-libre.com.bo/guias/documentos-para-vender-un-inmueble">Casa-Libre</a> repasa el resto.' },
      ],
    },
  ],
  faq: [
    { q: '¿Qué es el Folio Real de una casa en Bolivia?', a: 'Es la ficha del inmueble en Derechos Reales, con su matrícula, sus datos y el propietario inscrito.' },
    { q: '¿Folio Real y alodial es lo mismo?', a: 'No. El Folio Real muestra al propietario y la matrícula; el alodial muestra si hay gravámenes. Para vender se piden los dos.' },
    { q: '¿Dónde saco el Folio Real?', a: 'En la oficina de Derechos Reales del departamento donde está el inmueble, con el número de matrícula.' },
    { q: '¿El Folio Real es el título de propiedad?', a: 'El título de propiedad es tu testimonio, la escritura. El Folio Real prueba que ese título está inscrito en Derechos Reales, que es lo que te protege frente a terceros.' },
  ],
  internalSources: [
    { label: 'Google autocomplete gl=bo "folio real"', url: 'https://suggestqueries.google.com/complete/search?client=firefox&hl=es&gl=bo&q=folio%20real', date: '2026-11-13', note: '"folio real bolivia", "folio real actualizado", "folio real y alodial es lo mismo".' },
  ],
  closing: {
    title: 'Con el Folio Real, a publicar',
    text: 'Publica tu casa gratis en Casa-Libre y recibe consultas por WhatsApp.',
    button: 'Publicar en Casa-Libre',
    href: 'https://casa-libre.com.bo/publicar',
  },
  related: ['requisitos-para-vender-una-casa-bolivia', 'transferencia-de-inmueble-bolivia', 'vender-casa-con-hipoteca-bolivia'],
};
