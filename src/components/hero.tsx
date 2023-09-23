'use client';
import { useState } from 'react'
import { EmblaOptionsType } from 'embla-carousel-react'
import { Roboto } from "next/font/google"
import Carousel from './carousel';
import Image from 'next/image';

const robotoFont = Roboto({
  subsets: ['latin'],
  weight: '500'
})

const options: EmblaOptionsType = { loop: true, duration: 30 }
const slideCount = 11
const slides = Array.from(Array(slideCount).keys())

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className='bg-transparent'>
      <div className='flex items-center justify-center w-full mx-auto'>
        <div className='rounded-md mx-auto w-full'>
          <Carousel slides={slides} options={options} />
        </div>
      </div>
      <div className='sm:grid sm:grid-cols-2 max-w-7xl mx-auto mt-10'>
        <div className="mx-auto max-w-2xl text-center">
          <Image
            src="/assets/images/wheelsOfMercyLogo.png"
            alt="Wheels of Mercy Logo"
            width={300}
            height={300}
            className='mx-auto'
            priority
          />
        </div>
        <div className='flex flex-col items-center justify-center'>
          <p className={`mt-6 text-xl lg:text-3xl leading-2 text-black font-bold px-10 text-center ${robotoFont.className}`}>
            Wheels of Mercy is a 501(c)3 Public Charity that collects used wheelchairs,
            repairs and refurbishes them; and gives them to people who need but cannot afford them
          </p>
        </div>
      </div>
    </div>
  )
}
