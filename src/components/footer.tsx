'use client'
import { useState } from "react"
import SlideOver from "./slideOver"
import Link from "next/link"

const navigation = {
    main: [
      { name: 'About', href: '/about' },
      { name: 'Support', href: '/support' },
      { name: 'Donate', href: '/donate' },
      { name: 'Frequently Asked Questions', href: '/faq' },
      { name: 'Contact', href: '#' },
    ],
  }
  
  export default function Footer() {
    const [isSlideOpen, setIsSlideOpen] = useState<boolean>(false)
    
    return (
      <footer className="top-[100vh]">
        <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8 ">
          <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
            {navigation.main.map((item) => (
              <div key={item.name} className="pb-6">
                <Link href={item.href}>
                  <div 
                    className="text-sm leading-6 text-black"
                    onClick={(e) => {
                      if (item.name === 'Contact') {
                        e.preventDefault(); // prevent navigation
                        setIsSlideOpen(true);
                      }
                    }}
                  >
                    {item.name}
                  </div>
                </Link>
              </div>
            ))}
          </nav>
          <p className="mt-10 text-center text-xs leading-5 text-black">
            &copy; Wheels of Mercy, Inc. All rights reserved.
          </p>
        </div>
        <SlideOver isOpen={isSlideOpen} onClose={() => setIsSlideOpen(false)} />
      </footer>
    )
  }
  