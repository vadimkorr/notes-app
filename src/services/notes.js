import { getNotesDb } from '../clients/db'

export const getInfo = () => {
  return getNotesDb()
    .info()
    .then((info) => {
      console.log(info)
    })
}
