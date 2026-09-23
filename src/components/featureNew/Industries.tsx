import Image from 'next/image'
import Link from 'next/link'

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
    slug: 'med-spa',
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

export const Industries: React.FC = () => {
  return (
    <section className="evx-fn-industries">
      <div className="evx-fn-container">
        <span className="evx-fn-badge">Industries</span>
        <h2 className="evx-fn-title">
          Industries <span>We Serve</span>
        </h2>
        <p className="evx-fn-lead">Tailored solutions designed for the unique needs of every sector.</p>
        <div className="evx-fn-industry-grid">
          {industries.map((industry) => (
            <article className="evx-fn-industry" key={industry.slug}>
              <Image src={industry.image} alt={industry.title} width={514} height={249} />
              <h3>{industry.title}</h3>
              <p>{industry.description}</p>
              <Link href={`/${industry.slug}`} prefetch={false} className="evx-fn-outline">
                Check Service
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
