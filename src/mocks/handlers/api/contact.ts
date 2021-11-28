// src/mocks/handlers.js
import { rest } from 'msw'

type ContactPostBody = {
  name: string
  email: string
  message: string
}
export const contactHandlers = [
  rest.post<ContactPostBody>('/api/contact', (req, res, context) => {
    if (req.body.email.toLowerCase().includes('error')) {
      return res(
        context.status(500),
        context.json({ error: '🔥 The server is on fire 😨' })
      )
    }

    return res(context.status(200))
  }),
]
