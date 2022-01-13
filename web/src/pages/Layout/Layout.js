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

export const Layout = ({ children }) => {
  return (
    <div className="layout__main-container">
      <div className="layout__content-container">
        {children}
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
