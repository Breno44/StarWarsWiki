import React from 'react'
import { Hero, ScreenScrollContainer, GoBack, Text } from '~/components'
import { useDataStore } from '~/services/stores'

export function Detail() {
  const { selectedData } = useDataStore()
  return (
    <ScreenScrollContainer>
      <Hero item={selectedData} onDetail />
      <Text ml={24} fontFamily="black" size={18}>
        Descrição
      </Text>
      <Text mt={14} ml={24} mr={24} size={14} lh={20}>
        {selectedData.description}
      </Text>
      <GoBack />
    </ScreenScrollContainer>
  )
}
