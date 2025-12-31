'use client'

import { MessageSquare, Clock, CheckCircle } from 'lucide-react'

export default function ContactHero() {
  return (
    <section className="relative py-16 md:py-20 bg-gradient-to-br from-[#081c3e] to-[#0a2347] text-white overflow-hidden">
      {/* Cube background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(30deg, #b9945a 12%, transparent 12.5%, transparent 87%, #b9945a 87.5%, #b9945a), linear-gradient(150deg, #b9945a 12%, transparent 12.5%, transparent 87%, #b9945a 87.5%, #b9945a), linear-gradient(30deg, #b9945a 12%, transparent 12.5%, transparent 87%, #b9945a 87.5%, #b9945a), linear-gradient(150deg, #b9945a 12%, transparent 12.5%, transparent 87%, #b9945a 87.5%, #b9945a)',
          backgroundSize: '80px 140px',
          backgroundPosition: '0 0, 0 0, 40px 70px, 40px 70px'
        }} />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#b9945a]/20 rounded-full mb-6 border border-[#b9945a]/30">
            <MessageSquare className="h-5 w-5 text-[#b9945a]" />
            <span className="text-[#b9945a] font-semibold">Let's Talk</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get Your Free Consultation
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Ready to discuss your commercial real estate financing needs? Our team of experts is here to help you find the right capital solution for your project.
          </p>
          
          {/* Quick highlights */}
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-[#b9945a]" />
              <span className="text-gray-300">24-Hour Response Time</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-[#b9945a]" />
              <span className="text-gray-300">No Obligation Consultation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
