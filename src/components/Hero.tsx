import { Fragment, FunctionComponent, SVGProps } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

import Logo from 'components/svgs/logo.svg'
import Instagram from 'components/svgs/instagram.svg'
import LinkedIn from 'components/svgs/linkedin.svg'
import { Button } from './Button'

const navigation: {
  name: string
  Icon: FunctionComponent<SVGProps<SVGSVGElement>>
  href: string
}[] = [
  {
    name: 'Instagram',
    Icon: Instagram,
    href: 'https://www.instagram.com/erifullmoon',
  },
  {
    name: 'LinkedIn',
    Icon: LinkedIn,
    href: 'https://gr.linkedin.com/in/eri-panselina',
  },
]

export const Hero = () => (
  <section className="relative bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto">
      <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
        <svg
          className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
          fill="currentColor"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg>

        <Popover>
          {({ open }) => (
            <>
              <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
                <nav
                  className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                  aria-label="Global"
                >
                  <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                    <div className="flex items-center justify-between w-full md:w-auto">
                      <Link href="/">
                        <a aria-label="Eri Panselina">
                          <Logo className="text-4xl" />
                        </a>
                      </Link>
                      <div className="-mr-2 flex items-center md:hidden">
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500">
                          <span className="sr-only">Open main menu</span>
                          <MenuIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                    {navigation.map(({ name, Icon, href }) => (
                      <a
                        key={name}
                        href={href}
                        className="font-semibold text-gray-500 hover:text-gray-900 transition-colors"
                        target="_blank"
                        rel="noreferrer"
                        aria-label={name}
                      >
                        <Icon className="inline-block" />
                      </a>
                    ))}
                  </div>
                </nav>
              </div>

              <Transition
                show={open}
                as={Fragment}
                enter="duration-150 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Popover.Panel
                  focus
                  static
                  className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                >
                  <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="px-5 pt-4 flex items-center justify-between">
                      <Logo className="text-4xl" />
                      <div className="-mr-2">
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500">
                          <span className="sr-only">Close main menu</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                    <div className="px-2 pt-2 pb-3 space-y-1 flex flex-col items-center">
                      {navigation.map(({ name, Icon, href }) => (
                        <a
                          key={name}
                          href={href}
                          className="px-3 py-2 text-2xl text-gray-700 hover:text-gray-900 transition-colors hover:bg-gray-50"
                          aria-label={name}
                        >
                          <Icon />
                        </a>
                      ))}
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>

        <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
          <div className="sm:text-center lg:text-left">
            <h1 className="text-4xl tracking-tight text-gray-900 transition-colors sm:text-5xl md:text-6xl">
              <span className="block xl:inline">Hello, I’m</span>{' '}
              <span className="block text-primary-400 xl:inline">
                Eri Panselina
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              For 13 years, my reporting took readers on journeys around the
              world. Today, I’m using my superpowers outside of news media!
            </p>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              I’m working in a tech company, building its comms from the ground
              up, while hustling to help people communicate their mission and
              understand the world around them.
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
      </div>
    </div>
    <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 h-56 lg:h-full">
      <Image
        src="/hero.jpg"
        alt="Hard at work"
        layout="fill"
        objectFit="cover"
      />
    </div>
  </section>
)
