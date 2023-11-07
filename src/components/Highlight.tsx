import Emph from './Emph'
import * as React from 'react'
import { Box, useColorMode } from 'theme-ui'

type Props = {
  children: React.ReactNode
}

const Highlight = ({ children }: Props) => {
  const [colorMode] = useColorMode()
  const color = colorMode === 'dark' ? 255 : 0
  return (
    <Box
      sx={{
        textAlign: 'center',
        fontSize: [1, 1, 2],
        padding: 2,
        paddingLeft: [2, 2, 5],
        paddingRight: [2, 2, 5],
        borderRadius: '0.5rem',
        border: '2px solid',
        boxShadow: `0 0 8px rgba(${color}, ${color}, ${color}, 0.125)`,
        borderColor: 'primary',
      }}
    >
      <Emph>{children}</Emph>
    </Box>
  )
}

export default Highlight
