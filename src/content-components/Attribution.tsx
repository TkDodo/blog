import type { ReactNode } from "react";
import SmallCentered from "./SmallCentered";

type Props = {
  name?: string;
  url?: string;
  prefix?: string;
  children?: ReactNode;
};

export default function Attribution({
  name,
  url,
  prefix = "Photo by",
  children,
}: Props) {
  if (!name && !children) return null;

  return (
    <SmallCentered>
      {prefix}{" "}
      {url ? (
        <a href={url} target="_blank" rel="noreferrer noopener">
          {name}
        </a>
      ) : (
        name
      )}
      {children}
    </SmallCentered>
  );
}
