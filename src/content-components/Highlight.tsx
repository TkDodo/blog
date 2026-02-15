import type { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

export default function Highlight({ children }: Props) {
	return (
		<div
			style={{
				textAlign: 'center',
				fontSize: '0.95em',
				padding: '0.6rem 1rem',
				borderRadius: '0.5rem',
				border: '2px solid var(--theme-ui-colors-primary)',
				boxShadow: '0 0 8px rgba(0, 0, 0, 0.125)',
			}}
		>
			<strong style={{ letterSpacing: '0.05em', color: 'var(--theme-ui-colors-primary)' }}>{children}</strong>
		</div>
	)
}
