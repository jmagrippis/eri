import { Hero } from './Hero'
import { Superpowers } from './Superpowers'

export type HomeProps = {
  superpowers: string[]
}

export const Home = ({ superpowers }: HomeProps) => (
  <>
    <Hero />
    <Superpowers superpowers={superpowers} />
  </>
)
