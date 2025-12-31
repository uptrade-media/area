'use client'

import { Building2, Heart, Briefcase, Users } from 'lucide-react'

const propertyTypes = [
  {
    icon: Building2,
    title: "Class A/B/C Office Buildings",
    description: "Traditional office buildings across all quality tiers in urban and suburban markets.",
    examples: ["High-rise towers", "Mid-rise buildings", "Suburban offices", "Campus-style"],
    considerations: ["Building class & amenities", "Tenant mix & quality", "Location & accessibility", "Parking availability"]
  },
  {
    icon: Heart,
    title: "Medical Office Buildings",
    description: "Healthcare-focused office properties including MOBs, outpatient centers, and medical plazas.",
    examples: ["Medical office buildings", "Outpatient centers", "Dental/specialty", "Medical plazas"],
    considerations: ["Proximity to hospitals", "Specialized infrastructure", "Healthcare tenant mix", "On-campus vs. off-campus"]
  },
  {
    icon: Briefcase,
    title: "Corporate & Business Parks",
    description: "Campus-style developments designed for single or multiple corporate tenants.",
    examples: ["Corporate headquarters", "Business parks", "Office parks", "Research & development"],
    considerations: ["Tenant concentration", "Campus amenities", "Build-to-suit components", "Land for expansion"]
  },
  {
    icon: Users,
    title: "Flex & Creative Space",
    description: "Flexible office/warehouse combinations and converted creative office space.",
    examples: ["Flex space", "Creative lofts", "Coworking hubs", "Tech campuses"],
    considerations: ["Flexible use potential", "Ceiling heights", "Loading capabilities", "Modern tenant needs"]
  }
]

export default function OfficePropertyTypes() {
  return (
    <section className="py-20 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#081c3e] mb-4">
            Office Property Types
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Financing solutions tailored to the unique characteristics of each office property format.
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
                <div className="text-sm font-semibold text-[#081c3e] mb-2">Financing Considerations:</div>
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
