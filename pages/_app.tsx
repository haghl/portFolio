import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import { theme } from '../src/styles/theme'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>원동규</title>
        <meta name="description" content="원동규" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
export default App
