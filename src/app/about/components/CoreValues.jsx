'use client'

import { Shield, Users, Lightbulb, Heart } from 'lucide-react'

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description: "We operate with complete transparency and honesty in every transaction. Your trust is our most valuable asset, and we never compromise on ethical standards.",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Users,
    title: "Client-Centric",
    description: "Your success is our success. We tailor every solution to your unique needs and remain committed to your long-term prosperity beyond deal closing.",
    color: "from-[#b9945a] to-[#a5834f]"
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We stay ahead of market trends and continuously explore creative financing structures to give you a competitive advantage in every deal.",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: Heart,
    title: "Partnership",
    description: "We view every client relationship as a long-term partnership. We celebrate your wins, support you through challenges, and grow together.",
    color: "from-red-500 to-red-600"
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
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Commitment to You</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              At Adams Real Estate Advisors, we don't just facilitate financing—we build lasting relationships. 
              We're committed to being your trusted advisor through every stage of your commercial real estate journey, 
              from initial consultation to deal closing and beyond. <strong className="text-[#b9945a]">Your success is our mission.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
