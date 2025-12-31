import AboutHero from './components/AboutHero'
import CompanyStory from './components/CompanyStory'
import TeamExpertise from './components/TeamExpertise'
import CoreValues from './components/CoreValues'
import AboutCTA from './components/AboutCTA'

export const metadata = {
  title: 'About Adams Real Estate Advisors | 35+ Years of Commercial Finance Expertise',
  description: 'Adams Real Estate Advisors delivers clear, data-driven capital solutions for commercial owners and investors. Over $1.8B financed with 35+ years of industry expertise.',
  keywords: ['commercial real estate advisors', 'real estate financing experts', 'commercial mortgage brokers', 'construction loan specialists'],
  openGraph: {
    title: 'About Adams Real Estate Advisors | 35+ Years of Commercial Finance Expertise',
    description: 'Trusted commercial real estate financing partner with over $1.8 billion in successful transactions.',
    type: 'website',
  },
}

export default function AboutPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <AboutHero />
      <CompanyStory />
      <TeamExpertise />
      <CoreValues />
      <AboutCTA />
    </div>
  )
}
