import { lazy, Suspense, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'

// Code-split the secondary routes
const Sites = lazy(() => import('./pages/Sites.jsx'))
const Team = lazy(() => import('./pages/Team.jsx'))
const Contact = lazy(() => import('./pages/Contact.jsx'))

export default function App() {
  const location = useLocation()

  // Scroll to top + fire a GA4 page_view on route change (SPA routing)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', { page_path: location.pathname })
    }
  }, [location.pathname])

  return (
    <div className="flex min-h-screen flex-col">
      <Nav />
      <main className="flex-1">
        <Suspense fallback={<div className="p-24 text-center font-mono text-sm text-fern">loading…</div>}>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/sites" element={<Sites />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
