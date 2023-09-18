'use client'
import React, { useState, useRef } from 'react'

const isValidEmail = (email: string): boolean => {
    // This regex checks for most common email patterns.
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
};

export default function MailingListSubForm() {
    const form = useRef<HTMLFormElement>(null);
    const [firstName, setFirstName] = useState<string>('')
    const [lastName, setLastName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [emailTouched, setEmailTouched] = useState<boolean>(false);

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('submitting')
        const res = await fetch('/api/mailingList/postMailingList', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstName,
                lastName,
                email,
            })
        })
        console.log(res)
    }

    return(
        <form ref={form} onSubmit={handleFormSubmit} className=' bg-white p-20 rounded-md'>
            <div className="space-y-12">
                <p className='text-center text-xl font-bold'>Join Our Mailing List!</p>
                <p className='text-center'>Sign up to recieve updates about what Wheels of Mercy is up to and how we are putting your donations to use</p>
                <div className="border-b border-gray-900/10 pb-12 bg-white/50 p-2">
                    <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 pt-6">
                        <div className="sm:col-span-3">
                            <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                First name
                            </label>
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <input
                                        type="text"
                                        name="firstName"
                                        id="firstName"
                                        autoComplete="firstName"
                                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                        value={firstName}
                                        onChange={(e) => { setFirstName(e.target.value) }}
                                        placeholder='John'
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
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
                                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                        value={lastName}
                                        onChange={(e) => { setLastName(e.target.value) }}
                                        placeholder='Smith'
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="sm:col-span-full">
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 flex justify-between items-center">
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
                                    className={`block w-full rounded-md border-0 py-1.5 pl-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${emailTouched && !isValidEmail(email) ? 'ring-2 ring-red-500' : ''}`}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
                <button
                    type="submit"
                    className="rounded-full bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Subscribe
                </button>
            </div>
        </form>
    )
}