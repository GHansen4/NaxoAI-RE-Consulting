'use client'

import React, { useEffect, useState } from 'react'

/**
 * Calendly section with proper client-side loading
 * Prevents hydration errors
 */
export default function CalendlySection() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return (
      <section id="calendly" className="section-spacing bg-gradient-to-br from-primary-50 to-white">
        <div className="mx-auto max-w-5xl container-padding">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl mb-6">
              Book Your Free Consultation
            </h2>
            <p className="text-xl text-gray-600 mb-4 max-w-3xl mx-auto">
              Choose a time that works for you below.
            </p>
          </div>
          
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="p-8 text-center">
              <div className="mb-8">
                <p className="text-gray-600 max-w-2xl mx-auto">
                  We&apos;ll discuss your current workflow, identify time-wasters, 
                  and create a personalized AI action plan—all in a short consultation, completely free.
                </p>
              </div>
              
              {/* Loading placeholder */}
              <div className="h-[700px] bg-gray-100 rounded-2xl flex items-center justify-center">
                <p className="text-gray-500">Loading calendar...</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="calendly" className="section-spacing bg-gradient-to-br from-primary-50 to-white">
        <div className="mx-auto max-w-5xl container-padding">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl mb-6">
              Book Your Free Consultation
            </h2>
            <p className="text-xl text-gray-600 mb-4 max-w-3xl mx-auto">
              Choose a time that works for you below.
            </p>
          </div>
          
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="p-8 text-center">
              <div className="mb-8">
                <p className="text-gray-600 max-w-2xl mx-auto">
                  We&apos;ll discuss your current workflow, identify time-wasters, 
                  and create a personalized AI action plan—all in a short consultation, completely free.
                </p>
              </div>
              
              {/* Calendly inline widget begin */}
              <div 
                className="calendly-inline-widget" 
                data-url="https://calendly.com/g-hansen17/30min" 
                style={{ minWidth: '320px', height: '700px' }}
              />
              {/* Calendly inline widget end */}
              
              {/* Alternative contact */}
              <div className="text-center">
                <p className="text-gray-600 mb-4">Prefer to email instead?</p>
                <a
                  href="mailto:contact@naxoai.com"
                  className="inline-flex items-center px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium rounded-xl transition-colors duration-200"
                  aria-label="Send email to contact@naxoai.com"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  contact@naxoai.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}