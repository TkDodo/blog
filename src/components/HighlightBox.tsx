import * as React from 'react'
import { Flex } from '@theme-ui/components'

type Props = {
  children: React.ReactNode
}

const HighlightBox = ({ children }: Props) => {
  return (
    <Flex
      padding={3}
      sx={{
        flexDirection: 'column',
        gap: 3,
        borderRadius: 12,
        backgroundColor: 'var(--theme-ui-colors-backgroundSecondary)',
      }}
    >
      {children}
    </Flex>
  )
}

export default HighlightBox
