import '@testing-library/jest-dom/extend-expect'

import { mswServer } from './mocks/mswServer'

// Establish API mocking before all tests.
beforeAll(() => {
  mswServer.listen()
})

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => {
  mswServer.resetHandlers()
})

// Clean up after the tests are finished.
afterAll(() => {
  mswServer.close()
})
