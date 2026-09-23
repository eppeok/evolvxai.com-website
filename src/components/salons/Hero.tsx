import Image from 'next/image'
import { Check } from 'lucide-react'

const chips = ['Auto Bookings', 'Zero Commission', 'Smart Reminders', 'Automated Reviews']

export const Hero: React.FC = () => {
  return (
    <section className="evx-sl-hero">
      <div className="evx-sl-container">
        <span className="evx-sl-hero-tag">Still Losing 30% Of Your Salon Revenue To Booking Apps?</span>
        <h1>
          Grow Your Salon <span className="evx-sl-accent">With AI</span>
        </h1>
        <h2 className="evx-sl-hero-sub">
          Keep 100% Of <span className="evx-sl-accent">Your Revenue</span>
        </h2>
        <p>
          Our 24/7 AI receptionist turns <strong>WhatsApp</strong>, <strong>Instagram</strong>, and{' '}
          <strong>Web Chats</strong> into instant bookings. <strong>No commission. No missed messages. No more chaos.</strong>
        </p>
        <ul className="evx-sl-chips">
          {chips.map((chip) => (
            <li key={chip}>
              <Check size={12} strokeWidth={3} />
              {chip}
            </li>
          ))}
        </ul>
        <a className="evx-sl-btn" href="/contact">
          Book A Free Demo &rarr;
        </a>
        <Image
          className="evx-sl-hero-img"
          src="/salons/salons-hero-whatsapp-chat.webp"
          alt="WhatsApp booking conversation on a phone"
          width={755}
          height={615}
          priority
        />
      </div>
    </section>
  )
}
