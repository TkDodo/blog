import * as React from 'react'

export const FixTitle = () => {
  React.useLayoutEffect(() => {
    document.querySelector('h1').innerHTML =
      'Why You <span style="position:relative"><span class="strikeThrough">Want</span></span> Need React Query'
  }, [])

  return null
}
