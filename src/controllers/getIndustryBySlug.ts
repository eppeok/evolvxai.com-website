import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { cache } from 'react'
import { draftMode } from 'next/headers'

// Model: src/collections/Industries. Backs /[slug] — the single template
// that replaces the six hand-built (and four dead-linked) industry pages
// found in the site audit.
export const getIndustryBySlug = cache(async (slug: string) => {
  const { isEnabled: draft } = await draftMode()
  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'industries',
    draft,
    limit: 1,
    pagination: false,
    overrideAccess: draft,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return result.docs[0] ?? null
})
