'use client'

import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import OutcomesSection from '@/components/OutcomesSection'
import ProcessStrip from '@/components/ProcessStrip'
import AboutSection from '@/components/AboutSection'
import PricingSection from '@/components/PricingSection'
import FAQSection from '@/components/FAQSection'
import FinalCTASection from '@/components/FinalCTASection'
import Footer from '@/components/Footer'

/**
 * Main page component - simplified and clean
 * Removed unnecessary prop drilling and dummy functions
 */
export default function Home() {
  return (
    <main id="main-content" className="min-h-screen">
      <Navigation />
      <HeroSection />
      <OutcomesSection />
      <ProcessStrip />
      <AboutSection />
      <PricingSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </main>
  )
}