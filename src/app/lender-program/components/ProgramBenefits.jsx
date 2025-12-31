'use client'

import { Briefcase, Shield, BarChart3, Globe, FileText, Users } from 'lucide-react'

const benefits = [
  {
    icon: Briefcase,
    title: "Curated Opportunities",
    description: "Every transaction is vetted for viability before presentation. We present fully underwritten packages ready for your credit committee."
  },
  {
    icon: Shield,
    title: "Institutional Standards",
    description: "We maintain rigorous due diligence protocols. Our borrowers meet institutional credit standards with verified financials and experience."
  },
  {
    icon: FileText,
    title: "Complete Documentation",
    description: "Loan packages include property analysis, market research, borrower credentials, and all supporting documentation for efficient underwriting."
  },
  {
    icon: BarChart3,
    title: "Transaction Diversity",
    description: "Construction, permanent, bridge, and refinancing opportunities ranging from $2M to $50M+ across all major asset classes."
  },
  {
    icon: Globe,
    title: "National Footprint",
    description: "Opportunities across all 50 states with concentration in growth markets. Expand your geographic reach through our established network."
  },
  {
    icon: Users,
    title: "Relationship Excellence",
    description: "Direct communication with our team throughout each transaction. We prioritize seamless execution and professional collaboration."
  }
]

export default function ProgramBenefits() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-[#b9945a]" />
            <span className="text-[#b9945a] font-medium tracking-widest uppercase text-xs">Partnership Value</span>
            <div className="h-px w-8 bg-[#b9945a]" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#081c3e] mb-6 tracking-tight">
            The Adams Advantage
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            A refined approach to correspondent lending, built on 35 years of commercial real estate finance expertise.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="group"
            >
              <div className="mb-6">
                <div className="p-4 bg-gradient-to-br from-[#081c3e] to-[#0a2347] rounded-xl w-fit shadow-lg group-hover:shadow-xl transition-shadow">
                  <benefit.icon className="h-7 w-7 text-[#b9945a]" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#081c3e] mb-3">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
