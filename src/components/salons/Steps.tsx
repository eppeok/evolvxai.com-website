import { Link2, BrainCircuit, CalendarCheck, TrendingUp } from 'lucide-react'

const steps = [
  {
    icon: Link2,
    title: 'Connect Your Channels',
    description: 'Link your WhatsApp Business, Instagram, and website in just a few clicks. Takes 5 minutes.',
  },
  {
    icon: BrainCircuit,
    title: 'AI Learns Your Business',
    description:
      "We import your services, pricing, and availability. Your AI trains itself on your salon's specific needs.",
  },
  {
    icon: CalendarCheck,
    title: 'Clients Start Booking',
    description:
      'Your AI responds instantly, books appointments automatically, and sends confirmations across all channels.',
  },
  {
    icon: TrendingUp,
    title: 'You Watch It Grow',
    description:
      'Automated reminders reduce no-shows. Google reviews roll in. Clients rebook automatically. You count the money.',
  },
]

export const Steps: React.FC = () => {
  return (
    <section className="evx-sl-steps">
      <div className="evx-sl-container">
        <span className="evx-sl-pill evx-sl-reveal">Easy steps to get started</span>
        <h2 className="evx-sl-title evx-sl-reveal">
          Get Started In <span className="evx-sl-accent">4 Simple Steps</span>
        </h2>
        <p className="evx-sl-lead evx-sl-reveal">From signup to your first automated booking in under 15 minutes</p>
        <div className="evx-sl-grid-4">
          {steps.map((step, i) => (
            <article
              className="evx-sl-step evx-sl-reveal"
              key={step.title}
              style={{ '--evx-sl-i': i } as React.CSSProperties}
            >
              <span className="evx-sl-step-num">{i + 1}</span>
              <span className="evx-sl-step-icon">
                <step.icon size={22} strokeWidth={1.75} />
              </span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
        <div className="evx-sl-btn-wrap">
          <a className="evx-sl-btn" href="/contact">
            Ready To Get Started &rarr;
          </a>
        </div>
      </div>
    </section>
  )
}
