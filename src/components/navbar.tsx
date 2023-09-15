'use client'
import { Fragment, useEffect, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { usePathname } from 'next/navigation'
import { motion } from "framer-motion"
import SlideOver from './slideOver'
import Image from 'next/image'
import Link from 'next/link'

const navigation = [
  { name: 'About', href: '/about', current: true },
  { name: 'Support', href: '/support', current: false },
  { name: 'Donate', href: '/donate', current: false },
  { name: 'FAQs', href: '/faq', current: false },
  { name: 'Contact', href: '#', current: false },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const pathname = usePathname();
  const [hoveredPath, setHoveredPath] = useState(pathname);
  console.log(pathname);

  const [isSlideOpen, setIsSlideOpen] = useState<boolean>(false)

  return (
    <Disclosure as="nav" className="">
      {({ open }) => (
        <>
          <div className="bg-white/70 mx-auto px-2 sm:px-6 lg:px-8 -z-10">
            <div className="relative flex h-16 items-center">
              <div className="absolute inset-y-0 right-0 flex items-center min-[900px]:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className='flex justify-between items-center'>
                <div className="text-black">
                  <Link
                    key={'Wheels of Mercy'}
                    href={'/'}
                    className='flex items-center justify-center'
                  >
                    <Image
                      src="/assets/images/wheelsOfMercy.png"
                      alt="Wheels of Mercy"
                      width={180}
                      height={50}
                      priority
                    />
                  </Link>
                </div>
                <div className="flex-1">
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex items-center justify-center max-[900px]:hidden">
                      {navigation.map((item) => {
                        const isActive = item.href === pathname;
                        return (
                          <Link
                            key={item.name}
                            href={item.href}
                            className={`px-2 py-2 rounded-md text-lg relative no-underline duration-200 ease-in hover:text-white ${isActive ? "text-white" : "text-black"
                              }`}
                            aria-current={item.href === pathname ? 'page' : undefined}
                            onClick={(e) => {
                              if (item.name === 'Contact') {
                                e.preventDefault(); // prevent navigation
                                setIsSlideOpen(true);
                              }
                            }}
                            onMouseOver={() => setHoveredPath(item.href)}
                            onMouseLeave={() => setHoveredPath(pathname)}
                          >
                            <span>{item.name}</span>
                            {item.href === hoveredPath && (
                              <motion.div
                                className="absolute bottom-0 left-0 h-full bg-gray-900 rounded-md -z-10"
                                layoutId="navbar"
                                aria-hidden="true"
                                style={{
                                  width: "100%",
                                }}
                                transition={{
                                  type: "spring",
                                  bounce: 0.25,
                                  stiffness: 130,
                                  damping: 9,
                                  duration: 0.2,
                                }}
                              />
                            )}
                          </Link>
                        );
                      })}
                    </div>
                    <SlideOver isOpen={isSlideOpen} onClose={() => setIsSlideOpen(false)} />
                  </div>
                </div>
                {/* <div>
                  test
                </div> */}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="min-[900px]:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                  onClick={(e) => {
                    if (item.name === 'Contact') {
                      e.preventDefault(); // prevent navigation
                      setIsSlideOpen(true);
                    }
                  }}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}

    </Disclosure>
  )
}
