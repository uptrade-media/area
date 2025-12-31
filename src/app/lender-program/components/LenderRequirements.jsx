'use client'

import { Building2, Shield, Landmark, TrendingUp, Briefcase, Users } from 'lucide-react'

const partnerTypes = [
  {
    icon: Landmark,
    title: "Banks & Credit Unions",
    description: "Regional and national institutions with established commercial real estate divisions"
  },
  {
    icon: Shield,
    title: "Life Insurance Companies",
    description: "Long-term capital providers seeking stabilized commercial investments"
  },
  {
    icon: TrendingUp,
    title: "CMBS & Conduit Programs",
    description: "Capital markets lenders with competitive pricing and execution"
  },
  {
    icon: Briefcase,
    title: "Private Debt Funds",
    description: "Alternative lenders offering flexibility for transitional assets"
  },
  {
    icon: Building2,
    title: "Mortgage REITs",
    description: "Investment funds seeking consistent commercial real estate returns"
  },
  {
    icon: Users,
    title: "Correspondent Lenders",
    description: "Intermediaries with strong balance sheet or agency relationships"
  }
]

export default function LenderRequirements() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left column - Partner types */}
          <div>
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-[#b9945a]" />
              <span className="text-[#b9945a] font-medium tracking-widest uppercase text-xs">Our Partners</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#081c3e] mb-6 tracking-tight">
              Ideal Lender Profile
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed font-light mb-12">
              We partner with institutional capital providers who share our commitment to execution excellence and client service.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {partnerTypes.map((partner, index) => (
                <div key={index} className="flex gap-4">
                  <div className="p-2 bg-[#081c3e]/5 rounded-lg h-fit">
                    <partner.icon className="h-5 w-5 text-[#b9945a]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#081c3e] mb-1">{partner.title}</h3>
                    <p className="text-sm text-gray-600">{partner.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right column - Partnership standards */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-10 border border-gray-100">
            <h3 className="text-2xl font-bold text-[#081c3e] mb-8">Partnership Standards</h3>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="h-8 w-8 rounded-full bg-[#b9945a]/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-[#b9945a] font-semibold text-sm">01</span>
                </div>
                <div>
                  <h4 className="font-semibold text-[#081c3e] mb-1">Capacity</h4>
                  <p className="text-gray-600">Minimum $2M loan size capability with flexibility for larger transactions</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="h-8 w-8 rounded-full bg-[#b9945a]/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-[#b9945a] font-semibold text-sm">02</span>
                </div>
                <div>
                  <h4 className="font-semibold text-[#081c3e] mb-1">Experience</h4>
                  <p className="text-gray-600">Demonstrated track record in commercial real estate lending</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="h-8 w-8 rounded-full bg-[#b9945a]/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-[#b9945a] font-semibold text-sm">03</span>
                </div>
                <div>
                  <h4 className="font-semibold text-[#081c3e] mb-1">Competitive Terms</h4>
                  <p className="text-gray-600">Market-rate pricing with clear, transparent fee structures</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="h-8 w-8 rounded-full bg-[#b9945a]/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-[#b9945a] font-semibold text-sm">04</span>
                </div>
                <div>
                  <h4 className="font-semibold text-[#081c3e] mb-1">Execution</h4>
                  <p className="text-gray-600">Ability to close within 45-90 days with responsive communication</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="h-8 w-8 rounded-full bg-[#b9945a]/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-[#b9945a] font-semibold text-sm">05</span>
                </div>
                <div>
                  <h4 className="font-semibold text-[#081c3e] mb-1">Professionalism</h4>
                  <p className="text-gray-600">Commitment to ethical practices and long-term relationship building</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
