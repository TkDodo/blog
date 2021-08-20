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
        fontSize: [1, 1, 2],
        padding: 2,
        borderRadius: 2,
        border: '2px solid',
        boxShadow: `0 0 8px rgba(${color}, ${color}, ${color}, 0.125)`,
        borderColor: 'primary',
      }}
    >
      {children}
    </Box>
  )
}

export default Highlight
