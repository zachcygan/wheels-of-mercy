'use client'
import Image from "next/image"
import DonationButton from "./donationButton"

export default function HomeDonate() {
  return (
    <div className="flex justify-center items-center"> {/* This will center the container horizontally on the page */}
      <div className="overflow-hidden rounded-lg bg-gray-50 max-w-7xl dark:bg-gray-600/20 flex-1">
          <div className="flex flex-col md:flex-row"> {/* Removed h-full */}
            <div className="flex-1 flex flex-col justify-center items-center"> {/* This makes the div a flex container and centers its children vertically and horizontally */}
              <div>EVERY gift counts</div>
              <div>EVERY gift makes a difference</div>
              <div>EVERY gift is accepted with gratitude</div>
              <div>GIVE TODAY!</div>
              <div
                className="py-5"
              >
                <DonationButton />
              </div>
            </div>
            <div className="flex-1 flex justify-center items-center">
              <Image
                src={'/assets/images/homeDonate.jpg'}
                alt="Donate Image"
                layout="responsive"
                width={500}
                height={500}
              />
            </div>
          </div>
      </div>
    </div>
  )
}