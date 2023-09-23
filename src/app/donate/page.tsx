'use client'
import { Roboto } from 'next/font/google'
import { useState } from 'react'
import DonationButton from "../../components/donationButton"
import DonationForm from '../../components/donationForm'

const robotoFont = Roboto({
    subsets: ['latin'],
    weight: '700'
})

export default function Donate() {
    const [showForm, setShowForm] = useState<boolean>(false)

    const handleButtonClick = () => {
        setShowForm(!showForm);
    };

    return (
        <div>
            <div className="max-w-7xl mx-auto">
                <div className="px-6 py-14 sm:py-20 lg:px-8">
                    <div className="mx-auto max-w-2xl">
                        <h2 className={`text-4xl font-bold tracking-tight text-gray-900 text-center sm:text-6xl ${robotoFont.className}`}>Donate</h2>
                    </div>
                </div>
                <div className="mx-auto max-w-2xl text-center text-black">
                    <p className="text-lg leading-8">
                        Wheels of Mercy keeps administrative and program costs low by developing
                        sponorships and donations in-kind for every possible area of need.
                    </p>
                    <p className="mt-8 text-lg leading-8">
                        Your donation enables us to expand our programs and increase the distrubution
                        of wheelchairs where sponorships or donations in-kind are unavailable.
                    </p>
                    <p className="mt-8 text-lg leading-8">
                        We are grateful for your donation and will be good stewards of your investment.
                        Please click the donate button below to make a donation.
                    </p>
                    <div className="mt-8" onClick={handleButtonClick}>
                        <DonationButton />
                    </div>

                    {showForm && (
                        <div className="mt-4 bg-white p-4 rounded-md">
                            {/* Your donation form goes here */}
                            <DonationForm />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}