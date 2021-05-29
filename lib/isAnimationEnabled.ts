import isMobileOrTablet from './isMobileOrTablet'
import isReducedMotionPrefered from './isReducedMotionPrefered'
import isServerSideRendering from './isServerSideRendering'

const isAnimationEnabled = () =>
  isServerSideRendering() || (!isMobileOrTablet() && !isReducedMotionPrefered())

export default isAnimationEnabled
