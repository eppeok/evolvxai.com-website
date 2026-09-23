export const StatsSection: React.FC = () => {
  return (
    <div className="evx-stats">
      <div className="evx-container">
        <div className="evx-stats-grid">
          <div className="evx-stat evx-reveal">
            <div className="evx-stat-n">
              <span className="evx-counter" data-target="50">
                0
              </span>
              <span className="accent">+</span>
            </div>
            <div className="evx-stat-l">UAE Businesses Live</div>
          </div>
          <div className="evx-stat evx-reveal evx-d1">
            <div className="evx-stat-n">
              AED&nbsp;
              <span className="evx-counter" data-target="180">
                0
              </span>
              <span className="accent">K+</span>
            </div>
            <div className="evx-stat-l">Saved Annually by Clients</div>
          </div>
          <div className="evx-stat evx-reveal evx-d2">
            <div className="evx-stat-n">
              <span className="evx-counter" data-target="60">
                0
              </span>
              <span className="accent">%</span>
            </div>
            <div className="evx-stat-l">Fewer No-Shows</div>
          </div>
          <div className="evx-stat evx-reveal evx-d3">
            <div className="evx-stat-n">
              4.<span className="accent">9</span>&#9733;
            </div>
            <div className="evx-stat-l">Avg. Google Rating Boost</div>
          </div>
        </div>
      </div>
    </div>
  )
}
