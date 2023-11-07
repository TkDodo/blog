import { Box } from '@theme-ui/components'
import * as React from 'react'

export const Del = ({ children }: { children: React.ReactNode }) => (
  <span style={{ position: 'relative' }}>
    <Box
      as="span"
      sx={{
        '::after': {
          content: '""',
          position: 'absolute',
          height: '0.15em',
          background: 'var(--theme-ui-colors-danger)',
          margin: 'auto',
          marginTop: '0.65em',
          transform: 'rotate(-3deg)',
          inset: 0,
        },
      }}
    >
      {children}
    </Box>
  </span>
)
