import type { Metadata } from 'next'

import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import '@/components/legal/styles.css'

export default function TermsOfServicePage() {
  return (
    <main className="bg-white">
      <section className="border-b border-neutral-200 bg-neutral-50/70 py-14">
        <div className="container">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Legal</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            Terms of Service
          </h1>
          <p className="mt-3 text-sm text-neutral-500">Last Updated: 18th January 2026</p>
        </div>
      </section>

      <section className="py-14">
        <div className="evx-legal-content container prose prose-neutral max-w-3xl prose-headings:font-semibold prose-a:text-primary prose-li:my-1">
          <p>
            These Terms &amp; Conditions govern your purchase and use of all digital products,
            coaching programs, subscriptions, consulting services, implementation services,
            automation systems, AI configurations, and related offerings provided under this
            brand.
          </p>
          <p>
            By purchasing, accessing, or using any Service, you agree to be legally bound by
            these Terms.
          </p>
          <p>If you do not agree, do not purchase or access the Services.</p>

          <h2>1. Nature of Services</h2>
          <p>
            Our Services include digital courses, community access, templates, automation
            systems, AI tools, coaching programs, subscriptions, consulting, implementation
            services, and custom development work.
          </p>
          <p>
            All offerings are delivered digitally or through advisory services and involve
            intellectual property, system configurations, and strategic guidance.
          </p>

          <h2>2. Digital Access &amp; Immediate Delivery</h2>
          <p>By completing your purchase, you:</p>
          <ul>
            <li>Request immediate access to digital content and/or services</li>
            <li>Acknowledge that access may be granted instantly upon payment</li>
            <li>Understand that digital content cannot be &ldquo;returned&rdquo; once accessed</li>
          </ul>
          <p>
            Where applicable under consumer law, you expressly waive any statutory cooling-off
            period once digital access is granted.
          </p>

          <h2>3. Payments</h2>
          <p>
            All payments must be made in full at the time of purchase unless a payment plan is
            explicitly offered.
          </p>
          <p>Failure to complete installment payments may result in suspension of access.</p>
          <p>You agree not to initiate payment disputes without first contacting support.</p>

          <h2>4. Refund Policy Summary</h2>
          <p>Refund eligibility is strictly limited and governed as follows:</p>

          <h3>4.1 Digital Products &amp; Training Programs</h3>
          <p>Once:</p>
          <ul>
            <li>Login credentials are issued</li>
            <li>Course materials are accessed</li>
            <li>Community access is granted</li>
            <li>Downloadable assets are delivered</li>
          </ul>
          <p>The purchase is considered consumed digital intellectual property.</p>
          <p>Refunds will not be granted for:</p>
          <ul>
            <li>Change of mind</li>
            <li>Lack of time</li>
            <li>Failure to implement</li>
            <li>Dissatisfaction with learning style</li>
            <li>Financial hardship</li>
            <li>Business performance dissatisfaction</li>
          </ul>

          <h3>4.2 Conditional 30-Day Performance Guarantee (Where Explicitly Offered)</h3>
          <p>
            If a 30-Day Guarantee is advertised for a specific coaching program, eligibility
            requires ALL of the following:
          </p>
          <ol>
            <li>Completion of all required tasks.</li>
            <li>Submission of all assignments.</li>
            <li>Full implementation of program steps.</li>
            <li>Documented proof of execution.</li>
            <li>Demonstrated consistent participation.</li>
          </ol>
          <p>Refunds will not be granted for partial completion or lack of effort.</p>
          <p>The burden of proof rests with the participant.</p>
          <p>We reserve sole discretion to determine eligibility.</p>

          <h3>4.3 Subscription Services</h3>
          <p>Subscriptions renew automatically unless canceled before the renewal date.</p>
          <p>We do not provide:</p>
          <ul>
            <li>Retroactive cancellations</li>
            <li>Partial refunds for unused time</li>
            <li>Refunds due to failure to use the platform</li>
            <li>Access remains active through the end of the billing period</li>
          </ul>

          <h3>4.4 Consulting, Setup &amp; Custom Work</h3>
          <p>
            Payments for strategy, CRM setup, automation deployment, AI configuration, funnel
            development, or custom implementation are non-refundable once work begins.
          </p>
          <p>Work is considered begun once:</p>
          <ul>
            <li>Strategy sessions occur</li>
            <li>Account access is provided</li>
            <li>System configuration starts</li>
            <li>Custom assets are created</li>
          </ul>
          <p>These services involve allocated expertise that cannot be reversed.</p>

          <h2>5. No Earnings or Results Guarantee</h2>
          <p>We do not guarantee revenue, leads, bookings, or business results.</p>
          <p>
            Success depends on execution, market conditions, skills, competition, and external
            factors beyond our control.
          </p>
          <p>You accept full responsibility for your results.</p>

          <h2>6. Intellectual Property</h2>
          <p>
            All materials, systems, frameworks, content, templates, and AI configurations are
            protected intellectual property.
          </p>
          <p>You may not:</p>
          <ul>
            <li>Resell</li>
            <li>Reproduce</li>
            <li>Distribute</li>
            <li>Share login credentials</li>
            <li>Copy system structures</li>
          </ul>
          <p>Unauthorized use may result in legal action.</p>

          <h2>7. User Conduct</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Misuse the platform</li>
            <li>Share confidential materials</li>
            <li>Reverse engineer systems</li>
            <li>Engage in fraudulent activity</li>
            <li>Harass community members</li>
          </ul>
          <p>We reserve the right to terminate access without refund for violations.</p>

          <h2>8. Chargebacks &amp; Payment Disputes</h2>
          <p>Initiating a chargeback without first contacting support may result in:</p>
          <ul>
            <li>Immediate suspension</li>
            <li>Permanent termination</li>
            <li>Restriction from future purchases</li>
          </ul>
          <p>
            We reserve the right to submit documentation to payment processors to contest
            disputes.
          </p>

          <h2>9. Limitation of Liability</h2>
          <p>To the maximum extent permitted by law:</p>
          <p>We shall not be liable for:</p>
          <ul>
            <li>Indirect losses</li>
            <li>Lost profits</li>
            <li>Business interruption</li>
            <li>Data loss</li>
            <li>Market fluctuations</li>
          </ul>
          <p>Total liability shall not exceed the amount paid for the specific Service.</p>

          <h2>10. Governing Law</h2>
          <p>
            These Terms shall be governed in accordance with applicable commercial and digital
            transaction laws.
          </p>
          <p>Any disputes shall be resolved through appropriate legal channels as permitted by law.</p>

          <h2>11. Modifications</h2>
          <p>We reserve the right to update these Terms at any time.</p>
          <p>Continued use of Services constitutes acceptance of updates.</p>

          <h2>12. Contact</h2>
          <p>For all inquiries and support:</p>
          <p>
            <a href="mailto:nisha@evolvxai.com">nisha@evolvxai.com</a>
          </p>
        </div>
      </section>
    </main>
  )
}

export const metadata: Metadata = {
  title: 'Terms of Service | EvolvXAI',
  description:
    'Read the Terms of Service governing purchase and use of EvolvXAI digital products, coaching programs, subscriptions, consulting, and implementation services.',
  alternates: { canonical: '/legal/terms-of-service' },
  openGraph: mergeOpenGraph({
    title: 'Terms of Service | EvolvXAI',
    description:
      'Read the Terms of Service governing purchase and use of EvolvXAI digital products, coaching programs, subscriptions, consulting, and implementation services.',
    url: '/legal/terms-of-service',
  }),
}
