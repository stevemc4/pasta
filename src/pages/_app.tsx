import React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'

const App = ({ Component, pageProps }: AppProps): React.ReactElement => {
  return (
    <ChakraProvider>
      <Head>
        <title>pasta - Copypasta Untuk Semua</title>
        <meta name="description" content="pasta adalah sebuah aplikasi web untuk membuat copypasta." />
        <link rel="manifest" href="manifest.json" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="pasta" />
        <meta name="apple-mobile-web-app-title" content="pasta" />
        <link rel="apple-touch-icon" href="/android/android-launchericon-192-192.png" />
        <meta name="theme-color" content="#0BC5EA" />
        <meta name="msapplication-navbutton-color" content="#0BC5EA" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="msapplication-starturl" content="/" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App
