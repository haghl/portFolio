import type { NextPage } from 'next'
import Link from 'next/link'

import Heads from '../components/common/Head'

const Home: NextPage = () => {
  return (
    <>
      <Heads />
      <div>
        <Link href="/blog">이동</Link>
      </div>
    </>
  )
}

export default Home
