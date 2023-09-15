'use client'
import Image from 'next/image'
import image1 from '/public/assets/images/founder.jpg'
import image2 from '/public/assets/images/hoag1.jpg'

export default function OurStory() {
    return (
        <div className='max-w-7xl mx-auto'>
            <div className="px-6 py-14 sm:py-20 lg:px-8">
                <div className="mx-auto max-w-2xl">
                    <h2 className="text-4xl font-bold tracking-tight text-gray-900 text-center sm:text-6xl">Our Story</h2>
                </div>
            </div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-xl lg:max-w-none">
                    <div className="grid max-w-xl grid-cols-1 text-xl mx-auto gap-8 text-base leading-7 text-gray-500 lg:max-w-none lg:grid-cols-2">
                        <div className='mx-auto'>
                            <p className="">
                                At 16 I sustained a spinal cord injury which rendered me a quadriplegic. I spent the next
                                decade trying to find my feet and adjust to life with a disability. As I adjusted, a desire
                                grew within me to give meaning to my new life.
                            </p>
                            <p className="mt-8">
                                The journey to founding Wheels of Mercy started when I got a job at a wheelchair
                                dealership. During my time there I learned how to evaluate and fit someone for a
                                wheelchair. As managed care came to Medicaid, I recognized that the way wheelchairs
                                were acquired was going to change.
                            </p>
                            <p className="mt-8">
                                In response to this emerging market, I quit my job and founded Adaptive Technologies
                                Group (ATG). ATG contracted with CalOPTIMA and 16 Medi-Cal Health Plans in
                                Orange County to provide wheelchair evaluations and fittings. It was while conducting
                                wheelchair evaluations in consumer’s homes that I became aware of how many fully
                                functional, highly specialized wheelchairs were doing nothing more than collecting dust.
                                Nearly every consumer we met with was storing at least two, sometimes three of their
                                previous wheelchairs. My work was interrupted by a massive brain hemorrhage which
                                put me in a coma.
                            </p>
                            <div className='flex justify-center'>
                                <div className='relative'>
                                    <Image
                                        src={image1}
                                        alt="Charles Monson in the hospital"
                                        className='rounded-3xl md:hover:scale-110 transition-all mt-8'
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='mx-auto mt-8'>
                            <div className='flex justify-center'>
                                <div className=''>
                                    <div className='relative'>
                                        <Image
                                            src={image2}
                                            alt="Charles Monson in the hospital"
                                            className="rounded-3xl md:hover:scale-110 transition-all"
                                        />
                                    </div>
                                </div>
                            </div>
                            <p className='mt-8'>
                                I woke to find my business gone, and a need to redefine my life. My near-death
                                experience left me yearning to use the time I have left here to have as powerful an
                                impact as possible upon the disabled community. From this desire sprang Wheels of
                                Mercy..
                            </p>
                            <p className="mt-8">
                                I woke to find my business gone, and a need to redefine my life. My near-death
                                experience left me yearning to use the time I have left here to have as powerful an
                                impact as possible upon the disabled community. From this desire sprang Wheels of
                                Mercy.
                            </p>
                            <p className="mt-8">
                                We began small however our vision is global. With the right support team, an adequate
                                budget, and a dedicated warehouse we can turn the millions of wheelchairs that do
                                nothing but collect dust into life-changing mobility for people locally and around the
                                world. You can join us in this effort by giving your time, expertise, or financial resources.
                            </p>
                            <p className="mt-8">
                                Get invovled today!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mx-auto max-w-7xl px-6 lg:px-8'>

            </div>
        </div>
    )
}