'use client'

import { cn } from '@/lib/utils'
import { type HTMLAttributes } from 'react'

export function Card({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-[rgba(245,158,11,0.12)] bg-[rgba(15,12,8,0.8)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(245,158,11,0.35)] hover:shadow-[0_0_30px_rgba(245,158,11,0.08)]',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
