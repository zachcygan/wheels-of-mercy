'use client'

const featuredTestimonial = {
    body: 'This is such a blessing. Thank you, Thank you, Thank you!',
    author: {
        name: 'Maria Rodriguez',
        handle: 'brennagoyette',
        imageUrl:
            '/assets/images/carouselImage5.webp',
        logoUrl: 'https://tailwindui.com/img/logos/savvycal-logo-gray-900.svg',
    },
}

const testimonials = [
    [
        [
            {
                body: 'This is a miracle! God bless you!',
                author: {
                    name: 'Avelino Rodriguez',
                    imageUrl:
                        '/assets/images/testimonial2.webp',
                },
            },
            // More testimonials...
        ],
        [
            {
                body: 'This is the best thing that’s ever happened to me!',
                author: {
                    name: 'Victor Vanisacker',
                    imageUrl:
                        '/assets/images/carouselImage6.webp',
                },
            },
            // More testimonials...
        ],
    ],
    [
        [
            {
                body: 'We are so grateful to Charles! Vernon loves his new Chair! Without Charles’ help Vernon would have never been approved for his new chair.',
                author: {
                    name: 'Kaye Doan',
                    imageUrl:
                        '/assets/images/testimonial1.webp',
                },
            },
            // More testimonials...
        ],
        [
            {
                body: 'Molestias ea earum quos nostrum doloremque sed. Quaerat quasi aut velit incidunt excepturi rerum voluptatem minus harum.',
                author: {
                    name: 'Leonard Krasner',
                    imageUrl:
                        'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                },
            },
            // More testimonials...
        ],
    ],
]

function classNames(...classes: String[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Testimonials() {
    return (
        <div className="relative isolate pb-32 pt-24 sm:pt-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-xl text-center">
                    <p className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        We have helped countless amazing people
                    </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
                    <figure className="col-span-2 hidden hover:scale-[105%] transition-all sm:block sm:rounded-2xl sm:bg-white sm:shadow-lg sm:ring-1 sm:ring-gray-900/5 xl:col-start-2 xl:row-end-1">
                        <blockquote className="p-12 text-xl font-semibold leading-8 tracking-tight text-gray-900">
                            <p>{`“${featuredTestimonial.body}”`}</p>
                        </blockquote>
                        <figcaption className="flex items-center gap-x-4 border-t border-gray-900/10 px-6 py-4">
                            <img
                                className="h-10 w-10 flex-none rounded-full bg-gray-50"
                                src={featuredTestimonial.author.imageUrl}
                                alt=""
                            />
                            <div className="flex-auto">
                                <div className="font-semibold">{featuredTestimonial.author.name}</div>
                            </div>
                        </figcaption>
                    </figure>
                    {testimonials.map((columnGroup, columnGroupIdx) => (
                        <div key={columnGroupIdx} className="space-y-8 xl:contents xl:space-y-0">
                            {columnGroup.map((column, columnIdx) => (
                                <div
                                    key={columnIdx}
                                    className={classNames(
                                        (columnGroupIdx === 0 && columnIdx === 0) ||
                                            (columnGroupIdx === testimonials.length - 1 && columnIdx === columnGroup.length - 1)
                                            ? 'xl:row-span-2'
                                            : 'xl:row-start-1',
                                        'space-y-8'
                                    )}
                                >
                                    {column.map((testimonial) => (
                                        <figure
                                            key={testimonial.author.name}
                                            className="rounded-2xl text-lg bg-white hover:scale-110 transition-all p-6 shadow-lg ring-1 ring-gray-900/5"
                                        >
                                            <blockquote className="text-gray-900">
                                                <p>{`“${testimonial.body}”`}</p>
                                            </blockquote>
                                            <figcaption className="mt-6 flex items-center gap-x-4">
                                                <img className="h-10 w-10 rounded-full bg-gray-50" src={testimonial.author.imageUrl} alt="" />
                                                <div>
                                                    <div className="font-semibold">{testimonial.author.name}</div>
                                                </div>
                                            </figcaption>
                                        </figure>
                                    ))}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}