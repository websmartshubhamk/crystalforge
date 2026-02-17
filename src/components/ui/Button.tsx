'use client'

import { cn } from '@/lib/utils'
import { type ButtonHTMLAttributes, type AnchorHTMLAttributes } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline'
type Size = 'sm' | 'md' | 'lg'

interface BaseProps { variant?: Variant; size?: Size }
type ButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined }
type AnchorProps = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }
type Props = ButtonProps | AnchorProps

const variants: Record<Variant, string> = {
  primary: 'bg-[#f59e0b] text-[#0a0806] hover:bg-[#d97706] font-semibold',
  secondary: 'bg-[#150f06] text-[#faf5eb] hover:bg-[#1f1508] border border-[rgba(245,158,11,0.2)]',
  ghost: 'bg-transparent text-[#faf5eb] hover:text-[#f59e0b]',
  outline: 'bg-transparent text-[#f59e0b] border border-[#f59e0b] hover:bg-[rgba(245,158,11,0.1)]',
}

const sizes: Record<Size, string> = {
  sm: 'h-9 px-4 text-sm rounded-lg',
  md: 'h-11 px-6 text-sm rounded-lg',
  lg: 'h-13 px-8 text-base rounded-lg',
}

export function Button({ variant = 'primary', size = 'md', className, ...props }: Props) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#f59e0b] focus:ring-offset-2 focus:ring-offset-[#0a0806] cursor-pointer',
    variants[variant], sizes[size], className
  )
  if ('href' in props && props.href) return <a className={classes} {...(props as AnchorProps)} />
  return <button className={classes} {...(props as ButtonProps)} />
}
