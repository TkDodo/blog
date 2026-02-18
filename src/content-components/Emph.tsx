import type { ReactNode } from "react";
import type { ColorVariant } from "./color-variant";

type Props = {
  color?: ColorVariant;
  children?: ReactNode;
};

export default function Emph({ color = "primary", children }: Props) {
  const styleClass =
    color === "danger"
      ? "text-danger bg-danger/12"
      : color === "warning"
        ? "text-warning bg-warning/12"
        : "text-primary bg-primary/12";

  return (
    <span
      className={`inline rounded-[0.28em] px-[0.28em] py-[0.08em] font-semibold not-italic tracking-normal ${styleClass}`}
    >
      {children}
    </span>
  );
}
