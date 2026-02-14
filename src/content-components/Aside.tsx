import type { ReactNode } from 'react'

type Props = {
  title?: string
  children?: ReactNode
}

export default function Aside({ title, children }: Props) {
  return (
    <aside
      style={{
        border: '1px solid var(--color-border)',
        borderLeft: '4px solid var(--color-primary)',
        borderRadius: '0.5rem',
        padding: '0.75rem 1rem',
        margin: '1.25rem 0',
      }}
    >
      {title ? <p style={{ marginTop: 0, fontWeight: 600 }}>{title}</p> : null}
      <div>{children}</div>
    </aside>
  )
}
