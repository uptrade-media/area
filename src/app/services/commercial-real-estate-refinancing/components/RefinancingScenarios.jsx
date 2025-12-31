'use client'

import { CheckCircle } from 'lucide-react'

const scenarios = [
  {
    title: "Rate & Term Refinance",
    description: "Optimize your existing loan structure without extracting additional capital.",
    benefits: [
      "Lower interest rate to reduce payments",
      "Convert from variable to fixed rate",
      "Extend term to improve cash flow",
      "Switch from recourse to non-recourse"
    ],
    example: "$5M loan at 6.5% refinanced to 5.25%, saving $5,200/month"
  },
  {
    title: "Cash-Out Refinance",
    description: "Extract equity from appreciated properties to fund new opportunities.",
    benefits: [
      "Access equity without selling",
      "Fund property improvements",
      "Invest in additional properties",
      "Refinance up to 80% LTV"
    ],
    example: "$8M property refinanced for $6.4M, extracting $2M for new acquisition"
  },
  {
    title: "Loan Maturity Refinance",
    description: "Refinance before your existing loan matures to ensure continuity.",
    benefits: [
      "Avoid balloon payment pressure",
      "Lock in favorable rates early",
      "Prevent default risk",
      "Negotiate from position of strength"
    ],
    example: "Refinance 12 months before maturity to secure best terms"
  },
  {
    title: "Debt Consolidation",
    description: "Combine multiple loans into a single, more manageable financing package.",
    benefits: [
      "Simplify property management",
      "Reduce overall interest costs",
      "One payment instead of many",
      "Improve debt service coverage"
    ],
    example: "Consolidate 3 properties into one $15M loan with better terms"
  }
]

export default function RefinancingScenarios() {
  return (
    <section className="py-20 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#081c3e] mb-4">
            Refinancing Scenarios
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every property and situation is unique. We structure refinancing solutions tailored to your specific objectives.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {scenarios.map((scenario, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-[#b9945a]/10"
            >
              <h3 className="text-2xl font-bold text-[#081c3e] mb-3">{scenario.title}</h3>
              <p className="text-gray-600 mb-6">{scenario.description}</p>
              
              <div className="space-y-3 mb-6">
                <div className="font-semibold text-sm text-[#081c3e] mb-3">Key Benefits:</div>
                {scenario.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#b9945a] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <div className="pt-6 border-t border-gray-100">
                <div className="text-sm font-semibold text-[#081c3e] mb-2">Example:</div>
                <div className="text-sm text-gray-600 italic bg-[#b9945a]/5 p-3 rounded-lg">
                  {scenario.example}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
