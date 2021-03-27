import React from 'react'
import { Button, Link, ButtonProps } from '@chakra-ui/react'
import useScrollIntoView from '../lib/useScrollIntoView'
import { useTranslate } from '../lib/hooks'

const ContactButton: React.FC<ButtonProps> = (props) => {
  const { ref, handleClick } = useScrollIntoView()
  const _ = useTranslate()

  return (
    <Button
      as={(props) => (
        <Link {...props} ref={ref} onClick={handleClick} href="#contact" />
      )}
      colorScheme="primary"
      borderRadius="full"
      size="lg"
      textDecoration="none !important"
      {...props}
    >
      {_('contactButton.label')}
    </Button>
  )
}

export default ContactButton
