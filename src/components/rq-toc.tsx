import * as React from 'react'
import { Link, Text, Box, Flex } from '@theme-ui/components'

type Props = {
  id: string
}

const mapping = [
  { id: 'practical-react-query', title: '#1: Practical React Query' },
  {
    id: 'react-query-data-transformations',
    title: '#2: React Query Data Transformations',
  },
  {
    id: 'react-query-render-optimizations',
    title: '#3: React Query Render Optimizations',
  },
  {
    id: 'status-checks-in-react-query',
    title: '#4: Status Checks in React Query',
  },
  { id: 'testing-react-query', title: '#5: Testing React Query' },
  {
    id: 'react-query-and-type-script',
    title: '#6: React Query and TypeScript',
  },
  {
    id: 'using-web-sockets-with-react-query',
    title: '#7: Using WebSockets with React Query',
  },
  {
    id: 'effective-react-query-keys',
    title: '#8: Effective React Query Keys',
  },
  {
    id: 'leveraging-the-query-function-context',
    title: '#8a: Leveraging the Query Function Context',
  },
  {
    id: 'placeholder-and-initial-data-in-react-query',
    title: '#9: Placeholder and Initial Data in React Query',
  },
  {
    id: 'react-query-as-a-state-manager',
    title: '#10: React Query as a State Manager',
  },
  {
    id: 'react-query-error-handling',
    title: '#11: React Query Error Handling',
  },
  {
    id: 'mastering-mutations-in-react-query',
    title: '#12: Mastering Mutations in React Query',
  },
  { id: 'offline-react-query', title: '#13: Offline React Query' },
  {
    id: 'react-query-and-forms',
    title: '#14: React Query and Forms',
  },
  { id: 'react-query-fa-qs', title: '#15: React Query FAQs' },
  {
    id: 'react-query-meets-react-router',
    title: '#16: React Query meets React Router',
  },
  {
    id: 'seeding-the-query-cache',
    title: '#17: Seeding the Query Cache',
  },
  { id: 'inside-react-query', title: '#18: Inside React Query' },
  {
    id: 'type-safe-react-query',
    title: '#19: Type-safe React Query',
  },
  {
    id: 'you-might-not-need-react-query',
    title: '#20: You Might Not Need React Query',
  },
  {
    id: 'thinking-in-react-query',
    title: '#21: Thinking in React Query',
  },
  {
    id: 'react-query-and-react-context',
    title: '#22: React Query and React Context',
  },
  {
    id: 'why-you-want-react-query',
    title: '#23: Why You Want React Query',
  },
  {
    id: 'the-query-options-api',
    title: '#24: The Query Options API',
  },
  {
    id: 'automatic-query-invalidation-after-mutations',
    title: '#25: Automatic Query Invalidation after Mutations',
  },
]

export const RqToc = ({ id }: Props) => {
  return (
    <Flex
      as="ul"
      sx={{
        flexDirection: 'column',
        listStyleType: 'none',
        gap: 0.7,
        paddingTop: 2,
        paddingBottom: 4,
      }}
    >
      {mapping.map((item) => {
        if (item.id === id) {
          return (
            <Box as="li" key={item.id}>
              <Text>
                <b>{item.title}</b>
              </Text>
            </Box>
          )
        }
        return (
          <Box as="li" key={item.id}>
            <Text>
              <Link href={`./${item.id}`}>{item.title}</Link>
            </Text>
          </Box>
        )
      })}
    </Flex>
  )
}
