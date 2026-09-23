import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { cache } from 'react'
import { draftMode } from 'next/headers'

// Model: src/collections/Industries. One controller, one job: return every
// published industry/solution, sorted for the homepage grid and the
// Solutions nav dropdown.
export const getIndustries = cache(async () => {
  const { isEnabled: draft } = await draftMode()
  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'industries',
    draft,
    limit: 100,
    pagination: false,
    overrideAccess: draft,
    sort: 'order',
  })

  return result.docs
})
