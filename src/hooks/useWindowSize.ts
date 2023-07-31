'use client'

import { useEffect, useState } from 'react'

export const useWindowSize = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const matchMedia = window.matchMedia('(max-width: 896px)')
      const handleResize = (event: MediaQueryListEvent | MediaQueryList) => {
        setIsMobile(event.matches)
      }

      matchMedia.addEventListener<'change'>('change', handleResize)
      handleResize(matchMedia)
      return () => matchMedia.removeEventListener('change', handleResize)
    } else {
      return
    }
  }, [])

  return {
    isMobile,
  }
}
