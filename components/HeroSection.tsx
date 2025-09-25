'use client'

import Image from 'next/image'
import CalendlyButton from './CalendlyButton'

/**
 * Simplified Hero section
 * Removed unused props and cleaned up structure
 */
export default function HeroSection() {
  return (
    <div id="hero-section" className="relative isolate px-6 pt-14 lg:px-8">
      {/* Decorative background gradient */}
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-slate-100 to-slate-200 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] [clip-path:polygon(74.1%_44.1%,100%_61.6%,97.5%_26.9%,85.5%_0.1%,80.7%_2%,72.5%_32.5%,60.2%_62.4%,52.4%_68.1%,47.5%_58.3%,45.2%_34.5%,27.5%_76.7%,0.1%_64.9%,17.9%_100%,27.6%_76.8%,76.1%_97.7%,74.1%_44.1%)]" />
      </div>
      
      <div className="mx-auto max-w-7xl py-14 sm:py-18 lg:py-21">
        {/* Hero Content Container - responsive layout */}
        <div className="md:grid md:grid-cols-2 md:gap-12 md:items-stretch">
          
          {/* Text Content */}
          <div className="text-center md:text-left flex flex-col h-full">
            {/* Content wrapper */}
            <div className="flex-grow">
              {/* Main headline */}
              <h1 className="text-4xl font-bold tracking-tight text-primary-900 sm:text-5xl lg:text-6xl leading-tight">
                Let AI handle the busywork—so you can focus on closing deals
              </h1>
              
              {/* Sub-headline */}
              <p className="mt-6 text-lg leading-relaxed text-slate-600 max-w-2xl mx-auto md:mx-0 sm:text-xl">
                Free up time for clients, closings, and growth with a personalized AI action plan—done for you.
              </p>
              
              {/* Benefit chips */}
              <div className="mt-6 flex justify-center md:justify-start">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200 text-sm">
                  Technical expertise • Local knowledge • Professional setup
                </span>
              </div>
            </div>
            
                    {/* Primary CTA - pinned to bottom */}
                    <div className="mt-10">
                      <CalendlyButton className="inline-flex items-center justify-center bg-accent-600 text-white rounded-xl shadow-lg hover:shadow-xl hover:bg-accent-700 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:ring-offset-2 px-10 py-5 text-xl font-bold transition-all duration-200 transform hover:-translate-y-0.5">
                        Schedule your free consultation
                      </CalendlyButton>
                      <p className="mt-3 text-sm text-slate-500">
                        Pick a time that works for you. No pressure.
                      </p>
                    </div>
          </div>

          {/* Hero Image */}
          <div className="mt-12 md:mt-0 flex items-center justify-center md:justify-start md:h-full">
            <div className="relative w-full max-w-lg">
              <Image
                src="/images/NaxoHeroImage.jpg"
                alt="Real estate professional using AI automation tools and analytics dashboard to streamline workflows and save time"
                width={600}
                height={400}
                priority
                className="rounded-lg shadow-2xl ring-1 ring-slate-900/10 w-full h-auto object-cover object-left-top"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />
              
                      {/* Subtle brand overlay */}
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary-500/5 to-slate-900/5 pointer-events-none" />
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Bottom decorative gradient */}
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-slate-200 to-slate-100 opacity-15 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem] [clip-path:polygon(74.1%_44.1%,100%_61.6%,97.5%_26.9%,85.5%_0.1%,80.7%_2%,72.5%_32.5%,60.2%_62.4%,52.4%_68.1%,47.5%_58.3%,45.2%_34.5%,27.5%_76.7%,0.1%_64.9%,17.9%_100%,27.6%_76.8%,76.1%_97.7%,74.1%_44.1%)]" />
      </div>
    </div>
  )
}