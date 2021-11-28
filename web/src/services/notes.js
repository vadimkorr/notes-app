import { getNotesDb } from '../clients/db'
import { getGuid } from '../utils/guid'

export const getInfo = () => {
  return getNotesDb()
    .info()
    .then((info) => {
      console.log(info)
    })
}

export const putNote = ({ title, text }) => {
  const doc = {
    _id: getGuid(),
    title,
    text,
    // createdAt
  }
  return getNotesDb().put(doc)
}

export const updateNote = ({ title, text, note }) => {
  const doc = {
    _id: note._id,
    _rev: note._rev,
    title,
    text,
  }
  return getNotesDb().put(doc)
}

export const getNote = ({ id }) => {
  return getNotesDb().get(id)
}

export const removeNote = ({ id }) => {
  return getNotesDb()
    .get(id)
    .then((doc) => {
      return getNotesDb().remove(doc)
    })
}

export const getNotes = () => {
  return getNotesDb()
    .allDocs({
      include_docs: true,
      attachments: true,
    })
    .then((result) => result.rows)
}
