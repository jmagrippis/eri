import { MouseEventHandler, ReactNode } from 'react'

export type NotificationProps = {
  show: boolean
  onDismiss: MouseEventHandler<HTMLButtonElement>
  message: ReactNode
  icon: ReactNode
}

export const Notification = () => null
