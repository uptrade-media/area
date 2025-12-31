'use client'

import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Building2, Landmark, Scale, Handshake, ShoppingCart, Building, ArrowRight } from 'lucide-react'

const services = [
  {
    id: 'construction-loans',
    title: "Construction Loans",
    description: "Secure funding for new commercial construction projects with flexible terms and competitive rates. We specialize in ground-up developments, expansions, and major renovations.",
    icon: Building2,
    path: "/services/construction-loans",
    highlights: ["Ground-up development", "Major renovations", "Flexible terms"]
  },
  {
    id: 'permanent-mortgages',
    title: "Permanent Mortgages",
    description: "Obtain long-term, stable financing for income-producing commercial properties with competitive rates and predictable payments for lasting financial stability.",
    icon: Landmark,
    path: "/services/permanent-mortgages",
    highlights: ["Long-term financing", "Stable rates", "Predictable payments"]
  },
  {
    id: 'commercial-refinancing',
    title: "Commercial Real Estate Refinancing",
    description: "Optimize your existing commercial debt with strategic refinancing options designed to lower costs and improve cash flow for enhanced investment returns.",
    icon: Scale,
    path: "/services/commercial-real-estate-refinancing",
    highlights: ["Lower costs", "Improved cash flow", "Extract equity"]
  },
  {
    id: 'acquisition-renovation',
    title: "Acquisition & Renovation Financing",
    description: "Comprehensive financing for purchasing and improving commercial properties through integrated loan solutions perfect for value-add strategies.",
    icon: Handshake,
    path: "/services/acquisition-renovation-financing",
    highlights: ["Value-add strategies", "Integrated solutions", "Property transformation"]
  },
  {
    id: 'retail-financing',
    title: "Retail Property Financing",
    description: "Specialized financing solutions for retail properties including shopping centers, strip malls, and standalone retail buildings with flexible funding options.",
    icon: ShoppingCart,
    path: "/services/retail-property-financing",
    highlights: ["Shopping centers", "Strip malls", "Retail buildings"]
  },
  {
    id: 'office-financing',
    title: "Office Building Financing",
    description: "Comprehensive financing options for office buildings, corporate parks, and medical office facilities aligned with current office market trends.",
    icon: Building,
    path: "/services/office-building-financing",
    highlights: ["Office buildings", "Corporate parks", "Medical facilities"]
  }
]

export default function FeaturedServices() {
  return (
    <section className="py-20 md:py-24 bg-gray-50 relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5" style={{backgroundImage: 'url(/AdobeStock_246426046.jpeg)'}} />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#081c3e] mb-6">
            Our Commercial Real Estate Financing Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the core financing solutions Adams Real Estate Advisors offers to drive your project's success.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link href={service.path} key={service.id}>
              <Card className="h-full hover:shadow-2xl transition-all duration-300 border-[#b9945a]/20 cursor-pointer group hover:-translate-y-2 bg-white">
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-[#b9945a]/10 rounded-full group-hover:bg-[#b9945a]/20 transition-colors">
                      <service.icon className="h-12 w-12 text-[#b9945a] group-hover:scale-110 transition-transform" />
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-[#b9945a] transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-gray-600 text-center leading-relaxed">
                    {service.description}
                  </CardDescription>
                  
                  {/* Key highlights */}
                  <div className="pt-4 border-t border-gray-100">
                    <ul className="space-y-2 text-sm text-gray-600">
                      {service.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center justify-center">
                          <span className="w-1.5 h-1.5 bg-[#b9945a] rounded-full mr-2" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Learn more link */}
                  <div className="flex items-center justify-center text-[#b9945a] font-semibold group-hover:gap-2 transition-all pt-2">
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        
        {/* CTA to services page */}
        <div className="text-center mt-12">
          <Link href="/services">
            <span className="inline-flex items-center gap-2 text-[#081c3e] hover:text-[#b9945a] font-semibold text-lg transition-colors">
              View All Services
              <ArrowRight className="h-5 w-5" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
