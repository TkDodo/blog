import type { ReactNode } from 'react'
import Emph from './Emph'

type Props = {
  icon?: 'bell' | 'info' | 'shield-alert' | 'lightbulb'
  color?: string
  title?: string
  children?: ReactNode
}

const Svg = ({ children }: { children: ReactNode }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    {children}
  </svg>
)

const icons = {
  bell: () => (
    <Svg>
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </Svg>
  ),
  info: () => (
    <Svg>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </Svg>
  ),
  'shield-alert': () => (
    <Svg>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      <path d="M12 8v4" />
      <path d="M12 16h.01" />
    </Svg>
  ),
  lightbulb: () => (
    <Svg>
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </Svg>
  ),
}

export default function Aside({ title, children, icon = 'info', color = 'var(--color-primary)' }: Props) {
  const Icon = icons[icon]

  return (
    <aside
      style={{
        color: 'var(--color-text)',
        borderLeft: `6px solid ${color}`,
        borderRadius: '0.5rem',
        padding: '1rem',
        margin: '1.25rem 0',
        overflow: 'hidden',
        backgroundColor: 'var(--color-border)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color }}>
        {title ? <Emph color={color}>{title}</Emph> : null}
        <Icon />
      </div>
      <div>{children}</div>
    </aside>
  )
}
