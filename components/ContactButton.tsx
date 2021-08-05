import React, { forwardRef } from 'react'
import {
  Button,
  Link,
  ButtonProps,
  LinkProps,
  useMergeRefs,
} from '@chakra-ui/react'
import useScrollIntoView from '../lib/useScrollIntoView'
import { useTranslate } from '../lib/hooks'

const ButtonLink = forwardRef<HTMLAnchorElement, LinkProps>(
  (props, refForwarded) => {
    const { ref, handleClick } = useScrollIntoView()

    return (
      <Link
        {...props}
        ref={useMergeRefs(ref, refForwarded)}
        onClick={handleClick}
        href="#contact"
      />
    )
  }
)
ButtonLink.displayName = 'ButtonLink'

const ContactButton: React.FC<ButtonProps> = (props) => {
  const _ = useTranslate()

  return (
    <Button
      as={ButtonLink}
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
