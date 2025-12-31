'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Phone } from 'lucide-react'

export default function ServiceCTA({ 
  title = "Ready to Move Forward?",
  description = "Let us structure the optimal financing solution for your commercial real estate project.",
  primaryButtonText = "Start Your Application",
  showPhone = true
}) {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Premium warm gold background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#b9945a] via-[#c9a66a] to-[#b9945a]" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(30deg, transparent 45%, rgba(8,28,62,0.3) 45%, rgba(8,28,62,0.3) 55%, transparent 55%)',
          backgroundSize: '80px 80px'
        }} />
      </div>
      
      {/* Accent lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#081c3e]/20 to-transparent" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center text-white">
          {/* Section identifier */}
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-white/50" />
            <span className="text-white font-medium tracking-widest uppercase text-xs">Next Steps</span>
            <div className="h-px w-8 bg-white/50" />
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
            {title}
          </h2>
          
          <p className="text-lg md:text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            {description}
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/contact">
              <Button 
                size="lg"
                className="bg-[#081c3e] hover:bg-[#0a2347] text-white px-10 py-7 text-base font-semibold shadow-xl hover:shadow-2xl transition-all group border border-[#081c3e]/20"
              >
                {primaryButtonText}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            {showPhone && (
              <a href="tel:5853032423">
                <Button 
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-2 border-[#081c3e]/30 text-[#081c3e] hover:bg-[#081c3e]/10 hover:border-[#081c3e]/50 px-10 py-7 text-base font-medium transition-all backdrop-blur-sm"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  (585) 303-2423
                </Button>
              </a>
            )}
          </div>
          
          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-[#081c3e]/70 border-t border-[#081c3e]/10 pt-8 max-w-2xl mx-auto">
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-[#081c3e]" />
              <span>Confidential Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-[#081c3e]" />
              <span>24-Hour Response</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-[#081c3e]" />
              <span>$1.8B+ Financed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
