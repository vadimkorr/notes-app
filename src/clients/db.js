import PouchDB from 'pouchdb'

const db = new PouchDB('http://localhost:5984/notes')

export const getNotesDb = () => {
  return db
}
