import { Client } from '@notionhq/client'
import { TitlePropertyValue } from '@notionhq/client/build/src/api-types'

const notionClient = new Client({ auth: process.env.NOTION_TOKEN })

const SUPERPOWERS_DB_ID = '9d12e32b8e2e4c87b5ed233abdce996e'

type Superpower = string

const mapSuperpower = (propertyValue: TitlePropertyValue): string =>
  propertyValue.title[0].plain_text

export const fetchSuperpowers = async (): Promise<Superpower[]> => {
  const { results } = await notionClient.databases.query({
    database_id: SUPERPOWERS_DB_ID,
    sorts: [{ property: 'Order', direction: 'ascending' }],
  })

  return results.map((result) =>
    mapSuperpower(result.properties.Name as TitlePropertyValue)
  )
}
