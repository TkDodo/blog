import * as React from 'react'
import { Text, useColorMode } from 'theme-ui'
import { tint } from '@theme-ui/color'

type Props = {
  children: React.ReactNode
  color?: string
}

const Emph = ({ children, color = 'primary' }: Props) => {
  return (
    <Text
      sx={{
        letterSpacing: '0.05em',
        color,
        fontWeight: 'bold',
      }}
    >
      {children}
    </Text>
  )
}

export default Emph
