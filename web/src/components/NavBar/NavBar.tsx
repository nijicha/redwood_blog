import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { duotone } from '@fortawesome/fontawesome-svg-core/import.macro'
import {
  MenuIcon as MenuOutlineIcon,
  XIcon as XOutlineIcon,
} from '@heroicons/react/outline'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Link, routes } from '@redwoodjs/router'
import React, { CSSProperties, Fragment } from 'react'
import colors from 'tailwindcss/colors'

import { classNames } from 'src/components/helpers/helper'

const NavBar = () => {
  return (
    <nav>
      <Disclosure as="nav" className="bg-neutral-50">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                  <Link to={routes.home()} className="flex-shrink-0">
                    <span className="flex p-2 rounded-lg bg-rose-500">
                      <FontAwesomeIcon
                        icon={duotone('book')}
                        className="w-6 h-6"
                        style={
                          {
                            '--fa-primary-color': colors.neutral[50],
                            '--fa-secondary-color': colors.rose[800],
                            '--fa-primary-opacity': 1.0,
                            '--fa-secondary-opacity': 0.8,
                          } as CSSProperties
                        }
                        aria-hidden="true"
                      />
                    </span>
                  </Link>
                  <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-8">
                      <Link
                        to={routes.about()}
                        className="bg-neutral-900 text-neutral-50 px-3 py-2 rounded-md text-sm font-medium"
                      >
                        About
                      </Link>
                      <Link
                        to={routes.home()}
                        className="text-neutral-300 hover:bg-neutral-700 hover:text-neutral-50 px-3 py-2 rounded-md text-sm font-medium"
                      >
                        Team
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex items-center">
                    {/* Profile dropdown */}
                    <Menu as="div" className="ml-3 relative">
                      <div>
                        <Menu.Button className="bg-neutral-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-800 focus:ring-neutral-50">
                          <span className="sr-only">Open user menu</span>
                          <img
                            className="h-8 w-8 rounded-full"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-neutral-50 ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to={routes.home()}
                                className={classNames(
                                  active ? 'bg-neutral-100' : '',
                                  'block px-4 py-2 text-sm text-neutral-700'
                                )}
                              >
                                Your Profile
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to={routes.home()}
                                className={classNames(
                                  active ? 'bg-neutral-100' : '',
                                  'block px-4 py-2 text-sm text-neutral-700'
                                )}
                              >
                                Settings
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to={routes.home()}
                                className={classNames(
                                  active ? 'bg-neutral-100' : '',
                                  'block px-4 py-2 text-sm text-neutral-700'
                                )}
                              >
                                Sign out
                              </Link>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </div>
                <div className="-mr-2 flex sm:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-neutral-400 hover:text-neutral-50 hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-neutral-50">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XOutlineIcon
                        className="block h-6 w-6"
                        aria-hidden="true"
                      />
                    ) : (
                      <MenuOutlineIcon
                        className="block h-6 w-6"
                        aria-hidden="true"
                      />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="bg-neutral-900 text-neutral-50 block px-3 py-2 rounded-md text-base font-medium"
                >
                  About
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="text-neutral-300 hover:bg-neutral-700 hover:text-neutral-50 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Team
                </Disclosure.Button>
              </div>
              <div className="pt-4 pb-3 border-t border-neutral-700">
                <div className="flex items-center px-5">
                  <div className="flex-shrink-0">
                    <img
                      className="h-10 w-10 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium text-neutral-50">
                      Tom Cook
                    </div>
                    <div className="text-sm font-medium text-neutral-400">
                      tom@example.com
                    </div>
                  </div>
                </div>
                <div className="mt-3 px-2 space-y-1">
                  <Disclosure.Button
                    as="a"
                    href="#"
                    className="block px-3 py-2 rounded-md text-base font-medium text-neutral-400 hover:text-neutral-50 hover:bg-neutral-700"
                  >
                    Your Profile
                  </Disclosure.Button>
                  <Disclosure.Button
                    as="a"
                    href="#"
                    className="block px-3 py-2 rounded-md text-base font-medium text-neutral-400 hover:text-neutral-50 hover:bg-neutral-700"
                  >
                    Settings
                  </Disclosure.Button>
                  <Disclosure.Button
                    as="a"
                    href="#"
                    className="block px-3 py-2 rounded-md text-base font-medium text-neutral-400 hover:text-neutral-50 hover:bg-neutral-700"
                  >
                    Sign out
                  </Disclosure.Button>
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </nav>
  )
}

export default NavBar
