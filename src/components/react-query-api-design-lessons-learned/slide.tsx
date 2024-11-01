import { withPrefix } from 'gatsby'
import * as React from 'react'
import { useColorMode } from 'theme-ui'

import { Flex, Box, Text, Divider } from '@theme-ui/components'

export const Slide = ({ children, index }) => {
  const [colorMode] = useColorMode()
  return (
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
            `images/react-query-api-design-lessons-learned/${
              colorMode === 'light' ? 'light' : 'dark'
            }/${index + 1}.png`
          )})`,
        }}
      />

      <Divider />
      <Text>{children}</Text>
    </Flex>
  )
}
