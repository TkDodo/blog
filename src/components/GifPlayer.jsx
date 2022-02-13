import * as React from 'react'
import Loadable from '@loadable/component'
import 'react-gif-player/dist/gifplayer.css'
import { withPrefix } from 'gatsby'

const ReactGifPlayer = Loadable(() => import('react-gif-player'))

const GifPlayer = ({ gif, still, ...props }) => (
  <ReactGifPlayer
    {...props}
    gif={`${withPrefix(gif)}`}
    still={`${withPrefix(still)}`}
  />
)

export default GifPlayer
