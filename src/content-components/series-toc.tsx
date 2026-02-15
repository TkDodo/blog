type SeriesItem = {
	id: string
	title: string
}

type Props = {
	title: string
	currentId?: string
	items: SeriesItem[]
}

function linkFor(id: string): string {
	const base = import.meta.env.BASE_URL.replace(/\/$/, '')
	return `${base}/${id}`
}

export default function SeriesToc({ title, currentId, items }: Props) {
	return (
		<aside
			style={{
				border: '1px solid var(--color-border)',
				borderRadius: '0.5rem',
				padding: '0.75rem 1rem',
				margin: '1.25rem 0',
			}}
		>
			<p style={{ margin: '0 0 0.5rem', fontWeight: 600 }}>{title}</p>
			<ul style={{ margin: 0, paddingLeft: '1.15rem' }}>
				{items.map((item) => (
					<li key={item.id} style={{ margin: '0.25rem 0' }}>
						<a
							href={linkFor(item.id)}
							aria-current={item.id === currentId ? 'page' : undefined}
							style={item.id === currentId ? { fontWeight: 700 } : undefined}
						>
							{item.title}
						</a>
					</li>
				))}
			</ul>
		</aside>
	)
}
