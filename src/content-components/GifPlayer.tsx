import { useState } from 'react'

type Props = {
  gif: string
  still?: string
  alt?: string
}

export default function GifPlayer({ gif, still, alt = '' }: Props) {
  const [playing, setPlaying] = useState(false)
  const stillSrc = still || gif
  const src = playing ? gif : stillSrc

  return (
    <figure style={{ margin: '1rem 0' }}>
      <button
        type="button"
        onClick={() => setPlaying(prev => !prev)}
        style={{
          display: 'block',
          border: '1px solid var(--theme-ui-colors-backgroundSecondary)',
          borderRadius: '0.5rem',
          padding: 0,
          overflow: 'hidden',
          cursor: 'pointer',
          background: 'transparent',
        }}
        aria-label={playing ? 'Pause animation' : 'Play animation'}
      >
        <img src={`/${src}`} alt={alt} loading="lazy" />
      </button>
      <figcaption style={{ opacity: 0.8, fontSize: '0.9em' }}>
        {playing ? 'Playing animation' : 'Click image to play animation'}
      </figcaption>
    </figure>
  )
}
