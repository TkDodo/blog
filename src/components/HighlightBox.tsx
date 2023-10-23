import * as React from 'react'
import { Flex } from '@theme-ui/components'

type Props = {
  children: React.ReactNode
}

const HighlightBox = ({ children }: Props) => {
  return (
    <Flex
      padding={['1em', '1.125em']}
      sx={{
        flexDirection: 'column',
        borderRadius: '0.5rem',
        backgroundColor: 'var(--theme-ui-colors-backgroundSecondary)',
      }}
    >
      {children}
    </Flex>
  )
}

export default HighlightBox
