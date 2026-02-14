import type { ReactNode } from 'react'

type Translation = {
  language?: string
  link?: string
}

type Props = {
  children?: ReactNode
}

function isTranslation(input: unknown): input is Translation {
  if (!input || typeof input !== 'object') return false
  const entry = input as Translation
  return typeof entry.language === 'string' && typeof entry.link === 'string'
}

export default function Translations({ children }: Props) {
  if (!Array.isArray(children) || !children.length) return null

  const links = children.filter(isTranslation)
  if (!links.length) return null

  return (
    <div style={{ margin: '1rem 0' }}>
      <strong>Translations:</strong>{' '}
      {links.map((entry, index) => (
        <span key={entry.link}>
          <a href={entry.link} target="_blank" rel="noreferrer noopener">
            {entry.language}
          </a>
          {index < links.length - 1 ? ', ' : ''}
        </span>
      ))}
    </div>
  )
}
