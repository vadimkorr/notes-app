import { useLocation, Link } from 'react-router-dom'
import './NavItem.css'

export const createNavItem =
  ({ ComponentActive, ComponentNotActive, title }) =>
  ({ active }) => {
    const Component = active ? ComponentActive : ComponentNotActive
    return (
      <div className="nav-item__main-container">
        <Component size="24px" />
        <p className="nav-item__title">{title}</p>
      </div>
    )
  }

export const createNavItemWrapper = (Component, to) => () => {
  const location =  useLocation()
  return (
    <Link to={to} className="nav-wrapper__main-container">
      <Component active={location?.pathname?.startsWith(to)} />
    </Link>
  )
}
