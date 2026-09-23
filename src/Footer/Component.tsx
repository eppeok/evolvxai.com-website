import Link from 'next/link'
import Script from 'next/script'
import React from 'react'
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react'

import { Logo } from '@/components/Logo/Logo'

const navigation = [
  { label: 'Home', href: '/' },
  { label: 'Features', href: '/features' },
  { label: 'Solution', href: '/salons' },
  { label: 'Contact Us', href: '/contact' },
]

const resources = [
  { label: 'Pricing', href: '/pricing' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Log In', href: 'https://app.my-console.co/' },
]

const legal = [
  { label: 'Privacy Policy', href: '/legal/privacy-policy' },
  { label: 'Terms Of Service', href: '/legal/terms-of-service' },
  { label: 'Refund Policy', href: '/legal/refund-policy' },
]

const social = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/people/EvolvXai/61577428153944/',
    Icon: Facebook,
  },
  { label: 'Instagram', href: 'https://instagram.com', Icon: Instagram },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/evolvxai/', Icon: Linkedin },
  { label: 'YouTube', href: 'https://youtube.com', Icon: Youtube },
]

export async function Footer() {
  return (
    <footer className="mt-auto border-t border-evx-footer-border bg-evx-footer text-white">
      <div className="container grid gap-10 py-14 text-center md:grid-cols-[1.4fr_1fr_1fr_1fr_1.2fr] md:text-left">
        <div className="flex flex-col items-center gap-4 md:items-start">
          <Link href="/">
            <Logo className="h-8 w-auto invert" />
          </Link>
          <p className="max-w-xs text-sm text-white/60">
            Evolv X AI empowers businesses with intelligent automation solutions that streamline
            operations, reduce costs, and accelerate growth.
          </p>
          <div className="flex justify-center gap-3 md:justify-start">
            {social.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex size-8 items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <FooterColumn title="Navigation" items={navigation} />
        <FooterColumn title="Resources" items={resources} />
        <FooterColumn title="Others" items={legal} />

        <div className="flex flex-col items-center gap-3 text-sm text-white/70 md:items-start">
          <h3 className="text-sm font-semibold text-white">Contact</h3>
          <a href="tel:+971581675393" className="hover:text-white">
            +971 581675393
          </a>
          <a href="mailto:hello@quantechuae.com" className="hover:text-white">
            hello@quantechuae.com
          </a>
          <p>
            Quantech IT Services FZC, Business Center, Sharjah Publishing City Free Zone,
            Sharjah, UAE
          </p>
        </div>
      </div>

      <div className="border-t border-evx-footer-border py-6">
        <p className="container text-center text-xs text-white/50">
          © {new Date().getFullYear()} EvolvXAI. All rights reserved.
        </p>
      </div>

      <Script
        src="https://widgets.leadconnectorhq.com/loader.js"
        data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
        data-widget-id="6a75e248670b676b67670a69"
        strategy="afterInteractive"
      />
    </footer>
  )
}

const FooterColumn: React.FC<{ title: string; items: { label: string; href: string }[] }> = ({
  title,
  items,
}) => {
  return (
    <div className="flex flex-col items-center gap-3 text-sm md:items-start">
      <h3 className="font-semibold text-white">{title}</h3>
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          prefetch={false}
          className="text-white/70 hover:text-white"
        >
          {item.label}
        </Link>
      ))}
    </div>
  )
}
