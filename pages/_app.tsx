import type { NextPage } from 'next'
import '../styles/globals.css'
import Head from 'next/head'
import Header from '../components/Header'

type props = {
  Component: NextPage,
  pageProps: any,
}

function MyApp({ Component, pageProps }: props) {
  return (
    <div className="root-cont bg-bgBlue min-h-screen text-textWhite">
      <Head>
        <title>Ct Arcade</title>
        <meta name="description" content="The social platform for your next ct.js game!" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <Header />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
