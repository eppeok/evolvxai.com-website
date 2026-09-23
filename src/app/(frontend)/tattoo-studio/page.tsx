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
import '@/components/tattooStudio/styles.css'

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
  { quote: "We saved AED 2,800 in the first month alone. The AI handles all our WhatsApp bookings perfectly. Best investment we've made.", name: 'Sarah Al-Mansoori', role: 'Owner, Glow Beauty Lounge, JBR' },
  { quote: 'Our no-shows dropped from 35% to under 10%. The automated reminders work incredibly well. Zero commission means we keep everything.', name: 'Ahmed Hassan', role: 'Manager, Elite Salon & Spa, Dubai Marina' },
  { quote: 'We went from 4.1 to 4.8 stars on Google in just 60 days. The review automation brings in 3-4 new walk-ins daily. Game changer.', name: 'Layla Rahman', role: 'Owner, Luxe Hair Studio, Downtown Dubai' },
]

export default function TattooStudioPage() {
  return (
    <main className="evx-ts-page">
      <section className="evx-ts-hero">
        <div className="evx-ts-container">
          <span className="evx-ts-badge">Tattoo Studio</span>
          <h1 className="evx-ts-title">Tools Designed For Serious <span>Artists and Studios</span></h1>
          <p className="evx-ts-lead">Simplify bookings, reduce no-shows, and keep your chairs full without the chaos of DMs.</p>
        </div>
      </section>

      <section className="evx-ts-capabilities">
        <div className="evx-ts-container">
          <span className="evx-ts-badge">Platform Capabilities</span>
          <h2 className="evx-ts-title">Smarter Tools For Seamless <span>Client Journeys</span></h2>
          <p className="evx-ts-lead">Deliver convenience at every step with automated bookings, payments, insights, and follow-ups.</p>
          <div className="evx-ts-cards">
            {capabilities.map(({ icon: Icon, title, description }) => (
              <article className="evx-ts-card" key={title}>
                <span className="evx-ts-card-icon"><Icon size={24} strokeWidth={1.75} /></span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="evx-ts-problems">
        <div className="evx-ts-container evx-ts-problem-grid">
          <Image className="evx-ts-problem-image" src="/tattoo-studio/studio-problems.png" alt="Tattoo studio managing client bookings" width={774} height={680} />
          <div className="evx-ts-problem-copy">
            <span className="evx-ts-badge">Problems</span>
            <h2 className="evx-ts-title">Why Your Client Experience <span>Falls Short</span></h2>
            <p>Identify the gaps so you can transform your bookings, engagement, and performance.</p>
            <ul className="evx-ts-list">
              <li>Unfilled Slots & Last-Minute Cancellations — Chairs stay empty even on busy days.</li>
              <li>Low Client Retention — Customers visit once but rarely return.</li>
              <li>No-Shows & Scheduling Chaos — Missed appointments hurt productivity.</li>
              <li>Weak Online Presence & Poor Engagement — Social media doesn&apos;t convert into real bookings.</li>
              <li>No Performance Tracking — You can&apos;t see which stylists or services drive revenue.</li>
              <li>Money Wasted on Ads — Spends on ads bring likes, not loyal clients.</li>
            </ul>
            <p>Power your Tattoo Studio with <span className="evx-ts-accent">EvolvXAI - Smart, seamless and scalable</span></p>
          </div>
        </div>
      </section>

      <section className="evx-ts-testimonials">
        <div className="evx-ts-container">
          <span className="evx-ts-badge">Testimonials</span>
          <h2 className="evx-ts-title">Dubai Salon Owners <span>Love EvolvXAI</span></h2>
          <p className="evx-ts-lead">Join 50+ salons that stopped paying commissions and started growing.</p>
          <div className="evx-ts-quotes">
            {testimonials.map((item) => (
              <article className="evx-ts-quote" key={item.name}>
                <Quote className="evx-ts-mark" size={30} strokeWidth={1.5} />
                <div className="evx-ts-stars">★★★★★</div>
                <blockquote>&ldquo;{item.quote}&rdquo;</blockquote>
                <footer><strong>{item.name}</strong><span>{item.role}</span></footer>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="evx-ts-cta">
        <div className="evx-ts-container">
          <h2>Now Sure? We Have Got You Covered.</h2>
          <p>Reach out to learn how EvolvXAI can simplify your operations and boost results.</p>
          <Link className="evx-ts-cta-button" href="/contact">Book a free demo <span aria-hidden="true">→</span></Link>
        </div>
      </section>
    </main>
  )
}

export const metadata: Metadata = {
  title: 'AI Automation for Tattoo Studios | Bookings, Reminders & CRM',
  description: 'Automate your tattoo studio with AI—online bookings, reminders, client follow-ups, reviews, and CRM tools to grow faster with EvolvXAI.',
  alternates: { canonical: '/tattoo-studio' },
  openGraph: mergeOpenGraph({
    title: 'AI Automation for Tattoo Studios | Bookings, Reminders & CRM',
    description: 'Automate your tattoo studio with AI—online bookings, reminders, client follow-ups, reviews, and CRM tools to grow faster with EvolvXAI.',
    url: '/tattoo-studio',
  }),
}
