import Image from 'next/image'

const features = [
    {
      name: 'Durable',
      description: 'The leather cover and machined steel disc binding stand up to daily use for years to come.',
    },
    {
      name: 'Refillable',
      description: 'Buy it once and refill as often as you need. Subscribe and save on routine refills.',
    },
    {
      name: 'Thoughtfully designed',
      description:
        'The comfortable disc binding allows you to quickly rearrange pages or combine lined, graph, and blank refills.',
    },
    { name: 'Locally made', description: 'Responsibly and sustainably made real close to wherever you are, somehow.' },
  ]
  
  export default function Founded() {
    return (
      <div className="bg-white max-w-5xl mx-auto">
        <section aria-labelledby="features-heading" className="relative">
          <div className="aspect-h-2 aspect-w-3 overflow-hidden sm:aspect-w-5 lg:aspect-none lg:absolute lg:h-full lg:w-1/2 lg:pr-4 xl:pr-16">
            <Image
                src="/assets/images/founder.jpg"
                alt='Founder Charles Monson'
                width={500}
                height={500}
                className='rounded-xl'
            />
          </div>
  
          <div className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 sm:pb-32 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:pt-32">
            <div className="lg:col-start-2">
              <p className="mt-4 text-4xl font-bold tracking-tight text-gray-900">All in the Details</p>
              <p className="mt-4 text-gray-500">
                We've obsessed over every detail of this handcrafted journal to bring you the best materials for daily
                use.
              </p>
  
              <dl className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 text-sm sm:grid-cols-2">
                {features.map((feature) => (
                  <div key={feature.name}>
                    <dt className="font-medium text-gray-900">{feature.name}</dt>
                    <dd className="mt-2 text-gray-500">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>
      </div>
    )
  }