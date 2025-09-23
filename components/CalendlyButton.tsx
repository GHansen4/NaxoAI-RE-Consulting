'use client'

import React from 'react'
import { CALENDLY_URL } from '@/lib/constants'

interface CalendlyButtonProps {
  className?: string
  children: React.ReactNode
  'aria-label'?: string
  fallbackUrl?: string
}

/**
 * Optimized Calendly popup button with error handling and fallbacks
 */
export default function CalendlyButton({ 
  className = '', 
  children,
  'aria-label': ariaLabel = 'Schedule consultation',
  fallbackUrl = CALENDLY_URL
}: CalendlyButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    
    try {
      if (typeof window !== 'undefined' && (window as any).Calendly) {
        (window as any).Calendly.initPopupWidget({ url: CALENDLY_URL })
      } else {
        // Fallback: open in new window if script not ready
        window.open(fallbackUrl, '_blank', 'noopener,noreferrer')
      }
    } catch (error) {
      console.error('Error opening Calendly:', error)
      // Final fallback
      window.open(fallbackUrl, '_blank', 'noopener,noreferrer')
    }
    
    return false
  }

  return (
    <a
      href={fallbackUrl}
      onClick={handleClick}
      className={className}
      aria-label={ariaLabel}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  )
}