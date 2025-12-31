import AcquisitionRenovationHero from './components/AcquisitionRenovationHero'
import AcqRenovFeatures from './components/AcqRenovFeatures'
import ValueAddStrategies from './components/ValueAddStrategies'
import AcqRenovCTA from './components/AcqRenovCTA'

export const metadata = {
  title: 'Acquisition & Renovation Financing | Value-Add Commercial Loans',
  description: 'Integrated financing for purchasing and improving commercial properties. Single-close solutions for value-add investments with purchase plus renovation capital.',
  keywords: ['acquisition renovation financing', 'value-add loans', 'purchase rehab', 'commercial property renovation'],
}

export default function AcquisitionRenovationPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <AcquisitionRenovationHero />
      <AcqRenovFeatures />
      <ValueAddStrategies />
      <AcqRenovCTA />
    </div>
  )
}
