import { ChevronDown, Check } from 'lucide-react'

const faqs = [
  {
    q: 'What makes EvolvXAI different from traditional salon booking platforms?',
    a: (
      <>
        <p>
          Most booking apps only allow your clients to choose a time slot. EvolvXAI is a complete AI-powered growth
          system that handles enquiries, answers questions, books appointments, collects reviews, and rebooks
          clients all on autopilot.
        </p>
        <p>You don&rsquo;t just get a calendar. You get an intelligent AI receptionist + marketer + retention engine in one.</p>
      </>
    ),
  },
  {
    q: 'How does EvolvXAI help my salon grow faster?',
    a: (
      <>
        <p>Our AI improves the three most profitable areas of your salon:</p>
        <ul>
          {[
            'More bookings from WhatsApp, Instagram & website',
            'Higher Google ratings → more walk-ins',
            'More returning clients through smart follow-ups',
          ].map((item) => (
            <li key={item}>
              <Check size={12} strokeWidth={3} />
              {item}
            </li>
          ))}
        </ul>
        <p>This creates continuous growth without needing ads or extra staff.</p>
      </>
    ),
  },
  {
    q: 'Do I really get 100% of my booking revenue?',
    a: (
      <>
        <p>Yes. EvolvXAI follows a strict zero-commission model.</p>
        <p>Every booking, every service, every dirham 100% goes to you.</p>
        <p>No cuts, no &ldquo;processing fees,&rdquo; and no surprises.</p>
      </>
    ),
  },
  {
    q: 'Will EvolvXAI reduce manual work for my team?',
    a: (
      <>
        <p>Absolutely. Your AI agent handles:</p>
        <ul>
          {[
            'Client enquiries',
            'Service questions',
            'Price queries',
            'Appointment bookings',
            'Cancellations',
            'Reminders',
            'Follow-ups',
            'Rebooking',
            'Review collection',
          ].map((item) => (
            <li key={item}>
              <Check size={12} strokeWidth={3} />
              {item}
            </li>
          ))}
        </ul>
        <p>Your team finally gets to focus on serving clients, not checking messages.</p>
      </>
    ),
  },
  {
    q: 'Can EvolvXAI manage booking requests from multiple channels?',
    a: (
      <>
        <p>Yes. Your AI instantly responds and books clients from:</p>
        <ul>
          {['WhatsApp', 'Instagram DMs', 'Website chat', 'Email', 'Live chat widgets'].map((item) => (
            <li key={item}>
              <Check size={12} strokeWidth={3} />
              {item}
            </li>
          ))}
        </ul>
        <p>Your salon never loses a client because of a missed message again.</p>
      </>
    ),
  },
]

export const Faq: React.FC = () => {
  return (
    <section className="evx-sl-faq">
      <div className="evx-sl-container">
        <span className="evx-sl-pill evx-sl-reveal">FAQ</span>
        <h2 className="evx-sl-title evx-sl-reveal">
          Frequently Asked <span className="evx-sl-accent">Questions</span>
        </h2>
        <p className="evx-sl-lead evx-sl-reveal">Got questions? We&rsquo;ve got answers.</p>
        <div className="evx-sl-faq-list evx-sl-reveal">
          {faqs.map((faq) => (
            <details className="evx-sl-faq-item" key={faq.q}>
              <summary>
                {faq.q}
                <ChevronDown size={16} />
              </summary>
              <div className="evx-sl-faq-body">{faq.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
