// http://localhost:3100/api/v1/user-quotes/596a6752-12a0-4c8b-8630-5679e42d1b99
export const getQuoteId = (url) => {
  const urlRegex = new RegExp('.*/api/v1/user-quotes/(.*)', 'g')
  const match = urlRegex.exec(url)
  return match?.[1] || null
}

export const isUrlGetUserQuoteById = (url) => {
  const urlRegex = new RegExp('.*/api/v1/user-quotes/(.+)', 'g')
  return urlRegex.test(url)
}

export const isUrlGetUserQuotes = (url) => {
  const urlRegex = new RegExp('.*/api/v1/user-quotes$', 'g')
  return urlRegex.test(url)
}
