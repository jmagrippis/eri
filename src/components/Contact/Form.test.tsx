import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Form } from './Form'

it('allows me to submit a message', () => {
  render(<Form />)

  userEvent.type(screen.getByLabelText(/name/i), 'Elena Example')
  userEvent.type(screen.getByLabelText(/email/i), 'elena@example.com')
  userEvent.type(screen.getByLabelText(/message/i), 'We should work together!')

  userEvent.click(screen.getByRole('button', { name: /submit/i }))
})
