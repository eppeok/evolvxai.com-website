import { Eyebrow } from '@/components/home/Eyebrow'
import { Reveal } from '@/components/home/Reveal'

export const FeaturesHero: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-evx-lavender to-background py-16 text-center md:py-24">
      <Reveal className="container flex flex-col items-center">
        <Eyebrow>Designed For Experience-Driven Businesses</Eyebrow>
        <h1 className="mt-4 max-w-2xl text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          Designed For Efficiency.{' '}
          <span className="bg-gradient-to-r from-primary to-[#9b7bff] bg-clip-text text-transparent">
            Built For Growth.
          </span>
        </h1>
        <p className="mt-4 max-w-xl text-muted-foreground">
          Dive deeper into the features that save you time, boost revenue, and delight your
          clients.
        </p>
      </Reveal>
    </section>
  )
}
