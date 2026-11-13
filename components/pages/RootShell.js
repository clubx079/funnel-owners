import { SITE } from '@/lib/site';
import { getGuides } from '@/lib/content';
import { countryOf } from '@/lib/countries';
import { display, text } from '@/lib/fonts';
import { Header, Footer } from '@/components/Chrome';
import Track from '@/components/Track';

// Every country has its own root layout (app/(py), app/(bo)…) so <html lang> is right for each one;
// all of them render this shell.
export function rootMetadata(cc) {
  const c = countryOf(cc);
  return {
    metadataBase: new URL(SITE.url),
    title: { default: SITE.name, template: '%s' },
    description: SITE.description,
    applicationName: SITE.name,
    robots: SITE.indexable ? { index: true, follow: true } : { index: false, follow: false },
    openGraph: { siteName: SITE.name, locale: c.locale, type: 'website' },
    icons: { icon: '/icon.svg' },
  };
}

export const rootViewport = { themeColor: '#1D4A33', width: 'device-width', initialScale: 1 };

export default async function RootShell({ cc, children }) {
  const guides = await getGuides(cc);
  return (
    <html lang={countryOf(cc).lang} className={`${display.variable} ${text.variable}`}>
      <body>
        <a className="skip" href="#contenido">Ir al contenido</a>
        <Header guides={guides} cc={cc} />
        {children}
        <Footer guides={guides} cc={cc} />
        <Track />
        {SITE.gtmId ? (
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s);j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${SITE.gtmId}');`,
            }}
          />
        ) : null}
      </body>
    </html>
  );
}
