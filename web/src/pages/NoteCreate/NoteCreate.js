import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import NoteForm from '../../components/NoteForm'
import './NoteCreate.css'

export const NoteCreate = () => {
  return <NoteForm note={{ id: 'new' }} />
}
