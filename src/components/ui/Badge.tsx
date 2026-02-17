'use client'

import { cn } from '@/lib/utils'
import { type HTMLAttributes } from 'react'

export function Badge({ className, children, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase text-[#f59e0b]',
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}
