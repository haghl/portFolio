import '@/styles/notionStyle.scss'
import '@/styles/notion.default.css'
import '@/styles/globals.css'

import { RecoilRoot } from 'recoil'
import type { AppProps } from 'next/app'

import LayOut from '../layouts'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <RecoilRoot>
        <LayOut>
          <Component {...pageProps} />
        </LayOut>
      </RecoilRoot>
    </>
  )
}

export default App
