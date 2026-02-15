import { isValidElement, type ReactNode } from "react";

type TweetType = "x" | "twitter" | "bsky";

type Props = {
  tweetId: string;
  handle: string;
  name: string;
  avatar?: ReactNode;
  children?: ReactNode;
  date: Date | string;
  type?: TweetType;
};

const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");
const withBasePath = (url: string) =>
  url.startsWith("/") ? `${basePath}${url}` : url;

const TwitterIcon = () => (
  <svg
    stroke="var(--color-twitter-blue)"
    fill="var(--color-twitter-blue)"
    strokeWidth="0"
    viewBox="0 0 512 512"
    height="22"
    width="22"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
  </svg>
);

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
);

function avatarSrc(handle: string): string | null {
  const key = handle.toLowerCase();
  const normalized = key.replace(/^avatar[_-]?/, "");
  const map: Record<string, string> = {
    tkdodo: "/images/1021430.jpeg",
    "gsathya.bsky.social": "/images/sathya.jpg",
    gsathya: "/images/sathya.jpg",
    avatar_sophiebits: "/images/sophiebits.jpeg",
    sophiebits: "/images/sophiebits.jpeg",
    gabbe_v_: "/images/GabbeV_.jpg",
    acdlite: "/images/acdlite.jpg",
    ralex1993: "/images/ralex1993.jpg",
    t3dotgg: "/images/theo_twitter.jpg",
    michaelc_1991: "/images/michaelc_1991.jpeg",
    mattpocockuk: "/images/mattpocockuk.jpeg",
    tannerlinsley: "/images/tannerlinsley.jpeg",
    diegohaz: "/images/diegohaz.jpeg",
    ryanflorence: "/images/ryanflorence.jpeg",
    willmcgugan: "/images/willmcgugan.jpeg",
    danvdk: "/images/danvdk.jpeg",
    acemarke: "/images/acemarke.jpeg",
    alexdotjs: "/images/alexdotjs.jpg",
    leeerob: "/images/leeerob.jpeg",
    swyx: "/images/swyx.jpeg",
    housecor: "/images/housecor.png",
    mxstbr: "/images/mxstbr.jpg",
  };
  const src = map[key] ?? map[normalized];
  return src ? withBasePath(src) : null;
}

const avatarImageClass = "h-full w-full rounded-full object-cover";

const Avatar = ({ children }: { children?: ReactNode }) => (
  <div className="mr-4 h-14 w-14">{children}</div>
);

const AvatarImage = ({ handle, name }: { handle: string; name: string }) => {
  const src = avatarSrc(handle);
  if (!src) return <div className="h-full w-full" aria-hidden="true" />;
  return (
    <img
      className={avatarImageClass}
      src={src}
      alt={`Avatar for ${name}`}
      loading="lazy"
    />
  );
};

const AvatarAsset = ({ src, alt }: { src: string; alt: string }) => (
  <img
    className={avatarImageClass}
    src={withBasePath(src)}
    alt={alt}
    loading="lazy"
  />
);

export const AvatarTkDodo = () => (
  <AvatarAsset src="/images/1021430.jpeg" alt="Avatar for TkDodo" />
);
export const AvatarSathya = () => (
  <AvatarAsset src="/images/sathya.jpg" alt="Avatar for Satya" />
);
export const AvatarGabbeV_ = () => (
  <AvatarAsset src="/images/GabbeV_.jpg" alt="Avatar for GabbeV_" />
);
export const AvatarAcdlite = () => (
  <AvatarAsset src="/images/acdlite.jpg" alt="Avatar for acdlite" />
);
export const AvatarRalex1993 = () => (
  <AvatarAsset src="/images/ralex1993.jpg" alt="Avatar for ralex1993" />
);
export const AvatarT3dotgg = () => (
  <AvatarAsset src="/images/theo_twitter.jpg" alt="Avatar for t3dotgg" />
);
export const AvatarMichaelC = () => (
  <AvatarAsset
    src="/images/michaelc_1991.jpeg"
    alt="Avatar for michaelc_1991"
  />
);
export const AvatarMattpocockuk = () => (
  <AvatarAsset src="/images/mattpocockuk.jpeg" alt="Avatar for mattpocockuk" />
);
export const AvatarTannerlinsley = () => (
  <AvatarAsset
    src="/images/tannerlinsley.jpeg"
    alt="Avatar for tannerlinsley"
  />
);
export const AvatarSophiebits = () => (
  <AvatarAsset src="/images/sophiebits.jpeg" alt="Avatar for sophiebits" />
);
export const AvatarDiegohaz = () => (
  <AvatarAsset src="/images/diegohaz.jpeg" alt="Avatar for diegohaz" />
);
export const AvatarRyanflorence = () => (
  <AvatarAsset src="/images/ryanflorence.jpeg" alt="Avatar for ryanflorence" />
);
export const AvatarWillMcGugan = () => (
  <AvatarAsset src="/images/willmcgugan.jpeg" alt="Avatar for willmcgugan" />
);
export const AvatarDanvdk = () => (
  <AvatarAsset src="/images/danvdk.jpeg" alt="Avatar for danvdk" />
);
export const AvatarAcemarke = () => (
  <AvatarAsset src="/images/acemarke.jpeg" alt="Avatar for acemarke" />
);
export const AvatarAlexDotJs = () => (
  <AvatarAsset src="/images/alexdotjs.jpg" alt="Avatar for alexdotjs" />
);
export const AvatarLeeerob = () => (
  <AvatarAsset src="/images/leeerob.jpeg" alt="Avatar for leeerob" />
);
export const AvatarSwyx = () => (
  <AvatarAsset src="/images/swyx.jpeg" alt="Avatar for swyx" />
);
export const AvatarHousecor = () => (
  <AvatarAsset src="/images/housecor.png" alt="Avatar for housecor" />
);
export const AvatarMxstbr = () => (
  <AvatarAsset src="/images/mxstbr.jpg" alt="Avatar for mxstbr" />
);

export const TweetImage = ({ children }: { children: ReactNode }) => (
  <div className="[&>*]:rounded-xl">{children}</div>
);

function TweetIllustration({ src, alt }: { src: string; alt: string }) {
  return <img src={src} alt={alt} loading="lazy" />;
}

export const TannerAndMe = () => (
  <TweetIllustration
    src={withBasePath("/images/FVegS4nXwAQHskN.jpeg")}
    alt="Tanner and me"
  />
);
export const TanStackQueryV5 = () => (
  <TweetIllustration
    src={withBasePath("/images/TanStackQueryV5.png")}
    alt="TanStackQuery v5"
  />
);
export const V5390 = () => (
  <TweetIllustration
    src={withBasePath("/images/v5390.jpeg")}
    alt="New Release v5.39.0"
  />
);
export const SathyaAndMe = () => (
  <TweetIllustration
    src={withBasePath("/images/GP-724-X0AAN_NK.jpeg")}
    alt="Sathya and me"
  />
);
export const ContactDetailQuery = () => (
  <TweetIllustration
    src={withBasePath("/images/Fcnj9l0XEAMnLdV.jpeg")}
    alt="Contact detail query code screenshot"
  />
);
export const SelfieInception = () => (
  <TweetIllustration
    src={withBasePath("/images/FxnXEGVX0AEeYAf.jpeg")}
    alt="selfie inception"
  />
);
export const QueryGGImage = () => (
  <TweetIllustration
    src={withBasePath("/images/eC_qCxd4.jpeg")}
    alt="Query.gg - The official React Query course"
  />
);
export const ADayOnTheOrangeSite = () => (
  <TweetIllustration
    src={withBasePath(
      "/images/bafkreiazq5owsx6neqzgvjquwenob6su4kgd7zzl3z5ytfq4oywwjwbis4.jpg",
    )}
    alt="Unique visitor stats outlier"
  />
);
export const CynicsVsBuilders = () => (
  <TweetIllustration
    src={withBasePath("/images/EXx9RHYVAAUgegZ.jpeg")}
    alt="Cynics vs Builders"
  />
);
export const SeparationOfConcerns = () => (
  <TweetIllustration
    src={withBasePath("/images/separation_of_concerns.jpeg")}
    alt="Separation of concerns"
  />
);
export const UseEvent = () => (
  <TweetIllustration
    src={withBasePath("/images/FSJNvbJWUAIVEGB.jpeg")}
    alt="useEvent code screenshot"
  />
);

function normalizeType(type: TweetType): "x" | "bsky" {
  return type === "bsky" ? "bsky" : "x";
}

export default function Tweet({
  tweetId,
  handle,
  name,
  avatar,
  children,
  date,
  type = "x",
}: Props) {
  const normalizedType = normalizeType(type);
  const href =
    normalizedType === "bsky"
      ? `https://bsky.app/profile/${handle}/post/${tweetId}`
      : `https://x.com/${handle}/status/${tweetId}`;
  const dateValue = date instanceof Date ? date : new Date(date);
  const avatarElement = isValidElement(avatar) ? avatar : null;

  return (
    <a
      className="not-prose text-text no-underline hover:no-underline hover:text-text block w-full max-w-[550px] my-4 relative rounded-lg p-6 text-base md:text-lg border border-border transition-colors hover:bg-[var(--color-ic-bg)]"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="absolute right-4 top-4">
        {normalizedType === "bsky" ? <BskyIcon /> : <TwitterIcon />}
      </div>
      <div className="flex">
        <Avatar>
          {avatarElement ?? <AvatarImage handle={handle} name={name} />}
        </Avatar>
        <div>
          <div className="font-semibold">{name}</div>
          <div className="text-xs md:text-base leading-3 md:leading-4 text-faded">
            @{handle}
          </div>
        </div>
      </div>
      <div className="my-4">{children}</div>
      <div className="text-xs md:text-base text-faded">
        -{" "}
        {Intl.DateTimeFormat(undefined, { dateStyle: "medium" }).format(
          dateValue,
        )}
      </div>
    </a>
  );
}
