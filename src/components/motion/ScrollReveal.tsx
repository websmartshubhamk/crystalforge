'use client'

import { useEffect } from 'react'
import { gsap, ScrollTrigger, DURATION, EASE, STAGGER } from '.'

export function ScrollReveal() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const heroLines = document.querySelectorAll('[data-hero-line]')
      const heroCtas = document.querySelectorAll('[data-hero-cta]')
      const heroHint = document.querySelector('[data-hero-scroll-hint]')
      gsap.set([heroLines, heroCtas, heroHint], { opacity: 0, y: 40, scale: 0.97 })
      const tl = gsap.timeline({ delay: 0.4 })
      tl.to(heroLines, { opacity: 1, y: 0, scale: 1, duration: DURATION.slow, ease: EASE.out, stagger: STAGGER.normal })
        .to(heroCtas, { opacity: 1, y: 0, scale: 1, duration: DURATION.normal, ease: EASE.out }, '-=0.5')
        .to(heroHint, { opacity: 1, y: 0, scale: 1, duration: DURATION.normal, ease: EASE.out }, '-=0.3')

      document.querySelectorAll('[data-section-heading]').forEach((el) => {
        gsap.from(el, {
          scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' },
          opacity: 0, y: 40, duration: DURATION.slow, ease: EASE.out,
        })
      })

      document.querySelectorAll('[data-section-items]').forEach((container) => {
        const items = container.querySelectorAll('[data-section-item]')
        gsap.from(items, {
          scrollTrigger: { trigger: container, start: 'top 85%', toggleActions: 'play none none none' },
          opacity: 0, y: 30, duration: DURATION.normal, ease: EASE.out, stagger: STAGGER.relaxed,
        })
      })
    })
    return () => ctx.revert()
  }, [])
  return null
}
