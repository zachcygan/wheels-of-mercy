'use client'
import { useState, useEffect, forwardRef } from 'react'
import { Transition } from '@headlessui/react'
import { XCircleIcon, XMarkIcon } from '@heroicons/react/20/solid'

type ErrorProps = {
  message: string,
  onClose: () => void,
  visible: boolean,
  ref: any
}

const Error = forwardRef<HTMLDivElement, ErrorProps>(
  ({ message, onClose, visible }, ref) => {
    const [show, setShow] = useState<boolean>(true);

    useEffect(() => {
      if (visible !== show) {
        setShow(visible);
      }
    }, [visible]);

    return (
      <div ref={ref} className={show ? '' : 'hidden'}>
        <div className='flex justify-center'>
          <div className="rounded-md bg-red-50 p-4 z-10 absolute max-w-3/4 -top-12">
            <div className="flex">
              <div className="flex-shrink-0">
                <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-red-800">{message}</p>
              </div>
              <div className="ml-auto pl-3">
                <div className="-mx-1.5 -my-1.5">
                  <button
                    type="button"
                    className="inline-flex rounded-md bg-red-50 p-1.5 text-red-500 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-green-50"
                    onClick={() => {
                      setShow(false)
                      onClose()
                    }}
                  >
                    <span className="sr-only">Dismiss</span>
                    <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default Error;