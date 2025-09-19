'use client'

import { useState, useId } from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

interface ShowMoreProps {
  trigger: string
  children: React.ReactNode
  className?: string
  triggerClassName?: string
  contentClassName?: string
  defaultOpen?: boolean
}

export default function ShowMore({ 
  trigger, 
  children, 
  className = '',
  triggerClassName = '',
  contentClassName = '',
  defaultOpen = false
}: ShowMoreProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)
  const uniqueId = useId()

  const toggleOpen = () => setIsOpen(!isOpen)

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      toggleOpen()
    }
  }

  return (
    <div className={className}>
      <button
        onClick={toggleOpen}
        onKeyDown={handleKeyDown}
        className={`inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded-md px-2 py-1 ${triggerClassName}`}
        aria-expanded={isOpen}
        aria-controls={`showmore-content-${uniqueId}`}
        id={`showmore-trigger-${uniqueId}`}
      >
        <span>{trigger}</span>
        <ChevronDownIcon 
          className={`w-4 h-4 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`} 
        />
      </button>
      
      <div
        id={`showmore-content-${uniqueId}`}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}
        role="region"
        aria-labelledby={`showmore-trigger-${uniqueId}`}
      >
        <div className={contentClassName}>
          {children}
        </div>
      </div>
    </div>
  )
}
