import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

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
      <body className='bg-pattern'>
        <header className='mx-auto pt-2 pb-2'>
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
