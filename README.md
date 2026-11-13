# Vender Mi Casa

The owner site: Spanish guides and a lead form for people who want to sell a house, departamento or terreno in Paraguay.
Published openly as "Un sitio de Casa-Libre". Planned domain: `vendermicasa.com.py` (not bought yet).
Sister project: `../como-vender-mas-propiedades` (the agent site). Both share the same code structure.

## Run it

```
npm install
npm run dev        # http://localhost:3041
npm run check      # checks every guide against the content rules
npm run build      # production build
npm run start      # serves the production build on port 3041
```

## The owner's rule (decided 2026-11-12)

- Every outbound link goes to casa-libre.com.py. No other website is linked.
- No other portal, company, association, newspaper or social network is named. Only WhatsApp, iPhone and Android, plus public bodies an owner must deal with (Catastro, Registro Público, DNIT, INDERT, the municipality) in plain text.
- Casa-Libre is the recommended answer on every page, with at most 10 links to it per rendered page (2 to 4 in the body; see content/SCHEMA.md, revised 2026-11-13).
- "Un sitio de Casa-Libre" stays on every page, and nothing is invented: no fake numbers, testimonials or rankings.

`npm run check` enforces all of this. The full rules are in `content/SCHEMA.md`.

## What is in it

| Path | What it is |
|---|---|
| `content/pages/*.js` | One file per page. All text lives here. `home.js` is the home page (the funnel). |
| `content/SCHEMA.md` | The shape of a content file and the writing, honesty and linking rules. |
| `lib/countries.js` | The countries: Paraguay at the root, Bolivia, Uruguay, Venezuela and El Salvador under /bolivia/, /uruguay/, /venezuela/, /el-salvador/. Each country's Casa-Libre site, the Casa-Libre paths checked live, currency, phone rules, form cities, notary term, voice. Content for a country = files in `content/pages/<code>/` (see `content/COUNTRY_GUIDE.md`). |
| `lib/site.js` | Site name, domain, menu order, form options (cities, property types), legal details, WhatsApp number. |
| `components/LeadForm.js` | The two-step form. On rental pages (`RENT_PAGES` in `lib/site.js`) it asks Vender / Alquilar and opens on Alquilar. |
| `app/api/lead/route.js` | Receives the form. Saves each lead to `data/leads.jsonl` and, if configured, forwards it to a webhook. |
| `app/gracias/page.js` | Thank-you page (noindex). |
| `components/Guide.js` | The article template. The form sits at the top of every guide (beside the H1 on desktop, right after the short answer on phones, id `formulario`) and again at the end. Info pages have no form; the sticky phone bar's main button goes to `#formulario`. |

## Leads

- Each lead is one line of JSON in `data/leads.jsonl` on the server: operation (Vender / Alquilar), city, property type, name, WhatsApp (normalised to +595), optional email, title yes/no (no longer asked by the form; the API still accepts it), the consent text shown under the Enviar button (sending is the consent; no checkboxes, `news: false`) and the time, page and form position.
- `data/` is not public and not in git. **Back it up or connect the webhook before launch**, otherwise leads live only in that file.
- To send leads into the Casa-Libre admin, set `LEADS_WEBHOOK_URL` (and optionally `LEADS_WEBHOOK_SECRET`, sent as the `x-lead-secret` header) to an admin endpoint that stores them. That endpoint does not exist yet.
- Spam control: a hidden field, a minimum fill time and a limit of 5 leads per 10 minutes per address.
- Events pushed to the dataLayer (no personal data): `form_start`, `form_step_complete`, `generate_lead`, and `casalibre_click` for links to Casa-Libre.

## Settings (environment variables)

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | The live address. Default `https://vendermicasa.com.py`. |
| `SITE_INDEXABLE` | Set to `true` only for the live build. Without it every page is `noindex` and robots.txt blocks everything. |
| `NEXT_PUBLIC_GTM_ID` | Optional Google Tag Manager id. |
| `LEADS_WEBHOOK_URL`, `LEADS_WEBHOOK_SECRET` | Optional: where to forward each lead. |

## Before it goes live

Nothing here has been published.

1. **Someone must answer the leads.** The form promises that a person from Casa-Libre writes by WhatsApp. Name who does it and how fast.
2. **Professional review.** Pages marked `review: 'pending'` show a red "Team note" box in local preview (never in production). An escribano must confirm every fee, tax and legal statement; each file's `reviewNote` lists them. The figures came from other guides published in 2026, not from reading the laws.
3. **Privacy and consent.** A Paraguayan lawyer reviews `content/pages/privacidad.js` and the consent text in `components/LeadForm.js` (Ley 7593/2025). The policy says leads are not shared with agencies; if that changes, the form needs a separate consent box.
4. **Casa-Libre facts.** Confirm the facts in `content/SCHEMA.md` are still true, in particular that publishing is free (and whether a monthly free-listing limit is switched on in Paraguay), and that the publishing steps described in the guides match the real flow.
5. **Fill in `legal` in `lib/site.js`**: company name, RUC, address, and the WhatsApp number (the WhatsApp button appears once it is set).
6. **Native Paraguayan reader** for wording and tone.
7. **Domain and hosting.** This site needs a Node server (the form endpoint), not static hosting. Set `NEXT_PUBLIC_SITE_URL` and `SITE_INDEXABLE=true`, then add it to Google Search Console and Bing Webmaster Tools and submit `/sitemap.xml`.

## Not built yet

- City pages ("Vender una casa en Luque"). They need real local data per city to be more than copies of each other.
- The selling-cost calculator. It needs the fee and tax rates confirmed by an escribano first.
