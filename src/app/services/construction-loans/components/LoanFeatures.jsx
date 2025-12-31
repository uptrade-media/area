'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { DollarSign, Calendar, TrendingUp, Shield, Clock, Users } from 'lucide-react'

const features = [
  {
    icon: DollarSign,
    title: "Loan-to-Cost Up to 90%",
    description: "Maximize your capital efficiency with high LTC ratios, minimizing the equity required for your project."
  },
  {
    icon: Calendar,
    title: "Flexible Draw Schedules",
    description: "Customized draw schedules aligned with your construction timeline and cash flow needs."
  },
  {
    icon: TrendingUp,
    title: "Competitive Interest Rates",
    description: "Access to competitive rates through our extensive lender network and strong relationships."
  },
  {
    icon: Shield,
    title: "Non-Recourse Options",
    description: "Non-recourse and limited recourse structures available for qualified borrowers and projects."
  },
  {
    icon: Clock,
    title: "Terms Up to 36 Months",
    description: "Construction periods tailored to your project timeline with flexible extension options."
  },
  {
    icon: Users,
    title: "Experienced Guidance",
    description: "Expert support throughout the construction process from application to certificate of occupancy."
  }
]

export default function LoanFeatures() {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#081c3e] mb-4">
            Construction Loan Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive financing solutions designed specifically for commercial construction projects.
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
