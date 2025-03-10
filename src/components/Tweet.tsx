import * as React from 'react'
import { Box, Link, Flex } from 'theme-ui'
import { StaticImage } from 'gatsby-plugin-image'

const TwitterIcon = () => (
  <svg
    stroke="var(--theme-ui-colors-twitterBlue)"
    fill="var(--theme-ui-colors-twitterBlue)"
    strokeWidth="0"
    viewBox="0 0 512 512"
    height="22"
    width="22"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
  </svg>
)

const BskyIcon = () => (
  <svg
    width="22"
    height="19.47"
    viewBox="0 0 600 530"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="m135.72 44.03c66.496 49.921 138.02 151.14 164.28 205.46 26.262-54.316 97.782-155.54 164.28-205.46 47.98-36.021 125.72-63.892 125.72 24.795 0 17.712-10.155 148.79-16.111 170.07-20.703 73.984-96.144 92.854-163.25 81.433 117.3 19.964 147.14 86.092 82.697 152.22-122.39 125.59-175.91-31.511-189.63-71.766-2.514-7.3797-3.6904-10.832-3.7077-7.8964-0.0174-2.9357-1.1937 0.51669-3.7077 7.8964-13.714 40.255-67.233 197.36-189.63 71.766-64.444-66.128-34.605-132.26 82.697-152.22-67.108 11.421-142.55-7.4491-163.25-81.433-5.9562-21.282-16.111-152.36-16.111-170.07 0-88.687 77.742-60.816 125.72-24.795z"
      fill="#1185fe"
    />
  </svg>
)

const Avatar = ({ children }: { children: React.ReactNode }) => (
  <Box
    sx={{
      width: '3.5rem',
      height: '3.5rem',
      marginRight: '1rem',
    }}
  >
    {children}
  </Box>
)

export const AvatarTkDodo = () => (
  <StaticImage
    style={{ borderRadius: '50%' }}
    src="../../static/images/1021430.jpeg"
    alt="Avatar for TkDodo"
    placeholder="blurred"
  />
)

export const AvatarSathya = () => (
  <StaticImage
    style={{ borderRadius: '50%' }}
    src="../../static/images/sathya.jpg"
    alt="Avatar for Satya"
    placeholder="blurred"
  />
)

export const AvatarGabbeV_ = () => (
  <StaticImage
    style={{ borderRadius: '50%' }}
    src="../../static/images/GabbeV_.jpg"
    alt="Avatar for GabbeV_"
    placeholder="blurred"
  />
)

export const AvatarAcdlite = () => (
  <StaticImage
    style={{ borderRadius: '50%' }}
    src="../../static/images/acdlite.jpg"
    alt="Avatar for acdlite"
    placeholder="blurred"
  />
)

export const AvatarRalex1993 = () => (
  <StaticImage
    style={{ borderRadius: '50%' }}
    src="../../static/images/ralex1993.jpg"
    alt="Avatar for ralex1993"
    placeholder="blurred"
  />
)

export const AvatarT3dotgg = () => (
  <StaticImage
    style={{ borderRadius: '50%' }}
    src="../../static/images/theo_twitter.jpg"
    alt="Avatar for t3dotgg"
    placeholder="blurred"
  />
)

export const AvatarMichaelC = () => (
  <StaticImage
    style={{ borderRadius: '50%' }}
    src="../../static/images/michaelc_1991.jpeg"
    alt="Avatar for michaelc_1991"
    placeholder="blurred"
  />
)

export const AvatarMattpocockuk = () => (
  <StaticImage
    style={{ borderRadius: '50%' }}
    src="../../static/images/mattpocockuk.jpeg"
    alt="Avatar for mattpocockuk"
    placeholder="blurred"
  />
)

export const AvatarTannerlinsley = () => (
  <StaticImage
    style={{ borderRadius: '50%' }}
    src="../../static/images/tannerlinsley.jpeg"
    alt="Avatar for tannerlinsley"
    placeholder="blurred"
  />
)

export const AvatarSophiebits = () => (
  <StaticImage
    style={{ borderRadius: '50%' }}
    src="../../static/images/sophiebits.jpeg"
    alt="Avatar for sophiebits"
    placeholder="blurred"
  />
)

export const AvatarDiegohaz = () => (
  <StaticImage
    style={{ borderRadius: '50%' }}
    src="../../static/images/diegohaz.jpeg"
    alt="Avatar for diegohaz"
    placeholder="blurred"
  />
)

export const AvatarRyanflorence = () => (
  <StaticImage
    style={{ borderRadius: '50%' }}
    src="../../static/images/ryanflorence.jpeg"
    alt="Avatar for ryanflorence"
    placeholder="blurred"
  />
)

export const AvatarWillMcGugan = () => (
  <StaticImage
    style={{ borderRadius: '50%' }}
    src="../../static/images/willmcgugan.jpeg"
    alt="Avatar for willmcgugan"
    placeholder="blurred"
  />
)

export const AvatarDanvdk = () => (
  <StaticImage
    style={{ borderRadius: '50%' }}
    src="../../static/images/danvdk.jpeg"
    alt="Avatar for danvdk"
    placeholder="blurred"
  />
)

export const AvatarAcemarke = () => (
  <StaticImage
    style={{ borderRadius: '50%' }}
    src="../../static/images/acemarke.jpeg"
    alt="Avatar for acemarke"
    placeholder="blurred"
  />
)

export const AvatarAlexDotJs = () => (
  <StaticImage
    style={{ borderRadius: '50%' }}
    src="../../static/images/alexdotjs.jpg"
    alt="Avatar for alexdotjs"
    placeholder="blurred"
  />
)

export const AvatarLeeerob = () => (
  <StaticImage
    style={{ borderRadius: '50%' }}
    src="../../static/images/leeerob.jpeg"
    alt="Avatar for leeerob"
    placeholder="blurred"
  />
)

export const AvatarSwyx = () => (
  <StaticImage
    style={{ borderRadius: '50%' }}
    src="../../static/images/swyx.jpeg"
    alt="Avatar for swyx"
    placeholder="blurred"
  />
)

export const AvatarHousecor = () => (
  <StaticImage
    style={{ borderRadius: '50%' }}
    src="../../static/images/housecor.png"
    alt="Avatar for housecor"
    placeholder="blurred"
  />
)

export const AvatarMxstbr = () => (
  <StaticImage
    style={{ borderRadius: '50%' }}
    src="../../static/images/mxstbr.jpg"
    alt="Avatar for mxstbr"
    placeholder="blurred"
  />
)

export const TweetImage = ({
  children,
}: {
  children: React.ReactNode
}) => (
  <Box
    sx={{
      '> *': {
        borderRadius: '0.75rem',
      },
    }}
  >
    {children}
  </Box>
)

export const TannerAndMe = () => (
  <StaticImage
    placeholder="blurred"
    src="../../static/images/FVegS4nXwAQHskN.jpeg"
    alt="Tanner and me"
  />
)

export const TanStackQueryV5 = () => (
  <StaticImage
    placeholder="blurred"
    src="../../static/images/TanStackQueryV5.png"
    alt="TanStackQuery v5"
  />
)

export const V5390 = () => (
  <StaticImage
    placeholder="blurred"
    src="../../static/images/v5390.jpeg"
    alt="New Release v5.39.0"
  />
)

export const SathyaAndMe = () => (
  <StaticImage
    placeholder="blurred"
    src="../../static/images/GP-724-X0AAN_NK.jpeg"
    alt="Sathya and me"
  />
)

export const ContactDetailQuery = () => (
  <StaticImage
    placeholder="blurred"
    src="../../static/images/Fcnj9l0XEAMnLdV.jpeg"
    alt="A code block with the following code in it

const contactDetailQuery = (id) => ({
  queryKey: ['contacts', 'detail', id],
  queryFn: async () => getContact(id),
})

...

queryClient.fetchQuery(
  contactDetailQuery(params.contactId)
)

...

useQuery(contactDetailQuery(params.contactId))"
  />
)

export const SelfieInception = () => (
  <StaticImage
    placeholder="blurred"
    src="../../static/images/FxnXEGVX0AEeYAf.jpeg"
    alt="selfie inception"
  />
)

export const QueryGGImage = () => (
  <StaticImage
    placeholder="blurred"
    src="../../static/images/eC_qCxd4.jpeg"
    alt="Query.gg - The Official React Query Course"
  />
)

export const CynicsVsBuilders = () => (
  <StaticImage
    placeholder="blurred"
    src="../../static/images/EXx9RHYVAAUgegZ.jpeg"
    alt="Cynics vs Builders"
  />
)

export const SeparationOfConcerns = () => (
  <StaticImage
    placeholder="blurred"
    src="../../static/images/separation_of_concerns.jpeg"
    alt="Cynics vs Builders"
  />
)

export const UseEvent = () => (
  <StaticImage
    placeholder="blurred"
    src="../../static/images/FSJNvbJWUAIVEGB.jpeg"
    alt="Screenshot of code where a useEvent function is defined and used. Text version available on the link in the tweet."
  />
)

function Tweet({
  tweetId,
  handle,
  name,
  children,
  avatar,
  date,
  type = 'x',
}: {
  tweetId: string
  handle: string
  children: string
  name: string
  avatar: React.ReactNode
  date: Date
  type: 'x' | 'bsky'
}) {
  const href =
    type === 'bsky'
      ? `https://bsky.app/profile/${handle}/post/${tweetId}`
      : `https://x.com/${handle}/status/${tweetId}`

  return (
    <Link
      sx={{
        color: 'var(--theme-ui-colors-text)',
        textDecoration: 'none !important',
        display: 'block',
        width: '100%',
        maxWidth: '550px',
        marginY: ['1em', '1.125em'],
        position: 'relative',
        borderRadius: '0.5rem',
        padding: '1.5rem',
        fontSize: [1, 1, 2],
        border:
          '1px solid var(--theme-ui-colors-backgroundSecondary)',
        '&:hover': {
          backgroundColor:
            'var(--theme-ui-colors-backgroundSecondary)',
        },
      }}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Box sx={{ position: 'absolute', right: '1rem', top: '1rem' }}>
        {type === 'bsky' ? <BskyIcon /> : <TwitterIcon />}
      </Box>
      <Flex>
        <Avatar>{avatar}</Avatar>
        <Box>
          <Box
            sx={{
              fontWeight: 600,
            }}
          >
            {name}
          </Box>
          <Box
            sx={{
              fontSize: ['0.75rem', '0.75rem', 1],
              lineHeight: '0.75rem',
              color: 'var(--theme-ui-colors-textMuted)',
            }}
          >
            @{handle}
          </Box>
        </Box>
      </Flex>
      <Box sx={{ marginTop: '1rem', marginBottom: '1rem' }}>
        {children}
      </Box>
      <Box
        sx={{
          fontSize: ['0.75rem', '0.75rem', 1],
          color: 'var(--theme-ui-colors-textMuted)',
        }}
      >
        -{' '}
        {Intl.DateTimeFormat(undefined, {
          dateStyle: 'medium',
        }).format(date)}
      </Box>
    </Link>
  )
}

export default Tweet
