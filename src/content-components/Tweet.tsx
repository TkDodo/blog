import type { ReactNode } from 'react'

type TweetType = 'x' | 'twitter' | 'bsky'

type Props = {
	tweetId: string
	handle: string
	name: string
	avatar?: ReactNode
	children?: ReactNode
	date: Date | string
	type?: TweetType
}

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
	<svg width="22" height="19.47" viewBox="0 0 600 530" xmlns="http://www.w3.org/2000/svg">
		<path
			d="m135.72 44.03c66.496 49.921 138.02 151.14 164.28 205.46 26.262-54.316 97.782-155.54 164.28-205.46 47.98-36.021 125.72-63.892 125.72 24.795 0 17.712-10.155 148.79-16.111 170.07-20.703 73.984-96.144 92.854-163.25 81.433 117.3 19.964 147.14 86.092 82.697 152.22-122.39 125.59-175.91-31.511-189.63-71.766-2.514-7.3797-3.6904-10.832-3.7077-7.8964-0.0174-2.9357-1.1937 0.51669-3.7077 7.8964-13.714 40.255-67.233 197.36-189.63 71.766-64.444-66.128-34.605-132.26 82.697-152.22-67.108 11.421-142.55-7.4491-163.25-81.433-5.9562-21.282-16.111-152.36-16.111-170.07 0-88.687 77.742-60.816 125.72-24.795z"
			fill="#1185fe"
		/>
	</svg>
)

function avatarSrc(handle: string): string | null {
	const key = handle.toLowerCase()
	const map: Record<string, string> = {
		tkdodo: '/images/1021430.jpeg',
		'gsathya.bsky.social': '/images/sathya.jpg',
		gsathya: '/images/sathya.jpg',
		avatar_sophiebits: '/images/sophiebits.jpeg',
		sophiebits: '/images/sophiebits.jpeg',
		gabbe_v_: '/images/GabbeV_.jpg',
		acdlite: '/images/acdlite.jpg',
		ralex1993: '/images/ralex1993.jpg',
		t3dotgg: '/images/theo_twitter.jpg',
		michaelc_1991: '/images/michaelc_1991.jpeg',
		mattpocockuk: '/images/mattpocockuk.jpeg',
		tannerlinsley: '/images/tannerlinsley.jpeg',
		diegohaz: '/images/diegohaz.jpeg',
		ryanflorence: '/images/ryanflorence.jpeg',
		willmcgugan: '/images/willmcgugan.jpeg',
		danvdk: '/images/danvdk.jpeg',
		acemarke: '/images/acemarke.jpeg',
		alexdotjs: '/images/alexdotjs.jpg',
		leeerob: '/images/leeerob.jpeg',
		swyx: '/images/swyx.jpeg',
		housecor: '/images/housecor.png',
		mxstbr: '/images/mxstbr.jpg',
	}
	return map[key] ?? null
}

const AvatarImage = ({ handle, name }: { handle: string; name: string }) => {
	const src = avatarSrc(handle)
	if (!src)
		return <div style={{ width: '3.5rem', height: '3.5rem', marginRight: '1rem' }} aria-hidden="true" />

	return (
		<div style={{ width: '3.5rem', height: '3.5rem', marginRight: '1rem' }}>
			<img
				style={{ borderRadius: '50%', width: '100%', height: '100%', objectFit: 'cover' }}
				src={src}
				alt={`Avatar for ${name}`}
				loading="lazy"
			/>
		</div>
	)
}

export const AvatarTkDodo = () => null
export const AvatarSathya = () => null
export const AvatarGabbeV_ = () => null
export const AvatarAcdlite = () => null
export const AvatarRalex1993 = () => null
export const AvatarT3dotgg = () => null
export const AvatarMichaelC = () => null
export const AvatarMattpocockuk = () => null
export const AvatarTannerlinsley = () => null
export const AvatarSophiebits = () => null
export const AvatarDiegohaz = () => null
export const AvatarRyanflorence = () => null
export const AvatarWillMcGugan = () => null
export const AvatarDanvdk = () => null
export const AvatarAcemarke = () => null
export const AvatarAlexDotJs = () => null
export const AvatarLeeerob = () => null
export const AvatarSwyx = () => null
export const AvatarHousecor = () => null
export const AvatarMxstbr = () => null

export const TweetImage = ({ children }: { children: ReactNode }) => (
	<div
		style={{
			borderRadius: '0.75rem',
			overflow: 'hidden',
		}}
	>
		{children}
	</div>
)

function TweetIllustration({ src, alt }: { src: string; alt: string }) {
	return <img src={src} alt={alt} loading="lazy" />
}

export const TannerAndMe = () => <TweetIllustration src="/images/FVegS4nXwAQHskN.jpeg" alt="Tanner and me" />
export const TanStackQueryV5 = () => <TweetIllustration src="/images/TanStackQueryV5.png" alt="TanStackQuery v5" />
export const V5390 = () => <TweetIllustration src="/images/v5390.jpeg" alt="New Release v5.39.0" />
export const SathyaAndMe = () => <TweetIllustration src="/images/GP-724-X0AAN_NK.jpeg" alt="Sathya and me" />
export const ContactDetailQuery = () => <TweetIllustration src="/images/Fcnj9l0XEAMnLdV.jpeg" alt="Contact detail query code screenshot" />
export const SelfieInception = () => <TweetIllustration src="/images/FxnXEGVX0AEeYAf.jpeg" alt="selfie inception" />
export const QueryGGImage = () => <TweetIllustration src="/images/eC_qCxd4.jpeg" alt="Query.gg - The official React Query course" />
export const ADayOnTheOrangeSite = () => <TweetIllustration src="/images/bafkreiazq5owsx6neqzgvjquwenob6su4kgd7zzl3z5ytfq4oywwjwbis4.jpg" alt="Unique visitor stats outlier" />
export const CynicsVsBuilders = () => <TweetIllustration src="/images/EXx9RHYVAAUgegZ.jpeg" alt="Cynics vs Builders" />
export const SeparationOfConcerns = () => <TweetIllustration src="/images/separation_of_concerns.jpeg" alt="Separation of concerns" />
export const UseEvent = () => <TweetIllustration src="/images/FSJNvbJWUAIVEGB.jpeg" alt="useEvent code screenshot" />

function normalizeType(type: TweetType): 'x' | 'bsky' {
	return type === 'bsky' ? 'bsky' : 'x'
}

export default function Tweet({
	tweetId,
	handle,
	name,
	children,
	date,
	type = 'x',
}: Props) {
	const normalizedType = normalizeType(type)
	const href = normalizedType === 'bsky'
		? `https://bsky.app/profile/${handle}/post/${tweetId}`
		: `https://x.com/${handle}/status/${tweetId}`
	const dateValue = date instanceof Date ? date : new Date(date)

	return (
		<a
			style={{
				color: 'var(--theme-ui-colors-text)',
				textDecoration: 'none',
				display: 'block',
				width: '100%',
				maxWidth: '550px',
				margin: '1em 0',
				position: 'relative',
				borderRadius: '0.5rem',
				padding: '1.5rem',
				fontSize: '1rem',
				border: '1px solid var(--theme-ui-colors-backgroundSecondary)',
			}}
			href={href}
			target="_blank"
			rel="noopener noreferrer"
		>
			<div style={{ position: 'absolute', right: '1rem', top: '1rem' }}>
				{normalizedType === 'bsky' ? <BskyIcon /> : <TwitterIcon />}
			</div>
			<div style={{ display: 'flex' }}>
				<AvatarImage handle={handle} name={name} />
				<div>
					<div style={{ fontWeight: 600 }}>{name}</div>
					<div style={{ fontSize: '0.85rem', lineHeight: '0.95rem', color: 'var(--theme-ui-colors-textMuted)' }}>
						@{handle}
					</div>
				</div>
			</div>
			<div style={{ marginTop: '1rem', marginBottom: '1rem' }}>{children}</div>
			<div style={{ fontSize: '0.85rem', color: 'var(--theme-ui-colors-textMuted)' }}>
				- {Intl.DateTimeFormat(undefined, { dateStyle: 'medium' }).format(dateValue)}
			</div>
		</a>
	)
}
