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
    <section className="evx-sl-pricing">
      <div className="evx-sl-price-card evx-sl-reveal">
        <div className="evx-sl-price-inner">
          <div className="evx-sl-price-head">
            <h2>
              You Get All of This in <span className="evx-sl-accent">One Simple Platform</span>
            </h2>
          </div>
          <div className="evx-sl-price-list">
            {items.map((item) => (
              <div className="evx-sl-price-row" key={item.label}>
                <Check size={14} strokeWidth={3} />
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
            <div className="evx-sl-price-total">
              <span>TOTAL</span>
              <span className="evx-sl-old">AED 5,494</span>
              <span className="evx-sl-new">AED 1799</span>
            </div>
          </div>
          <p className="evx-sl-price-value">
            Total Value <s>AED 5,494</s>
          </p>
          <p className="evx-sl-price-start">
            All This Starts At <span className="evx-sl-accent">AED 1799/Month.</span>
          </p>
          <div className="evx-sl-btn-wrap">
            <a className="evx-sl-btn" href="/contact">
              Book A Free Demo &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
