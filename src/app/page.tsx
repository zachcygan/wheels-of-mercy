'use client'
import Hero from '../components/hero'
import { Transition } from '@headlessui/react'
import Testimonials from '../components/testimonials'

export default function Home() {
  return (
    <Transition as="main" className="mx-auto transition-all duration-700 text-white flex flex-col gap-24"
      appear={true}
      show={true}
      enter='ease-in-out'
      enterFrom='opacity-0'
      enterTo='translate-x-0 opacity-100'
      leave='ease-in-out'
      leaveFrom='transform translate-x-0 opacity-100'
      leaveTo='transform -translate-x-full opacity-0'>
      <Hero />
      <Testimonials />
    </Transition>
  )
}
