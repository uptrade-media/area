'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Phone } from 'lucide-react'

export default function RetailCTA() {
  return (
    <section className="py-20 md:py-24 bg-gradient-to-br from-[#081c3e] to-[#0a2347]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Finance Your Retail Investment
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Whether you're acquiring a shopping center, developing a retail project, or refinancing an existing property, we'll connect you with the right lender and optimal terms.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link href="/contact">
              <Button 
                size="lg"
                className="bg-[#b9945a] hover:bg-[#a5834f] text-white px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all group"
              >
                Discuss Your Property
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <a href="tel:5853032423">
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#081c3e] px-8 py-6 text-lg font-semibold transition-all"
              >
                <Phone className="mr-2 h-5 w-5" />
                (585) 303-2423
              </Button>
            </a>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto">
            <div className="text-sm font-semibold mb-3">Retail Financing Success Factors:</div>
            <div className="grid md:grid-cols-2 gap-3 text-sm text-gray-300">
              <div>✓ Strong anchor tenants</div>
              <div>✓ Solid tenant sales</div>
              <div>✓ Long lease terms</div>
              <div>✓ Low vacancy rates</div>
              <div>✓ Prime locations</div>
              <div>✓ Experienced ownership</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
