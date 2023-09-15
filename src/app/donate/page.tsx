'use client'
import { useState } from 'react'
import DonationButton from "../../components/donationButton"
import DonationForm from '../../components/donationForm'

export default function Donate() {
    const [showForm, setShowForm] = useState<boolean>(false)

    const handleButtonClick = () => {
        setShowForm(!showForm);
    };

    return (
        <div>
            <div className="px-6 py-24 sm:py-32 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Donate</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Wheels of Mercy keeps administrative and program costs low by developing
                        sponorships and donations in-kind for every possible area of need.
                    </p>
                    <p className="mt-8 text-lg leading-8 text-gray-600">
                        Your donation enables us to expand our programs and increase the distrubution
                        of wheelchairs where sponorships or donations in-kind are unavailable.
                    </p>
                    <p className="mt-8 text-lg leading-8 text-gray-600">
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