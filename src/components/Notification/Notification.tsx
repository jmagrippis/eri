/* This example requires Tailwind CSS v2.0+ */
import { Fragment, MouseEventHandler, ReactNode } from 'react'
import { Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/solid'

export type NotificationProps = {
  show: boolean
  onDismiss: MouseEventHandler<HTMLButtonElement>
  message: ReactNode
  icon: ReactNode
}

export const Notification = ({
  show,
  onDismiss,
  message,
  icon,
}: NotificationProps) => (
  <section
    aria-live="assertive"
    className="fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start"
    role="alert"
    aria-labelledby="notification-body"
  >
    <div className="w-full flex flex-col items-center space-y-4 sm:items-end">
      <Transition
        show={show}
        as={Fragment}
        enter="transform ease-out duration-300 transition"
        enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
        enterTo="translate-y-0 opacity-100 sm:translate-x-0"
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-gray-900 ring-opacity-5 overflow-hidden">
          <div className="p-4">
            <div className="flex items-center">
              <div className="flex-shrink-0">{icon}</div>
              <p
                className="ml-3 w-0 flex-1 text-sm text-gray-900"
                id="notification-body"
              >
                {message}
              </p>
              <div className="ml-4 flex-shrink-0 flex">
                <button
                  className="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                  onClick={onDismiss}
                >
                  <span className="sr-only">Dismiss</span>
                  <XIcon className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </section>
)
