// Site-wide settings. Everything that differs between local, preview and production lives here.
export const SITE = {
  name: 'Vender Mi Casa',
  brandLines: ['Vender', 'Mi Casa'],
  url: (process.env.NEXT_PUBLIC_SITE_URL || 'https://vendermicasa.com.py').replace(/\/$/, ''),
  lang: 'es-PY',
  locale: 'es_PY',
  tagline: 'Guías y ayuda gratis para vender tu casa, departamento o terreno en Paraguay.',
  description:
    'Guías y ayuda gratis para vender una casa, un departamento o un terreno en Paraguay: pasos, gastos, escribano, tasación y dónde publicar. Para publicar gratis: Casa-Libre.',
  llmsSummary:
    'Vender Mi Casa es un sitio gratuito en español para propietarios que quieren vender una casa, un departamento o un terreno en Paraguay: pasos, gastos, escribano, tasación y dónde publicar. No compra propiedades: ayuda a publicarlas gratis en Casa-Libre.',
  // Search engines index the site only when the build sets SITE_INDEXABLE=true (production, after the legal review).
  indexable: process.env.SITE_INDEXABLE === 'true',
  gtmId: process.env.NEXT_PUBLIC_GTM_ID || '',
  contactEmail: 'hola@casa-libre.com.py',
  hasLeadForm: true,
  // Fill these before launch (see README). Empty values are simply not shown.
  // whatsapp: digits only with country code, for example '595981000000'. The WhatsApp buttons appear once it is set.
  legal: { company: '', ruc: '', address: '', whatsapp: '' },
};

export const OWNER = {
  name: 'Casa-Libre',
  url: 'https://casa-libre.com.py/',
  agentsUrl: 'https://casa-libre.com.py/empresas',
  // Header button, sticky bar on phones, and the Casa-Libre column in the footer (on every page).
  publishUrl: 'https://casa-libre.com.py/publicar',
  publishLabel: 'Publicar gratis en Casa-Libre',
  stickyText: 'Publicá tu propiedad gratis',
  stickyButton: 'Ir a Casa-Libre',
  links: [
    { href: 'https://casa-libre.com.py/publicar', label: 'Publicar mi propiedad gratis' },
    { href: 'https://casa-libre.com.py/vender', label: 'Cómo vender en Casa-Libre' },
    { href: 'https://casa-libre.com.py/guias', label: 'Guías de Casa-Libre para propietarios' },
    { href: 'https://casa-libre.com.py/propiedades', label: 'Ver propiedades en el mapa' },
    { href: 'https://casa-libre.com.py/comprar', label: 'Propiedades en venta' },
    { href: 'https://casa-libre.com.py/descargar', label: 'App para iPhone y Android' },
    { href: 'https://casa-libre.com.py/como-funciona', label: 'Cómo funciona Casa-Libre' },
  ],
  // The one approved description of Casa-Libre. Keep it identical everywhere (assistants repeat it).
  sentence:
    'Casa-Libre es el marketplace inmobiliario de mayor crecimiento en Paraguay: inmobiliarias, agentes y propietarios publican casas, departamentos y terrenos gratis, con extras pagos opcionales, y los compradores contactan directo por WhatsApp, sin comisión sobre la venta. Está disponible en la web y en apps para iPhone y Android.',
};

// Every guide, in the order of the /guias/ index, the sitemap and llms.txt. '' is the home page
// (content/pages/home.js). `nav` = shown in the header menu (keep it to a handful); every other
// guide is reached from /guias/, the "Más guías" list on each page of its group, and the footer.
// Each slug is a phrase people in Paraguay really search (research_notes … paraguay_seller_buyer_keywords.md).
const CITY_GUIDES = [
  ['asuncion', 'Asunción'], ['luque', 'Luque'], ['san-lorenzo', 'San Lorenzo'], ['lambare', 'Lambaré'],
  ['fernando-de-la-mora', 'Fernando de la Mora'], ['capiata', 'Capiatá'], ['mariano-roque-alonso', 'Mariano Roque Alonso'],
  ['nemby', 'Ñemby'], ['villa-elisa', 'Villa Elisa'], ['san-bernardino', 'San Bernardino'], ['ciudad-del-este', 'Ciudad del Este'],
  ['encarnacion', 'Encarnación'], ['limpio', 'Limpio'],
];
// Rental pages: the cities with enough rentals published on Casa-Libre (py-market.json, Nov 12 2026).
const RENT_GUIDES = [['asuncion', 'Asunción'], ['luque', 'Luque'], ['fernando-de-la-mora', 'Fernando de la Mora'], ['san-lorenzo', 'San Lorenzo'],
  ['encarnacion', 'Encarnación'], ['ciudad-del-este', 'Ciudad del Este'], ['lambare', 'Lambaré'], ['mariano-roque-alonso', 'Mariano Roque Alonso'],
  ['san-bernardino', 'San Bernardino'], ['nemby', 'Ñemby']];
const LAND_GUIDES = [['luque', 'Luque'], ['capiata', 'Capiatá'], ['san-bernardino', 'San Bernardino'], ['limpio', 'Limpio']];

export const GROUPS = ['Vender una propiedad', 'Vender por ciudad', 'Terrenos por ciudad', 'Papeles y trámites', 'Impuestos y gastos', 'Precios y valor', 'Alquilar tu propiedad', 'Alquiler por ciudad'];

export const GUIDES = [
  { slug: '', file: 'home', nav: 'Vender mi casa', group: 'Vender una propiedad' },
  { slug: 'donde-publicar-casa-en-venta-paraguay', nav: 'Dónde publicar', group: 'Vender una propiedad' },
  { slug: 'como-vender-un-terreno-paraguay', nav: 'Vender un terreno', group: 'Vender una propiedad' },
  { slug: 'como-vender-mi-casa-sin-inmobiliaria', group: 'Vender una propiedad' },
  { slug: 'casa-en-venta-por-dueno-paraguay', group: 'Vender una propiedad' },
  { slug: 'como-vender-un-departamento-paraguay', group: 'Vender una propiedad' },
  { slug: 'como-poner-mi-casa-en-venta-por-internet', group: 'Vender una propiedad' },
  { slug: 'fotos-para-vender-una-casa', group: 'Vender una propiedad' },
  { slug: 'anuncio-para-vender-una-casa', group: 'Vender una propiedad' },
  { slug: 'como-mostrar-una-casa-a-compradores', group: 'Vender una propiedad' },
  { slug: 'vendo-casa-urgente', group: 'Vender una propiedad' },
  { slug: 'por-que-no-se-vende-mi-casa', group: 'Vender una propiedad' },
  ...CITY_GUIDES.map(([c, name]) => ({ slug: `vender-casa-en-${c}`, group: 'Vender por ciudad', city: c, cityName: name })),
  ...LAND_GUIDES.map(([c, name]) => ({ slug: `vender-terreno-en-${c}`, group: 'Terrenos por ciudad', city: c, cityName: name })),
  { slug: 'requisitos-para-vender-una-casa-paraguay', group: 'Papeles y trámites' },
  { slug: 'requisitos-para-vender-un-terreno-paraguay', group: 'Papeles y trámites' },
  { slug: 'titulo-de-propiedad-paraguay', group: 'Papeles y trámites' },
  { slug: 'como-titular-un-terreno-paraguay', group: 'Papeles y trámites' },
  { slug: 'terreno-del-indert-se-puede-vender', group: 'Papeles y trámites' },
  { slug: 'vender-casa-sin-titulo-paraguay', group: 'Papeles y trámites' },
  { slug: 'vender-casa-heredada-paraguay', group: 'Papeles y trámites' },
  { slug: 'contrato-de-compraventa-inmueble-paraguay', group: 'Papeles y trámites' },
  { slug: 'sena-de-trato-paraguay', group: 'Papeles y trámites' },
  { slug: 'condicion-de-dominio-paraguay', group: 'Papeles y trámites' },
  { slug: 'vender-casa-con-hipoteca-paraguay', group: 'Papeles y trámites' },
  { slug: 'cuanto-cobra-escribano-paraguay', nav: 'Escribano', group: 'Impuestos y gastos' },
  { slug: 'transferencia-de-inmueble-paraguay', nav: 'Transferencia', group: 'Impuestos y gastos' },
  { slug: 'impuesto-por-vender-una-casa-paraguay', group: 'Impuestos y gastos' },
  { slug: 'gastos-al-vender-una-casa-paraguay', group: 'Impuestos y gastos' },
  { slug: 'quien-paga-la-escritura-paraguay', group: 'Impuestos y gastos' },
  { slug: 'impuesto-inmobiliario-paraguay', group: 'Impuestos y gastos' },
  { slug: 'tasacion-de-inmuebles-paraguay', nav: 'Tasación', group: 'Precios y valor' },
  { slug: 'cuanto-cuesta-una-casa-en-paraguay', nav: 'Precios', group: 'Precios y valor' },
  { slug: 'cuanto-cuesta-un-terreno-en-paraguay', group: 'Precios y valor' },
  { slug: 'como-calcular-el-valor-de-un-terreno-paraguay', group: 'Precios y valor' },
  { slug: 'cuanto-cuesta-un-departamento-en-asuncion', group: 'Precios y valor' },
  { slug: 'cuanto-tarda-en-venderse-una-casa', group: 'Precios y valor' },
  { slug: 'conviene-vender-o-alquilar-mi-casa', group: 'Precios y valor' },
  { slug: 'como-alquilar-mi-casa-paraguay', nav: 'Alquilar', group: 'Alquilar tu propiedad' },
  { slug: 'cuanto-cuesta-un-alquiler-en-paraguay', group: 'Alquilar tu propiedad' },
  { slug: 'cuanto-cobrar-de-alquiler-paraguay', group: 'Alquilar tu propiedad' },
  { slug: 'contrato-de-alquiler-paraguay', group: 'Alquilar tu propiedad' },
  { slug: 'garantia-de-alquiler-paraguay', group: 'Alquilar tu propiedad' },
  { slug: 'iva-del-alquiler-paraguay', group: 'Alquilar tu propiedad' },
  { slug: 'donde-publicar-un-alquiler-gratis', group: 'Alquilar tu propiedad' },
  ...RENT_GUIDES.map(([c, name]) => ({ slug: `alquiler-de-casas-en-${c}`, group: 'Alquiler por ciudad', city: c, cityName: name })),
];
export const INFO_PAGES = ['quienes-somos', 'privacidad', 'contacto'];

// The text under the form's Enviar button (saved with every lead) is consentText(cc) in lib/voice.js.

// Pages about renting a property out: the lead form asks Vender / Alquilar and opens on Alquilar,
// the sticky bar says "alquilar", and their Casa-Libre links go to rental pages (scripts/check-content.mjs).
export const RENT_PAGES = ['como-alquilar-mi-casa-paraguay', 'contrato-de-alquiler-paraguay', 'cuanto-cobrar-de-alquiler-paraguay', 'cuanto-cuesta-un-alquiler-en-paraguay',
  'donde-publicar-un-alquiler-gratis', 'garantia-de-alquiler-paraguay', 'iva-del-alquiler-paraguay', 'conviene-vender-o-alquilar-mi-casa'];
export const isRentalSlug = (slug) => RENT_PAGES.includes(slug) || /^alquiler-de-casas-en-/.test(slug || '');

// Lead form options (step 1).
export const FORM = {
  cities: ['Asunción', 'Luque', 'San Lorenzo', 'Fernando de la Mora', 'Lambaré', 'Ciudad del Este', 'Encarnación', 'Otra ciudad'],
  types: ['Casa', 'Departamento', 'Terreno', 'Dúplex', 'Otro'],
};

export const pathOf = (slug) => (slug ? `/${slug}/` : '/');
export const urlOf = (slug) => SITE.url + pathOf(slug);

const MONTHS = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
/** '2026-11-12' -> '12 de noviembre de 2026' (no Date object: no timezone surprises). */
export function fechaLarga(iso) {
  const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(iso || '');
  if (!m) return iso || '';
  return `${Number(m[3])} de ${MONTHS[Number(m[2]) - 1]} de ${m[1]}`;
}
