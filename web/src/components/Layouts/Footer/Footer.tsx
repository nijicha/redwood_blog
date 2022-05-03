import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import { Link, routes } from '@redwoodjs/router'

const Footer = () => {
  return (
    <div className="bg-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Pages
      </h2>
      <div className="mx-auto max-w-7xl border-t border-gray-200 py-6 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <div className="flex font-medium text-neutral-400">
            <p>Created by</p>
            <a
              href="https://github.com/nijicha"
              target="_blank"
              className="flex items-center justify-center"
              rel="noreferrer"
            >
              <p className="ml-2 text-neutral-900 hover:underline hover:decoration-2 hover:underline-offset-2">
                @nijicha
              </p>
              <FontAwesomeIcon
                icon={brands('github')}
                className="ml-2 h-6 w-6 text-neutral-900"
              />
            </a>
          </div>
        </div>
        <div className="mt-8 space-x-6 md:order-1 md:mt-0">
          <Link
            to={routes.home()}
            className="text-base text-gray-500 hover:text-gray-900"
          >
            Home
          </Link>
          <Link
            to={routes.about()}
            className="text-base text-gray-500 hover:text-gray-900"
          >
            About
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
