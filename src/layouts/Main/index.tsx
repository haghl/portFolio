import { ReactNode, useEffect, useCallback } from 'react'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { pages } from '@/router'

import { MainAnimation, xWidth } from './framer'
import Banner from '@/components/views/Banner'

const Main = ({ children }: { children: ReactNode }) => {
  const { events } = useRouter()

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
    <motion.main {...MainAnimation} className="pt-header pb-[100px]">
      <div>{children}</div>
    </motion.main>
  )
}

export default Main
