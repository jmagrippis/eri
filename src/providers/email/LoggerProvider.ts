import { EmailPayload, EmailProvider } from './EmailProvider'

export class LoggerProvider implements EmailProvider {
  send = async ({ email, name, message }: EmailPayload): Promise<void> => {
    console.log(`✉️ New contact form submission ✉️

${name}<${email}> sends this message:

${message}

✉️✉️✉️
`)
  }
}

const defaultLoggerProvider = new LoggerProvider()

export default defaultLoggerProvider
