import PermanentMortgagesHero from './components/PermanentMortgagesHero'
import MortgageFeatures from './components/MortgageFeatures'
import LoanPrograms from './components/LoanPrograms'
import PermanentCTA from './components/PermanentCTA'

export const metadata = {
  title: 'Permanent Mortgages | Commercial Real Estate Financing',
  description: 'Long-term permanent financing for stabilized commercial properties. Fixed and variable rates, non-recourse options, and competitive terms nationwide.',
  keywords: ['permanent mortgages', 'commercial mortgage', 'long-term financing', 'stabilized properties', 'non-recourse loans'],
}

export default function PermanentMortgagesPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <PermanentMortgagesHero />
      <MortgageFeatures />
      <LoanPrograms />
      <PermanentCTA />
    </div>
  )
}
