import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { GoBackContainer } from './styles'
import { Ionicons } from '@expo/vector-icons'
import { theme } from '~/styles'

export function GoBack() {
  const navigation = useNavigation()
  return (
    <GoBackContainer onPress={() => navigation.goBack()}>
      <Ionicons
        name="chevron-back"
        size={theme.metrics.px(28)}
        color={theme.colors.white}
      />
    </GoBackContainer>
  )
}
