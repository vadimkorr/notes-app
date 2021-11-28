import { Link, Outlet } from 'react-router-dom'
import Nav from '../../components/Nav'
import './Layout.css'

const links = [
  {
    id: 'notes',
    renderItem: () => <Link to="/">Notes</Link>,
  },
  {
    id: 'notes',
    renderItem: () => <Link to="/quotes">Quotes</Link>,
  },
]

export const Layout = () => {
  return (
    <div className="layout__main-container">
      <div className="layout__content-container">
        <Outlet />
      </div>
      <div className="layout__nav-container">
        <Nav links={links} />
      </div>
    </div>
  )
}
