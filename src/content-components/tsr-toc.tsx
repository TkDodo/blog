type Props = {
  id?: string
}

export function TsrToc({ id }: Props) {
  if (!id) return null

  return (
    <p>
      Series table-of-contents placeholder: <code>{id}</code>
    </p>
  )
}
