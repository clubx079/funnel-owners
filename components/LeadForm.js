'use client';
import { useRef, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { capture, distinctId, getAttribution } from '@/lib/analytics';
import { FORM, SITE } from '@/lib/site';
import { countryOf, checkWhatsapp, pathFor } from '@/lib/countries';
import { ui, consentText } from '@/lib/voice';

const OPERATIONS = ['Vender', 'Alquilar'];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const WA_TEXT = { Vender: 'Hola, quiero vender mi propiedad.', Alquilar: 'Hola, quiero alquilar mi propiedad.' };

const push = (event, data) => {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...data }); // never names, phone numbers or emails
  capture(event, data); // PostHog too: the same allow-listed fields, never names, phones or emails
};

/** Two steps on the same page: first what and where (nothing personal), then name, WhatsApp and an optional email.
 *  cc: the country of the page (its cities, phone rules and voice). rental: the operation starts on "Alquilar". */
export default function LeadForm({ location = 'hero', rental = false, cc = 'py' }) {
  const router = useRouter();
  const path = usePathname();
  const startedAt = useRef(0);
  const country = countryOf(cc);
  const t = ui(cc);
  const [step, setStep] = useState(1);
  const [v, setV] = useState({ operation: rental ? 'Alquilar' : 'Vender', city: '', type: '', name: '', whatsapp: '', email: '', website: '' });
  const [error, setError] = useState('');
  const [sending, setSending] = useState(false);
  const set = (k) => (e) => setV((s) => ({ ...s, [k]: e.target.value }));
  const id = (k) => `lf-${location}-${k}`;
  const meta = { form_location: location, page_path: path, country: country.code };

  const start = () => {
    if (!startedAt.current) { startedAt.current = Date.now(); push('form_start', meta); }
  };
  const next = (e) => {
    e.preventDefault();
    if (!v.city && !v.type) return setError(t.errBoth);
    if (!v.city) return setError(t.errCity);
    if (!v.type) return setError(t.errType);
    setError(''); setStep(2); push('form_step_complete', { ...meta, operation: v.operation, city: v.city, property_type: v.type });
  };
  const submit = async (e) => {
    e.preventDefault();
    const email = v.email.trim();
    if (v.name.trim().length < 2) return setError(t.errName);
    const wa = checkWhatsapp(v.whatsapp, cc);
    if (!wa.ok) return setError(wa.error);
    if (email && (email.length > 120 || !EMAIL_RE.test(email))) return setError(t.errEmail);
    setError(''); setSending(true);
    try {
      const res = await fetch('/api/lead/', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ ...v, ...getAttribution(), posthog_distinct_id: distinctId(), email, country: country.code, page: path, location, elapsed: Date.now() - startedAt.current, consentText: consentText(cc) }),
      });
      const out = await res.json().catch(() => ({}));
      if (!res.ok || !out.ok) throw new Error(out.error || 'error');
      push('generate_lead', { ...meta, operation: v.operation, city: v.city, property_type: v.type, lead_source: 'form' });
      router.push(pathFor(cc, 'gracias'));
    } catch (err) {
      setSending(false);
      setError(err.message && err.message !== 'error' ? err.message : t.errNet);
    }
  };

  const Select = ({ name, label, options, placeholder }) => (
    <div className="lf-field">
      <label htmlFor={id(name)}>{label}</label>
      <select id={id(name)} value={v[name]} onChange={set(name)} onFocus={start}>
        {placeholder ? <option value="" disabled>{placeholder}</option> : null}
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );

  return (
    <form className={`lead lead-${location}`} id={location === 'hero' ? 'formulario' : undefined} onSubmit={step === 1 ? next : submit} noValidate data-pos={`form-${location}`} data-step={step}>
      <p className="lead-h">{location === 'final' ? t.formFinal[v.operation] : t.formHeading[v.operation]}</p>
      <p className="lead-sub">{t.formSub}</p>
      <p className="lead-step" aria-live="polite">Paso {step} de 2{step === 1 ? `: ${t.stepProp}` : `: ${t.stepData}`}</p>

      {step === 1 ? (
        <>
          {Select({ name: 'operation', label: t.qOperation, options: OPERATIONS })}
          {Select({ name: 'city', label: t.qCity, options: country.formCities, placeholder: t.phCity })}
          {Select({ name: 'type', label: t.qType, options: FORM.types, placeholder: t.phType })}
          {error ? <p className="lead-err" role="alert">{error}</p> : null}
          <button className="btn lead-btn" type="submit">Continuar</button>
        </>
      ) : (
        <>
          <div className="lf-field">
            <label htmlFor={id('name')}>{t.name}</label>
            <input id={id('name')} type="text" autoComplete="name" value={v.name} onChange={set('name')} maxLength={80} />
          </div>
          <div className="lf-field">
            <label htmlFor={id('wa')}>{t.whatsapp}</label>
            <input id={id('wa')} type="tel" inputMode="tel" autoComplete="tel" placeholder={country.phone.example} value={v.whatsapp} onChange={set('whatsapp')} maxLength={20} />
          </div>
          <div className="lf-field">
            <label htmlFor={id('email')}>Email (opcional)</label>
            <input id={id('email')} type="email" inputMode="email" autoComplete="email" value={v.email} onChange={set('email')} maxLength={120} />
          </div>
          {/* Hidden from people; bots fill it in. */}
          <div className="lf-hp" aria-hidden="true">
            <label htmlFor={id('web')}>No completes este campo</label>
            <input id={id('web')} type="text" tabIndex={-1} autoComplete="off" value={v.website} onChange={set('website')} />
          </div>
          {error ? <p className="lead-err" role="alert">{error}</p> : null}
          <button className="btn lead-btn" type="submit" disabled={sending}>{sending ? 'Enviando…' : 'Enviar'}</button>
          <p className="lead-consent">{t.consentA}<a href="/privacidad/">{t.consentB}</a>.</p>
          <button className="lead-back" type="button" onClick={() => { setStep(1); setError(''); }}>Volver al paso 1</button>
        </>
      )}
      {SITE.legal.whatsapp ? (
        <p className="lead-wa">
          {t.preferWa} <a href={`https://wa.me/${SITE.legal.whatsapp}?text=${encodeURIComponent(WA_TEXT[v.operation])}`} data-pos="whatsapp">Abrir WhatsApp</a>
        </p>
      ) : null}
    </form>
  );
}
