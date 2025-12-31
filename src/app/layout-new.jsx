import { Inter } from 'next/font/google'
import LayoutClient from './layout-client'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: 'Adams Real Estate Advisors | Commercial Real Estate Financing',
    template: '%s | Adams Real Estate Advisors'
  },
  description: 'Expert commercial real estate financing for developers and investors. Construction loans, permanent mortgages, refinancing, and acquisition financing nationwide.',
  keywords: ['commercial real estate financing', 'construction loans', 'permanent mortgages', 'commercial refinancing', 'real estate advisors'],
  authors: [{ name: 'Adams Real Estate Advisors' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://adamsrealestateadvisors.com',
    siteName: 'Adams Real Estate Advisors',
    title: 'Adams Real Estate Advisors | Commercial Real Estate Financing',
    description: 'Expert commercial real estate financing solutions nationwide.',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  )
}
