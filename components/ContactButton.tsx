import React from 'react'
import { Button, Link, ButtonProps } from '@chakra-ui/react'
import useScrollIntoView from '../lib/useScrollIntoView'

const ContactButton: React.FC<ButtonProps> = (props) => {
  const { ref, handleClick } = useScrollIntoView()

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
      Contactez-moi
    </Button>
  )
}

export default ContactButton
