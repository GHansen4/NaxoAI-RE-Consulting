'use client'

import Accordion from './ui/Accordion'

const faqs = [
  {
    question: "Do I need to know how to code?",
    answer: "No. I handle the setup; you just use the tools."
  },
  {
    question: "What tools do you use?",
    answer: "Whatever fits your workflow—typically Calendly, Google apps, DocuSign/Dropbox, plus simple AI apps. No lock-in."
  },
  {
    question: "How fast will I see results?",
    answer: "Often within days. Listing copy, chatbots, and follow-ups can go live quickly."
  },
  {
    question: "How is this different from a marketing agency?",
    answer: "Agencies produce content. I install repeatable systems that reduce weekly admin work."
  },
  {
    question: "Can you work with teams or brokerages?",
    answer: "Yes. We can start with one agent and scale to the office."
  },
  {
    question: "What will I get from the free consultation?",
    answer: "A personalized AI action plan, a timeline, and recommended tools."
  },
  {
    question: "What if I don't know where to start?",
    answer: "Bring your biggest time drain. We'll find a quick win."
  },
  {
    question: "Do you offer a paid diagnostic?",
    answer: "Yes—$149 for a 60-minute audit with a 1-page action plan. If you move forward with implementation within 14 days, the fee is credited."
  },
  {
    question: "How do you handle Fair Housing compliance?",
    answer: "We use non-discriminatory templates and avoid prohibited terms. You have final review; we can adapt copy to your brokerage guidelines."
  },
  {
    question: "What's your no-show policy?",
    answer: "Free consults: one reschedule allowed. Paid diagnostics: refundable if canceled 24 hours before; otherwise credited toward future work."
  }
]

export default function FAQSection() {
  return (
    <section id="faq" className="scroll-mt-28 md:scroll-mt-32 py-7 sm:py-8 lg:py-10 bg-gray-50">
      <div className="mx-auto max-w-4xl container-padding">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl lg:text-3xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Get answers to the most common questions about AI consulting for real estate agents.
          </p>
        </div>
        
        <Accordion items={faqs} allowMultiple={true} />
        
        <div className="text-center mt-8">
          <p className="text-sm text-slate-500">
            Still have questions? Email me directly: <a href="mailto:contact@naxoai.com" className="text-primary-600 hover:text-primary-700 transition-colors">contact@naxoai.com</a>
          </p>
        </div>
        
      </div>
    </section>
  )
}
