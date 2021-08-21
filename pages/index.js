import Head from 'next/head'
import PLink from '../components/PLink'

export default function Home() {
   return (
      <div className="w-full h-screen grid place-content-center">
         <Head>
            <title>Flexbox</title>
            <meta name="description" content="A page demonstrating flexbox tailwindcss." />
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <PLink href="/flexbox" text="Flexbox!" />
      </div >
   )
}