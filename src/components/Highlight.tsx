import type { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

export default function Highlight({ children }: Props) {
  return (
    <div className="text-center text-[0.95em] px-4 py-[0.6rem] rounded-lg border-2 border-primary shadow-[0_0_8px_rgba(0,0,0,0.125)]">
      <strong className="tracking-[0.05em] text-primary">{children}</strong>
    </div>
  );
}
