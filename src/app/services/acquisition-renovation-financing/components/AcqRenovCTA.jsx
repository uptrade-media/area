'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, TrendingUp } from 'lucide-react'

export default function AcqRenovCTA() {
  return (
    <section className="py-20 md:py-24 bg-gradient-to-br from-[#081c3e] to-[#0a2347]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          <TrendingUp className="h-16 w-16 text-[#b9945a] mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Finance Your Value-Add Investment
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Let's discuss your acquisition and renovation plans and structure financing that supports your value-add strategy from purchase through stabilization.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link href="/contact">
              <Button 
                size="lg"
                className="bg-[#b9945a] hover:bg-[#a5834f] text-white px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all group"
              >
                Discuss Your Project
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/transactions">
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#081c3e] px-8 py-6 text-lg font-semibold transition-all"
              >
                View Success Stories
              </Button>
            </Link>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto">
            <div className="text-sm font-semibold mb-3">Ideal Properties for Acquisition & Renovation:</div>
            <div className="grid md:grid-cols-2 gap-3 text-sm text-gray-300">
              <div>✓ Underperforming assets</div>
              <div>✓ Below-market rents</div>
              <div>✓ Dated finishes</div>
              <div>✓ Deferred maintenance</div>
              <div>✓ Management issues</div>
              <div>✓ Repositioning opportunities</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
