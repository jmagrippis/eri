import { http, HttpResponse } from 'msw'

import emailProvider from 'providers/email/InMemoryProvider'

type ContactPostBody = {
  name: string
  email: string
  message: string
}

export const contactHandlers = [
  http.post<never, ContactPostBody>('/api/contact', async ({ request }) => {
    const body = await request.json()

    if (body.email.includes('error')) {
      return HttpResponse.json(
        { error: '🔥 The server is on fire 😨' },
        { status: 500 }
      )
    }
    if (body.message.length < 4) {
      return HttpResponse.json(
        { error: 'Too laconic buddy 🧐' },
        { status: 400 }
      )
    }

    emailProvider.send(body)

    return new HttpResponse(null, { status: 200 })
  }),
]
