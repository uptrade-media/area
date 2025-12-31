'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { MapPin, DollarSign, Building2 } from 'lucide-react'

const deals = [
  { name: "Hampton Inn & Suites West Carson", type: "Construction Loan", amount: "$11,984,235", location: "Pittsburgh, PA", image: "/HamptonInn.png", category: "Hotel" },
  { name: "Brickstone Senior Housing Apartments", type: "Permanent Mortgage", amount: "$27,000,000", location: "Brighton, NY", image: "/Brickstone.webp", category: "Senior Living" },
  { name: "Dockside Apartments II", type: "Permanent Mortgage", amount: "$8,560,000", location: "Buffalo, NY", image: "/DocksideApartments.jpg", category: "Multifamily" },
  { name: "Addisville Commons Retail Center", type: "Construction Loan", amount: "$18,022,271", location: "Richboro, PA", image: "/AddisvilleCommons.webp", category: "Retail" },
  { name: "Peregrine - Colonie, NY", type: "Construction Loan", amount: "$7,900,000", location: "Colonie, NY", image: "/PeregrineMemoryCare.jpg", category: "Senior Living" },
  { name: "Brooklyn Pointe Senior Living Development", type: "Construction Loan", amount: "$12,779,380", location: "Cleveland, OH", image: "/BrooklynPointeSeniorLivingDevelopment.jpg", category: "Senior Living" },
  { name: "Stonebriar Glen Apartments", type: "Construction Loan", amount: "$16,104,950", location: "Brockport, NY", image: "/StonebriarGlenApartments.webp", category: "Multifamily" },
  { name: "Villa Bordeaux 146 Units", type: "Refinance", amount: "$8,500,000", location: "Peoria, IL", image: "/VillaBordeaux.webp", category: "Multifamily" },
  { name: "Flats on Fifth Apartments", type: "Construction Loan", amount: "$10,790,000", location: "Pittsburgh, PA", image: "/Flatsonfifth.webp", category: "Multifamily" },
  { name: "Maumee Senior Living Development", type: "Permanent Mortgage", amount: "$11,726,248", location: "Maumee, OH", image: "/MaumeeSeniorLivingDevelopment.webp", category: "Senior Living" },
  { name: "Gateway Flats Apartments", type: "Construction Loan", amount: "$11,800,000", location: "Dayton, KY", image: "/DJI_0374.jpg", category: "Multifamily" },
  { name: "Doud Apartments", type: "Construction Loan", amount: "$26,603,730", location: "Gates, NY", image: "/DoudApartments.webp", category: "Multifamily" },
  { name: "Skaneateles Social", type: "Refinance", amount: "$7,500,000", location: "Skaneateles, NY", image: "/SkaneatelesSocial.avif", category: "Mixed-Use" },
  { name: "Green Bay Portfolio Apartments", type: "Refinance", amount: "$13,645,280", location: "Wisconsin", image: "/GreenBayPortfolio.jpg", category: "Multifamily" },
  { name: "High End Resort", type: "Construction Loan", amount: "$10,000,000+", location: "Skaneateles, NY", image: "/HighendResort.avif", category: "Hospitality" }
]

const getTypeColor = (type) => {
  switch(type) {
    case 'Construction Loan': return 'bg-blue-100 text-blue-800'
    case 'Permanent Mortgage': return 'bg-green-100 text-green-800'
    case 'Refinance': return 'bg-purple-100 text-purple-800'
    default: return 'bg-gray-100 text-gray-800'
  }
}

export default function DealsGrid() {
  const [filter, setFilter] = useState('All')
  const categories = ['All', 'Multifamily', 'Senior Living', 'Hotel', 'Retail', 'Mixed-Use', 'Hospitality']
  
  const filteredDeals = filter === 'All' ? deals : deals.filter(deal => deal.category === filter)

  return (
    <section className="py-20 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#081c3e] mb-6">
            Featured Transactions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A selection of our recent successful financings across various commercial property types
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                filter === category
                  ? 'bg-[#b9945a] text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDeals.map((deal, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-300 group bg-white">
              <div className="relative h-48 bg-gray-200 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <Badge className={`absolute top-4 left-4 z-20 ${getTypeColor(deal.type)}`}>
                  {deal.type}
                </Badge>
                <div className="absolute inset-0 bg-[#081c3e] opacity-0 group-hover:opacity-20 transition-opacity z-10" />
                {/* Image placeholder - would use next/image with proper dimensions */}
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-300 to-gray-400">
                  <Building2 className="h-16 w-16 text-gray-500 opacity-50" />
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-[#081c3e] mb-3 line-clamp-2 group-hover:text-[#b9945a] transition-colors">
                  {deal.name}
                </h3>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-gray-600">
                    <DollarSign className="h-4 w-4 mr-2 text-[#b9945a]" />
                    <span className="font-semibold">{deal.amount}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-2 text-[#b9945a]" />
                    <span>{deal.location}</span>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <Badge variant="outline" className="text-xs">
                    {deal.category}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {filteredDeals.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No transactions found in this category.</p>
          </div>
        )}
      </div>
    </section>
  )
}
