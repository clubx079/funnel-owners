export default {
  slug: 'privacidad',
  title: 'Política de privacidad',
  h1: 'Política de privacidad',
  description: 'Qué datos recoge Vender Mi Casa cuando completás el formulario, para qué los usa Casa-Libre, cuánto tiempo los guarda y cómo pedir que los borremos.',
  blurb: 'Qué datos recoge el formulario y para qué se usan.',
  published: '2026-11-12',
  updated: '2026-11-13',
  review: 'pending',
  reviewNote: 'A Paraguayan lawyer must review this policy and the form consent text against Ley 7593/2025 before launch. Confirm the retention period, the legal entity name and whether leads are ever passed to partner agencies (today the policy says they are not).',
  answer: 'Si completás el formulario, Casa-Libre usa tu nombre, tu WhatsApp y, si lo dejás, tu email solo para contactarte sobre la venta o el alquiler de tu propiedad. No vendemos ni compartimos tus datos.',
  sections: [
    {
      id: 'responsable',
      h2: 'Quién es responsable de tus datos',
      blocks: [
        { t: 'p', html: 'Vender Mi Casa es un sitio de <a href="https://casa-libre.com.py/">Casa-Libre</a>, que es responsable de los datos que dejás acá. Para cualquier consulta sobre privacidad, escribinos a <a href="mailto:hola@casa-libre.com.py">hola@casa-libre.com.py</a>.' },
      ],
    },
    {
      id: 'formulario',
      h2: 'Qué datos recoge el formulario',
      blocks: [
        { t: 'p', html: 'Leer las guías no requiere dejar ningún dato. Si completás el formulario para vender o alquilar tu propiedad, guardamos lo siguiente.' },
        { t: 'ul', items: [
          'Si querés vender o alquilar, la ciudad donde está la propiedad y el tipo de propiedad.',
          'Tu nombre, tu número de WhatsApp y, si lo escribís, tu email (es opcional).',
          'El aviso que viste junto al botón Enviar (al enviar aceptás que Casa-Libre te contacte por WhatsApp o email), con la fecha y la hora del envío. Es la constancia de tu consentimiento.',
          'Datos técnicos del envío: la página desde la que escribiste, tu dirección IP y el tipo de navegador.',
        ] },
      ],
    },
    {
      id: 'para-que',
      h2: 'Para qué los usamos',
      blocks: [
        { t: 'ul', items: [
          '<strong>Para contactarte por WhatsApp o email</strong> y ayudarte a publicar y vender o alquilar tu propiedad. Es el único uso: no te mandamos novedades ni publicidad por haber completado el formulario.',
        ] },
        { t: 'p', html: 'No vendemos tus datos y no los compartimos con inmobiliarias ni con otras empresas.' },
      ],
    },
    {
      id: 'navegacion',
      h2: 'Datos de navegación',
      blocks: [
        { t: 'p', html: 'Como cualquier sitio web, nuestro servidor registra datos técnicos de cada visita: fecha y hora, página pedida, tipo de navegador y dirección IP. Podemos usar herramientas de medición para saber cuántas personas leen cada guía y cuántas usan el formulario. Esas mediciones no incluyen tu nombre ni tu teléfono.' },
      ],
    },
    {
      id: 'conservacion',
      h2: 'Cuánto tiempo los guardamos',
      blocks: [
        { t: 'p', html: 'Guardamos los datos del formulario mientras dure la consulta sobre tu propiedad y los borramos cuando nos lo pedís.' },
      ],
    },
    {
      id: 'derechos',
      h2: 'Tus derechos',
      blocks: [
        { t: 'p', html: 'Podés pedirnos que te digamos qué datos tuyos tenemos, que los corrijamos o que los borremos, y podés retirar tu consentimiento. Escribinos a <a href="mailto:hola@casa-libre.com.py">hola@casa-libre.com.py</a> desde el mismo número o contándonos con qué número completaste el formulario.' },
      ],
    },
    {
      id: 'enlaces',
      h2: 'Enlaces a Casa-Libre',
      blocks: [
        { t: 'p', html: 'Las guías enlazan a Casa-Libre. Si creás una cuenta o publicás una propiedad ahí, se aplica la política de privacidad de Casa-Libre.' },
      ],
    },
  ],
};
