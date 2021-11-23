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
