import { Eyebrow } from '@/components/home/Eyebrow'
import { Reveal } from '@/components/home/Reveal'
import { FeatureRow, type FeatureRowProps } from './FeatureRow'

const rows: FeatureRowProps[] = [
  {
    icon: '🔄',
    eyebrow: 'AI Receptionist',
    title: 'Your AI Receptionist Never Sleeps',
    description:
      'Your clients can message you anywhere — WhatsApp, Instagram DMs, website chat, even email. Your AI responds instantly, answers questions, shows available time slots, and books appointments for you. No app downloads for clients. No manual work for you.',
    checklist: [
      'Responds in seconds, 24/7 available.',
      'Works in multiple languages',
      'Handles multiple conversations simultaneously',
      'Never forgets to ask for confirmation',
    ],
    image: '/features/ai-receptionist-phone.webp',
    imageSide: 'left',
  },
  {
    icon: '💰',
    eyebrow: 'Zero Commission Model',
    title: 'Keep 100% Of What You Earn',
    description:
      'Unlike platforms that take 20-30% of every booking, EvolvXAI charges a simple monthly fee. No commissions. You keep every dirham, whether you make AED 10,000 or AED 100,000.',
    checklist: [],
    image: '/features/commission-styling.webp',
    imageSide: 'right',
  },
  {
    icon: '✅',
    eyebrow: 'Consistency Made Easy',
    title: 'Reduce No-Shows By 60%',
    description:
      'Your AI sends automated reminders via WhatsApp at optimal times (24 hours before, 2 hours before, 30 minutes before). Empty chairs become rare.',
    checklist: [
      '24 hours before: "Hi Sarah, reminder for tomorrow at 2PM"',
      '2 hours before: "See you soon! Your appointment is at 2PM"',
      'Instant confirmation: "Reply YES to confirm or RESCHEDULE"',
    ],
    image: '/features/noshows-blowdry.webp',
    imageSide: 'left',
  },
  {
    icon: '⭐',
    eyebrow: 'Google Reviews + Reputation',
    title: 'Turn Happy Clients Into 5-Star Reviews',
    description:
      'After every appointment, your AI automatically sends a review request via WhatsApp. Happy clients are directed to Google. Unhappy feedback is collected privately, protecting your public rating.',
    checklist: [
      'Client finishes appointment',
      'AI sends satisfaction survey (1 hour later)',
      '5-star rating? Direct link to Google!',
    ],
    image: '/features/reviews-clients.webp',
    imageSide: 'right',
  },
  {
    icon: '🎯',
    eyebrow: 'Smart Client Retention',
    title: 'Bring Clients Back Automatically',
    description:
      'Your AI tracks every client’s service history and automatically reaches out at the perfect time. One-time clients become regulars without you lifting a finger.',
    checklist: [
      'Suggests touch-ups in 6-8 weeks for highlights',
      'Sends automated birthday discounts',
      'Re-engages inactive clients after 3 months',
    ],
    image: '/features/retention-coloring.webp',
    imageSide: 'left',
  },
  {
    icon: '📊',
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

export const FeatureRows: React.FC = () => {
  return (
    <section className="bg-muted/40 py-16 md:py-24">
      <div className="container">
        <Reveal className="flex flex-col items-center text-center">
          <Eyebrow>Designed For Efficiency</Eyebrow>
          <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Everything You Need To Run A{' '}
            <span className="bg-gradient-to-r from-primary to-[#9b7bff] bg-clip-text text-transparent">
              Modern Salon
            </span>
          </h2>
          <p className="mt-3 max-w-xl text-sm text-muted-foreground">
            We built EvolvXAI to solve every problem commission-based platforms create.
          </p>
        </Reveal>

        <div className="mt-14 flex flex-col gap-16 md:gap-24">
          {rows.map((row) => (
            <FeatureRow key={row.title} {...row} />
          ))}
        </div>
      </div>
    </section>
  )
}
