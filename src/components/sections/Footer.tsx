'use client'

import { footerLinks, socialLinks } from '@/lib/data'

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="bg-[#080604]">
      {/* Gradient border */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#f59e0b] to-transparent opacity-30" />

      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12">
        {/* Row 1: Brand + Contact */}
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <h3 className="text-3xl font-light tracking-wide text-[#faf5eb] sm:text-4xl">
            <span className="text-[#f59e0b]">&#9670;</span> CrystalForge
          </h3>
          <div className="text-right text-sm text-[#faf5eb]/35">
            <p>London, United Kingdom</p>
            <p className="mt-1">hello@crystalforge.studio</p>
            <p className="mt-1">+44 20 7946 0958</p>
          </div>
        </div>

        {/* Row 2: Links + Social */}
        <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-1">
            {footerLinks.map((link, i) => (
              <span key={link} className="flex items-center">
                {i > 0 && <span className="mx-3 text-[#faf5eb]/15">&#183;</span>}
                <a href="#" className="text-sm text-[#faf5eb]/40 transition-colors hover:text-[#f59e0b]">{link}</a>
              </span>
            ))}
          </div>
          <div className="flex gap-5">
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href} className="text-sm text-[#faf5eb]/30 transition-colors hover:text-[#f59e0b]" aria-label={link.label}>
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 h-px w-full bg-[rgba(245,158,11,0.08)]" />
        <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-[#faf5eb]/20">&copy; 2026 CrystalForge Studio</p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-xs text-[#faf5eb]/20 hover:text-[#faf5eb]/40">Privacy</a>
            <a href="#" className="text-xs text-[#faf5eb]/20 hover:text-[#faf5eb]/40">Terms</a>
            <button onClick={scrollToTop} className="text-xs text-[#faf5eb]/20 hover:text-[#f59e0b] transition-colors cursor-pointer">
              Back to top &uarr;
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
