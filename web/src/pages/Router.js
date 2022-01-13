import { Suspense, lazy } from 'react'
import { Router } from 'react-router'
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

const NotesRoutes = ({ match }) => (
  <Switch>
    <Route path={`${match.path}/new`} component={NoteCreate} />
    <Route path={`${match.path}/:noteId`} component={NoteEdit} />
    <Route exact path={match.path} component={Notes} />
  </Switch>
)

const AppRouter = () => (
  <Router history={history}>
    {/* <Suspense fallback={<div>Загрузка...</div>}> */}

    <Layout>
      <Route
        render={({ location }) => {
          return (
            <Flipper
              flipKey={location.pathname}
              decisionData={{
                location,
              }}
            >
              <Route path="/notes" component={NotesRoutes} />
              <Route path="quotes">
                <Quotes />
              </Route>
            </Flipper>
          )
        }}
      />
      {/* </Suspense> */}
    </Layout>
  </Router>
)

export default AppRouter
