import Head from 'next/head'
import Image from 'next/image'
import { Button } from './Button'

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

      <h1 className="text-primary-900 text-5xl mb-6">An app with Next.js!</h1>

      <main>
        <Button>DM me now!</Button>
      </main>

      <footer className="bg-primary-50 w-full text-center">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
