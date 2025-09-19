'use client'

import React from 'react'

interface CalendlyButtonProps {
  className?: string
  children: React.ReactNode
  'aria-label'?: string
}

/**
 * Calendly popup button using exact Calendly code
 */
export default function CalendlyButton({ 
  className = '', 
  children,
  'aria-label': ariaLabel = 'Schedule consultation'
}: CalendlyButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    
    if (typeof window !== 'undefined' && (window as any).Calendly) {
      (window as any).Calendly.initPopupWidget({url: 'https://calendly.com/g-hansen17/30min'})
    } else {
      console.warn('Calendly script not loaded yet')
      // Fallback: open in new window if script not ready
      window.open('https://calendly.com/g-hansen17/30min', '_blank', 'noopener,noreferrer')
    }
    return false
  }

  return (
    <a
      href=""
      onClick={handleClick}
      className={className}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  )
}