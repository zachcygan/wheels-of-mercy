'use client'
import { useState } from 'react'
import { EmblaOptionsType } from 'embla-carousel-react'
import EmblaCarousel from 'embla-carousel'
import Autoplay from 'embla-carousel-autoplay'
import Hero from '../components/hero'
import Carousel from '../components/carousel'

const options: EmblaOptionsType = { loop: true }
const slideCount = 4
const slides = Array.from(Array(slideCount).keys())

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className='bg-white'>
      <Hero />
      <div className='border'>
        <Carousel slides={slides} options={options}/>
      </div>
    </div>
  )
}
