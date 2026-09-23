import type { Metadata } from 'next'
import Script from 'next/script'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import { Poppins, Lato } from 'next/font/google'
import { CalendarDays, Check, Mail, MapPin, MessageCircle, Phone, Quote, Sparkles, Star } from 'lucide-react'

import '@/components/contact/styles.css'
import type { ReactNode } from 'react'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--evx-contact-font-heading',
})
const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--evx-contact-font-body',
})

export default function ContactPage() {
  return (
    <main className={`evx-contact-page ${poppins.variable} ${lato.variable}`}>
      <section className="evx-contact-hero">
        <div className="evx-contact-container">
          <span className="evx-contact-eyebrow">Get in Touch</span>
          <h1>Ready to Level Up <span>Your Business?</span></h1>
          <p>Connect with our experts and discover how EvolvXAI can help you book more and work smarter.</p>
        </div>
      </section>

      <section className="evx-contact-methods">
        <div className="evx-contact-container evx-contact-method-grid">
          <ContactMethod icon={<CalendarDays size={20} />} title="Book a Demo" description="Get your tailored introduction to EvolvXAI and see how our solutions can transform your business." />
          <ContactMethod icon={<Phone size={20} />} title="Give Us A Call" description={<>+971 581675393<br />Connect with us for quick and reliable support.</>} />
          <ContactMethod icon={<Mail size={20} />} title="Reach Out To Us" description={<>hello@quantechuae.com<br />Reach out by email for professional support.</>} />
          <ContactMethod icon={<MapPin size={20} />} title="Visit Us" description="Quantech IT Services FZC, Business Center, Sharjah Publishing City Free Zone, Sharjah, UAE" />
        </div>
      </section>

      <section className="evx-contact-main">
        <div className="evx-contact-container">
          <div className="evx-contact-section-heading">
            <span className="evx-contact-eyebrow">Connect With Us</span>
            <h2>Let&apos;s Build Your <span>Success</span></h2>
            <p>Get personalized support and see how easy smarter growth can be.</p>
          </div>
          <div className="evx-contact-grid">
            <div className="evx-contact-form-card" id="contact-form">
              <iframe
                src="https://saas.evolvxai.com/widget/form/yuIph50YS4jE6JjwflWz"
                id="inline-yuIph50YS4jE6JjwflWz"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-activation-type="alwaysActivated"
                data-deactivation-type="neverDeactivate"
                data-form-name="EVOLVXAI Contact"
                data-height="569"
                data-layout-iframe-id="inline-yuIph50YS4jE6JjwflWz"
                data-form-id="yuIph50YS4jE6JjwflWz"
                data-cookie-consent="true"
                data-cookie-consent-provider="auto"
                title="EVOLVXAI Contact"
              />
            </div>
            <ContactDetails />
          </div>
        </div>
      </section>

      <section className="evx-contact-testimonials">
        <div className="evx-contact-container">
          <span className="evx-contact-eyebrow">Testimonials</span>
          <h2>Dubai Salon Owners <span>Love EvolvXAI</span></h2>
          <p>Join 50+ salons that stopped paying commissions and started growing.</p>
          <div className="evx-contact-quote-grid">
            <Testimonial name="Sarah Al-Mansoori" role="Owner, Glow Beauty Lounge, JBR" text="We saved AED 2,800 in the first month alone. The AI handles all our WhatsApp bookings perfectly. Best investment we've made." />
            <Testimonial name="Ahmed Hassan" role="Manager, Elite Salon & Spa, Dubai Marina" text="Our no-shows dropped from 35% to under 10%. The automated reminders work incredibly well. Zero commission means we keep everything." />
            <Testimonial name="Layla Rahman" role="Owner, Luxe Hair Studio, Downtown Dubai" text="We went from 4.1 to 4.8 stars on Google in just 60 days. The review automation brings in 3–4 new walk-ins daily. Game changer." />
          </div>
        </div>
      </section>

      <section className="evx-contact-cta">
        <h2>Ready to Stop Paying Commissions?</h2>
        <p>Join <strong>50+ Dubai salons</strong> that are keeping <strong>100% of their revenue</strong>. Book a free 10-minute demo or start your 30-day free trial today. <strong>No credit card required. No commitment.</strong></p>
        <ul><li><Check size={13} />30-Day Free Trial</li><li><Check size={13} />No Credit Card Required</li><li><Check size={13} />Cancel Anytime</li></ul>
        <a href="/contact" className="evx-contact-cta-button">Book a free demo →</a>
      </section>
      <Script src="https://saas.evolvxai.com/js/form_embed.js" strategy="afterInteractive" />
    </main>
  )
}

function ContactMethod({ icon, title, description }: { icon: ReactNode; title: string; description: ReactNode }) {
  return <article className="evx-contact-method"><span className="evx-contact-icon">{icon}</span><h3>{title}</h3><p>{description}</p></article>
}

function ContactDetails() {
  return <div className="evx-contact-details"><h3>Call us</h3><p>Call our team from Mon-Fri from 10am-7pm.</p><p><Phone size={14} /> +971 581675393</p><h3>Chat with us</h3><p>Speak to our friendly team via live chat.</p><p><MessageCircle size={14} /> <a href="#contact-form">Start a live chat</a></p><p><Mail size={14} /> Shoot us an email &quot;hello@quantechuae.com&quot;</p><h3>Visit Us</h3><p>Chat to us in person in Dubai.</p><p><MapPin size={14} /> Dubai: Dubai Founders HQ, 25h Hotel, 1st Floor, One Central, Near Trade Center, Dubai</p><p><MapPin size={14} /> Sharjah: Quantech IT Services FZC, Business Center, Sharjah Publishing City Free Zone, Sharjah, UAE</p></div>
}

function Testimonial({ name, role, text }: { name: string; role: string; text: string }) {
  return <article className="evx-contact-quote"><Quote className="evx-contact-quote-icon" size={30} /><div className="evx-contact-stars">{Array.from({ length: 5 }, (_, index) => <Star key={index} size={14} fill="currentColor" />)}</div><blockquote>“{text}”</blockquote><footer><strong>{name}</strong><span>{role}</span></footer></article>
}

export const metadata: Metadata = {
  title: 'Contact EvolvXAI | Get Support & AI Automation Assistance',
  description: 'Get in touch with the EvolvXAI team for support, demos, pricing questions, or help with AI automation, WhatsApp tools, reviews & QR menu setup.',
  alternates: { canonical: '/contact' },
  openGraph: mergeOpenGraph({
    title: 'Contact EvolvXAI | Get Support & AI Automation Assistance',
    description: 'Get in touch with the EvolvXAI team for support, demos, pricing questions, or help with AI automation, WhatsApp tools, reviews & QR menu setup.',
    url: '/contact',
  }),
}
