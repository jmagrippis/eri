/* This example requires Tailwind CSS v2.0+ */
import { Fragment, FunctionComponent, SVGProps } from 'react'
import Link from 'next/link'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

import Logo from 'components/svgs/logo.svg'
import Instagram from 'components/svgs/instagram.svg'
import LinkedIn from 'components/svgs/linkedin.svg'

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

export const Header = () => (
  <header className="w-full relative bg-gray-50">
    <Popover className="relative bg-white shadow md:shadow-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
          <nav className="flex items-center lg:w-0 lg:flex-1">
            <Link href="/">
              <a aria-label="Eri Panselina">
                <Logo className="text-4xl" />
              </a>
            </Link>
            <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
              {navigation.map(({ name, Icon, href }) => (
                <a
                  key={name}
                  href={href}
                  className="text-gray-500 hover:text-gray-900 transition-colors"
                  target="_blank"
                  rel="noreferrer"
                  aria-label={name}
                >
                  <Icon className="inline-block" />
                </a>
              ))}
            </div>
          </nav>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute top-0 inset-x-0 z-10 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <Logo className="text-4xl" />

                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <nav className="grid grid-cols-1 gap-2 text-2xl text-center">
                {navigation.map(({ name, Icon, href }) => (
                  <a
                    key={name}
                    href={href}
                    className="text-gray-500 hover:text-gray-900 transition-colors"
                    target="_blank"
                    rel="noreferrer"
                    aria-label={name}
                  >
                    <Icon className="inline-block" />
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  </header>
)
