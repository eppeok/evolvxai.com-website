import { X, Check } from 'lucide-react'

const before = [
  'Paying AED 2,500+ monthly in commissions',
  'Missing WhatsApp messages daily',
  '30% no-show rate',
  'Juggling 4-5 different apps',
  'Clients come once, never return',
]

const after = [
  'Keep 100% of your revenue (AED 0 commission)',
  'AI responds to every message in seconds',
  'No-shows reduced by 60%',
  'All conversations in one dashboard',
  'Clients automatically rebooked',
]

export const Solution: React.FC = () => {
  return (
    <section className="evx-pr-solution">
      <div className="evx-pr-solution-grid">
        <div className="evx-pr-reveal">
          <span className="evx-pr-pill evx-pr-pill-left">What to Expect</span>
          <h2>
            What If One Platform <span className="evx-pr-accent">Solved Everything?</span>
          </h2>
          <p>
            EvolvXAI is the first zero-commission booking platform built specifically for Dubai salons. AI handles
            your bookings, reminders, reviews, and client retention automatically. You focus on hair. We handle
            everything else.
          </p>
          <a className="evx-pr-btn" href="/contact">
            Book A Free Demo &rarr;
          </a>
          <h3>
            Try <span className="evx-pr-accent">AI Booking</span> Experience
          </h3>
        </div>
        <div className="evx-pr-compare evx-pr-reveal" style={{ '--evx-pr-i': 2 } as React.CSSProperties}>
          <div className="evx-pr-compare-card evx-pr-compare-card-before">
            <div className="evx-pr-compare-head">Before EvolvXAI</div>
            <ul>
              {before.map((item) => (
                <li key={item}>
                  <X size={11} strokeWidth={3} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="evx-pr-compare-card evx-pr-compare-card-after">
            <div className="evx-pr-compare-head">After EvolvXAI</div>
            <ul>
              {after.map((item) => (
                <li key={item}>
                  <Check size={11} strokeWidth={3} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
