import React from 'react'
import { Text } from '~/components'
import { TagContainer } from './styles'

export function Tag({ children, ...props }) {
  return (
    <TagContainer {...props}>
      <Text fontFamily="bold" size={14}>
        {children}
      </Text>
    </TagContainer>
  )
}
