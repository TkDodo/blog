import * as React from 'react'
import { Box, Divider, Link } from '@theme-ui/components'

type Props = {
  name: string
  url: string
  prefix?: string
}

const Attribution = ({ name, url, prefix = 'Photo by' }: Props) => (
  <>
    <Box
      sx={{
        fontSize: 'smaller',
        textAlign: 'center',
        marginTop: ['-1rem', '-1rem', '-3rem'],
        marginBottom: '1rem',
      }}
    >
      {prefix}{' '}
      <Link href={url} target="_blank" rel="noreferrer noopener">
        {name}
      </Link>
    </Box>
    <Divider />
  </>
)

export default Attribution
