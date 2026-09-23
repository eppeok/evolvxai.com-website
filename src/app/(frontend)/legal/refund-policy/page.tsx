import type { Metadata } from 'next'

import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import '@/components/legal/styles.css'

export default function RefundPolicyPage() {
  return (
    <main className="bg-white">
      <section className="border-b border-neutral-200 bg-neutral-50/70 py-14">
        <div className="container">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Legal</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            Refund Policy
          </h1>
          <p className="mt-2 text-base text-neutral-600">
            Digital Services, Subscriptions &amp; Coaching Programs
          </p>
          <p className="mt-3 text-sm text-neutral-500">Last Updated: 18 January 2026</p>
        </div>
      </section>

      <section className="py-14">
        <div className="evx-legal-content container prose prose-neutral max-w-3xl prose-headings:font-semibold prose-a:text-primary prose-li:my-1">
          <p>
            This Refund Policy governs digital access products, subscription services, coaching
            programs, implementation services, and related offerings.
          </p>
          <p>
            Due to the digital and intellectual nature of our services, refund eligibility is
            limited and strictly defined below.
          </p>

          <h2>1. Digital Courses, Coaching Programs &amp; Related Upsells</h2>
          <p>
            All courses, blueprints, community access, and coaching programs are non-refundable
            except under the conditional 30-Day Performance Guarantee described below.
          </p>

          <h3>Access-Based Products</h3>
          <p>Once any of the following occurs:</p>
          <ul>
            <li>Login credentials are issued</li>
            <li>Course content is accessed</li>
            <li>Community access is granted</li>
            <li>Downloadable materials are accessed</li>
            <li>AI systems or templates are delivered</li>
          </ul>
          <p>The purchase is considered consumed digital intellectual property.</p>
          <p>Refunds are not granted for:</p>
          <ul>
            <li>Change of mind</li>
            <li>Lack of time</li>
            <li>Failure to implement</li>
            <li>Dissatisfaction with format or delivery style</li>
            <li>Business performance dissatisfaction</li>
            <li>Financial hardship</li>
          </ul>

          <h3>Conditional 30-Day Performance Guarantee (Coaching Programs Only)</h3>
          <p>
            A refund may be requested within 30 calendar days only if ALL of the following
            conditions are met:
          </p>
          <ol>
            <li>All daily/weekly tasks have been fully completed.</li>
            <li>All assignments have been submitted as instructed.</li>
            <li>All required implementation steps have been executed.</li>
            <li>
              Proof of implementation is provided (screenshots, submitted worksheets, tracking
              sheets, etc.).
            </li>
            <li>
              The participant attended required live sessions (or submitted replay summaries
              where applicable).
            </li>
            <li>
              The participant can demonstrate consistent effort across the full program period.
            </li>
          </ol>
          <p>Refunds will not be granted if:</p>
          <ul>
            <li>Work was partially completed</li>
            <li>Assignments were skipped</li>
            <li>Steps were not implemented</li>
            <li>Tracking requirements were ignored</li>
            <li>Results were expected without full execution</li>
          </ul>
          <p>The burden of proof lies with the participant.</p>
          <p>
            We reserve sole discretion to determine whether program requirements were fully met.
          </p>

          <h2>2. Subscription-Based Services</h2>
          <p>Subscriptions renew automatically unless canceled prior to the renewal date.</p>
          <p>Users are responsible for managing cancellations before renewal.</p>
          <p>We do not provide:</p>
          <ul>
            <li>Retroactive cancellations</li>
            <li>Partial refunds for unused billing periods</li>
            <li>Refunds due to failure to use the platform</li>
          </ul>
          <p>
            Access remains active until the end of the current billing cycle after cancellation.
          </p>

          <h2>3. Setup, Implementation &amp; Custom Services</h2>
          <p>
            Payments for consulting, CRM setup, AI deployment, automation configuration, funnel
            building, or custom development are strictly non-refundable once work begins.
          </p>
          <p>Work is considered begun once:</p>
          <ul>
            <li>Strategy sessions are conducted</li>
            <li>Access to accounts is granted</li>
            <li>Configuration work starts</li>
            <li>Custom assets are created</li>
          </ul>
          <p>
            These services involve allocated expertise and intellectual effort that cannot be
            reversed.
          </p>

          <h2>4. Performance &amp; Earnings Disclaimer</h2>
          <p>We do not guarantee revenue, leads, bookings, or business results.</p>
          <p>Refunds will not be issued based on:</p>
          <ul>
            <li>Revenue expectations</li>
            <li>Lead volume expectations</li>
            <li>Booking targets</li>
            <li>Market conditions</li>
            <li>Competitive challenges</li>
          </ul>
          <p>Results depend on multiple external factors beyond our control.</p>

          <h2>5. Payment Disputes &amp; Chargebacks</h2>
          <p>Initiating a chargeback without first contacting support may result in:</p>
          <ul>
            <li>Immediate suspension of access</li>
            <li>Permanent account termination</li>
            <li>Restriction from future purchases</li>
          </ul>
          <p>
            We reserve the right to submit documentation to financial institutions to contest
            disputes.
          </p>

          <h2>6. Exceptional Circumstances</h2>
          <p>Refund requests may be reviewed on a case-by-case basis at our sole discretion.</p>
          <p>Approval of one request does not establish precedent.</p>

          <h2>7. Refund Request Procedure</h2>
          <p>Refund requests must include:</p>
          <ul>
            <li>Full name</li>
            <li>Email used at purchase</li>
            <li>Order details</li>
            <li>Written explanation</li>
            <li>
              Proof of completed program requirements (if applying under the 30-Day Guarantee)
            </li>
          </ul>
          <p>Submit requests to:</p>
          <p>
            <a href="mailto:nisha@evolvxai.com">nisha@evolvxai.com</a>
          </p>
          <p>Incomplete requests will not be reviewed.</p>

          <h2>8. Policy Updates</h2>
          <p>
            We reserve the right to modify this Refund Policy at any time. Continued use of
            Services constitutes acceptance of updates.
          </p>
        </div>
      </section>
    </main>
  )
}

export const metadata: Metadata = {
  title: 'Refund Policy | EvolvXAI',
  description:
    'Read the Refund Policy covering digital access products, subscriptions, coaching programs, and implementation services from EvolvXAI.',
  alternates: { canonical: '/legal/refund-policy' },
  openGraph: mergeOpenGraph({
    title: 'Refund Policy | EvolvXAI',
    description:
      'Read the Refund Policy covering digital access products, subscriptions, coaching programs, and implementation services from EvolvXAI.',
    url: '/legal/refund-policy',
  }),
}
