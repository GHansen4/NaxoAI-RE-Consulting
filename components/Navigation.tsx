'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import CalendlyButton from './CalendlyButton'

const NAV = [
  { label: 'Outcomes', href: '#outcomes' },
  { label: 'About', href: '#about' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Book a consultation', href: '#book' },
]

/**
 * Simplified Navigation component
 * Removed unused props and cleaned up logic
 */
export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showHeaderCTA, setShowHeaderCTA] = useState(false)
  const [activeId, setActiveId] = useState<string | null>(null)
  const [isMobileSticky, setIsMobileSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show header CTA when scrolled past hero section
      const heroHeight = window.innerHeight * (window.innerWidth < 1024 ? 1.0 : 0.8)
      setShowHeaderCTA(window.scrollY > heroHeight)
      
      // Mobile sticky after 40% scroll
      const shouldBeMobileSticky = window.scrollY > window.innerHeight * 0.4
      setIsMobileSticky(shouldBeMobileSticky)
    }

    // Section intersection observer
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -50% 0px',
      threshold: 0
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)
    
    // Observe all sections
    const sections = ['outcomes', 'about', 'pricing', 'faq', 'book']
    sections.forEach(id => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    // Initial check and event listeners
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
      observer.disconnect()
    }
  }, [])

  return (
    <header className={`absolute inset-x-0 top-0 z-50 lg:relative transition-all duration-300 ${isMobileSticky ? 'fixed top-0 backdrop-blur-sm bg-white/90 lg:relative lg:bg-transparent lg:backdrop-blur-none' : ''}`}>
      <nav className="relative z-10 flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="text-2xl font-bold text-primary-600">NaxoAI</span>
          </Link>
        </div>
        
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open main menu"
          >
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        
        <div className="hidden lg:flex lg:gap-x-8 relative z-10">
          {NAV.map((item) => {
            const isActive = activeId === item.href.slice(1)
            return (
              <a
                key={item.href}
                href={item.href}
                className={`relative px-3 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-md transition-colors cursor-pointer ${
                  isActive 
                    ? 'text-slate-900 underline underline-offset-4' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                {item.label}
              </a>
            )
          })}
        </div>
        
        {/* Desktop Header CTA - prevent layout shift with fixed width */}
        <div className={`hidden lg:flex lg:flex-1 lg:justify-end transition-opacity duration-300 ${showHeaderCTA ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <CalendlyButton className="btn-primary px-6 py-2.5 whitespace-nowrap">
            Book Free Consultation
          </CalendlyButton>
        </div>
        
        {/* Mobile Header CTA - only show when scrolled */}
        <div className={`flex lg:hidden transition-opacity duration-300 ${showHeaderCTA ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <CalendlyButton className="btn-primary px-4 py-2 text-sm whitespace-nowrap">
            Book Call
          </CalendlyButton>
        </div>
      </nav>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="text-2xl font-bold text-primary-600">NaxoAI</span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {NAV.map((item) => {
                      const isActive = activeId === item.href.slice(1)
                      return (
                        <a
                          key={item.href}
                          href={item.href}
                          className={`relative -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer ${
                            isActive 
                              ? 'bg-primary-50 text-primary-600' 
                              : 'text-gray-900 hover:bg-gray-50'
                          }`}
                          onClick={() => setMobileMenuOpen(false)}
                          aria-current={isActive ? 'page' : undefined}
                        >
                          {item.label}
                        </a>
                      )
                    })}
                  </div>
                  <div className="py-6">
                    <CalendlyButton className="btn-primary w-full">
                      Book Free Consultation
                    </CalendlyButton>
                  </div>
                </div>
              </div>
          </div>
        </div>
      )}
    </header>
  )
}