'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Store, Users, TrendingUp, Shield, Zap, Target } from 'lucide-react'

const features = [
  {
    icon: Store,
    title: "Retail Expertise",
    description: "Lenders who understand retail fundamentals including traffic patterns, tenant mix, and anchor strategies."
  },
  {
    icon: Users,
    title: "Tenant Lease Analysis",
    description: "Experienced evaluation of tenant quality, lease terms, sales performance, and credit strength."
  },
  {
    icon: TrendingUp,
    title: "Flexible LTV Ratios",
    description: "Leverage up to 80% for stabilized properties with strong tenant rosters and lease terms."
  },
  {
    icon: Shield,
    title: "Construction & Permanent",
    description: "Ground-up construction, major renovations, and permanent financing for retail developments."
  },
  {
    icon: Zap,
    title: "Fast Closings",
    description: "Expedited processing for competitive acquisitions and time-sensitive opportunities."
  },
  {
    icon: Target,
    title: "National Coverage",
    description: "Financing for retail properties in all markets including primary, secondary, and tertiary locations."
  }
]

export default function RetailFeatures() {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#081c3e] mb-4">
            Why Choose Us for Retail Financing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Deep understanding of retail real estate and strong relationships with lenders who specialize in the sector.
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
