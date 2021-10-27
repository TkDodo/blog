import * as React from 'react'
import OriginalHeaderTitle from '@lekoarts/gatsby-theme-minimal-blog/src/components/header-title'
import { Flex } from '@theme-ui/components'

import DocSearch from './DocSearch'

const HeaderTitle = (props) => {
  return (
    <Flex sx={{ alignItems: 'center' }}>
      <OriginalHeaderTitle {...props} />
      <DocSearch />
    </Flex>
  )
}

export default HeaderTitle
