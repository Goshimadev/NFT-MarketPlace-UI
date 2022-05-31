import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header/Index'
import Hero from '../components/Hero/Index'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Hero />
    </>
  )
}

export default Home
