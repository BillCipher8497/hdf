import { Link } from 'react-router-dom'
import HexChip from './HexChip.jsx'
import { SOCIAL } from '../data/team.js'

export default function Footer() {
  return (
    <footer className="border-t border-mist bg-ink text-birch">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-display text-xl font-semibold">Hexadecimal Forest</p>
          <p className="mt-1 max-w-sm text-sm text-birch/60">
            Websites and digital solutions for organizations doing real work.
          </p>
        </div>
        <div className="flex flex-col gap-2 font-mono text-xs text-birch/60">
          <Link to="/sites" className="hx-link w-fit hover:text-birch">View the work</Link>
          <Link to="/contact" className="hx-link w-fit hover:text-birch">Start a project</Link>
          {SOCIAL.linkedin && (
            <a
              href={SOCIAL.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hx-link w-fit hover:text-birch"
            >
              LinkedIn ↗
            </a>
          )}
          <span className="mt-2"><HexChip hex="#9ee64b" label={`© ${new Date().getFullYear()}`} /></span>
        </div>
      </div>
    </footer>
  )
}
