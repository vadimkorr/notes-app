import PouchDB from 'pouchdb'

const localDB = new PouchDB('notes')
const remoteDb = new PouchDB('http://localhost:5984/notes', {
  auth: {
    username: 'admin',
    password: '@dmin',
  },
})

export const getNotesDb = () => {
  return localDB
}

// cancel replication on logout, remove local db
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
