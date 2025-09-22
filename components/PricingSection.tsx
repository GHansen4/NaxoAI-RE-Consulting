'use client'

import { CheckIcon, PhoneIcon, ClockIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'
import { SparklesIcon } from '@heroicons/react/24/solid'
import AnimatedSection from './AnimatedSection'
import CalendlyButton from './CalendlyButton'

const features = [
  "First consultation call: Free",
  "After that: $199/hr for setup, training, and support",
  "No contracts. No hidden fees. No coding required."
]

const benefits = [
  "Setup & training included",
  "Light automations",
  "No contracts",
  "No hidden fees",
  "No coding required"
]

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
          {/* Main pricing card */}
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden relative">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-accent-blue/5"></div>
            
            <div className="relative p-6 sm:p-7 lg:p-11">
              {/* Header */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center rounded-full bg-primary-100 px-4 py-2 text-sm font-medium text-primary-800 mb-4">
                  <SparklesIcon className="w-4 h-4 mr-2" />
                  AI Consulting Services
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Pay-as-you-go consulting
                </h3>
                <p className="text-gray-600">
                  Start free, then invest in what works
                </p>
              </div>
              
              {/* Hourly rate */}
              <div className="text-center mb-8">
                <p className="text-slate-600 mb-4">
                  First consultation is on us.
                </p>
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <ClockIcon className="w-6 h-6 text-gray-400" />
                  <span className="text-lg text-gray-600">After your free consultation:</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-5xl font-bold text-slate-900">$199</span>
                  <div className="text-left">
                    <div className="text-lg font-medium text-gray-600">/hour</div>
                    <div className="text-sm text-gray-500">for setup, training & support</div>
                  </div>
                </div>
              </div>
              
              {/* Features list */}
              <div className="space-y-4 mb-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
              
              {/* What you'll walk away with */}
              <div className="mb-8">
                <h4 className="mt-6 font-semibold text-gray-900">What you'll walk away with</h4>
                <ul className="mt-2 space-y-1 text-sm text-gray-700">
                  <li>• A simple action plan you can reference</li>
                  <li>• Templates & checklists for common tasks</li>
                  <li>• Short Loom walkthrough for your setup</li>
                  <li>• 14-day support window for small tweaks</li>
                </ul>
                <p className="mt-3 text-xs text-gray-500">
                  Most clients see a tangible time-saver after the first session.
                </p>
              </div>
              
              {/* What's included */}
              <div className="bg-gray-50 rounded-2xl p-6 mb-8">
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <ShieldCheckIcon className="w-5 h-5 text-primary-600 mr-2" />
                  What&apos;s included:
                </h4>
                <div className="grid grid-cols-1 gap-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary-600 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* CTA */}
              <div className="text-center">
                <CalendlyButton className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white text-slate-800 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-400 px-8 py-4 text-lg w-full sm:w-auto transition-all duration-200">
                  Schedule your free consultation
                </CalendlyButton>
                <p className="mt-4 text-sm text-gray-500">
                  No commitment required.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Additional trust elements */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-6 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <CheckIcon className="w-4 h-4 text-green-500" />
              <span>No contracts</span>
            </div>
            <div className="w-px h-4 bg-gray-300"></div>
            <div className="flex items-center space-x-2">
              <CheckIcon className="w-4 h-4 text-green-500" />
              <span>No hidden fees</span>
            </div>
            <div className="w-px h-4 bg-gray-300"></div>
            <div className="flex items-center space-x-2">
              <CheckIcon className="w-4 h-4 text-green-500" />
              <span>No coding required</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
