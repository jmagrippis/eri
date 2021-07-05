import Head from 'next/head'
import { Footer } from './Footer'
import { Hero } from './Hero'

export function Home() {
  return (
    <div className="flex flex-col justify-between items-center h-screen">
      <Head>
        <title>An app with Next!</title>
        <meta
          name="description"
          content="A companion app to YouTube tutorials for making Next.js apps!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full">
        <Hero />
        <h2 className="text-center py-12 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl md:text-5xl">
          <span>My superpower?</span>{' '}
          <span className="text-primary-400">Telling stories</span>
        </h2>
      </main>

      <Footer />
    </div>
  )
}
