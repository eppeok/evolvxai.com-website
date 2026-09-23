import { AnimatedCounter } from './AnimatedCounter'
import { RevealGroup, RevealItem } from './Reveal'

const stats = [
  { value: '50+', label: 'UAE Businesses Live' },
  { value: 'AED 180K+', label: 'Saved Annually by Clients' },
  { value: '60%', label: 'Fewer No-Shows' },
  { value: '4.9★', label: 'Avg. Google Rating Boost' },
]

export const StatsBar: React.FC = () => {
  return (
    <section className="border-b border-border bg-background">
      <RevealGroup className="container grid grid-cols-2 divide-x divide-y divide-border py-10 sm:grid-cols-4 sm:divide-y-0">
        {stats.map((stat) => (
          <RevealItem
            key={stat.label}
            className="flex flex-col items-center gap-1 px-2 py-4 text-center"
          >
            <span className="text-3xl font-bold text-foreground">
              <AnimatedCounter value={stat.value} />
            </span>
            <span className="text-xs text-muted-foreground">{stat.label}</span>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  )
}
