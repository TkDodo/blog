import * as React from 'react'
import { Box, Flex, Text } from '@theme-ui/components'

type Props = {
  votes: string
  options: ReadonlyArray<{
    id: string
    name: string
    percentage: string
    winner: boolean
  }>
}

export const TweetPoll = ({ options, votes }: Props) => {
  return (
    <Box
      as='span'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
        padding: 0
      }}
    >
      {options.map(({ id, name, percentage, winner = false }) => (
        <Flex
          as='span'
          key={id}
          sx={{
            position: 'relative',
            minHeight: '32px',
            justifyContent: 'space-between '
          }}
        >
          <Box
            as='span'
            sx={{
              zIndex: 0,
              position: 'absolute',
              width: percentage,
              borderRadius: '4px',
              minHeight: '32px',
              backgroundColor: winner
                ? 'var(--theme-ui-colors-twitterPollBgWinner)'
                : 'var(--theme-ui-colors-twitterPollBg)'
            }}
          />
          <Box
            as='span'
            sx={{
              zIndex: 1,
              flexShrink: '1',
              paddingLeft: '12px',
              paddingRight: '12px'
            }}
          >
            <Text>{winner ? <b>{name}</b> : name}</Text>
          </Box>
          <Text>{percentage}</Text>
        </Flex>
      ))}
      <Box
        as='span'
        sx={{
          fontSize: ['0.75rem', '0.75rem', 1],
          color: 'var(--theme-ui-colors-textMuted)'
        }}
      >
        {votes} votes · Final results
      </Box>
    </Box>
  )
}
