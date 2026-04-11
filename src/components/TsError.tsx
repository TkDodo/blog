import type { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

export function TsError({ children }: Props) {
  return (
    <aside className="not-prose border-danger bg-border text-text my-5 overflow-hidden rounded-lg border-l-[6px] p-4 dark:border-red-300 dark:bg-red-950/25">
      <code className="text-danger block font-mono text-[0.9em] leading-relaxed whitespace-pre-wrap dark:text-red-200">
        {children}
      </code>
    </aside>
  );
}
