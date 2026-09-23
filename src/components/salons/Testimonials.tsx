import { Quote, Star } from 'lucide-react'

const quotes = [
  {
    text: "We saved AED 2,800 in the first month alone. The AI handles all our WhatsApp bookings perfectly. Best investment we've made.",
    name: 'Sarah Al-Mansoori',
    role: 'Owner, Glow Beauty Lounge, JBR',
  },
  {
    text: 'Our no-shows dropped from 35% to under 10%. The automated reminders work incredibly well. Zero commission means we keep everything.',
    name: 'Ahmed Hassan',
    role: 'Manager, Elite Salon & Spa, Dubai Marina',
  },
  {
    text: 'We went from 4.1 to 4.8 stars on Google in just 60 days. The review automation brings in 3-4 new walk-ins daily. Game changer.',
    name: 'Layla Rahman',
    role: 'Owner, Luxe Hair Studio, Downtown Dubai',
  },
]

const Stars: React.FC = () => (
  <div className="evx-sl-stars">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} size={14} fill="currentColor" />
    ))}
  </div>
)

export const Testimonials: React.FC = () => {
  return (
    <section className="evx-sl-testimonials">
      <div className="evx-sl-container">
        <span className="evx-sl-pill evx-sl-reveal">Testimonials</span>
        <h2 className="evx-sl-title evx-sl-reveal">
          Dubai Salon Owners <span className="evx-sl-accent">Love EvolvXAI</span>
        </h2>
        <p className="evx-sl-lead evx-sl-reveal">
          Join 50+ salons that stopped paying commissions and started growing.
        </p>
        <div className="evx-sl-grid-3">
          {quotes.map((quote, i) => (
            <article
              className="evx-sl-quote-card evx-sl-reveal"
              key={quote.name}
              style={{ '--evx-sl-i': i } as React.CSSProperties}
            >
              <Quote className="evx-sl-mark" size={28} strokeWidth={1.5} />
              <Stars />
              <blockquote>&ldquo;{quote.text}&rdquo;</blockquote>
              <footer>
                <strong>{quote.name}</strong>
                <span>{quote.role}</span>
              </footer>
            </article>
          ))}
        </div>

        <div className="evx-sl-case evx-sl-reveal">
          <h2>How Elite Salon Saved AED 34,000 In One Year</h2>
          <div className="evx-sl-case-grid">
            <div className="evx-sl-case-copy">
              <p>
                Elite Salon was using a commission-based platform and paying 28% commission on every booking. They
                were making AED 12,000 monthly but losing AED 3,360 to fees.
              </p>
              <p>
                <strong>
                  They switched to EvolvXAI on January 1st. First month, they saved AED 3,360 minus AED 1799
                  subscription ={' '}
                  <span className="evx-sl-highlight">
                    AED 1,561 net savings. and an additional revenue of AED 8,910 from new bookings that would have
                    been missed.
                  </span>
                </strong>
              </p>
              <div className="evx-sl-case-stats">
                <div>
                  <strong>AED 34K+</strong>
                  <span>Saved Annually</span>
                </div>
                <div>
                  <strong>60%</strong>
                  <span>Fewer No-Shows</span>
                </div>
                <div>
                  <strong>47</strong>
                  <span>New 5-Star Reviews</span>
                </div>
              </div>
            </div>
            <article className="evx-sl-quote-card">
              <Quote className="evx-sl-mark" size={28} strokeWidth={1.5} />
              <Stars />
              <blockquote>&ldquo;I wish we&rsquo;d switched sooner. The commission savings alone paid for the software 10x over.&rdquo;</blockquote>
              <footer>
                <strong>Rashid Al Duraimi</strong>
                <span>Salon, Al Quoz, Dubai</span>
              </footer>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
