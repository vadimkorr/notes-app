export const createUserQuotesStoreClient = (objectStore, db) => {
  const _add = (quote) => {
    // return dbPromise.then((db) => {
    const tx = db.transaction(objectStore, 'readwrite')
    const store = tx.objectStore(objectStore)
    store.put(quote) // quote should have field 'id'
    return tx.complete
    // })
  }

  const _remove = (quoteId) => {
    // return dbPromise.then((db) => {
    const tx = db.transaction(objectStore, 'readwrite')
    const store = tx.objectStore(objectStore)
    store.delete(quoteId)
    return tx.complete
    // })
  }

  const clear = async () => {
    // const db = await dbPromise
    await db.clear(objectStore)
  }

  const addAll = async (quotes) => {
    // const db = await dbPromise

    const tx = db.transaction(objectStore, 'readwrite')
    const store = tx.objectStore(objectStore)
    for (let i = 0; i < quotes.length; i++) {
      await store.put(quotes[i])
    }
    return tx.complete
  }

  const getAll = async () => {
    // const db = await dbPromise
    const tx = db.transaction(objectStore, 'readonly')
    const store = tx.objectStore(objectStore)
    return store.getAll()
  }

  const saveUserQuote = async (quote) => {
    if (quote.favorite) {
      await _add(quote)
    } else {
      await _remove(quote.id)
    }
  }

  return {
    clear,
    addAll,
    getAll,
    saveUserQuote,
  }
}
