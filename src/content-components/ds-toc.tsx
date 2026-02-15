import SeriesToc from './series-toc'

type Props = {
  id?: string
}

const DS_SERIES = [
  { id: 'building-type-safe-compound-components', title: 'Type-Safe Compound Components' },
  { id: 'designing-design-systems', title: 'Designing Design Systems' },
  { id: 'tooltip-components-should-not-exist', title: 'Tooltip Components Should Not Exist' },
]

export function DsToc({ id }: Props) {
  if (!id) return null

  return <SeriesToc title="Design Systems Series" currentId={id} items={DS_SERIES} />
}
