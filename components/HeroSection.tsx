'use client'

import CalendlyButton from './CalendlyButton'

/**
 * Simplified Hero section
 * Removed unused props and cleaned up structure
 */
export default function HeroSection() {
  return (
    <div id="hero-section" className="relative isolate px-6 pt-14 lg:px-8">
      {/* Background gradient */}
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-slate-100 to-slate-200 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
      </div>
      
      <div className="mx-auto max-w-7xl py-14 sm:py-18 lg:py-21">
        <div className="text-center">
          {/* Main headline */}
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl" style={{lineHeight: '1.15'}}>
            Let AI handle the busywork—so you can focus on closing deals
          </h1>
          
          {/* Sub-headline */}
          <p className="mt-6 text-lg leading-relaxed text-slate-600 max-w-2xl mx-auto sm:text-xl">
            AI consulting for real estate agents.
          </p>
          
          {/* Value promise */}
          <p className="mt-4 text-base leading-relaxed text-slate-600 max-w-2xl mx-auto font-medium">
            Walk away with a personalized AI action plan to save 5+ hours/week.
          </p>
          
          {/* Benefit chips */}
          <div className="mt-6 flex justify-center">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200 text-sm">
              No code • Local expertise • Fast setup
            </span>
          </div>
          
          {/* Primary CTA */}
          <div className="mt-10">
            <CalendlyButton className="btn-primary text-lg px-8 py-4 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200">
              Schedule your free consultation
            </CalendlyButton>
            <p className="mt-2 text-xs text-slate-500">
              Pick a time that works for you. No pressure.
            </p>
          </div>
          
        </div>
      </div>
      
      {/* Bottom background gradient */}
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-slate-200 to-slate-100 opacity-15 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div>
  )
}