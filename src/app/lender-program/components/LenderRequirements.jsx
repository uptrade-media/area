'use client'

import { CheckCircle, XCircle } from 'lucide-react'

const idealLenders = [
  "Banks and credit unions with commercial real estate focus",
  "Life insurance companies seeking CRE investments",
  "CMBS lenders and conduit programs",
  "Private debt funds and alternative lenders",
  "Mortgage REITs and investment funds",
  "Regional and national correspondent lenders"
]

const typicalRequirements = [
  "Minimum $2M loan size capability",
  "Experience in commercial real estate lending",
  "Competitive pricing and terms",
  "Ability to close within 45-90 days",
  "Professional communication and responsiveness",
  "Track record of successful closings"
]

const notGoodFit = [
  "Residential mortgage lenders only",
  "Lenders with maximum loan sizes under $2M",
  "High-cost or predatory lending programs",
  "Inability to meet standard closing timelines"
]

export default function LenderRequirements() {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#081c3e] mb-4">
            Partner Requirements
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We maintain high standards to ensure quality experiences for both lenders and borrowers.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Ideal Partners */}
          <div className="bg-gradient-to-br from-[#b9945a]/10 to-[#b9945a]/5 rounded-xl p-8 border border-[#b9945a]/20">
            <h3 className="text-2xl font-bold text-[#081c3e] mb-6">Ideal Partners</h3>
            <div className="space-y-3">
              {idealLenders.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#b9945a] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Requirements */}
          <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-[#081c3e] mb-6">Typical Requirements</h3>
            <div className="space-y-3">
              {typicalRequirements.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#081c3e] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Not a Good Fit */}
          <div className="bg-red-50 rounded-xl p-8 border border-red-100">
            <h3 className="text-2xl font-bold text-red-900 mb-6">Not a Good Fit</h3>
            <div className="space-y-3">
              {notGoodFit.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <XCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
