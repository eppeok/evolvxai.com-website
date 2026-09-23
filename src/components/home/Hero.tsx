import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Eyebrow } from './Eyebrow'
import { HeroChat } from './HeroChat'
import { Reveal } from './Reveal'

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-evx-lavender to-background">
      <div
        aria-hidden
        className="animate-evx-blob absolute -left-24 -top-24 size-72 rounded-full bg-primary/20 blur-3xl"
      />
      <div
        aria-hidden
        className="animate-evx-blob absolute -right-10 top-40 size-80 rounded-full bg-[#9b7bff]/20 blur-3xl [animation-delay:2s]"
      />

      <div className="container relative grid gap-16 py-16 md:grid-cols-2 md:items-center md:py-24 lg:gap-24">
        <Reveal className="flex flex-col gap-6">
          <Eyebrow className="w-fit">AI Business Automation &middot; UAE</Eyebrow>

          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            <span className="block text-foreground">You&rsquo;re not understaffed.</span>
            <span className="block text-primary">You&rsquo;re unautomated.</span>
          </h1>

          <p className="max-w-xl text-base text-muted-foreground">
            EvolvXAI builds done-for-you AI systems that{' '}
            <span className="font-semibold text-foreground">answer enquiries at 2am</span>, book
            appointments without a receptionist,{' '}
            <span className="font-semibold text-foreground">follow up with every client</span>{' '}
            who walked out, and fill your Google reviews on autopilot.
            <br />
            <br />
            One system. Every gap closed. Runs 24/7.
          </p>

          <div>
            <Button
              asChild
              size="lg"
              className="rounded-full transition-transform duration-200 hover:scale-105"
            >
              <Link href="/contact" prefetch={false}>
                Close My Revenue Gaps &rarr;
              </Link>
            </Button>
          </div>

          <p className="text-xs text-muted-foreground">
            50+ UAE businesses &middot; AED 180K+ saved &middot; 60% fewer no-shows &middot; 4.9★
            avg. rating boost
          </p>
        </Reveal>

        <Reveal delay={0.15} className="relative mx-auto w-fit py-10 sm:py-14">
          <div className="relative w-[290px] rounded-[36px] border border-border bg-card p-3 shadow-xl transition-transform duration-500 hover:-translate-y-1">
            <div className="mx-auto mb-2 h-[20px] w-[80px] rounded-b-2xl bg-muted" />
            <div className="flex items-center gap-2 border-b border-border px-1 pb-3">
              <span className="flex size-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                X
              </span>
              <div>
                <p className="text-sm font-semibold text-foreground">EvolvXAI Assistant</p>
                <p className="text-xs text-primary">Online &middot; Replies instantly</p>
              </div>
            </div>
            <div className="px-1">
              <HeroChat />
            </div>
          </div>

          <div className="animate-evx-float absolute -right-8 top-[6%] hidden rounded-lg border border-border bg-card px-4 py-2 text-xs shadow-md sm:block lg:-right-16">
            <p className="text-muted-foreground">AI response time</p>
            <p className="font-extrabold text-primary">⚡ 11 seconds</p>
          </div>
          <div className="animate-evx-float absolute -left-8 bottom-[10%] hidden rounded-lg border border-border bg-card px-4 py-2 text-xs shadow-md sm:block lg:-left-16 [animation-delay:1s]">
            <p className="text-muted-foreground">No-shows reduced</p>
            <p className="font-extrabold text-primary">↓ 60%</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
