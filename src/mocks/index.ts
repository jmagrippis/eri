const IS_BROWSER = typeof window !== 'undefined'

export const setupMocks = async () => {
  if (IS_BROWSER) {
    const { mswWorker } = await import('./mswWorker')
    mswWorker.start()
  } else {
    const { mswServer } = await import('./mswServer')
    mswServer.listen()
  }
}
