'use client'

import { motion, useScroll, useSpring } from 'framer-motion'

// A thin bar across the top of the window that fills as you read.
export function ReadingProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 })

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-1.5 origin-left bg-linear-to-r from-pom via-saffron to-jade"
    />
  )
}
