import { GetStaticProps } from 'next'

import type { HomeProps } from 'components/Home/Home'
import { superpowersRepo } from 'repos/superpowers/NotionRepo'

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const superpowers = await superpowersRepo.fetchSuperpowers()

  return { props: { superpowers }, revalidate: 120 }
}

export { Home as default } from 'components/Home/Home'
