'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { TrendingDown, DollarSign, Calendar, Shield, Zap, Target } from 'lucide-react'

const benefits = [
  {
    icon: TrendingDown,
    title: "Reduce Interest Rates",
    description: "Take advantage of favorable market conditions to secure lower rates and reduce monthly payments."
  },
  {
    icon: DollarSign,
    title: "Extract Equity",
    description: "Cash-out refinancing to access equity for new investments, renovations, or business expansion."
  },
  {
    icon: Calendar,
    title: "Extend Loan Terms",
    description: "Improve cash flow by extending amortization periods or restructuring payment schedules."
  },
  {
    icon: Shield,
    title: "Remove Recourse",
    description: "Transition from recourse to non-recourse financing to limit personal liability."
  },
  {
    icon: Zap,
    title: "Consolidate Debt",
    description: "Combine multiple loans into a single financing package for simplified management."
  },
  {
    icon: Target,
    title: "Eliminate Prepayment Penalties",
    description: "Refinance out of loans with restrictive terms or onerous prepayment penalties."
  }
]

export default function RefinancingBenefits() {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#081c3e] mb-4">
            Why Refinance?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Strategic refinancing can unlock significant value and improve the financial performance of your commercial real estate.
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
