import { Check } from 'lucide-react'

const checks = ['30-Day Free Trial', 'No Credit Card Required', 'Cancel Anytime']

export const Cta: React.FC = () => {
  return (
    <section className="evx-sl-cta">
      <h2 className="evx-sl-reveal">Ready To Stop Paying Commissions?</h2>
      <p className="evx-sl-reveal" style={{ '--evx-sl-i': 1 } as React.CSSProperties}>
        Join <strong>50+ Dubai salons</strong> that are keeping <strong>100% of their revenue</strong>. Book a free
        10-minute demo or start your 30-day free trial today. <strong>No credit card required. No commitment.</strong>
      </p>
      <ul className="evx-sl-checks evx-sl-reveal" style={{ '--evx-sl-i': 2 } as React.CSSProperties}>
        {checks.map((item) => (
          <li key={item}>
            <Check size={12} strokeWidth={3} />
            {item}
          </li>
        ))}
      </ul>
      <a
        className="evx-sl-btn evx-sl-btn-white evx-sl-reveal"
        style={{ '--evx-sl-i': 3 } as React.CSSProperties}
        href="/contact"
      >
        Book a free demo &rarr;
      </a>
    </section>
  )
}
