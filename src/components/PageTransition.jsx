import { motion } from 'framer-motion'

// Shared route transition: pages slide up through a soft fade,
// with a sap-colored wipe bar sweeping across on entry.
export default function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none fixed inset-x-0 top-0 z-50 h-1 bg-sap"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: [0, 1, 1], opacity: [1, 1, 0] }}
        transition={{ duration: 0.7, times: [0, 0.6, 1], ease: 'easeInOut' }}
        style={{ transformOrigin: 'left' }}
      />
      {children}
    </motion.div>
  )
}
