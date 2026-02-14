type Props = {
  height?: string
}

export function VerticalRuler({ height = '4rem' }: Props) {
  return <div style={{ width: '1px', height, background: 'var(--color-border)', margin: '1rem auto' }} />
}
