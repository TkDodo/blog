import * as React from 'react'
import { Box, Divider, Link } from '@theme-ui/components'

type Props = {
    name: string
    url: string
    prefix?: string
}

const Attribution = ({ name, url, prefix = 'Photo by' }: Props) => (
    <>
        <Box style={{ fontSize: 'smaller', textAlign: 'center' }}>
            {prefix}{' '}
            <Link href={url} target="blank" rel="noreferrer noopener">
                {name}
            </Link>
        </Box>
        <Divider />
    </>
)

export default Attribution
