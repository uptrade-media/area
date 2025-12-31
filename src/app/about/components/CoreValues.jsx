'use client'

import { Shield, TrendingUp, Users, Handshake } from 'lucide-react'

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description: "We operate with complete transparency in every transaction. Our reputation is built on ethical practices, honest guidance, and doing what's right for our clients—always.",
    color: "from-[#081c3e] to-[#0a2347]"
  },
  {
    icon: TrendingUp,
    title: "Expertise",
    description: "With 35+ years in commercial real estate finance, we bring deep market knowledge, proven strategies, and sophisticated capital placement capabilities to every engagement.",
    color: "from-[#b9945a] to-[#a5834f]"
  },
  {
    icon: Users,
    title: "Client Focus",
    description: "Your objectives drive our approach. We structure financing solutions tailored to your property type, investment strategy, and business goals—not one-size-fits-all products.",
    color: "from-[#081c3e] to-[#0a2347]"
  },
  {
    icon: Handshake,
    title: "Relationship-Driven",
    description: "We build lasting partnerships with both clients and lenders. Our extensive network and collaborative approach deliver better terms and smoother closings.",
    color: "from-[#b9945a] to-[#a5834f]"
  }
]

export default function CoreValues() {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#081c3e] mb-6">
            Our Core Values
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            These principles guide every decision we make and every relationship we build.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="group relative"
            >
              {/* Card */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-gray-100 hover:border-transparent">
                {/* Icon with gradient background */}
                <div className={`inline-flex p-4 rounded-full bg-gradient-to-br ${value.color} mb-6 group-hover:scale-110 transition-transform`}>
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-[#081c3e] mb-4">
                  {value.title}
                </h3>
                
                <p className="text-gray-700 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Commitment statement */}
        <div className="mt-16 text-center max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-[#081c3e] to-[#0a2347] rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Commitment to Excellence</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              Since 1990, Adams Real Estate Advisors has maintained an unwavering commitment to professional excellence and client service. 
              We leverage our institutional knowledge, lender relationships, and market expertise to secure <strong className="text-[#b9945a]">optimal financing terms</strong> for every transaction. 
              Your success is our measure of achievement.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
