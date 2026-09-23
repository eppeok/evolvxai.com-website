import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { cache } from 'react'

// Model: src/SiteSettings global. Single source for NAP, socials, and
// default SEO — fixes the malformed "tel:+971 581675393" link and the
// footer email that rendered as literal placeholder text, both found in the
// site audit, by giving every page one field to read instead of hand-typed
// markup repeated per page.
export const getSiteSettings = cache(async () => {
  const payload = await getPayload({ config: configPromise })

  return payload.findGlobal({
    slug: 'site-settings',
  })
})
