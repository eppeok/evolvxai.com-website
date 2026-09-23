import Image from 'next/image'

const stats = [
  { image: '/salons/icons/salons-icon-stat-salons.svg', prefix: '', target: 50, suffix: '+', label: 'Salons Using Us' },
  { image: '/salons/icons/salons-icon-stat-google.svg', value: '4.9/5', label: 'Average Google Rating Boost' },
  {
    image: '/salons/icons/salons-icon-stat-saved.svg',
    prefix: 'AED ',
    target: 180,
    suffix: 'K+',
    label: 'Saved Annually by Clients',
  },
  { image: '/salons/icons/salons-icon-stat-noshows.svg', prefix: '', target: 60, suffix: '%', label: 'Fewer No-Shows' },
]

export const Stats: React.FC = () => {
  return (
    <section className="evx-sl-stats">
      <div className="evx-sl-stats-grid">
        {stats.map((stat, i) => (
          <div
            className="evx-sl-stat evx-sl-reveal"
            key={stat.label}
            style={{ '--evx-sl-i': i } as React.CSSProperties}
          >
            <Image className="evx-sl-stat-icon-img" src={stat.image} alt="" width={36} height={36} />
            <div>
              <strong>
                {'value' in stat ? (
                  stat.value
                ) : (
                  <>
                    {stat.prefix}
                    <span className="evx-sl-counter" data-target={stat.target}>
                      0
                    </span>
                    {stat.suffix}
                  </>
                )}
              </strong>
              <span>{stat.label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
