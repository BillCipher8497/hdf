import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const LINKS = [
  { to: '/', label: 'Index' },
  { to: '/sites', label: 'Sites' },
  { to: '/team', label: 'Team' },
  { to: '/contact', label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-mist bg-birch/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link to="/" className="group flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <img src="/images/favicon.png" alt="Hexadecimal Forest" width="26" height="26" />
          <span className="font-display text-lg font-semibold tracking-tight">
            Hexadecimal<span className="text-fern">Forest</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 sm:flex" aria-label="Primary">
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className="hx-link font-mono text-[13px] tracking-wide text-ink/80 hover:text-ink"
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <button
          className="sm:hidden font-mono text-sm"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? '× close' : '≡ menu'}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            className="border-t border-mist sm:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            aria-label="Mobile"
          >
            <div className="flex flex-col gap-1 px-5 py-3">
              {LINKS.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end={l.to === '/'}
                  onClick={() => setOpen(false)}
                  className="rounded px-2 py-2 font-mono text-sm hover:bg-mist"
                >
                  {l.label}
                </NavLink>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
