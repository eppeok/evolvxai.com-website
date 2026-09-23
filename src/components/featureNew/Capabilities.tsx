import {
  Bell,
  CalendarCheck,
  Gift,
  LineChart,
  MessageCircleMore,
  QrCode,
  Sparkles,
  Users,
} from 'lucide-react'

const capabilities = [
  { icon: CalendarCheck, title: 'Instant Online Bookings', description: 'Never miss a client appointment again.' },
  { icon: Sparkles, title: 'Digital Service Menu', description: 'Let clients explore styles before they book.' },
  { icon: QrCode, title: 'QR Check-In & Payments', description: 'Eliminate front-desk delays and payment hassles.' },
  { icon: Gift, title: 'Prepaid Packages', description: 'Keep clients coming back with steady revenue.' },
  { icon: Users, title: 'Smart Client Insights', description: 'Track preferences, past services, and birthdays.' },
  { icon: LineChart, title: 'Advanced Reports', description: 'Understand peak hours and staff performance.' },
  { icon: MessageCircleMore, title: 'Bulk WhatsApp Campaigns', description: 'Promote offers and fill empty slots instantly.' },
  { icon: Bell, title: 'WhatsApp Follow-Up', description: 'Send reminders and re-booking prompts.' },
]

export const Capabilities: React.FC = () => {
  return (
    <section className="evx-fn-capabilities">
      <div className="evx-fn-container">
        <span className="evx-fn-badge">Platform Capabilities</span>
        <h2 className="evx-fn-title">
          Smarter Tools for Seamless <span>Client Journeys</span>
        </h2>
        <p className="evx-fn-lead">
          Deliver convenience at every step with automated bookings, payments, insights, and
          follow-ups.
        </p>
        <div className="evx-fn-cards">
          {capabilities.map((item) => (
            <article className="evx-fn-card" key={item.title}>
              <span className="evx-fn-card-icon">
                <item.icon size={32} strokeWidth={1.75} />
              </span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
