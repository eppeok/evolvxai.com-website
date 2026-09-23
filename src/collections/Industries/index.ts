import type { CollectionConfig } from 'payload'
import { slugField } from 'payload'

import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'

import { authenticated } from '../../access/authenticated'
import { authenticatedOrPublished } from '../../access/authenticatedOrPublished'
import { link } from '@/fields/link'
import { populatePublishedAt } from '../../hooks/populatePublishedAt'

// One template collection for every vertical EvolvXAI serves (Salons, Med-Spa,
// Tattoo Studio, Restaurants, Clinics, Gyms, Barbershops, ...). Adding a new
// industry becomes filling out this form instead of building a new page —
// closing the dead "Clinics/Gyms/Barbershops" 404s found in the site audit.
export const Industries: CollectionConfig = {
  slug: 'industries',
  labels: {
    singular: 'Industry / Solution',
    plural: 'Industries / Solutions',
  },
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  defaultPopulate: {
    title: true,
    slug: true,
    icon: true,
  },
  admin: {
    defaultColumns: ['title', 'slug', 'order', 'updatedAt'],
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      admin: { description: 'e.g. "Salons", "Med-Spas", "Clinics"' },
    },
    {
      name: 'icon',
      type: 'text',
      admin: { description: 'Single emoji shown on the homepage solutions grid, e.g. "✂️"' },
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
      admin: {
        position: 'sidebar',
        description: 'Lower numbers show first on the homepage solutions grid.',
      },
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Hero',
          fields: [
            {
              name: 'heroHeadline',
              type: 'text',
              required: true,
              admin: { description: 'Main headline on this industry’s landing page.' },
            },
            {
              name: 'heroSubhead',
              type: 'textarea',
            },
            {
              name: 'cardTeaser',
              type: 'textarea',
              admin: {
                description:
                  'Short one/two-line pain-point shown on the homepage industry card.',
              },
            },
            link({ overrides: { name: 'primaryCta' } }),
          ],
        },
        {
          label: 'Pain Points',
          fields: [
            {
              name: 'painPoints',
              type: 'array',
              labels: { singular: 'Pain point', plural: 'Pain points' },
              fields: [
                { name: 'heading', type: 'text', required: true },
                { name: 'description', type: 'textarea', required: true },
                { name: 'stat', type: 'text', admin: { description: 'e.g. "40% of enquiries arrive after hours"' } },
              ],
            },
          ],
        },
        {
          label: 'Testimonials',
          fields: [
            {
              name: 'testimonials',
              type: 'relationship',
              relationTo: 'testimonials',
              hasMany: true,
              admin: {
                description:
                  'Pick testimonials tagged for this industry — keeps the Med-Spa page from showing "Dubai Salon Owner" quotes.',
              },
            },
          ],
        },
        {
          name: 'meta',
          label: 'SEO',
          fields: [
            OverviewField({
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
              imagePath: 'meta.image',
            }),
            MetaTitleField({ hasGenerateFn: true }),
            MetaImageField({ relationTo: 'media' }),
            MetaDescriptionField({}),
            PreviewField({
              hasGenerateFn: true,
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
            }),
          ],
        },
      ],
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: { position: 'sidebar' },
    },
    slugField(),
  ],
  hooks: {
    beforeChange: [populatePublishedAt],
  },
  versions: {
    drafts: {
      autosave: { interval: 100 },
      schedulePublish: true,
    },
    maxPerDoc: 20,
  },
}
