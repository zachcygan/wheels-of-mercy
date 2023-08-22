'use client'
import Img from 'next/image'

export default function AboutUs() {
    return (
        <div className="bg-white">
            <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About Wheels of Mercy</h2>
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
                <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                    <img
                        src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
                        alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                        className="rounded-lg bg-gray-100"
                    />
                    <img
                        src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg"
                        alt="Top down view of walnut card tray with embedded magnets and card groove."
                        className="rounded-lg bg-gray-100"
                    />
                    <img
                        src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg"
                        alt="Side of walnut card tray with card groove and recessed card area."
                        className="rounded-lg bg-gray-100"
                    />
                    <img
                        src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg"
                        alt="Walnut card tray filled with cards and card angled in dedicated groove."
                        className="rounded-lg bg-gray-100"
                    />
                </div>
            </div>
        </div>
    )
}