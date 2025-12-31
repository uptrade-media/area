'use client'

import { Building2, Award, TrendingUp } from 'lucide-react'

export default function AboutHero() {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-br from-[#081c3e] to-[#0a2347] text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(30deg, #b9945a 12%, transparent 12.5%, transparent 87%, #b9945a 87.5%, #b9945a), linear-gradient(150deg, #b9945a 12%, transparent 12.5%, transparent 87%, #b9945a 87.5%, #b9945a), linear-gradient(30deg, #b9945a 12%, transparent 12.5%, transparent 87%, #b9945a 87.5%, #b9945a), linear-gradient(150deg, #b9945a 12%, transparent 12.5%, transparent 87%, #b9945a 87.5%, #b9945a)',
          backgroundSize: '80px 140px',
          backgroundPosition: '0 0, 0 0, 40px 70px, 40px 70px'
        }} />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#b9945a]/20 rounded-full mb-6 border border-[#b9945a]/30">
            <Award className="h-5 w-5 text-[#b9945a]" />
            <span className="text-[#b9945a] font-semibold">Trusted Since 1990</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            About Adams Real Estate Advisors
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Your trusted partner in commercial real estate financing, delivering clear, data-driven capital solutions for commercial property owners and investors.
          </p>
          
          {/* Quick stats */}
          <div className="grid grid-cols-3 gap-6 md:gap-8 mt-12 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#b9945a] mb-2">$1.8B+</div>
              <div className="text-sm text-gray-400">Financing Secured</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#b9945a] mb-2">35+</div>
              <div className="text-sm text-gray-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#b9945a] mb-2">500+</div>
              <div className="text-sm text-gray-400">Deals Closed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
