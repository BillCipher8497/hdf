import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PageTransition from '../components/PageTransition.jsx'
import Reveal from '../components/Reveal.jsx'
import HexChip from '../components/HexChip.jsx'

// Swap this for your FormSubmit endpoint, e.g.
// https://formsubmit.co/ajax/hello@hexadecimalforest.com
const FORM_ENDPOINT = 'https://formsubmit.co/ajax/arvin.karve@gmail.com'

const UPDATE_REQUEST_FORM =
  'https://docs.google.com/forms/d/e/1FAIpQLSdwDdvcWv-1HoIAcNseiZrQdxmXR7bAnneb6zVMqzR090cK7g/viewform?usp=publish-editor'

const FIELDS = [
  { id: 'name', label: 'Your name', type: 'text', placeholder: 'Jensen Huang' },
  { id: 'email', label: 'Email', type: 'email', placeholder: 'you@organization.org' },
  { id: 'org', label: 'Organization', type: 'text', placeholder: 'Optional' },
]

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Name is required.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = 'Enter a valid email address.'
  if (values.message.trim().length < 20) errors.message = 'Tell us a bit more — at least 20 characters.'
  return errors
}

export default function Contact() {
  const [values, setValues] = useState({ name: '', email: '', org: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const set = (id) => (e) => {
    setValues((v) => ({ ...v, [id]: e.target.value }))
    if (errors[id]) setErrors((er) => ({ ...er, [id]: undefined }))
  }

  const submit = async () => {
    const errs = validate(values)
    setErrors(errs)
    if (Object.keys(errs).length) return
    setStatus('sending')
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(values),
      })
      setStatus(res.ok ? 'sent' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <PageTransition>
      <section className="mx-auto max-w-3xl px-5 pb-24 pt-16">
        <Reveal>
          <HexChip hex="#3e7c59" label="contact" />
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-6xl">
            Plant something with us.
          </h1>
          <p className="mt-4 max-w-xl text-lg text-ink/70">
            Websites are our core, but we also take on CAD and 3D design, social
            media, branding, dashboards — and anything else digital you can
            think of. Tell us what you need.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <motion.a
            href={UPDATE_REQUEST_FORM}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 flex flex-col items-start justify-between gap-4 rounded-2xl border-2 border-fern/40 bg-fern/5 p-6 transition-colors hover:border-fern hover:bg-fern/10 sm:flex-row sm:items-center"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.99 }}
          >
            <div>
              <HexChip hex="#3e7c59" label="existing clients" />
              <h2 className="mt-3 font-display text-xl font-semibold sm:text-2xl">
                Client update requests
              </h2>
              <p className="mt-1.5 max-w-md text-sm text-ink/70">
                Already have a site with us? Request content changes, updates, or new
                assets through our dedicated form.
              </p>
            </div>
            <span className="shrink-0 rounded-full bg-ink px-6 py-3 font-mono text-sm text-birch">
              Open form →
            </span>
          </motion.a>
        </Reveal>

        <AnimatePresence mode="wait">
          {status === 'sent' ? (
            <motion.div
              key="sent"
              className="mt-12 rounded-2xl border border-fern/30 bg-white p-10 text-center"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', stiffness: 200, damping: 18 }}
            >
              {/* Success: a tree grows */}
              <svg viewBox="0 0 64 64" className="mx-auto w-20" aria-hidden>
                <motion.path
                  d="M32 8 L52 46 H12 Z"
                  fill="#9ee64b"
                  style={{ transformOrigin: '32px 46px' }}
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ type: 'spring', stiffness: 140, damping: 12, delay: 0.15 }}
                />
                <rect x="29" y="46" width="6" height="10" rx="2" fill="#3e7c59" />
              </svg>
              <h2 className="mt-4 font-display text-2xl font-semibold">Message sent</h2>
              <p className="mt-2 text-sm text-ink/60">We read everything. Expect a reply within a few days.</p>
            </motion.div>
          ) : (
            <motion.div key="form" className="mt-12 space-y-6" exit={{ opacity: 0, y: -12 }}>
              <div className="grid gap-6 sm:grid-cols-2">
                {FIELDS.map((f, i) => (
                  <Reveal key={f.id} delay={i * 0.06} className={f.id === 'org' ? 'sm:col-span-2' : ''}>
                    <label htmlFor={f.id} className="font-mono text-xs uppercase tracking-widest text-fern">
                      {f.label}
                    </label>
                    <input
                      id={f.id}
                      type={f.type}
                      placeholder={f.placeholder}
                      value={values[f.id]}
                      onChange={set(f.id)}
                      aria-invalid={!!errors[f.id]}
                      className={`mt-2 w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none transition-all focus:border-fern focus:shadow-[0_0_0_3px_rgba(62,124,89,0.15)] ${
                        errors[f.id] ? 'border-red-400' : 'border-mist'
                      }`}
                    />
                    <AnimatePresence>
                      {errors[f.id] && (
                        <motion.p
                          className="mt-1.5 font-mono text-xs text-red-600"
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                        >
                          {errors[f.id]}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={0.2}>
                <label htmlFor="message" className="font-mono text-xs uppercase tracking-widest text-fern">
                  What are you building?
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell us about your organization and what the site needs to do."
                  value={values.message}
                  onChange={set('message')}
                  aria-invalid={!!errors.message}
                  className={`mt-2 w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none transition-all focus:border-fern focus:shadow-[0_0_0_3px_rgba(62,124,89,0.15)] ${
                    errors.message ? 'border-red-400' : 'border-mist'
                  }`}
                />
                <AnimatePresence>
                  {errors.message && (
                    <motion.p
                      className="mt-1.5 font-mono text-xs text-red-600"
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                    >
                      {errors.message}
                    </motion.p>
                  )}
                </AnimatePresence>
              </Reveal>

              <Reveal delay={0.26}>
                <motion.button
                  onClick={submit}
                  disabled={status === 'sending'}
                  className="rounded-full bg-ink px-8 py-3.5 font-mono text-sm text-birch disabled:opacity-60"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {status === 'sending' ? 'Sending…' : 'Send message →'}
                </motion.button>
                {status === 'error' && (
                  <p className="mt-3 font-mono text-xs text-red-600">
                    Couldn't send — check the form endpoint in Contact.jsx, or email us directly.
                  </p>
                )}
              </Reveal>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </PageTransition>
  )
}
