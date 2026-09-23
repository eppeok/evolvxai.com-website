import clsx from 'clsx'
import Image from 'next/image'
import React from 'react'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
}

export const Logo = (props: Props) => {
  const { loading: loadingFromProps, priority: priorityFromProps, className } = props

  const loading = loadingFromProps ?? 'lazy'
  const priority = priorityFromProps === 'high'

  return (
    <Image
      alt="EvolvXAI"
      width={502}
      height={132}
      loading={loading}
      priority={priority}
      className={clsx('h-8 w-auto', className)}
      src="/logo.webp"
    />
  )
}
