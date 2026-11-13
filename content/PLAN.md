# Page plan: 54 new guides (Nov 12, 2026)

Every page answers ONE real search that people in Paraguay type (Google autocomplete, Paraguay, Nov 12 2026:
`C:\Users\HP\Desktop\airosofts\research_notes\Casa Libre SEO funnel sites\paraguay_seller_buyer_keywords.md`, sections 1–3 and 7).
The H1 is that search, written the way people type it (with correct accents). Cover the listed variants as H2s or FAQ.

Read `content/SCHEMA.md` first (file shape, Casa-Libre-only rule, links, honesty). On top of it, for these pages:

- **Length:** 900–1,300 words as `npm run check` counts them (city and land pages 800–1,100).
- **Casa-Libre body links (revised 2026-11-13):** 2 to 4 per page, at most 10 Casa-Libre links on the rendered page in total (see "Casa-Libre links" in SCHEMA.md). Anchors are mostly the brand alone or a plain phrase ("publicar en Casa-Libre"); never a keyword phrase. Rental pages link rental destinations, sale pages sale destinations. Allowed URLs: the fixed list in SCHEMA.md plus every URL in `content/data/casalibre-links.json` (Casa-Libre's own city pages and guides, all live).
- **Internal links:** 3–5 to other guides of this site, chosen from the slugs in `lib/site.js` (GUIDES). The page template already lists the other guides of the same group, so pick links to OTHER groups where they help the reader.
- **Different from its neighbours:** never repeat another page's main answer; summarise in one or two sentences and link to it (for example costs → `/gastos-al-vender-una-casa-paraguay/`, escribano fees → `/cuanto-cobra-escribano-paraguay/`, taxes → `/impuesto-por-vender-una-casa-paraguay/`, transfer steps → `/transferencia-de-inmueble-paraguay/`).
- **Data:** `content/data/py-market.json` = Casa-Libre's own Paraguay listings snapshot (Nov 12 2026). Use it exactly as given; always say what it is: "según las propiedades publicadas en Casa-Libre al 12 de noviembre de 2026 (precios pedidos, no precios de cierre)". USD as given; guaraníes = USD × 7.300, rounded, marked "aprox.". A null value means too few listings: say so, never fill the gap. Never call it "el mercado" without that qualifier.
- **Census:** city populations from the 2022 census are in the keyword notes (section 2, line "Population context"). Only those numbers.
- **Never invent local facts:** no neighbourhoods, landmarks, roads, new developments, growth stories, typical buyers or "zona en crecimiento" claims. What makes a city page different is its data, its census number and the comparisons you can compute from the JSON.
- `review: 'pending'` whenever a page states a legal, tax, fee, title, registry or contract fact; include the warn callout. Legal and tax figures only as the notes give them (search the notes and `page_templates_programmatic_and_forms.md` for escribano, IRP, Ley 7424, Ley 1307, transferencia, título, INDERT, sucesión, usucapión, alquiler, IVA, garantía).
- Every page: `published` and `updated` = '2026-11-12'; `cta` and `closing` href = 'https://casa-libre.com.py/publicar' (rental pages may use '/alquilar' for the closing; `/publicar` is the place to publish a rental too).

## Vender una propiedad (writer H1, H2)

| slug | H1 | Searches it answers | Must cover |
|---|---|---|---|
| como-vender-mi-casa-sin-inmobiliaria | Cómo vender mi casa sin inmobiliaria en Paraguay | como vender mi casa sin inmobiliaria; puedo vender mi casa sin inmobiliaria; como vender mi casa yo mismo | what an agency does vs doing it yourself (table: tasks, who does what), the steps alone, when an agency is worth it (honest), how Casa-Libre lets an owner publish free and get WhatsApp contacts |
| casa-en-venta-por-dueno-paraguay | Casa en venta por dueño en Paraguay: cómo publicarla | casa en venta en paraguay por dueño; dueño vende casa en asunción; dueño vende terreno en luque | what "por dueño" means to buyers, how to present an owner listing so it's trusted (papers ready, real photos, price), publishing it on Casa-Libre (owners and agencies publish there), safety |
| como-vender-un-departamento-paraguay | Cómo vender un departamento en Paraguay | vendo departamento; vendo departamento urgente por viaje; cómo vender un departamento | what's different for a departamento (consorcio/expensas, reglamento, parking, building amenities, papers of the unit), pricing with the Asunción data, publishing on Casa-Libre (/venta/departamentos/asuncion) |
| como-poner-mi-casa-en-venta-por-internet | Cómo poner mi casa en venta por internet | como poner mi casa en venta por internet; donde publicar mi casa en venta gratis; vender casa por internet | step-by-step online listing, what a good listing contains, sharing one Casa-Libre link on WhatsApp and redes sociales, answering enquiries |
| fotos-para-vender-una-casa | Cómo sacar fotos para vender una casa con el celular | fotos para vender una casa; como sacar fotos de una casa para vender | room-by-room shot list (table), light, order, what to hide, how many photos, uploading them to Casa-Libre (from the iPhone or Android app) |
| anuncio-para-vender-una-casa | Cómo escribir el anuncio para vender tu casa: plantilla | anuncio para vender una casa; ejemplo de anuncio de venta de casa; vendo casa texto | a fill-in template in Paraguayan Spanish, title formula (tipo + ciudad + dato fuerte), what to include (papers, price in Gs. and USD), 3 worked example ads (labelled ejemplo), mistakes |
| como-mostrar-una-casa-a-compradores | Cómo mostrar tu casa a compradores con seguridad | como mostrar una casa para vender; visitas para vender una casa | preparing the house, scheduling by WhatsApp, safety (never alone, verify the person, no papers or keys handed over), questions buyers ask, after the visit |
| vendo-casa-urgente | Vendo casa urgente: cómo vender rápido sin regalar el precio | vendo casa urgente; vendo terreno barato urgente; vendo departamento urgente por viaje | honest: fast = right price + papers ready + good listing + quick answers; a 14-day plan; how much to adjust price (no invented %); traps of selling in a hurry (señas, documents); publish today on Casa-Libre |
| por-que-no-se-vende-mi-casa | ¿Por qué no se vende mi casa? Causas y soluciones | por que no se vende mi casa; cuanto tarda en venderse una casa | table of causes → fixes (price vs similar listings, photos, papers, description, answering, availability for visits), checking your price against similar listings on Casa-Libre |

## Vender por ciudad (13 pages: `vender-casa-en-<city>`)

Cities and their data key in `py-market.json`: asuncion, luque, san-lorenzo, lambare, fernando-de-la-mora, capiata, mariano-roque-alonso, nemby, villa-elisa, san-bernardino, ciudad-del-este, encarnacion, limpio.

- H1 `Vender una casa en <Ciudad>`; title like `Vendo casa en <Ciudad>: precios y cómo publicarla gratis` (shorten for long city names to stay 50–62 characters).
- Searches: vendo casa en <ciudad>; vender casa en <ciudad>; casas en venta en <ciudad> (how much they ask); dueño vende casa en <ciudad> where natural.
- Sections: the answer with the city's numbers; a table of that city's snapshot (casas, departamentos, dúplex, terrenos for sale; for rent; median and range of asking prices for casas, departamentos and terrenos where not null; median dormitorios; land USD/m² where present); how your house compares (median vs the national picture: compute the median of the 13 cities' casa medians and say how this city sits; compare with Asunción); how to price yours with similar listings on Casa-Libre (link the city's own Casa-Libre pages from `casa_libre_pages` in the JSON, plus /propiedades); papers and costs in one short section that links the national guides (the municipal transfer tax differs between Asunción and other municipalities per the notes, flag it); how to publish on Casa-Libre; FAQ with the city name.
- Population: the 2022 census figure when the notes have it (San Bernardino is not in the list: say nothing about its population).
- Each city page must read differently: use its own numbers and its own comparisons; vary the order of sections and the FAQ questions between cities.

## Terrenos por ciudad (4 pages: `vender-terreno-en-<city>`: luque, capiata, san-bernardino, limpio)

- H1 `Vender un terreno en <Ciudad>`; searches: vendo terreno en <ciudad>; terrenos en venta en <ciudad>; venta de terrenos en <ciudad> a cuotas.
- Use the city's terrenos count, terrenos price stats and terreno_usd_per_m2_median (null → say there are too few priced listings). Sections: the numbers; how to price land (m² × location, link `/como-calcular-el-valor-de-un-terreno-paraguay/`); title situation (link `/requisitos-para-vender-un-terreno-paraguay/`, `/como-titular-un-terreno-paraguay/`); a cuotas vs contado (general); photos of land and the map location; publish on Casa-Libre (city page links from the JSON); FAQ. Don't repeat the city house page; link it (`/vender-casa-en-<city>/`).

## Papeles y trámites

| slug | H1 | Searches | Must cover |
|---|---|---|---|
| requisitos-para-vender-una-casa-paraguay | Requisitos para vender una casa en Paraguay | requisitos para vender una casa en paraguay; que documentos se necesitan para vender una casa; pasos para vender una casa en paraguay; documentos para vender una casa | checklist table of papers (título, informe de condición de dominio, cuenta corriente catastral / impuesto inmobiliario al día, cédulas, estado civil and spouse consent as "consultá"), who issues each, the steps in order |
| requisitos-para-vender-un-terreno-paraguay | Requisitos para vender un terreno en Paraguay | requisitos para vender un terreno en paraguay; como vender un terreno en paraguay (papers part) | land-specific papers (plano/mensura, título, catastro), title situations table, link the land guide |
| titulo-de-propiedad-paraguay | Título de propiedad en Paraguay: qué es y cómo sacarlo | titulo de propiedad en paraguay; como sacar titulo de propiedad; cuanto cuesta un titulo de propiedad | what it is, where it is registered, how to get a copy / check it, what to do if it's lost or not in your name (general), cost only if the notes give it |
| como-titular-un-terreno-paraguay | Cómo titular un terreno en Paraguay y cuánto cuesta | como titular un terreno en paraguay; cuanto cuesta titular un terreno (municipal, fiscal); mandar titular | the routes the notes mention (municipal land, fiscal land, INDERT, usucapión) in general terms, who to ask, why a titled terreno sells better; no invented costs |
| terreno-del-indert-se-puede-vender | ¿Se puede vender un terreno del INDERT? | se puede vender un terreno del indert; indert titulo de propiedad | honest answer: depends on the title situation; what the notes say; what to check; ask an escribano; publishing only once papers allow it |
| vender-casa-sin-titulo-paraguay | ¿Se puede vender una casa sin título en Paraguay? | se puede vender una casa sin titulo; puedo vender una casa sin titulo de propiedad; vender casa sin titulo | what you can and can't do without a title (sale of rights vs registered sale, general terms), risks for buyer and seller, getting the title first |
| vender-casa-heredada-paraguay | Cómo vender una casa heredada en Paraguay (sucesión) | como vender una casa heredada; se puede vender una casa en sucesion; sucesion paraguay | heirs, the succession process in general, agreement between heirs, when you can sign the sale, what to prepare |
| contrato-de-compraventa-inmueble-paraguay | Contrato privado de compraventa de inmueble en Paraguay: modelo | contrato privado de compraventa de inmueble paraguay (modelo, word); contrato de compraventa paraguay | what a private contract is vs the escritura pública, the clauses a model has (list), a model outline (clause headings with blanks, labelled modelo orientativo, review by an escribano) |
| sena-de-trato-paraguay | Seña de trato en Paraguay: cómo funciona | seña de trato paraguay; boleto de compraventa; cuanto se da de seña | what a seña is, what to write in the receipt, what happens if buyer or seller backs out (general, review), common amounts only if the notes support them |
| condicion-de-dominio-paraguay | Condición de dominio en Paraguay: qué es y cómo pedirla | que es condicion de dominio en paraguay; como solicitar condicion de dominio; que es la cuenta corriente catastral | what the informe shows (owner, liens, embargos), where it is requested, why buyers ask for it, the cuenta corriente catastral alongside it |
| vender-casa-con-hipoteca-paraguay | Cómo vender una casa que todavía estoy pagando | como vender una casa que aun estoy pagando; vender casa con hipoteca; como saber si un terreno esta hipotecado | the options (cancel with the sale money, bank involvement), steps, what the buyer will check, talk to your bank and escribano |

## Impuestos y gastos

| slug | H1 | Searches | Must cover |
|---|---|---|---|
| impuesto-por-vender-una-casa-paraguay | Qué impuesto se paga al vender una casa en Paraguay | qué impuesto se paga al vender una casa en paraguay; cuánto se paga de impuesto por vender una casa; impuesto a la venta de inmuebles; iva venta de inmuebles paraguay; venta de inmuebles como facturar | IRP figures as the notes give them (and the older 3% figure that still circulates), IVA only as far as the notes support, a worked example, who withholds it |
| gastos-al-vender-una-casa-paraguay | Gastos al vender una casa en Paraguay: lista completa | gastos al vender una casa; cuanto cuesta vender una casa en paraguay; calculadora venta de inmuebles paraguay | ONE table of every cost item with who usually pays and the figure from the notes (or "consultá"), a worked example in Gs. and USD, the costs that are zero when you publish on Casa-Libre |
| quien-paga-la-escritura-paraguay | Quién paga la escritura en Paraguay: ¿comprador o vendedor? | quien paga la escritura comprador o vendedor; quien paga el escribano en una venta de inmueble | the honest answer: custom vs agreement (the notes give no fixed rule: say so), what to write in the seña/boleto, examples of splits labelled as examples |
| impuesto-inmobiliario-paraguay | Impuesto inmobiliario en Paraguay: cómo se calcula y cuánto se paga | como calcular el impuesto inmobiliario en paraguay; cuanto se paga de impuesto inmobiliario | what it is, valor fiscal vs market price (per the notes), why it must be paid up before selling, where to check; figures only as the notes give them |

## Precios y valor

| slug | H1 | Searches | Must cover |
|---|---|---|---|
| cuanto-cuesta-una-casa-en-paraguay | Cuánto cuesta una casa en Paraguay | cuanto cuesta / cuánto vale / cuánto sale una casa en paraguay (en guaraníes, en dólares, promedio, en asunción) | a table of all 13 cities from the JSON (median asking price of casas en venta and range, Gs. aprox.), what moves the price, how to check a specific house on Casa-Libre (/comprar, city pages) |
| cuanto-cuesta-un-terreno-en-paraguay | Cuánto cuesta un terreno en Paraguay | cuanto cuesta / cuánto vale / cuánto sale un terreno en paraguay; precio del metro cuadrado de terreno | table of cities with terrenos price stats and USD/m² where not null; nulls stated; hectáreas: no data (say so) |
| como-calcular-el-valor-de-un-terreno-paraguay | Cómo calcular el valor de un terreno en Paraguay | como calcular el valor de un terreno en paraguay; cuanto vale un terreno | method: comparables per m², adjustments (frente, servicios, título, acceso), a worked example using a city's USD/m² from the JSON, link the tasación guide |
| cuanto-cuesta-un-departamento-en-asuncion | Cuánto cuesta un departamento en Asunción | cuanto cuesta un departamento en asuncion; cuanto cuesta comprar un departamento en paraguay | Asunción departamentos venta stats + rent stats, comparison with other cities' departamentos from the JSON, link /venta/departamentos/asuncion and /alquiler/departamentos/asuncion |
| cuanto-tarda-en-venderse-una-casa | ¿Cuánto tarda en venderse una casa en Paraguay? | cuanto tarda en venderse una casa; cuánto tarda vender una propiedad en paraguay | honest: no official figure; the stages and what each depends on (finding a buyer, papers, escribano, registry: the notes have a registration time, flag it); how to shorten each |
| conviene-vender-o-alquilar-mi-casa | ¿Conviene vender o alquilar mi casa? | conviene vender o alquilar | the JSON's gross_rent_yield_pct by city (only non-null, with the caveat that it compares asking prices and is not a return), the questions to decide (need cash, upkeep, vacancy, taxes), both options on Casa-Libre |

## Alquilar tu propiedad

| slug | H1 | Searches | Must cover |
|---|---|---|---|
| como-alquilar-mi-casa-paraguay | Cómo alquilar mi casa en Paraguay | como alquilar mi casa; alquilar mi casa paraguay | steps: price, contract, garantía, choosing the tenant, publishing on Casa-Libre, handing over |
| cuanto-cuesta-un-alquiler-en-paraguay | Cuánto cuesta un alquiler en Paraguay | cuanto cuesta un alquiler en paraguay (asuncion, encarnacion, ciudad del este); cuanto cuesta alquilar un departamento en asuncion; cuánto sale alquilar una casa | table of rent stats by city (casas, departamentos, per month), nulls stated |
| cuanto-cobrar-de-alquiler-paraguay | Cuánto cobrar de alquiler por mi casa o departamento | cuanto cobrar de alquiler; como calcular el precio de un alquiler | method for an owner: comparables on Casa-Libre (/alquilar, city alquiler pages), adjustments (amoblado, expensas, garage), a worked example from the JSON |
| contrato-de-alquiler-paraguay | Contrato de alquiler en Paraguay: modelo y cláusulas | contrato de alquiler paraguay (pdf, word, modelo); cuanto cuesta un contrato de alquiler | the clauses a contract has (list), a model outline with blanks (modelo orientativo), registration/IVA only as the notes support |
| garantia-de-alquiler-paraguay | Garantía de alquiler en Paraguay: cómo funciona y cuándo se devuelve | garantia de alquiler paraguay; la garantía de alquiler se devuelve; garantia de alquiler se factura | what it is, typical forms (deposit, garante) in general, return conditions, what to write in the contract |
| iva-del-alquiler-paraguay | IVA del alquiler en Paraguay: cuánto es y quién lo paga | cuánto es el iva de alquiler en paraguay; iva alquiler paraguay | only what the notes support; otherwise explain the question and send to a contador; review pending |
| donde-publicar-un-alquiler-gratis | Dónde publicar un alquiler gratis en Paraguay | donde publicar un alquiler gratis; publicar casa en alquiler; alquiler dueño directo asunción | the answer: Casa-Libre (free, WhatsApp contacts, no commission), what a rental listing needs, sharing the link, screening enquiries |

## Alquiler por ciudad (10 pages: `alquiler-de-casas-en-<city>`, added Nov 12 2026)

Cities (keys in py-market.json, the ones with enough rentals): asuncion, luque, fernando-de-la-mora, san-lorenzo, encarnacion, ciudad-del-este, lambare, mariano-roque-alonso, san-bernardino, nemby.

- H1 `Alquiler de casas y departamentos en <Ciudad>`; title like `Alquiler de casas en <Ciudad>: precios y dónde publicar` (50 to 62 characters, shorten for long names).
- Searches: alquiler de casas en <ciudad>; alquiler de departamentos en <ciudad>; casas en alquiler en <ciudad>; cuánto cuesta alquilar en <ciudad>; alquilar mi casa en <ciudad>.
- Written for the OWNER who wants to rent out (and useful to anyone checking prices): the city's rental snapshot table (for_rent counts; casas and departamentos monthly medians and ranges where not null), how much to ask (compare with the medians, adjust by size, amoblado, garage), gross yield where the JSON has it (casa_gross_rent_yield_pct / departamento_gross_rent_yield_pct) with the caveats (asking prices; San Bernardino seasonal; small samples flagged), contract and guarantee basics in one short section that links to `/contrato-de-alquiler-paraguay/` and `/garantia-de-alquiler-paraguay/` (do not repeat them), IVA in one sentence linking `/iva-del-alquiler-paraguay/`, and publishing the rental free on Casa-Libre.
- Casa-Libre links (2 to 4 in the body, rental destinations only): the city's `/alquiler/casas/<city>` and `/alquiler/departamentos/<city>` when in casalibre-links.json, otherwise the filtered search `https://casa-libre.com.py/propiedades?op=alquiler&amp;type=casa&amp;q=<Ciudad>` (accents kept, URL-encoded), plus `/publicar`, `/alquilar`, `/administracion-de-propiedades` and the Casa-Libre guide `/guias/como-alquilar-mi-propiedad`. `closing.href` = 'https://casa-libre.com.py/publicar'; `cta.href` = '/publicar'.
- `review: 'pending'` if you state anything about contracts, guarantees or IVA.
- Each city page reads differently: its own numbers and comparisons with the other cities (compute from the JSON); vary section order and FAQ. Never invent neighbourhoods, landmarks or demand stories.

## City pages: local section (added 2026-11-13)

Every city page (vender-casa, vender-terreno, alquiler-de-casas) has one section of local context written for that city and that page type: who buys or rents there, the zones and references people use (well-known barrios, avenues, the route, the river, the campus, the airport), distance to Asunción, the municipality's role. No numbers beyond the JSON and well-known distances ("unos 50 kilómetros"). Only facts a local would confirm; each is listed in `reviewNote` for checking before indexing. A city page that is the same text with the name swapped must not exist: check with a shingle comparison before publishing a new one.
