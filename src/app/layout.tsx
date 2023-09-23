import './globals.css'
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react';
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Head from 'next/head';

export const metadata: Metadata = {
  title: 'Wheels of Mercy',
  description: 'Public Charity that collects used wheelchairs, repairs and refurbishes them, and distributes them to people who need them'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <meta property="og:image" content="Wheels of Mercy" />
        <meta property="og:image:type" content="Wheels of Mercy is a 501(c)3 Public Charity that collects used wheelchairs" />
        <meta property="og:image" content="/assets/images/wheelsOfMercyLogo.png" />
        <meta property="og:url" content="www.wheelsofmercy.org" />
      </Head>
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
