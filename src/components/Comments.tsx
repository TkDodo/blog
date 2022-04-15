import * as React from 'react'
import { useColorMode, Box } from 'theme-ui'

const id = 'inject-comments'

type Props = {
  children?: React.ReactNode
}

const Comments = ({ children }: Props) => {
  const [colorMode] = useColorMode()

  React.useEffect(() => {
    const script = document.createElement('script')
    const parent = document.getElementById(id)

    script.setAttribute('src', 'https://giscus.app/client.js')
    script.setAttribute('data-repo', 'tkdodo/blog-comments')
    script.setAttribute('data-repo-id', 'MDEwOlJlcG9zaXRvcnkyOTE1MzI1NjI=')
    script.setAttribute('data-category', 'Announcements')
    script.setAttribute('data-category-id', 'DIC_kwDOEWBvEs4COl22')
    script.setAttribute('data-mapping', 'pathname')
    script.setAttribute('data-reactions-enabled', '1')
    script.setAttribute('data-emit-metadata', '0')
    script.setAttribute('data-input-position', 'top')
    script.setAttribute('data-lang', 'en')
    script.setAttribute('data-loading', 'lazy')

    script.setAttribute(
      'data-theme',
      colorMode === 'dark' ? 'github-dark' : 'github-light'
    )

    script.setAttribute('crossorigin', 'anonymous')
    script.setAttribute('async', 'true')
    parent.appendChild(script)

    return () => {
      while (parent.firstChild) {
        parent.removeChild(parent.lastChild)
      }
    }
  }, [colorMode])

  return (
    <>
      {children && <Box sx={{ fontSize: [1, 1, 2] }}>{children}</Box>}
      <div id={id} />
    </>
  )
}

export default Comments
