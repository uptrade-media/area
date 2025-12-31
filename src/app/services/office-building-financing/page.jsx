import OfficeHero from './components/OfficeHero'
import OfficeFeatures from './components/OfficeFeatures'
import OfficePropertyTypes from './components/OfficePropertyTypes'
import OfficeCTA from './components/OfficeCTA'

export const metadata = {
  title: 'Office Building Financing | Commercial Office Property Loans',
  description: 'Comprehensive financing for office buildings, corporate parks, medical offices, and professional facilities. Expert guidance for office real estate nationwide.',
  keywords: ['office building financing', 'office property loans', 'medical office financing', 'corporate park loans', 'professional building financing'],
}

export default function OfficeFinancingPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <OfficeHero />
      <OfficeFeatures />
      <OfficePropertyTypes />
      <OfficeCTA />
    </div>
  )
}
