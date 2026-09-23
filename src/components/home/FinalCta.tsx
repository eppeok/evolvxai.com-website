import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Reveal } from './Reveal'

export const FinalCta: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#1a1033] via-primary-dark to-[#1a1033] py-16 text-white md:py-24">
      <div
        aria-hidden
        className="animate-evx-blob absolute left-10 top-0 size-72 rounded-full bg-[#9b7bff]/20 blur-3xl"
      />
      <Reveal className="container relative flex flex-col items-center text-center">
        <h2 className="max-w-2xl text-3xl font-bold tracking-tight md:text-4xl">
          Stop losing clients
          <br />
          while{' '}
          <span className="bg-gradient-to-r from-[#c4b5ff] to-white bg-clip-text text-transparent">
            you sleep.
          </span>
        </h2>
        <p className="mt-4 max-w-xl text-sm text-white/70">
          Book a free 10-minute demo. We&rsquo;ll show you exactly which gaps your business has
          &mdash; and close them in under 15 minutes of setup.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="rounded-full transition-transform duration-200 hover:scale-105"
          >
            <Link href="/contact" prefetch={false}>
              Close My Revenue Gaps &rarr;
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full border-white/30 bg-transparent text-white transition-transform duration-200 hover:scale-105 hover:bg-white/10"
          >
            <a href="https://wa.me/971581675393" target="_blank" rel="noopener noreferrer">
              💬 WhatsApp Us
            </a>
          </Button>
        </div>
        <p className="mt-4 text-xs text-white/50">
          No credit card &middot; No commitment &middot; 30-day free trial
        </p>
      </Reveal>
    </section>
  )
}
