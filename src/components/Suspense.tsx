import type { ReactNode } from "react";

export default function Suspense({ children }: { children?: ReactNode }) {
  return <>{children}</>;
}
