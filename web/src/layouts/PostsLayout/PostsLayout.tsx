import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { regular, solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'
import React, { useState } from 'react'

type PostLayoutProps = {
  children: React.ReactNode
}

const AdminBanner = () => {
  const [hovered, setHovered] = useState(false)

  const stage = process.env.NODE_ENV || 'development'

  const classes = {
    development: {
      text: 'text-neutral-900',
      focus: 'bg-amber-600',
      blur: 'bg-amber-500',
    },
    test: {
      text: 'text-white',
      focus: 'bg-cyan-600',
      blur: 'bg-cyan-500',
    },
    production: {
      text: 'text-white',
      focus: 'bg-purple-800',
      blur: 'bg-purple-700',
    },
  }

  // TODO: add tooltips
  return (
    <div className={hovered ? classes[stage].focus : classes[stage].blur}>
      <div className="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex w-0 flex-1 items-center justify-center">
            <div
              className={`ml-3 truncate font-semibold ${classes[stage].text}`}
              onMouseOver={() => setHovered(true)}
              onFocus={() => {}}
              onMouseOut={() => setHovered(false)}
              onBlur={() => {}}
            >
              <span className="text-sm md:inline">Administration Mode</span>
              <FontAwesomeIcon
                icon={
                  hovered
                    ? solid('exclamation-circle')
                    : regular('exclamation-circle')
                }
                className="ml-1 h-3.5 w-3.5"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const PostsLayout = ({ children }: PostLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <AdminBanner />

      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.posts()} className="rw-link">
            Posts
          </Link>
        </h1>
        <Link to={routes.newPost()} className="rw-button rw-button-green">
          <div className="rw-button-icon">+</div>
          New Post
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default PostsLayout
