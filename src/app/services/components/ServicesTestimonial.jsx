'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Quote, ArrowRight } from 'lucide-react'

export default function ServicesTestimonial() {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Testimonial */}
        <div className="bg-gradient-to-br from-[#081c3e] to-[#0a2347] rounded-3xl p-8 md:p-12 lg:p-16 text-white text-center mb-12">
          <Quote className="h-12 w-12 text-[#b9945a] mx-auto mb-6 opacity-50" />
          <blockquote className="text-2xl md:text-3xl font-medium mb-8 leading-relaxed">
            "Adams Real Estate Advisors doesn't just find financing—they find the right financing. Their deep market knowledge and extensive lender relationships consistently deliver better terms than we could secure on our own."
          </blockquote>
          <div className="text-lg">
            <div className="font-bold text-[#b9945a]">Michael Rodriguez</div>
            <div className="text-gray-400">Principal, Commercial Development Group</div>
            <div className="text-sm text-gray-500 mt-2">$50M+ in Projects Financed</div>
          </div>
        </div>
        
        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#081c3e] mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss your commercial real estate financing needs and explore which solution is right for your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button 
                size="lg"
                className="bg-[#b9945a] hover:bg-[#a5834f] text-white px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all group"
              >
                Schedule a Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/transactions">
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-[#081c3e] text-[#081c3e] hover:bg-[#081c3e] hover:text-white px-8 py-6 text-lg font-semibold transition-all"
              >
                View Our Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
