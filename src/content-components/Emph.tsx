import type { CSSProperties, ReactNode } from 'react'

type Props = {
  color?: string
  children?: ReactNode
}

export default function Emph({ color, children }: Props) {
  const style: CSSProperties = {
    fontWeight: 600,
    color: color ?? 'inherit',
  }

  return <em style={style}>{children}</em>
}
