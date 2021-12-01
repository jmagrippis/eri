import '@testing-library/jest-dom/extend-expect'

import { mswServer } from 'mocks/mswServer'

beforeAll(() => {
  mswServer.listen()
})

afterAll(() => {
  mswServer.close()
})

afterEach(() => {
  mswServer.resetHandlers()
})
