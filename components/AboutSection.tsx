"use client"

import React from 'react'
import OptimizedImage from './ui/OptimizedImage'
import AnimatedSection from './AnimatedSection'


export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-28 md:scroll-mt-32 py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection className="text-center mb-6 sm:mb-8">
          <div className="neutral-chip mb-4">
            <span>Local expertise, practical AI solutions.</span>
          </div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-primary-900">
            Hi, I&apos;m Greg.
          </h2>
          <p className="mt-3 sm:mt-4 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Real estate investor turned AI consultant, helping agents like you work smarter, not harder.
          </p>
        </AnimatedSection>
        
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Profile Image */}
              <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-6 lg:p-8 min-h-[320px] lg:min-h-[400px]">
                <div className="relative w-full max-w-sm bg-white rounded-xl shadow-lg overflow-hidden">
                  <OptimizedImage
                    src="/images/aboutMePic.jpg"
                    alt="Greg Hansen, Founder of NaxoAI - AI Consultant specializing in real estate automation"
                    width={400}
                    height={500}
                    className="w-full h-auto object-cover"
                    sizes="(max-width: 1024px) 100vw, 400px"
                    priority={false}
                    fallbackSrc="/images/aboutMePic2.jpg"
                  />
                  
                  {/* Decorative overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-slate-900/5 pointer-events-none" />
                </div>
                
                {/* Decorative background elements */}
                <div className="absolute top-4 left-4 w-8 h-8 bg-white/20 rounded-full blur-sm" />
                <div className="absolute bottom-8 right-8 w-12 h-12 bg-white/30 rounded-full blur-md" />
                <div className="absolute top-1/2 right-4 w-6 h-6 bg-white/25 rounded-full blur-sm" />
              </div>
              
               {/* Content */}
               <div className="p-4 sm:p-5 lg:p-8 flex flex-col justify-center gap-8 lg:gap-12">
                 <div className="space-y-6">
                   <p className="text-slate-600 leading-7 max-w-prose">
                     Based in Wake County, I partner with local agents to make AI simple and practical. With over 12 years of technology experience, I focus on hands-on technical setup so you don&apos;t have to.
                   </p>
                   
                   {/* Elevated Pull Quote */}
                   <figure className="border-l-4 border-blue-500 pl-5">
                     <blockquote>
                       <p className="italic text-lg md:text-xl text-slate-800 leading-8">
                         &quot;We start with your goals, not the tools—I translate the tech and handle the setup.&quot;
                       </p>
                     </blockquote>
                     <figcaption className="text-sm text-slate-500 mt-3">
                       <span className="font-semibold">— Greg, Founder of NaxoAI</span>
                     </figcaption>
                   </figure>
                   
                   <p className="text-slate-600 leading-7 max-w-prose">
                     My approach is straightforward: we start with your goals, not the tools—I handle the tech so you can get back to what you do best: building relationships and closing deals.
                   </p>
                 </div>
               </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  )
}
