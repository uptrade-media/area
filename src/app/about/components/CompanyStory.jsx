'use client'

import { Target, Lightbulb, TrendingUp, Linkedin } from 'lucide-react'
import Image from 'next/image'

export default function CompanyStory() {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Our Story */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#081c3e] mb-6">
              Providing Commercial Real Estate Financing for 35+ Years
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-lg">
                <strong className="text-[#081c3e]">Relationships Matter.</strong> As the commercial real estate market continues to evolve, the importance of strong lender relationships is key. Adams Real Estate Advisors has achieved success by cultivating relationships with some of the nation's premier lending institutions including life insurance companies, conduits, banks, and private lenders.
              </p>
              <p>
                In today's changing market, Adams Real Estate Advisors' role is more valuable than ever. We have access to a number of different lending sources that help to ensure you secure the most competitive financing available today.
              </p>
            </div>
            
            {/* Signature and title */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="mb-2">
                <span className="text-4xl font-['Brush_Script_MT','Segoe_Script','cursive'] text-[#b9945a]" style={{ fontWeight: 400 }}>Alan A. Adams</span>
              </div>
              <p className="text-gray-600 font-semibold tracking-wider text-sm mb-4">FOUNDER & PRINCIPAL</p>
              
              {/* LinkedIn button */}
              <a 
                href="https://www.linkedin.com/in/alan-adams-0283849/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#0077B5] hover:bg-[#006399] text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Linkedin className="h-5 w-5" />
                Connect on LinkedIn
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl max-w-md mx-auto">
              <Image
                src="/Alanupscaled.jpg"
                alt="Alan Adams - Founder of Adams Real Estate Advisors"
                width={450}
                height={600}
                className="object-cover w-full h-full"
                priority
              />
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#b9945a]/10 rounded-2xl -z-10" />
          </div>
        </div>

        {/* Company History - Our Journey */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#081c3e] mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600">Company History</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {/* Timeline items */}
              <div className="flex gap-6 group">
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#b9945a] text-white font-bold text-lg flex-shrink-0 shadow-lg">
                    2001
                  </div>
                  <div className="w-1 h-full bg-[#b9945a]/20 mt-4"></div>
                </div>
                <div className="pb-12 flex-1">
                  <h3 className="text-xl font-bold text-[#081c3e] mb-2">Company Founded</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Adams Mortgage Capital, parent company of Adams Real Estate Advisors, established by Alan Adams, with an intention to provide quality commercial real estate financing.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#b9945a] text-white font-bold text-lg flex-shrink-0 shadow-lg">
                    2002
                  </div>
                  <div className="w-1 h-full bg-[#b9945a]/20 mt-4"></div>
                </div>
                <div className="pb-12 flex-1">
                  <h3 className="text-xl font-bold text-[#081c3e] mb-2">Regional Expansion</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Expanded operations to serve clients across the Midwest, establishing key lender relationships.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#b9945a] text-white font-bold text-lg flex-shrink-0 shadow-lg">
                    2005
                  </div>
                  <div className="w-1 h-full bg-[#b9945a]/20 mt-4"></div>
                </div>
                <div className="pb-12 flex-1">
                  <h3 className="text-xl font-bold text-[#081c3e] mb-2">$500M Milestone</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Reached $500 million in total financing, cementing our position as a trusted industry leader.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#b9945a] text-white font-bold text-lg flex-shrink-0 shadow-lg">
                    2010
                  </div>
                  <div className="w-1 h-full bg-[#b9945a]/20 mt-4"></div>
                </div>
                <div className="pb-12 flex-1">
                  <h3 className="text-xl font-bold text-[#081c3e] mb-2">Technology Integration</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Implemented cutting-edge technology platforms to streamline the financing process for clients.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#b9945a] text-white font-bold text-lg flex-shrink-0 shadow-lg">
                    2015
                  </div>
                  <div className="w-1 h-full bg-[#b9945a]/20 mt-4"></div>
                </div>
                <div className="pb-12 flex-1">
                  <h3 className="text-xl font-bold text-[#081c3e] mb-2">$1B Achievement</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Surpassed $1 billion in total financing, demonstrating consistent growth and client trust.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#b9945a] text-white font-bold text-lg flex-shrink-0 shadow-lg">
                    2020
                  </div>
                  <div className="w-1 h-full bg-[#b9945a]/20 mt-4"></div>
                </div>
                <div className="pb-12 flex-1">
                  <h3 className="text-xl font-bold text-[#081c3e] mb-2">Market Leadership</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Navigated challenging market conditions while maintaining strong performance and client relationships.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#b9945a] text-white font-bold text-lg flex-shrink-0 shadow-lg">
                    2022
                  </div>
                  <div className="w-1 h-full bg-[#b9945a]/20 mt-4"></div>
                </div>
                <div className="pb-12 flex-1">
                  <h3 className="text-xl font-bold text-[#081c3e] mb-2">Digital Innovation</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Launched advanced digital platforms for enhanced client experience and faster processing.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#b9945a] text-white font-bold text-lg flex-shrink-0 shadow-lg">
                    2024
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#081c3e] mb-2">$1.8B+ Milestone</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Achieved $1.8 billion in total financing, continuing our legacy of excellence and growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <div className="bg-gradient-to-br from-[#081c3e] to-[#0a2347] rounded-2xl p-8 md:p-10 text-white">
            <div className="inline-flex p-3 bg-[#b9945a]/20 rounded-full mb-6">
              <Target className="h-8 w-8 text-[#b9945a]" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-300 leading-relaxed">
              To empower commercial real estate developers and investors by providing expert guidance, innovative financing solutions, and unparalleled access to capital markets. We strive to be more than advisors—we aim to be trusted partners in every project's success.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-[#b9945a] to-[#a5834f] rounded-2xl p-8 md:p-10 text-white">
            <div className="inline-flex p-3 bg-white/20 rounded-full mb-6">
              <Lightbulb className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Vision</h3>
            <p className="text-white/90 leading-relaxed">
              To be the most trusted name in commercial real estate financing, recognized for our integrity, expertise, and commitment to client success. We envision a future where every viable commercial real estate project has access to the capital it needs to thrive.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
