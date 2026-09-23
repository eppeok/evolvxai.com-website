import type { Metadata } from 'next'
import Script from 'next/script'
import './styles.css'

// This route embeds the exact reference HTML/CSS/JS verbatim (as provided)
// rather than a React re-implementation, to guarantee pixel- and
// behavior-identical output with zero translation drift. Header/Footer
// still come from the shared (frontend) layout.
const bodyHtml = `
<div class="evx-page">

<section class="evx-hero">
    <div class="evx-hero-bg"></div>
    <div class="evx-hero-grid-lines"></div>
    <div class="evx-container">
        <div class="evx-hero-layout">
            <div>
                <div class="evx-eyebrow">AI Business Automation &middot; UAE</div>
                <h1 class="evx-hero-h1">
                    <span class="line-white">You're not understaffed.</span>
                    <span class="line-teal">You're unautomated.</span>
                </h1>
                <p class="evx-hero-sub">
                    EvolvXAI builds done-for-you AI systems that
                    <strong>answer enquiries at 2am</strong>, book appointments without a receptionist,
                    <strong>follow up with every client</strong> who walked out, and
                    fill your Google reviews on autopilot.
                    <br><br>One system. Every gap closed. Runs 24/7.
                </p>
                <div class="evx-ctas">
                    <a href="https://evolvxai.com/contact_us" class="evx-btn-primary">Close My Revenue Gaps &rarr;</a>
                </div>
                <div class="evx-trust-strip">
                    <span class="evx-trust-item">50+ UAE businesses</span>
                    <span class="evx-trust-sep"></span>
                    <span class="evx-trust-item">AED 180K+ saved</span>
                    <span class="evx-trust-sep"></span>
                    <span class="evx-trust-item">60% fewer no-shows</span>
                    <span class="evx-trust-sep"></span>
                    <span class="evx-trust-item">4.9&starf; avg. rating boost</span>
                </div>
            </div>

            <div class="evx-hero-visual">
                <div class="evx-phone-glow"></div>
                <div class="evx-float evx-float-1">
                    <div class="evx-float-card">
                        <div class="evx-fc-label">AI response time</div>
                        <div class="evx-fc-value g">&#9889; 11 seconds</div>
                    </div>
                </div>
                <div class="evx-float evx-float-2">
                    <div class="evx-float-card">
                        <div class="evx-fc-label">No-shows reduced</div>
                        <div class="evx-fc-value g">&#8595; 60%</div>
                    </div>
                </div>
                <div class="evx-phone">
                    <div class="evx-phone-notch"></div>
                    <div class="evx-chat-header">
                        <div class="evx-chat-avatar">&#129302;</div>
                        <div>
                            <div class="evx-chat-name">EvolvXAI Assistant</div>
                            <div class="evx-chat-status">&#9679; Online &middot; Replies instantly</div>
                        </div>
                    </div>
                    <div class="evx-chat-body" id="evxChat">
                        <div class="evx-msg in"  id="em1">Hi, are you free tomorrow at 6pm? &#128075;<div class="evx-msg-time">9:03 PM</div></div>
                        <div class="evx-msg out" id="em2">Yes! 6pm is open &#127881; Booked you in. Confirmation sent.<div class="evx-msg-time">9:03 PM</div></div>
                        <div class="evx-msg sys" id="em3">&#128197; Appointment confirmed &middot; Tomorrow 6:00 PM</div>
                        <div class="evx-msg in"  id="em4">Perfect, thank you so much!<div class="evx-msg-time">9:04 PM</div></div>
                        <div class="evx-msg out" id="em5">&#9200; Reminder sent 24hrs &amp; 2hrs before. See you tomorrow!<div class="evx-msg-time">9:04 PM</div></div>
                        <div class="evx-msg sys" id="em6">&#11088; Review request sent automatically after visit</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<div class="evx-stats">
    <div class="evx-container">
        <div class="evx-stats-grid">
            <div class="evx-stat evx-reveal">
                <div class="evx-stat-n"><span class="evx-counter" data-target="50">0</span><span class="accent">+</span></div>
                <div class="evx-stat-l">UAE Businesses Live</div>
            </div>
            <div class="evx-stat evx-reveal evx-d1">
                <div class="evx-stat-n">AED&nbsp;<span class="evx-counter" data-target="180">0</span><span class="accent">K+</span></div>
                <div class="evx-stat-l">Saved Annually by Clients</div>
            </div>
            <div class="evx-stat evx-reveal evx-d2">
                <div class="evx-stat-n"><span class="evx-counter" data-target="60">0</span><span class="accent">%</span></div>
                <div class="evx-stat-l">Fewer No-Shows</div>
            </div>
            <div class="evx-stat evx-reveal evx-d3">
                <div class="evx-stat-n">4.<span class="accent">9</span>&starf;</div>
                <div class="evx-stat-l">Avg. Google Rating Boost</div>
            </div>
        </div>
    </div>
</div>

<section class="evx-leaks">
    <div class="evx-container">
        <div class="evx-section-badge"><span>The Problem</span></div>
        <h2 class="evx-h2 evx-reveal">Every service business bleeds money<br>through the same 3 holes.</h2>
        <p class="evx-section-sub evx-reveal">Not staffing. Not marketing. <strong style="color:var(--text)">Automation gaps.</strong></p>
        <div class="evx-leaks-grid">
            <div class="evx-leak-card evx-reveal">
                <div class="evx-leak-num">01</div>
                <h3 class="evx-leak-title">The Enquiry Gap</h3>
                <p class="evx-leak-body">A client messages at 9pm. Nobody replies until morning. <strong>By 8:15pm, they'd already booked your competitor.</strong> Your AI replies in 11 seconds — any hour, any channel.</p>
                <div class="evx-leak-stat">&#128202; 40% of service enquiries arrive after business hours</div>
            </div>
            <div class="evx-leak-card evx-reveal evx-d1">
                <div class="evx-leak-num">02</div>
                <h3 class="evx-leak-title">The No-Show Gap</h3>
                <p class="evx-leak-body">They booked last week. You held the slot. They forgot. No reminder went out. <strong>That slot is now dead revenue</strong> — plus the client you could have put there.</p>
                <div class="evx-leak-stat">&#128202; 20–35% of bookings end in no-shows without automated reminders</div>
            </div>
            <div class="evx-leak-card evx-reveal evx-d2">
                <div class="evx-leak-num">03</div>
                <h3 class="evx-leak-title">The Retention Gap</h3>
                <p class="evx-leak-body">They loved it. They meant to come back. Life got in the way — and nobody followed up. <strong>Your AI sends the right message at the right moment.</strong> They rebook on autopilot.</p>
                <div class="evx-leak-stat">&#128202; A 5% rise in retention increases profit by 25–95% — most businesses do zero follow-up</div>
            </div>
        </div>
    </div>
</section>

<section class="evx-industries">
    <div class="evx-container">
        <div class="evx-section-badge teal"><span>Solutions by Industry</span></div>
        <h2 class="evx-h2 evx-reveal">One AI system. Built for your business.</h2>
        <p class="evx-section-sub evx-reveal" style="margin-bottom:44px">Same gaps. Same system. Industry-specific setup in under 15 minutes.</p>
        <div class="evx-industry-grid">
            <a href="/salons" class="evx-industry-card evx-reveal"><div class="evx-ind-icon">&#9986;&#65039;</div><div class="evx-ind-name">Salons</div><p class="evx-ind-pain">Your stylists are fully booked — and you're still losing clients to missed WhatsApp messages at 7pm.</p></a>
            <a href="/restaurants" class="evx-industry-card evx-reveal evx-d1"><div class="evx-ind-icon">&#127869;&#65039;</div><div class="evx-ind-name">Restaurants</div><p class="evx-ind-pain">Tables sit empty while reservation enquiries wait unread in your DMs until the next morning.</p></a>
            <a href="javascript:void(0)" class="evx-industry-card evx-reveal evx-d2"><div class="evx-ind-icon">&#127973;&#65039;</div><div class="evx-ind-name">Clinics</div><p class="evx-ind-pain">Patients book, cancel without warning, and never hear from you again — until they find another clinic on Google.</p></a>
            <a href="javascript:void(0)" class="evx-industry-card evx-reveal"><div class="evx-ind-icon">&#127947;&#65039;</div><div class="evx-ind-name">Gyms</div><p class="evx-ind-pain">Trial sign-ups come in, nobody follows up within 24 hours, and 60% never convert to paying members.</p></a>
            <a href="javascript:void(0)" class="evx-industry-card evx-reveal evx-d1"><div class="evx-ind-icon">&#128136;</div><div class="evx-ind-name">Barbershops</div><p class="evx-ind-pain">Walk-ins are unpredictable. Repeat clients drift. There's no system bringing them back every 3 weeks.</p></a>
            <a href="/med-spa" class="evx-industry-card evx-reveal evx-d2"><div class="evx-ind-icon">&#128134;</div><div class="evx-ind-name">Med-Spas</div><p class="evx-ind-pain">High-value treatments, high-value clients — and zero automated follow-up after their first visit.</p></a>
        </div>
    </div>
</section>

<section class="evx-solution" id="features">
    <div class="evx-container">
        <h2 class="evx-h2 evx-reveal">One system closes all three gaps.<br><span class="evx-gradient-text">Automatically. From day one.</span></h2>
        <p class="evx-solution-body evx-reveal">EvolvXAI builds and runs your entire client-facing operation — enquiries, bookings, reminders, reviews, and retention — so your team focuses on delivering the service, not chasing the admin.</p>
        <div class="evx-solution-ctas evx-reveal">
            <a href="https://evolvxai.com/contact_us" class="evx-btn-primary">See It In Action &rarr;</a>
            <a href="https://evolvxai.com/pricing" class="evx-btn-secondary">View Pricing</a>
        </div>
    </div>
</section>

<section class="evx-bento">
    <div class="evx-container">
        <div class="evx-section-badge teal"><span>Platform Features</span></div>
        <h2 class="evx-h2 evx-reveal">Six features. One setup.<br>Zero manual work.</h2>
        <p class="evx-section-sub evx-reveal" style="margin-bottom:44px">Every powerful automation — configured and running for your business from day one.</p>
        <div class="evx-bento-grid">
            <div class="evx-bento-card evx-bento-wide evx-reveal">
                <div class="evx-bento-header"><div class="evx-bento-icon">⏰</div><div><div class="evx-bento-title">Automated Reminders</div><div class="evx-bento-desc">Sent before every appointment — no manual work, ever</div></div></div>
                <div>
                    <div class="evx-rem-row evx-rem-base"><div class="evx-rem-dot lit"></div><div class="evx-rem-content"><span class="evx-rem-label">Booking confirmed</span><span class="evx-rem-badge sent">✓ Done</span></div></div>
                    <div class="evx-rem-row" id="rr1"><div class="evx-rem-dot" id="rd1"></div><div class="evx-rem-content"><span class="evx-rem-label">24 hrs before &mdash; <em>"See you tomorrow at 6pm! Reply YES to confirm."</em></span><span class="evx-rem-badge" id="rb1">Pending</span></div></div>
                    <div class="evx-rem-row" id="rr2"><div class="evx-rem-dot" id="rd2"></div><div class="evx-rem-content"><span class="evx-rem-label">2 hrs before &mdash; <em>"You're up at 6pm today. See you soon!"</em></span><span class="evx-rem-badge" id="rb2">Pending</span></div></div>
                    <div class="evx-rem-row" id="rr3"><div class="evx-rem-dot" id="rd3"></div><div class="evx-rem-content"><span class="evx-rem-label">30 min before &mdash; <em>"Almost time — we're ready for you!"</em></span><span class="evx-rem-badge" id="rb3">Pending</span></div></div>
                    <div class="evx-rem-row" id="rr4"><div class="evx-rem-dot" id="rd4"></div><div class="evx-rem-content"><span class="evx-rem-label" style="color:var(--teal);font-weight:700">&#9989; Client confirmed &mdash; no-show prevented</span></div></div>
                </div>
            </div>
            <div class="evx-bento-card evx-reveal evx-d1">
                <div class="evx-bento-header"><div class="evx-bento-icon">&#11088;</div><div><div class="evx-bento-title">Review Automation</div><div class="evx-bento-desc">Sent after every visit automatically</div></div></div>
                <div class="evx-review-top">
                    <div class="evx-rating-num" id="evxRatingNum">4.1</div>
                    <div class="evx-stars"><span class="evx-star" id="es1">&#9733;</span><span class="evx-star" id="es2">&#9733;</span><span class="evx-star" id="es3">&#9733;</span><span class="evx-star" id="es4">&#9733;</span><span class="evx-star off" id="es5">&#9733;</span></div>
                    <div class="evx-rating-sub">Google Rating &mdash; auto-collected</div>
                </div>
                <div class="evx-review-chips">
                    <div class="evx-review-chip" id="rc1"><span>&#9733;&#9733;&#9733;&#9733;&#9733;</span><span class="evx-review-name">Sarah M. &mdash; Amazing!</span></div>
                    <div class="evx-review-chip" id="rc2"><span>&#9733;&#9733;&#9733;&#9733;&#9733;</span><span class="evx-review-name">Ahmed K. &mdash; Will return!</span></div>
                </div>
            </div>
            <div class="evx-bento-card evx-reveal">
                <div class="evx-bento-header"><div class="evx-bento-icon">&#128229;</div><div><div class="evx-bento-title">Unified Inbox</div><div class="evx-bento-desc">Every channel in one dashboard</div></div></div>
                <div class="evx-inbox-list">
                    <div class="evx-inbox-row" id="ir0"><div class="evx-inch-icon" style="background:#25d366">&#128172;</div><div><div class="evx-inch-name">WhatsApp</div><div class="evx-inch-msg">3 new messages</div></div><div class="evx-inch-badge">3</div></div>
                    <div class="evx-inbox-row" id="ir1"><div class="evx-inch-icon" style="background:linear-gradient(135deg,#f09433,#dc2743,#bc1888)">&#128247;</div><div><div class="evx-inch-name">Instagram DMs</div><div class="evx-inch-msg">2 new messages</div></div><div class="evx-inch-badge">2</div></div>
                    <div class="evx-inbox-row" id="ir2"><div class="evx-inch-icon" style="background:var(--teal)">&#127760;</div><div><div class="evx-inch-name">Web Chat</div><div class="evx-inch-msg">1 live visitor</div></div><div class="evx-inch-badge">1</div></div>
                </div>
                <div class="evx-inbox-footer">&#129302; AI handling all 6 conversations simultaneously</div>
            </div>
            <div class="evx-bento-card evx-reveal evx-d1">
                <div class="evx-bento-header"><div class="evx-bento-icon">&#128226;</div><div><div class="evx-bento-title">Bulk Campaigns</div><div class="evx-bento-desc">Fill empty slots in one click</div></div></div>
                <div class="evx-camp-pill"><div><div class="evx-camp-name">&#127881; Eid Special &mdash; 20% Off This Week</div><div class="evx-camp-sub">WhatsApp campaign &middot; All clients</div></div></div>
                <div class="evx-camp-stats">
                    <div class="evx-camp-stat"><div class="evx-camp-num" id="evxCSent">0</div><div class="evx-camp-lbl">Sent</div></div>
                    <div class="evx-camp-stat"><div class="evx-camp-num" id="evxCOpen">0</div><div class="evx-camp-lbl">Opened</div></div>
                    <div class="evx-camp-stat"><div class="evx-camp-num" id="evxCBook">0</div><div class="evx-camp-lbl">Booked</div></div>
                </div>
                <div class="evx-camp-track"><div class="evx-camp-fill" id="evxCFill"></div></div>
            </div>
            <div class="evx-bento-card evx-reveal evx-d2">
                <div class="evx-bento-header"><div class="evx-bento-icon">&#128203;</div><div><div class="evx-bento-title">CRM Pipeline</div><div class="evx-bento-desc">Every lead tracked end-to-end</div></div></div>
                <div class="evx-pipeline">
                    <div><div class="evx-pipe-head">Enquiry</div><div class="evx-pipe-card lit" id="pp0a"><div class="evx-pc-name">Fatima A.</div><div class="evx-pc-detail">Hair + Color</div></div><div class="evx-pipe-card" id="pp0b"><div class="evx-pc-name">James K.</div><div class="evx-pc-detail">Deep Clean</div></div></div>
                    <div><div class="evx-pipe-head">Contacted</div><div class="evx-pipe-card" id="pp1a"><div class="evx-pc-name">Aisha R.</div><div class="evx-pc-detail">Facial</div></div></div>
                    <div><div class="evx-pipe-head">Booked</div><div class="evx-pipe-card" id="pp2a"><div class="evx-pc-name">Mohamed S.</div><div class="evx-pc-detail">Full Package</div></div></div>
                    <div><div class="evx-pipe-head">Client &#10003;</div><div class="evx-pipe-card done" id="pp3a"><div class="evx-pc-name">Layla T.</div><div class="evx-pc-detail teal">Returning</div></div></div>
                </div>
            </div>
            <div class="evx-bento-card evx-bento-full evx-reveal">
                <div class="evx-bento-header">
                    <div class="evx-bento-icon">&#128202;</div>
                    <div><div class="evx-bento-title">Live Analytics Dashboard</div><div class="evx-bento-desc">Revenue, bookings, and retention &mdash; all in one view</div></div>
                    <div class="evx-a-pills"><div class="evx-a-pill g">+23% Revenue &#8593;</div><div class="evx-a-pill">94% Delivery Rate</div><div class="evx-a-pill">4.9&#9733; Avg Rating</div></div>
                </div>
                <div class="evx-analytics-layout">
                    <div><div class="evx-chart-bars"><div class="evx-bar-col"><div class="evx-bar" id="eb0" style="--bh:45%"></div><div class="evx-bar-day">Mon</div></div><div class="evx-bar-col"><div class="evx-bar" id="eb1" style="--bh:62%"></div><div class="evx-bar-day">Tue</div></div><div class="evx-bar-col"><div class="evx-bar" id="eb2" style="--bh:38%"></div><div class="evx-bar-day">Wed</div></div><div class="evx-bar-col"><div class="evx-bar" id="eb3" style="--bh:78%"></div><div class="evx-bar-day">Thu</div></div><div class="evx-bar-col"><div class="evx-bar hi" id="eb4" style="--bh:92%"></div><div class="evx-bar-day">Fri</div></div><div class="evx-bar-col"><div class="evx-bar hi" id="eb5" style="--bh:96%"></div><div class="evx-bar-day">Sat</div></div><div class="evx-bar-col"><div class="evx-bar" id="eb6" style="--bh:55%"></div><div class="evx-bar-day">Sun</div></div></div></div>
                    <div class="evx-metrics-grid">
                        <div class="evx-met"><div class="evx-met-n"><span id="evxMBookings">0</span></div><div class="evx-met-l">Bookings this week</div></div>
                        <div class="evx-met"><div class="evx-met-n">AED&nbsp;<span id="evxMRevenue" class="accent">0</span></div><div class="evx-met-l">Revenue this week</div></div>
                        <div class="evx-met"><div class="evx-met-n"><span id="evxMNoshow">0</span><span class="accent">%</span></div><div class="evx-met-l">No-show rate (&#8595; 60%)</div></div>
                        <div class="evx-met"><div class="evx-met-n"><span id="evxMReviews">0</span></div><div class="evx-met-l">New 5&#9733; reviews this week</div></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="evx-steps">
    <div class="evx-container">
        <div class="evx-section-badge"><span>Setup</span></div>
        <h2 class="evx-h2 evx-reveal">Live in under 15 minutes.</h2>
        <p class="evx-section-sub evx-reveal">From signup to your first automated booking — no tech skills needed.</p>
        <div class="evx-steps-grid">
            <div class="evx-step evx-reveal"><div class="evx-step-num">01</div><div class="evx-step-title">Connect Your Channels</div><p class="evx-step-body">Link WhatsApp Business, Instagram, and your website in a few clicks. Takes 5 minutes.</p></div>
            <div class="evx-step evx-reveal evx-d1"><div class="evx-step-num">02</div><div class="evx-step-title">AI Learns Your Business</div><p class="evx-step-body">We import your services, pricing, and hours. Your AI trains on your specific setup — not a generic template.</p></div>
            <div class="evx-step evx-reveal evx-d2"><div class="evx-step-num">03</div><div class="evx-step-title">Clients Start Booking</div><p class="evx-step-body">Your AI responds instantly, books automatically, and sends confirmations across every channel — 24/7.</p></div>
            <div class="evx-step evx-reveal evx-d3"><div class="evx-step-num">04</div><div class="evx-step-title">You Watch It Grow</div><p class="evx-step-body">No-shows drop. Reviews roll in. Clients rebook automatically. You run the business, not the admin.</p></div>
        </div>
    </div>
</section>

<section class="evx-final-cta" id="demo">
    <div class="evx-container">
        <h2 class="evx-final-h2 evx-reveal">Stop losing clients<br><span class="evx-gradient-text">while you sleep.</span></h2>
        <p class="evx-final-sub evx-reveal">Book a free 10-minute demo. We'll show you exactly which gaps your business has — and close them in under 15 minutes of setup.</p>
        <div style="display:flex;gap:14px;justify-content:center;flex-wrap:wrap;position:relative;" class="evx-reveal">
            <a href="https://evolvxai.com/contact_us" class="evx-btn-primary" style="font-size:1rem;padding:16px 34px;">Close My Revenue Gaps &rarr;</a>
            <a href="https://wa.me/971581675393" class="evx-btn-secondary" style="font-size:1rem;padding:16px 26px;">&#128172;&nbsp; WhatsApp Us</a>
        </div>
        <p class="evx-final-note evx-reveal">No credit card &middot; No commitment &middot; 30-day free trial</p>
    </div>
</section>

</div>
`

const scriptJs = `
(function() {
    var msgs = ['em1','em2','em3','em4','em5','em6'];
    var delays = [0, 1300, 900, 700, 800, 900];
    var i = 0;
    function showMsg() {
        if (i >= msgs.length) {
            setTimeout(function() { msgs.forEach(function(id){ var el=document.getElementById(id); if(el) el.classList.remove('show'); }); i=0; setTimeout(showMsg,1200); }, 5000);
            return;
        }
        var el = document.getElementById(msgs[i]);
        if (el) el.classList.add('show');
        i++;
        setTimeout(showMsg, delays[i] || 700);
    }
    setTimeout(showMsg, 800);

    var revealEls = document.querySelectorAll('.evx-reveal');
    if ('IntersectionObserver' in window) {
        var revealObs = new IntersectionObserver(function(entries) { entries.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('visible'); revealObs.unobserve(e.target); } }); }, { threshold: 0.08 });
        revealEls.forEach(function(el){ revealObs.observe(el); });
    } else { revealEls.forEach(function(el){ el.classList.add('visible'); }); }

    function animateCounter(el) {
        var target = parseInt(el.getAttribute('data-target'), 10), duration = 1800, start = null;
        function step(ts){ if(!start) start=ts; var p=Math.min((ts-start)/duration,1), e=1-Math.pow(1-p,3); el.textContent=Math.round(e*target); if(p<1) requestAnimationFrame(step); }
        requestAnimationFrame(step);
    }
    var statsSection = document.querySelector('.evx-stats-grid');
    if (statsSection && 'IntersectionObserver' in window) {
        var cntObs = new IntersectionObserver(function(entries){ entries.forEach(function(e){ if(e.isIntersecting){ e.target.querySelectorAll('.evx-counter').forEach(animateCounter); cntObs.unobserve(e.target); } }); }, { threshold: 0.3 });
        cntObs.observe(statsSection);
    }

    var bentoSection = document.querySelector('.evx-bento');
    if (bentoSection && 'IntersectionObserver' in window) {
        var bentoFired = false;
        var bentoObs = new IntersectionObserver(function(entries){ entries.forEach(function(e){ if(e.isIntersecting && !bentoFired){ bentoFired=true; bentoObs.unobserve(e.target); startBentoAnimations(); } }); }, { threshold: 0.1 });
        bentoObs.observe(bentoSection);
    }

    function startBentoAnimations() { animateReminders(); animateReviews(); animateInbox(); animateCampaign(); animatePipeline(); animateAnalytics(); }

    function animateReminders() {
        var rows=['rr1','rr2','rr3','rr4'], dots=['rd1','rd2','rd3','rd4'], badges=['rb1','rb2','rb3'], dl=[600,1400,2200,3000], sd=[1100,1900,2700];
        function run(){
            rows.forEach(function(id){ var el=document.getElementById(id); if(el) el.classList.remove('show'); });
            dots.forEach(function(id){ var el=document.getElementById(id); if(el) el.classList.remove('lit'); });
            badges.forEach(function(id){ var el=document.getElementById(id); if(el){ el.textContent='Pending'; el.classList.remove('sent'); } });
            rows.forEach(function(id,i){ setTimeout(function(){ var el=document.getElementById(id); if(el) el.classList.add('show'); }, dl[i]); });
            dots.forEach(function(id,i){ setTimeout(function(){ var el=document.getElementById(id); if(el) el.classList.add('lit'); }, dl[i]+300); });
            badges.forEach(function(id,i){ setTimeout(function(){ var el=document.getElementById(id); if(el){ el.textContent='✓ Sent'; el.classList.add('sent'); } }, sd[i]); });
            setTimeout(run, 6500);
        }
        run();
    }

    function animateReviews() {
        function run(){
            var numEl=document.getElementById('evxRatingNum'), rc1=document.getElementById('rc1'), rc2=document.getElementById('rc2'), star5=document.getElementById('es5');
            if(rc1) rc1.classList.remove('show'); if(rc2) rc2.classList.remove('show'); if(star5) star5.classList.add('off'); if(numEl) numEl.textContent='4.1';
            var val=4.1, iv=setInterval(function(){ val=Math.round((val+0.1)*10)/10; if(numEl) numEl.textContent=val.toFixed(1); if(val>=4.5&&star5) star5.classList.remove('off'); if(val>=4.9) clearInterval(iv); }, 220);
            setTimeout(function(){ if(rc1) rc1.classList.add('show'); }, 1200);
            setTimeout(function(){ if(rc2) rc2.classList.add('show'); }, 2000);
            setTimeout(run, 6000);
        }
        run();
    }

    function animateInbox() {
        var rows=['ir0','ir1','ir2'], i=0;
        function pulse(){ rows.forEach(function(id){ var el=document.getElementById(id); if(el) el.classList.remove('lit'); }); var el=document.getElementById(rows[i%rows.length]); if(el) el.classList.add('lit'); i++; setTimeout(pulse,1400); }
        pulse();
    }

    function animateCampaign() {
        function run(){
            var fillEl=document.getElementById('evxCFill'); if(fillEl) fillEl.style.width='0%';
            function cnt(id,target,dur){ var el=document.getElementById(id); if(!el) return; el.textContent='0'; var s=null; function step(ts){ if(!s) s=ts; var p=Math.min((ts-s)/dur,1),e=1-Math.pow(1-p,3); el.textContent=Math.round(e*target); if(p<1) requestAnimationFrame(step); } requestAnimationFrame(step); }
            setTimeout(function(){ cnt('evxCSent',847,1800); if(fillEl) setTimeout(function(){ fillEl.style.width='100%'; },100); }, 400);
            setTimeout(function(){ cnt('evxCOpen',612,1400); }, 900);
            setTimeout(function(){ cnt('evxCBook',134,1000); }, 1500);
            setTimeout(run, 7000);
        }
        run();
    }

    function animatePipeline() {
        var stages=['pp0a','pp1a','pp2a','pp3a'], i=0;
        function step(){ stages.forEach(function(id){ var el=document.getElementById(id); if(el) el.classList.remove('lit'); }); var el=document.getElementById(stages[i%stages.length]); if(el) el.classList.add('lit'); i++; if(i<=stages.length) setTimeout(step,1200); else setTimeout(function(){ i=0; step(); },3000); }
        step();
    }

    function animateAnalytics() {
        var bars=[{id:'eb0',h:'45%'},{id:'eb1',h:'62%'},{id:'eb2',h:'38%'},{id:'eb3',h:'78%'},{id:'eb4',h:'92%'},{id:'eb5',h:'96%'},{id:'eb6',h:'55%'}];
        function run(){
            bars.forEach(function(b){ var el=document.getElementById(b.id); if(el) el.style.height='0'; });
            bars.forEach(function(b,i){ setTimeout(function(){ var el=document.getElementById(b.id); if(el) el.style.height=b.h; }, i*120); });
            function cnt(id,target,dur){ var el=document.getElementById(id); if(!el) return; var s=null; function step(ts){ if(!s) s=ts; var p=Math.min((ts-s)/dur,1),e=1-Math.pow(1-p,3); el.textContent=Math.round(e*target); if(p<1) requestAnimationFrame(step); } requestAnimationFrame(step); }
            setTimeout(function(){ cnt('evxMBookings',94,1600); cnt('evxMRevenue',18400,1800); cnt('evxMNoshow',8,1200); cnt('evxMReviews',23,1400); }, 400);
            setTimeout(run, 8000);
        }
        run();
    }
})();
`

export default function HomeNewPage() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />
      <Script id="home-new-inline-script" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: scriptJs }} />
    </>
  )
}

export const metadata: Metadata = {
  title: 'EvolvXAI | Done-For-You AI Automation for Service Businesses',
  description:
    'EvolvXAI builds done-for-you AI systems that answer enquiries at 2am, book appointments without a receptionist, follow up with every client who walked out, and fill your Google reviews on autopilot.',
  robots: { index: false, follow: false },
}
