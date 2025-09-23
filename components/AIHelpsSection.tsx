'use client'

import React from 'react'
import { 
  DocumentTextIcon, 
  ChatBubbleLeftRightIcon, 
  UserPlusIcon, 
  CameraIcon, 
  ClipboardDocumentListIcon, 
  FolderOpenIcon
} from '@heroicons/react/24/outline'
import ShowMore from './ui/ShowMore'
import CalendlyButton from './CalendlyButton'
import { Feature } from '@/types'

const CORE_FEATURES: Feature[] = [
  {
    icon: DocumentTextIcon,
    title: "MLS-ready listing descriptions — drafted in seconds.",
    description: "Turn property details into compelling, SEO-optimized descriptions that highlight key selling points and attract qualified buyers."
  },
  {
    icon: ChatBubbleLeftRightIcon,
    title: "Website chatbot — answers buyer & seller FAQs 24/7.",
    description: "Capture leads around the clock with an AI assistant that provides instant responses about listings, neighborhoods, and processes."
  },
  {
    icon: UserPlusIcon,
    title: "Open-house follow-ups — automatic, no leads missed.",
    description: "Send personalized follow-up messages to every visitor within hours, keeping your listings top-of-mind while leads are hot."
  },
  {
    icon: CameraIcon,
    title: "Instagram captions — for new listings, instantly.",
    description: "Generate engaging social media content with trending hashtags and compelling copy that drives engagement and inquiries."
  },
  {
    icon: ClipboardDocumentListIcon,
    title: "Call notes → CRM summaries — ready to paste.",
    description: "Automatically extract key points, preferences, and action items from calls and meetings to stay organized and responsive."
  },
  {
    icon: FolderOpenIcon,
    title: "Search contracts & docs — no more inbox hunting.",
    description: "AI-powered document management that finds any file, contract detail, or client note in seconds with natural language search."
  }
]

const ADDITIONAL_FEATURES: Feature[] = [
  {
    icon: DocumentTextIcon,
    title: "Create market analysis reports.",
    description: "Quickly generate comprehensive market analysis reports to inform clients and guide pricing strategies."
  },
  {
    icon: UserPlusIcon,
    title: "Auto-respond to Zillow inquiries.",
    description: "Never miss a lead with automated responses that capture contact information and schedule viewings."
  },
  {
    icon: CameraIcon,
    title: "Generate virtual tour scripts.",
    description: "Create engaging scripts for virtual property tours that highlight key features and benefits."
  }
]

function FeatureCard({ feature }: { feature: Feature }) {
  const Icon = feature.icon
  
  return (
    <div className="group relative bg-white rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-gray-200">
      {/* Icon */}
      <div className="flex items-center justify-center w-12 h-12 bg-primary-50 group-hover:bg-primary-100 rounded-xl mb-6 transition-colors duration-300">
        <Icon className="w-6 h-6 text-primary-600" />
      </div>
      
      {/* Content */}
      <h3 className="text-xl font-semibold text-gray-900 mb-3 leading-tight">
        {feature.title}
      </h3>
      <p className="text-gray-600 leading-relaxed">
        {feature.description}
      </p>
      
      {/* Hover effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-50/0 to-primary-50/0 group-hover:from-primary-50/20 group-hover:to-primary-100/20 transition-all duration-300 pointer-events-none" />
    </div>
  )
}

export default function AIHelpsSection() {
  return (
    <section className="section-spacing bg-white">
      <div className="mx-auto max-w-7xl container-padding">
        <div className="text-center mb-6 sm:mb-8">
          <div className="neutral-chip mb-4">
            <span>Professional AI solutions for real estate.</span>
          </div>
          <h2 className="responsive-text-2xl font-bold tracking-tight text-gray-900">
            Professional AI solutions for real estate.
          </h2>
          <p className="mt-2 sm:mt-3 responsive-text-lg text-gray-600 max-w-2xl mx-auto">
            Stop spending hours on repetitive tasks. Let AI handle the busywork while you focus on what matters most: building relationships and closing deals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 mb-8">
          {CORE_FEATURES.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>

        <div className="text-center mb-8">
          <p className="text-sm text-gray-600 mb-2">
            <span className="font-medium text-gray-900">Example:</span> MLS copy drafted quickly instead of taking much longer.
          </p>
          <p className="text-xs text-gray-500">
            All with proven, enterprise-grade tools—technical setup handled.
          </p>
        </div>
        
        <ShowMore 
          trigger="See more capabilities" 
          className="text-center"
          triggerClassName="inline-flex items-center px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-xl transition-colors duration-200"
        >
          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 mt-8">
            {ADDITIONAL_FEATURES.map((feature, index) => (
              <FeatureCard key={index} feature={feature} />
            ))}
          </div>
        </ShowMore>
        
        <div className="text-center mt-12">
          <CalendlyButton className="btn-primary text-lg px-8 py-4 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200">
            Get your free AI consultation
          </CalendlyButton>
          <p className="text-sm text-gray-500 mt-4">
            Prefer email? <a href="mailto:contact@naxoai.com" className="text-primary-600 hover:text-primary-700 transition-colors">contact@naxoai.com</a>
          </p>
        </div>
      </div>
    </section>
  )
}