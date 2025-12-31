'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: "How quickly can I expect a response?",
    answer: "We pride ourselves on our responsiveness. You'll receive an initial response within 24 hours of submitting your inquiry, often much sooner during business hours."
  },
  {
    question: "Is there a consultation fee?",
    answer: "No, our initial consultation is completely free with no obligation. We only succeed when you do, and our fees are competitive and transparent."
  },
  {
    question: "What information should I have ready?",
    answer: "To help us serve you better, have basic project details ready: property type, location, estimated project cost, your experience level, and timeline. Don't worry if you don't have all details—we'll help you work through it."
  },
  {
    question: "Do you work with first-time developers?",
    answer: "Absolutely! We work with developers at all experience levels, from first-timers to seasoned veterans. We'll guide you through the entire process and help you build a strong application."
  },
  {
    question: "What areas do you serve?",
    answer: "We finance commercial real estate projects nationwide across all 50 states. Our lender network and expertise allow us to serve clients from coast to coast."
  },
  {
    question: "How long does the financing process typically take?",
    answer: "Timeline varies by project complexity and lender, but most deals close within 45-90 days. We work diligently to expedite the process without compromising quality."
  }
]

export default function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#081c3e] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Quick answers to common questions about contacting us
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200 hover:border-[#b9945a]/30 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-100 transition-colors"
              >
                <span className="font-semibold text-[#081c3e] pr-4">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-[#b9945a] flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Still have questions?{' '}
            <a href="tel:5853032423" className="text-[#b9945a] hover:text-[#a5834f] font-semibold">
              Call us at (585) 303-2423
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
