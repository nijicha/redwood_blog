import { Link, routes } from '@redwoodjs/router'
import React from 'react'

type BlogLayoutProps = {
  children?: React.ReactNode
}

const BlogLayout = ({ children }: BlogLayoutProps) => {
  return (
    <>
      <header>
        <h1 className="text-2xl font-bold">
          <Link to={routes.home()}>Example Blog</Link>
        </h1>
        <nav>
          <ul className="flex flex-row space-x-4">
            <li>
              <Link to={routes.home()} className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to={routes.about()} className="hover:underline">
                About
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default BlogLayout
