import * as React from 'react'
import { Box, Link } from 'theme-ui'

const MonoLisa = () => {
  return (
    <Box css={{ fontFamily: 'ml, monospace', textAlign: 'center' }}>
      <Box>Like the monospace font in the code blocks?</Box>
      <Box>
        Check out{' '}
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="www.monolisa.dev/?ref=dominik"
        >
          monolisa.dev
        </Link>
      </Box>
    </Box>
  )
}

export default MonoLisa
