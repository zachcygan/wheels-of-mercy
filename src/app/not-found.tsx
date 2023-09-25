'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import SlideOver from '../components/slideOver'
import image1 from '../../public/assets/images/404.png'

export default function NotFound() {
  const [isSlideOpen, setIsSlideOpen] = useState<boolean>(false)

  return (
    <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="font-semibold text-4xl text-black">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
        <p className="mt-6 text-base leading-7 text-black">Sorry, we couldn’t find the page you’re looking for.</p>
        <Image
          src={image1}
          alt="404"
        />
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link href='/' className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Go back home
          </Link>

          <div className="text-sm font-semibold text-gray-900 cursor-pointer" onClick={() => setIsSlideOpen(true)}>
            Contact support <span aria-hidden="true">&rarr;</span>
          </div>
        </div>
      </div>
      <SlideOver isOpen={isSlideOpen} onClose={() => setIsSlideOpen(false)} />
    </main>
  )
}