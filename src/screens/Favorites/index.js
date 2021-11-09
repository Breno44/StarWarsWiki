import React, { useEffect } from 'react'
import { ScreenScrollContainer, Text } from '~/components'
import { useFavorites } from '~/services/hooks'

export function FavoritesScreen({ navigation }) {
  const { getFavorites } = useFavorites()

  const callGetFavorites = async () => {
    const favorites = await getFavorites()
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      callGetFavorites()
    })

    return unsubscribe
  }, [])

  return (
    <ScreenScrollContainer withPadding>
      <Text fontFamily="bold" size={28}>
        Favoritos
      </Text>
    </ScreenScrollContainer>
  )
}
