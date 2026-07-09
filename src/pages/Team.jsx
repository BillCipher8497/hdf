import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition.jsx'
import Reveal from '../components/Reveal.jsx'
import HexChip from '../components/HexChip.jsx'
import { TEAM } from '../data/team.js'

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  )
}

function Portrait({ m }) {
  if (m.photo) {
    return (
      <img
        src={m.photo}
        alt={m.name}
        className="h-24 w-24 rounded-2xl object-cover ring-1 ring-ink/10"
      />
    )
  }
  // Fallback monogram tree tinted with the member's hex
  return (
    <svg width="96" height="96" viewBox="0 0 32 32" aria-hidden className="rounded-2xl">
      <rect width="32" height="32" rx="8" fill="#0d1f17" />
      <path d="M16 5 L25 22 H7 Z" fill={m.hex} />
      <rect x="14.5" y="22" width="3" height="5" rx="1" fill="#3e7c59" />
    </svg>
  )
}

export default function Team() {
  return (
    <PageTransition>
      <section className="mx-auto max-w-6xl px-5 pb-24 pt-16">
        <Reveal>
          <HexChip hex="#9ee64b" label="team" />
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-6xl">
            Who plants the trees.
          </h1>
        </Reveal>

        <div className="mt-12 grid gap-7 sm:grid-cols-2">
          {TEAM.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.12}>
              <motion.article
                className="h-full rounded-2xl border border-mist bg-white p-7"
                whileHover={{ y: -6, boxShadow: '0 20px 50px -22px rgba(13,31,23,0.35)' }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              >
                <div className="flex items-start justify-between gap-4">
                  <Portrait m={m} />
                  {m.linkedin && (
                    <a
                      href={m.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${m.name} on LinkedIn`}
                      className="rounded-full border border-mist p-2.5 text-fern transition-colors hover:bg-ink hover:text-birch"
                    >
                      <LinkedInIcon />
                    </a>
                  )}
                </div>
                <h2 className="mt-4 font-display text-2xl font-semibold">{m.name}</h2>
                <p className="font-mono text-xs tracking-widest text-fern uppercase">{m.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">{m.bio}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {m.focus.map((f) => (
                    <span key={f} className="rounded-full border border-mist px-3 py-1 font-mono text-xs">
                      {f}
                    </span>
                  ))}
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </section>
    </PageTransition>
  )
}
