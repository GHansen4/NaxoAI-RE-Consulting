'use client'

import { useState, useId } from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

interface AccordionItemProps {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
  id: string
}

function AccordionItem({ question, answer, isOpen, onToggle, id }: AccordionItemProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-200 hover:shadow-md">
      <button
        onClick={onToggle}
        className="w-full px-5 py-5 text-left flex items-center justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2"
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${id}`}
        id={`accordion-trigger-${id}`}
      >
        <h3 className="text-lg font-semibold text-primary-900 pr-4">
          {question}
        </h3>
        <div className="flex-shrink-0">
          <ChevronDownIcon 
            className={`w-6 h-6 text-gray-400 transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`} 
          />
        </div>
      </button>
      
      <div
        id={`accordion-content-${id}`}
        aria-labelledby={`accordion-trigger-${id}`}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
        role="region"
      >
        <div className="px-5 pb-5">
          <div className="border-t border-gray-100 pt-3">
            <p className="text-slate-600 leading-relaxed text-base">
              {answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

interface AccordionProps {
  items: Array<{ question: string; answer: string }>
  allowMultiple?: boolean
  className?: string
}

export default function Accordion({ items, allowMultiple = false, className = '' }: AccordionProps) {
  const [openItems, setOpenItems] = useState<number[]>([])
  const baseId = useId()

  const toggleItem = (index: number) => {
    if (allowMultiple) {
      setOpenItems(prev => 
        prev.includes(index) 
          ? prev.filter(i => i !== index)
          : [...prev, index]
      )
    } else {
      setOpenItems(prev => 
        prev.includes(index) ? [] : [index]
      )
    }
  }

  const handleKeyDown = (event: React.KeyboardEvent, index: number) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      toggleItem(index)
    }
  }

  return (
    <div className={`space-y-4 ${className}`}>
      {items.map((item, index) => (
        <div
          key={index}
          onKeyDown={(e) => handleKeyDown(e, index)}
        >
          <AccordionItem
            question={item.question}
            answer={item.answer}
            isOpen={openItems.includes(index)}
            onToggle={() => toggleItem(index)}
            id={`${baseId}-${index}`}
          />
        </div>
      ))}
    </div>
  )
}
