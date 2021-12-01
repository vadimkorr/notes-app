export const getJsonResponse = (data) => {
  return new Response(JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json' },
  })
}

export const makeRequest = async (request) => {
  const response = await fetch(request)
  const clone = response.clone()
  const json = await clone.json()

  return {
    response,
    json,
  }
}
