import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  const previousPathname = useRef(pathname)

  useEffect(() => {
    const isSamePage = previousPathname.current === pathname
    previousPathname.current = pathname

    if (hash) {
      const target = document.querySelector(hash)

      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }

      return
    }

    if (!isSamePage) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    }
  }, [pathname, hash])

  return null
}

export default ScrollToTop
