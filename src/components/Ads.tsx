import * as React from 'react'
import { Box } from '@theme-ui/components'

const injectScript = (
  src: string,
  id: string,
  onload: () => void
) => {
  const script = document.createElement('script')

  script.async = true
  script.id = id
  script.src = src

  script.addEventListener('load', onload)

  document.head.append(script)

  return () => {
    script.removeEventListener('load', onload)
    script.remove()
  }
}

const Ads = () => {
  React.useEffect(() => {
    return injectScript(
      'https://media.ethicalads.io/media/client/ethicalads.min.js',
      'ethical-ads',
      () => {
        ;(window as any).ethicalads?.load()
      }
    )
  }, [])

  return (
    <>
      <Box
        sx={{
          display: 'none',
          ':has(+ .loaded)': { display: 'block' },
        }}
      />
      <div
        id="blog-ad"
        data-ea-publisher="tkdodoeu"
        className="flat adaptive"
        data-ea-type="image"
        data-ea-style="stickybox"
        data-ea-manual="true"
      />
    </>
  )
}

export default Ads
