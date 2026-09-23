import { Check } from 'lucide-react'

const checklist = [
  'Saves hours of typing',
  'Removes emotion from difficult replies',
  'Maintains a professional brand voice',
  'Encourages customers to return',
]

export const Demo: React.FC = () => {
  return (
    <section className="evx-sl-demo" id="evx-sl-demo">
      <div className="evx-sl-demo-grid">
        <div className="evx-sl-reveal">
          <span className="evx-sl-pill evx-sl-pill-left">Live AI Demo</span>
          <h2>
            Experience The Power Of <span className="evx-sl-accent">AI Reputation Management</span>
          </h2>
          <p>
            Bad reviews happen. It&rsquo;s how you handle them that matters. Try our <strong>AI Smart Reply</strong>{' '}
            tool right now. Paste a difficult client review and watch EvolvX turn it into a reputation-saving
            response instantly.
          </p>
          <ul className="evx-sl-checklist">
            {checklist.map((item) => (
              <li key={item}>
                <Check size={14} strokeWidth={3} />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <video
          className="evx-sl-reveal"
          style={{ '--evx-sl-i': 2 } as React.CSSProperties}
          src="/salons/salons-ai-reply-demo.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>
    </section>
  )
}
