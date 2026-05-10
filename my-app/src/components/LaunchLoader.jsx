import { useEffect, useState } from 'react'

const launchLoaderSeenKey = 'deskhausLaunchLoaderSeen'

function LaunchLoader() {
  const [hasSeenLoader] = useState(
    () => sessionStorage.getItem(launchLoaderSeenKey) === 'true'
  )
  const [isLeaving, setIsLeaving] = useState(false)
  const [isHidden, setIsHidden] = useState(hasSeenLoader)

  useEffect(() => {
    if (hasSeenLoader) return undefined

    const leaveTimer = window.setTimeout(() => {
      sessionStorage.setItem(launchLoaderSeenKey, 'true')
      setIsLeaving(true)
    }, 1300)
    const hideTimer = window.setTimeout(() => setIsHidden(true), 1850)

    return () => {
      window.clearTimeout(leaveTimer)
      window.clearTimeout(hideTimer)
    }
  }, [hasSeenLoader])

  if (isHidden) return null

  return (
    <div className={isLeaving ? 'launch-loader leaving' : 'launch-loader'}>
      <div className="launch-loader-content" aria-live="polite">
        <span>DeskHaus is setting the room</span>
        <strong>Light on. Workspace ready.</strong>
        <div className="launch-loader-line" aria-hidden="true">
          <i />
        </div>
      </div>
    </div>
  )
}

export default LaunchLoader
