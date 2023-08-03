import { LifebuoyIcon, NewspaperIcon, PhoneIcon } from '@heroicons/react/20/solid'

const cards = [
    {
        name: 'Founder',
        description: 'Wheels of Mercy was founded in 2005 by Charles Monson following a transformational near-death experience',
        icon: PhoneIcon,
    },
    {
        name: 'Charles Monson',
        description: '“Even the poorest in America have access to custom wheelchairs through programs like Medi-Caid and Medicare, which replace those wheelchairs every five to seven years. There are millions of wheelchairs that do nothing more than collect dust in garages and basements all across the country. Wheels of Mercy seeks to transform those unused wheelchairs into the life-changing mobility equipment that will allow people with disabilities around the world to get off the floor and out of bed.”',
        icon: LifebuoyIcon,
    },
]

export default function About() {
    return (
        <div className="relative isolate overflow-hidden bg-white py-24 sm:py-32">
            {/* colors in background */}
            {/* <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl">
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
            </div>
            <div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu">
                <div
                className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                style={{
                    clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
                />
            </div> */}
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-4xl font-bold tracking-tight text-black sm:text-6xl">About Us</h2>
                    <p className="mt-6 text-lg leading-8 text-black">
                        Wheels of Mercy is a 501(c)3 public charity that collects, repairs, and refurbishes used wheelchairs and
                        distributes them to people in need in developing countries around the world. Our wheelchairs are available
                        to any qualified organization or individual.
                    </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
                    {cards.map((card) => (
                        <div key={card.name} className="flex gap-x-4 rounded-xl bg-accent p-6 ring-1 ring-inset ring-white/10">
                            <card.icon className="h-7 w-5 flex-none text-black" aria-hidden="true" />
                            <div className="text-base leading-7">
                                <h3 className="font-semibold text-black">{card.name}</h3>
                                <p className="mt-2 text-black">{card.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
