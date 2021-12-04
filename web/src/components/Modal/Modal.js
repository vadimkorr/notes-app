import './Modal.css'

export const Modal = ({ children, onOverlayClick }) => {
  const handleOverlayClick = (event) => {
    event.stopPropagation()
    onOverlayClick?.()
  }

  return (
    <div className="modal__main-container">
      <div className="modal__overlay" onClick={handleOverlayClick}></div>
      <div className="modal__content-container">{children}</div>
    </div>
  )
}
