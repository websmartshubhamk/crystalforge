'use client'

import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { services } from '@/lib/data'

export function Services() {
  return (
    <section id="services" className="py-24 sm:py-32">
      <Container>
        <div className="text-center" data-section-heading>
          <h2 className="text-3xl font-light tracking-tight sm:text-4xl md:text-5xl">
            What We <span className="gradient-text-warm font-normal">Create</span>
          </h2>
        </div>
        <div className="mt-16 grid gap-6 sm:grid-cols-2" data-section-items>
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl border border-[rgba(245,158,11,0.1)] bg-[rgba(15,12,8,0.6)] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.06)]"
              data-section-item
            >
              <span className="text-3xl font-light text-[#f59e0b]/30">{service.number}</span>
              <service.icon className="mt-4 h-7 w-7 text-[#f59e0b]" />
              <h3 className="mt-4 text-xl font-medium text-[#faf5eb]">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#faf5eb]/45">{service.description}</p>
              <a
                href="#"
                className="mt-6 inline-flex items-center gap-1 text-sm text-[#f59e0b] opacity-0 transition-all duration-300 group-hover:opacity-100"
              >
                Learn More <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
