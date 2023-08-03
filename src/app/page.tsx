'use client'
import { useState } from 'react'
import Hero from '../components/hero'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div>
      <Hero />
    </div>
  )
}
