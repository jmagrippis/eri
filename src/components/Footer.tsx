import Instagram from 'components/svgs/instagram.svg'
import LinkedIn from 'components/svgs/linkedin.svg'

export const Footer = () => (
  <footer className="bg-white">
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
      <div className="flex justify-center space-x-6 md:order-2">
        <a
          href="https://www.instagram.com/erifullmoon"
          className="text-gray-400 hover:text-gray-500 transition-colors"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
        >
          <Instagram />
        </a>
        <a
          href="https://gr.linkedin.com/in/eri-panselina"
          className="text-gray-400 hover:text-gray-500 transition-colors"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <LinkedIn />
        </a>
      </div>
      <div className="mt-8 md:mt-0 md:order-1 md:mr-6">
        <p className="text-center text-base text-gray-400">
          &copy; {new Date().getFullYear()} Eri Panselina &{' '}
          <a className="text-secondary-400" href="https://magrippis.com">
            jmagrippis
          </a>
        </p>
      </div>
    </div>
  </footer>
)
