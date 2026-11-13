import Link from 'next/link';
import { SITE, OWNER } from '@/lib/site';
import { COUNTRIES, countryOf, pathFor } from '@/lib/countries';
import { ui } from '@/lib/voice';
import { cl } from '@/lib/utm';
import NavLink from './NavLink';
import StickyCta from './StickyCta';

/** The ownership line. It is text, on every page, above the header: readers and crawlers see who publishes the site. */
export function OwnerLine() {
  return (
    <p className="owner" data-pos="header">
      <img src="/casa-libre-cuate-reversed.svg" alt="" width="20" height="19" />
      <span>Un sitio de <a href={cl(OWNER.url, 'owner-line')}>Casa-Libre</a></span>
    </p>
  );
}

export function Header({ guides, cc = 'py' }) {
  const c = countryOf(cc);
  return (
    <header className="site-head">
      <div className="head-row">
        <Link href={pathFor(cc, '')} className="brand" aria-label={`${SITE.name}${cc === 'py' ? '' : ` ${c.name}`}, inicio`}>
          <svg viewBox="0 0 40 40" width="40" height="40" aria-hidden="true">
            <path d="M6 18.5 20 7l14 11.5V34H6z" fill="none" stroke="var(--monte)" strokeWidth="3" strokeLinejoin="miter" />
            <path d="M16.5 34v-9h7v9" fill="none" stroke="var(--monte)" strokeWidth="3" />
          </svg>
          <span>{SITE.brandLines[0]}<br />{SITE.brandLines[1]}{cc === 'py' ? null : <small className="brand-country">{c.name}</small>}</span>
        </Link>
        <nav className="main-nav" aria-label="Guías">
          <ul>
            {guides.filter((g) => g.nav).map((g) => (
              <li key={g.slug}>
                <NavLink href={pathFor(cc, g.slug)} title={g.h1}>{g.nav || g.navLabel || g.h1}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <a className="btn head-cta" href={cl(`${c.clOrigin}/publicar`, 'header')} data-pos="header-button">{OWNER.publishLabel}</a>
      </div>
    </header>
  );
}

export function Footer({ guides, cc = 'py' }) {
  const c = countryOf(cc);
  const t = ui(cc);
  const { company, ruc, address, whatsapp } = SITE.legal;
  const legal = [company, ruc && `RUC ${ruc}`, address, whatsapp && `WhatsApp ${whatsapp}`].filter(Boolean).join(', ');
  return (
    <footer className="site-foot">
      <div className="foot-grid">
        <div className="foot-about">
          <p className="foot-name">{SITE.name}</p>
          <p>
            Para publicar y buscar casas, departamentos y terrenos en {c.name}: <a href={cl(`${c.clOrigin}/`, 'footer-about')}>Casa-Libre</a>, gratis y con contacto directo por WhatsApp.
          </p>
          {legal ? <p>{legal}.</p> : null}
          <p>{t.writeUs} <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>.</p>
        </div>
        <nav aria-label="Todas las guías">
          <p className="foot-h">Guías</p>
          <ul>
            {guides.filter((g) => g.nav).map((g) => <li key={g.slug}><Link href={pathFor(cc, g.slug)}>{g.h1}</Link></li>)}
            <li><Link href={pathFor(cc, 'guias')}><strong>Todas las guías ({guides.length})</strong></Link></li>
          </ul>
        </nav>
        <nav aria-label="Sobre el sitio">
          <p className="foot-h">Sobre el sitio</p>
          <ul>
            <li><Link href="/quienes-somos/">Sobre este sitio</Link></li>
            <li><Link href="/privacidad/">Política de privacidad</Link></li>
            <li><Link href="/contacto/">Contacto</Link></li>
          </ul>
        </nav>
      </div>
      <p className="foot-note">
        Las guías ofrecen información general y no reemplazan el asesoramiento de un {c.notary}, abogado o contador.
      </p>
      <nav className="countries" aria-label="Países">
        <span>Guías por país:</span>
        <ul>
          {Object.values(COUNTRIES).map((x) => (
            <li key={x.code}>{x.code === cc ? <span aria-current="page">{x.name}</span> : <a href={pathFor(x.code, '')} hrefLang={x.lang}>{x.name}</a>}</li>
          ))}
        </ul>
      </nav>
      <StickyCta publishHref={cl(`${c.clOrigin}/publicar`, 'sticky')} cc={cc} />
    </footer>
  );
}
