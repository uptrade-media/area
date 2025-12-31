'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Percent, Calendar, Shield, TrendingDown, DollarSign, Target } from 'lucide-react'

const features = [
  {
    icon: Percent,
    title: "Competitive Rates",
    description: "Access to the most competitive fixed and variable rate programs through our extensive lender network."
  },
  {
    icon: Calendar,
    title: "Long-Term Stability",
    description: "Financing terms from 5 to 30 years providing long-term stability for your investment."
  },
  {
    icon: Shield,
    title: "Non-Recourse Options",
    description: "Non-recourse and limited recourse loans available for qualifying properties and borrowers."
  },
  {
    icon: TrendingDown,
    title: "High Leverage",
    description: "Loan-to-value ratios up to 80% for qualifying stabilized commercial properties."
  },
  {
    icon: DollarSign,
    title: "Cash-Out Refinancing",
    description: "Extract equity from appreciated properties while securing better terms and rates."
  },
  {
    icon: Target,
    title: "Interest-Only Periods",
    description: "Interest-only payment periods available to optimize cash flow in the early years."
  }
]

export default function MortgageFeatures() {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#081c3e] mb-4">
            Permanent Mortgage Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Flexible financing solutions designed for stabilized commercial real estate investments.
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
