import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import homeImage from '@/assets/home.png'

type Slide = {
  title: string
  body: string
  leftImage: string
  rightImage: string
}

export default function About() {
  const slides: Slide[] = useMemo(
    () => [
      {
        title: 'Nostalgia',
        body:
          'A study of tone, texture, and memory—balancing fashion imagery with editorial rhythm. Minimal type meets generous whitespace.',
        leftImage: homeImage,
        rightImage: homeImage,
      },
      {
        title: 'Monochrome',
        body:
          'Black and white as a system. Contrast drives hierarchy while motion remains quiet—present but never loud.',
        leftImage: homeImage,
        rightImage: homeImage,
      },
      {
        title: 'Editorial',
        body:
          'Print-inspired layouts adapted for the screen: grids, vertical rhythm, and photography-led storytelling.',
        leftImage: homeImage,
        rightImage: homeImage,
      },
    ],
    []
  )

  const [index, setIndex] = useState(0)
  const total = slides.length
  const goTo = (i: number) => setIndex((i + total) % total)
  const prev = () => goTo(index - 1)
  const next = () => goTo(index + 1)

  return (
    <section id="about" className="container-px relative mx-auto py-16 md:py-20">
      <div className="mb-8 flex items-center justify-between">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          About
        </motion.h2>

        {/* Controls (desktop) */}
        <div className="hidden gap-2 md:flex">
          <button
            aria-label="Previous slide"
            onClick={prev}
            className="rounded-full border border-neutral-300 p-2 hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-900"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            aria-label="Next slide"
            onClick={next}
            className="rounded-full border border-neutral-300 p-2 hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-900"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Slider viewport */}
  <div className="relative overflow-hidden min-h-[55vh] md:min-h-[80vh] rounded-lg border border-neutral-200 dark:border-neutral-800 max-w-full">
        {/* Track */}
        <motion.div
          className="flex"
          animate={{ x: `-${index * 100}%` }}
          transition={{ type: 'spring', stiffness: 120, damping: 18 }}
          style={{ width: `${total * 100}%` }}
        >
          {slides.map((s, i) => (
            <article
              key={i}
              className="basis-full shrink-0"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${total}`}
            >
              <div className="grid  gap-4 md:gap-6 md:grid-cols-[0.5fr_1.5fr]">
                {/* Left panel: small image and vertical title */}
                <div className="relative grid grid-rows-[auto_1fr] p-3 md:p-4">
                    <div className="overflow-hidden rounded-md border border-neutral-200 dark:border-neutral-800">
                    <img
                      src={s.leftImage || '/home-bg.jpg'}
                      alt={`${s.title} detail`}
                      className="h-32 w-full object-cover blur-[2px] saturate-125 md:h-48"
                      loading="lazy"
                      onError={(e) => {
                      const t = e.currentTarget as HTMLImageElement
                      if (!t.src.endsWith('/home-bg.jpg')) t.src = '/home-bg.jpg'
                      }}
                    />
                    </div>
                  <div className="relative flex items-center justify-center">
                    <span className="absolute left-0 top-0 text-[10px] tracking-widest text-neutral-500 dark:text-neutral-400">{String(i + 1).padStart(2, '0')}</span>
                    <h3 className="text-2xl md:text-3xl font-medium uppercase tracking-[0.25em] text-neutral-900 dark:text-neutral-100 [writing-mode:vertical-rl] rotate-180 select-none">
                      {s.title}
                    </h3>
                  </div>
                </div>

                {/* Right panel: large image with caption */}
                <div className="relative">
                  <img
                  src={s.rightImage || '/home-bg.jpg'}
                  alt={s.title}
                  className="w-full md:w-[90%] h-[55vh] md:h-[85vh] object-cover"
                  loading="lazy"
                  onError={(e) => {
                    const t = e.currentTarget as HTMLImageElement
                    if (!t.src.endsWith('/home-bg.jpg')) t.src = '/home-bg.jpg'
                  }}
                  />
                  <div className="pointer-events-none absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/40 to-transparent p-3 md:p-4 text-xs md:text-sm text-white break-words whitespace-pre-line">
                  {s.body}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </motion.div>

        {/* Prev/Next (mobile overlay) */}
        <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-2 md:hidden">
          <button
            aria-label="Previous slide"
            onClick={prev}
            className="rounded-full border border-neutral-300 bg-white/70 p-1.5 backdrop-blur hover:bg-white dark:border-neutral-700 dark:bg-black/40 dark:hover:bg-black"
          >
            <ChevronLeft className="h-3.5 w-3.5" />
          </button>
          <button
            aria-label="Next slide"
            onClick={next}
            className="rounded-full border border-neutral-300 bg-white/70 p-1.5 backdrop-blur hover:bg-white dark:border-neutral-700 dark:bg-black/40 dark:hover:bg-black"
          >
            <ChevronRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      {/* Dots */}
      <div className="mt-4 md:mt-6 flex items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => goTo(i)}
            className={
              'h-1 w-4 md:h-1.5 md:w-6 rounded-full transition-colors ' +
              (index === i ? 'bg-neutral-900 dark:bg-neutral-100' : 'bg-neutral-300 dark:bg-neutral-700')
            }
          />
        ))}
      </div>
    </section>
  )
}
