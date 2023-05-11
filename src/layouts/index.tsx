import React, { ReactNode } from 'react'
import Header from './Header'
import Main from './Main'

const LayOut = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="relative mx-auto ">
        <Header />
        <Main>{children}</Main>
      </div>
    </>
  )
}

export default LayOut
