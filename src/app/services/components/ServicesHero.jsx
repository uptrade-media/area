'use client'

import { Briefcase } from 'lucide-react'

export default function ServicesHero() {
  return (
    <section className="relative py-20 md:py-24 bg-gradient-to-br from-[#081c3e] to-[#0a2347] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#b9945a]/20 rounded-full mb-6 border border-[#b9945a]/30">
            <Briefcase className="h-5 w-5 text-[#b9945a]" />
            <span className="text-[#b9945a] font-semibold">Complete Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Commercial Real Estate Financing Services
          </h1>
          
          <p className="text-xl text-gray-300 leading-relaxed">
            Comprehensive financing solutions tailored to your commercial real estate needs. From construction to refinancing, we have the expertise and lender network to secure optimal terms for your project.
          </p>
        </div>
      </div>
    </section>
  )
}
