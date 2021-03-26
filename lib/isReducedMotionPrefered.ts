const isReducedMotionPrefered = () => {
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
  return !mediaQuery || mediaQuery.matches
}

export default isReducedMotionPrefered
