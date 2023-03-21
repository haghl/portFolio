import { ReactNode, useEffect, useCallback } from 'react'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { pages } from '@/router'

import { MainAnimation, xWidth } from './framer'

const Main = ({ children }: { children: ReactNode }) => {
  const { events, route } = useRouter()

  const handleStart = useCallback((nextPath: string) => {
    const currentPath = window.location.pathname
    const nowIdx = pages.findIndex((page) => page.path === currentPath)
    const nextIdx = pages.findIndex((page) => page.path === nextPath)
    MainAnimation.initial.x = nowIdx > nextIdx ? -xWidth : xWidth
  }, [])

  useEffect(() => {
    events.on('routeChangeStart', handleStart)
    return () => events.off('routeChangeStart', handleStart)
  }, [])

  return (
    <motion.main {...MainAnimation} key={route} className="h-main pt-header">
      <div className="h-[300px] bg-primary">배너</div>
      <div className="max-w-screen-lg mt-[50px] mx-auto">{children}</div>
    </motion.main>
  )
}

export default Main
