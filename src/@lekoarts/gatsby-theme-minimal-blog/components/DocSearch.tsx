import * as React from 'react'
import { DocSearch as AlogliaDocSearch } from '@docsearch/react'
import { useColorMode } from 'theme-ui'

import '@docsearch/css'

const DocSearch = () => {
  const [colorMode] = useColorMode()

  React.useEffect(() => {
    document.querySelector('html').setAttribute('data-theme', colorMode)
  }, [colorMode])

  return (
    <AlogliaDocSearch
      appId="BH4D9OD16A"
      indexName="tkdodo"
      apiKey="0806f620326cb123041c2adec6228168"
    />
  )
}

export default DocSearch
