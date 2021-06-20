import * as React from 'react'
import { useColorMode, Box, Divider } from 'theme-ui'

const id = 'inject-comments'

type Props = {
  children?: React.ReactNode
  withSeparator: boolean
}

const Comments = ({ children, withSeparator = true }: Props) => {
  const [colorMode] = useColorMode()

  React.useEffect(() => {
    const script = document.createElement('script')
    const parent = document.getElementById(id)

    script.setAttribute('src', 'https://utteranc.es/client.js')
    script.setAttribute('repo', 'TkDodo/blog-comments')
    script.setAttribute('issue-term', 'pathname')
    script.setAttribute(
      'theme',
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
      {withSeparator && <Divider />}
      {children && <Box sx={{ fontSize: [1, 1, 2] }}>{children}</Box>}
      <div id={id} />
    </>
  )
}

export default Comments
