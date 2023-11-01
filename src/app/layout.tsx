import './globals.css'
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react';
import { FormDataProvider, useFormData } from '../components/formContext'
import Navbar from "../components/navbar"
import Footer from "../components/footer"

export const metadata: Metadata = {
  metadataBase: new URL('https://wheelsofmercy.org'),
  title: 'Wheels of Mercy',
  description: 'Public Charity that collects used wheelchairs, repairs and refurbishes them, and distributes them to people who need them',
  openGraph: {
    title: 'Wheels of Mercy',
    images: './opengraph-image.jpg',
    url: 'https://wheelsofmercy.org',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-light dark:bg-dark bg-cover'>
        <FormDataProvider>
          <header>
            <Navbar />
          </header>
          <div className='min-h-[73vh]'>
            {children}
            <Analytics />
          </div>
          <Footer />
        </FormDataProvider>
      </body>
    </html>
  )
}
