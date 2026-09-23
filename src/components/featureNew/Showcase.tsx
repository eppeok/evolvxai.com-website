import { Bot, CalendarClock, LayoutDashboard, Star, Target, Wallet } from 'lucide-react'
import { FeatureRow, type FeatureRowProps } from './FeatureRow'

const rows: FeatureRowProps[] = [
  {
    icon: Bot,
    eyebrow: 'AI Receptionist',
    title: 'Your AI Receptionist Never Sleeps',
    description:
      'Your clients can message you anywhere — WhatsApp, Instagram DMs, website chat, even email. Your AI responds instantly, answers questions, shows available time slots, and books appointments automatically. No app downloads for clients. No manual work for you.',
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
    icon: Wallet,
    eyebrow: 'Zero Commission Model',
    title: 'Keep 100% of What You Earn',
    description:
      'Unlike platforms that take 20-30% of every booking, EvolvXAI charges a simple monthly fee. No commissions. You keep every dirham, whether you make AED 10,000 or AED 100,000.',
    image: '/features/commission-styling.webp',
    imageSide: 'right',
  },
  {
    icon: CalendarClock,
    eyebrow: 'Consistency Made Easy',
    title: 'Reduce No-Shows by 60%',
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
    title: 'Turn Happy Clients into 5-Star Reviews',
    description:
      'After every appointment, your AI automatically sends a review request via WhatsApp. Happy clients are directed to Google. Unhappy feedback is collected privately protecting your public rating.',
    note: ['Client finishes appointment', 'AI sends satisfaction survey (1 hour later)', '5-star rating? Direct link to Google!'],
    image: '/features/reviews-clients.webp',
    imageSide: 'right',
  },
  {
    icon: Target,
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
  },
]

export const Showcase: React.FC = () => {
  return (
    <section className="evx-fn-showcase">
      <div className="evx-fn-container">
        <div className="evx-fn-showcase-head">
          <span className="evx-fn-badge">Designed for Efficiency</span>
          <h2 className="evx-fn-title">
            Everything You Need to Run a <span>Modern Salon</span>
          </h2>
          <p className="evx-fn-lead">We built EvolvXAI to solve every problem commission-based platforms create.</p>
        </div>

        {rows.map((row) => (
          <FeatureRow key={row.title} {...row} />
        ))}
      </div>
    </section>
  )
}
