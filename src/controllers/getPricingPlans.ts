import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { cache } from 'react'

// Model: src/collections/PricingPlans. The single source every pricing
// display reads from — the audit found two conflicting price tables live
// on /pricing at once; this controller is the only place that can happen
// again, and it can't.
export const getPricingPlans = cache(async () => {
  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'pricing-plans',
    limit: 20,
    pagination: false,
    sort: 'order',
  })

  return result.docs
})
