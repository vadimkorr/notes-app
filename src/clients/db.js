import PouchDB from 'pouchdb'

const localDB = new PouchDB('notes')
const remoteDb = new PouchDB('http://localhost:5984/notes')

export const getNotesDb = () => {
  return localDB
}

export const sync = () => {
  localDB
    .sync(remoteDb, {
      live: true,
      retry: true,
    })
    .on('change', function (change) {
      // something changed!
    })
    .on('paused', function (info) {
      // replication was paused, usually because of a lost connection
    })
    .on('active', function (info) {
      // replication was resumed
    })
    .on('error', function (err) {
      // totally unhandled error (shouldn't happen)
    })
}
