import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const PROJECTS = [
  {
    title: 'Monochrome Gallery',
    desc: 'A curated grid of black & white photographs with subtle parallax.',
    tech: ['React', 'Vite', 'Tailwind'],
    live: '#',
    code: '#',
  },
  {
    title: 'Geometric Studies',
    desc: 'Interactive geometric compositions driven by motion and rhythm.',
    tech: ['TypeScript', 'Framer Motion'],
    live: '#',
    code: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="container-px mx-auto py-24">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        Projects
      </motion.h2>
      <motion.div
        className="mt-10 grid gap-6 md:grid-cols-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
      >
        {PROJECTS.map((p) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 12 }}
            variants={{ visible: { opacity: 1, y: 0 } }}
          >
            <Card className="transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-950">
              <CardHeader>
                <CardTitle>{p.title}</CardTitle>
                <CardDescription>{p.desc}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-3">
                <a href={p.live} className="no-underline" target="_blank" rel="noreferrer">
                  <Button variant="default">View Project</Button>
                </a>
                <a href={p.code} className="no-underline" target="_blank" rel="noreferrer">
                  <Button variant="outline">View Code</Button>
                </a>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
