type Props = {
  id?: string
}

export function DsToc({ id }: Props) {
  if (!id) return null

  return (
    <p>
      Series table-of-contents placeholder: <code>{id}</code>
    </p>
  )
}
