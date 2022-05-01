import React from 'react'
import HeaderBanner from 'src/components/HeaderBanner/HeaderBanner'
import NavBar from 'src/components/NavBar/NavBar'

type BlogLayoutProps = {
  children?: React.ReactNode
}

const BlogLayout = ({ children }: BlogLayoutProps) => {
  return (
    <>
      <HeaderBanner />
      <header>
        <NavBar />
      </header>
      <main>{children}</main>
    </>
  )
}

export default BlogLayout
