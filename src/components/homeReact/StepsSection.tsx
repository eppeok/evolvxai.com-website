type Step = { num: string; title: string; body: string; reveal: string }

const steps: Step[] = [
  {
    num: '01',
    title: 'Connect Your Channels',
    body: 'Link WhatsApp Business, Instagram, and your website in a few clicks. Takes 5 minutes.',
    reveal: 'evx-reveal',
  },
  {
    num: '02',
    title: 'AI Learns Your Business',
    body: 'We import your services, pricing, and hours. Your AI trains on your specific setup — not a generic template.',
    reveal: 'evx-reveal evx-d1',
  },
  {
    num: '03',
    title: 'Clients Start Booking',
    body: 'Your AI responds instantly, books automatically, and sends confirmations across every channel — 24/7.',
    reveal: 'evx-reveal evx-d2',
  },
  {
    num: '04',
    title: 'You Watch It Grow',
    body: 'No-shows drop. Reviews roll in. Clients rebook automatically. You run the business, not the admin.',
    reveal: 'evx-reveal evx-d3',
  },
]

export const StepsSection: React.FC = () => {
  return (
    <section className="evx-steps">
      <div className="evx-container">
        <div className="evx-section-badge">
          <span>Setup</span>
        </div>
        <h2 className="evx-h2 evx-reveal">Live in under 15 minutes.</h2>
        <p className="evx-section-sub evx-reveal">
          From signup to your first automated booking &mdash; no tech skills needed.
        </p>
        <div className="evx-steps-grid">
          {steps.map((s) => (
            <div key={s.num} className={`evx-step ${s.reveal}`}>
              <div className="evx-step-num">{s.num}</div>
              <div className="evx-step-title">{s.title}</div>
              <p className="evx-step-body">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
