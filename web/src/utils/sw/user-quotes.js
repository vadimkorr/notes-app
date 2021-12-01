import { openDB } from 'idb'

export const createUserQuotesDbClient = () => {
  const OBJECT_STORE = 'user-quotes'
  const initDb = () => {
    return openDB('quotes', 1, {
      upgrade(db) {
        if (!db.objectStoreNames.contains(OBJECT_STORE)) {
          db.createObjectStore(OBJECT_STORE, { keyPath: 'id' })
        }
      },
    })
  }
  let dbPromise = initDb()

  const add = (quoteId) => {
    return dbPromise.then((db) => {
      const tx = db.transaction(OBJECT_STORE, 'readwrite')
      const store = tx.objectStore(OBJECT_STORE)
      store.put({ id: quoteId })
      return tx.complete
    })
  }

  const remove = (quoteId) => {
    return dbPromise.then((db) => {
      const tx = db.transaction(OBJECT_STORE, 'readwrite')
      const store = tx.objectStore(OBJECT_STORE)
      store.delete(quoteId)
      return tx.complete
    })
  }

  const clear = async () => {
    const db = await dbPromise
    await db.clear(OBJECT_STORE)
  }

  const addAll = async (quotes) => {
    const db = await dbPromise

    const tx = db.transaction(OBJECT_STORE, 'readwrite')
    const store = tx.objectStore(OBJECT_STORE)
    for (let i = 0; i < quotes.length; i++) {
      await store.put(quotes[i])
    }
    return tx.complete
  }

  const getAll = async () => {
    const db = await dbPromise
    const tx = db.transaction(OBJECT_STORE, 'readonly')
    const store = tx.objectStore(OBJECT_STORE)
    return store.getAll()
  }

  return {
    add,
    remove,
    clear,
    addAll,
    getAll,
  }
}
