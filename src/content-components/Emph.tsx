import type { ReactNode } from "react";
import type { ColorVariant } from "./color-variant";

type Props = {
  color?: ColorVariant;
  children?: ReactNode;
};

export default function Emph({ color = "primary", children }: Props) {
  const colorClass =
    color === "danger"
      ? "text-danger"
      : color === "warning"
        ? "text-warning"
        : "text-primary";

  return (
    <span className={`tracking-[0.05em] font-bold ${colorClass}`}>
      {children}
    </span>
  );
}
