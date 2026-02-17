'use client'

import { Container } from '@/components/ui/Container'
import { aboutData } from '@/lib/data'

export function About() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center" data-section-heading>
          <div>
            <span className="text-7xl font-light text-[#f59e0b] sm:text-8xl lg:text-9xl">{aboutData.stat}</span>
            <p className="mt-2 text-lg text-[#faf5eb]/50">{aboutData.statLabel}</p>
          </div>
          <div className="space-y-6">
            {aboutData.paragraphs.map((p, i) => (
              <p key={i} className="text-base leading-relaxed text-[#faf5eb]/55">{p}</p>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
