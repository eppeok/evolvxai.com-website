export const FinalCtaSection: React.FC = () => {
  return (
    <section className="evx-final-cta" id="demo">
      <div className="evx-container">
        <h2 className="evx-final-h2 evx-reveal">
          Stop losing clients
          <br />
          <span className="evx-gradient-text">while you sleep.</span>
        </h2>
        <p className="evx-final-sub evx-reveal">
          Book a free 10-minute demo. We&apos;ll show you exactly which gaps your business has &mdash;
          and close them in under 15 minutes of setup.
        </p>
        <div
          style={{
            display: 'flex',
            gap: 14,
            justifyContent: 'center',
            flexWrap: 'wrap',
            position: 'relative',
          }}
          className="evx-reveal"
        >
          <a href="/contact" className="evx-btn-primary" style={{ fontSize: '1rem', padding: '16px 34px' }}>
            Close My Revenue Gaps &rarr;
          </a>
          <a
            href="https://wa.me/971581675393"
            className="evx-btn-secondary"
            style={{ fontSize: '1rem', padding: '16px 26px' }}
          >
            &#128172;&nbsp; WhatsApp Us
          </a>
        </div>
        <p className="evx-final-note evx-reveal">No credit card &middot; No commitment &middot; 30-day free trial</p>
      </div>
    </section>
  )
}
