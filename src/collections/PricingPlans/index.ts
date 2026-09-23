import type { CollectionConfig } from 'payload'

import { authenticated } from '../../access/authenticated'
import { anyone } from '../../access/anyone'
import { link } from '@/fields/link'

// Single source of truth for every price shown anywhere on the site. The
// audit found two conflicting price tables live on /pricing at once (AED
// 1,799 vs AED 1,500 for the same "Starter" plan) — having exactly one
// collection feeding every pricing display makes that class of bug
// structurally impossible.
export const PricingPlans: CollectionConfig = {
  slug: 'pricing-plans',
  labels: {
    singular: 'Pricing Plan',
    plural: 'Pricing Plans',
  },
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'priceAED', 'billingPeriod', 'order'],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      admin: { description: 'e.g. "Starter", "Professional", "Enterprise"' },
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
      admin: { position: 'sidebar', description: 'Left-to-right display order.' },
    },
    {
      name: 'isFeatured',
      type: 'checkbox',
      defaultValue: false,
      admin: { position: 'sidebar', description: 'Highlight this plan as "Most Popular".' },
    },
    {
      type: 'row',
      fields: [
        {
          name: 'priceAED',
          type: 'number',
          required: true,
          admin: { description: 'Monthly price in AED. This is the single number every page reads from.' },
        },
        {
          name: 'billingPeriod',
          type: 'select',
          defaultValue: 'monthly',
          options: [
            { label: 'per month', value: 'monthly' },
            { label: 'one-time', value: 'one-time' },
            { label: 'custom / contact us', value: 'custom' },
          ],
        },
      ],
    },
    {
      name: 'setupFee',
      type: 'number',
      admin: { description: 'AED setup fee. Leave blank or 0 if waived.' },
    },
    {
      name: 'tagline',
      type: 'text',
      admin: { description: 'e.g. "Everything a single-location business needs."' },
    },
    {
      name: 'features',
      type: 'array',
      fields: [{ name: 'label', type: 'text', required: true }],
    },
    link({ overrides: { name: 'cta' } }),
  ],
}
