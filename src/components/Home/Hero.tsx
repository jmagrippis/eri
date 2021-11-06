import Image from 'next/image'

import { Button } from 'components/Button'

export const Hero = () => (
  <section className="relative bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto py-8 px-6 xl:pl-0">
      <div className="sm:text-center lg:text-left">
        <h1 className="text-4xl tracking-tight text-gray-900 transition-colors sm:text-5xl md:text-6xl">
          <span className="block xl:inline">Hello, I’m</span>{' '}
          <span className="block text-primary-400 xl:inline">
            Eri Panselina
          </span>
        </h1>
        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          For 13 years, my reporting took readers on journeys around the world.
          Today, I’m using my superpowers outside of news media!
        </p>
        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          I’m working in a tech company, building its comms from the ground up,
          while hustling to help people communicate their mission and understand
          the world around them.
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div>
            <Button
              variant="primary"
              href="https://www.instagram.com/erifullmoon"
              target="_blank"
              rel="noreferrer"
            >
              Follow me on Instagram!
            </Button>
          </div>
          <div className="mt-3 sm:mt-0 sm:ml-3">
            <Button variant="outline" href="mailto:erifullmoon@gmail.com">
              Work together?
            </Button>
          </div>
        </div>
      </div>
    </div>
    <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-2/5 xl:w-1/2 lg:h-full">
      <Image
        src="/hero.jpg"
        alt="Hard at work"
        layout="fill"
        objectFit="cover"
      />
    </div>
  </section>
)
