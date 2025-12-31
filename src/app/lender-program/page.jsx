import LenderProgramHero from './components/LenderProgramHero'
import ProgramBenefits from './components/ProgramBenefits'
import DealFlow from './components/DealFlow'
import LenderRequirements from './components/LenderRequirements'
import LenderCTA from './components/LenderCTA'

export const metadata = {
  title: 'Lender Partner Program | Adams Real Estate Advisors',
  description: 'Join our lender network and access quality commercial real estate financing opportunities. Partner with us to expand your loan portfolio with pre-qualified deals.',
  keywords: ['lender partnership', 'commercial real estate lenders', 'loan opportunities', 'correspondent lending', 'lender network'],
}

export default function LenderProgramPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <LenderProgramHero />
      <ProgramBenefits />
      <DealFlow />
      <LenderRequirements />
      <LenderCTA />
    </div>
  )
}
