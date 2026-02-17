import { Palette, PenTool, Code, Sparkles } from 'lucide-react'
import type { ComponentType } from 'react'

type IconComponent = ComponentType<{ className?: string }>

export const siteConfig = {
  name: 'CrystalForge',
  tagline: 'Digital Product Studio',
}

export const navigation = [
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Studio', href: '#contact' },
]

export const heroData = {
  eyebrow: 'DIGITAL PRODUCT STUDIO',
  headlineTop: 'Crafting Digital',
  headlineBottom: 'Masterpieces.',
  subline: 'We transform bold ideas into extraordinary digital experiences. Every pixel, every interaction, meticulously crafted.',
  cta: { label: 'Explore Our Work', href: '#portfolio' },
}

export const marqueeWords = ['BRANDING', 'DESIGN', 'DEVELOPMENT', 'STRATEGY', 'MOTION', '3D']

export const aboutData = {
  stat: '12+',
  statLabel: 'Years of Excellence',
  paragraphs: [
    'CrystalForge is a boutique digital product studio based in London. We specialise in creating distinctive brand identities, immersive web experiences, and bespoke digital products that stand apart from the ordinary.',
    'Our multidisciplinary team brings together expertise in design, technology, and strategy to deliver work that not only looks exceptional but drives measurable results for ambitious brands.',
  ],
}

export interface Service {
  number: string
  icon: IconComponent
  title: string
  description: string
}

export const services: Service[] = [
  { number: '01', icon: Palette, title: 'Brand Identity', description: 'Complete brand identity systems including logo design, colour palettes, typography, and comprehensive brand guidelines.' },
  { number: '02', icon: PenTool, title: 'Digital Design', description: 'User interface and experience design that balances aesthetics with functionality across web and mobile platforms.' },
  { number: '03', icon: Code, title: 'Development', description: 'Full-stack web and application development using modern technologies, built for performance and scalability.' },
  { number: '04', icon: Sparkles, title: 'Motion & 3D', description: 'Captivating animations, micro-interactions, and immersive 3D experiences that bring digital products to life.' },
]

export interface Project {
  title: string
  category: string
  year: string
  gradient: string
  image: string
}

export const projects: Project[] = [
  { title: 'Meridian Capital', category: 'Brand Identity', year: '2025', gradient: 'from-amber-600 to-orange-500', image: '/projects/meridian-capital.svg' },
  { title: 'Solaris App', category: 'Product Design', year: '2025', gradient: 'from-orange-500 to-rose-400', image: '/projects/solaris-app.svg' },
  { title: 'Aurum Finance', category: 'Web Development', year: '2024', gradient: 'from-amber-500 to-yellow-400', image: '/projects/aurum-finance.svg' },
  { title: 'Ember Studios', category: 'Motion & 3D', year: '2024', gradient: 'from-rose-400 to-amber-500', image: '/projects/ember-studios.svg' },
]

export interface Testimonial {
  quote: string
  name: string
  role: string
  company: string
}

export const testimonials: Testimonial[] = [
  {
    quote: 'CrystalForge delivered work that exceeded every expectation. Their attention to detail and strategic thinking transformed our entire brand presence.',
    name: 'Alexandra Hart',
    role: 'CEO',
    company: 'Meridian Capital',
  },
  {
    quote: 'Working with their team felt like a true partnership. They understood our vision from day one and brought it to life beautifully.',
    name: 'James Whitmore',
    role: 'Founder',
    company: 'Solaris',
  },
  {
    quote: 'The level of craft in every deliverable was remarkable. From the animations to the code quality, everything was pristine.',
    name: 'Sophie Laurent',
    role: 'Creative Director',
    company: 'Ember Studios',
  },
]

export interface PricingPlan {
  name: string
  price: string
  description: string
  features: string[]
  highlighted: boolean
  cta: string
}

export const pricingPlans: PricingPlan[] = [
  {
    name: 'Artisan',
    price: '\u00a32,500',
    description: 'Perfect for startups needing a strong foundation.',
    features: ['Brand Identity', 'Landing Page', '2 Revision Rounds', '2 Week Delivery', 'Source Files'],
    highlighted: false,
    cta: 'Get Started',
  },
  {
    name: 'Master',
    price: '\u00a37,500',
    description: 'For established brands ready to elevate their presence.',
    features: ['Everything in Artisan', 'Full Website (up to 8 pages)', 'Custom Animations', '4 Revision Rounds', 'CMS Integration', '4 Week Delivery'],
    highlighted: true,
    cta: 'Start Project',
  },
  {
    name: 'Bespoke',
    price: 'Custom',
    description: 'Enterprise-scale projects with dedicated attention.',
    features: ['Everything in Master', 'Custom Web Application', '3D & Motion Design', 'Unlimited Revisions', 'Ongoing Support', 'Priority Delivery'],
    highlighted: false,
    cta: 'Book a Call',
  },
]

export const footerLinks = ['Studio', 'Services', 'Portfolio', 'Careers', 'Contact']

export const socialLinks = [
  { label: 'Twitter', href: '#' },
  { label: 'Instagram', href: '#' },
  { label: 'Behance', href: '#' },
  { label: 'LinkedIn', href: '#' },
]
