export const Cta: React.FC = () => {
  return (
    <section className="evx-fq-cta">
      <h2 className="evx-fq-reveal">Stop Paying Commissions. Start Growing With AI.</h2>
      <p className="evx-fq-reveal" style={{ '--evx-fq-i': 1 } as React.CSSProperties}>
        Keep every dollar you earn while automating your bookings and marketing.
      </p>
      <a
        className="evx-fq-btn evx-fq-btn-white evx-fq-reveal"
        style={{ '--evx-fq-i': 2 } as React.CSSProperties}
        href="/contact"
      >
        Book A Free Demo &rarr;
      </a>
    </section>
  )
}
