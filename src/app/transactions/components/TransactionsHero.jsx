'use client'

import { TrendingUp, Award, Building2 } from 'lucide-react'

export default function TransactionsHero() {
  return (
    <section className="relative py-20 md:py-24 bg-gradient-to-br from-[#081c3e] to-[#0a2347] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#b9945a]/20 rounded-full mb-6 border border-[#b9945a]/30">
            <TrendingUp className="h-5 w-5 text-[#b9945a]" />
            <span className="text-[#b9945a] font-semibold">Proven Success</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Our Transaction Portfolio
          </h1>
          
          <p className="text-xl text-gray-300 leading-relaxed">
            Explore our successful commercial real estate financing transactions. Each project represents our commitment to securing optimal financing solutions for developers and investors nationwide.
          </p>
        </div>
      </div>
    </section>
  )
}
