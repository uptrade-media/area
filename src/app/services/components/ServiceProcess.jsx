'use client'

import { FileSearch, Users, FileCheck, Handshake, Clock } from 'lucide-react'

const steps = [
  {
    icon: FileSearch,
    title: "Initial Consultation",
    description: "We discuss your project details, financial goals, and timeline to understand your specific needs."
  },
  {
    icon: Users,
    title: "Lender Matching",
    description: "We leverage our extensive network to identify the best lenders for your project type and profile."
  },
  {
    icon: FileCheck,
    title: "Application & Documentation",
    description: "We guide you through the application process and help prepare all required documentation."
  },
  {
    icon: Handshake,
    title: "Term Negotiation",
    description: "We negotiate with lenders on your behalf to secure the most favorable rates and terms."
  },
  {
    icon: Clock,
    title: "Closing & Funding",
    description: "We manage the closing process to ensure smooth execution and timely funding of your project."
  }
]

export default function ServiceProcess() {
  return (
    <section className="py-20 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#081c3e] mb-4">
            How We Work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our proven process ensures you get the right financing solution with minimal hassle and maximum results.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line - hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#b9945a]/30 -translate-x-1/2" />
          
          <div className="space-y-12 md:space-y-16">
            {steps.map((step, index) => (
              <div key={index} className={`relative flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                      <step.icon className="h-6 w-6 text-[#b9945a]" />
                      <h3 className="text-xl font-bold text-[#081c3e]">{step.title}</h3>
                    </div>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
                
                {/* Center number */}
                <div className="flex-shrink-0 relative z-10">
                  <div className="w-12 h-12 bg-[#b9945a] text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                    {index + 1}
                  </div>
                </div>
                
                {/* Spacer */}
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
