import type { CollectionConfig } from 'payload'

import { authenticated } from '../../access/authenticated'
import { anyone } from '../../access/anyone'

// Feeds both the /faq page and an auto-generated FAQPage JSON-LD schema from
// the same records — the audit found zero structured data anywhere on the
// site despite a full FAQ page built for exactly this.
export const FAQs: CollectionConfig = {
  slug: 'faqs',
  labels: {
    singular: 'FAQ',
    plural: 'FAQs',
  },
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'question',
    defaultColumns: ['question', 'category', 'order'],
  },
  fields: [
    {
      name: 'question',
      type: 'text',
      required: true,
    },
    {
      name: 'answer',
      type: 'textarea',
      required: true,
    },
    {
      name: 'category',
      type: 'select',
      options: [
        { label: 'General', value: 'general' },
        { label: 'Pricing & Billing', value: 'pricing' },
        { label: 'Setup & Onboarding', value: 'setup' },
        { label: 'Features & Integrations', value: 'features' },
        { label: 'Data & Security', value: 'security' },
      ],
      defaultValue: 'general',
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
      admin: { position: 'sidebar' },
    },
  ],
}
