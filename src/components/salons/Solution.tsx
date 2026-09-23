import Image from 'next/image'

export const Solution: React.FC = () => {
  return (
    <section className="evx-sl-solution">
      <div className="evx-sl-solution-grid">
        <div className="evx-sl-reveal">
          <span className="evx-sl-pill evx-sl-pill-left">What to Expect</span>
          <h2>
            What If One Platform <span className="evx-sl-accent">Solved Everything?</span>
          </h2>
          <p>
            EvolvXAI is the first zero-commission booking platform built specifically for Dubai salons. AI handles
            your bookings, reminders, reviews, and client retention automatically. You focus on hair. We handle
            everything else.
          </p>
          <a className="evx-sl-btn" href="/contact">
            Book A Free Demo &rarr;
          </a>
          <h3>
            Try <span className="evx-sl-accent">AI Booking</span> Experience
          </h3>
        </div>
        <Image
          className="evx-sl-reveal"
          style={{ '--evx-sl-i': 2 } as React.CSSProperties}
          src="/salons/salons-before-after-comparison.webp"
          alt="Before and after EvolvXAI comparison"
          width={743}
          height={495}
        />
      </div>
    </section>
  )
}
