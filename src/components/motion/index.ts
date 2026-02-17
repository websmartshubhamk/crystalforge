import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export { gsap, ScrollTrigger }
export const DURATION = { fast: 0.4, normal: 0.8, slow: 1.2 }
export const EASE = { out: 'power3.out', in: 'power3.in', smooth: 'power2.out' }
export const STAGGER = { tight: 0.06, normal: 0.1, relaxed: 0.15 }
