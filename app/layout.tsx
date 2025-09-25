import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'NaxoAI - AI Consulting for Real Estate Agents',
  description: 'AI consulting for real estate agents. Paid Diagnostic & Action Plan, follow-up automations, listing copy automation, technical setup. Your first call is free. Save significant time each week with tailored AI solutions that streamline your workflow.',
  keywords: ['AI consulting', 'real estate agents', 'automation', 'MLS descriptions', 'lead generation', 'Raleigh'],
  authors: [{ name: 'Greg Hansen', url: 'https://naxoai.com' }],
  creator: 'NaxoAI',
  publisher: 'NaxoAI',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://naxoai.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'NaxoAI - AI Consulting for Real Estate Agents',
    description: 'Save significant time each week with AI automation. Free consultation for real estate agents in Raleigh and nationwide.',
    url: 'https://naxoai.com',
    siteName: 'NaxoAI',
    images: [
      {
        url: 'https://naxoai.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'NaxoAI - AI Consulting for Real Estate Agents',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NaxoAI - AI Consulting for Real Estate Agents',
    description: 'Save significant time each week with AI automation. Free consultation for real estate agents.',
    images: ['https://naxoai.com/og-image.jpg'],
    creator: '@naxoai',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

/**
 * Root layout component - optimized and simplified
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google Tag Manager - Production Only */}
        {process.env.NODE_ENV === 'production' && (
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TWWTNDFB');`,
            }}
          />
        )}
        
        {/* Font optimization */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Preconnect to Calendly for faster loading */}
        <link rel="preconnect" href="https://assets.calendly.com" />
        
        {/* Preload hero image for better LCP */}
        <link
          rel="preload"
          href="/images/NaxoHeroImage.png"
          as="image"
          type="image/png"
          fetchPriority="high"
        />
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          as="style"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        
        {/* Mobile optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="theme-color" content="#2563eb" />
        
        {/* Local business SEO */}
        <meta name="geo.region" content="US-NC" />
        <meta name="geo.placename" content="Raleigh" />
        <meta name="geo.position" content="35.7796;-78.6382" />
        <meta name="ICBM" content="35.7796, -78.6382" />
        
        {/* Structured data for professional service */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "NaxoAI",
              "description": "AI consulting for real estate agents",
              "url": "https://naxoai.com",
              "telephone": "+1-XXX-XXX-XXXX",
              "email": "contact@naxoai.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Raleigh",
                "addressRegion": "NC",
                "addressCountry": "US"
              },
              "founder": {
                "@type": "Person",
                "name": "Greg"
              },
              "serviceType": "AI Consulting",
              "areaServed": "United States",
              "priceRange": "$199/hour"
            })
          }}
        />
        
        {/* Calendly link widget begin */}
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
        <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
        {/* Calendly link widget end */}
      </head>
      <body className="font-sans">
        {/* Google Tag Manager (noscript) - Production Only */}
        {process.env.NODE_ENV === 'production' && (
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-TWWTNDFB"
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        )}
        {/* End Google Tag Manager (noscript) */}
        
        {/* Skip to content link for accessibility */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  )
}