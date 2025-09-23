'use client'

import React, { useState, useId } from 'react'
import { 
  DocumentTextIcon, 
  ChatBubbleLeftRightIcon, 
  UserPlusIcon, 
  CameraIcon, 
  PuzzlePieceIcon,
  DocumentMagnifyingGlassIcon
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import CalendlyButton from './CalendlyButton'
import AnimatedSection from './AnimatedSection'

interface PainSolutionCard {
  icon: React.ComponentType<{ className?: string }>
  pain: string
  solution: string
  proofChip: string
  bullets: string[]
  color: string
}

const painSolutionData: PainSolutionCard[] = [
  {
    icon: DocumentTextIcon,
    pain: "MLS descriptions taking too long to write.",
    solution: "AI drafts MLS-ready copy quickly. You approve; we tune tone once.",
    proofChip: "Save significant time",
    bullets: ["SEO-aware language", "Style matched to your brand"],
    color: "blue"
  },
  {
    icon: ChatBubbleLeftRightIcon,
    pain: "Manually chasing every open-house lead.",
    solution: "Automatic follow-ups go out same day; warm leads bubble up to you.",
    proofChip: "+30–50% replies",
    bullets: ["Templates you can edit", "No new app to learn"],
    color: "green"
  },
  {
    icon: UserPlusIcon,
    pain: "Following up with dozens of prospects one by one.",
    solution: "Lightweight sequences for hot/warm leads; you only write the first template.",
    proofChip: "Save daily time",
    bullets: ["Pause/resume per contact", "Works with your CRM"],
    color: "purple"
  },
  {
    icon: CameraIcon,
    pain: "Weekend time drained by marketing posts.",
    solution: "Instant listing captions + variations (IG/FB), scheduled in one go.",
    proofChip: "Quick posts",
    bullets: ["Hashtags auto-suggested", "Consistent tone"],
    color: "pink"
  },
  {
    icon: PuzzlePieceIcon,
    pain: "Too many apps; none easy to set up.",
    solution: "We assemble a technical stack that works together. You just use it.",
    proofChip: "Setup handled for you",
    bullets: ["Clear handoff", "No contracts"],
    color: "indigo"
  },
  {
    icon: DocumentMagnifyingGlassIcon,
    pain: "Notes scattered across email & texts.",
    solution: "Call notes auto-summarized into your CRM + global document search.",
    proofChip: "Find anything fast",
    bullets: ["Key prefs captured", "Next steps highlighted"],
    color: "teal"
  }
]

const colorClasses = {
  blue: {
    bg: "bg-blue-50",
    icon: "text-blue-600",
    border: "border-blue-200"
  },
  green: {
    bg: "bg-green-50",
    icon: "text-green-600",
    border: "border-green-200"
  },
  purple: {
    bg: "bg-purple-50",
    icon: "text-purple-600",
    border: "border-purple-200"
  },
  pink: {
    bg: "bg-pink-50",
    icon: "text-pink-600",
    border: "border-pink-200"
  },
  indigo: {
    bg: "bg-indigo-50",
    icon: "text-indigo-600",
    border: "border-indigo-200"
  },
  teal: {
    bg: "bg-teal-50",
    icon: "text-teal-600",
    border: "border-teal-200"
  }
}

interface PainSolutionCardProps {
  card: PainSolutionCard
  index: number
  isOpen: boolean
  onToggle: () => void
  isMobile: boolean
}

function PainSolutionCardComponent({ card, index, isOpen, onToggle, isMobile }: PainSolutionCardProps) {
  const uniqueId = useId()
  const contentId = `pain-solution-content-${uniqueId}-${index}`
  const buttonId = `pain-solution-button-${uniqueId}-${index}`
  
  const colors = colorClasses[card.color as keyof typeof colorClasses] || colorClasses.blue

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-200 hover:shadow-md">
      <button
        id={buttonId}
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={contentId}
        className="w-full p-4 text-left focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-inset min-h-[44px] flex items-start justify-between"
      >
        <div className="flex items-start space-x-3 flex-1">
          <div className={`flex items-center justify-center w-10 h-10 ${colors.bg} rounded-lg flex-shrink-0`}>
            <card.icon className={`w-5 h-5 ${colors.icon}`} />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-semibold text-gray-900 leading-tight pr-2">
              {card.pain}
            </h3>
          </div>
        </div>
        <div className="flex items-center space-x-2 flex-shrink-0">
          {!isOpen && (
            <span className="text-xs text-gray-500 hidden sm:inline">See solution</span>
          )}
          <ChevronDownIcon 
            className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`} 
          />
        </div>
      </button>
      
      <div
        id={contentId}
        aria-labelledby={buttonId}
        className={`overflow-hidden transition-all duration-250 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
        role="region"
      >
        <div className="px-4 pb-4">
          <div className="border-t border-gray-100 pt-3">
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-700 font-medium mb-2">
                  {card.solution}
                </p>
                <span className="inline-flex items-center rounded-full bg-gray-50 px-2.5 py-1 text-xs font-medium text-gray-700 border border-gray-200">
                  {card.proofChip}
                </span>
              </div>
              
              <ul className="space-y-1">
                {card.bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex} className="flex items-start text-xs text-gray-600">
                    <span className="inline-block w-1 h-1 bg-gray-400 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function PainSolutionSection() {
  const [openCards, setOpenCards] = useState<Set<number>>(new Set([0])) // First card open by default
  const [isMobile, setIsMobile] = useState(false)

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768) // md breakpoint
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleToggle = (index: number) => {
    if (isMobile) {
      // Mobile: single-open accordion
      setOpenCards(new Set(openCards.has(index) ? [] : [index]))
    } else {
      // Desktop: multiple cards can be open
      const newOpenCards = new Set(openCards)
      if (newOpenCards.has(index)) {
        newOpenCards.delete(index)
      } else {
        newOpenCards.add(index)
      }
      setOpenCards(newOpenCards)
    }
  }

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection className="text-center mb-8 sm:mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Common agent headaches — and how we fix them.
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Stop wasting hours on repetitive tasks. See exactly how AI solves your biggest time drains.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10">
          {painSolutionData.map((card, index) => (
            <AnimatedSection key={index} delay={index * 100 + 200}>
              <PainSolutionCardComponent
                card={card}
                index={index}
                isOpen={openCards.has(index)}
                onToggle={() => handleToggle(index)}
                isMobile={isMobile}
              />
            </AnimatedSection>
          ))}
        </div>

        {/* Footer content */}
        <div className="text-center space-y-6">
          <p className="text-sm text-gray-600">
            All with proven, enterprise-grade tools—technical setup handled.
          </p>
          
          <CalendlyButton className="btn-primary text-lg px-8 py-4 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200">
            Book Free Consultation — Start Saving Time
          </CalendlyButton>
        </div>
      </div>
    </section>
  )
}
