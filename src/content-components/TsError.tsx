import type { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export function TsError({ children }: Props) {
  return (
    <pre style={{ color: "#b00020", whiteSpace: "pre-wrap" }}>
      <code>{children}</code>
    </pre>
  );
}
