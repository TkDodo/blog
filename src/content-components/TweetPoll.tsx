type Option = {
	id: string
	name: string
	percentage: string
	winner?: boolean
}

type Props = {
	options: Option[]
	votes: string
}

export function TweetPoll({ options, votes }: Props) {
	return (
		<span style={{ display: 'flex', flexDirection: 'column', gap: '4px', padding: 0 }}>
			{options.map(({ id, name, percentage, winner = false }) => (
				<span
					key={id}
					style={{
						position: 'relative',
						minHeight: '32px',
						display: 'flex',
						justifyContent: 'space-between',
					}}
				>
					<span
						style={{
							zIndex: 0,
							position: 'absolute',
							width: percentage,
							borderRadius: '4px',
							minHeight: '32px',
							backgroundColor: winner
								? 'var(--theme-ui-colors-twitterPollBgWinner)'
								: 'var(--theme-ui-colors-twitterPollBg)',
						}}
					/>
					<span style={{ zIndex: 1, flexShrink: '1', paddingLeft: '12px', paddingRight: '12px' }}>
						{winner ? <b>{name}</b> : name}
					</span>
					<span>{percentage}</span>
				</span>
			))}
			<span style={{ fontSize: '0.85rem', color: 'var(--theme-ui-colors-textMuted)' }}>
				{votes} votes · Final results
			</span>
		</span>
	)
}
