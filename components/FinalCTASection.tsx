'use client'

import React from 'react'
import CalendlyButton from './CalendlyButton'
import AnimatedSection from './AnimatedSection'

export default function FinalCTASection() {
  return (
    <section id="book" className="scroll-mt-28 md:scroll-mt-32 py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-primary-50 to-white">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <AnimatedSection>
          <h2 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl lg:text-3xl mb-6">
            Book your free consultation
          </h2>
          <p className="text-xl text-slate-600 mb-4 max-w-2xl mx-auto leading-relaxed">
            Choose a time that works for you below.
          </p>
          <p className="mt-2 text-sm text-gray-600 mb-8 max-w-2xl mx-auto">
            Prefer a structured start? Book a 60-min <span className="font-medium">Paid Diagnostic</span> for $149 and get a 1-page action plan.
          </p>
          
          <CalendlyButton className="btn-primary text-lg px-8 py-4 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200">
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
