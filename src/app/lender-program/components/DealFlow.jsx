'use client'

import { Building, Home, ShoppingBag, Heart, Warehouse, Building2 } from 'lucide-react'

const dealTypes = [
  {
    icon: Building,
    title: "Hotel & Hospitality",
    stats: "20-30% of deal flow",
    description: "Full-service hotels, limited-service, boutique properties, and resort developments"
  },
  {
    icon: Home,
    title: "Multifamily",
    stats: "25-35% of deal flow",
    description: "Garden-style apartments, mid-rise, high-rise, and student housing projects"
  },
  {
    icon: Heart,
    title: "Senior Living",
    stats: "15-20% of deal flow",
    description: "Independent living, assisted living, memory care, and CCRC facilities"
  },
  {
    icon: ShoppingBag,
    title: "Retail",
    stats: "10-15% of deal flow",
    description: "Shopping centers, strip malls, standalone retail, and mixed-use properties"
  },
  {
    icon: Building2,
    title: "Office",
    stats: "10-15% of deal flow",
    description: "Class A-C office buildings, medical offices, and corporate parks"
  },
  {
    icon: Warehouse,
    title: "Industrial",
    stats: "5-10% of deal flow",
    description: "Warehouses, distribution centers, manufacturing, and flex space"
  }
]

export default function DealFlow() {
  return (
    <section className="py-20 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#081c3e] mb-4">
            Our Deal Flow
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Diverse commercial real estate financing opportunities across all major property types.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {dealTypes.map((type, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-[#b9945a]/10"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-[#b9945a]/10 rounded-lg flex-shrink-0">
                  <type.icon className="h-7 w-7 text-[#b9945a]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#081c3e] mb-1">{type.title}</h3>
                  <div className="text-sm text-[#b9945a] font-semibold mb-2">{type.stats}</div>
                  <p className="text-gray-600 text-sm">{type.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { label: "Total Financed", value: "$1.8B+" },
            { label: "Transactions", value: "500+" },
            { label: "Average Deal Size", value: "$11M" },
            { label: "States Served", value: "50" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-[#b9945a] mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
