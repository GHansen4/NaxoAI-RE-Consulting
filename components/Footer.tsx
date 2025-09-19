import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {/* Social links can be added here later */}
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <div className="flex items-center justify-center md:justify-start">
            <Link href="/" className="text-2xl font-bold text-white">
              NaxoAI
            </Link>
          </div>
          <p className="text-center text-xs leading-5 text-slate-500 mt-4 md:text-left">
            &copy; 2024 NaxoAI. AI consulting for real estate professionals.
          </p>
          <div className="mt-4 flex flex-col sm:flex-row sm:space-x-6 space-y-2 sm:space-y-0 text-center md:text-left">
            <Link href="/privacy" className="text-xs text-slate-500 hover:text-primary-600 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-slate-500 hover:text-primary-600 transition-colors">
              Terms of Service
            </Link>
            <Link href="mailto:contact@naxoai.com" className="text-xs text-slate-500 hover:text-primary-600 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
