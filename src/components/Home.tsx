import Head from 'next/head'
import { Footer } from './Footer'
import { Hero } from './Hero'
import { Superpowers } from './Superpowers'

export type HomeProps = {
  superpowers: string[]
}

export const Home = ({ superpowers }: HomeProps) => (
  <div className="flex flex-col justify-between items-center h-screen">
    <Head>
      <title>Eri Panselina | Journalist - PR expert - Link builder</title>
      <meta
        name="description"
        content="Eri is a career journalist who is now using her superpowers to help people communicate their mission and
        understand the world around them."
      />
      {/* favicon & other app icons */}
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#22d3ee" />
      <meta name="msapplication-TileColor" content="#22d3ee" />
      <meta name="theme-color" content="#22d3ee" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap"
        rel="stylesheet"
      ></link>
    </Head>

    <main className="w-full">
      <Hero />
      <Superpowers superpowers={superpowers} />
    </main>

    <Footer />
  </div>
)
