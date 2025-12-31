import ServicesHero from './components/ServicesHero'
import ServicesGrid from './components/ServicesGrid'
import ServiceProcess from './components/ServiceProcess'
import ServicesTestimonial from './components/ServicesTestimonial'

export const metadata = {
  title: 'Commercial Real Estate Financing Services | Adams Real Estate Advisors',
  description: 'Comprehensive commercial real estate financing solutions including construction loans, permanent mortgages, refinancing, and acquisition financing across the United States.',
  keywords: ['commercial real estate financing', 'construction loans', 'permanent mortgages', 'commercial refinancing', 'acquisition financing'],
  openGraph: {
    title: 'Commercial Real Estate Financing Services | Adams Real Estate Advisors',
    description: 'Expert commercial financing solutions for developers and investors nationwide.',
    type: 'website',
  },
}

export default function ServicesPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <ServicesHero />
      <ServicesGrid />
      <ServiceProcess />
      <ServicesTestimonial />
    </div>
  )
}
