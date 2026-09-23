import { Eyebrow } from './Eyebrow'
import { Reveal, RevealGroup, RevealItem } from './Reveal'

const gaps = [
  {
    number: '01',
    title: 'The Enquiry Gap',
    description:
      'A client messages at 9pm. Nobody replies until morning.',
    resolution: 'By 8:15pm, they’d already booked your competitor.',
    resolved: 'Your AI replies in 11 seconds — any hour, any channel.',
    stat: '40% of service enquiries arrive after business hours',
  },
  {
    number: '02',
    title: 'The No-Show Gap',
    description: 'They booked last week. You held the slot. They forgot. No reminder went out.',
    resolution: 'That slot is now dead revenue',
    resolved: '— plus the client you could have put there.',
    stat: '20–35% of bookings end in no-shows without automated reminders',
  },
  {
    number: '03',
    title: 'The Retention Gap',
    description:
      'They loved it. They meant to come back. Life got in the way — and nobody followed up.',
    resolution: 'Your AI sends the right message at the right moment.',
    resolved: 'They rebook on autopilot.',
    stat: 'A 5% rise in retention increases profit by 25–95% — most businesses do zero follow-up',
  },
]

export const ProblemSection: React.FC = () => {
  return (
    <section className="bg-muted/40 py-16 md:py-24">
      <div className="container flex flex-col items-center text-center">
        <Reveal className="flex flex-col items-center">
          <Eyebrow variant="purple">The Problem</Eyebrow>
          <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Every service business bleeds money through the same 3 holes.
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Not staffing. Not marketing.{' '}
            <span className="font-semibold text-foreground">Automation gaps.</span>
          </p>
        </Reveal>

        <RevealGroup className="mt-10 grid gap-6 text-left md:grid-cols-3">
          {gaps.map((gap) => (
            <RevealItem
              key={gap.number}
              className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="absolute -top-3 right-3 text-6xl font-bold text-muted/70 select-none">
                {gap.number}
              </span>
              <h3 className="relative text-lg font-semibold text-foreground">{gap.title}</h3>
              <p className="relative mt-2 text-sm text-muted-foreground">
                {gap.description}{' '}
                <span className="font-semibold text-foreground">{gap.resolution}</span>{' '}
                {gap.resolved}
              </p>
              <span className="relative mt-4 flex items-center gap-2 rounded-lg bg-evx-lavender px-3 py-2 text-xs font-medium text-primary">
                <span>📊</span>
                {gap.stat}
              </span>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
