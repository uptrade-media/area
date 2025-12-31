'use client'

import { Award, Users, Handshake } from 'lucide-react'

const benefits = [
  {
    icon: Award,
    title: "Proven Expertise",
    description: "Over 35 years of experience in complex commercial real estate finance. Our team has successfully navigated every market cycle and economic condition."
  },
  {
    icon: Users,
    title: "Vast Lender Network",
    description: "Access to a broad network of traditional banks, credit unions, and private capital sources. We find the right fit for your unique project needs."
  },
  {
    icon: Handshake,
    title: "Tailored Solutions",
    description: "Customized financing strategies designed for your unique project needs. No cookie-cutter approaches—every deal gets personalized attention."
  }
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#081c3e] mb-6">
            Why Partner with Adams Real Estate Advisors?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We combine deep industry knowledge with a client-centric approach to deliver superior commercial real estate financing outcomes.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="text-center p-8 rounded-xl shadow-lg bg-gradient-to-br from-[#b9945a]/5 to-transparent hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-[#b9945a]/10"
            >
              <div className="inline-flex p-4 bg-[#b9945a]/10 rounded-full mb-6">
                <benefit.icon className="h-12 w-12 text-[#b9945a]" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#081c3e]">{benefit.title}</h3>
              <p className="text-gray-700 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
