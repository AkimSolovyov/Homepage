import type { AppProps } from 'next/app'
import Head from 'next/head'
import { GlobalStyle } from '../styles/GlobalStyle'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../layouts/main'
import Fonts from '../lib/fonts'
import theme from '../lib/theme'
import { AnimatePresence } from 'framer-motion'

const App = ({ Component, pageProps, router }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <GlobalStyle />
      <Layout router={router}>
        <AnimatePresence exitBeforeEnter initial={true}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  )
}
export default App
