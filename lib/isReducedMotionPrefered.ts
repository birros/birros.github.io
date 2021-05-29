import isServerSideRendering from './isServerSideRendering'

const isReducedMotionPrefered = () => {
  if (isServerSideRendering()) {
    return true
  }

  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
  return !mediaQuery || mediaQuery.matches
}

export default isReducedMotionPrefered
