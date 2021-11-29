/// <reference types="cypress" />

import { testedViewports } from '../testedViewports'

describe('contact page', () => {
  testedViewports.forEach((viewport) => {
    describe(`on ${viewport}`, () => {
      beforeEach(() => {
        cy.viewport(viewport)
        cy.visit('/contact')
      })

      it('allows me to submit a message', () => {
        cy.findByLabelText(/name/i).type('Elena Example')
        cy.findByLabelText(/email/i).type('elena@example.com')
        cy.findByLabelText(/message/i).type('We should work together!')

        cy.findByRole('button', { name: /submit/i }).click()

        cy.findByRole('alert', {
          name: /Eri got your message, thanks!/i,
        })
      })

      it('informs me something went wrong', () => {
        // an email including "error" will result in a 500 response
        cy.findByLabelText(/email/i).type('error@example.com')
        cy.findByLabelText(/name/i).type('Elena Example')
        cy.findByLabelText(/message/i).type('We should work together!')

        cy.findByRole('button', { name: /submit/i }).click()

        cy.findByRole('alert', {
          name: /Something went wrong\.\.\. Try again?/i,
        })
      })
    })
  })
})
