'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function LenderProgramHero() {
  return (
    <section className="relative py-24 md:py-36 bg-gradient-to-br from-[#081c3e] via-[#0a2347] to-[#081c3e] text-white overflow-hidden">
      {/* Cube background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(30deg, #b9945a 12%, transparent 12.5%, transparent 87%, #b9945a 87.5%, #b9945a), linear-gradient(150deg, #b9945a 12%, transparent 12.5%, transparent 87%, #b9945a 87.5%, #b9945a), linear-gradient(30deg, #b9945a 12%, transparent 12.5%, transparent 87%, #b9945a 87.5%, #b9945a), linear-gradient(150deg, #b9945a 12%, transparent 12.5%, transparent 87%, #b9945a 87.5%, #b9945a)',
          backgroundSize: '80px 140px',
          backgroundPosition: '0 0, 0 0, 40px 70px, 40px 70px'
        }} />
      </div>
      
      {/* Accent lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#b9945a]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Refined identifier */}
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="h-px w-12 bg-[#b9945a]" />
            <span className="text-[#b9945a] font-medium tracking-widest uppercase text-sm">For Capital Partners</span>
            <div className="h-px w-12 bg-[#b9945a]" />
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-tight leading-[1.1]">
            Exclusive Lender Network
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-12 max-w-3xl mx-auto font-light">
            Access institutional-quality commercial real estate opportunities through our curated correspondent lending platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link href="/contact">
              <Button 
                size="lg" 
                className="bg-[#b9945a] text-white hover:bg-[#a5834f] px-10 py-7 text-base font-semibold shadow-xl transition-all group border border-[#b9945a]/20"
              >
                Inquire About Partnership
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
          
          {/* Credential strip */}
          <div className="flex flex-wrap items-center justify-center gap-12 pt-8 border-t border-white/10">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">$1.8B+</div>
              <div className="text-sm text-gray-400 tracking-wide">Capital Placed</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-white/20" />
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">500+</div>
              <div className="text-sm text-gray-400 tracking-wide">Transactions</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-white/20" />
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">35+</div>
              <div className="text-sm text-gray-400 tracking-wide">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#b9945a]/40 to-transparent" />
    </section>
  )
}
