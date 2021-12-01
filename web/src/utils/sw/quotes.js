export const createQuotesStoreClient = (objectStore, db) => {
  const add = (quote) => {
    // return dbPromise.then((db) => {
    const tx = db.transaction(objectStore, 'readwrite')
    const store = tx.objectStore(objectStore)
    store.put(quote) // quote should have field 'id'
    return tx.complete
    // })
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
