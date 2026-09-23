import { cn } from '@/utilities/ui'

export const Eyebrow: React.FC<{
  children: React.ReactNode
  className?: string
  variant?: 'teal' | 'purple'
}> = ({ children, className, variant = 'teal' }) => {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide uppercase',
        variant === 'purple'
          ? 'border border-[#7c3aed]/20 bg-[#7c3aed]/[0.08] text-[#7c3aed]'
          : 'bg-evx-lavender text-primary-dark',
        className,
      )}
    >
      {children}
    </span>
  )
}
