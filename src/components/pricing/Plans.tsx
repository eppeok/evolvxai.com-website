'use client'

import { useState } from 'react'
import { Check } from 'lucide-react'

const starterFeatures = [
  'AI booking (WhatsApp, IG, Web)',
  'Up to 500 bookings/month',
  'Basic reminders',
  '1 user account',
  'Google review automation',
  'Client retention system',
  'Advanced analytics',
  'Ads Management Supported',
]

const proFeatures = [
  'Everything in Starter',
  'Unlimited bookings',
  '5 user accounts',
  'Priority support',
  'Custom branding',
  'WhatsApp Business API',
  'Meta/Google Ads Management',
]

const enterpriseFeatures = [
  'Everything in Professional',
  'Unlimited user accounts',
  'Multi-location management',
  'Custom integrations',
  'Dedicated account manager',
  'WhatsApp API access',
  'Custom training',
]

export const Plans: React.FC = () => {
  const [annual, setAnnual] = useState(false)

  return (
    <section className="evx-pr-plans">
      <div className="evx-pr-container">
        <span className="evx-pr-pill evx-pr-reveal">Choose Your Plan</span>
        <h2 className="evx-pr-title evx-pr-reveal">
          All-In-One <span className="evx-pr-accent">Salon Growth System</span>
        </h2>
        <p className="evx-pr-lead evx-pr-reveal">
          Replace fragmented tools with a single platform. Includes AI bookings, retention systems, and Meta/Google
          Ads Management.
        </p>

        <div className="evx-pr-toggle-wrap evx-pr-reveal">
          <span className={annual ? '' : 'evx-pr-active'}>Monthly</span>
          <button
            className="evx-pr-switch"
            role="switch"
            aria-checked={annual}
            aria-label="Toggle monthly or annual pricing"
            onClick={() => setAnnual((v) => !v)}
          >
            <span className="evx-pr-knob" />
          </button>
          <span className={annual ? 'evx-pr-active' : ''}>Annually</span>
        </div>

        <div className="evx-pr-plan-grid">
          <article className="evx-pr-plan evx-pr-reveal" style={{ '--evx-pr-i': 0 } as React.CSSProperties}>
            <h3>Starter</h3>
            <p className="evx-pr-plan-desc">Solo stylists &amp; small salons (1-8 staff)</p>
            <div className="evx-pr-plan-price">
              <span>{annual ? '1,500' : '1,799'}</span>
              <span>AED/Month</span>
            </div>
            <p className="evx-pr-plan-price-note">{annual ? 'Setup Fee Waived' : '+ AED 1,800 Setup Fee'}</p>
            <a className="evx-pr-btn evx-pr-btn-outline evx-pr-btn-block" href="/contact">
              Get Started &rarr;
            </a>
            <ul className="evx-pr-plan-feat-list">
              {starterFeatures.map((item) => (
                <li key={item}>
                  <Check size={12} strokeWidth={3} />
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article
            className="evx-pr-plan evx-pr-plan-pro evx-pr-reveal"
            style={{ '--evx-pr-i': 1 } as React.CSSProperties}
          >
            <span className="evx-pr-plan-badge">Most Popular</span>
            <h3>Professional</h3>
            <p className="evx-pr-plan-desc">Growing salons (9-15 staff)</p>
            <div className="evx-pr-plan-price">
              <span>{annual ? '2,000' : '2,299'}</span>
              <span>AED/Month</span>
            </div>
            <p className="evx-pr-plan-price-note">Setup Fee Waived</p>
            <div className="evx-pr-plan-save-box">Save AED 2,500+ monthly vs commission platforms</div>
            <a className="evx-pr-btn evx-pr-btn-dark evx-pr-btn-block" href="/contact">
              Get Started &rarr;
            </a>
            <ul className="evx-pr-plan-feat-list">
              {proFeatures.map((item) => (
                <li key={item}>
                  <Check size={12} strokeWidth={3} />
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="evx-pr-plan evx-pr-reveal" style={{ '--evx-pr-i': 2 } as React.CSSProperties}>
            <h3>Enterprise</h3>
            <p className="evx-pr-plan-desc">Salon chains &amp; large operations (15+ staff)</p>
            <div className="evx-pr-plan-price">
              <span>Custom</span>
            </div>
            <p className="evx-pr-plan-price-note">Contact Us For Quote</p>
            <a className="evx-pr-btn evx-pr-btn-outline evx-pr-btn-block" href="/contact">
              Contact Us &rarr;
            </a>
            <ul className="evx-pr-plan-feat-list">
              {enterpriseFeatures.map((item) => (
                <li key={item}>
                  <Check size={12} strokeWidth={3} />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}
