import { GetStaticProps } from 'next'

import type { HomeProps } from 'components/Home/Home'
import superpowers from 'content/superpowers.json'

export const getStaticProps: GetStaticProps<HomeProps> = async () => ({
  props: { superpowers },
})

export { Home as default } from 'components/Home/Home'
