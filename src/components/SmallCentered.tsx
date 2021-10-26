import * as React from 'react'
import { Box, Divider, Link } from '@theme-ui/components'

type Props = {
  children: React.ReactNode
}

const SmallCentered = ({ children }: Props) => (
  <Box
    sx={{
      fontSize: 'smaller',
      textAlign: 'center',
      marginTop: ['-1rem', '-1rem', '-3rem'],
      marginBottom: '1rem',
    }}
  >
    {children}
  </Box>
)

export default SmallCentered
