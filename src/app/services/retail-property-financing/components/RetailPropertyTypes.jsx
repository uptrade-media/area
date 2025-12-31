'use client'

import { Building, ShoppingBag, Home, Users } from 'lucide-react'

const propertyTypes = [
  {
    icon: ShoppingBag,
    title: "Shopping Centers",
    description: "Regional malls, community centers, and lifestyle centers with multiple tenants.",
    examples: ["Regional malls", "Community centers", "Lifestyle centers", "Outlet centers"],
    considerations: ["Anchor tenant strength", "Co-tenancy clauses", "Sales performance", "Traffic patterns"]
  },
  {
    icon: Building,
    title: "Strip Malls",
    description: "Neighborhood and community strip centers with inline tenants and potential anchors.",
    examples: ["Neighborhood strips", "Convenience centers", "Service retail", "Grocery-anchored"],
    considerations: ["Location & visibility", "Parking ratio", "Tenant mix", "Inline rent levels"]
  },
  {
    icon: Users,
    title: "Standalone Retail",
    description: "Single-tenant and multi-tenant standalone retail buildings and pad sites.",
    examples: ["Single-tenant retail", "Pad buildings", "Drive-through retail", "Bank branches"],
    considerations: ["Tenant credit", "Lease term remaining", "Location quality", "Retenancy potential"]
  },
  {
    icon: Home,
    title: "Mixed-Use Retail",
    description: "Mixed-use developments with retail on ground floor and residential or office above.",
    examples: ["Urban mixed-use", "Transit-oriented", "Live-work-play", "Main street retail"],
    considerations: ["Project density", "Residential support", "Parking solutions", "Multiple income streams"]
  }
]

export default function RetailPropertyTypes() {
  return (
    <section className="py-20 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#081c3e] mb-4">
            Retail Property Types We Finance
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive financing solutions for all retail property formats and configurations.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {propertyTypes.map((type, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-[#b9945a]/10"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-[#b9945a]/10 rounded-lg flex-shrink-0">
                  <type.icon className="h-8 w-8 text-[#b9945a]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#081c3e] mb-2">{type.title}</h3>
                  <p className="text-gray-600 mb-4">{type.description}</p>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="text-sm font-semibold text-[#081c3e] mb-2">Property Examples:</div>
                <div className="flex flex-wrap gap-2">
                  {type.examples.map((example, idx) => (
                    <span 
                      key={idx}
                      className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full"
                    >
                      {example}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="pt-4 border-t border-gray-100">
                <div className="text-sm font-semibold text-[#081c3e] mb-2">Key Underwriting Factors:</div>
                <div className="grid grid-cols-2 gap-2">
                  {type.considerations.map((consideration, idx) => (
                    <div key={idx} className="text-sm text-gray-600 flex items-start gap-1">
                      <span className="text-[#b9945a]">•</span>
                      <span>{consideration}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
