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
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
      </div>
    </section>
  )
}
