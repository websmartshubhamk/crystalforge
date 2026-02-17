'use client'

import { marqueeWords } from '@/lib/data'

export function Marquee() {
  const doubled = [...marqueeWords, ...marqueeWords]

  return (
    <section className="overflow-hidden border-y border-[rgba(245,158,11,0.08)] py-8">
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((word, i) => (
          <span
            key={i}
            className="mx-6 shrink-0 text-5xl font-light tracking-wider text-transparent sm:text-6xl lg:text-7xl"
            style={{
              WebkitTextStroke: '1px rgba(245, 158, 11, 0.2)',
            }}
          >
            {word}
          </span>
        ))}
      </div>
    </section>
  )
}
