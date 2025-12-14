import * as React from 'react'
import { Link, Text, Box, Flex } from '@theme-ui/components'

type Props = {
  id: string
}

const mapping = [
  {
    id: 'designing-design-systems',
    title: '#1: Designing Design Systems',
  },
  {
    id: 'tooltip-components-should-not-exist',
    title: '#2: Tooltip Components Should Not Exist',
  },
  {
    id: 'building-type-safe-compound-components',
    title: '#3: Building Type-Safe Compound Components',
  },
]

export const DsToc = ({ id }: Props) => {
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
