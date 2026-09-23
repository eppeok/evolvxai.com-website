export const ProblemSection: React.FC = () => {
  return (
    <section className="evx-leaks">
      <div className="evx-container">
        <div className="evx-section-badge">
          <span>The Problem</span>
        </div>
        <h2 className="evx-h2 evx-reveal">
          Every service business bleeds money
          <br />
          through the same 3 holes.
        </h2>
        <p className="evx-section-sub evx-reveal">
          Not staffing. Not marketing. <strong style={{ color: 'var(--text)' }}>Automation gaps.</strong>
        </p>
        <div className="evx-leaks-grid">
          <div className="evx-leak-card evx-reveal">
            <div className="evx-leak-num">01</div>
            <h3 className="evx-leak-title">The Enquiry Gap</h3>
            <p className="evx-leak-body">
              A client messages at 9pm. Nobody replies until morning.{' '}
              <strong>By 8:15pm, they&apos;d already booked your competitor.</strong> Your AI replies in
              11 seconds &mdash; any hour, any channel.
            </p>
            <div className="evx-leak-stat">
              &#128202; 40% of service enquiries arrive after business hours
            </div>
          </div>
          <div className="evx-leak-card evx-reveal evx-d1">
            <div className="evx-leak-num">02</div>
            <h3 className="evx-leak-title">The No-Show Gap</h3>
            <p className="evx-leak-body">
              They booked last week. You held the slot. They forgot. No reminder went out.{' '}
              <strong>That slot is now dead revenue</strong> &mdash; plus the client you could have put
              there.
            </p>
            <div className="evx-leak-stat">
              &#128202; 20&ndash;35% of bookings end in no-shows without automated reminders
            </div>
          </div>
          <div className="evx-leak-card evx-reveal evx-d2">
            <div className="evx-leak-num">03</div>
            <h3 className="evx-leak-title">The Retention Gap</h3>
            <p className="evx-leak-body">
              They loved it. They meant to come back. Life got in the way &mdash; and nobody followed
              up. <strong>Your AI sends the right message at the right moment.</strong> They rebook on
              autopilot.
            </p>
            <div className="evx-leak-stat">
              &#128202; A 5% rise in retention increases profit by 25&ndash;95% &mdash; most businesses
              do zero follow-up
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
