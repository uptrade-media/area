'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Calculator } from 'lucide-react'

export default function RefinancingCTA() {
  return (
    <section className="py-20 md:py-24 bg-gradient-to-br from-[#081c3e] to-[#0a2347]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Is Refinancing Right for You?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Let's analyze your current loan structure and explore refinancing options that could improve your cash flow and investment returns.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link href="/contact">
              <Button 
                size="lg"
                className="bg-[#b9945a] hover:bg-[#a5834f] text-white px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all group"
              >
                <Calculator className="mr-2 h-5 w-5" />
                Get a Refinance Analysis
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto">
            <div className="text-sm font-semibold mb-3">Good Candidates for Refinancing:</div>
            <div className="grid md:grid-cols-2 gap-3 text-sm text-gray-300">
              <div>✓ Interest rates have dropped</div>
              <div>✓ Property value has increased</div>
              <div>✓ Loan maturing in 12-24 months</div>
              <div>✓ Need to extract equity</div>
              <div>✓ Want to improve loan terms</div>
              <div>✓ Multiple loans to consolidate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
