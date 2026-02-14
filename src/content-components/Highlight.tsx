import type { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

export default function Highlight({ children }: Props) {
  return (
    <mark
      style={{
        background: 'color-mix(in srgb, var(--color-primary) 25%, transparent)',
        color: 'inherit',
        padding: '0.1rem 0.35rem',
        borderRadius: '0.25rem',
      }}
    >
      {children}
    </mark>
  )
}
