import type { NextPage } from 'next'
import Head from 'next/head'
import Banner from '../components/Banner/Banner'
import Header from '../components/Header/Header'

const Home: NextPage = () => {
  return (
    <div className=''>
      <Head>
        <title>BitSenpai</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/static/images/logo.svg" />
      </Head>
      <Banner />
    </div>
  )
}

export default Home
