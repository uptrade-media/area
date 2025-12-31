'use client'

import { Scale, CheckCircle } from 'lucide-react'

export default function RefinancingHero() {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-br from-[#081c3e] to-[#0a2347] text-white overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#b9945a]/20 rounded-full mb-6 border border-[#b9945a]/30">
            <Scale className="h-5 w-5 text-[#b9945a]" />
            <span className="text-[#b9945a] font-semibold">Optimize Your Debt</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Commercial Real Estate Refinancing
          </h1>
          
          <p className="text-xl text-gray-300 leading-relaxed mb-12">
            Lower your interest rate, extract equity, or restructure debt on existing commercial properties. Strategic refinancing can significantly improve your cash flow and investment returns.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              "Lower Interest Rates",
              "Cash-Out Options",
              "Improved Terms"
            ].map((highlight, index) => (
              <div key={index} className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <CheckCircle className="h-5 w-5 text-[#b9945a] flex-shrink-0" />
                <span className="font-semibold">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
