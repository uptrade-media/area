'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Home, Search, ArrowLeft, Building2 } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* 404 Visual */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-32 h-32 bg-[#081c3e]/10 rounded-full mb-6">
            <Building2 className="h-16 w-16 text-[#081c3e]" />
          </div>
          <h1 className="text-7xl md:text-9xl font-bold text-[#081c3e] mb-4">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Page Not Found
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        {/* Quick Links */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h3 className="text-xl font-semibold text-[#081c3e] mb-6">
            Where would you like to go?
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/" className="block">
              <Button 
                variant="outline"
                className="w-full border-2 border-[#081c3e] text-[#081c3e] hover:bg-[#081c3e] hover:text-white transition-all h-auto py-4"
              >
                <Home className="mr-2 h-5 w-5" />
                <div className="text-left">
                  <div className="font-semibold">Home</div>
                  <div className="text-xs opacity-70">Return to homepage</div>
                </div>
              </Button>
            </Link>
            
            <Link href="/services" className="block">
              <Button 
                variant="outline"
                className="w-full border-2 border-[#081c3e] text-[#081c3e] hover:bg-[#081c3e] hover:text-white transition-all h-auto py-4"
              >
                <Building2 className="mr-2 h-5 w-5" />
                <div className="text-left">
                  <div className="font-semibold">Services</div>
                  <div className="text-xs opacity-70">Explore financing options</div>
                </div>
              </Button>
            </Link>
            
            <Link href="/transactions" className="block">
              <Button 
                variant="outline"
                className="w-full border-2 border-[#081c3e] text-[#081c3e] hover:bg-[#081c3e] hover:text-white transition-all h-auto py-4"
              >
                <Search className="mr-2 h-5 w-5" />
                <div className="text-left">
                  <div className="font-semibold">Portfolio</div>
                  <div className="text-xs opacity-70">View success stories</div>
                </div>
              </Button>
            </Link>
            
            <Link href="/contact" className="block">
              <Button 
                className="w-full bg-[#b9945a] hover:bg-[#a5834f] text-white transition-all h-auto py-4"
              >
                <ArrowLeft className="mr-2 h-5 w-5 rotate-180" />
                <div className="text-left">
                  <div className="font-semibold">Contact Us</div>
                  <div className="text-xs opacity-90">Get in touch</div>
                </div>
              </Button>
            </Link>
          </div>
        </div>

        {/* Popular Pages */}
        <div className="text-left bg-white/50 backdrop-blur-sm rounded-lg p-6">
          <h4 className="font-semibold text-gray-800 mb-3">Popular Pages:</h4>
          <div className="grid md:grid-cols-2 gap-3 text-sm">
            <Link href="/services/construction-loans" className="text-[#081c3e] hover:text-[#b9945a] transition-colors">
              → Construction Loans
            </Link>
            <Link href="/services/permanent-mortgages" className="text-[#081c3e] hover:text-[#b9945a] transition-colors">
              → Permanent Mortgages
            </Link>
            <Link href="/services/commercial-real-estate-refinancing" className="text-[#081c3e] hover:text-[#b9945a] transition-colors">
              → Commercial Refinancing
            </Link>
            <Link href="/about" className="text-[#081c3e] hover:text-[#b9945a] transition-colors">
              → About Us
            </Link>
          </div>
        </div>

        {/* Help Text */}
        <p className="text-gray-500 text-sm mt-8">
          If you believe this is an error, please{' '}
          <Link href="/contact" className="text-[#b9945a] hover:underline">
            contact us
          </Link>
          {' '}and let us know.
        </p>
      </div>
    </div>
  )
}
