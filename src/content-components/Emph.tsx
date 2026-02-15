import type { CSSProperties, ReactNode } from "react";

type Props = {
  color?: string;
  children?: ReactNode;
};

export default function Emph({ color, children }: Props) {
  const style: CSSProperties = {
    letterSpacing: "0.05em",
    fontWeight: 700,
    color: color ?? "var(--color-primary)",
  };

  return <span style={style}>{children}</span>;
}
