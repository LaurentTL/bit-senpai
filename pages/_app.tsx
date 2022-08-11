import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <div className='min-h-screen max-w-7xl mx-auto flex flex-col'>
      <Head>
        <title>BitSenpai</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/static/images/logo.svg" />
      </Head>
      <Header />
      <div className='flex-1'>
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  )
}

export default MyApp
