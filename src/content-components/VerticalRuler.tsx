type Props = {
  height?: string
}

export function VerticalRuler({ height = '4rem' }: Props) {
  return (
    <hr
      style={{
        width: '4px',
        height,
        background: 'var(--theme-ui-colors-primary)',
        margin: '5em auto',
        border: 'none',
        borderRadius: '5px',
      }}
    />
  )
}
