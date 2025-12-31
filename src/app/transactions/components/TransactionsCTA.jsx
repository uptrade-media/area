'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle } from 'lucide-react'

export default function TransactionsCTA() {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gradient-to-br from-[#081c3e] to-[#0a2347] rounded-3xl p-8 md:p-12 lg:p-16 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Add Your Project to Our Success Stories?
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join the ranks of successful developers and investors who have partnered with Adams Real Estate Advisors to secure optimal financing for their commercial real estate projects.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="flex items-center justify-center gap-2 text-gray-300">
              <CheckCircle className="h-5 w-5 text-[#b9945a]" />
              <span>Nationwide Service</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-300">
              <CheckCircle className="h-5 w-5 text-[#b9945a]" />
              <span>35+ Years Experience</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-300">
              <CheckCircle className="h-5 w-5 text-[#b9945a]" />
              <span>$1.8B+ Financed</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button 
                size="lg"
                className="bg-[#b9945a] hover:bg-[#a5834f] text-white px-8 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all group"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/services">
              <Button 
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-[#081c3e] px-8 py-6 text-lg font-semibold transition-all"
              >
                Explore Our Services
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
