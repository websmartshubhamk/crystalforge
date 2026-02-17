'use client'

import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

export function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-3xl text-center" data-section-heading>
          <h2 className="text-4xl font-light tracking-tight sm:text-5xl md:text-6xl">
            Let&apos;s Create Something
            <br />
            <span className="gradient-text-warm font-normal">Extraordinary</span>.
          </h2>
          <div className="mt-12">
            <Button size="lg" href="#">
              Start a Project
            </Button>
          </div>
          <p className="mt-6 text-sm text-[#faf5eb]/30">
            hello@crystalforge.studio
          </p>
        </div>
      </Container>
    </section>
  )
}
