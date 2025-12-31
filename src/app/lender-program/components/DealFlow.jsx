'use client'

import { Building, Home, ShoppingBag, Heart, Warehouse, Building2 } from 'lucide-react'

const dealTypes = [
  {
    icon: Home,
    title: "Multifamily",
    allocation: "25-35%",
    description: "Garden-style, mid-rise, high-rise, and student housing"
  },
  {
    icon: Building,
    title: "Hospitality",
    allocation: "20-30%",
    description: "Full-service, limited-service, and boutique hotels"
  },
  {
    icon: Heart,
    title: "Senior Living",
    allocation: "15-20%",
    description: "Independent, assisted, memory care, and CCRCs"
  },
  {
    icon: ShoppingBag,
    title: "Retail",
    allocation: "10-15%",
    description: "Shopping centers, anchored retail, and mixed-use"
  },
  {
    icon: Building2,
    title: "Office",
    allocation: "10-15%",
    description: "Class A-C office, medical, and corporate campuses"
  },
  {
    icon: Warehouse,
    title: "Industrial",
    allocation: "5-10%",
    description: "Warehouse, distribution, and flex space"
  }
]

export default function DealFlow() {
  return (
    <section className="py-24 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-[#b9945a]" />
            <span className="text-[#b9945a] font-medium tracking-widest uppercase text-xs">Portfolio Composition</span>
            <div className="h-px w-8 bg-[#b9945a]" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#081c3e] mb-6 tracking-tight">
            Asset Class Distribution
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            A balanced portfolio of institutional-quality commercial real estate opportunities across established asset classes.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {dealTypes.map((type, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 bg-[#081c3e] rounded-lg">
                  <type.icon className="h-6 w-6 text-[#b9945a]" />
                </div>
                <span className="text-2xl font-bold text-[#b9945a]">{type.allocation}</span>
              </div>
              <h3 className="text-xl font-bold text-[#081c3e] mb-2">{type.title}</h3>
              <p className="text-gray-600 text-sm">{type.description}</p>
            </div>
          ))}
        </div>
        
        {/* Transaction parameters */}
        <div className="bg-gradient-to-br from-[#081c3e] to-[#0a2347] rounded-2xl p-10 md:p-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Transaction Parameters</h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                Our opportunities reflect institutional-grade commercial real estate with experienced sponsors and proven fundamentals.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="h-2 w-2 rounded-full bg-[#b9945a]" />
                  <span className="text-gray-300">Loan sizes: $2M – $50M+</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-2 w-2 rounded-full bg-[#b9945a]" />
                  <span className="text-gray-300">Construction, bridge, permanent, refinance</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-2 w-2 rounded-full bg-[#b9945a]" />
                  <span className="text-gray-300">Experienced sponsors with track record</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-2 w-2 rounded-full bg-[#b9945a]" />
                  <span className="text-gray-300">Primary and secondary markets nationwide</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">$11M</div>
                <div className="text-sm text-gray-400">Avg. Transaction</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">45-90</div>
                <div className="text-sm text-gray-400">Days to Close</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">98%</div>
                <div className="text-sm text-gray-400">Close Rate</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">50</div>
                <div className="text-sm text-gray-400">States Covered</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
