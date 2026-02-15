import type { ReactNode } from "react";

type Props = {
  color?: string;
  children?: ReactNode;
};

export default function Emph({ color, children }: Props) {
  const colorClass =
    color === "danger" || color === "var(--red)"
      ? "text-danger"
      : color === "warning" || color === "var(--theme-ui-colors-warning)"
        ? "text-warning"
        : "text-primary";

  return <span className={`tracking-[0.05em] font-bold ${colorClass}`}>{children}</span>;
}
