import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useTheme } from './store/theme/ThemeProvider'
import { Header } from './components/common/Header'
import { Footer } from './components/common/Footer'
import { ScrollProgressBar } from './components/common/ScrollProgressBar'
import { ParticlesBackground } from './components/common/ParticlesBackground'
import Home from './sections/Home'
import About from './sections/About'
import Projects from './sections/Projects'
import Contact from './sections/Contact'

export default function App() {
  const { theme } = useTheme()

  // Optional: lock body background color to avoid flash on theme change
  useEffect(() => {
    document.body.style.backgroundColor = getComputedStyle(document.documentElement)
      .getPropertyValue('--bg')
  }, [theme])

  return (
    <div className="min-h-dvh">
      <ScrollProgressBar />
      <Header />
      
      {/* Particles.js background */}
      <ParticlesBackground />

      {/* Background gradient subtly flips with theme */}
      <AnimatePresence mode="wait">
        <motion.main
          key={theme}
          className="relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        >
          <div
            aria-hidden
            className="pointer-events-none fixed inset-0 -z-20 bg-gradient-to-b from-[rgb(var(--bg))] to-transparent opacity-30"
          />

          <Home />
          <About />
          <Projects />
          <Contact />
        </motion.main>
      </AnimatePresence>

      <Footer />
    </div>
  )
}
