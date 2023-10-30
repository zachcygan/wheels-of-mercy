'use client'
import React, { useState, useRef } from 'react'
import Success from './success'

const isValidEmail = (email: string): boolean => {
  // This regex checks for most common email patterns.
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return emailRegex.test(email);
};

export default function MailingListUnsubForm() {
  const form = useRef<HTMLFormElement>(null);
  const [email, setEmail] = useState<string>('')
  const [emailTouched, setEmailTouched] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const message = 'You have been unsubscribed from our mailing list.'

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submitting')
    setEmail(email.trim())
    try {
      const res = await fetch('/api/mailingList/unsubscribe', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
        })
      })

      if (res.ok) {
        console.log("Request was successful");
        const data = await res.json(); // If the server returns JSON data
        console.log(data);
        setSuccess(true); // Assuming you want to set success to true on a successful request
      } else {
        console.error("Error with request:", res.status, res.statusText);
        setSuccess(false); // Assuming you want to set success to false on an unsuccessful request
      }
    } catch (err) {
      console.error("There was an error with the fetch:", err);
      setSuccess(false); // Assuming you want to set success to false if there's an error with the fetch
    }
  }

  const handleCloseSuccess = () => {
    setSuccess(false);
  }

  return (
    <form ref={form} onSubmit={handleFormSubmit} className=' bg-white dark:bg-zinc-900 p-20 rounded-md'>
      <Success message={message} onClose={() => handleCloseSuccess()} visible={success} />
      <div className="space-y-12">
        <p className='text-center text-xl font-bold dark:text-dark'>Unsubscribe From Our Mailing List</p>
        <p className='text-center dark:text-dark'>Enter your email to unsubscribe.</p>
        <div className="border-b border-gray-900/10 pb-12 bg-white/50 dark:bg-inherit p-2 rounded-md">
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 pt-6">
            <div className="sm:col-span-full">
              <label htmlFor="email" className="text-sm font-medium leading-6 dark:text-dark text-gray-900 flex justify-between items-center">
                Email address
                {emailTouched && !isValidEmail(email) && <span className="text-red-500 text-xs">Please enter a valid email address</span>}
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={() => setEmailTouched(true)}
                  placeholder='example@email.com'
                  className={`outline-none block w-full bg-transparent rounded-md border-0 py-1.5 pl-1 text-gray-900 dark:text-dark shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${emailTouched && !isValidEmail(email) ? 'ring-2 ring-red-500' : ''}`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Unsubscribe
        </button>
      </div>
    </form>
  )
}