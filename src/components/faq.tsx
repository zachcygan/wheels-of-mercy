'use client'

import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
    {
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
        question: `When was Wheels of Mercy founded?`,
        answer: `Founded in 1999, Wheels of Mercy received its IRS 501(c)3 tax exempt
        designation under the name All Access Foundation in 2005`,
    },
    {
        question: `How are we funded?`,
        answer: `Wheels of Mercy is largely unfunded, which doesn’t stop us from collecting
        chairs in Southern California and distributing inside California and
        Northern Mexico. We have a handful of stalwart supporters who enable us
        to rent trucks and purchase fuel. With greater financial support we can
        expand our collection and distribution area and serve many more people.`,
    },
    {
        question: `Who do we serve?`,
        answer: `Our wheelchairs are available to anybody who needs one and has no
        other resources to get one.`,
    },
    {
        question: `Where do we distribute wheelchairs?`,
        answer: `90% of the wheelchairs we distribute are given away in Southern
        California. Most of the remaining are sent to an organization we support in
        Mexico. We have sent wheelchairs out of state but do not currently have
        an established distribution system outside Southern California.`,
    },
    {
        question: `Are donations tax deductible?`,
        answer: `Yes. The All Access Foundation, our parent organization, received it’s
        501(c)3 tax exempt status in 20**. Donations are tax deductible according
        to IRS guidelines.`,
    },
    {
        question: `Can I volunteer?`,
        answer: `Wheels of Mercy is powered by volunteers. Your help means more people
        get wheelchairs. You can donate a wheelchair, time, money, or expertise, repair
        wheelchairs, or you can organize shipment of chairs donated outside Southern
        California to our storage location. Please contact us if interested`,
    },
    {
        question: `How do I donate a wheelchair?`,
        answer: `Email us at donatechair@wheelsofmercy.org  Please include a photo of
        the chair and whether or not it is functional. If it is a power chair please let
        us know if it has a battery and charger. If you don’t have all of this info,
        provide as much as possible.`,
    },
    {
        question: `What types of wheelchairs can we accept?`,
        answer: `Manual wheelchairs up to 15 years old, Power Chairs up 5 years old, rigid
        framed power chairs, up to 10 years old.`,
    },
    {
        question: `Do we accept walkers, crutches, canes, or wheelchair cushions?`,
        answer: `We do not accept crutches or canes. Rollater type walkers and wheelchair
        cushions in excellent or like new condition are accepted.`,
    },
    {
        question: `Can I request a wheelchair?`,
        answer: `If you receive Medicare or Medicaid your first step should be contact a
        wheelchair vendor in your community and have a wheelchair custom
        designed for you. Those agencies will pay for it. If you have no resources
        contact us at requestchair@wheelsofmery.org`,
    },
    // More questions...
]

export default function Faq() {
    return (
        <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-base font-semibold leading-7">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          ) : (
                            <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
    )
}