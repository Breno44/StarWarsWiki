import React from 'react'
import { CustomText } from './styles'

export function Text({ children, color }) {
  return <CustomText color={color}>{children}</CustomText>
}
