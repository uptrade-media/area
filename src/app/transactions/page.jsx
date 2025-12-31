import TransactionsHero from './components/TransactionsHero'
import DealsGrid from './components/DealsGrid'
import TransactionsStats from './components/TransactionsStats'
import TransactionsCTA from './components/TransactionsCTA'

export const metadata = {
  title: 'Our Transactions | $1.8B+ in Successful Commercial Real Estate Financing',
  description: 'Browse recent closings and case studies featuring construction loans, refinances, permanent mortgages, and acquisition financing across the United States.',
  keywords: ['commercial real estate transactions', 'construction loan case studies', 'commercial mortgage closings', 'real estate financing portfolio'],
  openGraph: {
    title: 'Our Transactions | $1.8B+ in Successful Commercial Real Estate Financing',
    description: 'Explore our portfolio of 500+ successful commercial real estate financing transactions nationwide.',
    type: 'website',
  },
}

export default function TransactionsPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <TransactionsHero />
      <TransactionsStats />
      <DealsGrid />
      <TransactionsCTA />
    </div>
  )
}
