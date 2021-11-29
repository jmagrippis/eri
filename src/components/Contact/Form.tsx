import { FormEventHandler, useRef } from 'react'
import axios from 'axios'
import { CheckCircleIcon } from '@heroicons/react/outline'
import { ExclamationCircleIcon } from '@heroicons/react/solid'

import {
  Notification,
  NotificationProps,
} from 'components/Notification/Notification'
import { useNotification } from './useNotification'

const NOTIFICATION: {
  [key: string]: Pick<NotificationProps, 'message' | 'icon'>
} = {
  SUCCESS: {
    message: 'Eri got your message, thanks!',
    icon: (
      <CheckCircleIcon
        className="h-6 w-6 text-secondary-400"
        aria-hidden="true"
      />
    ),
  },
  ERROR: {
    message: 'Something went wrong... Try again?',
    icon: (
      <ExclamationCircleIcon
        className="h-6 w-6 text-alert-600"
        aria-hidden="true"
      />
    ),
  },
}

export const Form = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const { notification, setNotification } = useNotification()

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault()
    const form = formRef.current
    if (!form) return

    try {
      await axios.post('/api/contact', Object.fromEntries(new FormData(form)))
      setNotification(NOTIFICATION.SUCCESS)
      form.reset()
    } catch {
      setNotification(NOTIFICATION.ERROR)
    }
  }

  return (
    <>
      <form
        ref={formRef}
        className="grid grid-cols-1 gap-y-6"
        onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor="name" className="sr-only">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            autoComplete="name"
            className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-primary-500 focus:border-primary-500 border-gray-300 rounded-md"
            placeholder="Your name"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="email"
            className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-primary-500 focus:border-primary-500 border-gray-300 rounded-md"
            placeholder="Your email"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="sr-only">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-primary-500 focus:border-primary-500 border border-gray-300 rounded-md"
            placeholder="Message"
            defaultValue=""
            required
          />
        </div>

        <button type="submit" className="button-primary">
          Submit
        </button>
      </form>
      <Notification
        show={!!notification}
        onDismiss={() => {
          setNotification(null)
        }}
        message={notification?.message}
        icon={notification?.icon}
      />
    </>
  )
}
