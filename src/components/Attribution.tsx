import * as React from 'react'
import { Box, Divider, Link } from '@theme-ui/components'

type Props = {
    name: string
    url: string
}

const Attribution = ({ name, url }: Props) => (
    <>
        <Box style={{ fontSize: 'smaller', textAlign: 'center' }}>
            Photo by{' '}
            <Link href={url} target="blank" rel="noreferrer noopener">
                {name}
            </Link>
        </Box>
        <Divider />
    </>
)

export default Attribution
