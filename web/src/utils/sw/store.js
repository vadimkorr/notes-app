import { openDB } from 'idb'

export const createStores = (objectStores) => {
  return openDB('quotes-data', 1, {
    upgrade(db) {
      for (const objectStore of objectStores) {
        if (!db.objectStoreNames.contains(objectStore)) {
          db.createObjectStore(objectStore, { keyPath: 'id' })
        }
      }
    },
  })
}
