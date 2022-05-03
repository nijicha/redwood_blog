import { XIcon } from '@heroicons/react/outline'
import { Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/solid'

const HeaderBanner = () => {
  const [show, setShow] = useState(true)

  return (
    <>
      <Transition
        as={Fragment}
        show={show}
        leave="transition ease-in duration-250"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="bg-cyan-600">
          <div className="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-between">
              <div className="flex w-0 flex-1 items-center justify-center">
                <p className="ml-3 truncate font-semibold text-white">
                  <span className="hidden md:inline">
                    <HeartSolidIcon
                      className="inline h-5 w-5 text-red-500"
                      aria-hidden="true"
                    />
                    {' An example blog powered by '}
                  </span>
                  <span className="md:inline">
                    <a
                      className="underline decoration-2 underline-offset-2 hover:text-white hover:decoration-red-500"
                      href="https://redwoodjs.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      RedwoodJS
                    </a>
                    {' + '}
                    <a
                      className="underline decoration-2 underline-offset-2 hover:text-white hover:decoration-cyan-500"
                      href="https://tailwindcss.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      TailwindCSS
                    </a>{' '}
                  </span>
                  <span className="md:hidden">
                    <HeartSolidIcon
                      className="inline h-5 w-5 text-red-500"
                      aria-hidden="true"
                    />
                  </span>
                </p>
              </div>
              <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
                <button
                  type="button"
                  className="-mr-1 flex rounded-md p-2 hover:outline-none hover:ring-2 hover:ring-white sm:-mr-2"
                  onClick={() => {
                    setShow(false)
                  }}
                >
                  <span className="sr-only">Dismiss</span>
                  <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </>
  )
}

export default HeaderBanner
