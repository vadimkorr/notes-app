import { v4 as uuid } from 'uuid'

export const getGuid = () => {
  return uuid() // new Date().toJSON() // to return sorted notes by date
}
