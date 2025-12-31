'use client'

import { Target, Lightbulb, TrendingUp } from 'lucide-react'
import Image from 'next/image'

export default function CompanyStory() {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Our Story */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#081c3e] mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-lg">
                Founded in 1990, <strong className="text-[#081c3e]">Adams Real Estate Advisors</strong> has been at the forefront of commercial real estate financing for over three decades. What started as a vision to simplify complex financing for developers has grown into a trusted advisory firm with <strong>over $1.8 billion</strong> in successful transactions.
              </p>
              <p>
                Our journey began with a simple belief: that commercial real estate financing should be transparent, efficient, and tailored to each client's unique needs. Through economic cycles, market shifts, and industry transformations, we've maintained our commitment to this principle.
              </p>
              <p>
                Today, we serve <strong>200+ clients nationwide</strong>, from first-time developers to seasoned institutional investors, helping them secure the capital they need to bring their commercial real estate visions to life.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#081c3e] to-[#0a2347] flex items-center justify-center">
              {/* Placeholder for company image */}
              <div className="text-[#b9945a]/20">
                <Target className="h-32 w-32" />
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#b9945a]/10 rounded-2xl -z-10" />
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
