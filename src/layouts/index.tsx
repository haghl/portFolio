import React, { ReactNode } from 'react'
import Header from './Header'

const LayOut = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="relative max-w-screen-lg mx-auto  px-lg md:px-xlg pt-header">
        <Header />
        {children}
      </div>
    </>
  )
}

export default LayOut
