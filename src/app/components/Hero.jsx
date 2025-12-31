'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section 
      className="hero-background text-white py-28 md:py-40 relative overflow-hidden animate-fade-in"
      style={{ 
        backgroundImage: "url('/AdobeStock_551358729.jpeg')",
        animationDelay: '0.2s',
        animationFillMode: 'both'
      }}
    >
      {/* Refined gradient overlay for premium feel */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#081c3e]/90 via-[#081c3e]/75 to-black/60" />
      
      {/* Subtle geometric accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(135deg, transparent 25%, rgba(185,148,90,0.3) 25%, rgba(185,148,90,0.3) 50%, transparent 50%, transparent 75%, rgba(185,148,90,0.3) 75%)',
          backgroundSize: '60px 60px'
        }} />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="animate-slide-up max-w-4xl" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
          {/* Institutional identifier */}
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="h-px w-12 bg-[#b9945a]" />
            <span className="text-[#b9945a] font-medium tracking-widest uppercase text-sm">Commercial Real Estate Finance</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-[1.1] tracking-tight">
            Capital Solutions
            <span className="block text-[#b9945a]">Built on Expertise</span>
          </h1>
          
          <p className="text-lg md:text-xl mb-10 text-gray-200 max-w-2xl leading-relaxed font-light">
            We structure and place debt for commercial real estate developers and investors nationwide—construction loans, permanent financing, and strategic refinancing tailored to your objectives.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <Link href="/contact">
              <Button 
                size="lg" 
                className="bg-[#b9945a] text-white hover:bg-[#a5834f] px-8 py-6 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                Start Your Financing
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/services">
              <Button 
                size="lg" 
                variant="outline"
                className="bg-transparent text-white border border-white/40 hover:bg-white/10 hover:border-white/60 px-8 py-6 text-base font-medium transition-all duration-300"
              >
                View Our Capabilities
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#b9945a] to-transparent opacity-60" />
    </section>
  )
}
