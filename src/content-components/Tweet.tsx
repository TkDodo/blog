import type { ReactNode } from "react";
import { isValidElement } from "react";
import acdliteAvatar from "../assets/avatars/acdlite.jpg";
import acemarkeAvatar from "../assets/avatars/acemarke.jpeg";
import alexdotjsAvatar from "../assets/avatars/alexdotjs.jpg";
import danvdkAvatar from "../assets/avatars/danvdk.jpeg";
import diegohazAvatar from "../assets/avatars/diegohaz.jpeg";
import gabbeVAvatar from "../assets/avatars/GabbeV_.jpg";
import housecorAvatar from "../assets/avatars/housecor.png";
import leeerobAvatar from "../assets/avatars/leeerob.jpeg";
import mattpocockukAvatar from "../assets/avatars/mattpocockuk.jpeg";
import michaelCAvatar from "../assets/avatars/michaelc_1991.jpeg";
import mxstbrAvatar from "../assets/avatars/mxstbr.jpg";
import ralex1993Avatar from "../assets/avatars/ralex1993.jpg";
import ryanflorenceAvatar from "../assets/avatars/ryanflorence.jpeg";
import sathyaAvatar from "../assets/avatars/sathya.jpg";
import sophiebitsAvatar from "../assets/avatars/sophiebits.jpeg";
import swyxAvatar from "../assets/avatars/swyx.jpeg";
import tannerlinsleyAvatar from "../assets/avatars/tannerlinsley.jpeg";
import t3dotggAvatar from "../assets/avatars/theo_twitter.jpg";
import willmcguganAvatar from "../assets/avatars/willmcgugan.jpeg";
import tkdodoAvatar from "../assets/profile.jpg";
import bafkreiaImage from "../assets/tweets/bafkreiazq5owsx6neqzgvjquwenob6su4kgd7zzl3z5ytfq4oywwjwbis4.jpg";
import eCqCxd4Image from "../assets/tweets/eC_qCxd4.jpeg";
import EXx9RHYVAAUgegZImage from "../assets/tweets/EXx9RHYVAAUgegZ.jpeg";
import Fcnj9l0XEAMnLdVImage from "../assets/tweets/Fcnj9l0XEAMnLdV.jpeg";
import FSJNvbJWUAIVEGBImage from "../assets/tweets/FSJNvbJWUAIVEGB.jpeg";
import FVegS4nXwAQHskNImage from "../assets/tweets/FVegS4nXwAQHskN.jpeg";
import FxnXEGVX0AEeYAfImage from "../assets/tweets/FxnXEGVX0AEeYAf.jpeg";
import GP724X0AANNKImage from "../assets/tweets/GP-724-X0AAN_NK.jpeg";
import separationOfConcernsImage from "../assets/tweets/separation_of_concerns.jpeg";
import TanStackQueryV5Image from "../assets/tweets/TanStackQueryV5.png";
import v5390Image from "../assets/tweets/v5390.jpeg";

type TweetType = "x" | "twitter" | "bsky";

interface Props {
  tweetId: string;
  handle: string;
  name: string;
  avatar?: ReactNode;
  children?: ReactNode;
  date: Date | string;
  type?: TweetType;
}

type ImportedImage = { src: string } | string;
const imageSrc = (asset: ImportedImage): string =>
  typeof asset === "string" ? asset : asset.src;

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
  const map: Record<string, ImportedImage> = {
    tkdodo: tkdodoAvatar,
    "tkdodo.eu": tkdodoAvatar,
    "bsky.app/profile/tkdodo.eu": tkdodoAvatar,
    "gsathya.bsky.social": sathyaAvatar,
    gsathya: sathyaAvatar,
    avatar_sophiebits: sophiebitsAvatar,
    sophiebits: sophiebitsAvatar,
    gabbe_v_: gabbeVAvatar,
    acdlite: acdliteAvatar,
    ralex1993: ralex1993Avatar,
    t3dotgg: t3dotggAvatar,
    michaelc_1991: michaelCAvatar,
    mattpocockuk: mattpocockukAvatar,
    tannerlinsley: tannerlinsleyAvatar,
    diegohaz: diegohazAvatar,
    ryanflorence: ryanflorenceAvatar,
    willmcgugan: willmcguganAvatar,
    danvdk: danvdkAvatar,
    acemarke: acemarkeAvatar,
    alexdotjs: alexdotjsAvatar,
    leeerob: leeerobAvatar,
    swyx: swyxAvatar,
    housecor: housecorAvatar,
    mxstbr: mxstbrAvatar,
  };
  const asset = map[key] ?? map[normalized];
  return asset ? imageSrc(asset) : null;
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

const AvatarAsset = ({ src, alt }: { src: ImportedImage; alt: string }) => (
  <img
    className={avatarImageClass}
    src={imageSrc(src)}
    alt={alt}
    loading="lazy"
  />
);

export const AvatarTkDodo = () => (
  <AvatarAsset src={tkdodoAvatar} alt="Avatar for TkDodo" />
);
export const AvatarSathya = () => (
  <AvatarAsset src={sathyaAvatar} alt="Avatar for Satya" />
);
export const AvatarGabbeV_ = () => (
  <AvatarAsset src={gabbeVAvatar} alt="Avatar for GabbeV_" />
);
export const AvatarAcdlite = () => (
  <AvatarAsset src={acdliteAvatar} alt="Avatar for acdlite" />
);
export const AvatarRalex1993 = () => (
  <AvatarAsset src={ralex1993Avatar} alt="Avatar for ralex1993" />
);
export const AvatarT3dotgg = () => (
  <AvatarAsset src={t3dotggAvatar} alt="Avatar for t3dotgg" />
);
export const AvatarMichaelC = () => (
  <AvatarAsset src={michaelCAvatar} alt="Avatar for michaelc_1991" />
);
export const AvatarMattpocockuk = () => (
  <AvatarAsset src={mattpocockukAvatar} alt="Avatar for mattpocockuk" />
);
export const AvatarTannerlinsley = () => (
  <AvatarAsset src={tannerlinsleyAvatar} alt="Avatar for tannerlinsley" />
);
export const AvatarSophiebits = () => (
  <AvatarAsset src={sophiebitsAvatar} alt="Avatar for sophiebits" />
);
export const AvatarDiegohaz = () => (
  <AvatarAsset src={diegohazAvatar} alt="Avatar for diegohaz" />
);
export const AvatarRyanflorence = () => (
  <AvatarAsset src={ryanflorenceAvatar} alt="Avatar for ryanflorence" />
);
export const AvatarWillMcGugan = () => (
  <AvatarAsset src={willmcguganAvatar} alt="Avatar for willmcgugan" />
);
export const AvatarDanvdk = () => (
  <AvatarAsset src={danvdkAvatar} alt="Avatar for danvdk" />
);
export const AvatarAcemarke = () => (
  <AvatarAsset src={acemarkeAvatar} alt="Avatar for acemarke" />
);
export const AvatarAlexDotJs = () => (
  <AvatarAsset src={alexdotjsAvatar} alt="Avatar for alexdotjs" />
);
export const AvatarLeeerob = () => (
  <AvatarAsset src={leeerobAvatar} alt="Avatar for leeerob" />
);
export const AvatarSwyx = () => (
  <AvatarAsset src={swyxAvatar} alt="Avatar for swyx" />
);
export const AvatarHousecor = () => (
  <AvatarAsset src={housecorAvatar} alt="Avatar for housecor" />
);
export const AvatarMxstbr = () => (
  <AvatarAsset src={mxstbrAvatar} alt="Avatar for mxstbr" />
);

export const TweetImage = ({ children }: { children: ReactNode }) => (
  <div className="[&>*]:rounded-xl">{children}</div>
);

function TweetIllustration({ src, alt }: { src: ImportedImage; alt: string }) {
  return <img src={imageSrc(src)} alt={alt} loading="lazy" />;
}

export const TannerAndMe = () => (
  <TweetIllustration src={FVegS4nXwAQHskNImage} alt="Tanner and me" />
);
export const TanStackQueryV5 = () => (
  <TweetIllustration src={TanStackQueryV5Image} alt="TanStackQuery v5" />
);
export const V5390 = () => (
  <TweetIllustration src={v5390Image} alt="New Release v5.39.0" />
);
export const SathyaAndMe = () => (
  <TweetIllustration src={GP724X0AANNKImage} alt="Sathya and me" />
);
export const ContactDetailQuery = () => (
  <TweetIllustration
    src={Fcnj9l0XEAMnLdVImage}
    alt="Contact detail query code screenshot"
  />
);
export const SelfieInception = () => (
  <TweetIllustration src={FxnXEGVX0AEeYAfImage} alt="selfie inception" />
);
export const QueryGGImage = () => (
  <TweetIllustration
    src={eCqCxd4Image}
    alt="Query.gg - The official React Query course"
  />
);
export const ADayOnTheOrangeSite = () => (
  <TweetIllustration src={bafkreiaImage} alt="Unique visitor stats outlier" />
);
export const CynicsVsBuilders = () => (
  <TweetIllustration src={EXx9RHYVAAUgegZImage} alt="Cynics vs Builders" />
);
export const SeparationOfConcerns = () => (
  <TweetIllustration
    src={separationOfConcernsImage}
    alt="Separation of concerns"
  />
);
export const UseEvent = () => (
  <TweetIllustration
    src={FSJNvbJWUAIVEGBImage}
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
      <div className="my-4 leading-normal [&_p]:m-0 [&_p]:leading-normal [&_p+p]:mt-0 [&_br]:leading-normal">
        {children}
      </div>
      <div className="text-xs md:text-base text-faded">
        -{" "}
        {Intl.DateTimeFormat(undefined, { dateStyle: "medium" }).format(
          dateValue,
        )}
      </div>
    </a>
  );
}
