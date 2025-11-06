import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <section id="home" className="container-px relative mx-auto flex min-h-[80dvh] flex-col justify-center overflow-hidden py-20">
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        Nemelyn — a Graphic Designer &amp; Front-End Developer 
      </motion.h1>
      <motion.h3
        className="mt-6 max-w-2xl text-neutral-600 dark:text-neutral-300"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.1, duration: 0.6, ease: 'easeInOut' }}
      >
        <TypeAnimation
          sequence={[
            'Black and white.', 1200,
            'Space and rhythm.', 1200,
            'Thoughtful typography.', 1200,
            'Clean grids.', 1200,
            'Brand identity systems.', 1200,
            'Minimal UI prototypes.', 1200,
            'Editorial layouts.', 1200,
            'Monochrome photography.', 1200,
            'Subtle motion that enhances, never distracts.', 1500,
          ]}
          speed={50}
          cursor={true}
          repeat={Infinity}
          className="inline"
        />
      </motion.h3>
      <motion.div
        className="mt-10"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.2, duration: 0.6, ease: 'easeInOut' }}
      >
        <a href="#about" className="no-underline">
          <Button>Discover the work</Button>
        </a>
      </motion.div>
    </section>
  )
}
