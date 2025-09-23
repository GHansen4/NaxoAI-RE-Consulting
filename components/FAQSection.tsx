'use client'

import React from 'react'
import AnimatedSection from './AnimatedSection'
import Accordion from './ui/Accordion'

const faqs = [
  {
    question: "Do I need to know how to code?",
    answer: "Nope. You just use the tools—I handle the setup."
  },
  {
    question: "What tools do you use?",
    answer: "Whatever fits your workflow. Common ones are Calendly, and Google Workspace."
  },
  {
    question: "How fast will I see results?",
    answer: "Usually within days. Listing descriptions, chatbots, and follow-ups can go live quickly."
  },
  {
    question: "How is this different from a marketing agency?",
    answer: "Agencies make content. We build repeatable systems that cut down your weekly busywork."
  },
  {
    question: "Can you work with teams or brokerages?",
    answer: "Yes. We can start with one agent and scale to the whole office."
  },
  {
    question: "What will I get from the free consultation?",
    answer: "A clear AI action plan, recommended tools, and a timeline. If you want a deeper dive, I also offer a paid diagnostic that includes a full audit and 1-page action plan (credited if you move forward)."
  },
  {
    question: "What if I don't know where to start?",
    answer: "Just bring your biggest time drain—we'll find a quick win."
  },
  {
    question: "Will this replace me or my staff?",
    answer: "No. AI is here to handle the busywork so you and your team can focus on clients and closings."
  },
  {
    question: "How much ongoing support do you provide?",
    answer: "I stay available for tweaks, updates, and questions. You won't be left hanging after setup."
  },
  {
    question: "How do you handle Fair Housing compliance?",
    answer: "We use neutral, compliant templates and avoid prohibited terms. You'll always have final review, and we can adapt to your brokerage's rules."
  }
]

export default function FAQSection() {
  return (
    <section id="faq" className="scroll-mt-28 md:scroll-mt-32 py-16 lg:py-20 bg-gray-50">
      <div className="mx-auto max-w-4xl container-padding">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl lg:text-3xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 sm:mt-4 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about AI consulting for real estate agents.
          </p>
        </div>
        
        <AnimatedSection delay={200}>
          <Accordion items={faqs} />
        </AnimatedSection>
      </div>
    </section>
  )
}