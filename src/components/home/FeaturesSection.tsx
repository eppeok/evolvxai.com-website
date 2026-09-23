import { Eyebrow } from './Eyebrow'
import { Reveal, RevealGroup, RevealItem } from './Reveal'
import { RemindersCard } from './RemindersCard'
import { ReviewsCard } from './ReviewsCard'
import { InboxCard } from './InboxCard'
import { CampaignsCard } from './CampaignsCard'
import { PipelineCard } from './PipelineCard'
import { AnalyticsCard } from './AnalyticsCard'

export const FeaturesSection: React.FC = () => {
  return (
    <section className="bg-muted/40 py-16 md:py-24">
      <div className="container flex flex-col items-center text-center">
        <Reveal className="flex flex-col items-center">
          <Eyebrow>Platform Features</Eyebrow>
          <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Six features. One setup. Zero manual work.
          </h2>
          <p className="mt-3 max-w-xl text-sm text-muted-foreground">
            Every powerful automation &mdash; configured and running for your business from day
            one.
          </p>
        </Reveal>

        <RevealGroup className="mt-10 grid w-full gap-4 text-left md:grid-cols-2">
          <RevealItem>
            <FeatureCard
              icon="⏰"
              title="Automated Reminders"
              description="Sent before every appointment &mdash; no manual work, ever"
            >
              <RemindersCard />
            </FeatureCard>
          </RevealItem>

          <RevealItem>
            <FeatureCard
              icon="⭐"
              title="Review Automation"
              description="Sent after every visit automatically"
            >
              <ReviewsCard />
            </FeatureCard>
          </RevealItem>
        </RevealGroup>

        <RevealGroup className="mt-4 grid w-full gap-4 text-left md:grid-cols-3">
          <RevealItem>
            <FeatureCard icon="📥" title="Unified Inbox" description="Every channel in one dashboard">
              <InboxCard />
            </FeatureCard>
          </RevealItem>

          <RevealItem>
            <FeatureCard icon="📢" title="Bulk Campaigns" description="Fill empty slots in one click">
              <CampaignsCard />
            </FeatureCard>
          </RevealItem>

          <RevealItem>
            <FeatureCard icon="📋" title="CRM Pipeline" description="Every lead tracked end-to-end">
              <PipelineCard />
            </FeatureCard>
          </RevealItem>
        </RevealGroup>

        <Reveal className="mt-4 w-full text-left">
          <FeatureCard
            icon="📊"
            title="Live Analytics Dashboard"
            description="Revenue, bookings, and retention — all in one view."
          >
            <AnalyticsCard />
          </FeatureCard>
        </Reveal>
      </div>
    </section>
  )
}

const FeatureCard: React.FC<{
  icon: string
  title: string
  description: string
  children: React.ReactNode
}> = ({ icon, title, description, children }) => {
  return (
    <div className="h-full rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-start gap-3">
        <span className="text-xl">{icon}</span>
        <div>
          <h3 className="font-semibold text-foreground">{title}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
      <div className="mt-4">{children}</div>
    </div>
  )
}
