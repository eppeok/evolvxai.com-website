import type { GlobalConfig } from 'payload'

// Single source of truth for name/address/phone, socials, and the
// LocalBusiness JSON-LD fields — fixes the malformed "tel:+971 581675393"
// link and the footer email that rendered as literal unreadable placeholder
// text, both found in the site audit, by giving them exactly one field each
// instead of hand-typed markup repeated per page.
export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Site Settings',
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Business Info',
          fields: [
            { name: 'companyName', type: 'text', required: true, defaultValue: 'EvolvXAI' },
            {
              name: 'legalName',
              type: 'text',
              admin: { description: 'e.g. "Quantech IT Services FZC"' },
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'phone',
                  type: 'text',
                  admin: {
                    description: 'E.164 format, no spaces, e.g. "+971581675393". Used to build every tel: link site-wide.',
                  },
                },
                {
                  name: 'whatsappNumber',
                  type: 'text',
                  admin: { description: 'Digits only, e.g. "971581675393". Used to build every wa.me link.' },
                },
              ],
            },
            { name: 'email', type: 'email' },
            { name: 'addressLine', type: 'textarea', admin: { description: 'Full address for schema.org and the footer.' } },
            {
              type: 'row',
              fields: [
                { name: 'geoLat', type: 'number', label: 'Latitude' },
                { name: 'geoLng', type: 'number', label: 'Longitude' },
              ],
            },
          ],
        },
        {
          label: 'Social Links',
          fields: [
            {
              name: 'socialLinks',
              type: 'array',
              fields: [
                {
                  name: 'platform',
                  type: 'select',
                  options: ['Facebook', 'Instagram', 'LinkedIn', 'YouTube', 'TikTok', 'X'],
                  required: true,
                },
                { name: 'url', type: 'text', required: true },
              ],
            },
          ],
        },
        {
          label: 'Default SEO',
          fields: [
            {
              name: 'defaultMetaTitle',
              type: 'text',
              admin: { description: 'Fallback <title> used when a page has none set.' },
            },
            {
              name: 'defaultMetaDescription',
              type: 'textarea',
            },
            {
              name: 'defaultOgImage',
              type: 'upload',
              relationTo: 'media',
              admin: { description: 'Fallback social-share image used when a page has none set.' },
            },
          ],
        },
      ],
    },
  ],
}
