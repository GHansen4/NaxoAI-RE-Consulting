'use client'

import { useEffect, useState } from 'react'

/**
 * Controls Calendly badge widget visibility based on scroll position
 * Shows badge only after user scrolls past the hero CTA
 */
export default function CalendlyBadgeController() {
  const [showBadge, setShowBadge] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Same logic as Navigation component - show after hero section
      const heroHeight = window.innerHeight * (window.innerWidth < 1024 ? 1.0 : 0.8)
      const shouldShow = window.scrollY > heroHeight
      setShowBadge(shouldShow)
    }

    // Initial check
    handleScroll()
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  useEffect(() => {
    // Apply CSS class to control badge visibility
    const badge = document.querySelector('.calendly-badge-widget')
    if (badge) {
      badge.classList.toggle('show', showBadge)
    }
  }, [showBadge])

  // This component doesn't render anything - it just controls the badge
  return null
}
