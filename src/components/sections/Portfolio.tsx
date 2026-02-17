'use client'

import { Container } from '@/components/ui/Container'
import { projects } from '@/lib/data'
import { cn } from '@/lib/utils'

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 sm:py-32">
      <Container>
        <div className="text-center" data-section-heading>
          <h2 className="text-3xl font-light tracking-tight sm:text-4xl md:text-5xl">
            Selected <span className="gradient-text-warm font-normal">Work</span>
          </h2>
        </div>
        <div className="mt-16 grid gap-6 sm:grid-cols-2" data-section-items>
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl cursor-pointer"
              data-section-item
            >
              <div className={cn('absolute inset-0 bg-gradient-to-br', project.gradient)} />
              <div className="absolute inset-0 bg-black/20 transition-all duration-300 group-hover:bg-black/40" />
              <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.02]" />
              <div className="relative flex h-full flex-col justify-between p-8">
                <div className="flex items-start justify-between">
                  <span className="rounded-full bg-[rgba(0,0,0,0.3)] px-3 py-1 text-xs text-white/80">
                    {project.category}
                  </span>
                  <span className="text-sm text-white/50">{project.year}</span>
                </div>
                <h3 className="text-2xl font-light text-white sm:text-3xl">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
