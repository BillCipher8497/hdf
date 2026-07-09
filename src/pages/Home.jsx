import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition.jsx'
import Reveal from '../components/Reveal.jsx'
import HexChip from '../components/HexChip.jsx'
import ForestHero from '../components/ForestHero.jsx'
import CountUp from '../components/CountUp.jsx'
import { STATS } from '../data/sites.js'

const WHAT = [
  {
    hex: '#143728',
    title: 'Websites that last',
    body: 'Clean, modern sites built to stay fast and reliable for years — no bloat, no maintenance headaches, no surprise costs.',
  },
  {
    hex: '#3e7c59',
    title: 'For nonprofits and NGOs',
    body: 'We work with organizations across Africa — health, agriculture, education — that need a credible web presence for donors, partners, and the people they serve.',
  },
  {
    hex: '#9ee64b',
    title: 'Fast on any connection',
    body: 'Every page is optimized for low bandwidth: compressed images, sub-second loads on 3G. Because most of our visitors are not on fiber.',
  },
]

const SERVICES = [
  { hex: '#143728', name: 'Websites', desc: 'Design, build, hosting, domains, and analytics — end to end.' },
  { hex: '#3e7c59', name: 'CAD & 3D design', desc: 'Product models, technical drawings, and printable parts.' },
  { hex: '#9ee64b', name: 'Social media', desc: 'Profile setup, post templates, and content strategy.' },
  { hex: '#2a7f7a', name: 'Branding & graphics', desc: 'Logos, flyers, presentation decks, and visual identity.' },
  { hex: '#b8862b', name: 'Data & dashboards', desc: 'Turn spreadsheets into charts and reports people actually read.' },
  { hex: '#3462a8', name: 'Something else?', desc: "If it's digital, ask. We'll tell you honestly if we can build it." },
]

const VALUES = [
  { k: 'Ownership', v: 'Clients own their domain. We want the power to be theirs.' },
  { k: 'Clarity', v: 'Sites structured so the organization can keep content current without calling us.' },
  { k: 'Longevity', v: 'Built to run for years without ongoing fees or fragile dependencies.' },
]

export default function Home() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-5 pb-20 pt-16 sm:pt-24">
        <HexChip hex="#9ee64b" label="a digital studio" />
        <h1 className="mt-5 font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-7xl">
          {['Digital roots for', 'real-world work.'].map((line, i) => (
            <span key={line} className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ delay: 0.1 + i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                {i === 1 ? (
                  <><em className="not-italic text-fern">real-world</em> work.</>
                ) : (
                  line
                )}
              </motion.span>
            </span>
          ))}
        </h1>
        <motion.p
          className="mt-6 max-w-xl text-lg text-ink/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Hexadecimal Forest builds fast, modern websites and digital tools for
          nonprofits and NGOs — organizations doing real work that deserve a
          real presence online.
        </motion.p>
        <motion.div
          className="mt-8 flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
        >
          <Link
            to="/sites"
            className="group rounded-full bg-ink px-6 py-3 font-mono text-sm text-birch transition-transform hover:-translate-y-0.5 hover:bg-canopy"
          >
            See the work <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </Link>
          <Link
            to="/contact"
            className="hx-link rounded-full px-2 py-3 font-mono text-sm text-fern"
          >
            Start a project
          </Link>
        </motion.div>

        <div className="mt-14">
          <ForestHero />
        </div>
      </section>

      {/* Stats band */}
      <section className="border-y border-mist bg-white/50">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-5 py-12 sm:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <p className="font-display text-4xl font-bold text-canopy">
                <CountUp value={s.value} prefix={s.prefix ?? ''} suffix={s.suffix} />
              </p>
              <p className="mt-1 text-sm text-ink/60">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* What we do */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <Reveal>
          <HexChip hex="#3e7c59" label="what we do" />
          <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
            Small studio. Sturdy sites.
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {WHAT.map((w, i) => (
            <Reveal key={w.title} delay={i * 0.1}>
              <motion.div
                className="h-full rounded-2xl border border-mist bg-white p-6"
                whileHover={{ y: -6, boxShadow: '0 16px 40px -18px rgba(13,31,23,0.35)' }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              >
                <HexChip hex={w.hex} />
                <h3 className="mt-4 font-display text-xl font-semibold">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{w.body}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Beyond websites — full service list */}
      <section className="border-y border-mist bg-white/50">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <Reveal>
            <HexChip hex="#9ee64b" label="beyond websites" />
            <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
              If it's digital, we can probably help.
            </h2>
            <p className="mt-3 max-w-xl text-ink/70">
              Websites are the core, but organizations need more than one thing.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Reveal key={s.name} delay={i * 0.07}>
                <motion.div
                  className="flex h-full items-start gap-4 rounded-2xl border border-mist bg-white p-5"
                  whileHover={{ y: -4, boxShadow: '0 14px 34px -18px rgba(13,31,23,0.3)' }}
                  transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                >
                  <span
                    className="mt-1 inline-block h-3.5 w-3.5 shrink-0 rounded-[4px] ring-1 ring-ink/15"
                    style={{ background: s.hex }}
                  />
                  <div>
                    <h3 className="font-display text-lg font-semibold">{s.name}</h3>
                    <p className="mt-1 text-sm text-ink/65">{s.desc}</p>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-ink text-birch">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <Reveal>
            <HexChip hex="#9ee64b" label="how we work" />
            <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">Three things we won't compromise</h2>
          </Reveal>
          <div className="mt-10 divide-y divide-birch/10">
            {VALUES.map((v, i) => (
              <Reveal key={v.k} delay={i * 0.08}>
                <div className="grid gap-2 py-6 sm:grid-cols-[200px_1fr] sm:gap-8">
                  <p className="font-mono text-sm tracking-widest text-sap">{v.k}</p>
                  <p className="text-birch/75">{v.v}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sap-gradient text-birch">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-5 py-16 sm:flex-row sm:items-center sm:justify-between">
          <Reveal>
            <h2 className="font-display text-3xl font-bold">Have a project in mind?</h2>
            <p className="mt-2 text-birch/75">A website, a CAD model, a social presence — or something we haven't thought of yet.</p>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              to="/contact"
              className="inline-block rounded-full bg-sap px-7 py-3 font-mono text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
            >
              Get in touch →
            </Link>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  )
}
