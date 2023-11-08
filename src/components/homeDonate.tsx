'use client'
import Image from "next/image"
import DonationButton from "./donationButton"

export default function HomeDonate() {
  return (
    <div className="flex justify-center items-center w-full px-5"> {/* Ensure full width and centering */}
      <div className="overflow-hidden rounded-lg bg-gray-50 max-w-7xl dark:bg-gray-600/20 w-full">
        <div className="flex flex-col md:flex-row"> {/* Ensuring the flex container takes up the full width */}
          <div className="flex-1 flex flex-col justify-center items-center text-center py-2 w-full"> {/* Added text-center and w-full */}
            <div className="text-2xl md:text-4xl">EVERY gift counts</div>
            <div className="text-2xl md:text-4xl">EVERY gift makes a difference</div>
            <div className="text-2xl md:text-4xl">EVERY gift is accepted with gratitude</div>
            <div className="text-2xl md:text-4xl">GIVE TODAY!</div>
            <div className="py-5 scale-75">
              <DonationButton />
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <Image
              src={'/assets/images/homeDonate.jpg'}
              alt="Donate Image"
              width={650}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  )
}