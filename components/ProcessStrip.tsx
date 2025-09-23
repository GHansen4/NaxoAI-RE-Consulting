'use client'

import React from 'react'
import { IconChip, MagnifierList, GearCheck, GraphUp } from '@/components/ui/Icons'
import AnimatedSection from './AnimatedSection'

const processSteps = [
  {
    icon: MagnifyingGlassIcon,
    label: "Discovery",
    title: "Discovery (consultation)",
    description: "identify your biggest time drains."
  },
  {
    icon: CogIcon,
    label: "Setup",
    title: "Setup (days, not weeks)",
    description: "we configure the technical systems."
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
    <section className="py-12 lg:py-16 bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <AnimatedSection className="text-center mb-6">
          <h3 className="text-lg font-semibold text-slate-900 sm:text-xl">
            How it works
          </h3>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 relative">
          {/* Connector line for md+ screens */}
          <div className="hidden md:block absolute top-8 left-1/3 right-1/3 h-0.5 bg-blue-100 z-0"></div>
          
          {processSteps.map((step, index) => (
            <AnimatedSection key={index} delay={index * 100 + 200}>
              <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 sm:p-6 text-center hover:shadow-md transition-shadow duration-200 relative z-10">
                {/* Step Number Badge */}
                <div className="h-8 w-8 rounded-full bg-blue-600 text-white text-sm font-medium flex items-center justify-center mx-auto mb-4">
                  {index + 1}
                </div>
                
                {index === 0 ? (
                  <IconChip><MagnifierList className="h-5 w-5" /></IconChip>
                ) : index === 1 ? (
                  <IconChip><GearCheck className="h-5 w-5" /></IconChip>
                ) : (
                  <IconChip><GraphUp className="h-5 w-5" /></IconChip>
                )}
                
                <div className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-2">
                  {step.label}
                </div>
                
                <h4 className="text-base font-semibold text-slate-900 mb-2">
                  {step.title}
                </h4>
                
                <p className="text-sm text-slate-600 leading-6">
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
