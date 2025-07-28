import * as React from 'react'
import { Link, Text, Box, Flex } from '@theme-ui/components'

type Props = {
  id: string
  mapping: ReadonlyArray<{ id: string; title: string }>
}

export const Toc = ({ id, mapping }: Props) => {
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
