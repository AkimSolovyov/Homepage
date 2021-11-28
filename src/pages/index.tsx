import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Akim Soloviov</title>
        <meta name="description" content="Made with love and lots of coffee" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Hello there! My name is Akim Soloviov, I'm frontend developer based in Kyiv, Ukraine.</h1>
      </main>
    </div>
  )
}

export default Home
