'use client'

import { CheckCircle } from 'lucide-react'

const programs = [
  {
    title: "Fixed-Rate Mortgages",
    description: "Predictable payments with interest rates locked for the life of the loan.",
    features: [
      "5, 7, 10, 15, 20, 25, 30-year terms",
      "Full amortization available",
      "Prepayment options",
      "Rate lock at application"
    ],
    idealFor: "Investors seeking long-term payment stability"
  },
  {
    title: "Variable-Rate Mortgages",
    description: "Lower initial rates with periodic adjustments based on market indices.",
    features: [
      "SOFR-based index options",
      "Interest rate caps available",
      "3, 5, 7-year initial fixed periods",
      "Lower starting rates"
    ],
    idealFor: "Borrowers expecting rates to decline or planning shorter hold periods"
  },
  {
    title: "Bridge-to-Perm Loans",
    description: "Seamless transition from construction or bridge financing to permanent mortgage.",
    features: [
      "Single closing option",
      "Rate lock during stabilization",
      "Flexible transition timing",
      "Reduced closing costs"
    ],
    idealFor: "New developments transitioning to stabilized operations"
  },
  {
    title: "SBA 504 Loans",
    description: "Government-backed financing for owner-occupied commercial properties.",
    features: [
      "Up to 90% LTV",
      "Fixed rates below market",
      "25-year terms",
      "Low down payment"
    ],
    idealFor: "Owner-occupied properties and operating businesses"
  }
]

export default function LoanPrograms() {
  return (
    <section className="py-20 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#081c3e] mb-4">
            Loan Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from a variety of permanent mortgage programs to match your investment strategy.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-[#b9945a]/10"
            >
              <h3 className="text-2xl font-bold text-[#081c3e] mb-3">{program.title}</h3>
              <p className="text-gray-600 mb-6">{program.description}</p>
              
              <div className="space-y-3 mb-6">
                {program.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#b9945a] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="pt-6 border-t border-gray-100">
                <div className="text-sm font-semibold text-[#081c3e] mb-1">Ideal For:</div>
                <div className="text-sm text-gray-600 italic">{program.idealFor}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
