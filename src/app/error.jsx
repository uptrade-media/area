'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { AlertCircle, Home, RefreshCw } from 'lucide-react'

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log error to error reporting service
    console.error('Application error:', error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-2xl w-full text-center">
        <div className="inline-flex p-4 bg-red-100 rounded-full mb-6">
          <AlertCircle className="h-16 w-16 text-red-600" />
        </div>
        
        <h1 className="text-4xl font-bold text-[#081c3e] mb-4">
          Something went wrong
        </h1>
        
        <p className="text-xl text-gray-600 mb-8">
          We apologize for the inconvenience. An unexpected error has occurred.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => reset()}
            className="bg-[#b9945a] hover:bg-[#a5834f] text-white px-8 py-6 text-lg"
          >
            <RefreshCw className="mr-2 h-5 w-5" />
            Try Again
          </Button>
          
          <Link href="/">
            <Button
              variant="outline"
              className="border-2 border-[#081c3e] text-[#081c3e] hover:bg-[#081c3e] hover:text-white px-8 py-6 text-lg w-full"
            >
              <Home className="mr-2 h-5 w-5" />
              Go Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
