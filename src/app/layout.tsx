import './globals.css'
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react';
import Navbar from "../components/navbar"
import Footer from "../components/footer"

export const metadata: Metadata = {
  metadataBase: new URL('https://wheelsofmercy.org'),
  title: 'Wheels of Mercy',
  description: 'Public Charity that collects used wheelchairs, repairs and refurbishes them, and distributes them to people who need them',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-pattern'>
        <header className='mx-auto'>
          <Navbar />
        </header>
        <div className='min-h-[73vh]'>
          {children}
          <Analytics />
        </div>
        <Footer />
      </body>
    </html>
  )
}
