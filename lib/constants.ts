/**
 * Application constants and design system
 * Centralized configuration for consistency
 */

// Application constants
export const CALENDLY_URL = 'https://calendly.com/g-hansen17/30min'
export const CONTACT_EMAIL = 'contact@naxoai.com'

// Business information
export const BUSINESS_INFO = {
  name: 'NaxoAI',
  description: 'AI consulting for real estate agents',
  location: 'Raleigh, NC',
  hourlyRate: '$199/hour',
  founder: 'Greg'
} as const

// Design system constants
export const DESIGN_SYSTEM = {
  // Color variants
  colors: {
    primary: '#2563eb',
    secondary: '#64748b',
    accent: '#0ea5e9',
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
  },
  
  // Spacing scale (4px grid)
  spacing: {
    xs: '0.5rem',   // 8px
    sm: '1rem',     // 16px
    md: '1.5rem',   // 24px
    lg: '2rem',     // 32px
    xl: '3rem',     // 48px
    '2xl': '4rem',  // 64px
  },
  
  // Typography scale
  typography: {
    sizes: {
      xs: 'text-xs',
      sm: 'text-sm',
      base: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
      '4xl': 'text-4xl',
      '5xl': 'text-5xl',
      '6xl': 'text-6xl',
    },
    weights: {
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    }
  },
  
  // Component variants
  variants: {
    color: {
      blue: 'bg-blue-100 text-blue-600 border-blue-200',
      purple: 'bg-purple-100 text-purple-600 border-purple-200',
      pink: 'bg-pink-100 text-pink-600 border-pink-200',
      indigo: 'bg-indigo-100 text-indigo-600 border-indigo-200',
      teal: 'bg-teal-100 text-teal-600 border-teal-200',
      green: 'bg-green-100 text-green-600 border-green-200',
    },
    spacing: {
      tight: 'py-12 lg:py-16',
      normal: 'py-16 lg:py-20',
      loose: 'py-20 lg:py-24',
    },
    background: {
      white: 'bg-white',
      gray: 'bg-gray-50',
      gradient: 'bg-gradient-to-br from-gray-50 to-white',
    }
  }
} as const

// Animation timings (ms)
export const ANIMATION_DURATION = {
  fast: 200,
  normal: 300,
  slow: 500
} as const

// Breakpoints (matching Tailwind)
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536
} as const

// SEO and metadata constants
export const SEO_CONFIG = {
  siteName: 'NaxoAI',
  siteDescription: 'AI consulting for real estate agents. Save time with automation and AI tools.',
  siteUrl: 'https://naxoai.com',
  twitterHandle: '@naxoai',
} as const
