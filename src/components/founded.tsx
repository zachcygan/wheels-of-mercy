'use client'
import Image from 'next/image'
import image1 from '/public/assets/images/founder.jpg'

export default function Founded() {
  return (
    <div>
      <div className="max-w-5xl pt-10 mx-auto mb-20">
        <section aria-labelledby="features-heading" className="relative flex flex-col items-center lg:flex-row">
          <div className="lg:w-1/2 lg:pr-4 xl:pr-16">
            <div className='relative'>
              <Image
                src={image1}
                alt='Founder Charles Monson'
                className='rounded-xl mx-auto lg:mx-0 hover:scale-105 transition-all'
              />
            </div>
          </div>

          <div className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 sm:pb-32 lg:w-1/2 lg:px-8 lg:pt-20">
            <div className=''>
              <p className="mt-4 text-4xl font-bold tracking-tight text-gray-900 text-center lg:text-left">
                Founder
              </p>
              <p className="mt-4 text-gray-500 text-center text-xl lg:text-left">
                Wheels of Mercy was founded in 2005 by Charles Monson following a transformations near-death experience
              </p>
            </div>
            {/* Something is causing an error in here for the block quote */}
            <blockquote className="relative text-center max-w-lg mx-auto pt-10 lg:text-left">
              <div className="relative z-10">
                <p className="text-xl text-black">
                  <em className="relative text-accent">
                    <svg className="absolute top-0 left-0 transform -translate-x-8 -translate-y-8 h-16 w-16 text-gray-100 sm:h-24 sm:w-24 dark:text-accent" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z" fill="currentColor" />
                    </svg>
                    <span className="relative z-10 dark:text-black font-bold">
                      Even the poorest in America have access to custom wheelchairs through programs like Medi-Caid and
                      Medicare, which replace those wheelchairs every five to seven years. There are millions of wheelchairs that
                      do nothing more than collect dust in garages and basements all across the country. Wheels of Mercy seeks
                      to transform those unused wheelchairs into the life-changing mobility equipment that will allow people with
                      disabilities around the world to get off the floor and out of bed.
                    </span>
                  </em>
                </p>
              </div>
            </blockquote>
          </div>
        </section>
      </div>
    </div>
  )
}