'use client';
import { useState } from 'react'
import { EmblaOptionsType } from 'embla-carousel-react'
import { Roboto } from "next/font/google"
import TripleClick from './timer'
import Carousel from './carousel';
import Image from 'next/image';

const robotoFont = Roboto({
  subsets: ['latin'],
  weight: '500'
})

const options: EmblaOptionsType = { loop: true, duration: 30 }
const slideCount = 11
const slides = Array.from(Array(slideCount).keys())

let clickTimer: number | null = null;

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [fireVisible, setFireVisible] = useState<boolean>(false);

  return (
    <div className='bg-transparent'>
      <div className='flex items-center justify-center w-full mx-auto'>
        <div className='rounded-md mx-auto w-full sm:px-5 bg-gray-600/20 py-2'>
          <Carousel slides={slides} options={options} />
        </div>
      </div>
      <div className='sm:grid sm:grid-cols-2 max-w-7xl mx-auto mt-10 relative'>
        <div className='relative mx-auto max-w-2xl text-center'>
          {/* Wheelchair Image */}
          <Image
            src="/assets/images/wheelsOfMercyLogo.png"
            alt="Wheels of Mercy Logo"
            width={300}
            height={300}
            className='mx-auto'
            priority
          />
          {/* Fire Gif */}
          <button
            style={{ opacity: 0 }} // This makes the button invisible
            onClick={() => setFireVisible(!fireVisible)}
          >
            Toggle Fire
          </button>
          <div className='scale-[150%]'>
            {fireVisible && (
              <img
                src="/assets/images/fire.gif"
                alt="Fire gif"
                className='absolute'
                style={{ top: '50%', left: '50%', transform: 'translate(-100%, -140%)' }}
              />
            )}
          </div>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <p className={`mt-6 text-xl lg:text-3xl leading-2 text-black dark:text-dark font-bold px-10 text-center ${robotoFont.className}`}>
            Wheels of Mercy is a 501(c)3 Public Charity that collects used wheelchairs,
            repairs and refurbishes them; and gives them to people who need but cannot afford them
          </p>
        </div>

      </div>
    </div>
  )
}
