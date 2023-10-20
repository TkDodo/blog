import Emph from './Emph'
import * as React from 'react'
import { Box } from 'theme-ui'

type Props = {
  children: React.ReactNode
  title?: string
}

const Aside = ({ children, title }: Props) => {
  return (
    <Box
      as="aside"
      sx={{
        color: 'var(--theme-ui-colors-text)',
        marginTop: ['16px', '16px', '20px'],
        marginBottom: ['16px', '16px', '20px'],
        borderRadius: '0.5rem',
        paddingX: ['16px', '16px', '20px'],
        paddingY: title ? ['16px', '16px', '20px'] : 0,
        borderLeft: '6px solid var(--theme-ui-colors-primary)',
        paddingBottom: '0px !important',
        overflow: 'hidden',
        backgroundColor: 'var(--theme-ui-colors-backgroundSecondary)',
        code: {
          backgroundColor:
            'var(--theme-ui-colors-backgroundTertiary) !important',
        },
      }}
    >
      {title && <Emph>{title}</Emph>}
      {children}
    </Box>
  )
}

export default Aside
