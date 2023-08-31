'use client';
import { useState } from 'react'
import { EmblaOptionsType } from 'embla-carousel-react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Carousel from './carousel';
import Image from 'next/image';
import Link from 'next/link';

const options: EmblaOptionsType = { loop: true }
const slideCount = 4
const slides = Array.from(Array(slideCount).keys())

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className='bg-transparent'>
      <div className='flex items-center justify-center w-full mx-auto'>
          <div className='sm:scale-100 rounded-md mx-auto w-full'>
            <Carousel slides={slides} options={options} />
          </div>
        </div>
      <div className='sm:grid sm:grid-cols-2 max-w-7xl mx-auto'>
        <div className="bg-transparent">
          <div className="relative isolate pt-14">
            <div className="lg:pb-40">
              <div className="mx-auto max-w-7xl">
                <div className="mx-auto max-w-2xl text-center">
                  <Image
                    src="/assets/images/wheelsOfMercyLogo.png"
                    alt="Wheels of Mercy Logo"
                    width={150}
                    height={150}
                    className='mx-auto'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <p className="mt-6 text-2xl leading-2 text-black">
            Wheels of Mercy is a 501(c)3 Public Charity that collects used wheelchairs,
            repairs and refurbishes them; and gives them to people who need but cannot afford them
          </p>
        </div>

      </div>
      <div>
        
      </div>
    </div>
  )
}
