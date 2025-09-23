'use client'

import React from 'react'
import CalendlyButton from './CalendlyButton'
import AnimatedSection from './AnimatedSection'
import { ShieldStar } from '@/components/ui/Icons'

export default function FinalCTASection() {
  return (
    <section id="book" className="scroll-mt-28 md:scroll-mt-32 py-14 bg-slate-50">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <AnimatedSection>
          <h2 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl lg:text-3xl mb-6">
            Book your free consultation
          </h2>
          {/* Trust / Stat Strip */}
          <div className="mb-8">
            <div className="flex items-center justify-center gap-2 text-sm text-slate-600">
              <ShieldStar className="h-4 w-4 text-primary-600" aria-hidden="true" />
              <span>Trusted by agents across Wake County</span>
            </div>
            
            {/* Alternative stat options (commented) */}
            {/* <div className="flex items-center justify-center gap-2 text-sm text-slate-600">
              <svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <path d="m9 12 2 2 4-4"/>
              </svg>
              <span>Trusted by agents in the Raleigh area</span>
            </div> */}
            
            {/* <div className="flex items-center justify-center gap-2 text-sm text-slate-600">
              <svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M3 3v18h18"/>
                <path d="m19 9-5 5-4-4-3 3"/>
              </svg>
              <span>Hundreds of hours of busywork automated</span>
            </div> */}
            
            {/* Optional testimonial placeholder (commented) */}
            {/* <div className="mt-3 text-sm italic text-slate-500">
              "Greg made AI feel simple—and the follow-ups run themselves." — Local agent
            </div> */}
          </div>
          
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Choose a time that works for you below.
          </p>
          
                  <CalendlyButton className="inline-flex items-center justify-center bg-accent-600 text-white rounded-xl shadow-sm hover:bg-accent-700 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:ring-offset-2 px-8 py-4 text-lg font-medium transition-all duration-200 transform hover:-translate-y-0.5">
            Schedule your free consultation
          </CalendlyButton>
          
          {/* Optional diagnostic button */}
          {process.env.NEXT_PUBLIC_CALENDLY_DIAGNOSTIC_URL ? (
            <div className="mt-4">
              <a
                href={process.env.NEXT_PUBLIC_CALENDLY_DIAGNOSTIC_URL}
                className="inline-flex items-center rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
              >
                Book Paid Diagnostic — $149
              </a>
            </div>
          ) : null}
          
          {/* Alternative contact */}
          <div className="mt-8">
            <p className="text-slate-600 mb-4">Prefer to email instead?</p>
            <a
              href="mailto:contact@naxoai.com"
              className="inline-flex items-center px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium rounded-xl transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
              aria-label="Send email to contact@naxoai.com"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              contact@naxoai.com
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
