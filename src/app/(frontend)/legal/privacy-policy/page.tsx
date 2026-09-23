import type { Metadata } from 'next'

import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import '@/components/legal/styles.css'

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white">
      <section className="border-b border-neutral-200 bg-neutral-50/70 py-14">
        <div className="container">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Legal</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-neutral-500">Last Updated: 18 February 2026</p>
        </div>
      </section>

      <section className="py-14">
        <div className="evx-legal-content container prose prose-neutral max-w-3xl prose-headings:font-semibold prose-a:text-primary prose-li:my-1">
          <p>
            This Privacy Policy explains in detail how we collect, use, store, process, disclose,
            and safeguard information when you access or use our Services.
          </p>
          <p>
            By using the Services, you acknowledge that you have read and understood this Privacy
            Policy.
          </p>

          <h2>1. Categories of Information We Collect</h2>
          <p>We may collect and process the following categories of information:</p>

          <h3>A. Personal Information You Provide Directly</h3>
          <ul>
            <li>Full name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Billing and payment information</li>
            <li>Business name and related details</li>
            <li>Information submitted via forms, landing pages, or booking systems</li>
            <li>Communications sent to support or community areas</li>
          </ul>

          <h3>B. Account &amp; Usage Information</h3>
          <ul>
            <li>Login credentials (encrypted)</li>
            <li>Account preferences</li>
            <li>Subscription status</li>
            <li>CRM configurations</li>
            <li>Automation workflows created within the platform</li>
            <li>Lead data uploaded by you</li>
          </ul>

          <h3>C. Technical &amp; Device Information</h3>
          <ul>
            <li>IP address</li>
            <li>Device identifiers</li>
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>Referring URLs</li>
            <li>Session activity and timestamps</li>
            <li>Clickstream behavior within pages</li>
          </ul>

          <h3>D. AI &amp; Automation Interaction Data</h3>
          <p>When you deploy AI systems through our Services, logs may include:</p>
          <ul>
            <li>Voice interaction metadata</li>
            <li>Message timestamps</li>
            <li>Automation trigger history</li>
            <li>Booking activity</li>
            <li>Campaign performance metrics</li>
          </ul>
          <p>
            We do not claim ownership over your customer data. However, system logs may be
            retained for operational and security purposes.
          </p>

          <h2>2. How We Use Information</h2>
          <p>We use collected data for legitimate business purposes, including:</p>
          <ul>
            <li>Providing access to Services</li>
            <li>Delivering automation systems and AI tools</li>
            <li>Processing payments and managing subscriptions</li>
            <li>Sending transactional communications</li>
            <li>Providing customer support</li>
            <li>Improving system performance</li>
            <li>Detecting fraud or misuse</li>
            <li>Conducting internal analytics</li>
            <li>Complying with legal obligations</li>
          </ul>
          <p>
            We may use anonymized and aggregated data for research, improvement, and business
            intelligence purposes.
          </p>

          <h2>3. Marketing Communications</h2>
          <p>We may send:</p>
          <ul>
            <li>Service updates</li>
            <li>Educational content</li>
            <li>Promotional communications</li>
            <li>Event invitations</li>
          </ul>
          <p>
            You may opt out of marketing communications at any time using unsubscribe mechanisms
            or by contacting us directly.
          </p>
          <p>
            Transactional communications related to billing, account access, or system changes
            may still be sent.
          </p>

          <h2>4. Lawful Basis for Processing</h2>
          <p>Depending on applicable regulations, we process personal data based on:</p>
          <ul>
            <li>Performance of a contract</li>
            <li>Legitimate business interests</li>
            <li>User consent</li>
            <li>Compliance with legal obligations</li>
          </ul>

          <h2>5. Data Sharing &amp; Disclosure</h2>
          <p>
            We may share data with trusted third parties strictly for operational purposes,
            including:
          </p>
          <ul>
            <li>Cloud infrastructure providers</li>
            <li>Payment processors</li>
            <li>CRM and communication service providers</li>
            <li>Voice and messaging infrastructure partners</li>
            <li>Email delivery services</li>
            <li>Analytics providers</li>
            <li>Security monitoring services</li>
            <li>Professional advisors or legal authorities when required</li>
          </ul>
          <p>We do not sell personal data.</p>
          <p>
            You are solely responsible for ensuring that any customer data you upload into our
            systems has been collected lawfully.
          </p>

          <h2>6. Data Retention</h2>
          <p>We retain information only as long as necessary for:</p>
          <ul>
            <li>Service delivery</li>
            <li>Contractual obligations</li>
            <li>Legal compliance</li>
            <li>Dispute resolution</li>
            <li>Security auditing</li>
          </ul>
          <p>
            After account termination, certain data may be retained for a reasonable period for
            backup and compliance purposes.
          </p>

          <h2>7. Data Security Measures</h2>
          <p>
            We implement reasonable technical, administrative, and physical safeguards designed to
            protect data against unauthorized access, disclosure, alteration, and destruction.
          </p>
          <p>
            However, no system is fully secure. You acknowledge that transmission of information
            over the internet carries inherent risk.
          </p>
          <p>You are responsible for:</p>
          <ul>
            <li>Securing login credentials</li>
            <li>Limiting account access</li>
            <li>Maintaining secure internal business practices</li>
          </ul>

          <h2>8. International Data Transfers</h2>
          <p>Your information may be processed in various locations globally.</p>
          <p>
            By using the Services, you consent to cross-border transfers where necessary for
            operational purposes.
          </p>

          <h2>9. User Rights</h2>
          <p>Subject to applicable laws, you may have rights to:</p>
          <ul>
            <li>Access your personal data</li>
            <li>Correct inaccuracies</li>
            <li>Request deletion</li>
            <li>Restrict or object to processing</li>
            <li>Withdraw consent where applicable</li>
          </ul>
          <p>Requests may be submitted to:</p>
          <p>
            <a href="mailto:nisha@evolvxai.com">nisha@evolvxai.com</a>
          </p>
          <p>We may require identity verification before processing requests.</p>

          <h2>10. Third-Party Links</h2>
          <p>
            Our Services may contain links to external platforms. We are not responsible for
            their privacy practices.
          </p>

          <h2>11. Children&rsquo;s Privacy</h2>
          <p>
            Our Services are not directed toward individuals under the age of 18. We do not
            knowingly collect data from minors.
          </p>

          <h2>12. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy periodically. Continued use of the Services
            constitutes acceptance of revisions.
          </p>
        </div>
      </section>
    </main>
  )
}

export const metadata: Metadata = {
  title: 'Privacy Policy | EvolvXAI',
  description:
    'Learn how EvolvXAI collects, uses, stores, processes, discloses, and safeguards your information across our Services.',
  alternates: { canonical: '/legal/privacy-policy' },
  openGraph: mergeOpenGraph({
    title: 'Privacy Policy | EvolvXAI',
    description:
      'Learn how EvolvXAI collects, uses, stores, processes, discloses, and safeguards your information across our Services.',
    url: '/legal/privacy-policy',
  }),
}
