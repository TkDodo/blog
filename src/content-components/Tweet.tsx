import type { ReactNode } from 'react'

type Props = {
  name?: string
  user?: string
  handle?: string
  tweetId?: string
  type?: 'twitter' | 'x' | 'bsky'
  avatar?: ReactNode
  date?: string | Date
  href?: string
  children?: ReactNode
}

function Avatar({ children }: { children: ReactNode }) {
  return <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>{children}</span>
}

function AvatarImg({ alt, src }: { alt: string; src: string }) {
  return <img alt={alt} src={src} width={28} height={28} style={{ borderRadius: '999px', display: 'inline-block' }} />
}

export const AvatarTkDodo = () => <Avatar><AvatarImg alt="TkDodo avatar" src="/images/profile.jpg" /></Avatar>
export const AvatarSathya = () => <Avatar><AvatarImg alt="Sathya avatar" src="/images/sathya.jpg" /></Avatar>
export const AvatarGabbeV_ = () => <Avatar><AvatarImg alt="GabbeV avatar" src="/images/GabbeV_.jpg" /></Avatar>
export const AvatarAcdlite = () => <Avatar><AvatarImg alt="Acdlite avatar" src="/images/acdlite.jpg" /></Avatar>
export const AvatarRalex1993 = () => <Avatar><AvatarImg alt="Ralex avatar" src="/images/ralex1993.jpg" /></Avatar>
export const AvatarT3dotgg = () => <Avatar><AvatarImg alt="Theo avatar" src="/images/theo_twitter.jpg" /></Avatar>
export const AvatarMichaelC = () => <Avatar><AvatarImg alt="Michael avatar" src="/images/michaelc_1991.jpeg" /></Avatar>
export const AvatarMattpocockuk = () => <Avatar><AvatarImg alt="Matt Pocock avatar" src="/images/mattpocockuk.jpeg" /></Avatar>
export const AvatarTannerlinsley = () => <Avatar><AvatarImg alt="Tanner Linsley avatar" src="/images/tannerlinsley.jpeg" /></Avatar>
export const AvatarSophiebits = () => <Avatar><AvatarImg alt="Sophiebits avatar" src="/images/sophiebits.jpeg" /></Avatar>
export const AvatarDiegohaz = () => <Avatar><AvatarImg alt="Diegohaz avatar" src="/images/diegohaz.jpeg" /></Avatar>
export const AvatarRyanflorence = () => <Avatar><AvatarImg alt="Ryan Florence avatar" src="/images/ryanflorence.jpeg" /></Avatar>
export const AvatarWillMcGugan = () => <Avatar><AvatarImg alt="Will McGugan avatar" src="/images/willmcgugan.jpeg" /></Avatar>
export const AvatarDanvdk = () => <Avatar><AvatarImg alt="Danvdk avatar" src="/images/danvdk.jpeg" /></Avatar>
export const AvatarAcemarke = () => <Avatar><AvatarImg alt="Acemarke avatar" src="/images/acemarke.jpeg" /></Avatar>
export const AvatarAlexDotJs = () => <Avatar><AvatarImg alt="Alexdotjs avatar" src="/images/alexdotjs.jpg" /></Avatar>
export const AvatarLeeerob = () => <Avatar><AvatarImg alt="Leeerob avatar" src="/images/leeerob.jpeg" /></Avatar>
export const AvatarSwyx = () => <Avatar><AvatarImg alt="Swyx avatar" src="/images/swyx.jpeg" /></Avatar>
export const AvatarHousecor = () => <Avatar><AvatarImg alt="Housecor avatar" src="/images/housecor.png" /></Avatar>
export const AvatarMxstbr = () => <Avatar><AvatarImg alt="Mxstbr avatar" src="/images/mxstbr.jpg" /></Avatar>

export function TweetImage({ children }: { children: ReactNode }) {
  return <div style={{ marginTop: '0.5rem' }}>{children}</div>
}

function TweetIllustration({ src, alt }: { src: string; alt: string }) {
  return <img src={src} alt={alt} style={{ width: '100%', borderRadius: '0.5rem' }} loading="lazy" />
}

export const TannerAndMe = () => <TweetIllustration src="/images/tannerlinsley.jpeg" alt="Tanner and me" />
export const TanStackQueryV5 = () => <TweetIllustration src="/images/TanStackQueryV5.png" alt="TanStack Query v5 announcement" />
export const V5390 = () => <TweetIllustration src="/images/v5390.jpeg" alt="v5.39.0 announcement" />
export const SathyaAndMe = () => <TweetIllustration src="/images/sathya.jpg" alt="Sathya and me" />
export const ContactDetailQuery = () => <TweetIllustration src="/images/FSJNvbJWUAIVEGB.jpeg" alt="Contact detail query screenshot" />
export const SelfieInception = () => <TweetIllustration src="/images/FxnXEGVX0AEeYAf.jpeg" alt="Selfie inception" />
export const QueryGGImage = () => <TweetIllustration src="/images/query-gg.jpg" alt="Query.gg" />
export const ADayOnTheOrangeSite = () => <TweetIllustration src="/images/GP-724-X0AAN_NK.jpeg" alt="A day on the orange site" />
export const CynicsVsBuilders = () => <TweetIllustration src="/images/FVegS4nXwAQHskN.jpeg" alt="Cynics vs builders" />
export const SeparationOfConcerns = () => <TweetIllustration src="/images/separation_of_concerns.jpeg" alt="Separation of concerns" />
export const UseEvent = () => <TweetIllustration src="/images/EXx9RHYVAAUgegZ.jpeg" alt="useEvent tweet image" />

export default function Tweet({ name, user, handle, tweetId, type = 'twitter', date, href, children }: Props) {
  const permalink = href ?? (handle && tweetId
    ? type === 'bsky'
      ? `https://bsky.app/profile/${handle}/post/${tweetId}`
      : `https://x.com/${handle}/status/${tweetId}`
    : undefined)
  const author = name ?? user ?? handle ?? 'Social post'
  const dateString = date ? new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }) : undefined

  return (
    <blockquote
      style={{
        border: '1px solid var(--color-border)',
        borderRadius: '0.5rem',
        padding: '1rem',
        margin: '1.25rem 0',
      }}
    >
      <header style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
        <span style={{ fontWeight: 600 }}>{author}</span>
        {handle ? <span style={{ opacity: 0.75 }}>@{handle}</span> : null}
      </header>
      <div>{children}</div>
      <footer style={{ opacity: 0.8, fontSize: '0.9em', marginTop: '0.75rem' }}>
        {dateString ? <span>{dateString}</span> : null}
        {permalink ? (
          <>
            {dateString ? ' · ' : ''}
            <a href={permalink} target="_blank" rel="noreferrer noopener">
              View original
            </a>
          </>
        ) : null}
        {type === 'bsky' ? (
          <>
            {permalink || dateString ? ' · ' : ''}
            Bluesky
          </>
        ) : null}
        {type !== 'bsky' ? (
          <>
            {permalink || dateString ? ' · ' : ''}
            X / Twitter
          </>
        ) : null}
      </footer>
      {!permalink && (
        <p style={{ marginTop: '0.5rem', opacity: 0.8 }}>
          Direct link unavailable.
        </p>
      )}
      {!children && (
        <p style={{ marginTop: '0.5rem', opacity: 0.8 }}>
          Embedded social post.
        </p>
      )}
      {href ? (
        <p style={{ marginTop: '0.5rem' }}>
          <a href={href} target="_blank" rel="noreferrer noopener">
            Open link
          </a>
        </p>
      ) : null}
    </blockquote>
  )
}
