type Props = {
  gif: string
  still?: string
  alt?: string
}

export default function GifPlayer({ gif, still, alt = '' }: Props) {
  const src = still || gif

  return (
    <figure>
      <img src={`/${src}`} alt={alt} loading="lazy" />
      <figcaption style={{ opacity: 0.8, fontSize: '0.9em' }}>Animated media placeholder: {gif}</figcaption>
    </figure>
  )
}
