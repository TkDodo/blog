import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'

import { Link } from '@theme-ui/components'

export const QueryGG = () => (
  <Link
    href="https://query.gg/?s=dom"
    target="_blank"
    rel="noopener noreferrer"
  >
    <StaticImage
      placeholder="blurred"
      src="../../static/images/query-gg.jpg"
      alt="Query.gg - The official React Query course"
    />
  </Link>
)
