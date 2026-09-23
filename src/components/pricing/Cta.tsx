export const Cta: React.FC = () => {
  return (
    <section className="evx-pr-cta">
      <h2 className="evx-pr-reveal">Stop Paying Commissions. Start Growing With AI.</h2>
      <p className="evx-pr-reveal" style={{ '--evx-pr-i': 1 } as React.CSSProperties}>
        The professional platform trusted by growing service businesses.
      </p>
      <a
        className="evx-pr-btn evx-pr-btn-white evx-pr-reveal"
        style={{ '--evx-pr-i': 2 } as React.CSSProperties}
        href="/contact"
      >
        Book A Free Demo &rarr;
      </a>
    </section>
  )
}
