'use client'

import { IconChip, DocCheck, WrenchKit, ShieldCheck } from '@/components/ui/Icons'
import AnimatedSection from './AnimatedSection'
import CalendlyButton from './CalendlyButton'

export default function PricingSection() {
  return (
    <section id="pricing" className="scroll-mt-28 md:scroll-mt-32 section-spacing-large bg-white">
      <div className="mx-auto max-w-7xl container-padding">
        <AnimatedSection className="text-center mb-6 sm:mb-8">
          <h2 className="responsive-text-2xl font-bold tracking-tight text-gray-900">
            Simple, transparent pricing.
          </h2>
          <p className="mt-3 sm:mt-4 responsive-text-lg text-gray-600 max-w-2xl mx-auto">
            No surprise fees, no long-term contracts. Just honest pricing for real results.
          </p>
        </AnimatedSection>
        
        <div className="max-w-2xl mx-auto">
          {/* Subtle section panel */}
          <div className="bg-slate-50/60 rounded-3xl p-4 md:p-6">
            {/* Main pricing card */}
            <aside className="rounded-2xl border border-gray-100 bg-white shadow-md p-6 sm:p-8">
            {/* 1. Plan + Price */}
            <div className="text-center mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Pay-as-you-go consulting
              </h3>
              <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-1">
                $199/hour
              </div>
              <p className="text-sm text-gray-500">
                First consultation is free
              </p>
            </div>

            {/* 2. Key Benefits */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <IconChip><DocCheck className="h-6 w-6" /></IconChip>
                <span className="text-gray-700">Actionable AI plan customized to your business</span>
              </div>
              <div className="flex items-center space-x-3">
                <IconChip><WrenchKit className="h-6 w-6" /></IconChip>
                <span className="text-gray-700">Hands-on setup & support</span>
              </div>
              <div className="flex items-center space-x-3">
                <IconChip><ShieldCheck className="h-6 w-6" /></IconChip>
                <span className="text-gray-700">No contracts, no hidden fees</span>
              </div>
            </div>

            {/* 3. What's included */}
            <div className="mb-8">
              <h4 className="font-semibold text-gray-900 mb-4">What&apos;s included</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-600">
                <div className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>1:1 consultation call</span>
                </div>
                <div className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Personalized workflows</span>
                </div>
                <div className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Tools & integrations setup</span>
                </div>
                <div className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Call notes → CRM summaries</span>
                </div>
                <div className="flex items-start md:col-span-2">
                  <span className="inline-block w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Ongoing recommendations</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
                    <CalendlyButton className="inline-flex items-center justify-center bg-accent-600 text-white rounded-xl shadow-sm hover:bg-accent-700 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:ring-offset-2 px-6 py-3 text-sm font-medium transition-colors duration-200">
                Schedule your free consultation
              </CalendlyButton>
            </div>
          </aside>
          </div>
        </div>
        
        {/* Additional trust elements */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-6 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 12l2 2 4-4"/>
              </svg>
              <span>No contracts</span>
            </div>
            <div className="w-px h-4 bg-gray-300"></div>
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 12l2 2 4-4"/>
              </svg>
              <span>No hidden fees</span>
            </div>
            <div className="w-px h-4 bg-gray-300"></div>
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 12l2 2 4-4"/>
              </svg>
              <span>Technical setup included</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
