import { Check } from 'lucide-react'

const items = [
  { label: 'AI Receptionist (24/7 on all channels)', value: 'AED 2999' },
  { label: 'Automated WhatsApp Reminders (cut no-shows 60%)', value: 'AED 499' },
  { label: 'Google Review Booster', value: 'AED 499' },
  { label: 'Smart Client Retention Campaigns', value: 'AED 499' },
  { label: 'Unified Inbox & Scheduling Dashboard', value: 'AED 499' },
  { label: 'Bulk WhatsApp Campaigns', value: 'AED 499' },
  { label: 'No Commissions - Keep 100% Profit', value: 'Infinite Value' },
]

export const Pricing: React.FC = () => {
  return (
    <section className="evx-pr-pricing">
      <div className="evx-pr-price-card evx-pr-reveal">
        <div className="evx-pr-price-inner">
          <div className="evx-pr-price-head">
            <h2>
              You Get All of This in <span className="evx-pr-accent">One Simple Platform</span>
            </h2>
          </div>
          <div className="evx-pr-price-list">
            {items.map((item) => (
              <div className="evx-pr-price-row" key={item.label}>
                <Check size={14} strokeWidth={3} />
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
            <div className="evx-pr-price-total">
              <span>TOTAL</span>
              <span className="evx-pr-old">AED 5,494</span>
              <span className="evx-pr-new">AED 1799</span>
            </div>
          </div>
          <p className="evx-pr-price-value">
            Total Value <s>AED 5,494</s>
          </p>
          <p className="evx-pr-price-start">
            All This Starts At <span className="evx-pr-accent">AED 1799/Month.</span>
          </p>
          <div className="evx-pr-btn-wrap">
            <a className="evx-pr-btn" href="/contact">
              Book A Free Demo &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
