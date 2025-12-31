'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FileCheck, DollarSign, Clock, Zap, TrendingUp, Shield } from 'lucide-react'

const features = [
  {
    icon: FileCheck,
    title: "Single Closing",
    description: "One loan, one closing—streamlined process covering both acquisition and renovation costs."
  },
  {
    icon: DollarSign,
    title: "Up to 90% Financing",
    description: "High leverage on total project cost including purchase price and renovation budget."
  },
  {
    icon: Clock,
    title: "Fast Execution",
    description: "Quick closings to meet competitive acquisition timelines and seller requirements."
  },
  {
    icon: Zap,
    title: "Flexible Draw Schedules",
    description: "Renovation funds released based on construction progress and inspection milestones."
  },
  {
    icon: TrendingUp,
    title: "Exit Strategy Options",
    description: "Bridge to permanent financing, refinance, or sale upon stabilization."
  },
  {
    icon: Shield,
    title: "Value-Add Expertise",
    description: "Lenders experienced with repositioning, rebranding, and property improvement strategies."
  }
]

export default function AcqRenovFeatures() {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#081c3e] mb-4">
            Loan Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive financing solutions designed specifically for value-add commercial real estate investments.
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
