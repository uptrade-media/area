'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Send, CheckCircle2 } from 'lucide-react'

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1500)
  }

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
        <div className="inline-flex p-4 bg-green-100 rounded-full mb-6">
          <CheckCircle2 className="h-12 w-12 text-green-600" />
        </div>
        <h2 className="text-3xl font-bold text-[#081c3e] mb-4">
          Thank You!
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          We've received your inquiry and will get back to you within 24 hours.
        </p>
        <Button 
          onClick={() => setIsSubmitted(false)}
          variant="outline"
          className="border-[#b9945a] text-[#b9945a] hover:bg-[#b9945a] hover:text-white"
        >
          Submit Another Inquiry
        </Button>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
      <h2 className="text-3xl font-bold text-[#081c3e] mb-2">
        Start Your Financing Journey
      </h2>
      <p className="text-gray-600 mb-8">
        Fill out the form below and one of our financing experts will contact you shortly.
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name fields */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name *</Label>
            <Input 
              id="firstName" 
              required 
              placeholder="John"
              className="border-gray-300 focus:border-[#b9945a] focus:ring-[#b9945a]"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name *</Label>
            <Input 
              id="lastName" 
              required 
              placeholder="Doe"
              className="border-gray-300 focus:border-[#b9945a] focus:ring-[#b9945a]"
            />
          </div>
        </div>
        
        {/* Contact fields */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input 
              id="email" 
              type="email" 
              required 
              placeholder="john@company.com"
              className="border-gray-300 focus:border-[#b9945a] focus:ring-[#b9945a]"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number *</Label>
            <Input 
              id="phone" 
              type="tel" 
              required 
              placeholder="(555) 123-4567"
              className="border-gray-300 focus:border-[#b9945a] focus:ring-[#b9945a]"
            />
          </div>
        </div>
        
        {/* Company */}
        <div className="space-y-2">
          <Label htmlFor="company">Company Name</Label>
          <Input 
            id="company" 
            placeholder="Your Company LLC"
            className="border-gray-300 focus:border-[#b9945a] focus:ring-[#b9945a]"
          />
        </div>
        
        {/* Project details */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="financingType">Financing Type *</Label>
            <Select required>
              <SelectTrigger className="border-gray-300 focus:border-[#b9945a] focus:ring-[#b9945a]">
                <SelectValue placeholder="Select financing type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="construction">Construction Loan</SelectItem>
                <SelectItem value="permanent">Permanent Mortgage</SelectItem>
                <SelectItem value="refinancing">Refinancing</SelectItem>
                <SelectItem value="acquisition">Acquisition & Renovation</SelectItem>
                <SelectItem value="retail">Retail Property</SelectItem>
                <SelectItem value="office">Office Building</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="loanAmount">Estimated Loan Amount</Label>
            <Input 
              id="loanAmount" 
              placeholder="$5,000,000"
              className="border-gray-300 focus:border-[#b9945a] focus:ring-[#b9945a]"
            />
          </div>
        </div>
        
        {/* Property location */}
        <div className="space-y-2">
          <Label htmlFor="location">Property Location (City, State)</Label>
          <Input 
            id="location" 
            placeholder="Rochester, NY"
            className="border-gray-300 focus:border-[#b9945a] focus:ring-[#b9945a]"
          />
        </div>
        
        {/* Message */}
        <div className="space-y-2">
          <Label htmlFor="message">Project Details *</Label>
          <Textarea 
            id="message" 
            required 
            rows={6}
            placeholder="Tell us about your project, timeline, and any specific requirements..."
            className="border-gray-300 focus:border-[#b9945a] focus:ring-[#b9945a] resize-none"
          />
        </div>
        
        {/* Submit button */}
        <Button 
          type="submit" 
          size="lg"
          disabled={isSubmitting}
          className="w-full bg-[#b9945a] hover:bg-[#a5834f] text-white font-semibold py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2" />
              Sending...
            </>
          ) : (
            <>
              <Send className="mr-2 h-5 w-5" />
              Send Inquiry
            </>
          )}
        </Button>
        
        <p className="text-sm text-gray-500 text-center">
          By submitting this form, you agree to be contacted by Adams Real Estate Advisors regarding your inquiry.
        </p>
      </form>
    </div>
  )
}
