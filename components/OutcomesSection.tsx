'use client'

import React from 'react'
import { 
  ClockIcon,
  UserPlusIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'
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
    icon: ClockIcon,
    title: "Save 5+ hours/week",
    subtitle: "Automate admin so you can stay in front of clients.",
    proofChip: "~5+ hrs/week back",
    bullets: [
      "MLS-ready listing descriptions in minutes",
      "Call notes → CRM summaries you can paste"
    ]
  },
  {
    icon: UserPlusIcon,
    title: "Never miss a hot lead",
    subtitle: "Follow-ups go out on time; warm leads bubble up to you.",
    proofChip: "+30–50% replies",
    bullets: [
      "Same-day follow-ups after open houses",
      "Simple sequences for new inquiries"
    ]
  },
  {
    icon: SparklesIcon,
    title: "Look professional, everywhere",
    subtitle: "Polished copy and consistent tone across channels.",
    proofChip: "Launch in days",
    bullets: [
      "Listing captions & variations in one click",
      "Consistent tone across channels"
    ]
  }
]

export default function OutcomesSection() {
  return (
    <section id="outcomes" className="scroll-mt-28 md:scroll-mt-32 py-7 sm:py-8 lg:py-10 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection className="text-center mb-6 sm:mb-8">
          <h2 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl lg:text-3xl">
            Real results agents care about.
          </h2>
          <p className="mt-3 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Shorten the busywork and focus on clients. Here's what you'll notice first.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6 mb-6 sm:mb-8">
          {outcomeData.map((outcome, index) => (
            <AnimatedSection key={index} delay={index * 100 + 200}>
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-5 hover:shadow-md transition-all duration-200 hover:-translate-y-1 h-full flex flex-col">
                <div className="flex items-center justify-center w-12 h-12 bg-slate-50 rounded-xl mb-3">
                  <outcome.icon className="w-6 h-6 text-slate-500" aria-hidden="true" />
                </div>
                
                <h3 className="text-lg font-semibold text-slate-900 mb-1 sm:text-xl">
                  {outcome.title}
                </h3>
                
                <span className="inline-flex px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200 text-xs font-medium mt-1 mb-3 self-start">
                  {outcome.proofChip}
                </span>
                
                <p className="text-slate-600 mb-3 text-sm leading-relaxed">
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
            All with proven, no-code tools—we set them up for you.
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
