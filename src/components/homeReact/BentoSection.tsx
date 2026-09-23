import { AnalyticsChart } from './AnalyticsChart'

export const BentoSection: React.FC = () => {
  return (
    <section className="evx-bento">
      <div className="evx-container">
        <div className="evx-section-badge teal">
          <span>Platform Features</span>
        </div>
        <h2 className="evx-h2 evx-reveal">
          Six features. One setup.
          <br />
          Zero manual work.
        </h2>
        <p className="evx-section-sub evx-reveal" style={{ marginBottom: 44 }}>
          Every powerful automation &mdash; configured and running for your business from day one.
        </p>
        <div className="evx-bento-grid">
          {/* Automated Reminders */}
          <div className="evx-bento-card evx-bento-wide evx-reveal">
            <div className="evx-bento-header">
              <div className="evx-bento-icon">&#9200;</div>
              <div>
                <div className="evx-bento-title">Automated Reminders</div>
                <div className="evx-bento-desc">Sent before every appointment &mdash; no manual work, ever</div>
              </div>
            </div>
            <div>
              <div className="evx-rem-row evx-rem-base">
                <div className="evx-rem-dot lit" />
                <div className="evx-rem-content">
                  <span className="evx-rem-label">Booking confirmed</span>
                  <span className="evx-rem-badge sent">&#10003; Done</span>
                </div>
              </div>
              <div className="evx-rem-row" id="rr1">
                <div className="evx-rem-dot" id="rd1" />
                <div className="evx-rem-content">
                  <span className="evx-rem-label">
                    24 hrs before &mdash; <em>&quot;See you tomorrow at 6pm! Reply YES to confirm.&quot;</em>
                  </span>
                  <span className="evx-rem-badge" id="rb1">
                    Pending
                  </span>
                </div>
              </div>
              <div className="evx-rem-row" id="rr2">
                <div className="evx-rem-dot" id="rd2" />
                <div className="evx-rem-content">
                  <span className="evx-rem-label">
                    2 hrs before &mdash; <em>&quot;You&apos;re up at 6pm today. See you soon!&quot;</em>
                  </span>
                  <span className="evx-rem-badge" id="rb2">
                    Pending
                  </span>
                </div>
              </div>
              <div className="evx-rem-row" id="rr3">
                <div className="evx-rem-dot" id="rd3" />
                <div className="evx-rem-content">
                  <span className="evx-rem-label">
                    30 min before &mdash; <em>&quot;Almost time &mdash; we&apos;re ready for you!&quot;</em>
                  </span>
                  <span className="evx-rem-badge" id="rb3">
                    Pending
                  </span>
                </div>
              </div>
              <div className="evx-rem-row" id="rr4">
                <div className="evx-rem-dot" id="rd4" />
                <div className="evx-rem-content">
                  <span className="evx-rem-label" style={{ color: 'var(--teal)', fontWeight: 700 }}>
                    &#9989; Client confirmed &mdash; no-show prevented
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Review Automation */}
          <div className="evx-bento-card evx-reveal evx-d1">
            <div className="evx-bento-header">
              <div className="evx-bento-icon">&#11088;</div>
              <div>
                <div className="evx-bento-title">Review Automation</div>
                <div className="evx-bento-desc">Sent after every visit automatically</div>
              </div>
            </div>
            <div className="evx-review-top">
              <div className="evx-rating-num" id="evxRatingNum">
                4.1
              </div>
              <div className="evx-stars">
                <span className="evx-star" id="es1">
                  &#9733;
                </span>
                <span className="evx-star" id="es2">
                  &#9733;
                </span>
                <span className="evx-star" id="es3">
                  &#9733;
                </span>
                <span className="evx-star" id="es4">
                  &#9733;
                </span>
                <span className="evx-star off" id="es5">
                  &#9733;
                </span>
              </div>
              <div className="evx-rating-sub">Google Rating &mdash; auto-collected</div>
            </div>
            <div className="evx-review-chips">
              <div className="evx-review-chip" id="rc1">
                <span>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                <span className="evx-review-name">Sarah M. &mdash; Amazing!</span>
              </div>
              <div className="evx-review-chip" id="rc2">
                <span>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                <span className="evx-review-name">Ahmed K. &mdash; Will return!</span>
              </div>
            </div>
          </div>

          {/* Unified Inbox */}
          <div className="evx-bento-card evx-reveal">
            <div className="evx-bento-header">
              <div className="evx-bento-icon">&#128229;</div>
              <div>
                <div className="evx-bento-title">Unified Inbox</div>
                <div className="evx-bento-desc">Every channel in one dashboard</div>
              </div>
            </div>
            <div className="evx-inbox-list">
              <div className="evx-inbox-row" id="ir0">
                <div className="evx-inch-icon" style={{ background: '#25d366' }}>
                  &#128172;
                </div>
                <div>
                  <div className="evx-inch-name">WhatsApp</div>
                  <div className="evx-inch-msg">3 new messages</div>
                </div>
                <div className="evx-inch-badge">3</div>
              </div>
              <div className="evx-inbox-row" id="ir1">
                <div
                  className="evx-inch-icon"
                  style={{ background: 'linear-gradient(135deg,#f09433,#dc2743,#bc1888)' }}
                >
                  &#128247;
                </div>
                <div>
                  <div className="evx-inch-name">Instagram DMs</div>
                  <div className="evx-inch-msg">2 new messages</div>
                </div>
                <div className="evx-inch-badge">2</div>
              </div>
              <div className="evx-inbox-row" id="ir2">
                <div className="evx-inch-icon" style={{ background: 'var(--teal)' }}>
                  &#127760;
                </div>
                <div>
                  <div className="evx-inch-name">Web Chat</div>
                  <div className="evx-inch-msg">1 live visitor</div>
                </div>
                <div className="evx-inch-badge">1</div>
              </div>
            </div>
            <div className="evx-inbox-footer">&#129302; AI handling all 6 conversations simultaneously</div>
          </div>

          {/* Bulk Campaigns */}
          <div className="evx-bento-card evx-reveal evx-d1">
            <div className="evx-bento-header">
              <div className="evx-bento-icon">&#128226;</div>
              <div>
                <div className="evx-bento-title">Bulk Campaigns</div>
                <div className="evx-bento-desc">Fill empty slots in one click</div>
              </div>
            </div>
            <div className="evx-camp-pill">
              <div>
                <div className="evx-camp-name">&#127881; Eid Special &mdash; 20% Off This Week</div>
                <div className="evx-camp-sub">WhatsApp campaign &middot; All clients</div>
              </div>
            </div>
            <div className="evx-camp-stats">
              <div className="evx-camp-stat">
                <div className="evx-camp-num" id="evxCSent">
                  0
                </div>
                <div className="evx-camp-lbl">Sent</div>
              </div>
              <div className="evx-camp-stat">
                <div className="evx-camp-num" id="evxCOpen">
                  0
                </div>
                <div className="evx-camp-lbl">Opened</div>
              </div>
              <div className="evx-camp-stat">
                <div className="evx-camp-num" id="evxCBook">
                  0
                </div>
                <div className="evx-camp-lbl">Booked</div>
              </div>
            </div>
            <div className="evx-camp-track">
              <div className="evx-camp-fill" id="evxCFill" />
            </div>
          </div>

          {/* CRM Pipeline */}
          <div className="evx-bento-card evx-reveal evx-d2">
            <div className="evx-bento-header">
              <div className="evx-bento-icon">&#128203;</div>
              <div>
                <div className="evx-bento-title">CRM Pipeline</div>
                <div className="evx-bento-desc">Every lead tracked end-to-end</div>
              </div>
            </div>
            <div className="evx-pipeline">
              <div>
                <div className="evx-pipe-head">Enquiry</div>
                <div className="evx-pipe-card lit" id="pp0a">
                  <div className="evx-pc-name">Fatima A.</div>
                  <div className="evx-pc-detail">Hair + Color</div>
                </div>
                <div className="evx-pipe-card" id="pp0b">
                  <div className="evx-pc-name">James K.</div>
                  <div className="evx-pc-detail">Deep Clean</div>
                </div>
              </div>
              <div>
                <div className="evx-pipe-head">Contacted</div>
                <div className="evx-pipe-card" id="pp1a">
                  <div className="evx-pc-name">Aisha R.</div>
                  <div className="evx-pc-detail">Facial</div>
                </div>
              </div>
              <div>
                <div className="evx-pipe-head">Booked</div>
                <div className="evx-pipe-card" id="pp2a">
                  <div className="evx-pc-name">Mohamed S.</div>
                  <div className="evx-pc-detail">Full Package</div>
                </div>
              </div>
              <div>
                <div className="evx-pipe-head">Client &#10003;</div>
                <div className="evx-pipe-card done" id="pp3a">
                  <div className="evx-pc-name">Layla T.</div>
                  <div className="evx-pc-detail teal">Returning</div>
                </div>
              </div>
            </div>
          </div>

          {/* Live Analytics Dashboard */}
          <AnalyticsChart />
        </div>
      </div>
    </section>
  )
}
