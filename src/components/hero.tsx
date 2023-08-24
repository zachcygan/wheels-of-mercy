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

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div>
      <div className='sm:grid sm:grid-cols-2 max-w-7xl mx-auto'>
        <div className="bg-white">
          <div className="relative isolate pt-14">
            <div className="lg:pb-40">
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                  <Image
                    src="/assets/images/wheelsOfMercyLogo.png"
                    alt="Wheels of Mercy Logo"
                    width={500}
                    height={500}
                    className='mx-auto'
                  />
                  {/* <h1 className="text-4xl font-bold tracking-tight text-black sm:text-6xl">
                    Data to enrich your online business
                  </h1> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <p className="mt-6 text-4xl leading-2 text-black font-bold">
            Wheels of Mercy is a 501(c)3 Public Charity that collects used wheelchairs,
            repairs and refurbishes them; and gives them to people who need but cannot afford them
          </p>
        </div>
        
      </div>
      <div>
        <div className='flex items-center justify-center '>
        <div className='scale-[70%] sm:scale-100 rounded-md bg-white/5 shadow-2xl ring-1 ring-black/10 mx-auto'>
            <Carousel slides={slides} options={options} />
          </div>
        </div>
        {/* <Image
              src="/assets/images/carouselImage2.jpg"
              alt="Hero"
              width={1155}
              height={678}
              className='mt-16 rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10 sm:mt-24'
            /> */}
      </div>
      {/* <div className="flex items-center justify-center gap-x-6">
        <a
          href="#"
          className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
        >
          Get started
        </a>
        <Link href="/about" className="text-sm font-semibold leading-6 text-gray-800 hover:ring-1 hover:rounded-full p-1">
          Learn more <span aria-hidden="true">→</span>
        </Link>
      </div> */}

    </div>
  )
}
