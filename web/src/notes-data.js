import { createContext, useContext, useEffect, useState } from 'react'
import { getInfo, getNotes } from './services/notes'

export const notesContext = createContext()
const NotesContextProvider = notesContext.Provider

export const useNotes = () => {
  return useContext(notesContext)
}

export const NotesData = ({ children }) => {
  const [notes, setNotes] = useState([])

  const fetchNotes = () => {
    console.log('FETCHING NOTES')
    getInfo()
    // putNote({ title: 'new note', text: 'hello' })
    getNotes().then((values) => {
      setNotes(values)
    })
  }

  useEffect(() => {
    fetchNotes()
  }, [])

  return (
    <NotesContextProvider value={{ notes, fetchNotes }}>
      {children}
    </NotesContextProvider>
  )
}
