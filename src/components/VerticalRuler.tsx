import { Box } from '@theme-ui/components'
import * as React from 'react'

export const VerticalRuler = ({ height }: { height: string }) => (
  <Box
    as="hr"
    sx={{
      width: '4px',
      height,
      background: 'var(--theme-ui-colors-primary)',
      margin: '5em auto',
      border: 'none',
      borderRadius: '5px',
    }}
  ></Box>
)
