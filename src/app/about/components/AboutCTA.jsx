'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Phone, Mail } from 'lucide-react'

export default function AboutCTA() {
  return (
    <section className="py-20 md:py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#081c3e] to-[#0a2347] rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left side - CTA content */}
            <div className="p-8 md:p-12 lg:p-16 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Partner with Us?
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Let's discuss how Adams Real Estate Advisors can help you achieve your commercial real estate financing goals. Our team is ready to provide expert guidance tailored to your unique project.
              </p>
              
              <div className="space-y-4 mb-8">
                <Link href="/contact">
                  <Button 
                    size="lg"
                    className="w-full sm:w-auto bg-[#b9945a] hover:bg-[#a5834f] text-white px-8 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 group"
                  >
                    Get Started Today
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
              
              {/* Quick contact info */}
              <div className="pt-8 border-t border-white/20 space-y-3">
                <div className="flex items-center gap-3 text-gray-300">
                  <Phone className="h-5 w-5 text-[#b9945a]" />
                  <a href="tel:5853032423" className="hover:text-white transition-colors">
                    (585) 303-2423
                  </a>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail className="h-5 w-5 text-[#b9945a]" />
                  <a href="mailto:Alan@AdamsRealEstateAdvisors.com" className="hover:text-white transition-colors">
                    Alan@AdamsRealEstateAdvisors.com
                  </a>
                </div>
              </div>
            </div>
            
            {/* Right side - Why choose us highlights */}
            <div className="bg-white p-8 md:p-12 lg:p-16">
              <h3 className="text-2xl font-bold text-[#081c3e] mb-6">
                Why Work With Us?
              </h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#b9945a]/10 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-[#b9945a] rounded-full" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#081c3e] mb-1">No Upfront Fees</h4>
                    <p className="text-gray-600">We only succeed when you do. No hidden costs or surprise charges.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#b9945a]/10 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-[#b9945a] rounded-full" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#081c3e] mb-1">Fast Response Time</h4>
                    <p className="text-gray-600">Get answers within 24 hours. We value your time as much as you do.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#b9945a]/10 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-[#b9945a] rounded-full" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#081c3e] mb-1">Nationwide Coverage</h4>
                    <p className="text-gray-600">We finance projects across all 50 states with local market expertise.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#b9945a]/10 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-[#b9945a] rounded-full" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#081c3e] mb-1">Dedicated Support</h4>
                    <p className="text-gray-600">Personal attention from initial inquiry through closing and beyond.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
