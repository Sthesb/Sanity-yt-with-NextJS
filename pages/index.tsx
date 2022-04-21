import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>Meduim Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div className='flex justify-between items-center bg-yellow-400 border-y border-black py-20 '>
        <div className='px-10 space-y-5'>
          <h1 className='text-6xl max-w-xl font-serif'><span className='underline decoration-black decoration-4'>Meduim</span> is a place to write, read and connect</h1>
          <h2>It's easy and free to post your thinking on any topic and connect with mlllions of readers</h2>
        </div>
        <img src="https://cdn.worldvectorlogo.com/logos/medium-1.svg" className='hidden md:inline-flex md:h-32 lg:h-52 px-10' />
        
      </div>
    </div>
  )
}

export default Home
