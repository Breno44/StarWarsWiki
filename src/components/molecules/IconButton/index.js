import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { ButtonContainer } from './styles'
import { Text } from '~/components'
import { theme } from '~/styles'

export function IconButton({ iconName, label, onPress }) {
  return (
    <ButtonContainer onPress={onPress}>
      <Ionicons
        name={iconName}
        size={theme.metrics.px(24)}
        color={theme.colors.white}
      />
      <Text fontFamily="semiBold" size={10} mt={6}>
        {label}
      </Text>
    </ButtonContainer>
  )
}
