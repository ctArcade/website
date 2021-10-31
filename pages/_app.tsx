import type { AppProps } from 'next/app'
import '../styles/globals.css'
import Head from 'next/head'
import Header from '../components/Header'

function MyApp({ Component, pageProps }: AppProps) {
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
