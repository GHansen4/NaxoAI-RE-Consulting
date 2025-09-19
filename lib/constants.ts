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
  xl: 1280
} as const
