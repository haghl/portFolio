import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../../public/favicon/android-chrome-512x512.png'

const Header = () => {
  const headerRef = useRef(null)
  const [bgColor, setBgColor] = useState<boolean>(false)

  const obsHandler: IntersectionObserverCallback = (entries) => {
    const target = entries[0]
    console.log('이건가', target.isIntersecting)

    if (target.isIntersecting) setBgColor(false)
    else setBgColor(true)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(obsHandler, { threshold: 0.5 })
    if (headerRef.current) observer.observe(headerRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* ----------------- 옵저버 ----------------- */}
      <div ref={headerRef} className="absolute top-0 left-0 w-0 h-0 bg-black" />
      {/* ----------------- 옵저버 ----------------- */}

      <header className={`w-full fixed ${bgColor ? 'bg-primary bg-opacity-50' : ''} z-10`}>
        <div className="max-w-screen-lg h-header mx-auto dfc justify-between sm:max-w-full sm:px-md">
          <Link href="/" className="fweb dfc text-head_sm">
            <Image src={Logo} width={40} height={40} alt="로고" />
            어쩔Log
          </Link>
        </div>
      </header>
    </>
  )
}

export default Header
