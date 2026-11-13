export default {
  slug: 'contacto',
  title: 'Contacto',
  h1: 'Contacto',
  description: 'Escribinos para que te ayudemos a publicar tu propiedad en Casa-Libre, para corregir un dato de una guía o para proponer un tema.',
  blurb: 'Cómo escribirnos.',
  published: '2026-11-12',
  updated: '2026-11-12',
  review: 'none',
  answer: 'Si querés vender tu propiedad, lo más rápido es completar el formulario de la página de inicio. Para todo lo demás, escribinos a hola@casa-libre.com.py.',
  sections: [
    {
      id: 'vender',
      h2: 'Si querés vender tu propiedad',
      blocks: [
        { t: 'p', html: 'Completá el <a href="/">formulario de la página de inicio</a> y te escribimos por WhatsApp para ayudarte a publicarla. O publicala vos ahora mismo: publicar gratis en <a href="https://casa-libre.com.py/publicar">Casa-Libre</a>.' },
      ],
    },
    {
      id: 'escribinos',
      h2: 'Por otros temas',
      blocks: [
        { t: 'ul', items: [
          '<strong>Un dato de una guía está mal o quedó viejo.</strong> Contanos en qué guía. Lo corregimos y actualizamos la fecha.',
          '<strong>Querés proponer un tema.</strong> Contanos qué te gustaría leer. Priorizamos las preguntas que más se repiten.',
          '<strong>Querés que borremos tus datos.</strong> Escribinos y lo hacemos.',
        ] },
        { t: 'p', html: 'Correo: <a href="mailto:hola@casa-libre.com.py">hola@casa-libre.com.py</a>' },
      ],
    },
  ],
};
