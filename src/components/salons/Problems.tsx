import Image from 'next/image'

const problems = [
  {
    icon: '/salons/icons/salons-icon-commission-fees.svg',
    title: 'Commission Fees Eating Profits',
    description: '❌ Commission platforms take 30% — that’s AED 2,500/month in lost income.',
  },
  {
    icon: '/salons/icons/salons-icon-whatsapp-missed.svg',
    title: 'Missed WhatsApp Messages',
    description: '📵 Missed WhatsApp messages = lost bookings',
  },
  {
    icon: '/salons/icons/salons-icon-no-shows.svg',
    title: 'No-Shows Wasting Your Time',
    description: '🪑 Empty chairs from no-shows = wasted revenue',
  },
  {
    icon: '/salons/icons/salons-icon-scattered-conversations.svg',
    title: 'Scattered Conversations',
    description: '📱 Scattered DMs & calls = daily chaos',
  },
  {
    icon: '/salons/icons/salons-icon-low-google-rating.svg',
    title: 'Low Google Ranking',
    description: '⭐ Low Google rating? Clients skip you',
  },
  {
    icon: '/salons/icons/salons-icon-no-repeat-clients.svg',
    title: 'No Repeat Clients',
    description: '🔁 Clients don’t rebook = leaky bucket',
  },
]

export const Problems: React.FC = () => {
  return (
    <section className="evx-sl-problems">
      <div className="evx-sl-container">
        <span className="evx-sl-pill evx-sl-pill-red evx-sl-reveal">The Reality</span>
        <h2 className="evx-sl-title evx-sl-reveal">
          Are These Problems Costing You <span className="evx-sl-accent-red">Money Every Day?</span>
        </h2>
        <p className="evx-sl-lead evx-sl-reveal">
          If you&rsquo;re a Dubai salon owner, you&rsquo;re probably dealing with these time-consuming and expensive
          challenges.
        </p>
        <div className="evx-sl-grid-3">
          {problems.map((problem, i) => (
            <article
              className="evx-sl-card evx-sl-reveal"
              key={problem.title}
              style={{ '--evx-sl-i': i } as React.CSSProperties}
            >
              <Image className="evx-sl-card-icon-img" src={problem.icon} alt="" width={44} height={44} />
              <h3>{problem.title}</h3>
              <p>{problem.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
