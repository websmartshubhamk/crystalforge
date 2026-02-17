'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { navigation } from '@/lib/data'
import { Button } from '@/components/ui/Button'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled
            ? 'bg-[rgba(10,8,6,0.9)] backdrop-blur-xl border-b border-[rgba(245,158,11,0.15)] translate-y-0'
            : 'bg-transparent translate-y-0'
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 text-lg font-light tracking-wide text-[#faf5eb]">
            <span className="text-[#f59e0b]">&#9670;</span> CrystalForge
          </a>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-1 md:flex">
            {navigation.map((item, i) => (
              <span key={item.label} className="flex items-center">
                {i > 0 && <span className="mx-3 h-1 w-1 rounded-full bg-[rgba(245,158,11,0.3)]" />}
                <a
                  href={item.href}
                  className="text-sm text-[#faf5eb]/60 transition-colors duration-200 hover:text-[#f59e0b]"
                >
                  {item.label}
                </a>
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Button size="sm" href="#contact">Book a Call</Button>
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-[#faf5eb] md:hidden" aria-label="Menu">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={cn(
          'fixed inset-y-0 right-0 z-[60] w-72 bg-[rgba(10,8,6,0.98)] backdrop-blur-xl border-l border-[rgba(245,158,11,0.1)] p-8 transition-transform duration-300 md:hidden',
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <button onClick={() => setMenuOpen(false)} className="mb-10 text-[#faf5eb]" aria-label="Close">
          <X size={24} />
        </button>
        <div className="flex flex-col gap-6">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-xl font-light text-[#faf5eb] transition-colors hover:text-[#f59e0b]"
            >
              {item.label}
            </a>
          ))}
          <div className="mt-4 h-px w-full bg-[rgba(245,158,11,0.15)]" />
          <Button href="#contact" className="w-full">Book a Call</Button>
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-[55] bg-black/50 md:hidden" onClick={() => setMenuOpen(false)} />
      )}
    </>
  )
}
