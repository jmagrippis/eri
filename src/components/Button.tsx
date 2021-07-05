import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  variant: 'primary' | 'outline'
  href: string
  target?: string
  rel?: string
}
export const Button = ({ children, variant, href, target, rel }: Props) => (
  <a href={href} target={target} rel={rel} className={`button-${variant}`}>
    {children}
  </a>
)
