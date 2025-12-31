'use client'

import { DollarSign, FileCheck, MapPin, TrendingUp } from 'lucide-react'

const stats = [
  { icon: DollarSign, label: "Total Financed", value: "$1.8B+", description: "Across all property types" },
  { icon: FileCheck, label: "Transactions Closed", value: "500+", description: "Successful deals" },
  { icon: MapPin, label: "States Served", value: "50", description: "Nationwide coverage" },
  { icon: TrendingUp, label: "Average Deal Size", value: "$11M", description: "Competitive financing" }
]

export default function TransactionsStats() {
  return (
    <section className="py-16 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex p-3 bg-[#b9945a]/10 rounded-full mb-4">
                <stat.icon className="h-8 w-8 text-[#b9945a]" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-[#081c3e] mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-gray-700 mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-gray-500">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
