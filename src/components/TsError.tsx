import { Alert } from '@theme-ui/components'
import * as React from 'react'

export const TsError = ({
  children,
}: {
  children: React.ReactNode
}) => (
  <Alert sx={{ fontFamily: 'ml, monospace', fontSize: [0, 1] }}>
    {children}
  </Alert>
)
