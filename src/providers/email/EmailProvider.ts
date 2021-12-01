export type EmailPayload = {
  name: string
  message: string
  email: string
}

export interface EmailProvider {
  send(payload: EmailPayload): Promise<void>
}
