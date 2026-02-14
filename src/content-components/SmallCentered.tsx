import type { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

export default function SmallCentered({ children }: Props) {
  return <small style={{ display: 'block', textAlign: 'center' }}>{children}</small>
}
