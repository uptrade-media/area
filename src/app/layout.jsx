import { Inter } from 'next/font/google'
import './globals.css'
import LayoutClient from './layout-client'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: 'Adams Real Estate Advisors - Commercial Real Estate Financing',
    template: '%s | Adams Real Estate Advisors'
  },
  description: 'Premier commercial real estate financing solutions for developers and investors. Construction loans, permanent mortgages, and refinancing across the United States.',
  keywords: ['commercial real estate', 'construction loans', 'permanent mortgages', 'refinancing', 'real estate financing'],
  authors: [{ name: 'Adams Real Estate Advisors' }],
  openGraph: {
    title: 'Adams Real Estate Advisors - Commercial Real Estate Financing',
    description: 'Premier commercial real estate financing solutions for developers and investors.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  )
}
