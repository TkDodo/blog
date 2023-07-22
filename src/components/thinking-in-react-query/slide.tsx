import { withPrefix } from 'gatsby'
import * as React from 'react'

import { Flex, Box, Text, Divider } from '@theme-ui/components'

export const Slide = ({ children, index }) => (
  <Flex
    sx={{
      cursor: 'grab',
      flexGrow: 1,
      flexDirection: 'column',
    }}
  >
    <Box
      sx={{
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        height: [300, 400, 500],
        backgroundImage: `url(${withPrefix(
          `images/thinking-in-react-query/${index + 1}.png`
        )})`,
      }}
    />

    <Divider />
    <Text>{children}</Text>
  </Flex>
)
