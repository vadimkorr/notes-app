import { useEffect, useState } from 'react'

export const useInstall = (onEvent) => {
  const [deferredPrompt, setDeferredPrompt] = useState()

  useEffect(() => {
    const beforeInstallPromptHandler = (event) => {
      // prevent the mini-infobar from appearing on mobile
      event.preventDefault()
      // stash the event so it can be triggered later.
      setDeferredPrompt(event)
      // update UI notify the user they can install the PWA
      onEvent({ eventName: 'beforeinstallprompt', event })
    }
    window.addEventListener('beforeinstallprompt', beforeInstallPromptHandler)

    const appInstalledHandler = () => {
      // clear the deferredPrompt so it can be garbage collected
      setDeferredPrompt(null)
      // optionally, send analytics event to indicate successful install
      onEvent({ eventName: 'appinstalled' })
    }
    window.addEventListener('appinstalled', appInstalledHandler)

    return () => {
      window.removeEventListener(
        'beforeinstallprompt',
        beforeInstallPromptHandler
      )
      window.removeEventListener('appinstalled', appInstalledHandler)
    }
  }, [onEvent])

  const install = async () => {
    // show the install prompt
    deferredPrompt.prompt()
    // wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice
    // optionally, send analytics event with outcome of user choice
    // we've used the prompt, and can't use it again, throw it away
    setDeferredPrompt(null)
    onEvent({ eventName: 'userresponse', event: outcome })
  }

  return {
    install,
  }
}
