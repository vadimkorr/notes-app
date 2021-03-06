/* eslint-disable no-restricted-globals */

// This service worker can be customized!
// See https://developers.google.com/web/tools/workbox/modules
// for the list of available Workbox modules, or add any other
// code you'd like.
// You can also remove this file if you'd prefer not to use a
// service worker, and the Workbox build step will be skipped.

import { clientsClaim } from 'workbox-core'
import { ExpirationPlugin } from 'workbox-expiration'
import { precacheAndRoute, createHandlerBoundToURL } from 'workbox-precaching'
import { registerRoute } from 'workbox-routing'
import { StaleWhileRevalidate } from 'workbox-strategies'
import { BackgroundSyncPlugin, Queue } from 'workbox-background-sync'

import { createStores } from './utils/sw/store'
import {
  createUserQuotesStoreClient,
  USER_QUOTES_OBJECT_STORE,
} from './utils/sw/user-quotes'
import { createQuotesStoreClient, QUOTES_OBJECT_STORE } from './utils/sw/quotes'

import {
  isUrlUserQuoteById,
  isUrlUserQuotes,
  isUrlQuotes,
} from './utils/sw/parse-url'
import { getJsonResponse, makeRequest } from './utils/sw/response'

console.log('Hello from service worker')

clientsClaim()

// Precache all of the assets generated by your build process.
// Their URLs are injected into the manifest variable below.
// This variable must be present somewhere in your service worker file,
// even if you decide not to use precaching. See https://cra.link/PWA
precacheAndRoute(self.__WB_MANIFEST)

// Set up App Shell-style routing, so that all navigation requests
// are fulfilled with your index.html shell. Learn more at
// https://developers.google.com/web/fundamentals/architecture/app-shell
const fileExtensionRegexp = new RegExp('/[^/?]+\\.[^/]+$')
registerRoute(
  // Return false to exempt requests from being fulfilled by index.html.
  ({ request, url }) => {
    // If this isn't a navigation, skip.
    if (request.mode !== 'navigate') {
      return false
    } // If this is a URL that starts with /_, skip.

    if (url.pathname.startsWith('/_')) {
      return false
    } // If this looks like a URL for a resource, because it contains // a file extension, skip.

    if (url.pathname.match(fileExtensionRegexp)) {
      return false
    } // Return true to signal that we want to use the handler.

    return true
  },
  createHandlerBoundToURL(process.env.PUBLIC_URL + '/index.html')
)

// An example runtime caching route for requests that aren't handled by the
// precache, in this case same-origin .png requests like those from in public/
registerRoute(
  // Add in any other file extensions or routing criteria as needed.
  ({ url }) =>
    url.origin === self.location.origin && url.pathname.endsWith('.png'), // Customize this strategy as needed, e.g., by changing to CacheFirst.
  new StaleWhileRevalidate({
    cacheName: 'images',
    plugins: [
      // Ensure that once this runtime cache reaches a maximum size the
      // least-recently used images are removed.
      new ExpirationPlugin({ maxEntries: 50 }),
    ],
  })
)

// workbox-background-sync:quotesQueue
const queue = new Queue('quotesQueue')

// const bgSyncPlugin = new BackgroundSyncPlugin('quotesQueue', {
//   maxRetentionTime: 24 * 60 // retry for max of 24 hours (specified in minutes)
// });

const initStores = async () => {
  const db = await createStores([USER_QUOTES_OBJECT_STORE, QUOTES_OBJECT_STORE])
  return {
    userQuotes: createUserQuotesStoreClient(db),
    quotes: createQuotesStoreClient(db),
  }
}

let stores
initStores().then((_stores) => {
  stores = _stores
})

/* POST /api/v1/user-quotes */
// how to read headers https://stackoverflow.com/questions/59087642/reading-request-headers-inside-a-service-worker
// how to read body https://stackoverflow.com/questions/62008450/service-worker-fetch-event-for-post-request-get-body
registerRoute(
  ({ url }) => isUrlUserQuotes(url.pathname),
  async ({ url, request, event, params }) => {
    // Should be cloned above to prevent 'TypeError: Failed to execute 'clone' on 'Request': Request body is already used'
    const clonedRequest = request.clone()
    const { quote_id, ...rest } = await request.clone().json()
    // should be saved anyway
    await stores.userQuotes.saveUserQuote({ id: quote_id, ...rest })

    try {
      const response = await fetch(request)
      return response
    } catch (error) {
      await queue.pushRequest({ request: clonedRequest })
      return error
    }
  },
  'POST'
)

/* GET /api/v1/user-quotes */
registerRoute(
  ({ url }) => isUrlUserQuotes(url.pathname),
  async ({ url, request, event, params }) => {
    /* stale while revalidate */
    const makeStaleWhileRevalidate = async () => {
      // 1. make request and save to cache
      makeRequest(request).then(async ({ json }) => {
        await stores.userQuotes.clear()
        await stores.userQuotes.addAll(json)
      })

      // 1. return from cache
      const data = await stores.userQuotes.getAll()
      return getJsonResponse(data)
    }

    /* cache-first */
    const makeCacheFirst = async () => {
      try {
        // 1. make request
        const { response, json } = await makeRequest(request)

        // 2. save to cache
        await stores.userQuotes.clear()
        await stores.userQuotes.addAll(json)

        // 3. return real resposne
        return response
      } catch (error) {
        // 1. return data from cache
        const data = await stores.userQuotes.getAll()
        return getJsonResponse(data)
      }
    }

    return makeStaleWhileRevalidate()
  },
  'GET'
)

/* GET /api/v1/user-quotes/[guid] */
registerRoute(
  ({ url }) => isUrlUserQuoteById(url.pathname),
  async ({ url, request, event, params }) => {
    try {
      // make request
      const { response, json: quote } = await makeRequest(request)

      // save to idb
      await stores.userQuotes.saveUserQuote(quote)

      // return real resposne
      return response
    } catch (error) {
      // check if offline

      // return data from idb
      const data = await stores.userQuotes.getAll()
      return getJsonResponse(data)
    }
  },
  'GET'
)

/* GET /api/v1/quotes */
registerRoute(
  ({ url }) => isUrlQuotes(url.pathname),
  async ({ url, request, event, params }) => {
    try {
      // make request
      const { response, json } = await makeRequest(request)

      // save to idb
      await stores.quotes.add(json)

      // return real resposne
      return response
    } catch (error) {
      console.log('error ===>', error)
      // check if offline

      // return data from idb
      const data = await stores.quotes.getAny()
      return getJsonResponse(data)
    }
  },
  'GET'
)

// This allows the web app to trigger skipWaiting via
// registration.waiting.postMessage({type: 'SKIP_WAITING'})
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting()
  }
})

// Any other custom service worker logic can go here.
