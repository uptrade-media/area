import RetailHero from './components/RetailHero'
import RetailFeatures from './components/RetailFeatures'
import RetailPropertyTypes from './components/RetailPropertyTypes'
import RetailCTA from './components/RetailCTA'

export const metadata = {
  title: 'Retail Property Financing | Shopping Centers & Retail Buildings',
  description: 'Specialized financing for shopping centers, strip malls, standalone retail, and mixed-use retail properties. Expert guidance for retail real estate investors and developers.',
  keywords: ['retail property financing', 'shopping center loans', 'strip mall financing', 'retail real estate', 'anchored retail'],
}

export default function RetailPropertyFinancingPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <RetailHero />
      <RetailFeatures />
      <RetailPropertyTypes />
      <RetailCTA />
    </div>
  )
}
