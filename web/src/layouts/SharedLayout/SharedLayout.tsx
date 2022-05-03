import React from 'react'
import EnvironmentBadge from 'src/components/Development/EnvironmentBadge'

type SharedLayoutProps = {
  children: React.ReactNode
}

const SharedLayout = ({ children }: SharedLayoutProps) => {
  return (
    <>
      <EnvironmentBadge />
      {children}
    </>
  )
}

export default SharedLayout
