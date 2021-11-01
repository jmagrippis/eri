import { Client } from '@notionhq/client'

const notionClient = new Client({ auth: process.env.NOTION_TOKEN })

const SUPERPOWERS_DB_ID = '9d12e32b8e2e4c87b5ed233abdce996e'

type Superpower = string

export interface TitlePropertyValue {
  type: 'title'
  title: { plain_text: string }[]
}

const isTitlePropertyValue = (value: {
  type: string
}): value is TitlePropertyValue =>
  (value as TitlePropertyValue).type === 'title'

const mapSuperpower = (propertyValue: TitlePropertyValue): string =>
  propertyValue.title[0].plain_text

export const fetchSuperpowers = async (): Promise<Superpower[]> => {
  const { results } = await notionClient.databases.query({
    database_id: SUPERPOWERS_DB_ID,
    sorts: [{ property: 'Order', direction: 'ascending' }],
  })

  return results.reduce<Superpower[]>((acc, result) => {
    if (isTitlePropertyValue(result.properties.Name)) {
      acc.push(mapSuperpower(result.properties.Name))
    }
    return acc
  }, [])
}
