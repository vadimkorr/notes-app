import { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom'
import Layout from './Layout'

const Notes = lazy(() => import('./Notes'))
const NoteCreate = lazy(() => import('./NoteCreate'))
const NoteEdit = lazy(() => import('./NoteEdit'))
const Quotes = lazy(() => import('./Quotes'))

const Router = () => (
  <BrowserRouter>
    <Suspense fallback={<div>Загрузка...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/notes" element={<Outlet />}>
            <Route index element={<Notes />} />
            <Route path=":noteId" element={<NoteEdit />} />
            <Route path="new" element={<NoteCreate />} />
          </Route>
          <Route path="quotes" element={<Quotes />} />
        </Route>
      </Routes>
    </Suspense>
  </BrowserRouter>
)

export default Router
