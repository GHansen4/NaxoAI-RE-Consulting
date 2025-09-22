'use client'

import React from 'react'
import { 
  MagnifyingGlassIcon,
  CogIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline'
import AnimatedSection from './AnimatedSection'

const processSteps = [
  {
    icon: MagnifyingGlassIcon,
    label: "Discovery",
    title: "Discovery (45 min)",
    description: "identify your biggest time drains."
  },
  {
    icon: CogIcon,
    label: "Setup",
    title: "Setup (days, not weeks)",
    description: "we configure the no-code tools."
  },
  {
    icon: ChartBarIcon,
    label: "Results",
    title: "Results & tune",
    description: "you use the tools; we refine together."
  }
]

export default function ProcessStrip() {
  return (
    <section className="py-8 sm:py-10 bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <AnimatedSection className="text-center mb-6">
          <h3 className="text-lg font-semibold text-slate-900 sm:text-xl">
            How it works
          </h3>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {processSteps.map((step, index) => (
            <AnimatedSection key={index} delay={index * 100 + 200}>
              <div className="bg-white rounded-xl p-5 border border-slate-200 text-center">
                <div className="flex items-center justify-center w-10 h-10 bg-slate-50 rounded-xl mx-auto mb-3">
                  <step.icon className="w-5 h-5 text-slate-500" aria-hidden="true" />
                </div>
                <div className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-1">
                  {step.label}
                </div>
                <h4 className="text-sm font-semibold text-slate-900 mb-1">
                  {step.title}
                </h4>
                <p className="text-sm text-slate-600">
                  {step.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
        
        {/* Diagnostic & Action Plan Option */}
        <AnimatedSection delay={400}>
          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl border border-blue-200 bg-blue-50/80 shadow-sm backdrop-blur p-5 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h4 className="text-lg font-semibold text-slate-900">
                    Diagnostic & Action Plan — <span className="text-slate-700">$149</span>
                  </h4>
                  <p className="mt-1 text-sm text-slate-600">
                    60-minute audit to pinpoint your biggest time-savers. Fee is credited if you move
                    forward with implementation within 14 days.
                  </p>
                  <ul className="mt-3 text-sm text-slate-700 space-y-1">
                    <li>• 1-page action plan with priorities</li>
                    <li>• Tool recommendations that fit what you already use</li>
                    <li>• Quick-win checklist to start right away</li>
                  </ul>
                  <p className="mt-2 text-xs text-slate-500">
                    No contracts. Clear deliverables. Hands-on guidance.
                  </p>
                </div>

                {process.env.NEXT_PUBLIC_CALENDLY_DIAGNOSTIC_URL ? (
                  <div className="shrink-0">
                    <a
                      href={process.env.NEXT_PUBLIC_CALENDLY_DIAGNOSTIC_URL}
                      className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                    >
                      Book Paid Diagnostic
                    </a>
                    <p className="mt-2 text-[11px] text-slate-500 text-center">
                      Credited toward implementation (14 days).
                    </p>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
