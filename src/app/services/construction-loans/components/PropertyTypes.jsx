'use client'

import { Building, Home, ShoppingBag, Heart, Warehouse, Users } from 'lucide-react'

const propertyTypes = [
  {
    icon: Building,
    title: "Hotels & Hospitality",
    description: "Full-service hotels, limited-service properties, boutique hotels, and resort development.",
    examples: ["Hampton Inn", "Holiday Inn", "Boutique Hotels", "Extended Stay"]
  },
  {
    icon: Home,
    title: "Multifamily Apartments",
    description: "Garden-style apartments, mid-rise buildings, high-rise towers, and mixed-income housing.",
    examples: ["Garden Apartments", "Mid-Rise", "High-Rise", "Student Housing"]
  },
  {
    icon: ShoppingBag,
    title: "Retail Centers",
    description: "Shopping centers, strip malls, big-box retail, and mixed-use developments with retail.",
    examples: ["Strip Centers", "Power Centers", "Lifestyle Centers", "Mixed-Use"]
  },
  {
    icon: Heart,
    title: "Senior Living",
    description: "Independent living, assisted living, memory care, and continuing care retirement communities.",
    examples: ["Independent Living", "Assisted Living", "Memory Care", "CCRC"]
  },
  {
    icon: Warehouse,
    title: "Industrial & Flex",
    description: "Warehouse facilities, distribution centers, manufacturing, and flex space developments.",
    examples: ["Warehouses", "Distribution", "Manufacturing", "Flex Space"]
  },
  {
    icon: Users,
    title: "Office Buildings",
    description: "Class A, B, and C office buildings, medical offices, and corporate campus developments.",
    examples: ["Office Towers", "Medical Offices", "Corporate Parks", "R&D Facilities"]
  }
]

export default function PropertyTypes() {
  return (
    <section className="py-20 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#081c3e] mb-4">
            Property Types We Finance
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Construction financing for all major commercial property types across the United States.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {propertyTypes.map((type, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-[#b9945a]/10 hover:border-[#b9945a]/30"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-[#b9945a]/10 rounded-lg flex-shrink-0">
                  <type.icon className="h-7 w-7 text-[#b9945a]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#081c3e] mb-2">{type.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{type.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {type.examples.map((example, idx) => (
                      <span 
                        key={idx}
                        className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded"
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
