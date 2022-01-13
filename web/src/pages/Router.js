import { Suspense, lazy } from 'react'
import {
  BrowserRouter,
  Route,
  Routes,
  Switch,
  useLocation,
} from 'react-router-dom'
import Layout from './Layout'
import { Flipper, Flipped } from 'react-flip-toolkit'

// const Notes = lazy(() => import('./Notes'))
// const NoteCreate = lazy(() => import('./NoteCreate'))
// const NoteEdit = lazy(() => import('./NoteEdit'))
// const Quotes = lazy(() => import('./Quotes'))

import Notes from './Notes'
import NoteCreate from './NoteCreate'
import NoteEdit from './NoteEdit'
import Quotes from './Quotes'

// const AnimatedRoute = ({ children, ...props }) => {
//   const location = useLocation()
//   return (
//     <Route {...props}>
//       <Flipped stagger flipId={location.path}>
//         {children}
//       </Flipped>
//     </Route>
//   )
// }

import { getHistory } from '../utils/history'
const history = getHistory()

const Router = () => (
  <BrowserRouter history={history}>
    {/* <Suspense fallback={<div>Загрузка...</div>}> */}

    <Layout>
      <Route
        render={({ location }) => {
          return (
            <Flipper
              flipKey={location.key}
              decisionData={{
                location,
              }}
            >
              <Route path="/notes">
                <Route path="/notes/:noteId" component={NoteEdit}></Route>
                <Route path="/notes/new">
                  <NoteCreate />
                </Route>
                <Route exact path="/notes">
                  <Notes />
                </Route>
              </Route>
              <Route path="quotes">
                <Quotes />
              </Route>
            </Flipper>
          )
        }}
      />
      {/* </Suspense> */}
    </Layout>
  </BrowserRouter>
)

export default Router
