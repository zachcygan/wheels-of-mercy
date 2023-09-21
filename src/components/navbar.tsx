'use client'
import { Fragment, useEffect, useState } from 'react'
import { Disclosure, Menu, Transition, Popover } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { usePathname } from 'next/navigation'
import { motion } from "framer-motion"
import SlideOver from './slideOver'
import MailingListModal from './mailingListModal'
import Image from 'next/image'
import Link from 'next/link'

type MobileNavItemProps = {
  href: string
  children: React.ReactNode
}
type SVGProps = React.SVGAttributes<SVGSVGElement>;

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

function MobileNavItem({ href, children }: MobileNavItemProps) {
  return (
    <li>
      <Link href={href}>
        <Popover.Button as={Link} href={href} className="block py-2">
          {children}
        </Popover.Button>
      </Link>
    </li>
  )
}

function CloseIcon(props: SVGProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ChevronDownIcon(props: SVGProps) {
  return (
    <svg viewBox="0 0 8 6" aria-hidden="true" {...props}>
      <path
        d="M1.75 1.75 4 4.25l2.25-2.5"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function Navbar() {
  const pathname = usePathname();
  const [hoveredPath, setHoveredPath] = useState(pathname);
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  const [isSlideOpen, setIsSlideOpen] = useState<boolean>(false)

  return (
    <Disclosure as="nav" className="">
      {({ open }) => (
        <>
          <div className="bg-white/70 mx-auto px-2 sm:px-6 lg:px-8 -z-10">
            <div className="relative flex h-16 items-center justify-between w-full">
              <div className="absolute inset-y-0 right-0 flex items-center min-[900px]:hidden">
                <Popover>
                  <Popover.Button className="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20">
                    Menu
                    <ChevronDownIcon className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400" />
                  </Popover.Button>
                  <Transition.Root>
                    <Transition.Child
                      as={Fragment}
                      enter="duration-150 ease-out"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="duration-150 ease-in"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Popover.Overlay className="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm dark:bg-black/80" />
                    </Transition.Child>
                    <Transition.Child
                      as={Fragment}
                      enter="duration-150 ease-out"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="duration-150 ease-in"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      <Popover.Panel
                        focus
                        className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800"
                      >
                        <div className="flex flex-row-reverse items-center justify-between">
                          <Popover.Button aria-label="Close menu" className="-m-1 p-1">
                            <CloseIcon className="h-6 w-6 text-zinc-500 dark:text-zinc-400" />
                          </Popover.Button>
                          <h2 className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                            Navigation
                          </h2>
                        </div>
                        <nav className="mt-6">
                          <ul className="-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">
                            <MobileNavItem href="/">Home</MobileNavItem>
                            <MobileNavItem href="/about">About</MobileNavItem>
                            <MobileNavItem href="/support">Support</MobileNavItem>
                            <MobileNavItem href="/donate">Donate</MobileNavItem>
                            <MobileNavItem href="/faq">FAQs</MobileNavItem>
                            <div onClick={(e) => {
                              e.preventDefault(); // prevent navigation
                              setModalOpen(true);
                            }}>
                              <MobileNavItem href="#">Join Our Mailing List</MobileNavItem>
                            </div>
                          </ul>
                        </nav>
                      </Popover.Panel>
                    </Transition.Child>
                  </Transition.Root>
                </Popover>
              </div>
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
                          className={`px-2 py-2 rounded-md text-lg lg:text-xl relative no-underline duration-200 ease-in hover:text-white ${isActive ? "text-white" : "text-black"
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
              <div>
                <button
                  className="rounded-md max-[900px]:hidden bg-gray-400 w-[180px] p-2 hover:text-white hover:scale-110 transition-all active:scale-105"
                  onClick={() => setModalOpen(true)}
                >
                  Join Our Mailing List
                </button>
                <MailingListModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
              </div>
            </div>
          </div>

          {/* <Disclosure.Panel className="min-[900px]:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigationMobile.map((item) => (
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
                    if (item.name === 'Join Our Mailing List') {
                      e.preventDefault(); // prevent navigation
                      setModalOpen(true);
                    }
                  }}
                >
                  {item.name}
                </Disclosure.Button>
              ))}

            </div>
          </Disclosure.Panel> */}
        </>
      )}

    </Disclosure>
  )
}
