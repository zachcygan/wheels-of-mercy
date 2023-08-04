import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from "../components/navbar"
import Footer from "../components/footer"

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
      <script src="https://unpkg.com/flowbite@1.4.0/dist/flowbite.js"></script>
      <body className=''>
        <header className='mx-auto bg-white p-5'>

          <Navbar />
        </header>
        {children}
        <Footer />
      </body>
    </html>
  )
}
