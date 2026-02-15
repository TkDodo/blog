import type { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export function TsError({ children }: Props) {
  return (
    <pre className="text-[#b00020] whitespace-pre-wrap">
      <code>{children}</code>
    </pre>
  );
}
