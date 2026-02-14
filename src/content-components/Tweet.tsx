import type { ReactNode } from 'react'

type Props = {
  user?: string
  handle?: string
  date?: string
  href?: string
  children?: ReactNode
}

function Avatar({ children }: { children: ReactNode }) {
  return <>{children}</>
}

export const AvatarTkDodo = () => <Avatar>@TkDodo</Avatar>
export const AvatarSathya = () => <Avatar>@sathya</Avatar>
export const AvatarGabbeV_ = () => <Avatar>@gabbe_v_</Avatar>
export const AvatarAcdlite = () => <Avatar>@acdlite</Avatar>
export const AvatarRalex1993 = () => <Avatar>@ralex1993</Avatar>
export const AvatarT3dotgg = () => <Avatar>@t3dotgg</Avatar>
export const AvatarMichaelC = () => <Avatar>@michaelc</Avatar>
export const AvatarMattpocockuk = () => <Avatar>@mattpocockuk</Avatar>
export const AvatarTannerlinsley = () => <Avatar>@tannerlinsley</Avatar>
export const AvatarSophiebits = () => <Avatar>@sophiebits</Avatar>
export const AvatarDiegohaz = () => <Avatar>@diegohaz</Avatar>
export const AvatarRyanflorence = () => <Avatar>@ryanflorence</Avatar>
export const AvatarWillMcGugan = () => <Avatar>@willmcgugan</Avatar>
export const AvatarDanvdk = () => <Avatar>@danvdk</Avatar>
export const AvatarAcemarke = () => <Avatar>@acemarke</Avatar>
export const AvatarAlexDotJs = () => <Avatar>@alexdotjs</Avatar>
export const AvatarLeeerob = () => <Avatar>@leeerob</Avatar>
export const AvatarSwyx = () => <Avatar>@swyx</Avatar>
export const AvatarHousecor = () => <Avatar>@housecor</Avatar>
export const AvatarMxstbr = () => <Avatar>@mxstbr</Avatar>

export function TweetImage({ children }: { children: ReactNode }) {
  return <div>{children}</div>
}

export const TannerAndMe = () => <div>Image placeholder</div>
export const TanStackQueryV5 = () => <div>Image placeholder</div>
export const V5390 = () => <div>Image placeholder</div>
export const SathyaAndMe = () => <div>Image placeholder</div>
export const ContactDetailQuery = () => <div>Image placeholder</div>
export const SelfieInception = () => <div>Image placeholder</div>
export const QueryGGImage = () => <div>Image placeholder</div>
export const ADayOnTheOrangeSite = () => <div>Image placeholder</div>
export const CynicsVsBuilders = () => <div>Image placeholder</div>
export const SeparationOfConcerns = () => <div>Image placeholder</div>
export const UseEvent = () => <div>Image placeholder</div>

export default function Tweet({ user, handle, date, href }: Props) {
  return (
    <blockquote style={{ borderLeft: '3px solid var(--color-border)', paddingLeft: '1rem' }}>
      <p style={{ marginBottom: '0.5rem' }}>Embedded social post placeholder.</p>
      <footer style={{ opacity: 0.8, fontSize: '0.9em' }}>
        {user || handle || 'Social post'} {date ? `· ${date}` : ''}{' '}
        {href ? (
          <a href={href} target="_blank" rel="noreferrer noopener">
            Link
          </a>
        ) : null}
      </footer>
    </blockquote>
  )
}
