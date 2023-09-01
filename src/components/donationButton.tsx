'use client'
import React, { useEffect, useState } from 'react';

export default function DonationButton() {
  const [buttonLoaded, setButtonLoaded] = useState<boolean>(false);

  useEffect(() => {
    if (!buttonLoaded) {
      const script = document.createElement('script');
      script.src = 'https://www.paypalobjects.com/donate/sdk/donate-sdk.js';
      script.charset = 'UTF-8';
      script.onload = () => {
        if (window.PayPal) {
          window.PayPal.Donation.Button({
            env: 'production',
            hosted_button_id: 'Z76M6RNNJRY2J',
            image: {
              src: 'https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif',
              alt: 'Donate with PayPal button',
              title: 'PayPal - The safer, easier way to pay online!',
            },
          }).render('#donate-button');
        }
      };

      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [buttonLoaded]);

  return (
    <div id="donate-button-container" className='flex justify-center hover:scale=[110%]'>
      <div id="donate-button" className=''></div>
    </div>
  )
}