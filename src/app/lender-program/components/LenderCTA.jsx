'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Mail } from 'lucide-react'

export default function LenderCTA() {
  return (
    <section className="py-20 md:py-24 bg-gradient-to-br from-[#081c3e] to-[#0a2347]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Lender Network
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Ready to expand your commercial real estate loan portfolio? Let's discuss how partnering with Adams Real Estate Advisors can grow your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link href="/contact">
              <Button 
                size="lg"
                className="bg-[#b9945a] hover:bg-[#a5834f] text-white px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all group"
              >
                Apply to Partner
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <a href="mailto:info@adamsrealestateadvisors.com">
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#081c3e] px-8 py-6 text-lg font-semibold transition-all"
              >
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </Button>
            </a>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 max-w-3xl mx-auto">
            <h3 className="text-xl font-bold mb-6">Application Process</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold text-[#b9945a] mb-2">1</div>
                <div className="font-semibold mb-2">Submit Information</div>
                <div className="text-sm text-gray-300">Company overview, lending programs, and contact details</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#b9945a] mb-2">2</div>
                <div className="font-semibold mb-2">Initial Discussion</div>
                <div className="text-sm text-gray-300">Phone call to discuss lending criteria and partnership fit</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#b9945a] mb-2">3</div>
                <div className="font-semibold mb-2">Start Receiving Deals</div>
                <div className="text-sm text-gray-300">Begin receiving qualified loan opportunities matching your criteria</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
