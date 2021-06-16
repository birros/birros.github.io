import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'
import locales, { Keys, Langs } from './locales'
import requestIdleCallback, { cancelIdleCallback } from './requestIdleCallback'

export const useIsBrowser = () => {
  const [isBrowser, setIsBrowser] = useState(false)

  useEffect(() => {
    setIsBrowser(true)
  }, [])

  return isBrowser
}

export const useTranslate = () => {
  const { locale } = useRouter()
  const _ = useCallback(
    (key: Keys) => {
      const lang: Langs = (() => {
        switch (locale) {
          case 'fr':
          default:
            return 'fr'
          case 'en':
            return 'en'
        }
      })()

      return locales[lang][key] ?? key
    },
    [locale]
  )

  return _
}

export const useFormatTitle = () => {
  const _ = useTranslate()

  const formatTitle = useCallback(
    (title?: string | null) => {
      const defaultTitle = _('default.title')

      return title ? `${title} • ${defaultTitle}` : defaultTitle
    },
    [_]
  )

  return formatTitle
}

const updateViewportHeight = () => {
  const vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`)
}

const updateViewportHeightCallback = () =>
  requestIdleCallback(updateViewportHeight)

export const useSetupVH = (updateOnResize?: boolean) => {
  useEffect(() => {
    const requestObj = updateViewportHeightCallback()

    if (updateOnResize) {
      window.addEventListener('resize', updateViewportHeightCallback)
    }

    return () => {
      if (updateOnResize) {
        cancelIdleCallback(requestObj)
        window.removeEventListener('resize', updateViewportHeightCallback)
      }
    }
  }, [updateOnResize])
}
