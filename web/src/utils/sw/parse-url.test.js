import {
  getQuoteId,
  isUrlGetUserQuoteById,
  isUrlGetUserQuotes,
} from './parse-url'

describe('getQuoteId', () => {
  it('returns id if it is presented', () => {
    const url =
      'http://localhost:3100/api/v1/user-quotes/596a6752-12a0-4c8b-8630-5679e42d1b99'
    const id = getQuoteId(url)

    expect(id).toEqual('596a6752-12a0-4c8b-8630-5679e42d1b99')
  })

  it('returns null if it is not presented', () => {
    const url = 'http://localhost:3100/api/v1/user-quotes'
    const id = getQuoteId(url)

    expect(id).toEqual(null)
  })
})

describe('isUrlGetUserQuoteById', () => {
  it('returns true as expected', () => {
    const url =
      'http://localhost:3100/api/v1/user-quotes/596a6752-12a0-4c8b-8630-5679e42d1b99'
    const result = isUrlGetUserQuoteById(url)

    expect(result).toEqual(true)
  })

  it('returns false as expected', () => {
    const url = 'http://localhost:3100/api/v1/user-quotes'
    const result = isUrlGetUserQuoteById(url)

    expect(result).toEqual(false)
  })

  it('returns true as expected if pathname is passed', () => {
    const pathname = '/api/v1/user-quotes/596a6752-12a0-4c8b-8630-5679e42d1b99'
    const result = isUrlGetUserQuoteById(pathname)

    expect(result).toEqual(true)
  })

  it('returns false as expected if pathname is passed', () => {
    const pathname = '/api/v1/user-quotes'
    const result = isUrlGetUserQuoteById(pathname)

    expect(result).toEqual(false)
  })
})

describe('isUrlGetUserQuotes', () => {
  it('returns true as expected', () => {
    const url = 'http://localhost:3100/api/v1/user-quotes'
    const result = isUrlGetUserQuotes(url)
    expect(result).toEqual(true)
  })

  it('returns false as expected', () => {
    const url =
      'http://localhost:3100/api/v1/user-quotes/596a6752-12a0-4c8b-8630-5679e42d1b99'
    const result = isUrlGetUserQuotes(url)
    expect(result).toEqual(false)
  })
})
