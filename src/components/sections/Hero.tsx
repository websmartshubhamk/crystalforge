'use client'

import dynamic from 'next/dynamic'
import { ArrowRight } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { heroData } from '@/lib/data'

const HeroCanvas = dynamic(() => import('@/components/three/HeroCanvas').then((m) => m.HeroCanvas), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-gradient-to-b from-[#0a0806] via-[#120e06] to-[#0a0806]" />,
})

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <HeroCanvas />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0a0806] to-transparent z-[5]" />
      <div className="relative z-10 mx-auto max-w-4xl px-5 text-center sm:px-8">
        <div data-hero-line>
          <Badge>{heroData.eyebrow}</Badge>
        </div>
        <h1 className="mt-8 text-5xl font-light leading-[1.1] tracking-tight sm:text-6xl md:text-7xl lg:text-[5.5rem]" data-hero-line>
          {heroData.headlineTop}
          <br />
          <span className="gradient-text-warm font-normal">{heroData.headlineBottom.replace('.', '')}</span>.
        </h1>
        <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-[#faf5eb]/50 sm:text-lg" data-hero-line>
          {heroData.subline}
        </p>
        <div className="mt-12" data-hero-cta>
          <Button size="lg" href={heroData.cta.href}>
            {heroData.cta.label}
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="mt-20 flex flex-col items-center" data-hero-scroll-hint>
          <div className="w-px bg-gradient-to-b from-[#f59e0b] to-transparent animate-grow-line" />
        </div>
      </div>
    </section>
  )
}
