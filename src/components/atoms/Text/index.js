import React from 'react'
import { CustomText } from './styles'

export function Text({ children, ...props }) {
  return <CustomText {...props}>{children}</CustomText>
}
