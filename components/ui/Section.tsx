'use client'

import React from 'react'
import { SectionProps } from '@/types'
import { DESIGN_SYSTEM } from '@/lib/constants'

/**
 * Reusable Section component with consistent spacing and backgrounds
 * Provides standardized section layout across the application
 */
export default function Section({
  children,
  id,
  spacing = 'normal',
  background = 'white',
  className = '',
  ...props
}: SectionProps) {
  const spacingClass = DESIGN_SYSTEM.variants.spacing[spacing]
  const backgroundClass = DESIGN_SYSTEM.variants.background[background]
  
  const classes = [
    spacingClass,
    backgroundClass,
    className
  ].filter(Boolean).join(' ')
  
  return (
    <section
      id={id}
      className={classes}
      {...props}
    >
      {children}
    </section>
  )
}
