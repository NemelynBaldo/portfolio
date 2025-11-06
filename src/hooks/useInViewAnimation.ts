import { useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'

export function useInViewAnimation(options?: { once?: boolean }) {
  const ref = useRef<HTMLElement | null>(null)
  const controls = useAnimation()
  const isInView = useInView(ref, { 
    margin: '-10%',
    amount: 0.2,
    once: true,
    ...options 
  })

  useEffect(() => {
    if (isInView) controls.start({ opacity: 1, y: 0 })
  }, [isInView, controls])

  return { ref, controls }
}
