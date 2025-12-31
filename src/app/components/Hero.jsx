'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section 
      className="hero-background text-white py-24 md:py-32 relative overflow-hidden animate-fade-in"
      style={{ 
        backgroundImage: "url('/AdobeStock_551358729.jpeg')",
        animationDelay: '0.2s',
        animationFillMode: 'both'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center animate-slide-up max-w-5xl mx-auto" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Premier Commercial Real Estate Financing
            <span className="block text-[#b9945a] mt-2">Solutions for Developers & Investors</span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl mb-10 text-gray-100 max-w-4xl mx-auto leading-relaxed">
            Adams Real Estate Advisors is your trusted partner for securing competitive commercial mortgages, construction loans, and refinancing options. 
            With over <strong className="text-[#b9945a]">$1.8 billion financed</strong>, we empower real estate developers and investors to achieve their project goals across the United States.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact">
              <Button 
                size="lg" 
                className="bg-[#b9945a] text-white hover:bg-[#a5834f] px-8 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                Get a Free Consultation
              </Button>
            </Link>
            <Link href="/transactions">
              <Button 
                size="lg" 
                variant="outline"
                className="bg-white/10 backdrop-blur-sm text-white border-2 border-white hover:bg-white hover:text-[#081c3e] px-8 py-6 text-lg font-semibold transition-all duration-300"
              >
                Explore Our Success Stories
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
