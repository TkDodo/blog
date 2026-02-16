import type { ImgHTMLAttributes } from "react";

type Props = ImgHTMLAttributes<HTMLImageElement> & {
  postBasePath: string;
};

const postImages = import.meta.glob(
  "/content/posts/**/*.{avif,gif,jpeg,jpg,png,svg,webp}",
  {
    eager: true,
    import: "default",
  },
) as Record<string, string>;

function isRelativeSrc(src: string): boolean {
  return !/^(?:[a-z]+:|\/|#|data:)/i.test(src);
}

export default function MdxImage({ postBasePath, src, ...rest }: Props) {
  const rawSrc = typeof src === "string" ? src : "";

  if (!rawSrc || !isRelativeSrc(rawSrc) || !postBasePath) {
    return <img {...rest} src={src} />;
  }

  const normalized = rawSrc.replace(/^\.?\//, "");
  const key = `/${postBasePath}${normalized}`;
  const resolvedSrc = postImages[key] ?? rawSrc;

  return <img {...rest} src={resolvedSrc} />;
}

export function createPostImageComponent(postBasePath: string) {
  return function PostImage(props: ImgHTMLAttributes<HTMLImageElement>) {
    return <MdxImage {...props} postBasePath={postBasePath} />;
  };
}
