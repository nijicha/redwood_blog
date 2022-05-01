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
          <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between flex-wrap">
              <div className="w-0 flex-1 flex items-center justify-center">
                <p className="ml-3 font-semibold text-neutral-50 truncate">
                  <span className="md:inline">
                    <HeartSolidIcon
                      className="inline h-5 w-5 text-red-500"
                      aria-hidden="true"
                    />
                    {' An example blog powered by '}
                    <a
                      className="underline decoration-2 underline-offset-2 hover:text-neutral-50 hover:decoration-red-500"
                      href="https://redwoodjs.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      RedwoodJS
                    </a>
                    {' + '}
                    <a
                      className="underline decoration-2 underline-offset-2 hover:text-neutral-50 hover:decoration-cyan-500"
                      href="https://tailwindcss.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      TailwindCSS
                    </a>{' '}
                  </span>
                </p>
              </div>
              <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
                <button
                  type="button"
                  className="-mr-1 flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-neutral-50 sm:-mr-2"
                  onClick={() => {
                    setShow(false)
                  }}
                >
                  <span className="sr-only">Dismiss</span>
                  <XIcon
                    className="h-6 w-6 text-neutral-50 hover:rotate-90"
                    aria-hidden="true"
                  />
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
