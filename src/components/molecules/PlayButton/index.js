import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { PlayButtonContainer } from './styles'
import { Text } from '~/components'
import { theme } from '~/styles'

export function PlayButton({ onPress }) {
  return (
    <PlayButtonContainer onPress={onPress}>
      <Ionicons
        name="play"
        size={theme.metrics.px(14)}
        color={theme.colors.black}
      />
      <Text color="dark" ml="6">
        Play
      </Text>
    </PlayButtonContainer>
  )
}
