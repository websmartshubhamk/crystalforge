'use client'

import { Check } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { pricingPlans } from '@/lib/data'
import { cn } from '@/lib/utils'

export function Pricing() {
  return (
    <section id="pricing" className="py-24 sm:py-32">
      <Container>
        <div className="text-center" data-section-heading>
          <h2 className="text-3xl font-light tracking-tight sm:text-4xl md:text-5xl">
            Investment <span className="gradient-text-warm font-normal">Tiers</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[#faf5eb]/45">
            Project-based pricing. No subscriptions, no surprises.
          </p>
        </div>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" data-section-items>
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                'rounded-2xl border p-8 transition-all duration-300',
                plan.highlighted
                  ? 'border-[#f59e0b] bg-[rgba(245,158,11,0.03)] shadow-[0_0_40px_rgba(245,158,11,0.08)]'
                  : 'border-[rgba(245,158,11,0.1)] bg-[rgba(15,12,8,0.6)]'
              )}
              data-section-item
            >
              {plan.highlighted && (
                <span className="mb-4 inline-block rounded-full bg-[#f59e0b] px-3 py-1 text-xs font-semibold text-[#0a0806]">Recommended</span>
              )}
              <h3 className="text-xl font-medium text-[#faf5eb]">{plan.name}</h3>
              <div className="mt-4">
                <span className="text-4xl font-light text-[#faf5eb]">{plan.price}</span>
                {plan.price !== 'Custom' && <span className="text-[#faf5eb]/30 text-sm ml-1">per project</span>}
              </div>
              <p className="mt-3 text-sm text-[#faf5eb]/40">{plan.description}</p>
              <ul className="mt-6 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-[#faf5eb]/55">
                    <Check className="h-4 w-4 text-[#f59e0b] shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button variant={plan.highlighted ? 'primary' : 'outline'} className="w-full" href="#">{plan.cta}</Button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
