/**
 * Shared component interfaces
 * Simplified and clean type definitions
 */

export interface Feature {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  colorKey: string
}

export interface FAQItem {
  question: string
  answer: string
}

export interface PainPoint {
  icon: React.ComponentType<{ className?: string }>
  text: string
}

// Component props interfaces
export interface AccordionProps {
  items: FAQItem[]
  allowMultiple?: boolean
  className?: string
}

export interface ShowMoreProps {
  trigger: string
  children: React.ReactNode
  className?: string
  triggerClassName?: string
  contentClassName?: string
  defaultOpen?: boolean
}