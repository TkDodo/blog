import * as React from 'react'
import { Text, useColorMode } from 'theme-ui'
import { tint } from '@theme-ui/color'

type Props = {
  children: React.ReactNode
}

const Emph = ({ children }: Props) => {
  return (
    <Text
      sx={{
        letterSpacing: '0.05em',
        color: tint('primary', 0.2),
        fontWeight: 'bold',
      }}
    >
      {children}
    </Text>
  )
}

export default Emph
