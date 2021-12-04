import Modal from '../../components/Modal'
import Button from '../../components/Button'
import './ModalInstall.css'

export const ModalInstall = ({
  onYesClick,
  onNoClick,
  show,
  onOverlayClick,
}) => {
  const handleYesClick = () => {
    onYesClick?.()
  }
  const handleNoClick = () => {
    onNoClick?.()
  }
  const handleOverlayClick = () => {
    onOverlayClick?.()
  }

  if (!show) return null

  return (
    <Modal onOverlayClick={handleOverlayClick}>
      <div className="modal-install__content-container">
        <div className="modal-install__text-container">
          <p className="modal-install__title">Installation</p>
          <p className="modal-install__message">
            Would you like to install the app?
          </p>
        </div>

        <div className="modal-install__buttons-container">
          <Button
            className="modal-install__button modal-install__button-no"
            onClick={handleNoClick}
          >
            No
          </Button>
          <Button
            className="modal-install__button modal-install__button-yes"
            onClick={handleYesClick}
          >
            YES
          </Button>
        </div>
      </div>
    </Modal>
  )
}
