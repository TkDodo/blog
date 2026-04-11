import type { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

export default function Highlight({ children }: Props) {
  return (
    <div className="relative my-8 overflow-hidden rounded-lg border border-[color:color-mix(in_srgb,var(--color-primary)_22%,var(--color-border))] bg-[radial-gradient(circle_at_top_left,_color-mix(in_srgb,var(--color-primary)_18%,transparent),transparent_34%),linear-gradient(145deg,color-mix(in_srgb,var(--color-bg)_82%,white)_0%,color-mix(in_srgb,var(--color-bg)_94%,var(--color-primary)_6%)_100%)] px-5 py-5 text-center shadow-[0_18px_45px_-30px_rgba(0,0,0,0.55)] sm:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-8 top-0 h-px bg-[linear-gradient(90deg,transparent,color-mix(in_srgb,var(--color-primary)_55%,transparent),transparent)]"
      />
      <div
        aria-hidden="true"
        className="absolute top-1/2 -left-10 h-28 w-28 -translate-y-1/2 rounded-full bg-[color:color-mix(in_srgb,var(--color-primary)_16%,transparent)] blur-3xl"
      />
      <div className="text-highlight [&_em]:text-primary [&_strong]:text-primary relative text-[1.02em] leading-relaxed font-semibold text-balance [&_p]:my-0 [&>:first-child]:mt-0 [&>:last-child]:mb-0">
        {children}
      </div>
    </div>
  );
}
