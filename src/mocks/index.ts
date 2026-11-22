const IS_BROWSER = typeof window !== 'undefined'

// MSW answers /api/contact in the browser. Nothing on the server needs mocking,
// and msw/node can't load on the Workers runtime.
export const setupMocks = async () => {
  if (!IS_BROWSER) return

  const { mswWorker } = await import('./mswWorker')
  mswWorker.start()
}
