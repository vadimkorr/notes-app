export const USER_QUOTES_OBJECT_STORE = 'user-quotes'

export const createUserQuotesStoreClient = (db) => {
  const _add = (quote) => {
    const tx = db.transaction(USER_QUOTES_OBJECT_STORE, 'readwrite')
    const store = tx.objectStore(USER_QUOTES_OBJECT_STORE)
    store.put(quote) // quote should have field 'id'
    return tx.complete
  }

  const _remove = (quoteId) => {
    const tx = db.transaction(USER_QUOTES_OBJECT_STORE, 'readwrite')
    const store = tx.objectStore(USER_QUOTES_OBJECT_STORE)
    store.delete(quoteId)
    return tx.complete
  }

  const clear = async () => {
    await db.clear(USER_QUOTES_OBJECT_STORE)
  }

  const addAll = async (quotes) => {
    const tx = db.transaction(USER_QUOTES_OBJECT_STORE, 'readwrite')
    const store = tx.objectStore(USER_QUOTES_OBJECT_STORE)
    for (let i = 0; i < quotes.length; i++) {
      await store.put(quotes[i])
    }
    return tx.complete
  }

  const getAll = async () => {
    const tx = db.transaction(USER_QUOTES_OBJECT_STORE, 'readonly')
    const store = tx.objectStore(USER_QUOTES_OBJECT_STORE)
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
