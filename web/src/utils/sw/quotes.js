export const QUOTES_OBJECT_STORE = 'quotes'

export const createQuotesStoreClient = (db) => {
  const add = (quote) => {
    const tx = db.transaction(QUOTES_OBJECT_STORE, 'readwrite')
    const store = tx.objectStore(QUOTES_OBJECT_STORE)
    store.put(quote) // quote should have field 'id'
    return tx.complete
  }

  const getAny = async () => {
    // TODO: implement
    return {
      id: '51c83fff-9cd3-4570-9033-9af1e779525c',
      text: 'We cannot solve problems with the kind of thinking we employed when we came up with them.',
      author: 'Albert Einstein',
    }
  }

  return {
    add,
    getAny,
  }
}
