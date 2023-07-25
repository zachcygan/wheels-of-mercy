"use client";
import Link from 'next/link'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { Dialog, Transition, Menu } from '@headlessui/react'
import { XMarkIcon, Bars3Icon, BellIcon } from '@heroicons/react/24/outline'
import * as React from 'react'

export interface INavigation {
   name: string;
   href: string;
   subpages?: INavigation[];

}

const navigation: INavigation[] = [
   { name: 'Home', href: '/' },
   { name: 'About', href: '/about' },
   { name: 'Services', href: '/services' },
   { name: 'Book Online', href: 'https://squareup.com/appointments/book/zbjssb4r09gtek/LPB9YSAY3YG93/start' },
]
function classNames(...classes: string[]) {
   return classes.filter(Boolean).join(' ')
}
function Navbar() {

   const [open, setOpen] = React.useState<boolean>(false) //typescript 
   const pathname = usePathname()
   const router = useRouter()

   console.log(pathname)

   function handleMobileNavClicks(href: string) {
      router.replace(href)
      setOpen(false);
   }
   return (

      <nav className="">
         <>
            <div className="mx-auto px-2 sm:px-6 lg:px-8">
               <div className="relative flex h-16 items-center justify-between">

                  <div className="flex  flex-1 items-center  sm:items-stretch justify-between">
                     <div className="flex flex-shrink-0 items-center">
                        <div className=" ">
                           <Image
                              src='/logo/ocdetaillogo.png'
                              alt="Picture of the author"
                              width={348}
                              height={53}
                              className='w-[12em] md:w-[15em]'
                           />
                        </div>
                     </div>
                     <div className="absolute inset-y-0 right-0 flex items-center md:hidden">
                        {/* Mobile menu button*/}
                        <button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/50 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" onClick={() => setOpen(true)}>
                           <span className="sr-only">Open main menu</span>
                           {open ? (
                              <XMarkIcon className="block h-6 w-6 stroke-accent" aria-hidden="true" />
                           ) : (
                              <Bars3Icon className="block h-6 w-6 stroke-accent" aria-hidden="true" />
                           )}
                        </button>
                     </div>
                     <div className="hidden  md:block">

                        <div className="flex gap-1 lg:gap-4 bg-accent/20 px-2 rounded-full  relative">
                           {navigation.map((item) => {
                              if (item.name === "Book Online") {
                                 return (<a href={item.href} key={item.name} className='bg-accent px-4 my-2 py-1 text-xs lg:text-sm font-medium hover:text-white hover:shadow-accent/50 hover:bg-accent/70 rounded-full text-left w-max lg:hidden shadow-lg shadow-accent/30 border-2'>
                                    {item.name}
                                 </a>)
                              }
                              return (<Link
                                 key={item.name}
                                 href={item.href}
                                 className={classNames(
                                    item.href === pathname ? 'bg-black/70 text-white' : 'text-gray-300 hover:bg-white/50 hover:text-white',
                                    'rounded-full px-4 py-1 my-2 text-xs lg:text-sm font-medium transition-all duration-700'
                                 )}
                                 aria-current={item.href === pathname ? 'page' : undefined}
                              >
                                 {item.name}
                              </Link>)
                           })}
                        </div>
                     </div>
                     <div className=" hidden lg:flex items-center justify-end w-[15em]">
                        <a href={navigation[4].href} className='bg-accent px-6 py-2 text-xs font-medium  hover:text-white hover:shadow-accent/50 hover:bg-accent/70 transition-all ease-in rounded-full  w-max shadow-lg shadow-accent/30 border-2 duration-200 text-black '>
                           {navigation[4].name}
                        </a>
                     </div>
                  </div>

               </div>
            </div>
            <Transition.Root show={open} as={React.Fragment}>
               <Dialog as="div" className="relative z-10 " onClose={setOpen}>
                  <Transition.Child
                     as={React.Fragment}
                     enter="ease-in-out duration-500"
                     enterFrom="opacity-0"
                     enterTo="opacity-100"
                     leave="ease-in-out duration-500"
                     leaveFrom="opacity-100"
                     leaveTo="opacity-0"
                  >
                     <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                  </Transition.Child>

                  <div className="fixed inset-0 overflow-hidden ">
                     <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                           <Transition.Child
                              as={React.Fragment}
                              enter="transform transition ease-in-out duration-500 sm:duration-700"
                              enterFrom="translate-x-full"
                              enterTo="translate-x-0"
                              leave="transform transition ease-in-out duration-500 sm:duration-700"
                              leaveFrom="translate-x-0"
                              leaveTo="translate-x-full"
                           >
                              <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md ">
                                 <Transition.Child
                                    as={React.Fragment}
                                    enter="ease-in-out duration-500"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in-out duration-500"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                 >
                                    <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                                       <button
                                          type="button"
                                          className="rounded-full text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                                          onClick={() => setOpen(false)}
                                       >
                                          <span className="sr-only">Close panel</span>
                                          <XMarkIcon className="h-6 w-6 " aria-hidden="true" />
                                       </button>
                                    </div>
                                 </Transition.Child>
                                 <div className="flex h-full flex-col overflow-y-scroll bg-gradient-to-b  from-primary to-black py-6 shadow-xl">
                                    <div className="px-4 sm:px-6 border-b mx-2 pb-4">
                                       <Dialog.Title className="flex justify-start">
                                          <div className="flex flex-shrink-0 items-center">

                                             <Image
                                                src='/logo/ocdetaillogo.png'
                                                alt="Picture of the author"
                                                width={348}
                                                height={53}
                                                className='w-[12em] md:w-[15em]'
                                             />
                                          </div>
                                       </Dialog.Title>
                                    </div>
                                    <div className=" mt-6 flex-1 px-4 sm:px-6 flex flex-col" >
                                       {navigation.map((item) => {

                                          if (item.name === "Book Online") {
                                             return (<a key={item.name}
                                                href={item.href}
                                                className='bg-accent px-6 py-2 text-sm font-medium hover:bg-accent/80 rounded-full text-left w-max'>
                                                {item.name}
                                             </a>)
                                          }

                                          return (<Link
                                             key={item.name}
                                             href={item.href}
                                             onClick={() => handleMobileNavClicks(item.href)}
                                             className={classNames(
                                                item.href === pathname ? 'bg-black/70 text-white' : 'text-gray-300 hover:bg-white/50 hover:text-white',
                                                'rounded-full px-3 py-2 text-sm font-medium'
                                             )}
                                             aria-current={item.href === pathname ? 'page' : undefined}
                                          >
                                             {item.name}
                                          </Link>)
                                       })}

                                    </div>
                                 </div>
                              </Dialog.Panel>
                           </Transition.Child>
                        </div>
                     </div>
                  </div>
               </Dialog>
            </Transition.Root>
         </>

      </nav>
   )
}

export default Navbar