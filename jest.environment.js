const { TestEnvironment } = require('jest-environment-jsdom')

// JSDOM leaves out the Fetch API globals MSW needs, so hand it Node's own,
// like https://github.com/mswjs/jest-fixed-jsdom does. Unlike that package,
// keep JSDOM's FormData: the contact form reads its <form> element with it.
const NODE_GLOBALS = [
  'TextDecoder',
  'TextEncoder',
  'TextDecoderStream',
  'TextEncoderStream',
  'ReadableStream',
  'TransformStream',
  'WritableStream',
  'Blob',
  'Headers',
  'Request',
  'Response',
  'fetch',
  'AbortController',
  'AbortSignal',
  'structuredClone',
  'URL',
  'URLSearchParams',
  'BroadcastChannel',
]

class JSDOMWithFetchEnvironment extends TestEnvironment {
  constructor(...args) {
    super(...args)

    // resolve packages like Node does, not like a browser (msw/node opts out of "browser")
    this.customExportConditions = ['']

    for (const name of NODE_GLOBALS) {
      this.global[name] = globalThis[name]
    }
  }
}

module.exports = JSDOMWithFetchEnvironment
