import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}
export const Button = ({ children }: Props) => (
  <button className="button">{children}</button>
)
