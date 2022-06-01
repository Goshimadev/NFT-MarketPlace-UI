import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header/Index'
import Hero from '../components/Hero/Index'
import Bid from '../components/Bid/Index'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Bid />
    </>
  )
}

export default Home
