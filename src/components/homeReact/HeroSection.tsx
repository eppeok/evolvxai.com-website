export const HeroSection: React.FC = () => {
  return (
    <section className="evx-hero">
      <div className="evx-hero-bg" />
      <div className="evx-hero-grid-lines" />
      <div className="evx-container">
        <div className="evx-hero-layout">
          <div>
            <div className="evx-eyebrow">AI Business Automation &middot; UAE</div>
            <h1 className="evx-hero-h1">
              <span className="line-white">You&apos;re not understaffed.</span>
              <span className="line-teal">You&apos;re unautomated.</span>
            </h1>
            <p className="evx-hero-sub">
              EvolvXAI builds done-for-you AI systems that{' '}
              <strong>answer enquiries at 2am</strong>, book appointments without a receptionist,{' '}
              <strong>follow up with every client</strong> who walked out, and fill your Google
              reviews on autopilot.
              <br />
              <br />
              One system. Every gap closed. Runs 24/7.
            </p>
            <div className="evx-ctas">
              <a href="/contact" className="evx-btn-primary">
                Close My Revenue Gaps &rarr;
              </a>
            </div>
            <div className="evx-trust-strip">
              <span className="evx-trust-item">50+ UAE businesses</span>
              <span className="evx-trust-sep" />
              <span className="evx-trust-item">AED 180K+ saved</span>
              <span className="evx-trust-sep" />
              <span className="evx-trust-item">60% fewer no-shows</span>
              <span className="evx-trust-sep" />
              <span className="evx-trust-item">4.9&#9733; avg. rating boost</span>
            </div>
          </div>

          <div className="evx-hero-visual">
            <div className="evx-phone-glow" />
            <div className="evx-float evx-float-1">
              <div className="evx-float-card">
                <div className="evx-fc-label">AI response time</div>
                <div className="evx-fc-value g">&#9889; 11 seconds</div>
              </div>
            </div>
            <div className="evx-float evx-float-2">
              <div className="evx-float-card">
                <div className="evx-fc-label">No-shows reduced</div>
                <div className="evx-fc-value g">&#8595; 60%</div>
              </div>
            </div>
            <div className="evx-phone">
              <div className="evx-phone-notch" />
              <div className="evx-chat-header">
                <div className="evx-chat-avatar">&#129302;</div>
                <div>
                  <div className="evx-chat-name">EvolvXAI Assistant</div>
                  <div className="evx-chat-status">&#9679; Online &middot; Replies instantly</div>
                </div>
              </div>
              <div className="evx-chat-body" id="evxChat">
                <div className="evx-msg in" id="em1">
                  Hi, are you free tomorrow at 6pm? &#128075;
                  <div className="evx-msg-time">9:03 PM</div>
                </div>
                <div className="evx-msg out" id="em2">
                  Yes! 6pm is open &#127881; Booked you in. Confirmation sent.
                  <div className="evx-msg-time">9:03 PM</div>
                </div>
                <div className="evx-msg sys" id="em3">
                  &#128197; Appointment confirmed &middot; Tomorrow 6:00 PM
                </div>
                <div className="evx-msg in" id="em4">
                  Perfect, thank you so much!
                  <div className="evx-msg-time">9:04 PM</div>
                </div>
                <div className="evx-msg out" id="em5">
                  &#9200; Reminder sent 24hrs &amp; 2hrs before. See you tomorrow!
                  <div className="evx-msg-time">9:04 PM</div>
                </div>
                <div className="evx-msg sys" id="em6">
                  &#11088; Review request sent automatically after visit
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
