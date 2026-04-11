import type { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

export default function SmallCentered({ children }: Props) {
  return (
    <small className="not-prose text-faded -mt-10 mb-4 block text-center text-sm leading-relaxed md:text-base">
      {children}
    </small>
  );
}
