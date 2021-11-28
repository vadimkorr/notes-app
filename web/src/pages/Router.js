import { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout'

const Notes = lazy(() => import('./Notes'))
const Quotes = lazy(() => import('./Quotes'))

const Router = () => (
  <BrowserRouter>
    <Suspense fallback={<div>Загрузка...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Notes />} />
          <Route path="quotes" element={<Quotes />} />
        </Route>
      </Routes>
    </Suspense>
  </BrowserRouter>
)

export default Router
