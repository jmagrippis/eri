import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Form } from './Form'

it('allows me to submit a message', async () => {
  render(<Form />)

  userEvent.type(screen.getByLabelText(/name/i), 'Elena Example')
  userEvent.type(screen.getByLabelText(/email/i), 'elena@example.com')
  userEvent.type(screen.getByLabelText(/message/i), 'We should work together!')

  userEvent.click(screen.getByRole('button', { name: /submit/i }))

  expect(
    await screen.findByRole('alert', {
      name: /Eri got your message, thanks!/i,
    })
  ).toBeInTheDocument()
})

it('informs me something went wrong', async () => {
  render(<Form />)

  // an email including "error" will result in a 500 response
  userEvent.type(screen.getByLabelText(/email/i), 'error@example.com')
  userEvent.type(screen.getByLabelText(/name/i), 'Elena Example')
  userEvent.type(screen.getByLabelText(/message/i), 'We should work together!')

  userEvent.click(screen.getByRole('button', { name: /submit/i }))

  expect(
    await screen.findByRole('alert', {
      name: /Something went wrong\.\.\. Try again?/i,
    })
  ).toBeInTheDocument()
})
