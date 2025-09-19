'use client'

import { ClockIcon, UserGroupIcon, PhoneIcon, DevicePhoneMobileIcon, CogIcon, DocumentTextIcon } from '@heroicons/react/24/outline'
import AnimatedSection from './AnimatedSection'

const painPoints = [
  {
    icon: ClockIcon,
    title: "MLS descriptions taking 45+ minutes each.",
    description: "Every listing becomes a writing marathon, pulling you away from actually selling homes."
  },
  {
    icon: UserGroupIcon,
    title: "Manually chasing every open-house lead.",
    description: "Hot prospects slip through the cracks while you're busy with showings and appointments."
  },
  {
    icon: PhoneIcon,
    title: "Following up with dozens of prospects one by one.",
    description: "Your CRM is overflowing, but personal outreach takes forever and feels overwhelming."
  },
  {
    icon: DevicePhoneMobileIcon,
    title: "Weekend time drained by marketing posts.",
    description: "Sunday mornings spent crafting social media content instead of enjoying time with family."
  },
  {
    icon: CogIcon,
    title: "Too many apps; none easy to set up.",
    description: "You've tried every tool but they're complicated, expensive, or don't work together."
  },
  {
    icon: DocumentTextIcon,
    title: "Notes scattered across email and texts.",
    description: "Client preferences and important details lost in a maze of different platforms and conversations."
  }
]

export default function PainPointsSection() {
  return (
    <section className="section-spacing bg-gray-50">
      <div className="mx-auto max-w-7xl container-padding">
        <AnimatedSection className="text-center mb-4 sm:mb-6">
          <h2 className="responsive-text-2xl font-bold tracking-tight text-gray-900">
            Does this sound familiar?
          </h2>
          <p className="mt-2 sm:mt-3 responsive-text-lg text-gray-600 max-w-2xl mx-auto">
            You&apos;re not alone. These are the daily challenges that drain your energy and steal time from what really matters.
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {painPoints.map((painPoint, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-gray-200 hover-lift"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-12 h-12 bg-red-50 rounded-xl mb-6 group-hover:bg-red-100 transition-colors duration-300">
                <painPoint.icon className="w-6 h-6 text-red-600" />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3 leading-tight">
                {painPoint.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {painPoint.description}
              </p>
              
              {/* Hover effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-50/0 to-red-50/0 group-hover:from-red-50/20 group-hover:to-red-100/20 transition-all duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 font-medium">
            Sound exhausting? There&apos;s a better way. 👇
          </p>
        </div>
      </div>
    </section>
  )
}
