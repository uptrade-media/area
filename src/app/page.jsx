import Hero from './components/Hero'
import Stats from './components/Stats'
import WhyChooseUs from './components/WhyChooseUs'
import OurProcess from './components/OurProcess'
import FeaturedServices from './components/FeaturedServices'
import ClientTestimonials from './components/ClientTestimonials'

export const metadata = {
  title: 'Adams Real Estate Advisors | Premier Commercial Real Estate Financing',
  description: 'Trusted partner for commercial real estate financing. Construction loans, permanent mortgages, and refinancing solutions. Over $1.8 billion financed across the United States.',
  keywords: ['commercial real estate financing', 'construction loans', 'permanent mortgages', 'commercial refinancing', 'real estate advisors'],
  openGraph: {
    title: 'Adams Real Estate Advisors | Premier Commercial Real Estate Financing',
    description: 'Trusted partner for commercial real estate financing. Construction loans, permanent mortgages, and refinancing solutions.',
    type: 'website',
  },
}

export default function HomePage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Hero />
      <Stats />
      <WhyChooseUs />
      <OurProcess />
      <FeaturedServices />
      <ClientTestimonials />
    </div>
  )
}
