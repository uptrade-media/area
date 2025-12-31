'use client'

import { Phone, Mail, MapPin, Clock, Linkedin } from 'lucide-react'
import { Card } from '@/components/ui/card'

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      {/* Primary contact card */}
      <Card className="p-6 bg-gradient-to-br from-[#081c3e] to-[#0a2347] text-white border-none shadow-xl">
        <h3 className="text-xl font-bold mb-6">Contact Information</h3>
        
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <Phone className="h-5 w-5 text-[#b9945a] flex-shrink-0 mt-1" />
            <div>
              <div className="font-semibold mb-1">Phone</div>
              <a href="tel:5853032423" className="text-gray-300 hover:text-white transition-colors">
                (585) 303-2423
              </a>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <Mail className="h-5 w-5 text-[#b9945a] flex-shrink-0 mt-1" />
            <div>
              <div className="font-semibold mb-1">Email</div>
              <a href="mailto:Alan@AdamsRealEstateAdvisors.com" className="text-gray-300 hover:text-white transition-colors break-all">
                Alan@AdamsRealEstateAdvisors.com
              </a>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <MapPin className="h-5 w-5 text-[#b9945a] flex-shrink-0 mt-1" />
            <div>
              <div className="font-semibold mb-1">Office</div>
              <div className="text-gray-300">
                112 Old English Drive<br />
                Rochester, NY 14616
              </div>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <Clock className="h-5 w-5 text-[#b9945a] flex-shrink-0 mt-1" />
            <div>
              <div className="font-semibold mb-1">Business Hours</div>
              <div className="text-gray-300">
                Monday - Friday: 9:00 AM - 6:00 PM EST<br />
                Saturday: By Appointment<br />
                Sunday: Closed
              </div>
            </div>
          </div>
        </div>
      </Card>
      
      {/* Why contact us */}
      <Card className="p-6 shadow-lg">
        <h3 className="text-xl font-bold text-[#081c3e] mb-4">
          What Happens Next?
        </h3>
        <div className="space-y-4 text-sm">
          <div className="flex gap-3">
            <div className="flex-shrink-0 w-6 h-6 bg-[#b9945a] text-white rounded-full flex items-center justify-center font-bold text-xs">
              1
            </div>
            <div>
              <div className="font-semibold text-[#081c3e]">Immediate Confirmation</div>
              <div className="text-gray-600">You'll receive an email confirming we received your inquiry.</div>
            </div>
          </div>
          
          <div className="flex gap-3">
            <div className="flex-shrink-0 w-6 h-6 bg-[#b9945a] text-white rounded-full flex items-center justify-center font-bold text-xs">
              2
            </div>
            <div>
              <div className="font-semibold text-[#081c3e]">Expert Review</div>
              <div className="text-gray-600">Our team reviews your project details and financing needs.</div>
            </div>
          </div>
          
          <div className="flex gap-3">
            <div className="flex-shrink-0 w-6 h-6 bg-[#b9945a] text-white rounded-full flex items-center justify-center font-bold text-xs">
              3
            </div>
            <div>
              <div className="font-semibold text-[#081c3e]">Personal Outreach</div>
              <div className="text-gray-600">A senior advisor contacts you within 24 hours to discuss options.</div>
            </div>
          </div>
          
          <div className="flex gap-3">
            <div className="flex-shrink-0 w-6 h-6 bg-[#b9945a] text-white rounded-full flex items-center justify-center font-bold text-xs">
              4
            </div>
            <div>
              <div className="font-semibold text-[#081c3e]">Tailored Solutions</div>
              <div className="text-gray-600">We present financing options customized for your project.</div>
            </div>
          </div>
        </div>
      </Card>
      
      {/* Trust badges */}
      <Card className="p-6 bg-[#b9945a]/5 border-[#b9945a]/20">
        <div className="text-center space-y-3">
          <div className="text-3xl font-bold text-[#081c3e]">$1.8B+</div>
          <div className="text-sm text-gray-600">Successfully Financed</div>
          <div className="text-xs text-gray-500 pt-2 border-t">
            Join 200+ satisfied clients nationwide
          </div>
        </div>
      </Card>
    </div>
  )
}
