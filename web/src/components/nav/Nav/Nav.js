import './Nav.css'

export const Nav = ({ links }) => {
  return (
    <nav className="nav__main-container">
      {links.map((link) => (
        <div key={link.id}>{link.renderItem()}</div>
      ))}
    </nav>
  )
}
