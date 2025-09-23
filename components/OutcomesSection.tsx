'use client'

import React from 'react'
import { IconChipValueProp, Clock, NotificationBell, BadgeStar } from '@/components/ui/Icons'
import CalendlyButton from './CalendlyButton'
import AnimatedSection from './AnimatedSection'

interface OutcomeCard {
  icon: React.ComponentType<{ className?: string }>
  title: string
  subtitle: string
  proofChip: string
  bullets: string[]
}

const outcomeData: OutcomeCard[] = [
  {
    icon: Clock,
    title: "Win back 5+ hours every week",
    subtitle: "Stop drowning in admin. Let AI handle the busywork so you can focus on clients.",
    proofChip: "Time savings",
    bullets: [
      "MLS-ready listing descriptions in minutes",
      "Call notes → CRM summaries auto-filled"
    ]
  },
  {
    icon: NotificationBell,
    title: "Follow up—before your competition does",
    subtitle: "Agents using AI see 30–50% higher reply rates.",
    proofChip: "Higher reply rates",
    bullets: [
      "Instant responses, even after hours",
      "Professional sequences for every new inquiry"
    ]
  },
  {
    icon: BadgeStar,
    title: "Stand out with polished, on-brand content",
    subtitle: "Launch AI-powered marketing in just days.",
    proofChip: "Launch in days",
    bullets: [
      "One-click listing captions & variations",
      "Consistent tone across every channel"
    ]
  }
]

export default function OutcomesSection() {
  return (
    <section id="outcomes" className="scroll-mt-28 md:scroll-mt-32 py-16 lg:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection className="text-center mb-6 sm:mb-8">
          <h2 className="text-xl font-bold tracking-tight text-primary-900 sm:text-2xl lg:text-3xl">
            Turn AI into your unfair advantage.
          </h2>
          <p className="mt-3 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Free up hours, never miss a lead, and wow clients—starting this week.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 mb-6 sm:mb-8">
          {outcomeData.map((outcome, index) => (
            <AnimatedSection key={index} delay={index * 100 + 200}>
              <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 sm:p-6 hover:shadow-md transition-all duration-200 hover:-translate-y-1 h-full flex flex-col">
                {index === 0 ? (
                  <IconChipValueProp><Clock className="h-7 w-7 md:h-8 md:w-8" /></IconChipValueProp>
                ) : index === 1 ? (
                  <IconChipValueProp><NotificationBell className="h-7 w-7 md:h-8 md:w-8" /></IconChipValueProp>
                ) : (
                  <IconChipValueProp><BadgeStar className="h-7 w-7 md:h-8 md:w-8" /></IconChipValueProp>
                )}
                
                <h3 className="font-semibold text-primary-900 mb-3">
                  {outcome.title}
                </h3>
                
                <span className="inline-flex px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200 text-xs font-medium mb-3 self-start">
                  {outcome.proofChip}
                </span>
                
                <p className="text-sm text-slate-600 leading-6 mb-3">
                  {outcome.subtitle}
                </p>
                
                <ul className="space-y-1.5 flex-grow">
                  {outcome.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="flex items-start text-sm text-slate-600">
                      <span className="inline-block w-1.5 h-1.5 bg-slate-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Footer content */}
        <div className="text-center space-y-4">
          <p className="text-sm text-slate-600">
            See exactly how many hours AI can save you this month.
          </p>
          <p className="text-xs text-slate-500">
            All with proven, tools we set up for you.
          </p>
          
          <CalendlyButton className="btn-primary text-lg px-8 py-4 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200">
            Get your free AI consultation
          </CalendlyButton>
          
          <p className="text-sm text-slate-500 mt-4">
            Prefer email? <a href="mailto:contact@naxoai.com" className="text-primary-600 hover:text-primary-700 transition-colors">contact@naxoai.com</a>
          </p>
        </div>
      </div>
    </section>
  )
}
