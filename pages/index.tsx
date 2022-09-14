import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Facebook Web3</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      Hello, we are running!
    </div>
  )
}

export default Home
