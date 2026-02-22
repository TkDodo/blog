import type { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

export default function SmallCentered({ children }: Props) {
  return (
    <small className="not-prose block text-center -mt-10 mb-4 text-faded text-sm md:text-base leading-relaxed">
      {children}
    </small>
  );
}
