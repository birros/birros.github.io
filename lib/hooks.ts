import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'
import locales, { Keys, Langs } from './locales'

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
