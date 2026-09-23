import type { CollectionConfig } from 'payload'

import { authenticated } from '../../access/authenticated'
import { anyone } from '../../access/anyone'

// Tagged by industry so a quote can't leak across verticals — the audit found
// the same four testimonials reused on every solution page, still saying
// "Dubai Salon Owner" on the Med-Spa and Tattoo Studio pages.
export const Testimonials: CollectionConfig = {
  slug: 'testimonials',
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'authorName',
    defaultColumns: ['authorName', 'industries', 'rating', 'featured'],
  },
  fields: [
    {
      name: 'quote',
      type: 'textarea',
      required: true,
    },
    {
      name: 'authorName',
      type: 'text',
      required: true,
    },
    {
      name: 'authorRole',
      type: 'text',
      admin: { description: 'e.g. "Owner, Bloom Beauty Lounge, Dubai"' },
    },
    {
      name: 'avatar',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'rating',
      type: 'number',
      min: 1,
      max: 5,
      defaultValue: 5,
    },
    {
      name: 'industries',
      type: 'relationship',
      relationTo: 'industries',
      hasMany: true,
      required: true,
      admin: { description: 'Which industry page(s) this testimonial is allowed to appear on.' },
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
      admin: { description: 'Show on the homepage.', position: 'sidebar' },
    },
  ],
}
