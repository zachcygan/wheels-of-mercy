'use client'
import Image from 'next/image'

export default function AboutUs() {
    return (
        <div className='bg-transparent mt-20'>
            <div className="bg-transparent max-w-7xl mx-auto pt-10">
            <h2 className="text-4xl font-bold text-gray-900 text-center sm:text-6xl">We're Different, Here's Why</h2>
                <div className="mx-auto grid max-w-2xl text-xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 sm:px-6 sm:py-20 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                    <div>

                        <p className="mt-4 text-gray-500">
                            Wheels of Mercy is a non-profit public charity that collects used wheelchairs,
                            restores them, and gives them to people who need but can’t afford them.
                        </p>
                        <p className="mt-8 text-gray-500">
                            We measure success by individual outcomes, rather than number of chairs
                            delivered. This is as an important distinction, because a wheelchair is not a
                            convenience, it’s a medical device. Improperly fit, a wheelchair will cause pressure
                            sores, spinal deformities, and even death from these complicating factors.
                        </p>
                        <p className="mt-8 text-gray-500">
                            The nature of spending all day, every day sitting in a wheelchair demands that it
                            be custom fit to the individual. Wheels of Mercy achieves positive outcomes by matching custom-fitting
                            individuals with wheelchairs and postural support systems that match their need and
                            function.
                        </p>
                        <p className="mt-8 text-gray-500">
                            Imagine for a moment, remaining in the chair you are sitting in at this very
                            moment for 12 hours. Your back would hurt, your legs would cramp. Now imagine that
                            you are unable to shift your weight or move your position in that chair. Within a few
                            hours you would find yourself in extreme discomfort, developing into horrible pain as the
                            hours stretch. Your skin would break down and you would develop pressure sores. This
                            is the stark reality of life in the wrong wheelchair.
                        </p>
                        <p className="mt-8 text-gray-500">
                            A wheelchair will transform a life only when it meets individual medical need, and
                            maintains the integrity of the skin and spine, while it enables mobility.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-4 h-full">
                        <div className='relative hover:scale-105 transition-all'>
                            <Image
                                src='/assets/images/about6.jpg'
                                alt='Bad wheel chair'
                                className='rounded-xl'
                                fill
                                sizes='(max-width: 768px) 33vh, (max-width: 1200px) 50vw, 33vw'
                            />
                        </div>
                        <div className='relative hover:scale-105 transition-all'>
                            <Image
                                src='/assets/images/about2.jpg'
                                alt='Bad spine'
                                className='rounded-xl'
                                fill
                                sizes='(max-width: 768px) 33vh, (max-width: 1200px) 50vw, 33vw'
                            />
                        </div>
                        <div className='relative hover:scale-105 transition-all'>
                            <Image
                                src='/assets/images/about1.webp'
                                alt='Good wheel chair'
                                className='rounded-xl'
                                fill
                                sizes='(max-width: 768px) 33vh, (max-width: 1200px) 50vw, 33vw'
                            />
                        </div>
                        <div className='relative hover:scale-105 transition-all'>
                            <Image
                                src='/assets/images/about4.jpg'
                                alt='Good spine'
                                className='rounded-xl'
                                fill
                                sizes='(max-width: 768px) 33vh, (max-width: 1200px) 50vw, 33vw'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}