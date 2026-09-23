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
  <div className="evx-fq-stars">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} size={14} fill="currentColor" />
    ))}
  </div>
)

export const Testimonials: React.FC = () => {
  return (
    <section className="evx-fq-testimonials">
      <div className="evx-fq-container">
        <span className="evx-fq-pill evx-fq-reveal">Testimonials</span>
        <h2 className="evx-fq-title evx-fq-reveal">
          Dubai Salon Owners <span className="evx-fq-accent">Love EvolvXAI</span>
        </h2>
        <p className="evx-fq-lead evx-fq-reveal">
          Join 50+ salons that stopped paying commissions and started growing.
        </p>
        <div className="evx-fq-grid-3">
          {quotes.map((quote, i) => (
            <article
              className="evx-fq-quote-card evx-fq-reveal"
              key={quote.name}
              style={{ '--evx-fq-i': i } as React.CSSProperties}
            >
              <Quote className="evx-fq-mark" size={28} strokeWidth={1.5} />
              <Stars />
              <blockquote>&ldquo;{quote.text}&rdquo;</blockquote>
              <footer>
                <strong>{quote.name}</strong>
                <span>{quote.role}</span>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
