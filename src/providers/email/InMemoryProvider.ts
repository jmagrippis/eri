import { EmailPayload, EmailProvider } from './EmailProvider'

export class InMemoryProvider implements EmailProvider {
  #emails: EmailPayload[] = []

  send = async (payload: EmailPayload): Promise<void> => {
    this.#emails.push(payload)
  }

  get emails() {
    return this.#emails
  }

  clear() {
    this.#emails.length = 0
  }
}

const defaultInMemoryProvider = new InMemoryProvider()

export default defaultInMemoryProvider
