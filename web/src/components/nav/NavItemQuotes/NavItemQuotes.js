import { FaStar, FaRegStar } from 'react-icons/fa'
import {
  createNavItem,
  createNavItemWrapper,
} from '../../../components/nav/NavItem'

export const NavItemQuotes = createNavItem({
  ComponentActive: FaStar,
  ComponentNotActive: FaRegStar,
  title: 'Quotes',
})

export const NavItemQuotesWrapper = createNavItemWrapper(
  NavItemQuotes,
  '/quotes'
)
