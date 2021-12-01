import type { NextApiRequest, NextApiResponse } from 'next'

import emailProvider from 'providers/email/LoggerProvider'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res.status(405).end('this only handles post requests')
  }

  await emailProvider.send(req.body)

  res.status(200).end('Eri got your message, thanks!')
}

export default handler
