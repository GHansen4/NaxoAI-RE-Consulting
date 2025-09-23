/**
 * Shared component interfaces and design system types
 * Centralized type definitions for consistency
 */

import { ComponentType } from 'react'

// Base component props
export interface BaseComponentProps {
  className?: string
  children?: React.ReactNode
}

// Icon component type
export type IconComponent = ComponentType<{ className?: string }>

// Design system types
export type ColorVariant = 'blue' | 'purple' | 'pink' | 'indigo' | 'teal' | 'green'
export type SizeVariant = 'sm' | 'md' | 'lg' | 'xl'
export type SpacingVariant = 'tight' | 'normal' | 'loose'

// Content interfaces
export interface Feature {
  icon: IconComponent
  title: string
  description: string
  colorKey: ColorVariant
}

export interface FAQItem {
  question: string
  answer: string
}

export interface PainPoint {
  icon: IconComponent
  text: string
}

export interface OutcomeCard {
  icon: IconComponent
  title: string
  subtitle: string
  proofChip: string
  bullets: string[]
}

export interface PainSolutionCard {
  icon: IconComponent
  pain: string
  solution: string
  proofChip: string
  bullets: string[]
  color: ColorVariant
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

export interface AnimatedSectionProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export interface ButtonProps extends BaseComponentProps {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: SizeVariant
  onClick?: () => void
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}

// Section component props
export interface SectionProps extends BaseComponentProps {
  id?: string
  spacing?: SpacingVariant
  background?: 'white' | 'gray' | 'gradient'
}