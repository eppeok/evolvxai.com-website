import Image from 'next/image'
import Link from 'next/link'
import { Eyebrow } from '@/components/home/Eyebrow'
import { Reveal, RevealGroup, RevealItem } from '@/components/home/Reveal'

const industries = [
  {
    title: 'Salons',
    slug: 'salons',
    image: '/features/industry-salons.webp',
    description:
      'Fill empty slots, reduce no-shows, and keep clients returning with automated bookings, reminders, and smart client insights.',
  },
  {
    title: 'Med-Spa',
    slug: 'med-spas',
    image: '/features/industry-medspa.webp',
    description:
      'Deliver a seamless client experience with automated bookings, personalized care insights, and effortless follow-ups that keep clients coming back.',
  },
  {
    title: 'Tattoo Studio',
    slug: 'tattoo-studio',
    image: '/features/industry-tattoo.webp',
    description:
      'Streamline bookings, reduce no-shows, and keep artists focused with automated scheduling, easy client communication, and smooth check-ins.',
  },
]

export const IndustriesWeServe: React.FC = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container flex flex-col items-center text-center">
        <Reveal className="flex flex-col items-center">
          <Eyebrow>Industries</Eyebrow>
          <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Industries{' '}
            <span className="bg-gradient-to-r from-primary to-[#9b7bff] bg-clip-text text-transparent">
              We Serve
            </span>
          </h2>
          <p className="mt-3 max-w-xl text-sm text-muted-foreground">
            Tailored solutions designed for the unique needs of every sector.
          </p>
        </Reveal>

        <RevealGroup className="mt-10 grid w-full gap-6 text-left sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <RevealItem
              key={industry.slug}
              className="overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-[514/249] w-full">
                <Image
                  src={industry.image}
                  alt={industry.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-foreground">{industry.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{industry.description}</p>
                <Link
                  href={`/${industry.slug}`}
                  prefetch={false}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
                >
                  Check Service &rarr;
                </Link>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
