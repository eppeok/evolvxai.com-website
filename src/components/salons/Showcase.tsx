import { Bot, Star, LayoutDashboard } from 'lucide-react'
import { FeatureRow, type FeatureRowProps } from './FeatureRow'

const rows: FeatureRowProps[] = [
  {
    icon: Bot,
    eyebrow: 'AI Receptionist',
    title: 'Your AI Receptionist Never Sleeps',
    description:
      'Your clients can message you anywhere WhatsApp, Instagram DMs, website chat, even email. Your AI responds instantly, answers questions, shows available time slots, and books appointments automatically. No app downloads for clients. No manual work for you.',
    checklist: [
      'Responds in seconds. 24/7 available.',
      'Works in English and Arabic',
      'Handles multiple conversations simultaneously',
      'Never forgets to ask for confirmation',
    ],
    image: '/features/ai-receptionist-phone.webp',
    imageSide: 'left',
  },
  {
    eyebrowImage: '/salons/icons/salons-icon-feat-commission.svg',
    eyebrow: 'Zero Commission Model',
    title: 'Keep 100% Of What You Earn',
    description:
      'Unlike platforms that take 20-30% of every booking, EvolvXAI charges a simple monthly fee. No commissions. You keep every dirham, whether you make AED 10,000 or AED 100,000.',
    image: '/features/commission-styling.webp',
    imageSide: 'right',
    muted: true,
  },
  {
    eyebrowImage: '/salons/icons/salons-icon-feat-consistency.svg',
    eyebrow: 'Consistency Made Easy',
    title: 'Reduce No-Shows By 60%',
    description:
      'Your AI sends automated reminders via WhatsApp at optimal times (24 hours before, 2 hours before, 30 minutes before). Clients can confirm, reschedule, or cancel with a simple reply. Empty chairs become rare.',
    note: [
      '24 hours before: "Hi Sarah, reminder for tomorrow at 2 PM"',
      '2 hours before: "See you soon! Your appointment is at 2 PM"',
      'Instant confirmation: "Reply YES to confirm or RESCHEDULE"',
    ],
    image: '/features/noshows-blowdry.webp',
    imageSide: 'left',
  },
  {
    icon: Star,
    eyebrow: 'Google Reviews + Reputation',
    title: 'Turn Happy Clients Into 5-Star Reviews',
    description:
      'After every appointment, your AI automatically sends a review request via WhatsApp. Happy clients are directed to Google. Unhappy feedback is collected privately protecting your public rating.',
    note: ['Client finishes appointment', 'AI sends satisfaction survey (1 hour later)', '5-star rating? Direct link to Google!'],
    image: '/features/reviews-clients.webp',
    imageSide: 'right',
    muted: true,
  },
  {
    eyebrowImage: '/salons/icons/salons-icon-feat-retention.svg',
    eyebrow: 'Smart Client Retention',
    title: 'Bring Clients Back Automatically',
    description:
      "Your AI tracks every client's service history and automatically reaches out at the perfect time. One-time clients become regulars without you lifting a finger.",
    note: [
      'Suggests touch-ups in 6-8 weeks for highlights',
      'Sends automated birthday discounts',
      'Re-engages inactive clients after 3 months',
    ],
    image: '/features/retention-coloring.webp',
    imageSide: 'left',
    muted: true,
  },
  {
    icon: LayoutDashboard,
    eyebrow: 'All-In-One Hub',
    title: 'One Dashboard. All Your Conversations.',
    description:
      'Stop switching between WhatsApp, Instagram, email, and your booking platform. EvolvXAI brings everything into one beautiful dashboard.',
    checklist: [
      'Unified inbox (all channels)',
      'Client profiles (history, preferences)',
      'Calendar view (drag-and-drop scheduling)',
      'Performance analytics',
    ],
    image: '/features/dashboard-woman.webp',
    imageSide: 'right',
    muted: true,
  },
]

export const Showcase: React.FC = () => {
  return (
    <section className="evx-sl-showcase">
      <div className="evx-sl-showcase-head">
        <span className="evx-sl-pill evx-sl-reveal">Designed for Efficiency</span>
        <h2 className="evx-sl-title evx-sl-reveal">
          Everything You Need To Run A <span className="evx-sl-accent">Modern Salon</span>
        </h2>
        <p className="evx-sl-lead evx-sl-reveal">
          We built EvolvXAI to solve every problem commission-based platforms create.
        </p>
      </div>

      {rows.map((row) => (
        <FeatureRow key={row.title} {...row} />
      ))}

      <div className="evx-sl-btn-wrap">
        <a className="evx-sl-btn" href="#evx-sl-demo">
          See It In Action &rarr;
        </a>
      </div>
    </section>
  )
}
