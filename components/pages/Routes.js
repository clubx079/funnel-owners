// The pages every country has, written once. app/(py)/… and app/(bo)/bolivia/… etc. are thin files that call these.
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Guide from '@/components/Guide';
import InfoPage from '@/components/InfoPage';
import { getGuides, getInfoPages, getPage } from '@/lib/content';
import { GROUPS, SITE } from '@/lib/site';
import { countryOf, pathFor, CL_PATHS, DEFAULT_COUNTRY } from '@/lib/countries';
import { graphFor } from '@/lib/schema';
import { metaFor, JsonLd } from '@/lib/meta';
import { alternatesFor, guiasAlternates } from '@/lib/alternates';
import { cl } from '@/lib/utm';
import { ui } from '@/lib/voice';

// ---- Guides (the country home is the guide with slug '') ----
export async function guideParams(cc) {
  const pages = [...(await getGuides(cc)), ...(await getInfoPages(cc))];
  return pages.filter((p) => p.slug).map((p) => ({ slug: p.slug }));
}

export async function guideMetadata(cc, slug) {
  const page = await getPage(slug, cc);
  if (!page) return {};
  return metaFor(page, page.kind === 'guide' ? await alternatesFor(cc, slug) : null);
}

export async function GuidePage({ cc, slug }) {
  const page = await getPage(slug, cc);
  if (!page) notFound();
  const guides = await getGuides(cc);
  return (
    <>
      <JsonLd data={graphFor(page)} />
      {page.kind === 'guide' ? <Guide page={page} guides={guides} /> : <InfoPage page={page} />}
    </>
  );
}

// ---- The index of every guide of a country, by topic ----
const guiasText = (cc) => {
  const c = countryOf(cc);
  const t = ui(cc);
  return {
    title: `${t.guiasTitle} ${c.name}`,
    description: `Guías para vender o alquilar una casa, un departamento o un terreno en ${c.name}: por ciudad, papeles y trámites, impuestos, precios y alquiler.`,
  };
};

export async function guiasMetadata(cc) {
  const c = countryOf(cc);
  const { title, description } = guiasText(cc);
  const path = pathFor(cc, 'guias');
  const languages = await guiasAlternates();
  return {
    title,
    description,
    alternates: { canonical: path, ...(languages ? { languages } : {}) },
    openGraph: { title, description, url: `${SITE.url}${path}`, siteName: SITE.name, locale: c.locale, type: 'website' },
  };
}

export async function GuiasPage({ cc }) {
  const c = countryOf(cc);
  const t = ui(cc);
  const { title, description } = guiasText(cc);
  const guides = await getGuides(cc);
  const anchor = (name) => name.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-');
  const groups = GROUPS.map((g) => ({ name: g, id: anchor(g), list: guides.filter((x) => x.group === g) })).filter((g) => g.list.length);
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: title,
    description,
    url: `${SITE.url}${pathFor(cc, 'guias')}`,
    inLanguage: c.lang,
    hasPart: guides.map((g) => ({ '@type': 'Article', headline: g.h1, url: `${SITE.url}${pathFor(cc, g.slug)}` })),
  };
  return (
    <main id="contenido">
      <JsonLd data={ld} />
      <article className="guide info">
        <header className="guide-head">
          <nav className="crumbs" aria-label="Migas de pan">
            <ol><li><Link href={pathFor(cc, '')}>Inicio</Link></li><li aria-current="page">Todas las guías</li></ol>
          </nav>
          <h1>{title}</h1>
          <p className="answer">
            {guides.length} guías gratuitas, ordenadas por tema. {t.guiasReady}{' '}
            <a href={cl(`${c.clOrigin}/publicar`, 'guias')}>Casa-Libre</a>{t.guiasAfter}
          </p>
        </header>
        <div className="guide-body info-body guias-index">
          {groups.length > 1 ? (
            <nav className="guias-jump" aria-label="Temas">
              <ul>{groups.map((g) => <li key={g.id}><a href={`#${g.id}`}>{g.name} <small>{g.list.length}</small></a></li>)}</ul>
            </nav>
          ) : null}
          {groups.map((g) => (
            <section key={g.name} id={g.id}>
              <h2>{g.name}</h2>
              <ul>
                {g.list.map((x) => (
                  <li key={x.slug}>
                    <Link href={pathFor(cc, x.slug)}>{x.h1}</Link>
                    {x.blurb ? <p>{x.blurb}</p> : null}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}

// ---- After the lead form ----
export const graciasMetadata = { title: 'Recibimos tus datos', robots: { index: false, follow: true } };

export async function GraciasPage({ cc }) {
  const c = countryOf(cc);
  const t = ui(cc);
  const guides = (await getGuides(cc)).filter((g) => g.slug);
  const hasApp = cc === DEFAULT_COUNTRY || (CL_PATHS[cc] || []).includes('/descargar');
  const money = c.currency.code === 'USD' ? 'en dólares' : `en ${c.currency.name} y en dólares`;
  return (
    <main id="contenido">
      <article className="guide info">
        <header className="guide-head">
          <h1>Listo, recibimos tus datos</h1>
          <p className="answer">{t.thanksAnswer}</p>
        </header>
        <div className="guide-body info-body" data-pos="gracias">
          <section>
            <h2>{t.thanksNoWait}</h2>
            <p>{t.thanksNow}</p>
            <p><a className="btn" href={cl(`${c.clOrigin}/publicar`, 'gracias')}>{t.thanksBtn}</a></p>
            {hasApp ? <p>{t.thanksApp}<a href={cl(`${c.clOrigin}/descargar`, 'gracias')}>{t.thanksAppLink}</a>.</p> : null}
          </section>
          <section>
            <h2>{t.thanksPrep}</h2>
            <ul>
              <li>Entre 12 y 20 fotos con luz de día: frente, sala, cocina, dormitorios, baños y patio.</li>
              <li>Los datos básicos: ciudad y barrio, metros, dormitorios y baños.</li>
              <li>{t.thanksPrice}, {money}.</li>
              <li>{t.thanksTitle}</li>
            </ul>
          </section>
          {guides.length ? (
            <section>
              <h2>Guías para leer antes de vender</h2>
              <ul>{guides.map((g) => <li key={g.slug}><Link href={pathFor(cc, g.slug)}>{g.h1}</Link></li>)}</ul>
            </section>
          ) : null}
        </div>
      </article>
    </main>
  );
}

// ---- 404 ----
export const notFoundMetadata = { title: 'Página no encontrada', robots: { index: false, follow: true } };

export async function NotFoundPage({ cc }) {
  const guides = await getGuides(cc);
  return (
    <main id="contenido">
      <article className="guide info">
        <header className="guide-head">
          <h1>Esta página no existe</h1>
          <p className="answer">Puede que el enlace esté mal escrito o que la guía haya cambiado de dirección. Estas son todas las guías del sitio.</p>
        </header>
        <div className="guide-body info-body">
          <ul>{guides.map((g) => <li key={g.slug}><Link href={pathFor(cc, g.slug)}>{g.h1}</Link></li>)}</ul>
        </div>
      </article>
    </main>
  );
}
