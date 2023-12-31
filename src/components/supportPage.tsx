'use client'
import { Roboto } from 'next/font/google'
import Link from 'next/link'
import WishList from './wishList'

const robotoFont = Roboto({
  subsets: ['latin'],
  weight: '700'
})

export default function SupportPage() {
  return (
    <div className="maw-w-7xl mx-auto">
      <div className="px-6 py-14 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className={`text-4xl font-bold tracking-tight text-black dark:text-dark text-center sm:text-6xl ${robotoFont.className}`}>Get Involved</h2>
        </div>
      </div>
      <div className="mx-auto max-w-2xl text-center text-black dark:text-dark">
        <p className="text-lg leading-8">
          Financial resources are the lifeblood of a non-profit. Wheels of Mercy is an entirely volunteer organization.
          Your financial support will pay for things like fuel for volunteers who pick up wheelchairs, spare parts, and
          shipping costs. So give if you can.
          <Link href='/donate' className='pl-1'>
            <span className='underline'>Donate here</span>
          </Link>
        </p>
        <p className="mt-8 text-lg leading-8">
          If you possess a particular skill or knowledge base that can further our mission, we want to hear from you. If
          you are mechanically inclined and can repair wheelchairs we can use you, no experience necessary. If you
          drive a pickup or van and have time to transport chairs, we need you.
        </p>
        <p className="mt-8 text-lg leading-8">
          And we have a wish list.
        </p>

        <WishList />

        <p className="mt-8 text-lg leading-8">
          Thank you for your support.
        </p>
      </div>
    </div>
  )
}