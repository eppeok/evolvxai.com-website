import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Reveal } from './Reveal'

export const CoreBenefits: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-evx-lavender-deep to-evx-lavender py-16 text-center md:py-20">
      <div
        aria-hidden
        className="animate-evx-blob absolute left-1/3 top-0 size-64 rounded-full bg-primary/10 blur-3xl"
      />
      <Reveal className="container relative flex flex-col items-center">
        <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          One system closes all three gaps.
          <br />
          <span className="bg-gradient-to-br from-[#0d0d1a] from-10% to-primary bg-clip-text text-transparent">
            Automatically. From day one.
          </span>
        </h2>
        <p className="mt-4 max-w-2xl text-sm text-muted-foreground">
          EvolvXAI builds and runs your entire client-facing operation &mdash; enquiries,
          bookings, reminders, reviews, and retention &mdash; so your team focuses on delivering
          the service, not chasing the admin.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Button
            asChild
            size="lg"
            className="rounded-full transition-transform duration-200 hover:scale-105"
          >
            <Link href="/contact" prefetch={false}>
              See It In Action &rarr;
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="rounded-full transition-transform duration-200 hover:scale-105"
          >
            <Link href="/pricing" prefetch={false}>
              View Pricing
            </Link>
          </Button>
        </div>
      </Reveal>
    </section>
  )
}
