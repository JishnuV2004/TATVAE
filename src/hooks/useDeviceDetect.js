import { useState, useEffect } from 'react'
import { POSTER_CONFIG } from '../constants/posterConfig'

/**
 * Custom hook to detect viewport dimensions and screen device category
 */
export function useDeviceDetect() {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1024,
    height: typeof window !== 'undefined' ? window.innerHeight : 768,
  })

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener('resize', handleResize)
    // Initial sync
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const isMobile = windowSize.width < POSTER_CONFIG.breakpointMobile
  const activePoster = isMobile ? POSTER_CONFIG.assets.mobile : POSTER_CONFIG.assets.desktop

  return {
    windowSize,
    isMobile,
    isDesktop: !isMobile,
    activePoster,
  }
}
