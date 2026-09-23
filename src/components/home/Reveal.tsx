'use client'

import { motion, type Variants } from 'motion/react'

const variants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

export const Reveal: React.FC<{
  children: React.ReactNode
  className?: string
  delay?: number
}> = ({ children, className, delay = 0 }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export const RevealGroup: React.FC<{
  children: React.ReactNode
  className?: string
  stagger?: number
}> = ({ children, className, stagger = 0.08 }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={{ visible: { transition: { staggerChildren: stagger } } }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export const RevealItem: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return (
    <motion.div
      variants={variants}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
