import RefinancingHero from './components/RefinancingHero'
import RefinancingBenefits from './components/RefinancingBenefits'
import RefinancingScenarios from './components/RefinancingScenarios'
import RefinancingCTA from './components/RefinancingCTA'

export const metadata = {
  title: 'Commercial Real Estate Refinancing | Adams Real Estate Advisors',
  description: 'Strategic refinancing solutions to lower rates, extract equity, or improve terms on commercial properties. Cash-out refinancing and debt restructuring nationwide.',
  keywords: ['commercial refinancing', 'cash-out refinancing', 'rate reduction', 'debt restructuring', 'commercial mortgage refinance'],
}

export default function RefinancingPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <RefinancingHero />
      <RefinancingBenefits />
      <RefinancingScenarios />
      <RefinancingCTA />
    </div>
  )
}
