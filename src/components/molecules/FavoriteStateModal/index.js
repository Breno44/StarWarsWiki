import React from 'react'
import { Text } from '~/components'
import {
  Modal,
  ModalBackgroundContainer,
  ModalContentContainer,
  FavoriteImage,
} from './styles'
import favoriteAdded from '../../../../assets/favorite-added.png'
import favoriteRemoved from '../../../../assets/favorite-removed.png'

export function FavoriteStateModal({ visible, onClose, type }) {
  return (
    <Modal visible={visible} transparent={true} onRequestClose={onClose}>
      <ModalBackgroundContainer>
        <ModalContentContainer>
          <FavoriteImage
            source={type === 'added' ? favoriteAdded : favoriteRemoved}
          />
          <Text align="center" mt={24} size={28} fontFamily="bold">
            {`Favorito ${
              type === 'added' ? 'adicionado' : 'removido'
            } com sucesso`}
          </Text>
        </ModalContentContainer>
      </ModalBackgroundContainer>
    </Modal>
  )
}
