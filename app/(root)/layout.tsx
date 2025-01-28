import { ChildProps } from '@/index'
import React from 'react'
import Navbar from './_components/navbar'

const Layout = ({ children }: ChildProps) => {
  return (
    <div>
      <Navbar />
      <main>
        {children}
      </main>
    </div>
  )
}

export default Layout