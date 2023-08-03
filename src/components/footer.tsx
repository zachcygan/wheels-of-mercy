'use client'

const navigation = {
    main: [
      { name: 'About', href: '/about' },
      { name: 'Support', href: '/support' },
      { name: 'Volunteers', href: '#' },
      { name: 'Get Involved', href: '#' },
      { name: 'Donate', href: '#' },
      { name: 'Contact', href: '#' },
    ],
  }
  
  export default function Footer() {
    return (
      <footer className="bg-white top-[100vh]">
        <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8 ">
          <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
            {navigation.main.map((item) => (
              <div key={item.name} className="pb-6">
                <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                  {item.name}
                </a>
              </div>
            ))}
          </nav>
          <p className="mt-10 text-center text-xs leading-5 text-gray-500">
            &copy; Wheels of Mercy, Inc. All rights reserved.
          </p>
        </div>
      </footer>
    )
  }
  