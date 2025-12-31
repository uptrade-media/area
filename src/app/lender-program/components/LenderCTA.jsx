'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function LenderCTA() {
  return (
    <section className="py-24 md:py-32 bg-gray-50 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main CTA Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="p-8 md:p-12 lg:p-16 text-center">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-[#b9945a]" />
              <span className="text-[#b9945a] font-medium tracking-widest uppercase text-xs">Begin Partnership</span>
              <div className="h-px w-8 bg-[#b9945a]" />
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#081c3e] mb-6 tracking-tight">
              Explore a Partnership with AREA
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              We welcome conversations with capital providers interested in accessing institutional-quality commercial real estate opportunities.
            </p>
            
            <Link href="/contact">
              <Button 
                size="lg"
                className="bg-[#b9945a] hover:bg-[#a5834f] text-white px-10 py-7 text-lg font-medium shadow-lg hover:shadow-xl transition-all group"
              >
                Inquire About Partnership
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
          
          {/* Simple 3-step process - integrated at bottom */}
          <div className="bg-gradient-to-br from-gray-50 to-white px-8 py-12 md:px-12 md:py-16 border-t border-gray-100">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 max-w-3xl mx-auto">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-[#b9945a]/10 border border-[#b9945a]/20">
                  <span className="text-[#b9945a] font-semibold text-sm">01</span>
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-[#081c3e] text-sm mb-0.5">Introduction</h3>
                  <p className="text-xs text-gray-600">Share criteria</p>
                </div>
              </div>
              
              <div className="hidden md:block">
                <ArrowRight className="h-5 w-5 text-gray-300" />
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-[#b9945a]/10 border border-[#b9945a]/20">
                  <span className="text-[#b9945a] font-semibold text-sm">02</span>
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-[#081c3e] text-sm mb-0.5">Alignment</h3>
                  <p className="text-xs text-gray-600">Discuss fit</p>
                </div>
              </div>
              
              <div className="hidden md:block">
                <ArrowRight className="h-5 w-5 text-gray-300" />
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-[#b9945a]/10 border border-[#b9945a]/20">
                  <span className="text-[#b9945a] font-semibold text-sm">03</span>
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-[#081c3e] text-sm mb-0.5">Collaboration</h3>
                  <p className="text-xs text-gray-600">Receive deals</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
