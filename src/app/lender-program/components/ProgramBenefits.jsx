'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { TrendingUp, Users, FileCheck, Zap, DollarSign, Target } from 'lucide-react'

const benefits = [
  {
    icon: TrendingUp,
    title: "Consistent Deal Flow",
    description: "Access to a steady pipeline of commercial real estate financing opportunities across all property types."
  },
  {
    icon: Users,
    title: "Pre-Qualified Borrowers",
    description: "We screen and qualify borrowers before presenting opportunities, saving you time and resources."
  },
  {
    icon: FileCheck,
    title: "Complete Packages",
    description: "Receive well-prepared loan packages with all necessary documentation and underwriting materials."
  },
  {
    icon: Zap,
    title: "Efficient Process",
    description: "Streamlined communication and coordination to facilitate smooth closings and satisfied clients."
  },
  {
    icon: DollarSign,
    title: "Diverse Transactions",
    description: "Construction, permanent, bridge, and refinancing opportunities from $2M to $50M+."
  },
  {
    icon: Target,
    title: "Nationwide Reach",
    description: "Deal flow from all 50 states with concentration in high-growth markets and metros."
  }
]

export default function ProgramBenefits() {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#081c3e] mb-4">
            Why Partner With Us?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've facilitated over $1.8 billion in commercial real estate financing. Join our lender network and grow your loan portfolio with quality opportunities.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-[#b9945a]/20 hover:shadow-lg transition-shadow bg-white">
              <CardHeader>
                <div className="p-3 bg-[#b9945a]/10 rounded-lg w-fit mb-4">
                  <benefit.icon className="h-8 w-8 text-[#b9945a]" />
                </div>
                <CardTitle className="text-xl text-[#081c3e]">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
