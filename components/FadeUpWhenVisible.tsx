import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, MotionProps, useAnimation } from 'framer-motion'
import { Box, BoxProps } from '@chakra-ui/react'
import { FADE_UP_DURATION } from '../lib/constants'
import isMobileOrTablet from '../lib/isMobileOrTablet'
import isReducedMotionPrefered from '../lib/isReducedMotionPrefered'

type MotionBoxProps = Omit<BoxProps, 'transition'>

const MotionBox = motion<MotionBoxProps>(Box, {
  forwardMotionProps: true,
})

interface Props {
  delay?: number
}

export type FadeUpWhenVisibleProps = MotionBoxProps & MotionProps & Props

const FadeUpWhenVisible: React.FC<FadeUpWhenVisibleProps> = ({
  delay,
  children,
  ...rest
}) => {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  const enabled =
    process.browser && !isMobileOrTablet() && !isReducedMotionPrefered()

  useEffect(() => {
    if (!enabled) {
      return
    }

    if (inView) {
      controls.start('visible')
    } else if (process.env.NODE_ENV === 'development') {
      controls.start('hidden')
    }
  }, [controls, inView])

  return (
    <MotionBox
      ref={ref}
      animate={controls}
      initial={enabled ? 'hidden' : 'visible'}
      transition={{ duration: FADE_UP_DURATION, type: 'spring', delay }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
      {...rest}
    >
      {children}
    </MotionBox>
  )
}

export default FadeUpWhenVisible
