import { Outlet } from 'react-router-dom'
import Nav from '../../components/nav/Nav'
import NavItemNotes from '../../components/nav/NavItemNotes'
import NavItemQuotes from '../../components/nav/NavItemQuotes'
import ModalInstall from '../../components/ModalInstall'
import './Layout.css'

const links = [
  {
    id: 'notes',
    renderItem: () => <NavItemNotes />,
  },
  {
    id: 'quotes',
    renderItem: () => <NavItemQuotes />,
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
      <div className="layout__modal-container">
        <ModalInstall />
      </div>
    </div>
  )
}
