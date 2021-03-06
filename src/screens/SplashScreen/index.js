import React, { useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, Logo, Container } from '../../components'

export function SplashScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home')
    }, 1200)
  }, [navigation])

  return (
    <Container align="center" justify="center">
      <Logo />
      <Text fontFamily="bold" size={24} mt={12}>
        StarWars - Wiki
      </Text>
    </Container>
  )
}
