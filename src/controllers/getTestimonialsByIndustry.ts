import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { cache } from 'react'

// Model: src/collections/Testimonials. Returns only quotes tagged for the
// given industry — the audit found the same four testimonials reused
// verbatim across every solution page, still saying "Dubai Salon Owner" on
// the Med-Spa and Tattoo Studio pages. This controller makes that
// structurally impossible: pass an industry ID, get only its quotes back.
export const getTestimonialsByIndustry = cache(async (industryId: string) => {
  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'testimonials',
    limit: 20,
    pagination: false,
    where: {
      industries: {
        in: [industryId],
      },
    },
  })

  return result.docs
})
