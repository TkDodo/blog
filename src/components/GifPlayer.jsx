import Loadable from '@loadable/component'
import 'react-gif-player/dist/gifplayer.css'
import { withPrefix } from 'gatsby'

const GifPlayer = Loadable(() => import('react-gif-player'))

export default ({ gif, still, ...props }) => (
  <GifPlayer
    {...props}
    gif={`${withPrefix(gif)}`}
    still={`${withPrefix(still)}`}
  />
)
