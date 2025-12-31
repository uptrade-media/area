'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Building2, Users, TrendingUp, Shield, Clock, Target } from 'lucide-react'

const features = [
  {
    icon: Building2,
    title: "Office Market Knowledge",
    description: "Deep understanding of office market dynamics, tenant requirements, and evolving workplace trends."
  },
  {
    icon: Users,
    title: "Tenant Credit Analysis",
    description: "Comprehensive evaluation of tenant quality, lease structures, and long-term lease commitments."
  },
  {
    icon: TrendingUp,
    title: "Competitive Leverage",
    description: "Up to 80% LTV for stabilized office properties with strong tenant rosters and lease terms."
  },
  {
    icon: Shield,
    title: "Multiple Loan Products",
    description: "Construction, bridge, permanent, and owner-occupied financing programs for office properties."
  },
  {
    icon: Clock,
    title: "Flexible Terms",
    description: "Loan terms from 3 to 30 years with fixed and variable rate options to match your strategy."
  },
  {
    icon: Target,
    title: "Nationwide Reach",
    description: "Financing for office properties in all markets including CBD, suburban, and secondary locations."
  }
]

export default function OfficeFeatures() {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#081c3e] mb-4">
            Office Financing Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions backed by market expertise and strong lender relationships in the office sector.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-[#b9945a]/20 hover:shadow-lg transition-shadow bg-white">
              <CardHeader>
                <div className="p-3 bg-[#b9945a]/10 rounded-lg w-fit mb-4">
                  <feature.icon className="h-8 w-8 text-[#b9945a]" />
                </div>
                <CardTitle className="text-xl text-[#081c3e]">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
