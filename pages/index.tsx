import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header/Index'
import Hero from '../components/Hero/Index'
import Bid from '../components/Bid/Index'
import Creators from '../components/Creators/Index'
import Crypto from '../components/Crypto/Index'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Bid />
      <Creators />
      <Crypto />
    </>
  )
}

export default Home
