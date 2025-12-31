'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Quote, Star } from 'lucide-react'

const testimonials = [
  {
    quote: "Adams Real Estate Advisors secured the perfect construction loan for our hotel project. Their expertise and network are unmatched! The process was smooth and they negotiated excellent terms.",
    author: "John Doe",
    title: "CEO, Hospitality Group",
    rating: 5,
    project: "Hotel Development"
  },
  {
    quote: "The refinancing options provided by Adams Real Estate Advisors significantly improved our cash flow. Highly recommend their services. They saved us hundreds of thousands in interest.",
    author: "Jane Smith",
    title: "Real Estate Investor",
    rating: 5,
    project: "Portfolio Refinancing"
  },
  {
    quote: "Their team made the acquisition and renovation financing process seamless. A true partner in commercial real estate. They understood our vision and made it happen.",
    author: "Peter Jones",
    title: "Property Developer",
    rating: 5,
    project: "Mixed-Use Development"
  }
]

export default function ClientTestimonials() {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#081c3e] mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Hear from satisfied clients who have successfully financed their commercial real estate projects with Adams Real Estate Advisors.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="border-[#b9945a]/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-gray-50"
            >
              <CardContent className="pt-8 pb-6 px-6">
                {/* Quote icon */}
                <div className="flex justify-between items-start mb-4">
                  <Quote className="h-10 w-10 text-[#b9945a] opacity-50" />
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-[#b9945a] text-[#b9945a]" />
                    ))}
                  </div>
                </div>
                
                {/* Testimonial text */}
                <p className="text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
                
                {/* Project type badge */}
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-[#b9945a]/10 text-[#b9945a] text-xs font-semibold rounded-full">
                    {testimonial.project}
                  </span>
                </div>
                
                {/* Author info */}
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-bold text-[#081c3e] text-lg">{testimonial.author}</p>
                  <p className="text-gray-600 text-sm">{testimonial.title}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-8 px-8 py-6 bg-[#081c3e]/5 rounded-lg">
            <div className="text-center">
              <div className="text-2xl font-bold text-[#081c3e]">100%</div>
              <div className="text-sm text-gray-600">Client Satisfaction</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gray-300" />
            <div className="text-center">
              <div className="text-2xl font-bold text-[#081c3e]">4.9/5</div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gray-300" />
            <div className="text-center">
              <div className="text-2xl font-bold text-[#081c3e]">200+</div>
              <div className="text-sm text-gray-600">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
