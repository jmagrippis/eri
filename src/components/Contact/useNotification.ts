import { useEffect, useState } from 'react'

import type { NotificationProps } from 'components/Notification/Notification'

export const useNotification = () => {
  const [notification, setNotification] = useState<Pick<
    NotificationProps,
    'message' | 'icon'
  > | null>(null)

  useEffect(() => {
    if (notification) {
      const timeout = setTimeout(() => {
        setNotification(null)
      }, 10_000)

      return () => clearTimeout(timeout)
    }
  }, [notification])

  return { notification, setNotification }
}
