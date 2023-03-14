import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className="w-full fixed">
      <div className="max-w-screen-lg h-header mx-auto dfc justify-between">
        <Link href="/" className="font-bold text-head_lg">
          Logo
        </Link>
      </div>
    </header>
  )
}

export default Header
