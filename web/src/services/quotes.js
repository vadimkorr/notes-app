const QUOTES_API_URL = 'http://localhost:3100'

export const getRandomQuote = () => {
  return fetch(`${QUOTES_API_URL}/api/v1/quotes`).then((response) =>
    response.json()
  )
}

export const getUserQuote = (userId, quoteId) => {
  return fetch(`${QUOTES_API_URL}/api/v1/user-quotes/${quoteId}`, {
    headers: {
      user_id: userId,
    },
  }).then((response) => response.json())
}

export const getUserQuotes = (userId) => {
  return fetch(`${QUOTES_API_URL}/api/v1/user-quotes`, {
    headers: {
      user_id: userId,
    },
  }).then((response) => response.json())
}

// payload is for make it save to cache
export const setFavoriteQuote = (userId, quoteId, favorite, payload = {}) => {
  return fetch(`${QUOTES_API_URL}/api/v1/user-quotes`, {
    method: 'POST',
    body: JSON.stringify({
      quote_id: quoteId,
      favorite,
      ...payload,
    }),
    headers: {
      'Content-Type': 'application/json',
      user_id: userId,
    },
  }).then((response) => response.json())
}
