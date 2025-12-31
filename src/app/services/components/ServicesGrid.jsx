'use client'

import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Building2, Landmark, Scale, Handshake, ShoppingCart, Building, ArrowRight, CheckCircle } from 'lucide-react'

const services = [
  {
    title: "Construction Loans",
    description: "Ground-up construction financing for commercial properties including hotels, multifamily apartments, retail centers, and senior living facilities.",
    icon: Building2,
    path: "/services/construction-loans",
    features: ["Ground-up development", "Major renovations", "Flexible draw schedules", "Competitive rates"],
    idealFor: "Developers building new commercial properties"
  },
  {
    title: "Permanent Mortgages",
    description: "Long-term financing solutions for stabilized, income-producing commercial properties with competitive rates and terms.",
    icon: Landmark,
    path: "/services/permanent-mortgages",
    features: ["Fixed & variable rates", "Long-term stability", "Cash-out options", "Non-recourse available"],
    idealFor: "Property owners seeking long-term financing"
  },
  {
    title: "Commercial Refinancing",
    description: "Strategic refinancing to lower rates, extract equity, or improve loan terms on existing commercial properties.",
    icon: Scale,
    path: "/services/commercial-real-estate-refinancing",
    features: ["Rate reduction", "Cash-out refinancing", "Debt consolidation", "Term extensions"],
    idealFor: "Owners looking to optimize existing debt"
  },
  {
    title: "Acquisition & Renovation",
    description: "Integrated financing for purchasing and improving commercial properties with value-add potential.",
    icon: Handshake,
    path: "/services/acquisition-renovation-financing",
    features: ["Purchase + rehab", "Single closing", "Value-add strategies", "Bridge to permanent"],
    idealFor: "Investors pursuing value-add opportunities"
  },
  {
    title: "Retail Property Financing",
    description: "Specialized financing for shopping centers, strip malls, standalone retail buildings, and mixed-use retail properties.",
    icon: ShoppingCart,
    path: "/services/retail-property-financing",
    features: ["Shopping centers", "Strip malls", "Anchored properties", "Adaptive reuse"],
    idealFor: "Retail property developers and investors"
  },
  {
    title: "Office Building Financing",
    description: "Tailored financing solutions for office buildings, corporate parks, medical offices, and professional facilities.",
    icon: Building,
    path: "/services/office-building-financing",
    features: ["Class A-C offices", "Medical buildings", "Corporate parks", "Flex space"],
    idealFor: "Office property owners and developers"
  }
]

export default function ServicesGrid() {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#081c3e] mb-4">
            Our Financing Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every commercial real estate project is unique. We provide specialized financing across all major property types and transaction structures.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Link href={service.path} key={index}>
              <Card className="h-full hover:shadow-2xl transition-all duration-300 border-[#b9945a]/20 cursor-pointer group hover:-translate-y-1 bg-white">
                <CardHeader>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-[#b9945a]/10 rounded-lg group-hover:bg-[#b9945a]/20 transition-colors flex-shrink-0">
                      <service.icon className="h-8 w-8 text-[#b9945a]" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl group-hover:text-[#b9945a] transition-colors mb-2">
                        {service.title}
                      </CardTitle>
                      <div className="text-sm text-gray-500 italic">
                        {service.idealFor}
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-base text-gray-700 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="font-semibold text-sm text-[#081c3e]">Key Features:</div>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-[#b9945a] flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center text-[#b9945a] font-semibold group-hover:gap-2 transition-all pt-4 border-t border-gray-100">
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
