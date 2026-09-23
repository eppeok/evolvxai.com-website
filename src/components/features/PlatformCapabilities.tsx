import {
  Bell,
  CalendarCheck,
  Gift,
  LineChart,
  MessageCircleMore,
  QrCode,
  Sparkles,
  Users,
} from 'lucide-react'
import { Eyebrow } from '@/components/home/Eyebrow'
import { Reveal, RevealGroup, RevealItem } from '@/components/home/Reveal'

const capabilities = [
  {
    icon: CalendarCheck,
    title: 'Instant Online Bookings',
    description: 'Never miss a client appointment again.',
  },
  {
    icon: Sparkles,
    title: 'Digital Service Menu',
    description: 'Let clients explore styles before they book.',
  },
  {
    icon: QrCode,
    title: 'QR Check-In & Payments',
    description: 'Eliminate front-desk delays and payment hassles.',
  },
  {
    icon: Gift,
    title: 'Prepaid Packages',
    description: 'Keep clients coming back with steady revenue.',
  },
  {
    icon: Users,
    title: 'Smart Client Insights',
    description: 'Track preferences, past services, and birthdays.',
  },
  {
    icon: LineChart,
    title: 'Advanced Reports',
    description: 'Understand peak hours and staff performance.',
  },
  {
    icon: MessageCircleMore,
    title: 'Bulk WhatsApp Campaigns',
    description: 'Promote offers and fill empty slots instantly.',
  },
  {
    icon: Bell,
    title: 'WhatsApp Follow-Up',
    description: 'Send reminders and re-booking prompts.',
  },
]

export const PlatformCapabilities: React.FC = () => {
  return (
    <section className="bg-muted/40 py-16 md:py-24">
      <div className="container flex flex-col items-center text-center">
        <Reveal className="flex flex-col items-center">
          <Eyebrow>Platform Capabilities</Eyebrow>
          <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Smarter Tools For Seamless{' '}
            <span className="bg-gradient-to-r from-primary to-[#9b7bff] bg-clip-text text-transparent">
              Client Journeys
            </span>
          </h2>
          <p className="mt-3 max-w-xl text-sm text-muted-foreground">
            Deliver convenience at every step with automated bookings, payments, insights, and
            follow-ups.
          </p>
        </Reveal>

        <RevealGroup className="mt-10 grid w-full gap-4 text-left sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((item) => (
            <RevealItem
              key={item.title}
              className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="flex size-10 items-center justify-center rounded-lg bg-evx-lavender text-primary">
                <item.icon size={20} />
              </span>
              <h3 className="mt-3 font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
