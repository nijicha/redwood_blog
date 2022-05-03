import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands, duotone } from '@fortawesome/fontawesome-svg-core/import.macro'
import { Link, routes } from '@redwoodjs/router'
import React, { CSSProperties } from 'react'
import colors from 'tailwindcss/colors'

const NavBar = () => {
  return (
    <nav>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to={routes.home()} className="flex-shrink-0">
              <span className="flex rounded-lg p-2">
                <FontAwesomeIcon
                  icon={duotone('book')}
                  className="h-8 w-8"
                  style={
                    {
                      '--fa-primary-color': colors.amber[500],
                      '--fa-secondary-color': colors.amber[400],
                      '--fa-primary-opacity': 1.0,
                      '--fa-secondary-opacity': 0.8,
                    } as CSSProperties
                  }
                  aria-hidden="true"
                />
                <p className="ml-2 flex items-center text-xl font-medium uppercase">
                  blog
                </p>
              </span>
            </Link>
          </div>
          <div className="sm:ml-6 sm:block">
            <div className="flex font-medium text-neutral-400">
              <a
                href="https://github.com/nijicha/redwood_blog.git"
                target="_blank"
                className="flex items-center justify-center"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={brands('github')}
                  className="h-6 w-6 text-neutral-900"
                />
                <p className="ml-2 text-neutral-900 hover:underline hover:decoration-2 hover:underline-offset-2">
                  nijicha/redwood_blog
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
