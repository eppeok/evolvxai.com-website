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
        <p>
          You don&rsquo;t just get a calendar. You get an intelligent AI receptionist + marketer + retention engine
          in one.
        </p>
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
  {
    q: 'How does AI improve my Google Reviews and reputation?',
    a: (
      <>
        <p>
          EvolvXAI automatically sends review requests after appointments, handles negative feedback privately, and
          encourages 5-star reviews.
        </p>
        <p>This boosts:</p>
        <ul>
          {['Your Google ranking', 'Your walk-ins', 'Your visibility', 'Your credibility'].map((item) => (
            <li key={item}>
              <Check size={12} strokeWidth={3} />
              {item}
            </li>
          ))}
        </ul>
        <p>Better reviews = better growth.</p>
      </>
    ),
  },
  {
    q: 'How is AI better than a normal receptionist or booking software?',
    a: (
      <>
        <p>
          A traditional system waits for clients. A receptionist can only reply during working hours. Your AI works
          24/7, instantly replies, never forgets, never misses a message, and never gets tired.
        </p>
        <p>Speed = bookings. Consistency = retention.</p>
        <p>AI gives you both.</p>
      </>
    ),
  },
  {
    q: 'Will clients find it difficult to use the AI?',
    a: (
      <p>
        Not at all. There are no apps to download. Clients simply message on WhatsApp or Instagram the places they
        already use every day. Your AI replies naturally, politely, and professionally.
      </p>
    ),
  },
  {
    q: 'Can EvolvXAI help increase repeat bookings?',
    a: (
      <p>
        Yes. Your AI proactively follows up with clients, reminds them of upcoming appointments, suggests next
        visits, and runs personalized re-booking campaigns. This turns one-time clients into regulars without any
        effort from your team.
      </p>
    ),
  },
  {
    q: 'Does EvolvXAI support salons in the UAE specifically?',
    a: (
      <>
        <p>Yes. EvolvXAI is built for UAE salons with:</p>
        <ul>
          {[
            'Multilingual support',
            'WhatsApp-first customer behavior',
            'Dubai-style fast responses',
            'Local business culture',
            'Flexible scheduling',
            'Automated review workflows',
          ].map((item) => (
            <li key={item}>
              <Check size={12} strokeWidth={3} />
              {item}
            </li>
          ))}
        </ul>
        <p>It feels natural to the UAE audience and salon environment.</p>
      </>
    ),
  },
  {
    q: 'Is it easy to switch from my existing system?',
    a: (
      <p>
        Yes. Migrating is simple. Your bookings, services, and staff info can be imported in minutes. Your AI will
        start handling clients the same day.
      </p>
    ),
  },
  {
    q: 'Do I need technical knowledge to use EvolvXAI?',
    a: (
      <>
        <p>No. The system is built to be simple, intuitive, and automated.</p>
        <p>Your AI does 90% of the work for you.</p>
        <p>You just check your calendar and serve clients.</p>
      </>
    ),
  },
  {
    q: 'How quickly can I see results?',
    a: (
      <>
        <p>Most salons see:</p>
        <ul>
          {[
            'More bookings within 7 days',
            'Higher Google ratings within 14 days',
            'More returning clients within 30 days',
          ].map((item) => (
            <li key={item}>
              <Check size={12} strokeWidth={3} />
              {item}
            </li>
          ))}
        </ul>
        <p>AI speed + zero-commission growth = fast results.</p>
      </>
    ),
  },
  {
    q: 'Does EvolvXAI replace my booking staff?',
    a: (
      <p>
        No. It supports your team by handling routine enquiries so they can focus on providing excellent service.
        Your staff becomes more productive, not replaced.
      </p>
    ),
  },
  {
    q: 'Is EvolvXAI safe and secure?',
    a: (
      <p>
        Yes. All client data is encrypted and handled with strict privacy standards. You maintain full ownership of
        your data.
      </p>
    ),
  },
]

export const FaqAccordion: React.FC = () => {
  return (
    <section className="evx-fq-faq">
      <div className="evx-fq-container">
        <span className="evx-fq-pill evx-fq-reveal">FAQ</span>
        <h2 className="evx-fq-title evx-fq-reveal">
          Frequently Asked <span className="evx-fq-accent">Questions</span>
        </h2>
        <p className="evx-fq-lead evx-fq-reveal">Got questions? We&rsquo;ve got answers.</p>
        <div className="evx-fq-list evx-fq-reveal">
          {faqs.map((faq) => (
            <details className="evx-fq-item" key={faq.q}>
              <summary>
                {faq.q}
                <ChevronDown size={16} />
              </summary>
              <div className="evx-fq-item-body">{faq.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
