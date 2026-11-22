import { expect, test } from '@playwright/test'

const superpowers = [
  'Telling stories',
  'Writing awesome bios',
  'Social storytelling',
  'Media coaching',
  'Link building',
  'Super Shuffling',
  'Lindy Hop dancing',
  'Super SUP',
]

test('the home page is rendered with all the superpowers, in order', async ({
  request,
}) => {
  const response = await request.get('/')
  expect(response.ok()).toBe(true)

  const html = await response.text()
  const nextData = html.match(
    /<script id="__NEXT_DATA__" type="application\/json">(.+?)<\/script>/
  )?.[1]
  expect(nextData).toBeDefined()

  expect(JSON.parse(nextData!).props.pageProps.superpowers).toEqual(superpowers)
})
