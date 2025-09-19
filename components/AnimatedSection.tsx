'use client'

import React, { ReactNode, useRef, useState, useEffect } from 'react'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
  as?: 'div' | 'section' | 'article' | 'header' | 'footer'
}

/**
 * Simplified AnimatedSection component with scroll-based animations
 * Uses Intersection Observer for performance
 */
export default function AnimatedSection({ 
  children, 
  className = '', 
  delay = 0,
  as: Component = 'div'
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const ref = useRef<any>(null)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted || !ref.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -10% 0px'
      }
    )

    observer.observe(ref.current)

    return () => {
      observer.disconnect()
    }
  }, [isMounted])

  // Fallback for SSR - show content without animation
  if (!isMounted) {
    return (
      <Component
        className={`fade-in-up ${className}`}
        style={{ transitionDelay: `${delay}ms` }}
      >
        {children}
      </Component>
    )
  }

  return (
    <Component
      ref={ref}
      className={`fade-in-up ${isVisible ? 'visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Component>
  )
}