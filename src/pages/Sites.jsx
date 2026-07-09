import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PageTransition from '../components/PageTransition.jsx'
import Reveal from '../components/Reveal.jsx'
import HexChip from '../components/HexChip.jsx'
import CountUp from '../components/CountUp.jsx'
import { SITES, STATS } from '../data/sites.js'

function SiteCard({ site, index, onOpen }) {
  return (
    <motion.article
      layoutId={`card-${site.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-mist bg-white"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15 + index * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8, boxShadow: '0 24px 60px -24px rgba(13,31,23,0.4)' }}
    >
      <button
        onClick={() => onOpen(site)}
        className="relative block aspect-[16/10] w-full cursor-pointer overflow-hidden text-left"
        aria-label={`Open ${site.name} project details`}
      >
        <motion.img
          src={site.screenshot}
          alt={`${site.name} website`}
          className="h-full w-full object-cover object-top"
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="absolute left-3 top-3">
          <span className="rounded-full bg-ink/85 px-3 py-1 font-mono text-[11px] text-birch backdrop-blur">
            {site.location}
          </span>
        </div>
      </button>

      <div className="flex flex-1 flex-col p-5">
        <HexChip hex={site.hex} label={site.type} />
        <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight">{site.name}</h3>
        <p className="mt-2 line-clamp-2 text-sm text-ink/65">{site.description}</p>

        <div className="mt-auto flex items-center gap-3 pt-5">
          <a
            href={site.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn rounded-full bg-ink px-5 py-2.5 font-mono text-xs text-birch transition-transform hover:-translate-y-0.5 hover:bg-canopy"
          >
            View live <span className="inline-block transition-transform group-hover/btn:translate-x-1">↗</span>
          </a>
          <button
            onClick={() => onOpen(site)}
            className="hx-link cursor-pointer px-1 py-2 font-mono text-xs text-fern"
          >
            Details →
          </button>
        </div>
      </div>
    </motion.article>
  )
}

function SiteModal({ site, onClose }) {
  // Esc to close + lock body scroll while open
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/60 p-4 backdrop-blur-sm sm:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${site.name} project details`}
    >
      <motion.div
        layoutId={`card-${site.slug}`}
        className="flex max-h-full w-full max-w-4xl flex-col overflow-hidden rounded-2xl bg-white"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-[16/9] shrink-0 bg-mist">
          <img
            src={site.screenshot}
            alt={`${site.name} website`}
            className="h-full w-full object-cover object-top"
          />
          <button
            onClick={onClose}
            className="absolute right-3 top-3 rounded-full bg-ink/85 px-3 py-1.5 font-mono text-xs text-birch backdrop-blur transition-colors hover:bg-ink"
          >
            ✕ close
          </button>
        </div>

        <div className="overflow-y-auto p-6 sm:p-8">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <HexChip hex={site.hex} label={site.type} />
              <h3 className="mt-2 font-display text-3xl font-bold">{site.name}</h3>
              <p className="font-mono text-xs text-ink/50">{site.org} · {site.location}</p>
            </div>
            <a
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-full bg-ink px-6 py-3 font-mono text-sm text-birch transition-transform hover:-translate-y-0.5 hover:bg-canopy"
            >
              Visit live site <span className="inline-block transition-transform group-hover:translate-x-1">↗</span>
            </a>
          </div>

          <p className="mt-5 leading-relaxed text-ink/75">{site.description}</p>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-fern">Stack</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {site.stack.map((s) => (
                  <span key={s} className="rounded-full border border-mist px-3 py-1 font-mono text-xs">
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-fern">Outcome</p>
              <p className="mt-2 text-sm text-ink/70">{site.outcome}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Sites() {
  const [active, setActive] = useState(null)

  return (
    <PageTransition>
      <section className="mx-auto max-w-6xl px-5 pb-24 pt-16">
        <Reveal>
          <HexChip hex="#3e7c59" label="portfolio" />
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-6xl">
            The forest so far.
          </h1>
          <p className="mt-4 max-w-xl text-lg text-ink/70">
            Real projects for real organizations. Open a card for the full story,
            or jump straight to the live site.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {SITES.map((site, i) => (
            <SiteCard key={site.slug} site={site} index={i} onOpen={setActive} />
          ))}
        </div>

        <div className="mt-20 grid grid-cols-2 gap-8 rounded-2xl bg-ink p-8 text-birch sm:grid-cols-4 sm:p-10">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <p className="font-display text-4xl font-bold text-sap">
                <CountUp value={s.value} prefix={s.prefix ?? ''} suffix={s.suffix} />
              </p>
              <p className="mt-1 text-sm text-birch/60">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {active && <SiteModal site={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </PageTransition>
  )
}
