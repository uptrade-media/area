'use client'

import { GraduationCap, Building2, Network, FileCheck } from 'lucide-react'

const expertise = [
  {
    icon: GraduationCap,
    title: "Deep Industry Knowledge",
    description: "Our team combines decades of experience in commercial real estate finance, development, and investment. We understand the nuances of every property type and market condition."
  },
  {
    icon: Building2,
    title: "Diverse Project Experience",
    description: "From hotels and multifamily apartments to retail centers and senior living facilities, we've financed it all. Our portfolio spans every major commercial property sector."
  },
  {
    icon: Network,
    title: "Extensive Lender Network",
    description: "We maintain relationships with over 100+ active lenders, including national banks, regional lenders, credit unions, and private capital sources, ensuring we find the perfect fit for your project."
  },
  {
    icon: FileCheck,
    title: "Proven Track Record",
    description: "With 500+ successful transactions and $1.8B+ in financing secured, our results speak for themselves. We navigate complex deals and deliver favorable outcomes consistently."
  }
]

export default function TeamExpertise() {
  return (
    <section className="py-20 md:py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#081c3e] mb-6">
            Our Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            What sets Adams Real Estate Advisors apart is our comprehensive expertise across all aspects of commercial real estate financing.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {expertise.map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-[#b9945a]"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="p-4 bg-[#b9945a]/10 rounded-full">
                    <item.icon className="h-8 w-8 text-[#b9945a]" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#081c3e] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional credentials */}
        <div className="mt-16 bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <h3 className="text-2xl md:text-3xl font-bold text-[#081c3e] mb-6 text-center">
            Industry Leadership
          </h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[#b9945a] mb-2">35+</div>
              <div className="text-gray-600 font-semibold">Years in Business</div>
              <p className="text-sm text-gray-500 mt-2">Navigated multiple market cycles</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#b9945a] mb-2">100+</div>
              <div className="text-gray-600 font-semibold">Active Lender Relationships</div>
              <p className="text-sm text-gray-500 mt-2">Nationwide capital access</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#b9945a] mb-2">50+</div>
              <div className="text-gray-600 font-semibold">States Served</div>
              <p className="text-sm text-gray-500 mt-2">Coast-to-coast coverage</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
