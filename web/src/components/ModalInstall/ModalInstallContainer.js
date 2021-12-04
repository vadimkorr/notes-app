import { useState } from 'react'
import { useInstall } from '../../hooks/useInstall'
import { ModalInstall } from './ModalInstall'

const TO_INSTALL_KEY = 'to_install'
const setToInstall = (toInstall) => {
  localStorage.setItem(TO_INSTALL_KEY, toInstall)
}
const getToInstall = () => {
  return JSON.parse(localStorage.getItem(TO_INSTALL_KEY) || 'true')
}

export const ModalInstallContainer = () => {
  const [show, setShow] = useState(false)

  const { install } = useInstall(({ eventName }) => {
    if (eventName === 'beforeinstallprompt' && getToInstall()) {
      setShow(true)
    }
  })

  const handleYesClick = () => {
    install()
    setShow(false)
  }
  const handleNoClick = () => {
    setShow(false)
    setToInstall(false)
  }
  const handleOverlayClick = () => {
    setShow(false)
  }

  return (
    <ModalInstall
      show={show}
      onYesClick={handleYesClick}
      onNoClick={handleNoClick}
      onOverlayClick={handleOverlayClick}
    />
  )
}
