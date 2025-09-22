"use client"

import React from 'react'
import Image from 'next/image'
import { CheckBadgeIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline'
import AnimatedSection from './AnimatedSection'
import ShowMore from './ui/ShowMore'

// Static color mapping for Tailwind class names to appear literally
const colorMap = {
  blue: "text-blue-600",
  green: "text-green-600", 
  purple: "text-purple-600"
}

const highlights = [
  {
    icon: MapPinIcon,
    text: "Based in Raleigh—partnering with local agents.",
    colorKey: "blue" as const
  },
  {
    icon: ClockIcon,
    text: "12+ years building time-saving workflows for professionals.", 
    colorKey: "green" as const
  },
  {
    icon: CheckBadgeIcon,
    text: "Hands-on, no-code setup so you can focus on clients.",
    colorKey: "purple" as const
  }
]

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-28 md:scroll-mt-32 py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection className="text-center mb-6 sm:mb-8">
          <div className="neutral-chip mb-4">
            <span>Local expertise, practical AI solutions.</span>
          </div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-slate-900">
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
              <div className="relative bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center p-6 lg:p-8 min-h-[320px] lg:min-h-[400px]">
                <div className="relative w-full max-w-sm bg-white rounded-xl shadow-lg overflow-hidden">
                  <Image
                    src="/images/aboutMePic.jpg"
                    alt="Greg Hansen, Founder of NaxoAI - AI Consultant specializing in real estate automation"
                    width={400}
                    height={500}
                    className="w-full h-auto object-cover"
                    sizes="(max-width: 1024px) 100vw, 400px"
                    priority={false}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
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
              <div className="p-4 sm:p-5 lg:p-8 flex flex-col justify-center">
                <div className="space-y-6">
                  {highlights.map((highlight) => {
                    const Icon = highlight.icon;
                    const iconColor = colorMap[highlight.colorKey];
                    return (
                      <div key={highlight.text} className="flex items-start space-x-4 group">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center w-10 h-10 bg-gray-50 rounded-xl group-hover:bg-gray-100 transition-colors duration-200">
                            <Icon className={`w-5 h-5 ${iconColor}`} />
                          </div>
                        </div>
                          <p className="text-slate-600 leading-relaxed font-medium">
                            {highlight.text}
                          </p>
                      </div>
                    );
                  })}
                </div>
                
                <div className="mt-8">
                  <ShowMore 
                    trigger="Read more about Greg" 
                    className="text-left"
                    triggerClassName="text-base"
                  >
                    <div className="pt-6 border-t border-gray-100">
                      <blockquote className="text-lg italic text-gray-600 leading-relaxed">
                        &ldquo;We start with your goals, not the tools—I translate the tech, and I handle the setup. 
                        AI isn&apos;t about replacing the human touch—it&apos;s about giving you more time for what you do best: 
                        building relationships and closing deals.&rdquo;
                      </blockquote>
                      <div className="mt-4">
                        <p className="font-semibold text-gray-900">— Greg</p>
                        <p className="text-sm text-gray-500">Founder, NaxoAI</p>
                      </div>
                      
                      <div className="mt-6 space-y-4 text-gray-600">
                        <p>
                          After 12+ years in business automation, I&apos;ve helped hundreds of professionals 
                          streamline their workflows. Real estate caught my attention because agents work 
                          harder than anyone I know—but spend too much time on tasks that could be automated.
                        </p>
                        <p>
                          I don&apos;t believe in complex solutions or months of setup. Every tool I recommend 
                          is something you can start using within days, not weeks. My approach is simple: 
                          identify your biggest time drains, implement the right AI tools, and get you 
                          back to what you do best.
                        </p>
                        <p>
                          Based in Raleigh, I work with agents locally and nationwide. Whether you&apos;re 
                          a solo agent or part of a team, the goal is the same: save you 5+ hours 
                          per week so you can focus on clients and deals.
                        </p>
                      </div>
                    </div>
                  </ShowMore>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  )
}
