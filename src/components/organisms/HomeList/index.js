import React from 'react'
import { FlatList } from 'react-native'
import { Card } from '../../molecules'
import { Text } from '../../atoms'

const FAKE_DATA = [
  {
    id: 0,
    image_url:
      'https://disneyplusbrasil.com.br/wp-content/uploads/2021/06/Darth-Vader-serie-Disney-Plus.jpg',
  },
  {
    id: 1,
    image_url:
      'https://s2.glbimg.com/oGOP1N5kCTMEZa35A7OE1zNZsiA=/e.glbimg.com/og/ed/f/original/2020/01/08/baby-yoda.jpg',
  },
  {
    id: 2,
    image_url: 'https://m.media-amazon.com/images/I/91iETiJtF-L._AC_SX425_.jpg',
  },
  {
    id: 3,
    image_url:
      'https://conteudo.imguol.com.br/c/entretenimento/66/2017/05/05/palpatine-1494028163081_v2_450x337.jpg',
  },
]

export function HomeList() {
  return (
    <FlatList
      horizontal
      keyExtractor={(item) => String(item.id)}
      data={FAKE_DATA}
      renderItem={({ item }) => <Card item={item} />}
    />
  )
}
