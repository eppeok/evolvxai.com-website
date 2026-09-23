import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { cache } from 'react'
import type { Faq } from '@/payload-types'

// Model: src/collections/FAQs. Feeds both the /faq page and the FAQPage
// JSON-LD schema generator from the same records — closing the "zero
// structured data" AEO gap found in the site audit.
export const getFAQs = cache(async (category?: Faq['category']) => {
  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'faqs',
    limit: 200,
    pagination: false,
    sort: 'order',
    where: category
      ? {
          category: {
            equals: category,
          },
        }
      : undefined,
  })

  return result.docs
})
