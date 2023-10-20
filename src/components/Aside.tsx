import Emph from './Emph'
import * as React from 'react'
import { Box, Flex } from 'theme-ui'

type Props = {
  children: React.ReactNode
  title?: string
  icon?: keyof typeof icons
}

const Bell = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
  </svg>
)

const icons: Record<string, React.ComponentType> = {
  bell: Bell,
}

const Aside = ({ children, title, icon }: Props) => {
  const Icon = icon ? icons[icon] : null
  return (
    <Box
      as="aside"
      sx={{
        color: 'var(--theme-ui-colors-text)',
        marginTop: ['16px', '16px', '20px'],
        marginBottom: ['16px', '16px', '20px'],
        borderRadius: '12px',
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
      {title || icon ? (
        <Flex
          sx={{
            alignItems: 'center',
            justifyContent: 'space-between',
            color: 'var(--theme-ui-colors-primary)',
          }}
        >
          {title && <Emph>{title}</Emph>}
          {icon && <Icon />}
        </Flex>
      ) : null}
      {children}
    </Box>
  )
}

export default Aside
