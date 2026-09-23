import Image from 'next/image'
import { Check } from 'lucide-react'
import { Reveal } from '@/components/home/Reveal'
import { cn } from '@/utilities/ui'

export type FeatureRowProps = {
  icon: string
  eyebrow: string
  title: string
  description: string
  checklist: string[]
  image: string
  imageSide: 'left' | 'right'
}

export const FeatureRow: React.FC<FeatureRowProps> = ({
  icon,
  eyebrow,
  title,
  description,
  checklist,
  image,
  imageSide,
}) => {
  return (
    <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
      <Reveal
        className={cn(
          'relative order-1 aspect-[774/424] w-full overflow-hidden rounded-2xl',
          imageSide === 'right' && 'md:order-2',
        )}
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(min-width: 768px) 50vw, 100vw"
        />
      </Reveal>

      <Reveal delay={0.1} className={cn('order-2', imageSide === 'right' && 'md:order-1')}>
        <span className="inline-flex items-center gap-2 rounded-full bg-evx-lavender px-3 py-1 text-xs font-semibold text-primary-dark">
          <span>{icon}</span>
          {eyebrow}
        </span>
        <h3 className="mt-4 text-2xl font-bold tracking-tight text-foreground">{title}</h3>
        <p className="mt-3 text-muted-foreground">{description}</p>
        <ul className="mt-4 flex flex-col gap-2">
          {checklist.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-foreground">
              <Check size={16} className="mt-0.5 shrink-0 text-evx-green-pill-fg" />
              {item}
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  )
}
