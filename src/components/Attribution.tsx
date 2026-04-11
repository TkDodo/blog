import type { ReactNode } from "react";
import SmallCentered from "./SmallCentered";

interface Props {
  name?: string;
  url?: string;
  prefix?: string;
  children?: ReactNode;
}

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
        <a
          href={url}
          target="_blank"
          rel="noreferrer noopener"
          className="text-subtle hover:text-subtle font-normal hover:underline"
        >
          {name}
        </a>
      ) : (
        name
      )}
      {children}
    </SmallCentered>
  );
}
