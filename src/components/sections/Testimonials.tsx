'use client'

import { Container } from '@/components/ui/Container'
import { testimonials } from '@/lib/data'

export function Testimonials() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-3xl text-center" data-section-heading>
          <span className="text-6xl text-[#f59e0b]/30">&ldquo;</span>
          <p className="mt-2 text-xl leading-relaxed text-[#faf5eb]/70 italic sm:text-2xl">
            {testimonials[0].quote}
          </p>
          <div className="mt-8">
            <p className="text-sm font-medium text-[#faf5eb]">{testimonials[0].name}</p>
            <p className="mt-1 text-xs text-[#faf5eb]/40">{testimonials[0].role}, {testimonials[0].company}</p>
          </div>
          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <span
                key={i}
                className={cn('h-2 w-2 rounded-full transition-colors', i === 0 ? 'bg-[#f59e0b]' : 'bg-[rgba(245,158,11,0.2)]')}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ')
}
