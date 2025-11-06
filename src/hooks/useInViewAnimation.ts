import { useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'

export function useInViewAnimation(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLElement | null>(null)
  const controls = useAnimation()
  const isInView = useInView(ref as any, { margin: '-10% 0px', amount: 0.2, ...options })

  useEffect(() => {
    if (isInView) controls.start({ opacity: 1, y: 0 })
  }, [isInView, controls])

  return { ref, controls }
}
