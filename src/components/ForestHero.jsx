import { motion } from 'framer-motion'

// The signature: a treeline where each tree is a triangle "grown" from the
// baseline, labeled with the actual hex it's painted with. The palette IS
// the forest.
const TREES = [
  { x: 40,  h: 90,  w: 52, hex: '#143728' },
  { x: 120, h: 150, w: 74, hex: '#1e4d38' },
  { x: 215, h: 115, w: 60, hex: '#3e7c59' },
  { x: 300, h: 180, w: 86, hex: '#0d1f17' },
  { x: 400, h: 135, w: 66, hex: '#56a374' },
  { x: 490, h: 200, w: 92, hex: '#143728' },
  { x: 595, h: 120, w: 62, hex: '#9ee64b' },
  { x: 680, h: 165, w: 80, hex: '#2c6247' },
  { x: 775, h: 100, w: 56, hex: '#3e7c59' },
]

const BASE = 230

export default function ForestHero() {
  return (
    <svg
      viewBox="0 0 840 270"
      className="w-full max-w-3xl"
      role="img"
      aria-label="A stylized forest where each tree is labeled with the hex code of its color"
    >
      {/* ground line draws itself in */}
      <motion.line
        x1="0" y1={BASE} x2="840" y2={BASE}
        stroke="#0d1f17" strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      />
      {TREES.map((t, i) => (
        <g key={i}>
          <motion.polygon
            points={`${t.x},${BASE - t.h} ${t.x - t.w / 2},${BASE} ${t.x + t.w / 2},${BASE}`}
            fill={t.hex}
            style={{ transformOrigin: `${t.x}px ${BASE}px` }}
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            transition={{ delay: 0.25 + i * 0.09, type: 'spring', stiffness: 120, damping: 14 }}
            whileHover={{ scaleY: 1.06 }}
          />
          <motion.text
            x={t.x}
            y={BASE + 22}
            textAnchor="middle"
            fontFamily="JetBrains Mono, monospace"
            fontSize="10"
            fill="#3e7c59"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 + i * 0.09 }}
          >
            {t.hex}
          </motion.text>
        </g>
      ))}
    </svg>
  )
}
