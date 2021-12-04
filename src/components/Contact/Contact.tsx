import { Form } from './Form'

export const Contact = () => (
  <>
    <div className="relative bg-white">
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50" />
      </div>
      <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
        <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
          <div className="max-w-lg mx-auto">
            <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
              Get in touch!
            </h2>
            <p className="mt-3 text-lg leading-6 text-gray-500">
              Wanna learn how to take your brand to the next level? Drop me a
              line using the contact form <span className="lg:hidden">👇</span>
              <span className="hidden lg:inline">👉</span>
            </p>
          </div>
        </div>
        <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
          <div className="max-w-lg mx-auto lg:max-w-none">
            <Form />
          </div>
        </div>
      </div>
    </div>
  </>
)

Contact.title = 'Work with me! | Eri Panselina'
Contact.description = 'Contact me for work or just to say hi!'
