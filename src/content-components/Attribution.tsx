import type { ReactNode } from 'react'

type Props = {
  name?: string
  url?: string
  prefix?: string
  children?: ReactNode
}

export default function Attribution({ name, url, prefix = 'Photo by', children }: Props) {
  if (!name && !children) return null

  return (
    <p style={{ opacity: 0.8, fontSize: '0.95em' }}>
      {prefix}{' '}
      {url ? (
        <a href={url} target="_blank" rel="noreferrer noopener">
          {name}
        </a>
      ) : (
        name
      )}
      {children}
    </p>
  )
}
