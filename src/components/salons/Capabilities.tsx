import Image from 'next/image'
import { QrCode, Users } from 'lucide-react'

const capabilities = [
  { image: '/salons/icons/salons-icon-cap-bookings.svg', title: 'Instant Online Bookings', description: 'Never miss a client appointment again.' },
  { image: '/salons/icons/salons-icon-cap-service-menu.svg', title: 'Digital Service Menu', description: 'Let clients explore styles before they book.' },
  { icon: QrCode, title: 'QR Check-In & Payments', description: 'Eliminate front-desk delays and payment hassles.' },
  { image: '/salons/icons/salons-icon-cap-prepaid.svg', title: 'Prepaid Packages', description: 'Keep clients coming back with steady revenue.' },
  { icon: Users, title: 'Smart Client Insights', description: 'Track preferences, past services, and birthdays.' },
  { image: '/salons/icons/salons-icon-cap-reports.svg', title: 'Advanced Reports', description: 'Understand peak hours and staff performance.' },
  { image: '/salons/icons/salons-icon-cap-bulk-campaigns.svg', title: 'Bulk WhatsApp Campaigns', description: 'Promote offers and fill empty slots instantly.' },
  { image: '/salons/icons/salons-icon-cap-followup.svg', title: 'WhatsApp Follow-Up', description: 'Send reminders and re-booking prompts.' },
]

export const Capabilities: React.FC = () => {
  return (
    <section className="evx-sl-capabilities">
      <div className="evx-sl-container">
        <span className="evx-sl-pill evx-sl-reveal">Platform Capabilities</span>
        <h2 className="evx-sl-title evx-sl-reveal">
          Smarter Tools For Seamless <span className="evx-sl-accent">Client Journeys</span>
        </h2>
        <p className="evx-sl-lead evx-sl-reveal">
          Deliver convenience at every step with automated bookings, payments, insights, and follow-ups.
        </p>
        <div className="evx-sl-cards-4">
          {capabilities.map((item, i) => (
            <article
              className="evx-sl-cap-card evx-sl-reveal"
              key={item.title}
              style={{ '--evx-sl-i': i } as React.CSSProperties}
            >
              {item.image ? (
                <Image className="evx-sl-cap-card-icon-img" src={item.image} alt="" width={48} height={48} />
              ) : (
                <span className="evx-sl-cap-card-icon">
                  {item.icon && <item.icon size={26} strokeWidth={1.75} />}
                </span>
              )}
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
