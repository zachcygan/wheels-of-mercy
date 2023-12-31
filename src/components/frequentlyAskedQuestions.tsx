'use client'
import { useState, useEffect } from 'react'
import { Roboto } from 'next/font/google'
import { PlusIcon } from '@heroicons/react/24/outline'
import SlideOver from './slideOver'

const robotoFont = Roboto({
  subsets: ['latin'],
  weight: '700'
})

const faqs = [
  {
    id: 1,
    question: 'How is Wheels of Mercy different from other wheelchair charities?',
    answer: `We provide nearly-custom fit wheelchairs to those we serve. Custom fitting
        is critical to the health of the wheelchair user. A wheelchair that is
        inappropriate for a person’s stature or disability, poorly fit or unsupportive,
        or lacking a pressure relieving cushion will result in a swift and progressive
        degradation of the individual’s health and function. We do not distribute
        mass-produced cookie-cutter wheelchairs purchased from China, nor do
         we convert patio chairs into wheelchairs.
        \n
        My industry experience and network gives us access to highly customized
        wheelchairs designed for various, specific needs, as they are replaced
         with new ones. These chairs are collected by us when they are replaced
        by MediCaid and Medicare. We ready them for delivery through a
        multipoint safety and function check, replacement of failing parts, and then
        catalogue them into a database according to multiple factors so we can
        custom match it to a person with specific needs. Our wheelchairs not only
        provide mobility, they enhance the health and well-being of the user.`,
  },
  {
    id: 2,
    question: `When was Wheels of Mercy founded?`,
    answer: `Founded in 1999, Wheels of Mercy received its IRS 501(c)3 tax exempt
        designation under the name All Access Foundation in 2005`,
  },
  {
    id: 3,
    question: `How are we funded?`,
    answer: `Wheels of Mercy is largely unfunded, which doesn’t stop us from collecting
        chairs in Southern California and distributing inside California and
        Northern Mexico. We have a handful of stalwart supporters who enable us
        to rent trucks and purchase fuel. With greater financial support we can
        expand our collection and distribution area and serve many more people.`,
  },
  {
    id: 4,
    question: `Who do we serve?`,
    answer: `Our wheelchairs are available to anybody who needs one and has no
        other resources to get one.`,
  },
  {
    id: 5,
    question: `Where do we distribute wheelchairs?`,
    answer: `90% of the wheelchairs we distribute are given away in Southern
        California. Most of the remaining are sent to an organization we support in
        Mexico. We have sent wheelchairs out of state but do not currently have
        an established distribution system outside Southern California.`,
  },
  {
    id: 6,
    question: `Are donations tax deductible?`,
    answer: `Yes. The All Access Foundation, our parent organization, received it’s
        501(c)3 tax exempt status in 20**. Donations are tax deductible according
        to IRS guidelines.`,
  },
  {
    id: 7,
    question: `Can I volunteer?`,
    answer: `Wheels of Mercy is powered by volunteers. Your help means more people
        get wheelchairs. You can donate a wheelchair, time, money, or expertise, repair
        wheelchairs, or you can organize shipment of chairs donated outside Southern
        California to our storage location. Please contact us if interested`,
  },
  {
    id: 8,
    question: `How do I donate a wheelchair?`,
    answer: `Email us at donatechair@wheelsofmercy.org  Please include a photo of
        the chair and whether or not it is functional. If it is a power chair please let
        us know if it has a battery and charger. If you don’t have all of this info,
        provide as much as possible.`,
  },
  {
    id: 9,
    question: `What types of wheelchairs can we accept?`,
    answer: `Manual wheelchairs up to 15 years old, Power Chairs up 5 years old, rigid
        framed power chairs, up to 10 years old.`,
  },
  {
    id: 10,
    question: `Do we accept walkers, crutches, canes, or wheelchair cushions?`,
    answer: `We do not accept crutches or canes. Rollater type walkers and wheelchair
        cushions in excellent or like new condition are accepted.`,
  },
  {
    id: 11,
    question: `Can I request a wheelchair?`,
    answer: `If you receive Medicare or Medicaid your first step should be contact a
        wheelchair vendor in your community and have a wheelchair custom
        designed for you. Those agencies will pay for it. If you have no resources
        contact us at charles@wheelsofmercy.org`,
  },
  // More questions...
]

export default function FrequentlyAskedQuestions() {
  const [openIds, setOpenIds] = useState<number[]>([]);
  const [isSlideOpen, setIsSlideOpen] = useState<boolean>(false)

  const handleAccordion = (id: number) => {
    setOpenIds((prevOpenIds) => {
      if (prevOpenIds.includes(id)) {
        // If the ID is already in the array, remove it
        return prevOpenIds.filter(openId => openId !== id);
      } else {
        // Otherwise, add the ID to the array
        return [...prevOpenIds, id];
      }
    });
  };

  return (
    <div className="mx-auto max-w-7xl px-6 py-14 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
        <h2 className={`text-4xl sm:text-6xl font-bold leading-10 tracking-tight pb-4 text-center text-black dark:text-dark ${robotoFont.className}`}>Frequently asked questions</h2>
        <dl className="mt-10 space-y-6 divide-y divide-black">
          {faqs.map((faq) => (
            <div key={faq.id} className='pt-6'>
              <button onClick={() => handleAccordion(faq.id)} className='flex w-full items-start justify-between text-left text-black dark:text-dark'>
                <span className="text-base font-semibold leading-7">{faq.question}</span>
                <span className="ml-6 flex h-7 items-center">
                  <PlusIcon className={`${openIds.includes(faq.id) ? 'rotate-45' : ''} h-6 w-6 transform-all duration-300`} aria-hidden="true" />
                </span>
              </button>
              <div className={`${openIds.includes(faq.id) ? 'accordionOpen accordion' : 'accordion'}`}>
                <div className={`mt-2 pr-120 accordionInner`}>
                  {(() => {
                    if (faq.id === 7) {
                      return (
                        <div className='text-base leading-7 text-black dark:text-dark2 '>
                          Wheels of Mercy is powered by volunteers. Your help means more people
                          get wheelchairs. You can donate a wheelchair, time, money, or expertise, repair
                          wheelchairs, or you can organize shipment of chairs donated outside Southern
                          California to our storage location. Please
                          <span
                            onClick={(e) => {
                              e.preventDefault()
                              setIsSlideOpen(true)
                            }}
                            className='underline cursor-pointer pl-1'>contact us here
                          </span> if interested.
                        </div>
                      );
                    } else if (faq.id === 8) {
                      return (
                        <div className='text-base leading-7 text-black dark:text-dark2 '>
                          Fill out the contact form
                          <span
                            className='px-1 underline cursor-pointer'
                            onClick={(e) => {
                              e.preventDefault()
                              setIsSlideOpen(true)
                            }}
                          >
                            found here
                          </span>
                          and check 'donate wheelchair'.  Please include a photo of
                          the chair and whether or not it is functional. If it is a power chair please let
                          us know if it has a battery and charger. If you don’t have all of this info,
                          provide as much as possible.
                        </div>
                      )
                    } else {
                      return (
                        <div className='text-base leading-7 text-black dark:text-dark2 '>{faq.answer}</div>
                      );
                    }
                  })()}
                </div>
              </div>
            </div>
          ))}
        </dl>
        <SlideOver isOpen={isSlideOpen} onClose={() => setIsSlideOpen(false)} />
      </div>
    </div>
  )
}