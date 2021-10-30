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
      appId="RZU5DA6ADF"
      indexName="tkdodo"
      apiKey="591cc4615be3e8ed13feb3abe602516d"
    />
  )
}

export default DocSearch
