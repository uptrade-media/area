import ContactHero from './components/ContactHero'
import ContactForm from './components/ContactForm'
import ContactInfo from './components/ContactInfo'
import ContactFAQ from './components/ContactFAQ'

export const metadata = {
  title: 'Contact Adams Real Estate Advisors | Get Your Free Consultation',
  description: 'Request a quote or schedule a consultation to discuss construction loans, refinances, and permanent financing for your commercial property. Reach out today for expert guidance.',
  keywords: ['contact commercial real estate financing', 'construction loan consultation', 'commercial mortgage quote', 'real estate financing contact'],
  openGraph: {
    title: 'Contact Adams Real Estate Advisors | Get Your Free Consultation',
    description: 'Schedule a consultation to discuss your commercial real estate financing needs. Over $1.8B financed, 35+ years experience.',
    type: 'website',
  },
}

export default function ContactPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <ContactHero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
          <div>
            <ContactInfo />
          </div>
        </div>
      </div>
      <ContactFAQ />
    </div>
  )
}
