import * as React from 'react'

const Ads = () => {
  React.useLayoutEffect(() => {
    ;(window as any).ethicalads?.load()
  }, [])

  return (
    <div
      id="blog-ad"
      data-ea-publisher="tkdodoeu"
      className="flat adaptive"
      data-ea-type="image"
      data-ea-style="stickybox"
      data-ea-manual="true"
    />
  )
}

export default Ads
