import { useCallback, useRef } from 'react'

const useScrollIntoView = () => {
  const ref = useRef<HTMLAnchorElement | null>(null)

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      if (!ref.current) {
        return
      }

      const url = new URL(ref.current.href)
      if (
        url.host !== document.location.host ||
        url.pathname !== document.location.pathname ||
        !url.hash
      ) {
        return
      }

      const el = document.querySelector(url.hash)
      if (!el) {
        return
      }

      e.preventDefault()
      el.scrollIntoView({ behavior: 'smooth' })
    },
    [ref]
  )

  return { ref, handleClick }
}

export default useScrollIntoView
