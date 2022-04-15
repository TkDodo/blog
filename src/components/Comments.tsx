import * as React from 'react'
import Giscus from '@giscus/react'
import { useColorMode, Box } from 'theme-ui'

const id = 'inject-comments'

const Comments = () => {
  const [colorMode] = useColorMode()

  return (
    <Giscus
      id={id}
      repo="tkdodo/blog-comments"
      repoId="MDEwOlJlcG9zaXRvcnkyOTE1MzI1NjI="
      category="Announcements"
      categoryId="DIC_kwDOEWBvEs4COl22"
      mapping="pathname"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme={colorMode === 'dark' ? 'dark' : 'light'}
      lang="en"
      loading="lazy"
    />
  )
}

export default Comments
