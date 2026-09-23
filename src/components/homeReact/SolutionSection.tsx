export const SolutionSection: React.FC = () => {
  return (
    <section className="evx-solution" id="features">
      <div className="evx-container">
        <h2 className="evx-h2 evx-reveal">
          One system closes all three gaps.
          <br />
          <span className="evx-gradient-text">Automatically. From day one.</span>
        </h2>
        <p className="evx-solution-body evx-reveal">
          EvolvXAI builds and runs your entire client-facing operation &mdash; enquiries, bookings,
          reminders, reviews, and retention &mdash; so your team focuses on delivering the service, not
          chasing the admin.
        </p>
        <div className="evx-solution-ctas evx-reveal">
          <a href="/contact" className="evx-btn-primary">
            See It In Action &rarr;
          </a>
          <a href="/pricing" className="evx-btn-secondary">
            View Pricing
          </a>
        </div>
      </div>
    </section>
  )
}
