import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Reveal } from '@/components/home/Reveal'

export const FeaturesCta: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary to-[#9b7bff] py-16 text-center text-white md:py-20">
      <div
        aria-hidden
        className="animate-evx-blob absolute right-10 top-0 size-72 rounded-full bg-white/10 blur-3xl"
      />
      <Reveal className="container relative flex flex-col items-center">
        <h2 className="max-w-2xl text-3xl font-bold tracking-tight md:text-4xl">
          See How EvolvXAI Can Transform Your Salon In 10 Minutes.
        </h2>
        <p className="mt-4 max-w-xl text-sm text-white/85">
          Let AI handle the admin while you focus on your craft.
        </p>
        <div className="mt-6">
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="rounded-full transition-transform duration-200 hover:scale-105"
          >
            <Link href="/contact" prefetch={false}>
              Book A Free Demo &rarr;
            </Link>
          </Button>
        </div>
      </Reveal>
    </section>
  )
}
