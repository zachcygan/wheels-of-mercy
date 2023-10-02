'use client'
import { useState, useEffect, useRef } from 'react'
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import emailjs from '@emailjs/browser'
import Success from './success'
import Error from './error'


export default function ContactForm() {
  const [selectedCheckboxes, setSelectedCheckboxes] = useState<string[]>([]);
  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [emailTouched, setEmailTouched] = useState<boolean>(false);
  const [subject, setSubject] = useState<string>('')
  const [message, setMessage] = useState<string>('')
  const [totalSize, setTotalSize] = useState<number>(0);
  const [previewImages, setPreviewImages] = useState<string[]>([])
  const [success, setSuccess] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)
  const SuccessMessage = 'Thank you for your message, we will get back to you as soon as possible.'
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [sending, setSending] = useState<boolean>(false)


  const form = useRef<HTMLFormElement>(null);

  const handleCheckboxChange = (value: string) => {
    if (selectedCheckboxes.includes(value)) {
      // If the checkbox value is already in the array, remove it
      setSelectedCheckboxes(selectedCheckboxes.filter((item) => item !== value));
    } else {
      // If the checkbox value is not in the array, add it
      setSelectedCheckboxes([...selectedCheckboxes, value]);
    }
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true)
    if (selectedCheckboxes.length === 0 || !firstName || !lastName || !email || !subject || !message) {
      setError(true);
      setErrorMessage('Please fill out all required fields.');
      return;
    }

    if (form.current !== null) {
      emailjs.sendForm('service_fzix91g', 'template_2wbljac', form.current, 'jUyA5LHa70k8i0tEl')
        .then((result) => {
          console.log(result.text)
          if (error) {
            setError(false)
            setErrorMessage('')
            setSending(false)
          }
          setSending(false)
          setSuccess(true)
        }, (error) => {
          console.log(error.text);
        });
    } else {
      console.error("Form reference is null.");
    };
  };

  const isValidEmail = (email: string): boolean => {
    // This regex checks for most common email patterns.
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
  };

  //handles image preview
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    let totalSizeInMB = 0;

    for (let i = 0; i < files.length; i++) {
      totalSizeInMB += files[i].size / (1024 * 1024); // converting to MB
    }

    if (totalSizeInMB > 2) {
      setErrorMessage('File size is too large. Please upload files less than 2MB.');
      setSuccess(false)
      setError(true);
      e.target.value = ''
      return; // Exit the function early if the file size is too large
    }

    setTotalSize(parseFloat(totalSizeInMB.toFixed(2)));

    if (files) {
      const imagePreviews: string[] = [];
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();
        reader.onload = (e) => {
          if (e.target && typeof e.target.result === 'string') {
            imagePreviews.push(e.target.result);

            if (imagePreviews.length === files.length) {
              setPreviewImages(imagePreviews);
            }
          }
        };
        reader.readAsDataURL(file);
      }
    }
  };

  const handleCloseError = () => {
    console.log(error)
    setError(false);
    setErrorMessage(''); // Reset the error message
  };

  const handleCloseSuccess = () => {
    setSuccess(false);
  }

  return (
    <form ref={form} onSubmit={sendEmail}>
      {success ? <Success message={SuccessMessage} onClose={() => handleCloseSuccess()} /> : null}
      {error ? <Error message={errorMessage} onClose={() => handleCloseError()} /> : null}
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <div>
            <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900 dark:text-dark pb-2">
              Reason for Contact
            </label>
            <fieldset className=''>
              <legend className="sr-only">Notifications</legend>
              <div className="space-y-5">
                <div className="relative flex items-start">
                  <div className="flex h-6 items-center">
                    <input
                      id="volunteer"
                      aria-describedby="Volunteer-description"
                      name="checkbox"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value='Volunter'
                      onChange={(e) => handleCheckboxChange(e.target.value)}
                    />
                  </div>
                  <div className="ml-3 text-sm leading-6">
                    <label htmlFor="comments" className="font-medium text-gray-900 dark:text-dark">
                      Volunter
                    </label>{' '}
                  </div>
                </div>
                <div className="relative flex items-start">
                  <div className="flex h-6 items-center">
                    <input
                      id="donateInKind"
                      aria-describedby="candidates-description"
                      name="checkbox"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value='Donate in Kind'
                      onChange={(e) => handleCheckboxChange(e.target.value)}
                    />
                  </div>
                  <div className="ml-3 text-sm leading-6">
                    <label htmlFor="candidates" className="font-medium text-gray-900 dark:text-dark">
                      Donate in Kind
                    </label>{' '}
                  </div>
                </div>
                <div className="relative flex items-start">
                  <div className="flex h-6 items-center">
                    <input
                      id="offers"
                      aria-describedby="offers-description"
                      name="checkbox"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value='Donate a Wheelchair'
                      onChange={(e) => handleCheckboxChange(e.target.value)}
                    />
                  </div>
                  <div className="ml-3 text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900 dark:text-dark">
                      Donate a Wheelchair
                    </label>{' '}
                    <span id="offers-description" className="text-gray-500">
                      <span className="sr-only">Offers </span>requires a photo upload
                    </span>
                  </div>
                </div>
                <div className="relative flex items-start">
                  <div className="flex h-6 items-center">
                    <input
                      id="candidates"
                      aria-describedby="candidates-description"
                      name="checkbox"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value='General Inquiry'
                      onChange={(e) => handleCheckboxChange(e.target.value)}
                    />
                  </div>
                  <div className="ml-3 text-sm leading-6">
                    <label htmlFor="candidates" className="font-medium text-gray-900 dark:text-dark">
                      General Inquiry
                    </label>{' '}
                  </div>
                </div>
              </div>
            </fieldset>
          </div>
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 pt-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900 dark:text-dark">
                First name
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    autoComplete="firstName"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 dark:text-dark placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    value={firstName}
                    onChange={(e) => { setFirstName(e.target.value) }}
                    placeholder='John'
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900 dark:text-dark">
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
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 dark:text-dark placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    value={lastName}
                    onChange={(e) => { setLastName(e.target.value) }}
                    placeholder='Smith'
                  />
                </div>
              </div>
            </div>
            <div className="sm:col-span-full">
              <label htmlFor="email" className="text-sm font-medium leading-6 text-gray-900 dark:text-dark flex justify-between items-center">
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
                  className={`block w-full bg-transparent rounded-md border-0 py-1.5 pl-1 text-gray-900 dark:text-dark shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${emailTouched && !isValidEmail(email) ? 'ring-2 ring-red-500' : ''}`}
                />
              </div>
            </div>
            <div className="sm:col-span-6">
              <label htmlFor="subject" className="block text-sm font-medium leading-6 text-gray-900 dark:text-dark">
                Subject
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    autoComplete="subject"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 dark:text-dark placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    value={subject}
                    onChange={(e) => { setSubject(e.target.value) }}
                    placeholder='Wheel Chair Donation'
                  />
                </div>
              </div>
            </div>
            <div className="col-span-full">
              <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-900 dark:text-dark">
                Message
              </label>
              <div className="mt-2">
                <textarea
                  id="text"
                  name="text"
                  rows={7}
                  className="block bg-transparent w-full rounded-md p-2 border-0 py-1.5 text-gray-900 dark:text-dark shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={message}
                  onChange={(e) => { setMessage(e.target.value) }}
                  placeholder='Hello, I would like to donate a wheel chair.'
                />
              </div>
            </div>
            <div className="col-span-full">
              <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900 dark:text-dark">
                Images
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 dark:border-gray-200/25 px-6 py-10">
                <div className="text-center">
                  <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span className=''>Upload a file</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        multiple
                        className="sr-only"
                        accept='image/*'
                        onChange={handleImageUpload}
                      />
                    </label>
                    <p className="pl-1 dark:text-dark">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600 dark:text-dark">PNG, JPG, GIF up to 2MB</p>
                </div>
              </div>
              {previewImages.length > 0 && (
                <div className='mt-4'>
                  <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900 dark:text-dark">
                    Image Upload Preview
                  </label>
                  <div className="mt-2 flex flex-wrap rounded-lg px-6 py-1 border border-dashed border-gray-900/25 dark:border-gray-200/25">
                    {previewImages.map((preview, index) => (
                      <img
                        key={index}
                        src={preview}
                        alt={`Preview ${index + 1}`}
                        className="max-h-40 mx-auto px-1 py-1"
                      />
                    ))}
                  </div>
                  <p className="mt-2 text-sm text-gray-600 dark:text-dark">Total size: {totalSize} MB</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="submit"
          className={`rounded-full bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
          disabled={sending}
        >
          {sending ? (
            <div className='cursor-not-allowed'>
              <div className='animate-spin'>
                <svg width="32px" height="20px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none" className="hds-flight-icon--animation-loading"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fill="#FFFFFF" fillRule="evenodd" clipRule="evenodd"> <path d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8z" opacity=".2"></path> <path d="M7.25.75A.75.75 0 018 0a8 8 0 018 8 .75.75 0 01-1.5 0A6.5 6.5 0 008 1.5a.75.75 0 01-.75-.75z"></path> </g> </g></svg>
              </div>
            </div>
          ) : (
            'Send'
          )}
        </button>

      </div>
    </form>
  )
}