import '../styles/globals.css'

import type { AppProps } from 'next/app'
import LayOut from '../layouts'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <LayOut>
        <Component {...pageProps} />
      </LayOut>
    </>
  )
}

export default App
