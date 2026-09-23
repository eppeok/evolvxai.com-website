import Image from 'next/image'

const industries = [
  {
    title: 'Salons',
    image: '/features/industry-salons.webp',
    description:
      'Fill empty slots, reduce no-shows, and keep clients returning with automated bookings, reminders, and smart client insights.',
    href: '/salons',
  },
  {
    title: 'Med-Spa',
    image: '/features/industry-medspa.webp',
    description:
      'Deliver a seamless client experience with automated bookings, personalized care insights, and effortless follow-ups that keep clients coming back.',
    href: '/med-spa',
  },
  {
    title: 'Tattoo Studio',
    image: '/features/industry-tattoo.webp',
    description:
      'Streamline bookings, reduce no-shows, and keep artists focused with automated scheduling, easy client communication, and smooth check-ins.',
    href: '/tattoo-studio',
  },
]

export const Industries: React.FC = () => {
  return (
    <section className="evx-pr-industries">
      <div className="evx-pr-container">
        <span className="evx-pr-pill evx-pr-reveal">Industries</span>
        <h2 className="evx-pr-title evx-pr-reveal">
          Industries <span className="evx-pr-accent">We Serve</span>
        </h2>
        <p className="evx-pr-lead evx-pr-reveal">Tailored solutions designed for the unique needs of every sector.</p>
        <div className="evx-pr-industry-grid">
          {industries.map((industry, i) => (
            <article
              className="evx-pr-industry evx-pr-reveal"
              key={industry.title}
              style={{ '--evx-pr-i': i } as React.CSSProperties}
            >
              <Image src={industry.image} alt={industry.title} width={514} height={249} />
              <h3>{industry.title}</h3>
              <p>{industry.description}</p>
              <a className="evx-pr-outline" href={industry.href}>
                Check Service &rarr;
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
