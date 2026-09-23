import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  Bell,
  CalendarCheck,
  Gift,
  LineChart,
  MessageCircleMore,
  QrCode,
  Quote,
  Sparkles,
  Users,
} from 'lucide-react'

import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import '@/components/medSpa/styles.css'

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

const testimonials = [
  { quote: 'We saved AED 2,800 in the first month alone. The AI handles all our WhatsApp bookings perfectly. Best investment we made.', name: 'Sarah Al-Mansoori', role: 'Owner, Glow Beauty Lounge, JBR' },
  { quote: 'Our no-shows dropped from 35% to under 10%. The automated reminders work incredibly well.', name: 'Ahmed Hassan', role: 'Manager, Eltason & Spa, Dubai Marina' },
  { quote: 'We went from 4.1 to 4.8 stars on Google in just 60 days. The review automation brings in 3–4 new walk-ins daily.', name: 'Layla Rahman', role: 'Owner, Luxe Hair Studio, Downtown Dubai' },
]

export default function MedSpaPage() {
  return (
    <main className="evx-ms-page">
      <section className="evx-ms-hero">
        <div className="evx-ms-container">
          <span className="evx-ms-badge">Med-Spa</span>
          <h1 className="evx-ms-title">Built For The Business Of <span>Aesthetic Excellence</span></h1>
          <p className="evx-ms-lead">Deliver seamless patient experiences while automating scheduling, check-ins, and follow-ups.</p>
        </div>
      </section>

      <section className="evx-ms-capabilities">
        <div className="evx-ms-container">
          <span className="evx-ms-badge">Platform Capabilities</span>
          <h2 className="evx-ms-title">Smarter Tools For Seamless <span>Client Journeys</span></h2>
          <p className="evx-ms-lead">Deliver convenience at every step with automated bookings, payments, insights, and follow-ups.</p>
          <div className="evx-ms-cards">
            {capabilities.map(({ icon: Icon, title, description }) => (
              <article className="evx-ms-card" key={title}>
                <span className="evx-ms-card-icon"><Icon size={24} strokeWidth={1.75} /></span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="evx-ms-problems">
        <div className="evx-ms-container evx-ms-problem-grid">
          <Image className="evx-ms-problem-image" src="/med-spa/client-planning.png" alt="Med-spa client planning her treatment" width={900} height={665} />
          <div className="evx-ms-problem-copy">
            <span className="evx-ms-badge">Problems</span>
            <h2 className="evx-ms-title">Why Your Client Experience <span>Falls Short</span></h2>
            <p>Identify the gaps so you can transform your bookings, engagement, and performance.</p>
            <ul className="evx-ms-list">
              <li>Unfilled Slots & Last-Minute Cancellations — Chairs stay empty even on busy days.</li>
              <li>Low Client Retention — Customers visit once but rarely return.</li>
              <li>No-Shows & Scheduling Chaos — Missed appointments hurt productivity.</li>
              <li>Weak Online Presence & Poor Engagement — Social media doesn’t convert into real bookings.</li>
              <li>No Performance Tracking — You can’t see which stylists or services drive revenue.</li>
              <li>Money Wasted on Ads — Spending on ads brings likes, not loyal clients.</li>
            </ul>
            <p>Power your Med-Spa with <span className="evx-ms-accent">EvolvXAI — smart, seamless and scalable.</span></p>
          </div>
        </div>
      </section>

      <section className="evx-ms-testimonials">
        <div className="evx-ms-container">
          <span className="evx-ms-badge">Testimonials</span>
          <h2 className="evx-ms-title">Dubai Salon Owners <span>Love EvolvXAI</span></h2>
          <p className="evx-ms-lead">Join 50+ salons that stopped paying commissions and started growing.</p>
          <div className="evx-ms-quotes">
            {testimonials.map((item) => (
              <article className="evx-ms-quote" key={item.name}>
                <Quote className="evx-ms-mark" size={30} strokeWidth={1.5} />
                <div className="evx-ms-stars">★★★★★</div>
                <blockquote>“{item.quote}”</blockquote>
                <footer><strong>{item.name}</strong><span>{item.role}</span></footer>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="evx-ms-cta">
        <div className="evx-ms-container">
          <h2>Now Sure? We Have Got You Covered.</h2>
          <p>Reach out to learn how EvolvXAI can simplify your operations and boost results.</p>
          <Link className="evx-ms-cta-button" href="/contact">Book A Free Demo <span aria-hidden="true">→</span></Link>
        </div>
      </section>
    </main>
  )
}

export const metadata: Metadata = {
  title: 'AI Automation for Med Spas | Smart Bookings & Client Management',
  description: 'Deliver seamless med-spa client experiences with automated scheduling, check-ins, insights, and follow-ups.',
  alternates: { canonical: '/med-spa' },
  openGraph: mergeOpenGraph({
    title: 'AI Automation for Med Spas | Smart Bookings & Client Management',
    description: 'Deliver seamless med-spa client experiences with automated scheduling, check-ins, insights, and follow-ups.',
    url: '/med-spa',
  }),
}
