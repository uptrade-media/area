import ConstructionLoansHero from './components/ConstructionLoansHero'
import LoanFeatures from './components/LoanFeatures'
import PropertyTypes from './components/PropertyTypes'
import ConstructionProcess from './components/ConstructionProcess'
import ConstructionCTA from './components/ConstructionCTA'

export const metadata = {
  title: 'Construction Loans | Commercial Real Estate Financing',
  description: 'Ground-up construction financing for commercial properties. Flexible draw schedules, competitive rates, and expert guidance for hotels, multifamily, retail, and senior living development.',
  keywords: ['construction loans', 'commercial construction financing', 'ground-up development', 'hotel construction', 'multifamily construction'],
}

export default function ConstructionLoansPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <ConstructionLoansHero />
      <LoanFeatures />
      <PropertyTypes />
      <ConstructionProcess />
      <ConstructionCTA />
    </div>
  )
}
