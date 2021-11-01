import { Client } from '@notionhq/client'

import { TitlePropertyValue } from './fetchSuperpowers'
import { Superpower, SuperpowersRepo } from './SuperpowersRepo'

const fallbackSuperpowers = [
  'Telling stories',
  'Writing awesome bios',
  'Social storytelling',
  'Media coaching',
  'Link building',
  'Super shuffling',
  'Lindy Hop dancing',
]

const mapSuperpower = (propertyValue: TitlePropertyValue): Superpower =>
  propertyValue.title[0].plain_text

export class NotionRepo implements SuperpowersRepo {
  #client = new Client({ auth: process.env.NOTION_TOKEN })
  #SUPERPOWERS_DB_ID = '9d12e32b8e2e4c87b5ed233abdce996e'

  fetchSuperpowers = async () => {
    try {
      const { results } = await this.#client.databases.query({
        database_id: this.#SUPERPOWERS_DB_ID,
        sorts: [{ property: 'Order', direction: 'ascending' }],
      })

      return results.map((result) =>
        mapSuperpower(result.properties.Name as TitlePropertyValue)
      )
    } catch {
      return fallbackSuperpowers
    }
  }
}

export const superpowersRepo = new NotionRepo()
