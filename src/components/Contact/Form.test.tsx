import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import emailProvider from 'providers/email/InMemoryProvider'
import { Form } from './Form'

beforeEach(() => {
  emailProvider.clear()
})

it('allows me to submit a message', async () => {
  const user = userEvent.setup()
  render(<Form />)

  const name = 'Elena Example'
  const email = 'elena@example.com'
  const message = 'We should work together!'

  await user.type(screen.getByLabelText(/name/i), name)
  await user.type(screen.getByLabelText(/email/i), email)
  await user.type(screen.getByLabelText(/message/i), message)

  await user.click(screen.getByRole('button', { name: /submit/i }))

  expect(
    await screen.findByRole('alert', { name: /Eri got your message, thanks!/i })
  ).toBeInTheDocument()

  expect(emailProvider.emails).toEqual([
    {
      name,
      email,
      message,
    },
  ])
})

it('does not send the email and informs me something went wrong', async () => {
  const user = userEvent.setup()
  render(<Form />)

  // an email including "error" will result in a 500 response
  await user.type(screen.getByLabelText(/email/i), 'error@example.com')
  await user.type(screen.getByLabelText(/name/i), 'Elena Example')
  await user.type(screen.getByLabelText(/message/i), 'We should work together!')

  await user.click(screen.getByRole('button', { name: /submit/i }))

  expect(
    await screen.findByRole('alert', {
      name: /Something went wrong... Try again?/i,
    })
  ).toBeInTheDocument()
})

it('informs me something went wrong', async () => {
  const user = userEvent.setup()
  render(<Form />)

  // a short message will result in a 400 response
  await user.type(screen.getByLabelText(/message/i), 'Yo!')
  await user.type(screen.getByLabelText(/name/i), 'Elena Example')
  await user.type(screen.getByLabelText(/email/i), 'elena@example.com')

  await user.click(screen.getByRole('button', { name: /submit/i }))

  expect(
    await screen.findByRole('alert', {
      name: /Your message looks a bit short/i,
    })
  ).toBeInTheDocument()
})
