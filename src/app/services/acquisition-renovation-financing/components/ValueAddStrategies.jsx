'use client'

import { CheckCircle } from 'lucide-react'

const strategies = [
  {
    title: "Property Repositioning",
    description: "Transform underperforming assets into competitive, income-producing properties.",
    improvements: [
      "Unit renovations and upgrades",
      "Common area improvements",
      "Amenity additions",
      "Energy efficiency upgrades"
    ],
    outcome: "Increase NOI by 20-40% through strategic improvements"
  },
  {
    title: "Adaptive Reuse",
    description: "Convert properties to higher and better uses to maximize value.",
    improvements: [
      "Office to residential conversion",
      "Retail to mixed-use",
      "Industrial to creative office",
      "Hotel to multifamily"
    ],
    outcome: "Unlock latent value through property type conversion"
  },
  {
    title: "Rebranding & Repositioning",
    description: "Elevate property positioning through comprehensive renovations and rebranding.",
    improvements: [
      "Full interior/exterior renovation",
      "Flag or brand changes",
      "Market repositioning",
      "Target demographic shift"
    ],
    outcome: "Achieve higher rents and better tenant/customer mix"
  },
  {
    title: "Deferred Maintenance",
    description: "Address accumulated deferred maintenance to stabilize and improve operations.",
    improvements: [
      "Roof and HVAC replacement",
      "Parking lot repaving",
      "Plumbing and electrical updates",
      "Life safety upgrades"
    ],
    outcome: "Reduce operating costs and increase property value"
  }
]

export default function ValueAddStrategies() {
  return (
    <section className="py-20 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#081c3e] mb-4">
            Value-Add Strategies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Financing solutions for various value-add investment strategies across all property types.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {strategies.map((strategy, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-[#b9945a]/10"
            >
              <h3 className="text-2xl font-bold text-[#081c3e] mb-3">{strategy.title}</h3>
              <p className="text-gray-600 mb-6">{strategy.description}</p>
              
              <div className="space-y-3 mb-6">
                <div className="font-semibold text-sm text-[#081c3e] mb-3">Typical Improvements:</div>
                {strategy.improvements.map((improvement, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#b9945a] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{improvement}</span>
                  </div>
                ))}
              </div>
              
              <div className="pt-6 border-t border-gray-100">
                <div className="text-sm font-semibold text-[#081c3e] mb-2">Expected Outcome:</div>
                <div className="text-sm text-gray-600 italic bg-[#b9945a]/5 p-3 rounded-lg">
                  {strategy.outcome}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
