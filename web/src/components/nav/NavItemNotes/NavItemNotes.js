import { FaStickyNote, FaRegStickyNote } from 'react-icons/fa'
import {
  createNavItem,
  createNavItemWrapper,
} from '../../../components/nav/NavItem'

export const NavItemNotes = createNavItem({
  ComponentActive: FaStickyNote,
  ComponentNotActive: FaRegStickyNote,
  title: 'Notes',
})

export const NavItemNotesWrapper = createNavItemWrapper(NavItemNotes, '/notes')
