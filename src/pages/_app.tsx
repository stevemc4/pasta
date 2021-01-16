import React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'

const App = ({ Component, pageProps }: AppProps): React.ReactElement => {
  return (
    <ChakraProvider>
      <Head>
        <title>pasta - Copypasta Untuk Semua</title>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App
