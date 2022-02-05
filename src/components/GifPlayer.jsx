import Loadable from '@loadable/component'
import 'react-gif-player/dist/gifplayer.css'

const GifPlayer = Loadable(() => import('react-gif-player'))

export default GifPlayer
