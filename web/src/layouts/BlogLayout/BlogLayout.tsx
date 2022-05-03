import React from 'react'

import HeaderBanner from 'src/components/Layouts/HeaderBanner'
import NavBar from 'src/components/Layouts/NavBar'
import Footer from 'src/components/Layouts/Footer'

type BlogLayoutProps = {
  children?: React.ReactNode
}

const BlogLayout = ({ children }: BlogLayoutProps) => {
  return (
    <div className="flex min-h-full flex-col justify-between">
      <header>
        <HeaderBanner />
        <NavBar />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default BlogLayout
