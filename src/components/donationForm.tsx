'use client'
import { useState, useRef } from 'react'
import Success from './success'

export default function DonationForm() {
  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [emailTouched, setEmailTouched] = useState<boolean>(false);
  const [phone, setPhone] = useState<string>('')
  const [amount, setAmount] = useState<number>(0)
  const [success, setSuccess] = useState<boolean>(false);
  const message = 'Your donation has been recorded.'

  const form = useRef<HTMLFormElement>(null)

  const isValidEmail = (email: string): boolean => {
    // This regex checks for most common email patterns.
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
  };

  const handleFormSumbit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('submitting')
    setFirstName(firstName.trim())
    setLastName(lastName.trim())
    setEmail(email.trim())
    setPhone(phone.trim())
    try {
      const res = await fetch('/api/donors/postDonors', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phone,
          amount
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

  const handleSuccessClose = () => {
    setSuccess(false);
  }

  return (
    <form ref={form} action='post' onSubmit={handleFormSumbit}>
      {success ? <Success message={message} onClose={() => handleSuccessClose()} /> : null}
      <p className='text-lg lg:font-2xl font-bold dark:text-dark'>Thank you for your donation!</p>
      <p className='text-lg lg:font-2xl mt-4 dark:text-dark'>Please fill out this form for our records, no payment information is saved.</p>
      <div className="border-b border-gray-900/10 pb-12">
        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 pt-6">
          <div className="sm:col-span-3">
            <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-left text-gray-900 dark:text-dark">
              First name
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  autoComplete="firstName"
                  className="outline-none block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 dark:text-dark placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  value={firstName}
                  onChange={(e) => { setFirstName(e.target.value) }}
                  placeholder='John'
                />
              </div>
            </div>
          </div>
          <div className="sm:col-span-3">
            <label htmlFor="last-name" className="block text-sm text-left font-medium leading-6 text-gray-900 dark:text-dark">
              Last name
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                {/* <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">Smith</span> */}
                <input
                  type="text"
                  name="lastName"
                  id="last-name"
                  autoComplete="last-name"
                  className="outline-none block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 dark:text-dark placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  value={lastName}
                  onChange={(e) => { setLastName(e.target.value) }}
                  placeholder='Smith'
                />
              </div>
            </div>
          </div>
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
                className={`outline-none block w-full rounded-md bg-transparent border-0 py-1.5 pl-1 text-gray-900 dark:text-dark shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${emailTouched && !isValidEmail(email) ? 'ring-2 ring-red-500' : ''}`}
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <label htmlFor="email" className="text-sm font-medium leading-6 text-gray-900 dark:text-dark flex justify-between items-center">
              Phone Number
            </label>
            <div className="mt-2">
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder='999-999-9999'
                className={`outline-none block w-full rounded-md bg-transparent border-0 py-1.5 pl-1 text-gray-900 dark:text-dark shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <label htmlFor="first-name" className="block text-left text-sm font-medium leading-6 text-gray-900 dark:text-dark">
              Amount
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  type="number"
                  name="amount"
                  id="amount"
                  autoComplete="amount"
                  className="outline-none block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 dark:text-dark placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  value={amount}
                  onChange={(e) => { setAmount(Number(e.target.value)) }}
                  placeholder='50'
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="submit"
          className="rounded-full bg-indigo-600 px-3 py-2 text-sm font-semibold text-white dark:text-dark shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Send
        </button>
      </div>
    </form>
  )
}