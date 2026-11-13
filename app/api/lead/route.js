import { FORM } from '@/lib/site';
import { COUNTRIES, DEFAULT_COUNTRY, checkWhatsapp } from '@/lib/countries';
import { ui, consentText } from '@/lib/voice';
import { saveLead, attributionOf } from '@/lib/leadStore';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// Where leads go:
//  1. The Casa-Libre database of the form's country (public.funnel_leads; lib/leadStore.js, env AIROBASE_URL_<CC> /
//     AIROBASE_SECRET_KEY_<CC>, read at request time). When that is not configured or fails, data/leads.jsonl on this
//     server (one JSON object per line; not public, not in git), so no lead is lost.
//  2. If LEADS_WEBHOOK_URL is set, the same row is also POSTed there.
const hits = new Map(); // ip -> timestamps, for a simple limit of 5 leads per 10 minutes

const bad = (error, status = 400) => Response.json({ ok: false, error }, { status });


export async function POST(request) {
  let b;
  try { b = await request.json(); } catch { return bad('Datos inválidos.'); }

  const ip = (request.headers.get('x-forwarded-for') || '').split(',')[0].trim() || 'local';
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < 10 * 60 * 1000);
  if (recent.length >= 5) return bad('Recibimos varios envíos seguidos. Probá de nuevo en unos minutos.', 429);

  // Bots: the hidden field is filled in, or the form was sent faster than a person can.
  if (b.website || !(Number(b.elapsed) >= 2500)) return Response.json({ ok: true }); // accepted silently, not saved

  // The country of the page the form was sent from (Paraguay when missing: forms sent before countries existed).
  const cc = b.country === undefined ? DEFAULT_COUNTRY : b.country;
  const country = COUNTRIES[cc];
  if (!country) return bad('País inválido.');
  const t = ui(cc);
  const name = String(b.name || '').trim().slice(0, 80);
  if (name.length < 2) return bad(t.errName);
  const wa = checkWhatsapp(b.whatsapp, cc);
  if (!wa.ok) return bad(wa.error);
  if (!country.formCities.includes(b.city) || !FORM.types.includes(b.type)) return bad(t.errBoth);
  // Sending the form is the consent (the text under the button says so); no checkbox.
  const OPERATIONS = ['Vender', 'Alquilar'];
  if (!OPERATIONS.includes(b.operation)) return bad(cc === DEFAULT_COUNTRY || country.voice === 'voseo' ? 'Elegí si querés vender o alquilar.' : country.voice === 'usted' ? 'Elija si quiere vender o alquilar.' : 'Elige si quieres vender o alquilar.');
  const email = String(b.email || '').trim();
  if (email && (email.length > 120 || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email))) return bad(country.voice === 'voseo' ? 'Revisá tu email.' : country.voice === 'usted' ? 'Revise su email.' : 'Revisa tu email.');

  const lead = {
    site: 'owners',
    country: cc,
    page: String(b.page || '').slice(0, 200),
    form_location: String(b.location || '').slice(0, 20),
    operation: b.operation,
    city: b.city,
    property_type: b.type,
    has_title: ['Sí', 'No', 'No sé'].includes(b.title) ? b.title : null,
    portfolio: null,
    role: null,
    agency: null,
    name,
    whatsapp: wa.e164,
    email: email || null,
    // Proof of consent: what the person saw and accepted, and when.
    consent: { contact: true, news: false, method: 'submit', text: consentText(cc), at: new Date(now).toISOString() }, // text = what is shown under the button (the server's copy)
    ...attributionOf(b), // utm, referrer, posthog_distinct_id
    ip,
    user_agent: (request.headers.get('user-agent') || '').slice(0, 200),
  };

  try {
    await saveLead(lead);
  } catch (e) {
    console.error(`[lead] could not save the lead anywhere: ${e?.code || e?.message || e}`);
    return bad('No pudimos guardar tus datos. Probá de nuevo en un momento.', 500);
  }
  hits.set(ip, [...recent, now]);

  const hook = process.env.LEADS_WEBHOOK_URL;
  if (hook) {
    try {
      await fetch(hook, {
        method: 'POST',
        headers: { 'content-type': 'application/json', ...(process.env.LEADS_WEBHOOK_SECRET ? { 'x-lead-secret': process.env.LEADS_WEBHOOK_SECRET } : {}) },
        body: JSON.stringify(lead),
        signal: AbortSignal.timeout(8000),
      });
    } catch { /* the lead is already saved in the file; the webhook can be retried from there */ }
  }
  return Response.json({ ok: true });
}
