import React, { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import {
  Building2,
  Phone,
  Mail,
  MapPin,
  DollarSign,
  TrendingUp,
  Users,
  Award,
  Handshake,
  Landmark,
  Scale,
  Lightbulb,
  CheckCircle,
  Quote,
  Globe,
  Briefcase,
  DollarSign as DollarSignIcon,
  FileText,
  Banknote,
  RefreshCcw,
  Home as HomeIcon, // alias to avoid name collision
  Target,
  TrendingUp as TrendingUpIcon,
  ShieldCheck,
  Layers,
  BarChart3,
  ClipboardCheck,
  ShoppingCart,
  Building,
  Clock,
  Shield,
  Menu,
  X,
  User
} from 'lucide-react'

function Home() {
  const [activeSection, setActiveSection] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
  const handleNavigation = (section) => { setActiveSection(section); scrollToTop() }
  const handleMobileNavigation = (section) => { setActiveSection(section); setMobileMenuOpen(false); scrollToTop() }

  const deals = [
    { name: 'Hampton Inn & Suites West Carson', type: 'Construction Loan', amount: '$11,984,235', location: 'Pittsburgh, PA', image: '/HamptonInn.png', alt: 'Hampton Inn & Suites West Carson' },
    { name: 'Brickstone Senior Housing Apartments', type: 'Permanent Mortgage', amount: '$27,000,000', location: 'Brighton, NY', image: '/Brickstone.webp', alt: 'Brickstone Senior Housing Apartments' },
    { name: 'Dockside Apartments II', type: 'Permanent Mortgage', amount: '$8,560,000', location: 'Buffalo, NY', image: '/DocksideApartments.jpg', alt: 'Dockside Apartments II' },
    { name: 'Addisville Commons Retail Center', type: 'Construction Loan', amount: '$18,022,271', location: 'Richboro, PA', image: '/AddisvilleCommons.webp', alt: 'Addisville Commons Retail Center' },
    { name: 'Peregrine - Colonie, NY', type: 'Construction Loan', amount: '$7,900,000', location: 'Colonie, NY', image: '/PeregrineMemoryCare.jpg', alt: 'Peregrine - Colonie, NY' },
    { name: 'Brooklyn Pointe Senior Living Development', type: 'Construction Loan', amount: '$12,779,380', location: 'Cleveland, OH', image: '/BrooklynPointeSeniorLivingDevelopment.jpg', alt: 'Brooklyn Pointe Senior Living Development' },
    { name: 'Stonebriar Glen Apartments', type: 'Construction Loan', amount: '$16,104,950', location: 'Brockport, NY', image: '/StonebriarGlenApartments.webp', alt: 'Stonebriar Glen Apartments' },
    { name: 'Villa Bordeaux 146 Units', type: 'Refinance', amount: '$8,500,000', location: 'Peoria, IL', image: '/VillaBordeaux.webp', alt: 'Villa Bordeaux 146 Units' },
    { name: 'Flats on Fifth Apartments', type: 'Construction Loan', amount: '$10,790,000', location: 'Pittsburgh, PA', image: '/Flatsonfifth.webp', alt: 'Flats on Fifth Apartments' },
    { name: 'Maumee Senior Living Development', type: 'Permanent Mortgage', amount: '$11,726,248', location: 'Maumee, OH', image: '/MaumeeSeniorLivingDevelopment.webp', alt: 'Maumee Senior Living Development' },
    { name: 'Gateway Flats Apartments', type: 'Construction Loan', amount: '$11,800,000', location: 'Dayton, KY', image: '/DJI_0374.jpg', alt: 'Gateway Flats Apartments' },
    { name: 'Doud Apartments', type: 'Construction Loan', amount: '$26,603,730', location: 'Gates, NY', image: '/DoudApartments.webp', alt: 'Doud Apartments' },
    { name: 'Skaneateles Social', type: 'Refinance', amount: '$7,500,000', location: 'Skaneateles, NY', image: '/SkaneatelesSocial.avif', alt: 'Skaneateles Social' },
    { name: 'Green Bay Portfolio Apartments', type: 'Refinance', amount: '$13,645,280', location: 'Wisconsin', image: '/GreenBayPortfolio.jpg', alt: 'Green Bay Portfolio Apartments' },
    { name: 'High End Resort', type: 'Construction Loan', amount: '$10,000,000+', location: 'Skaneateles, NY', image: '/HighendResort.avif', alt: 'High End Resort' }
  ]

  const services = [
    { id: 'construction-loans', title: 'Construction Loans', description: 'Ground-up, expansions, and major renovations across hotel, multifamily, retail, and senior living.', icon: Building2 },
    { id: 'permanent-mortgages', title: 'Permanent Mortgages', description: 'Long-term, stable financing for income-producing commercial properties.', icon: Landmark },
    { id: 'commercial-refinancing', title: 'Commercial Real Estate Refinancing', description: 'Lower costs, improve cash flow, and optimize your capital stack.', icon: Scale },
    { id: 'acquisition-renovation', title: 'Acquisition & Renovation Financing', description: 'One loan to buy and improve value-add properties.', icon: Handshake },
    { id: 'retail-financing', title: 'Retail Property Financing', description: 'Shopping centers, strip malls, and single-tenant retail.', icon: ShoppingCart },
    { id: 'office-financing', title: 'Office Building Financing', description: 'Office, medical office, and corporate parks aligned to today’s trends.', icon: Building }
  ]

  const stats = [
    { label: 'Total Financing', value: '$1.8B+', icon: DollarSignIcon },
    { label: 'Years Experience', value: '35+', icon: Award },
    { label: 'Successful Deals', value: '500+', icon: TrendingUp },
    { label: 'Happy Clients', value: '200+', icon: Users }
  ]

  const testimonials = [
    { quote: 'Adams Real Estate Advisors secured the perfect construction loan for our hotel project. Their expertise and network are unmatched!', author: 'John Doe', title: 'CEO, Hospitality Group' },
    { quote: 'The refinancing options improved our cash flow significantly. Highly recommend their services.', author: 'Jane Smith', title: 'Real Estate Investor' },
    { quote: 'Seamless acquisition and renovation financing. A true partner in commercial real estate.', author: 'Peter Jones', title: 'Property Developer' }
  ]

  const Navigation = () => (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img src="/LogoDark.png" alt="Adams Real Estate Advisors Logo" className="h-8 w-8 mr-3" />
            <span className="text-xl font-bold text-[#081c3e]">Adams Real Estate Advisors</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => handleNavigation('home')} className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${activeSection === 'home' ? 'text-[#081c3e] bg-[#b9945a]/10' : 'text-gray-700 hover:text-[#081c3e] hover:bg-gray-50'}`}>Home</button>
            <div className="relative group">
              <button onClick={() => handleNavigation('services')} className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${activeSection === 'services' ? 'text-[#081c3e] bg-[#b9945a]/10' : 'text-gray-700 hover:text-[#081c3e] hover:bg-gray-50'}`}>Services</button>
              <div className="absolute hidden group-hover:block bg-white shadow-xl rounded-md py-2 w-64 right-0 top-full mt-1 border border-gray-200 z-50">
                {services.map((s) => (
                  <button key={s.id} onClick={() => handleNavigation(s.id)} className="block w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-[#b9945a]/10 hover:text-[#081c3e] transition-colors border-b border-gray-100 last:border-b-0">
                    {s.title}
                  </button>
                ))}
              </div>
            </div>
            <button onClick={() => handleNavigation('about')} className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${activeSection === 'about' ? 'text-[#081c3e] bg-[#b9945a]/10' : 'text-gray-700 hover:text-[#081c3e] hover:bg-gray-50'}`}>About</button>
            <button onClick={() => handleNavigation('deals')} className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${activeSection === 'deals' ? 'text-[#081c3e] bg-[#b9945a]/10' : 'text-gray-700 hover:text-[#081c3e] hover:bg-gray-50'}`}>Transactions</button>
            <button onClick={() => handleNavigation('contact')} className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${activeSection === 'contact' ? 'text-[#081c3e] bg-[#b9945a]/10' : 'text-gray-700 hover:text-[#081c3e] hover:bg-gray-50'}`}>Contact</button>
            <button onClick={() => handleNavigation('lender-program')} className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${activeSection === 'lender-program' ? 'text-[#081c3e] bg-[#b9945a]/10' : 'text-gray-700 hover:text-[#081c3e] hover:bg-gray-50'}`}>Lender Program</button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#081c3e] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#b9945a]"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              <button onClick={() => handleMobileNavigation('home')} className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${activeSection === 'home' ? 'text-[#081c3e] bg-[#b9945a]/10' : 'text-gray-700 hover:text-[#081c3e] hover:bg-gray-50'}`}>Home</button>
              <button onClick={() => handleMobileNavigation('services')} className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${activeSection === 'services' ? 'text-[#081c3e] bg-[#b9945a]/10' : 'text-gray-700 hover:text-[#081c3e] hover:bg-gray-50'}`}>All Services</button>
              {services.map((s) => (
                <button key={s.id} onClick={() => handleMobileNavigation(s.id)} className={`block w-full text-left px-6 py-2 rounded-md text-sm transition-colors ${activeSection === s.id ? 'text-[#081c3e] bg-[#b9945a]/10' : 'text-gray-600 hover:text-[#081c3e] hover:bg-gray-50'}`}>
                  {s.title}
                </button>
              ))}
              <button onClick={() => handleMobileNavigation('about')} className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${activeSection === 'about' ? 'text-[#081c3e] bg-[#b9945a]/10' : 'text-gray-700 hover:text-[#081c3e] hover:bg-gray-50'}`}>About</button>
              <button onClick={() => handleMobileNavigation('deals')} className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${activeSection === 'deals' ? 'text-[#081c3e] bg-[#b9945a]/10' : 'text-gray-700 hover:text-[#081c3e] hover:bg-gray-50'}`}>Transactions</button>
              <button onClick={() => handleMobileNavigation('contact')} className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${activeSection === 'contact' ? 'text-[#081c3e] bg-[#b9945a]/10' : 'text-gray-700 hover:text-[#081c3e] hover:bg-gray-50'}`}>Contact</button>
              <button onClick={() => handleMobileNavigation('lender-program')} className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${activeSection === 'lender-program' ? 'text-[#081c3e] bg-[#b9945a]/10' : 'text-gray-700 hover:text-[#081c3e] hover:bg-gray-50'}`}>Lender Program</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )

  const Hero = () => (
    <section
      className="text-white py-20 relative overflow-hidden"
      style={{ backgroundImage: "url('/AdobeStock_551358729.jpeg')" }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Premier Commercial Real Estate Financing
          <span className="block text-[#b9945a]">For Developers and Investors</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
          Construction loans, permanent mortgages, refinancing, and value-add capital.
          $1.8B+ financed across the United States.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-[#b9945a] text-white hover:bg-[#a5834f] px-8 py-3 text-lg" onClick={() => handleNavigation('contact')}>
            Get a Free Consultation
          </Button>
          <Button size="lg" className="bg-[#b9945a] text-white hover:bg-[#a5834f] px-8 py-3 text-lg" onClick={() => handleNavigation('deals')}>
            Explore Transactions
          </Button>
        </div>
      </div>
    </section>
  )

  const Stats = () => (
    <section className="py-16 bg-[#081c3e] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <div key={i} className="text-center">
            <div className="flex justify-center mb-4">
              <s.icon className="h-12 w-12 text-[#b9945a]" />
            </div>
            <div className="text-3xl font-bold mb-2">{s.value}</div>
            <div className="text-gray-300">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )

  const WhyChooseUs = () => (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#081c3e] mb-6">Why Partner With Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Deep lender relationships. Ruthless execution. Results.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-lg shadow-md bg-[#b9945a]/5">
            <Award className="h-12 w-12 text-[#b9945a] mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Proven Expertise</h3>
            <p className="text-gray-700">35+ years in complex commercial finance.</p>
          </div>
          <div className="text-center p-6 rounded-lg shadow-md bg-[#b9945a]/5">
            <Users className="h-12 w-12 text-[#b9945a] mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Lender Network</h3>
            <p className="text-gray-700">Banks, life companies, conduits, private capital.</p>
          </div>
          <div className="text-center p-6 rounded-lg shadow-md bg-[#b9945a]/5">
            <Handshake className="h-12 w-12 text-[#b9945a] mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Tailored Structuring</h3>
            <p className="text-gray-700">Terms engineered to your business plan.</p>
          </div>
        </div>
      </div>
    </section>
  )

  const FeaturedServices = () => (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#081c3e] mb-6">Core Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Click any service to learn more.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <Card key={s.id} className="hover:shadow-lg transition-shadow border-[#b9945a]/20 cursor-pointer group" onClick={() => handleNavigation(s.id)}>
              <CardHeader className="text-center">
                <s.icon className="h-12 w-12 text-[#b9945a] mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle className="text-xl group-hover:text-[#b9945a] transition-colors">{s.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center">{s.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )

  const Testimonials = () => (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#081c3e] mb-6">What Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Real feedback from real closings.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <Card key={i} className="p-6 border-[#b9945a]/20">
              <CardContent className="pt-6">
                <Quote className="h-8 w-8 text-[#b9945a] mb-4" />
                <p className="text-gray-700 mb-4 italic">"{t.quote}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-[#081c3e]">{t.author}</p>
                  <p className="text-gray-600 text-sm">{t.title}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )

  const Deals = () => (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#081c3e] mb-6">Recent Transactions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">A snapshot of closings across property types and markets.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {deals.map((d, i) => (
            <Card key={i} className="overflow-hidden hover:shadow-lg transition-shadow border-[#b9945a]/20">
              <div className="aspect-video bg-gray-200 relative overflow-hidden">
                <img src={d.image} alt={d.alt} className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none' }} />
              </div>
              <CardHeader>
                <CardTitle className="text-lg">{d.name}</CardTitle>
                <CardDescription>{d.location}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <Badge variant="secondary" className="bg-[#b9945a]/10 text-[#b9945a]">{d.type}</Badge>
                  <span className="font-bold text-[#081c3e]">{d.amount}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )

  const Contact = () => (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#081c3e] mb-6">Contact Adams Real Estate Advisors</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Ready to structure your next deal the right way? Let’s talk.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-[#081c3e] mb-6">Get in Touch</h3>
            <div className="space-y-6">
              <div className="flex items-start"><MapPin className="h-6 w-6 text-[#b9945a] mr-4 mt-1" /><div><h4 className="font-semibold text-[#081c3e]">Address</h4><p className="text-gray-700">112 Old English Drive<br/>Rochester, NY 14616</p></div></div>
              <div className="flex items-start"><Mail className="h-6 w-6 text-[#b9945a] mr-4 mt-1" /><div><h4 className="font-semibold text-[#081c3e]">Email</h4><a href="mailto:Alan@AdamsRealEstateAdvisors.com" className="text-[#b9945a] hover:underline">Alan@AdamsRealEstateAdvisors.com</a></div></div>
              <div className="flex items-start"><Phone className="h-6 w-6 text-[#b9945a] mr-4 mt-1" /><div><h4 className="font-semibold text-[#081c3e]">Phone</h4><a href="tel:+15853032423" className="text-[#b9945a] hover:underline">(585) 303-2423</a></div></div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-[#081c3e] mb-6">Request a Consultation</h3>
            <div className="space-y-4">
              <div><label className="block text-sm font-medium text-gray-700 mb-2">Name</label><input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#b9945a]" /></div>
              <div><label className="block text-sm font-medium text-gray-700 mb-2">Email</label><input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#b9945a]" /></div>
              <div><label className="block text-sm font-medium text-gray-700 mb-2">Phone</label><input type="tel" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#b9945a]" /></div>
              <div><label className="block text-sm font-medium text-gray-700 mb-2">Project Details</label><textarea rows="4" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#b9945a]" placeholder="Tell us about your project..." /></div>
              <Button className="w-full bg-[#b9945a] hover:bg-[#a5834f]">Send Message</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )

  // SEO + Page render
  return (
    <>
      <title>Adams Real Estate Advisors | Commercial Financing Solutions</title>
      <meta
        name="description"
        content="Adams Real Estate Advisors structures construction loans, permanent mortgages, refinance solutions, and acquisition financing for commercial properties."
      />
      <link rel="canonical" href="https://adamsrealestateadvisors.netlify.app/" />

      <Navigation />

      {activeSection === 'home' && (
        <>
          <Hero />
          <Stats />
          <WhyChooseUs />
          <FeaturedServices />
          <Testimonials />
          <Deals />
          <Contact />
        </>
      )}

      {activeSection === 'services' && <FeaturedServices />}

      {/* Simple anchors to highlight service clickthroughs from the homepage menu */}
      {['construction-loans','permanent-mortgages','commercial-refinancing','acquisition-renovation','retail-financing','office-financing'].includes(activeSection) && (
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#081c3e] mb-6">
              {services.find(s => s.id === activeSection)?.title}
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              {services.find(s => s.id === activeSection)?.description}
            </p>
            <Button size="lg" className="bg-[#b9945a] hover:bg-[#a5834f]" onClick={() => handleNavigation('contact')}>
              Talk to a Financing Expert
            </Button>
          </div>
        </section>
      )}

      {activeSection === 'about' && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-200 h-96 rounded-lg overflow-hidden">
              <img src="/Alanupscaled.jpg" alt="Alan Adams - Founder & Principal" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="text-[#b9945a] font-semibold text-lg mb-4 tracking-wide">ABOUT</div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#081c3e] mb-6">35+ Years. $1.8B+ Financed.</h2>
              <p className="text-gray-700 text-lg mb-6">
                Relationships with premier lending institutions including life companies, conduits, banks, and private lenders.
              </p>
              <Button size="lg" className="bg-[#b9945a] hover:bg-[#a5834f]" onClick={() => handleNavigation('contact')}>
                Start Your Project
              </Button>
            </div>
          </div>
        </section>
      )}

      {activeSection === 'deals' && <Deals />}

      {activeSection === 'contact' && <Contact />}

      {activeSection === 'lender-program' && (
        <section className="py-20 bg-[#b9945a]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Partner With Us</h2>
            <p className="text-xl text-white/90 mb-8">Join our lender network and access quality commercial deals.</p>
            <Button size="lg" className="bg-white text-[#b9945a] hover:bg-gray-100 px-8 py-4 text-lg font-semibold" onClick={() => handleNavigation('contact')}>
              Submit Interest
            </Button>
          </div>
        </section>
      )}
    </>
  )
}

export default Home
