import { ReactNode } from 'react'

import { Header } from 'components/Header'
import { Footer } from 'components/Footer'

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="flex flex-col justify-between items-center h-screen">
    <Header />

    <main className="w-full">{children}</main>

    <Footer />
  </div>
)

export default Layout
