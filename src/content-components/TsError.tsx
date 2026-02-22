import type { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

export function TsError({ children }: Props) {
  return (
    <aside className="not-prose my-5 overflow-hidden rounded-lg border-l-[6px] border-danger bg-border p-4 text-text dark:border-red-300 dark:bg-red-950/25">
      <code className="block whitespace-pre-wrap font-mono text-[0.9em] leading-relaxed text-danger dark:text-red-200">
        {children}
      </code>
    </aside>
  );
}
