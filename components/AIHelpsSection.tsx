'use client'

import React from 'react'
import { 
  DocumentTextIcon, 
  ChatBubbleLeftRightIcon, 
  UserPlusIcon, 
  CameraIcon, 
  ClipboardDocumentListIcon, 
  FolderOpenIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'
import ShowMore from './ui/ShowMore'
import CalendlyButton from './CalendlyButton'

// Simplified and type-safe feature data structure
interface Feature {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  colorKey: keyof typeof COLOR_STYLES
}

// Centralized color styles - no dynamic class names
const COLOR_STYLES = {
  blue: {
    bg: 'bg-blue-50',
    hover: 'group-hover:bg-blue-100',
    icon: 'text-blue-600',
    gradient: 'group-hover:from-blue-50/20 group-hover:to-blue-100/20'
  },
  green: {
    bg: 'bg-green-50',
    hover: 'group-hover:bg-green-100', 
    icon: 'text-green-600',
    gradient: 'group-hover:from-green-50/20 group-hover:to-green-100/20'
  },
  purple: {
    bg: 'bg-purple-50',
    hover: 'group-hover:bg-purple-100',
    icon: 'text-purple-600', 
    gradient: 'group-hover:from-purple-50/20 group-hover:to-purple-100/20'
  },
  pink: {
    bg: 'bg-pink-50',
    hover: 'group-hover:bg-pink-100',
    icon: 'text-pink-600',
    gradient: 'group-hover:from-pink-50/20 group-hover:to-pink-100/20'
  },
  indigo: {
    bg: 'bg-indigo-50',
    hover: 'group-hover:bg-indigo-100',
    icon: 'text-indigo-600',
    gradient: 'group-hover:from-indigo-50/20 group-hover:to-indigo-100/20'
  },
  teal: {
    bg: 'bg-teal-50',
    hover: 'group-hover:bg-teal-100',
    icon: 'text-teal-600',
    gradient: 'group-hover:from-teal-50/20 group-hover:to-teal-100/20'
  }
} as const

const CORE_FEATURES: Feature[] = [
  {
    icon: DocumentTextIcon,
    title: "MLS-ready listing descriptions — drafted in seconds.",
    description: "Turn property details into compelling, SEO-optimized descriptions that highlight key selling points and attract qualified buyers.",
    colorKey: "blue"
  },
  {
    icon: ChatBubbleLeftRightIcon,
    title: "Website chatbot — answers buyer & seller FAQs 24/7.",
    description: "Capture leads around the clock with an AI assistant that provides instant responses about listings, neighborhoods, and processes.",
    colorKey: "green"
  },
  {
    icon: UserPlusIcon,
    title: "Open-house follow-ups — automatic, no leads missed.",
    description: "Send personalized follow-up messages to every visitor within hours, keeping your listings top-of-mind while leads are hot.",
    colorKey: "purple"
  },
  {
    icon: CameraIcon,
    title: "Instagram captions — for new listings, instantly.",
    description: "Generate engaging social media content with trending hashtags and compelling copy that drives engagement and inquiries.",
    colorKey: "pink"
  },
  {
    icon: ClipboardDocumentListIcon,
    title: "Call notes → CRM summaries — ready to paste.",
    description: "Automatically extract key points, preferences, and action items from calls and meetings to stay organized and responsive.",
    colorKey: "indigo"
  },
  {
    icon: FolderOpenIcon,
    title: "Search contracts & docs — no more inbox hunting.",
    description: "AI-powered document management that finds any file, contract detail, or client note in seconds with natural language search.",
    colorKey: "teal"
  }
]

const ADDITIONAL_FEATURES: Feature[] = [
  {
    icon: DocumentTextIcon,
    title: "Create market analysis reports.",
    description: "Quickly generate comprehensive market analysis reports to inform clients and guide pricing strategies.",
    colorKey: "blue"
  },
  {
    icon: UserPlusIcon,
    title: "Auto-respond to Zillow inquiries.",
    description: "Never miss a lead with automated responses that capture contact information and schedule viewings.",
    colorKey: "green"
  },
  {
    icon: CameraIcon,
    title: "Generate virtual tour scripts.",
    description: "Create engaging scripts for virtual property tours that highlight key features and benefits.",
    colorKey: "purple"
  }
]

function FeatureCard({ feature }: { feature: Feature }) {
  const Icon = feature.icon
  const styles = COLOR_STYLES[feature.colorKey]
  
  return (
    <div className="group relative bg-white rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-gray-200 hover-lift">
      {/* Icon */}
      <div className={`flex items-center justify-center w-12 h-12 ${styles.bg} ${styles.hover} rounded-xl mb-6 transition-colors duration-300`}>
        <Icon className={`w-6 h-6 ${styles.icon}`} />
      </div>
      
      {/* Content */}
      <h3 className="text-xl font-semibold text-gray-900 mb-3 leading-tight">
        {feature.title}
      </h3>
      <p className="text-gray-600 leading-relaxed">
        {feature.description}
      </p>
      
      {/* Hover effect */}
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent to-transparent ${styles.gradient} transition-all duration-300 pointer-events-none`} />
    </div>
  )
}

export default function AIHelpsSection() {
  return (
    <section className="section-spacing bg-white">
      <div className="mx-auto max-w-7xl container-padding">
        <div className="text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center rounded-full bg-primary-50 px-4 py-2 text-sm font-medium text-primary-700 ring-1 ring-inset ring-primary-700/10 mb-6">
            <SparklesIcon className="w-4 h-4 mr-2" />
            <span>The Solution</span>
          </div>
          
          <h2 className="responsive-text-2xl font-bold tracking-tight text-gray-900">
            Practical, no-code AI for real estate.
          </h2>
          <p className="mt-3 sm:mt-4 responsive-text-lg text-gray-600 max-w-2xl mx-auto">
            Streamline your workflow, enhance client experience, and close more deals with tailored AI solutions.
          </p>
        </div>
        
        {/* Core Features - Always Visible */}
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {CORE_FEATURES.map((feature, index) => (
            <FeatureCard key={`core-${index}`} feature={feature} />
          ))}
        </div>

        {/* Additional Features - Expandable */}
        <div className="mt-8 text-center">
          <ShowMore 
            trigger="See more AI use cases" 
            className="text-center"
            triggerClassName="text-lg"
          >
            <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 mt-6">
              {ADDITIONAL_FEATURES.map((feature, index) => (
                <FeatureCard key={`additional-${index}`} feature={feature} />
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-gray-50 rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-2">Plus many more possibilities:</h4>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Draft email newsletters</li>
                <li>• Analyze competitor listings</li>
                <li>• Create custom property brochures</li>
                <li>• Generate client testimonial requests</li>
                <li>• Automate social media scheduling</li>
              </ul>
            </div>
          </ShowMore>
        </div>
        
        {/* Proof point and footnote */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-600 mb-2">
            <span className="font-medium text-gray-900">Example:</span> MLS copy drafted in ~2 minutes instead of 45.
          </p>
          <p className="text-xs text-gray-500">
            All with proven, out-of-the-box tools—no coding required.
          </p>
        </div>
        
        {/* CTA */}
        <div className="text-center mt-12">
          <CalendlyButton className="btn-primary text-lg px-8 py-4 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200">
            Get Your Free AI Consultation
          </CalendlyButton>
        </div>
      </div>
    </section>
  )
}