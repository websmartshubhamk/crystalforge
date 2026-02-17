import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CrystalForge | Digital Product Studio',
  description: 'We transform bold ideas into extraordinary digital experiences.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  )
}
