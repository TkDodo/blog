import Emph from './Emph'
import * as React from 'react'
import { Box, Flex } from 'theme-ui'

type Props = {
  children: React.ReactNode
  title: string
  icon?: keyof typeof icons
  color?: string
}

const Svg = ({ children }: { children: React.ReactNode }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {children}
  </svg>
)

const Bell = () => (
  <Svg>
    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
  </Svg>
)

const Info = () => (
  <Svg>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </Svg>
)

const ShieldAlert = () => (
  <Svg>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
    <path d="M12 8v4" />
    <path d="M12 16h.01" />
  </Svg>
)

const icons = {
  bell: Bell,
  info: Info,
  'shield-alert': ShieldAlert,
} as const

const Aside = ({
  children,
  title,
  icon = 'info',
  color = 'var(--theme-ui-colors-primary)',
}: Props) => {
  const Icon = icons[icon]
  return (
    <Box
      as="aside"
      sx={{
        color: 'var(--theme-ui-colors-text)',
        marginY: ['1em', '1em'],
        borderRadius: '0.5rem',
        padding: ['1em', '1em'],
        borderLeft: `6px solid ${color}`,
        overflow: 'hidden',
        backgroundColor: 'var(--theme-ui-colors-backgroundSecondary)',
        code: {
          backgroundColor:
            'var(--theme-ui-colors-backgroundTertiary) !important',
        },
        'p:last-child': {
          marginBottom: 0,
        },
        pre: {
          code: {
            backgroundColor: 'inherit !important',
          },
        },
      }}
    >
      <Flex
        sx={{
          alignItems: 'center',
          justifyContent: 'space-between',
          color,
        }}
      >
        {title && <Emph color={color}>{title}</Emph>}
        <Icon />
      </Flex>
      {children}
    </Box>
  )
}

export default Aside
