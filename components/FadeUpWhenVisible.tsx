import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, MotionProps, useAnimation } from 'framer-motion'
import { Box, BoxProps } from '@chakra-ui/react'
import classNames from 'classnames'
import { FADE_UP_DURATION } from '../lib/constants'
import isAnimationEnabled from '../lib/isAnimationEnabled'

const fadeUpWhenVisibleClassName = 'FadeUpWhenVisible'

export const fadeUpWhenVisibleNoScriptStyle = `
  .${fadeUpWhenVisibleClassName} {
    opacity: 1 !important;
    transform: translateY(0px) !important;
  }
`

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
  className,
  ...rest
}) => {
  const controls = useAnimation()
  const [ref, inView] = useInView()
  const animationEnabled = isAnimationEnabled()

  useEffect(() => {
    if (!animationEnabled) {
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
      className={classNames(className, fadeUpWhenVisibleClassName)}
      initial={animationEnabled ? 'hidden' : 'visible'}
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
