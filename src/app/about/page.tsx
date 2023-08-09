'use client'
import Faq from '../../components/faq'
import Founded from '../../components/founded'

export default function About() {
    return (
        <div className='bg-white'>
            <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">About Us</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Wheels of Mercy is a 501(c)3 public charity that collects, repairs, and refurbishes used wheelchairs and
                        distributes them to people in need in developing countries around the world. Our wheelchairs are available
                        to any qualified organization or individual.
                    </p>
                </div>
            </div>
            <Founded />
            <Faq />
        </div>

    )
}
