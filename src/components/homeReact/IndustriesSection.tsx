type Industry = {
  href?: string
  icon: string
  name: string
  pain: string
  reveal: string
}

const industries: Industry[] = [
  {
    href: '/salons',
    icon: '✂️',
    name: 'Salons',
    pain: "Your stylists are fully booked — and you're still losing clients to missed WhatsApp messages at 7pm.",
    reveal: 'evx-reveal',
  },
  {
    href: '/restaurants',
    icon: '🍱️',
    name: 'Restaurants',
    pain: 'Tables sit empty while reservation enquiries wait unread in your DMs until the next morning.',
    reveal: 'evx-reveal evx-d1',
  },
  {
    icon: '🏥️',
    name: 'Clinics',
    pain: 'Patients book, cancel without warning, and never hear from you again — until they find another clinic on Google.',
    reveal: 'evx-reveal evx-d2',
  },
  {
    icon: '🏋️',
    name: 'Gyms',
    pain: 'Trial sign-ups come in, nobody follows up within 24 hours, and 60% never convert to paying members.',
    reveal: 'evx-reveal',
  },
  {
    icon: '💈',
    name: 'Barbershops',
    pain: "Walk-ins are unpredictable. Repeat clients drift. There's no system bringing them back every 3 weeks.",
    reveal: 'evx-reveal evx-d1',
  },
  {
    href: '/med-spa',
    icon: '💆',
    name: 'Med-Spas',
    pain: 'High-value treatments, high-value clients — and zero automated follow-up after their first visit.',
    reveal: 'evx-reveal evx-d2',
  },
]

export const IndustriesSection: React.FC = () => {
  return (
    <section className="evx-industries">
      <div className="evx-container">
        <div className="evx-section-badge teal">
          <span>Solutions by Industry</span>
        </div>
        <h2 className="evx-h2 evx-reveal">One AI system. Built for your business.</h2>
        <p className="evx-section-sub evx-reveal" style={{ marginBottom: 44 }}>
          Same gaps. Same system. Industry-specific setup in under 15 minutes.
        </p>
        <div className="evx-industry-grid">
          {industries.map((ind) => {
            const cardContent = (
              <>
                <div className="evx-ind-icon">{ind.icon}</div>
                <div className="evx-ind-name">{ind.name}</div>
                <p className="evx-ind-pain">{ind.pain}</p>
              </>
            )

            return ind.href ? (
              <a key={ind.name} href={ind.href} className={`evx-industry-card ${ind.reveal}`}>
                {cardContent}
              </a>
            ) : (
              <div
                key={ind.name}
                className={`evx-industry-card evx-industry-card-disabled ${ind.reveal}`}
                aria-disabled="true"
              >
                {cardContent}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
